<?php

namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\helpers\ArrayHelper;
use sammaye\mailchimp\Mailchimp;
use Abraham\TwitterOAuth\TwitterOAuth;
use Facebook\FacebookSession,
    Facebook\FacebookRequest,
    CURLFile;

use app\models;

use app\hryvna\Dashboard;
use app\hryvna\Storyteller;
use app\hryvna\Painter;

class PublishController extends Controller
{

    /**
     * This action is to generate and replace HTML page and JS data
     */
    public function actionSite()
    {

        $currencies = ArrayHelper::map(
            models\SiteCurrency::find()->orderBy('rate')->all(),
            'currency_id',
            'currency'
        );

        $base_currency_id = reset(array_keys($currencies));

        $dashboard = new Dashboard(
            array_keys($currencies),
            Dashboard::FLAG_ROUND_TO_CENTS | Dashboard::FLAG_CALCULATE_DIFF
        );

        $params = [
            'today'     => new \DateTime(),
            'currencies' => $currencies,
            'base_currency_id' => $base_currency_id,
            'metrics'   => empty(YII_DEBUG),
            'review'    => $day_review = $dashboard->getAvg(),
            'banks_exchanges' => $banks_days = $dashboard->getBanksHistory(10),
            'banks_names' =>
                $banks_names = ArrayHelper::map(models\Bank::find()->orderBy([
                    new \yii\db\Expression('FIELD(rate, 0), rate, id'),
                ])->all(), 'id', 'title'),
            'bank_types' =>
                $banks_types = ArrayHelper::map(models\BankType::find()->orderBy('rate')->limit(4)->all(), 'alias', 'title'),
            'current_year' => date('Y'),
        ];

        // generate days

        $periods = [
            'week' => ['delta' => 1, 'story_one' => 'останній тиждень', 'story_two' => 'десять днів'],
            'month' => ['delta' => 3, 'story_one' => 'останній місяць', 'story_two' => 'тридцять днів'],
            'kvartal' => ['delta' => 9, 'story_one' => 'останній квартал', 'story_two' => "дев'яносто днів"],
            'halfyear' => ['delta' => 18, 'story_one' => 'останні півроку', 'story_two' => 'сто вісімдесят днів'],
            'year' => ['delta' => 36, 'story_one' => 'останній рік', 'story_two' => 'триста шістдесят днів'],
        ];

        $data_tank = [];
        $stories = [];

        foreach ($periods as $period_code => $period_info) {
                $data_tank[$period_code] = $dashboard->getAvgHistory(10, -$period_info['delta']);

                foreach ($currencies as $currency) {
                    $story = Storyteller::describePeriod($currency, ...array_values($period_info));
                    $stories[$currency->id][$period_code] = $story;
                }

        }

        $params['days'] = $data_tank;
        $params['stories'] = $stories;

        // generate exchange rates table

        $exchangerBoard = new Dashboard(array_keys($currencies));

        $converter_exchanges_banks = end($exchangerBoard->getBanksHistory(1));
        $converter_exchanges_avg = $exchangerBoard->getAvg();

        $converter_exchanges = [];

        foreach ($currencies as $currency_id => $currency) {
            foreach ($converter_exchanges_banks[$currency_id] as $bank_id => $bank_day) {

                $title = $banks_names[$bank_id];

                if ($bank_id == 1) {
                    $bank_day = $converter_exchanges_avg[$currency_id]['commercial'];
                    $title = 'Середній банковий курс';
                }

                $bank = [
                    'buy' => $bank_day['buy']['value'],
                    'sale' => $bank_day['sale']['value'],
                ];

                $converter_exchanges[$bank_id]['values'][$currency_id] = $bank;
                $converter_exchanges[$bank_id]['title'] = $title;

            }

        }

        ksort($converter_exchanges);

        $params['converter_exchanges'] = $converter_exchanges;

        // render site
        $site = $this->view->render('@app/views/templates/site.tpl', $params);
        $js = $this->view->render('@app/views/templates/js.tpl', $params);

        // save generated files to public dir
        echo (file_put_contents(Yii::$app->params['site']['index'], $site) . PHP_EOL);
        echo (file_put_contents(Yii::$app->params['site']['js'], $js) . PHP_EOL);

    }

    /**
     * This action is to generate and send email campaign
     */
    public function actionEmail()
    {
        $base_currency = models\SiteCurrency::find()->orderBy('rate')->one()->currency;
        $dashboard = new Dashboard([$base_currency->id], Dashboard::FLAG_ROUND_TO_CENTS | Dashboard::FLAG_CALCULATE_DIFF);

        $params = [
            'today'     => new \DateTime(),
            'review'    => $dashboard->getAvg()[$base_currency->id],
            'story'     => Storyteller::describePeriod($base_currency, 1, 'останній тиждень', 'десять днів')
        ];

        $probability = rand(0, 100);

        if ($probability > 95) {
            $subject = 'І знову про курс гривні!';
        }
        elseif ($probability > 90) {
            $subject = 'Який курс сьогодні?';
        }
        else {
            $subject = Storyteller::describeDayChanges($base_currency);
        }

        $letter = $this->view->render('@app/views/mail/campaign.tpl', $params);

        $chimp = new Mailchimp(['apikey' => Yii::$app->params['mailchimp']['apikey']]);

        $campaign = $chimp->campaigns->create(
            'regular',
            array(
                'list_id'       => Yii::$app->params['mailchimp']['list_id'],
                'subject'       => $subject,
                'from_email'    => Yii::$app->params['mailchimp']['from_email'],
                'from_name'     => Yii::$app->params['mailchimp']['from_name']
            ),
            array(
                'html' => $letter
            )
        );

        echo ("Campaign created" . PHP_EOL);

        if (empty(YII_DEBUG)) {

            $result = $chimp->campaigns->send($campaign['id']);

            if (!empty($result['complete'])) {
                echo ("Campaign $subject was successfully sent" . PHP_EOL);
            }
            else {
                throw new \Exception('There was a problem with sending email campaign');

            }

        }
    }

    /**
     * This action is to generate and publish social campaigns
     */
    public function actionSocial()
    {

        // prepare data

        $currencies = ArrayHelper::map(
            models\SiteCurrency::find()->orderBy('rate')->all(),
            'currency_id',
            'currency'
        );

        $base_currency = reset($currencies);

        $dashboard = new Dashboard([$base_currency->id], Dashboard::FLAG_ROUND_TO_CENTS | Dashboard::FLAG_CALCULATE_DIFF);
        $avgs = $dashboard->getAvg()[$base_currency->id]['avg']['avg'];


        $avg = sprintf('%0.2f', $avgs['value']);
        $diff = sprintf('%0.2f', $avgs['diff']);

        if ($diff > 0) {
            $diff = '+' . $diff;
        }

        // draw cash and save to file

        $cash_destination = Yii::getAlias('@runtime') . '/cash.jpg';
        $cash = Painter::drawCash($avg);
        imagejpeg($cash, $cash_destination);

        echo ('Cash image created' . PHP_EOL);

        // twitter

        $tweet = Storyteller::tweet($base_currency);
        echo ('Tweet created:' . PHP_EOL);
        echo ($tweet . PHP_EOL);

        if (empty(YII_DEBUG)) {

            $twitter = new TwitterOAuth(
                Yii::$app->params['twitter']['consumer_key'],
                Yii::$app->params['twitter']['consumer_secret'],
                Yii::$app->params['twitter']['oauth_access_token'],
                Yii::$app->params['twitter']['oauth_access_token_secret']
            );

            $media = $twitter->upload('media/upload', [
                'media' => $cash_destination
            ]);

            $result = $twitter->post('statuses/update', [
                'status' => $tweet,
                'media_ids' => $media->media_id_string,
            ]);

            print_r($result);
        }

        // facebook

        $facebook_post = implode(PHP_EOL . PHP_EOL, [
            Storyteller::describeDayChanges($base_currency) . ($diff == 0 ? '' : " ($diff)") .  '.',
            Storyteller::tellLongStory(...$currencies),
            'Детальніше про курс валют, як завжди – на Гривні Тудей: http://hryvna.today'
        ]);

        echo ('Facebook post created:' . PHP_EOL);
        echo ($facebook_post . PHP_EOL);

        if (empty(YII_DEBUG)) {

            FacebookSession::setDefaultApplication(
                Yii::$app->params['facebook']['application_id'],
                Yii::$app->params['facebook']['application_secret']
            );

            $session = new FacebookSession(Yii::$app->params['facebook']['access_token']);

            $request = new FacebookRequest(
                $session,
                'POST',
                '/' . Yii::$app->params['facebook']['page_id'] . '/photos',
                array(
                    'caption' => $facebook_post,
                    'source' => new CURLFile($cash_destination)
                )
            );

            $response = $request->execute();
            $graphObject = $response->getGraphObject();

            print_r($graphObject);

        }

    }

}

<?php

namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\helpers\ArrayHelper;
use sammaye\mailchimp\Mailchimp;
use TwitterAPIExchange;
use Facebook\FacebookSession,
    Facebook\FacebookRequest,
    CURLFile;

use app\models;

use app\hryvna\Storyteller;
use app\hryvna\Painter;

class PublishController extends Controller
{

    /**
     * This action is to generate and replace HTML page and JS data
     */
    public function actionSite()
    {

        $params = [
            'today'     => new \DateTime(),
            'metrics'   => empty(YII_DEBUG),
            'review'    => $day_review = Yii::$app->hryvna->getAvg(),
            'banks_exchanges' => $banks_days = Yii::$app->hryvna->getBankDays(null, -10),
            'banks_names' => $banks_names = ArrayHelper::map(models\Bank::find()->orderBy([
                new \yii\db\Expression('FIELD(rate, 0), rate, id'),
            ])->all(), 'id', 'title'), //@todo add right sorting
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

        foreach ($periods as $period_code => $period_info) {
                $data_tank[$period_code] = Storyteller::describePeriod($period_info['delta'], $period_info['story_one'], $period_info['story_two']);
        }

        $params['days'] = $data_tank;

        // generate exchange rates table

        $converter_exchanges = end($banks_days);

        foreach ($converter_exchanges as $bank_id => $exchange) {

            // change NBU to avg exchange rates
            if ($bank_id == 1) {
                $exchange['dollar_buy'] = ['value' => $day_review['dollar_buy_banks']['value']];
                $exchange['dollar_sale'] = ['value' => $day_review['dollar_sale_banks']['value']];
                $exchange['euro_buy'] = ['value' => $day_review['euro_buy_banks']['value']];
                $exchange['euro_sale'] = ['value' => $day_review['euro_sale_banks']['value']];
                $exchange['title'] = 'Середній банковий курс';
            }
            else {
                $exchange['title'] = $banks_names[$bank_id];
            }

            $converter_exchanges[$bank_id] = $exchange;

        }

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

        $params = [
            'today'     => new \DateTime(),
            'review'    => $day_review = Yii::$app->hryvna->getAvg(),
            'story'     => Storyteller::describePeriod(1, 'останній тиждень', 'десять днів')['dollar']['story']
        ];

        $probability = rand(0, 100);

        if ($probability > 95) {
            $subject = 'І знову про курс гривні!';
        }
        elseif ($probability > 90) {
            $subject = 'Який курс сьогодні?';
        }
        else {
            $subject = Storyteller::describeDayChanges();
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

        $day_review = Yii::$app->hryvna->getAvg();
        $avg = $day_review['dollar_avg']['value'];
        $diff = round($day_review['dollar_avg']['diff'], 2);
        if ($diff > 0) {
            $diff = '+' . $diff;
        }

        // draw cash and save to file

        $cash_destination = Yii::getAlias('@runtime') . '/cash.jpg';
        $cash = Painter::drawCash($avg);
        imagejpeg($cash, $cash_destination);

        echo ('Cash image created' . PHP_EOL);

        // twitter

        $tweet = Storyteller::tweet();
        echo ('Tweet created:' . PHP_EOL);
        echo ($tweet . PHP_EOL);

        if (empty(YII_DEBUG)) {

            $twitter = new TwitterAPIExchange([
                'oauth_access_token'        => Yii::$app->params['twitter']['oauth_access_token'],
                'oauth_access_token_secret' => Yii::$app->params['twitter']['oauth_access_token_secret'],
                'consumer_key'              => Yii::$app->params['twitter']['consumer_key'],
                'consumer_secret'           => Yii::$app->params['twitter']['consumer_secret']
            ]);

            $json = $twitter->buildOauth('https://api.twitter.com/1.1/statuses/update_with_media.json', 'POST')
                ->setPostfields([
                    'status'    => $tweet,
                    'media[]'   => '@' . $cash_destination,
                ])
                ->performRequest();

            $json = json_decode($json);
            print_r($json);
        }

        // facebook

        $facebook_post = implode(PHP_EOL . PHP_EOL, [
            Storyteller::describeDayChanges() . ($diff == 0 ? '' : " ($diff)") .  '.',
            Storyteller::tellLongStory(),
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

<?php

namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\helpers\ArrayHelper;

use app\models;

use app\hryvna\Storyteller;

class PublishController extends Controller
{

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
}

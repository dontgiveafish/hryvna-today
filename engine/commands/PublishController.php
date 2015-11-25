<?php

namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\helpers\ArrayHelper;

use app\models;

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

        $datas_tank = array();

        $periods = array(
            'week' => array('delta' => 1, 'story_one' => 'останній тиждень', 'story_two' => 'десять днів'),
            'month' => array('delta' => 3, 'story_one' => 'останній місяць', 'story_two' => 'тридцять днів'),
            'kvartal' => array('delta' => 9, 'story_one' => 'останній квартал', 'story_two' => "дев'яносто днів"),
            'halfyear' => array('delta' => 18, 'story_one' => 'останні півроку', 'story_two' => 'сто вісімдесят днів'),
            'year' => array('delta' => 36, 'story_one' => 'останній рік', 'story_two' => 'триста шістдесят днів'),
        );

        function sklonen($n,$s1,$s2,$s3){
            $m = $n % 10;
            $j = $n % 100;

            if ($n == 1) $n = '';

            if($m==0 || $m>=5 || ($j>=10 && $j<=20)) return $n.' '.$s3;
            if($m>=2 && $m<=4) return $n.' '.$s2;
            return $n.' '.$s1;
        }

        function formatDate($date) {

            $date = \DateTime::createFromFormat('Y-m-d', $date);

            $day = $date->format('d');
            $month = $date->format('m');

            switch ($month) {
                case '01': $month = 'січня'; break;
                case '02': $month = 'лютого'; break;
                case '03': $month = 'березня'; break;
                case '04': $month = 'квітня'; break;
                case '05': $month = 'травня'; break;
                case '06': $month = 'червня'; break;
                case '07': $month = 'липня'; break;
                case '08': $month = 'серпня'; break;
                case '09': $month = 'вересня'; break;
                case '10': $month = 'жовтня'; break;
                case '11': $month = 'листопада'; break;
                case '12': $month = 'грудня'; break;
            }

            return "$day $month";

        }

        foreach ($periods as $period_code => $period_info) {

            $days = Yii::$app->hryvna->getDays(null, -10 * $period_info['delta'], 1);

            foreach (array('dollar' => 'долар', 'euro' => 'євро') as $currency_code => $currency_title) {

                foreach ($days as $i => $day) {

                    $avg_rounded = $day[$currency_code.'_avg_rounded'];

                    if ($i == 0) {
                        $min = $max = $first = $avg_rounded;
                        $min_date = $max_date = $day['date'];
                    }
                    if ($day['dollar_avg'] > $max) {
                        $max = $avg_rounded;
                        $max_date = $day['date'];
                    }
                    if ($day['dollar_avg'] < $min) {
                        $min = $avg_rounded;
                        $min_date = $day['date'];
                    }
                    if (!next($days)) $last = $avg_rounded;

                }

                $story = "За $period_info[story_one] <strong>гривня ";

                if ($first > $last) { $story .= 'зміцнилась'; }
                elseif ($first < $last) { $story .= 'впала в ціні'; }
                else { $story .= 'є стабільною'; }

                $story .= '</strong>';

                if ($period_info['delta'] == 1) $story .= " і сьогодні один $currency_title коштує приблизно $last&nbsp;гривень";

                $story .= '. ';

                $diff = round(($last - $first) / count($days), 2) * 100;
                $diff_story = ($diff >= 0 ? 'плюс' : 'мінус') . ' ' . sklonen(abs($diff), 'копійку', 'копійки', 'копійок');

                $story .= "Середнє коливання за $period_info[story_two] – <span style='white-space:nowrap;'>$diff_story</span> у проміжку від $min до $max&nbsp;гривень за $currency_title.";

                if ($period_info['delta'] != 1) {
                    $story .= ' Мінімум було досягнуто '. formatDate($min_date). ', а максимум – '. formatDate($max_date) .'.';

                }

                $selected_days = array();
                for ($i = 9; $i >= 0; --$i) {
                    $day =  count($days) - 1 - $period_info['delta'] * $i;
                    $selected_days[] = $days[$day];
                }

                $datas_tank[$period_code][$currency_code] = [
                    'tank' => $selected_days,
                    'story' => $story
                ];

            }

        }

        $params['days'] = $datas_tank;

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
                $exchange['title'] = $banks_names[$bank_id];//$banks_days['banks'][$bank_id]['title'];
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

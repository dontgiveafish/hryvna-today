<?php

namespace app\hryvna;

use Yii;

class Storyteller
{
    public static function describePeriod($delta, $story_one, $story_two)
    {
        $days = Yii::$app->hryvna->getDays(null, -10 * $delta, 1);

        $result = [];

        foreach (['dollar' => 'долар', 'euro' => 'євро'] as $currency_code => $currency_title) {

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

            $story = "За $story_one <strong>гривня ";

            if ($first > $last) { $story .= 'зміцнилась'; }
            elseif ($first < $last) { $story .= 'впала в ціні'; }
            else { $story .= 'є стабільною'; }

            $story .= '</strong>';

            if ($delta == 1) $story .= " і сьогодні один $currency_title коштує приблизно $last&nbsp;гривень";

            $story .= '. ';

            $diff = round(($last - $first) / count($days), 2) * 100;
            $diff_story = ($diff >= 0 ? 'плюс' : 'мінус') . ' ' . self::sklonen(abs($diff), 'копійку', 'копійки', 'копійок');

            $story .= "Середнє коливання за $story_two – <span style='white-space:nowrap;'>$diff_story</span> у проміжку від $min до $max&nbsp;гривень за $currency_title.";

            if ($delta != 1) {
                $story .= ' Мінімум було досягнуто '. self::formatDate($min_date). ', а максимум – '. self::formatDate($max_date) .'.';
            }

            $selected_days = [];
            for ($i = 9; $i >= 0; --$i) {
                $day =  count($days) - 1 - $delta * $i;
                $selected_days[] = $days[$day];
            }

            $result[$currency_code] = [
                'tank' => $selected_days,
                'story' => $story
            ];

        }

        return $result;

    }


    /**
     * Format date
     *
     * @param \DateTime $date
     * @param bool Use random way to format
     * @return string
     */
    public static function formatDate($date, $random_way = false)
    {
        // in a case of backward compatibility
        // @todo Datetime only
        if (!$date instanceof \DateTime) {
            $date = \DateTime::createFromFormat('Y-m-d', $date);
        }

        // list of closures of ways to say about date

        $ways_to_say = [

            // 7 february
            function() use ($date) {
                $day = $date->format('d');
                $month = Yii::$app->formatter->asDate($date, 'MMMM');

                return "$day $month";
            },

            // this friday
            function() use ($date) {
                switch ($date->format('D')) {
                    case 'Mon': $day = 'понеділок'; break;
                    case 'Tue': $day = 'вівторок'; break;
                    case 'Wed': $day = 'середу'; break;
                    case 'Thu': $day = 'четвер'; break;
                    case 'Fri': $day = 'п\'ятницю'; break;
                    case 'Sat': $day = 'суботу'; break;
                    case 'Sun': $day = 'неділю'; break;
                };

                return "У $day";
            },
        ];

        // return default way
        if (!$random_way) {
            return $ways_to_say[0]();
        }

        // add extra day if date is today
        $now = new \DateTime();
        $interval = $now->diff($date);
        if ($interval->days == 0) {
            $ways_to_say[] = function() {
                $variants  = ['Сьогодні', 'Зараз'];
                return $variants[array_rand($variants)];
            };
        }

        // return random way
        return $ways_to_say[array_rand($ways_to_say)]();
    }

    /**
     * Generate plural forms
     * @todo change to Yii::t when ICU will fix bug in current version
     *
     * @param int $n Count
     * @param string $s1 First form
     * @param string $s2 Second form
     * @param string $s3 Third form
     * @return string Resulted plural form
     */
    private static function sklonen($n, $s1, $s2, $s3)
    {
        $m = $n % 10;
        $j = $n % 100;

        if ($n == 1) $n = '';

        if($m==0 || $m>=5 || ($j>=10 && $j<=20)) return $n.' '.$s3;
        if($m>=2 && $m<=4) return $n.' '.$s2;
        return $n.' '.$s1;
    }
}
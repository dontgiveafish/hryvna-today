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

    public static function describeDayChanges()
    {
        $today = new \DateTime();
        $yesterday = (new \DateTime())->modify('-1 day');

        $avg = Yii::$app->hryvna->getAvg($today);
        $avg_y = Yii::$app->hryvna->getAvg($yesterday);

        if (empty($avg['dollar_avg']) || empty($avg_y['dollar_avg'])) {
            throw new \Exception('no avg');
        }

        $day_diff = round($avg['dollar_avg']['value'] - $avg_y['dollar_avg']['value'], 2) * 100;

        $say = self::formatDate(new \DateTime(), true) . ' гривня ';

        if ($day_diff == 0) {
            $frases = array('залишається стабільною', 'не змінилась у ціні');
        }
        elseif (abs($day_diff) < 15) {
            $frases = array('незначно', 'трохи', 'дещо');
        }
        elseif (abs($day_diff) < 50) {
            $frases = array('помітно', 'досить відчутно');
        }
        else {
            $frases = array('сильно', 'різко', 'стрімко');
        }

        $say .= $frases[array_rand($frases)];

        if ($day_diff > 0) {
            $frases = array('впала', 'втратила вартість', 'здешевшала');
        }
        elseif ($day_diff < 0) {
            $frases = array('зміцнилась', 'зросла', 'подорожчала');
        }

        if ($day_diff != 0) {
            $say .= ' ' . $frases[array_rand($frases)];
        }

        return $say;
    }

    public static function tweet() {
        $today = new \DateTime();
        $yesterday = (new \DateTime())->modify('-1 day');

        $avg = Yii::$app->hryvna->getAvg($today);
        $avg_y = Yii::$app->hryvna->getAvg($yesterday);

        if (empty($avg['dollar_avg']) || empty($avg_y['dollar_avg'])) {
            throw new \Exception('no avg');
        }

        $avg_rounded = round($avg['dollar_avg']['value'], 2);
        $day_diff = round($avg['dollar_avg']['value'] - $avg_y['dollar_avg']['value'], 2);

        if ($day_diff == 0) $say_day_diff = '(без змін)';
        else if ($day_diff < 0) $say_day_diff = '('.sprintf('%0.2f', $day_diff).')';
        else if ($day_diff > 0) $say_day_diff = '(+'.sprintf('%0.2f', $day_diff).')';

        $hashtags = ['долар', 'гривня', 'курс', 'курсгривні', 'курсвалют', 'валюта'];

        $say_story = [
            function ($K) { return 'середня ціна '. self::sklonen($K, 'долару', 'доларів', 'доларів'); },
            function ($K) { return self::sklonen($K, 'долар коштує', 'долари коштують', 'доларів коштують'); },
            function ($K) { return 'за ' . self::sklonen($K, 'долар', 'долари', 'доларів') . ' дають'; },
            function ($K) { return self::sklonen($K, 'долар', 'долари', 'доларів').' це'; },
        ];

        $K = rand(0, 100) < 80 ? 1 : 100;

        $tweet = implode(' ', [
            self::formatDate(new \DateTime(), true),
            $say_story[array_rand($say_story)]($K),
            ($K == 1 ? sprintf('%0.2f', $K * $avg_rounded) : $K * $avg_rounded) . ' гривень',
            $say_day_diff,
            '#' . $hashtags[array_rand($hashtags)],
            'g.ua/kK6C'
        ]);

        return $tweet;

    }

    public static function tellLongStory() {

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
                $variants  = ['Сьогодні', 'Цього дня'];
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

        if ($n == 1) {
            $n = '';
        }
        else {
            $n .= ' ';
        }

        if($m==0 || $m>=5 || ($j>=10 && $j<=20)) return $n . $s3;
        if($m>=2 && $m<=4) return $n . $s2;
        return $n . $s1;
    }
}
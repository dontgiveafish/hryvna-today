<?php

namespace app\hryvna;

use Yii;
use yii\helpers\ArrayHelper;

use app\models\Currency;

class Storyteller
{
    public static function describePeriod(Currency $currency, $delta, $story_one, $story_two)
    {
        $currency_title = $currency->verbal;

        // get exchange rates list

        $dashboard = new Dashboard([$currency->id], Dashboard::FLAG_ROUND_TO_CENTS);
        $days = $dashboard->getAvgHistory($delta * 10, -1);

        $values = ArrayHelper::getColumn($days, function ($element) use ($currency) {
            return $element[$currency->id]['avg']['avg']['value'];
        });

        if (empty($values)) {
            return;
        }

        // calculate min, max(with dates), left and right value

        $min_date = array_keys($values, $min = min($values))[0];
        $max_date = array_keys($values, $max = max($values))[0];
        $first = reset($values);
        $last = end($values);

        // start story

        $story = "За $story_one <strong>гривня ";

        if ($first > $last) { $story .= 'зміцнилась'; }
        elseif ($first < $last) { $story .= 'впала в ціні'; }
        else { $story .= 'є стабільною'; }

        $story .= '</strong>';

        if (abs($delta) == 1) $story .= " і сьогодні один $currency_title коштує приблизно $last&nbsp;гривень";

        $story .= '. ';

        $diff = round(($last - $first) / count($days), 2) * 100;
        $diff_story = ($diff >= 0 ? 'плюс' : 'мінус') . ' ' . self::sklonen(abs($diff), 'копійку', 'копійки', 'копійок');

        $story .= "Середнє коливання за $story_two – <span style='white-space:nowrap;'>$diff_story</span> у проміжку від $min до $max&nbsp;гривень за $currency_title.";

        if (abs($delta) != 1) {
            $story .= ' Мінімум було досягнуто '. self::formatDate($min_date). ', а максимум – '. self::formatDate($max_date) .'.';
        }

        return $story;

    }

    public static function describeDayChanges(Currency $currency)
    {
        $dashboard = new Dashboard([$currency->id], Dashboard::FLAG_CALCULATE_DIFF | Dashboard::FLAG_ROUND_TO_CENTS);
        $avg = $dashboard->getAvg()[$currency->id]['avg']['avg'];

        if (empty($avg)) {
            throw new \Exception('no avg');
        }

        $day_diff = round($avg['diff'], 2) * 100;

        $say = self::formatDate(new \DateTime(), true) . ' гривня ';

        if ($day_diff == 0) {
            $phrases = ['залишається стабільною', 'не змінилась у ціні'];
        }
        elseif (abs($day_diff) < 15) {
            $phrases = ['незначно', 'трохи', 'дещо'];
        }
        elseif (abs($day_diff) < 50) {
            $phrases = ['помітно', 'досить відчутно'];
        }
        else {
            $phrases = ['сильно', 'різко', 'стрімко'];
        }

        $say .= $phrases[array_rand($phrases)];

        if ($day_diff > 0) {
            $phrases = ['впала', 'втратила вартість', 'здешевшала'];
        }
        elseif ($day_diff < 0) {
            $phrases = ['зміцнилась', 'зросла', 'подорожчала'];
        }

        if ($day_diff != 0) {
            $say .= ' ' . $phrases[array_rand($phrases)];
        }

        return $say;
    }

    public static function tweet(Currency $currency) {

        $dashboard = new Dashboard([$currency->id], Dashboard::FLAG_CALCULATE_DIFF | Dashboard::FLAG_ROUND_TO_CENTS);
        $avg = $dashboard->getAvg()[$currency->id]['avg']['avg'];

        if (empty($avg)) {
            throw new \Exception('no avg');
        }

        $avg_rounded = $avg['value'];
        $day_diff = $avg['diff'];

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

    public static function tellLongStory(Currency $major_currency, Currency $minor_currency)
    {
        $dashboard = new Dashboard([$major_currency->id, $minor_currency->id], Dashboard::FLAG_CALCULATE_DIFF | Dashboard::FLAG_ROUND_TO_CENTS);
        $avgs = $dashboard->getAvg();

        // let the story begin

        $story = [];

        // nbu

        $story[] =
            'Офіційний курс від НБУ – ' .
            $avgs[$major_currency->id]['government']['avg']['value'] . " гривень за $major_currency->verbal та " .
            $avgs[$minor_currency->id]['government']['avg']['value'] . " гривень за $minor_currency->verbal.";

        // commercial banks

        $story[] =
            'Середній курс купівлі та продажу долара у банках – ' . $avgs[$major_currency->id]['commercial']['buy']['value'] .
            ' та '. $avgs[$major_currency->id]['commercial']['sale']['value'] . ' відповідно.';

        $story[] =
            mb_convert_case($major_currency->verbal, MB_CASE_TITLE, 'UTF-8') .
            ' купують за ' . $avgs[$minor_currency->id]['commercial']['buy']['value'] .
            ' та продають за '. $avgs[$minor_currency->id]['commercial']['sale']['value'] . ' гривень.';

        // black market

        $black_diff = $avgs[$major_currency->id]['black']['avg']['diff'] * 100;

        $black = 'Чорний ринок показує ';

        if ($black_diff == 0) {
            $phrases = ['стабільність'];
        }
        elseif (abs($black_diff) < 20) {
            $phrases = ['незначне', 'невелике'];
        }
        elseif (abs($black_diff) < 50) {
            $phrases = ['помітне', 'досить відчутне'];
        }
        else {
            $phrases = ['сильне', 'різке', 'стрімке'];
        }

        $black .= $phrases[array_rand($phrases)];

        if ($black_diff != 0) {

            if ($black_diff > 0) {
                $phrases = ['здешевшання', 'падіння'];
            }
            elseif ($black_diff < 0) {
                $phrases = ['зміцнення', 'зростання', 'укріплення'];
            }

            $black .= ' ' . $phrases[array_rand($phrases)];
        }

        $black .= ' гривні.';

        $story[] = $black;

        // that's the end

        return implode(' ', $story);
    }


    /**
     * Format date
     *
     * @param \DateTime $date
     * @param bool Use random way to format
     * @return string
     */
    public static function formatDate($date = null, $random_way = false)
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
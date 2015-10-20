<?php

/* 
 * This class is provided to operate with database and create data structures for using in template and APIs
 */

namespace app\components;
 
use Yii;
use yii\base\Component;

use app\models;

class Hryvna extends Component
{

    const DATE_FORMAT = 'Y-m-d';

    private $actual_date = null;
    
    /**
     * This is private function to assign date to component
     * When date is not in query, default date is last actual date
     * @see getActualDate()
     * @return DateTime
     */
    private function assignActualDate() {

        if (empty($this->actual_date)) {

            $date_string = $this->getActualDate();
            $this->actual_date = \DateTime::createFromFormat(self::DATE_FORMAT, $date_string);

        }

        return $this->actual_date;
        
    }

    /**
     * Actual date is a last date when exchanges for all bank are ready
     * @return String Date string in mysql format(Y-m-d)
     */
    public function getActualDate()
    {
        
        $banks_count = models\Bank::find()->count();

        $table_exchanges = models\Exchange::tableName();
        
        $query = "
            SELECT grab_date as actual_date, count(*) as exchanges_count

            FROM `$table_exchanges` as exchanges

            GROUP BY `grab_date`

            HAVING exchanges_count = $banks_count
            ORDER BY `grab_date` DESC

            LIMIT 1
        ";
        
        $command = Yii::$app->db->createCommand($query);
        $result = $command->queryOne();

        return $result['actual_date'];
    }
    
    /**
     * Giving average exchanges for one day
     * This is using on first screen of site
     * @param \DateTime $today
     * @return array
     */
    public function getAvg(\DateTime $today = null)
    {

        if (empty($today)) {
            $today = $this->assignActualDate();
        }

        $table_exchanges = models\Exchange::tableName();
        $table_banks = models\Bank::tableName();

        $result = array();

        for ($i = 0; $i < 2; ++$i) {

            $today_string = $today->format(self::DATE_FORMAT);

            // this is a big query to get average values in one select

            $part_of_query = "
                    FROM $table_exchanges as exchanges
                    JOIN $table_banks as banks ON banks.id = exchanges.bank_id
                    WHERE `grab_date` = '$today_string'
            ";

            $query = "
                    SELECT *,

                        (dollar_avg_buy + dollar_avg_sale ) /2 AS dollar_avg,
                        (euro_avg_buy + euro_avg_sale) /2 AS euro_avg

                    FROM
                    (
                        SELECT
                            AVG(dollar_buy) as dollar_buy_banks, AVG(dollar_sale) as dollar_sale_banks,
                            AVG(euro_buy) as euro_buy_banks, AVG(euro_sale) as euro_sale_banks
                        $part_of_query
                        AND bank_id != 1
                        AND banks.type = 'bank'

                    ) as banks,
                    (
                        SELECT 
                            AVG(dollar_buy) as dollar_nbu,
                            AVG(euro_buy) as euro_nbu
                        $part_of_query
                        AND bank_id = 1

                    ) as nbu,
                    (
                        SELECT
                            AVG(dollar_buy) as dollar_avg_buy, AVG(dollar_sale) as dollar_avg_sale,
                            AVG(euro_buy) as euro_avg_buy, AVG(euro_sale) as euro_avg_sale
                        $part_of_query
                        AND banks.type = 'bank'

                    ) as avg,
                    (
                        SELECT
                            AVG(dollar_buy) as dollar_buy_black, AVG(dollar_sale) as dollar_sale_black,
                            AVG(euro_buy) as euro_buy_black, AVG(euro_sale) as euro_sale_black
                        $part_of_query
                        AND banks.type = 'market'

                    ) as markets
            ";

            // call this query

            $command = Yii::$app->db->createCommand($query);
            $result[$i] = $command->queryOne();

            // today is a new yesterday
            
            $today->modify("-1 day");

        }

        // calculate diff and make a proper format
        foreach ($result[0] as $key => $value) {
            $result[0][$key] = array('value' => $value, 'diff' => $value - $result[1][$key]);
        }
        
        // give it away now
        return $result[0];
            
    }
    
    /**
     * Getting history of exchanges
     * @param \DateTime $today
     * @param int $period 
     * @param int $delta
     * @return array
     */
    function getDays(\DateTime $today = null, $period = -10, $delta = 1) {

        if (empty($today)) {
            $today = $this->assignActualDate();
        }

        $exchanges_table = models\Exchange::tableName();
        $table_banks = models\Bank::tableName();
                
        $today->modify(($delta * $period) .' day');
        
        $result = array();

        for ($i = 0; $i < abs($period); ++$i) {

            $today->modify("$delta day");
            $today_string = $today->format(self::DATE_FORMAT);

            $query = "
            SELECT *, ROUND(dollar_avg, 2) AS dollar_avg_rounded, ROUND(euro_avg, 2) AS euro_avg_rounded
            FROM (

                SELECT * , (dollar_buy + dollar_sale) /2 AS dollar_avg, (euro_buy + euro_sale) /2 AS euro_avg
                FROM (

                    SELECT
                        AVG(dollar_buy) AS dollar_buy, AVG(dollar_sale) AS dollar_sale,
                        AVG(euro_buy) AS euro_buy, AVG(euro_sale) AS euro_sale
                    FROM $exchanges_table as exchanges
                    JOIN $table_banks as banks ON banks.id = exchanges.bank_id
                    WHERE `grab_date` = '$today_string'
                    AND banks.type = 'bank'

                ) AS avgs_temp
            ) AS avgs
            ";

            $command = Yii::$app->db->createCommand($query);
            $day = $command->queryOne();
            
            $day['date'] = $today->format(self::DATE_FORMAT);
            //$day['text'] = $today->format(self::DATE_FORMAT);

            $result[] = $day;

        }

        return $result;

    }
    
    /**
     * Getting exchanges in banks for selected period
     * @param \DateTime $today
     * @param type $period
     * @return array
     */
    function getBankDays(\DateTime $today = null, $period = -10) {

        if (empty($today)) {
            $today = $this->assignActualDate();
        }

        $table_exchanges = models\Exchange::tableName();
        $banks_table = models\Bank::tableName();
        
        $today->modify($period .' day');
        
        $days = array();
        
        for ($i = 0; $i < abs($period); ++$i) {

            $today->modify("+1 day");

            $yesterday = clone $today;
            $yesterday->modify('-1 day');

            $today_string = $today->format(self::DATE_FORMAT);

            $query = "

                SELECT

                       q1.*,

                       AVG(dollar_buy) as dollar_buy_yesterday,
                       AVG(dollar_sale) as dollar_sale_yesterday,
                       (AVG(q1.dollar_buy_today) - AVG(dollar_buy)) as dollar_buy_diff,
                       (AVG(q1.dollar_sale_today) - AVG(dollar_sale)) as dollar_sale_diff,

                       AVG(euro_buy) as euro_buy_yesterday,
                       AVG(euro_sale) as euro_sale_yesterday,
                       (AVG(q1.euro_buy_today) - AVG(euro_buy)) as euro_buy_diff,
                       (AVG(q1.euro_sale_today)- AVG(euro_sale)) as euro_sale_diff

                FROM $table_exchanges as exchanges, (

                    SELECT bank_id, 
                        AVG(dollar_buy) as dollar_buy_today, AVG(dollar_sale) as dollar_sale_today,
                        AVG(euro_buy) as euro_buy_today, AVG(euro_sale) as euro_sale_today
                        FROM $table_exchanges as exchanges
                        JOIN $banks_table as banks ON banks.id = exchanges.bank_id
                        WHERE `grab_date` = '$today_string'
                        AND banks.id = exchanges.bank_id

                    GROUP BY bank_id

                ) as q1

                WHERE q1.bank_id = exchanges.bank_id
                AND grab_date = '".$yesterday->format(self::DATE_FORMAT)."'

                GROUP BY bank_id

            ";

            $command = Yii::$app->db->createCommand($query);
            $res = $command->queryAll();

            if (!empty($res)) {

                foreach ($res as $row) {

                    $day = [

                        'dollar_buy' => [
                            'value' => $row['dollar_buy_today'],
                            'diff' => $row['dollar_buy_diff'],
                        ],
                        'dollar_sale' => [
                            'value' => $row['dollar_sale_today'],
                            'diff' => $row['dollar_sale_diff'],
                        ],
                        'euro_buy' => [
                            'value' => $row['euro_buy_today'],
                            'diff' => $row['euro_buy_diff'],
                        ],
                        'euro_sale' => [
                            'value' => $row['euro_sale_today'],
                            'diff' => $row['euro_sale_diff'],
                        ],

                    ];

                    $days[$today->format(self::DATE_FORMAT)][$row['bank_id']] = $day;

                }

            }

        }
        
        return $days;

   }

}
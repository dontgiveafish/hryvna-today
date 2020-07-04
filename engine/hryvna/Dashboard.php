<?php

/* 
 * This class is provided to operate with database and create data structures to build website and APIs
 */

namespace app\hryvna;
 
use Yii;
use yii\helpers\ArrayHelper;

use app\models;

class Dashboard
{
    /** @const Format for converting \DateTime to string */
    const DATE_FORMAT = 'Y-m-d';

    /** @const Flag to calculate difference in exchange rates with previous date */
    const FLAG_CALCULATE_DIFF = 0x1;

    /** @const Flag to round exchange rates to cents */
    const FLAG_ROUND_TO_CENTS = 0x2;

    /** @var int[] Array to store currency IDs */
    private $currencies;

    /** @var int Field to store options */
    private $options;

    /** @var \DateTime Date to start getting exchange rates */
    private $startDate;

    /**
     * Dashboard constructor
     * @param int[] $currencies List of currency IDs
     * @param int $options
     * @param \DateTime|null $startDate
     */
    public function __construct(array $currencies, $options = 0, \DateTime $startDate = null)
    {

        if (empty($startDate)) {
            $startDate = new \DateTime();
        }

        $this->startDate = clone $startDate;
        $this->currencies = $currencies;
        $this->options = $options;
    }

    /**
     * This method is taking exchange rates for selected date and currency from database
     * @param \DateTime $today
     * @param int $currency_id
     * @param string|null $group_by
     * @param array|null $conditions
     * @return array
     */
    private function getAvgDay(\DateTime $today, $currency_id, $group_by = null, array $conditions = null)
    {
        //prepare date
        $today_string = $today->format(self::DATE_FORMAT);

        // prepare condition queries
        $conditions_query = '';
        if (!empty($conditions)) {
            $conditions_query .= 'AND ';
            $conditions_query .= implode(' AND ', $conditions);
        }

        // prepare GROUP BY expressions
        $group_by_select = $group_by_expression = '';
        if (!empty($group_by)) {
            $group_by_select = "$group_by as rates_index,";
            $group_by_expression = "GROUP BY $group_by";
        }

        // prepare ROUND expressions
        $round_expression_left = $round_expression_right = '';
        if ($this->options & self::FLAG_ROUND_TO_CENTS) {
            $round_expression_left = 'ROUND(';
            $round_expression_right = ', 2)';
        }

        // prepare table names
        $table_exchanges = models\ExchangeRate::tableName();
        $table_banks = models\Bank::tableName();
        $table_banks_type = models\BankType::tableName();

        // query cooking

        $query = "
            SELECT *, $round_expression_left ((buy + sale) /2) $round_expression_right AS avg
            FROM (

                SELECT
                    $group_by_select
                    $round_expression_left AVG(buy)  $round_expression_right as buy,
                    $round_expression_left AVG(sale) $round_expression_right as sale
                FROM
                  $table_exchanges as exchanges
                JOIN
                  $table_banks as banks ON banks.id = exchanges.bank_id
                JOIN
                  $table_banks_type as bank_types ON banks.type_id = bank_types.id
                WHERE `grab_date` = '$today_string'
                  AND exchanges.currency_id = $currency_id
                  $conditions_query

                $group_by_expression

            ) AS avgs_temp
        ";

        $command = Yii::$app->db->createCommand($query);

        if (empty($group_by)) {
            // return one item if no groups

            $result = [
                'avg' => $command->queryOne()
            ];
        }
        else {
            // return array if groups

            $rows = $command->queryAll();

            // reindex array
            $result = ArrayHelper::index($rows, function (&$row) {
                return $row['rates_index'];
            });
        }

        // build structure
        foreach ($result as &$row) {

            if (empty($row['avg'])) {
                $row = null;
            }
            else {

                // index index value
                if (!empty($row['rates_index'])) {
                    unset($row['rates_index']);
                }

                // build value structure
                foreach ($row as $key => &$value) {
                    $value = ['value' => $value];
                }
            }
        }

        return $result;
    }

    /**
     * This method is giving history of exchange rates for selected period
     * @param int $days_count
     * @param int $period_delta
     * @param array $params
     * @return array
     */
    private function getAvgPeriod($days_count, $period_delta, array $params = [])
    {
        // load options and whatever

        $currencies = $this->currencies;
        $diff_increment = ($this->options & self::FLAG_CALCULATE_DIFF) ? 1 : 0;

        // build period array

        $period = [];
        $today = clone $this->startDate;

        for ($i = 0; $i < $days_count + $diff_increment; ++$i) {
            $period[$today->format(self::DATE_FORMAT)] = clone $today;
            $today->modify(intval($period_delta) . ' days');
        }

        ksort($period);

        // run through period

        $result = [];

        foreach ($period as $today_string => $today_object) {

            foreach ($currencies as $currency_id) {

                $groups = [];

                foreach ($params as $param) {

                    $day_rates = self::getAvgDay($today_object, $currency_id, ...$param); // hello, new php 5.6 feature!;

                    // calculate diff
                    if ($diff_increment) {

                        if (!empty($day_rates)) {
                            foreach ($day_rates as $rates_index => &$rates_indexes) {

                                if (!empty($rates_indexes)) {
                                    foreach ($rates_indexes as $value_index => &$value) {

                                        // calc diff
                                        if (
                                            // no previous day
                                            empty($yesterday_string) ||
                                            // no previous day values
                                            empty($result[$yesterday_string][$currency_id][$rates_index][$value_index]['value']))
                                        {
                                            $diff = null;
                                        } else {
                                            $diff = $value['value'] - $result[$yesterday_string][$currency_id][$rates_index][$value_index]['value'];
                                        }

                                        // finally set diff
                                        $value['diff'] = $diff;
                                    }
                                }
                            }
                        }
                    }

                    $groups += $day_rates;
                }

                $result[$today_string][$currency_id] = $groups;
            }

            // my favourite part
            $yesterday_string = $today_string;

        }

        // delete first date exchange rates(they were loaded to calculate diff)
        if ($diff_increment) {
            array_shift($result);
        }

        // give it away now
        return $result;
    }

    /**
     * Giving average exchanges for only one day
     * This is used on first screen of site
     * @return array
     */
    public function getAvg()
    {
        return reset($this->getAvgHistory(1, -1));
    }

    /**
     * Giving average exchanges for bank types
     * This is used on the second screen of site
     * @param int $period_length
     * @param int $period_delta
     * @return array
     */
    public function getAvgHistory($period_length = 10, $period_delta = -1)
    {
        return $this->getAvgPeriod($period_length, $period_delta, [
            [],
            ['bank_types.alias'],
        ]);
    }

    /**
     * Getting exchanges in banks
     * This is used on third screen of site
     * @param int $period_length
     * @param int $period_delta
     * @return array
     */
    public function getBanksHistory($period_length = 10, $period_delta = -1)
    {
        return $this->getAvgPeriod($period_length, $period_delta, [
            ['banks.id']
        ]);
    }

}
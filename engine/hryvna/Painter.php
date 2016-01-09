<?php

namespace app\hryvna;

use Yii;

class Painter
{
    /**
     * @param $avg_rounded Decimal number of cash
     * @return resource Scaled image
     */
    public static function drawCash($avg_rounded)
    {
        // prepare image layout

        $outputImage = imagecreatetruecolor(2000, 2000);

        $white = imagecolorallocate($outputImage, 255, 255, 255);
        imagefill($outputImage, 0, 0, $white);

        $x = 0;
        $y = 0;

        // prepare cash images

        $cash_pattern = Yii::$app->params['cash']['dir'] . '/*' . Yii::$app->params['cash']['ext'];

        $cuts = [];
        foreach (glob($cash_pattern) as $cut) {
            $cuts[] = pathinfo($cut, PATHINFO_FILENAME);
        }

        rsort($cuts);

        // break sum to cash bits

        $value = round($avg_rounded * 100);

        $result = [];

        for ($i = 0; $i < count($cuts); ++$i) {
            $rest = floor($value / ($cuts[$i] * 100));

            if ($rest >0) {
                $value -= $cuts[$i] * $rest * 100;
                $result[$i] = $rest;
            }

        }

        // draw cash bits

        $cents = false;
        $max_x = $max_y = 0;

        foreach ($result as $key => $value) {

            for ($i=0; $i < $value; ++$i) {

                if ($cuts[$key] >= 1) {
                    $firstUrl = $cuts[$key];
                    $delta_x = 0;
                    $delta_y = 150;
                }
                else {
                    $firstUrl = number_format($cuts[$key], 2);
                    $delta_x = '100%';
                    $delta_y = 0;

                    if (!$cents) {
                        $y += imagesy($first) - 100;
                        $cents = true;
                    }
                }

                $first = imagecreatefromjpeg(
                    Yii::$app->params['cash']['dir'] . "/$firstUrl." . Yii::$app->params['cash']['ext']
                );
                imagecopymerge($outputImage, $first, $x, $y, 0, 0, imagesx($first), imagesy($first), 100);

                if ($max_x < $x + imagesx($first)) $max_x = $x + imagesx($first);
                if ($max_y < $y + imagesy($first)) $max_y = $y + imagesy($first);

                $x += ($delta_x == '100%' ? imagesx($first) : $delta_x);
                $y += ($delta_y == '100%' ? imagesx($first) : $delta_y);

            }

        }

        // cut and scale

        $padding = 35;
        $cuttedImage = imagecreatetruecolor($max_x + $padding*2, $max_y + $padding*2);

        $white = imagecolorallocate($cuttedImage, 255, 255, 255);
        imagefill($cuttedImage, 0, 0, $white);

        imagecopymerge($cuttedImage, $outputImage, $padding, $padding, 0, 0, $max_x, $max_y, 100);
        imagedestroy($outputImage);

        $scale_y = 512;

        $scale_k = $scale_y / imagesy($cuttedImage);
        $scale_x = imagesx($cuttedImage) * $scale_k;

        $cuttedImage = imagescale($cuttedImage, $scale_x, $scale_y);

        return $cuttedImage;
    }
}
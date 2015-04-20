<?php
/**
 * Created by PhpStorm.
 * User: mkkn
 * Date: 2015/04/20
 * Time: 1:14
 */

require __DIR__."/../../vendor/autoload.php";


$app = new \Chatbox\PostalCode\Application();
$app->setBaseUri("/api");
$app->run();
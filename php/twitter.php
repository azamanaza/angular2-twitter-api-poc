<?php
//
require "vendor/twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

const CONSUMER_KEY = "5n0po4XuV9CM6m2mHVKMaI3L0";
const CONSUMER_SECRET = "DxewnrQx5yPS8ak2j2sChNNdXrXFm2TDxGZ5bRSSsk15gCQyYJ";
// will handle GET only, for the sake of completion
$parameters = $_GET;
header('Content-Type: application/json');
if (!empty($parameters)) {
    $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);
    $res = $connection->get("statuses/user_timeline", $parameters);

    echo json_encode($res);
    return;
}

echo "[]";


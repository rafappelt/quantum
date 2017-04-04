<?php
$url= 'https://www.google.com/finance/historical?q='.$_GET['q'].'&output=csv';
echo stream_get_contents(fopen($url, "rb"));

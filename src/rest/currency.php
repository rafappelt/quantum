<?php
$url= 'https://www.google.com/finance/info?q=CURRENCY:'.$_GET['from'].$_GET['to'];
echo stream_get_contents(fopen($url, "rb"));

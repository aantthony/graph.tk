<?php
//This page is for generating http error pages.
date_default_timezone_set("Australia/Melbourne");
$ecode = round($_GET['q']);

$c = array(
'400' => array(
  'Bad Request', 
  'Your browser sent a request that this server could not understand.'),
'401' => array(
  'Authorization Required', 
  'This server could not verify that you are authorized to '.
  'access the document requested. Either you supplied the '.
  'wrong credentials (e.g., bad password), or your browser '.
  'doesn\'t understand how to supply the credentials required.'),
'402' => array(
  'Payment Required', 
  'INTERROR'),
'403' => array(
  'Forbidden', 
  'You don\'t have permission to access THEREQUESTURI on this '.
  'server.'),
'404' => array(
  'Not Found', 
  'The requested URL THEREQUESTURI was not found on this server.'),
'405' => array(
  'Method Not Allowed', 
  'The requested method THEREQMETH is not allowed for the URL '.
  'THEREQUESTURI.'),
'406' => array(
  'Not Acceptable', 
  'An appropriate representation of the requested resource '.
  'THEREQUESTURI could not be found on this server.'),
'407' => array(
  'Proxy Authentication Required', 
  'This server could not verify that you are authorized to '.
  'access the document requested. Either you supplied the wrong '.
  'credentials (e.g., bad password), or your browser doesn\'t '.
  'understand how to supply the credentials required.'),
'408' => array(
  'Request Time-out', 
  'Server timeout waiting for the HTTP request from the client.'),
'409' => array(
  'Conflict', 
  'INTERROR'),
'410' => array(
  'Gone', 
  'The requested resourceTHEREQUESTURIis no longer available on '.
  'this server and there is no forwarding address. Please remove '.
  'all references to this resource.'),
'411' => array(
  'Length Required', 
  'A request of the requested method GET requires a valid '.
  'Content-length.'),
'412' => array(
  'Precondition Failed', 
  'The precondition on the request for the URL THEREQUESTURI '.
  'evaluated to false.'),
'413' => array(
  'Request Entity Too Large', 
  'The requested resource THEREQUESTURI does not allow request '.
  'data with GET requests, or the amount of data provided in the '.
  'request exceeds the capacity limit.'),
'414' => array(
  'Request-URI Too Large', 
  'The requested URL\'s length exceeds the capacity limit for '.
  'this server.'),
'415' => array(
  'Unsupported Media Type', 
  'The supplied request data is not in a format acceptable for '.
  'processing by this resource.'),
'416' => array(
  'Requested Range Not Satisfiable', 
  ''),
'417' => array(
  'Expectation Failed', 
  'The expectation given in the Expect request-header field could '.
  'not be met by this server. The client sent <code>Expect:</code>'),
'422' => array(
  'Unprocessable Entity', 
  'The server understands the media type of the request entity, but '.
  'was unable to process the contained instructions.'),
'423' => array(
  'Locked', 
  'The requested resource is currently locked. The lock must be released '.
  'or proper identification given before the method can be applied.'),
'424' => array(
  'Failed Dependency', 
  'The method could not be performed on the resource because the requested '.
  'action depended on another action and that other action failed.'),
'425' => array(
  'No code', 
  'INTERROR'),
'426' => array(
  'Upgrade Required', 
  'The requested resource can only be retrieved using SSL. The server is '.
  'willing to upgrade the current connection to SSL, but your client '.
  'doesn\'t support it. Either upgrade your client, or try requesting '.
  'the page using https://'),
'500' => array(
  'Internal Server Error', 
  'INTERROR'),
'501' => array(
  'Method Not Implemented', 
  'GET to THEREQUESTURI not supported.'),
'502' => array(
  'Bad Gateway', 
  'The proxy server received an invalid response from an upstream server.'),
'503' => array(
  'Service Temporarily Unavailable', 
  'The server is temporarily unable to service your request due to '.
  'maintenance downtime or capacity problems. Please try again later.'),
'504' => array(
  'Gateway Time-out', 
  'The proxy server did not receive a timely response from the '.
  'upstream server.'),
'505' => array(
  'HTTP Version Not Supported', 
  'INTERROR'),
'506' => array(
  'Variant Also Negotiates', 
  'A variant for the requested resource <code>THEREQUESTURI</code> '.
  'is itself a negotiable resource. This indicates a configuration error.'),
'507' => array(
  'Insufficient Storage', 
  'The method could not be performed on the resource because the '.
  'server is unable to store the representation needed to successfully '.
  'complete the request. There is insufficient free space left in your '.
  'storage allocation.'),
'510' => array(
  'Not Extended', 
  'A mandatory extension policy in the request is not accepted by the '.
  'server for this resource.')
);
 
 $title='Unknown Error';
 if(isset($c[$ecode]))
 {
 	$title=$c[$ecode][0];
 }else
 {
 	die();
 }
 
 
 ?><!DOCTYPE html>
<html><head>
<title><?php echo $ecode; ?> <?php echo $title; ?></title>
</head><body>
<h1><?php echo $title; ?></h1>
<p><?php  echo htmlspecialchars(str_replace('THEREQUESTURI',$_SERVER["REDIRECT_URL"],$c[$ecode][1])); ?></p>
<small><i><?php echo date('r'); ?> on <a href="/"><?php echo $_SERVER['SERVER_NAME']; ?></a> (server 1)</i>
</body></html>
<?php

$jsfile ='JS_FILE'; // a.js will NOT be appended
$cssfile = 'CSS_FILE'; // a .css will NOT be appended.
date_default_timezone_set("Australia/Melbourne");


$func='';
$showbox=false;
if(isset($_GET['json'])){$json=stripslashes($_GET['json']);}

if(isset($_GET['f'])){$func=$_GET['f'];}
if(isset($_GET['y'])){$func=$_GET['y'];}
if(isset($_GET['g'])){$func=$_GET['g'];}
if(isset($_GET['q'])){$func=$_GET['q'];}
if(isset($_GET['function'])){$func=$_GET['function'];}
$func=stripslashes($func);




function doConditionalGet($timestamp) {
    // A PHP implementation of conditional get, see 
    //   http://fishbowl.pastiche.org/archives/001132.html
    $last_modified = substr(date('r', $timestamp), 0, -5).'GMT';
    $etag = '"'.md5($last_modified.'?f?'.$func).'"';
    // Send the headers
    header("Last-Modified: $last_modified");
    header("ETag: $etag");
    // See if the client has provided the required headers
    $if_modified_since = isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) ?
        stripslashes($_SERVER['HTTP_IF_MODIFIED_SINCE']) :
        false;
    $if_none_match = isset($_SERVER['HTTP_IF_NONE_MATCH']) ?
        stripslashes($_SERVER['HTTP_IF_NONE_MATCH']) : 
        false;
    if (!$if_modified_since && !$if_none_match) {
        return;
    }
    // At least one of the headers is there - check them
    if ($if_none_match && $if_none_match != $etag) {
        return; // etag is there but doesn't match
    }
    if ($if_modified_since && $if_modified_since != $last_modified) {
        return; // if-modified-since is there but doesn't match
    }
    // Nothing has changed since their last request - serve a 304 and exit
    header('HTTP/1.0 304 Not Modified');
    exit;
}
doConditionalGet(filemtime($_SERVER['SCRIPT_FILENAME']));

header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 300) . ' GMT');
Header('Cache-Control: max-age=300, public');


if($func=='')
{
	$func='e^x';
	$showbox=true;
}



//Use chrome frame
header('X-UA-Compatible: chrome=1');
header('Content-Type: text/html; charset=UTF-8');
$cf=false;
$msie=false;
//$mac=false;
if(!((strpos(($_SERVER["HTTP_USER_AGENT"]),'MSIE'))=== false)){$msie=true;}
if($msie){
	if(!((strpos(($_SERVER["HTTP_USER_AGENT"]),'chromeframe'))=== false)){$cf=true;}
	if(!((strpos(($_SERVER["HTTP_USER_AGENT"]),'MSIE 9.0'))=== false)){$msie=false;}
}else{
	if(!((strpos(($_SERVER["HTTP_USER_AGENT"]),'iPhone'))=== false)){$iphone=true;}
}


?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" manifest="manifest.manifest"><head><?php if($iphone){ ?><link rel="apple-touch-icon" href="img/apple-touch-icon.png" /><meta name="viewport" content="width=device-width; height=device-height; initial-scale=1.0; maximum-scale=1.0; user-scalable=false;"/><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /><link rel="apple-touch-startup-image" href="img/apple-touch-startup-image.png" /><?php } ?><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico" /><meta name="description" content="Online graph sketching app that can graph functions and numerically solve differential equations. Requires Javascript HTML 5." /><title><?php echo $iphone?'Graph.tk':'graph.tk'; ?></title><?php if($msie && !$cf)
{
	//if msie without chromeframe
	//TODO: CHANGE THIS TO ENABLE EXPLORERCANVAS
		?></head><body><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script><style>img{border:none;vertical-align:middle}</style><script>CFInstall.check({mode:"overlay",destination: "http://graph.tk/"});</script><div style="margin:16px;font-family:sans-serif"><h1>Error</h1>Your internet browser is way too old and lame for this! <a href="about">About this.</a><br />Download google chrome, firefox or safari<br /><br />Choose one of these browsers, or find another one.<br /><br /><a href="http://www.google.com/chrome/"><img id="i_chrome" alt="Google Chrome" src="chromec"></a>&nbsp;<a href="http://www.google.com/chrome/">Get Google Chrome</a><br /><a href="http://www.mozilla.com/firefox"><img id="i_firefox" alt="Firefox" src="img/firefox.png"></a>&nbsp;<a href="http://www.mozilla.com/firefox">Get Firefox</a><br /><a href="http://www.apple.com/safari"><img id="i_safari" alt="Safari" src="img/safari.png"></a>&nbsp;<a href="http://www.apple.com/safari">Get Safari</a><br /><a href="http://www.opera.com/download/"><img align="middle" id="i_opera" alt="Opera" src="img/opera.png"></a>&nbsp;<a href="http://www.opera.com/download/">Get Opera</a><br /></div></body></html><?php
} 

else 
// not (msie without chromeframe)
{ ?><link rel="stylesheet" type="text/css" href="<?php echo $iphone?'iphone':$cssfile; ?>" /></head><body><div id="ldall"><h3 style="text-align:center"><noscript>Please enable javascript!<br /><small><a href="about">More info</a></small></noscript><span id="nnz">.</span></h3></div><div id="all"></div><script type="text/javascript">document.getElementById("nnz").childNodes[0].nodeValue="Loading...";var jsonfunc=<?php echo json_encode(str_replace(' ','+',$func)); ?>;var shouldload=<?php echo ($showbox && ! isset($json))?'true':'false'; 
?>;var jsondata<?php if(isset($json))
{
	?>=<?php echo json_encode($json); } else { echo '=null'; }?>;</script><script type="text/javascript" src="<?php echo $jsfile; ?>"></script><script type="text/javascript">var gaJsHost=(("https:"==document.location.protocol)?"https://ssl.":"http://www.");document.write(unescape("%3Cscript src='"+gaJsHost+"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script><script type="text/javascript">try{var pageTracker=_gat._getTracker("UA-15603369-1");pageTracker._trackPageview();}catch(err){}</script></body></html><?php } ?>
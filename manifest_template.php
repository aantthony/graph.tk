<?php
//This file generates a cache-manifest on the fly. It allows for a very strong cache, and hence near-instant load.

header('Content-Type: text/cache-manifest');
date_default_timezone_set("Australia/Melbourne");


$ddd=filemtime('min.js');
$iphone=false;
if(!((strpos(strtolower($_SERVER["HTTP_USER_AGENT"]),"iphone"))=== false)){$iphone=true;}
?>CACHE MANIFEST
g_<?php echo $ddd; ?>.js
grabbing.gif
delete.png
favicon.ico
<?php echo $iphone?'ip':'CSS_FILE'; ?>.css

NETWORK:
http://graph.tk/about
http://www.google-analytics.com/
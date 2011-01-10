<?php

header('Content-Type: text/html; charset=utf-8');


function selected($n){
	global $p;
	if($n==$p){
		echo ' class="selected"';
	}
}
?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>graph.tk</title>
	<link href="res_about/main.css" type="text/css" rel="stylesheet" media="all">
	<meta name="viewport" content="width=device-width; height=device-height; initial-scale=1.0; maximum-scale=1.0; user-scalable=false;"/>
	<meta name="apple-mobile-web-app-capable" content="no" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
	<meta name="description" content="graph.tk is an online and open-source graphing utillity. It runs in any modern browser that 
	supports the canvas element. It plots functions, and does it with style." />
</head>
<body>
<div class="all">
	<div id="header">
		<div class="left"><a href="/"><img src="res_about/logo.png" /></a></div>
		<div class="right"><a href="/"><img src="res_about/shad.png" /></a></div>
	</div>
</div>
<div id="bar">
	<div class="all">
		<div class="left"><a href="/">graph.tk</a></div>
		<div class="right">
			<p>graph.tk is an online and open-source graphing utillity. It runs in any modern browser that 
			supports the canvas element. It plots functions, and displays them with style.
			</p>
			<ul>
				<a href="/about/"><li<?php selected('overview'); ?>>Overview</li></a>
				<a href="/about/help.html"><li<?php selected('help'); ?>>Help</li></a>
				<!--<a href="http://graph.tk/video"><li<?php selected('video'); ?>>Video Demo</li></a>-->
				<a href="/about/develop.html"><li<?php selected('develop'); ?>>Develop</li></a>
				<a href="/about/contact.html"><li<?php selected('contact'); ?>>Contact</li></a>
			</ul>
		</div>
	</div>
</div>
<div class="all" id="page">
	<div class="left">Quick Links
		<ul class="ql">
			<li><a href="https://github.com/aantthony/graph.tk">Source on GitHub</a></li>
			<li><a href="https://chrome.google.com/webstore/detail/nkhkaamdeplibnmodcgodlkghphdbahk">Chrome Web Store</a></li>
			<li><a href="http://www.chromeexperiments.com/detail/graph-plotter/">Chromexperiments</a></li>
			<li><a href="http://twitter.com/?status=Javascript graph app! http%3A%2F%2Fgraph.tk%2F">Share on Twitter</a></li>
			<?php if($p=='overview') { ?><li><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fgraph.tk%2Fabout%2F&amp;layout=button_count&amp;show_faces=true&amp;width=190&amp;action=like&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:190px; height:21px;" allowTransparency="true"></iframe></li><?php } ?>
		</ul>
	</div>
	<div class="right">
<?php

$p='develop';
require './header.php';
		
	
		?>
		<h1>Contribute</h1>
		<p>There are many bugs to be fixed, and some features awaiting implementation. If you can hack some javascript then please <a href="?contact">send me a message</a> or just fork <a href="https://github.com/aantthony/graph.tk">https://github.com/aantthony/graph.tk</a> on GitHub.
		<h1><abbr title="Application Programming Interface">API</abbr></h1>
						<div>
							<h3>Simple Method</h3>
							<p>Use the following code to generate a graph. You can also use /?f=sinx because /#?f can sometimes generate encoding errors. Note that "x y" will end up being "x+y".</p>
							<code> <b>&lt;iframe</b> <i>src=</i><span class="u">"http://graph.tk/#y=sin(x)"</span><b>&gt;&lt;/iframe&gt;</b></code>
							<div>
								<iframe src="http://graph.tk/?y=sin(x)&amp;r=228807965"></iframe>
							</div>
						</div>
						<div>
							<h3>Powerful Method</h3>
								<p>Use the following code to generate a graph. You can also use /?f=sinx becaues /#?f can sometimes generate encoding errors. Note that "x y" will end up being "x+y".</p>
								<code> <b>&lt;div</b> <i>id=</i><span class="u">"gview"</span><b>&gt;&lt;/div&gt;</b>(rest of page...)<br /><br /> <b>&lt;script</b> <i>src=</i><span class="u">"http://graph.tk/api.js"</span><b>&gt;&lt;/script&gt;</b><br /> <b>&lt;script&gt;</b>createGraph([<strong>"x!"</strong>,<strong>"2x^2"</strong>,<strong>"sin(x)"</strong>],<br />document.getElementById(<b>"gview"</b>));<b>&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;</b>  </code>
								<div>
									<iframe src="http://graph.tk/?json=%7B%22status%22%3A%22ok%22%2C%22g%22%3A%5B%22x!%22%2C%222x%5E2%22%2C%22sin(x)%22%5D%7D&amp;r=2041189797"></iframe>
								</div>
						</div>
						
<?php require './footer.php'; ?>
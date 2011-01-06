<?php

$p='develop';
require './header.php';
$url='http://aantthony.github.com';
	
		?>
		<h1>Contribute</h1>
		<p>There are many bugs to be fixed, and some features awaiting implementation. If you can hack some javascript then please <a href="?contact">send me a message</a> or just fork <a href="https://github.com/aantthony/graph.tk">https://github.com/aantthony/graph.tk</a> on GitHub.
		<h1><abbr title="Application Programming Interface">API</abbr></h1>
						<div>
							<h3>Poweful Method</h3>
							<p>Use the following code to generate a graph.</p>
                    <code style="white-space:pre"><b>&lt;iframe</b> <i>src=</i><span class="u">"<?php echo $url; ?>/"</span> <i>id=</i><span class="u">"my_graph"</span> <i>style=</i><span class="u">"width:500px;height:400px"</span><b>&gt;
&lt;/iframe&gt;</b><br /><b>&lt;script&gt;</b><br />var my_graph=document.getElementById(<strong>"my_graph"</strong>);
                    
my_graph.onload=<span class="k">function</span>(){
    <span class="k">function</span> g(m){
        my_graph.contentWindow.postMessage(m,<span class="s">"<?php echo $url; ?>"</span>);
    };
    g(<span class="s">"add:x^3"</span>);
<span class="c">//  g("block"); - Not recomended, make a screenshot instead</span>
    g(<span class="s">"center:0,0"</span>);
}

<span class="c">//Methods include: add, block, empty, scale, translate, center</span>
<b>&lt;/script&gt;</b></code>
								<div>
                            <iframe src="http://aantthony.github.com/" id="my_graph" style="width:500px;height:400px">
</iframe>
<script>
var my_graph=document.getElementById("my_graph");
                    
my_graph.onload=function(){
    function g(m){
        my_graph.contentWindow.postMessage(m,"http://aantthony.github.com");
    };
    g("add:x^3");
//  g("block"); - Not recomended, make a screenshot instead
    g("center:0,0");
}

</script>

</div>
                                

						</div>
						<div>
							<h3>Old Method</h3>
								<p>Specify the equations via use of the url hash. This is not recomended, because some characters may not work properly. Like this: <a href="http://graph.tk/#y=x^2">http://graph.tk/#y=x^2</a></p>
                                <code> <b>&lt;iframe</b> <i>src=</i><span class="u">"http://graph.tk/#y=sin(x)"</span><b>&gt;&lt;/iframe&gt;</b></code>
							<div>
								<iframe src="http://graph.tk/?y=sin(x)&amp;r=228807965"></iframe>
							</div>
						</div>
						
<?php require './footer.php'; ?>
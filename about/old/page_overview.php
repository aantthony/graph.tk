<?php

$p='overview';
require './header.php';
		
	
		?>
		<div class="gallery">
			<div id="sc">
				<img src="res_about/pic1.png" /><img src="res_about/pic2.png" /><img src="res_about/pic3.png" /><img src="res_about/pic4.png" /><img src="res_about/pic5.png" /><img src="res_about/pic6.png" /><img src="res_about/pic7.png" /><img src="res_about/pic8.png" />
				</div>
		</div>
		<script type="text/javascript">
			var sc=document.getElementById("sc");
			var x=0;
			var max=1650;
			function z(){
				sc.style.marginLeft=(-(-max/2*Math.cos(x++/1000)+max/2))+"px";
				setTimeout(z,0);
			}
			z();
		</script>
<p style="padding:8px;padding-bottom:2px;font-size:large">It's very easy to use.<br />Use the "+" button to create a new equation.<br />Use "/" for fractions, "^" for exponentials, and "*" for multiplication. To type special characters use "\name". For example, "\sqrt" yields √ and \pi produces a &pi;.</p>
Example Functions:
<p><ul>
<li>3/x</li>
<li>x^2</li>
<li>|x| or abs(x)</li>
<li>x! or fact(x)</li>
<li>sin(x)</li>
<li>sin^2(x)</li>
<li>sinc(x)</li>
<li>pow(x,2)</li>
<li>f '(x) or g[0] ' (x) [derivative of first function in list]</li>
<li>g[1] '(x) [derivative of second function]</li>
<li>f '' (x) [second derivative]</li>
<li>Γ(x) [\Gamma(x)]</li>
<li>ζ(x) [\zeta(x)]</li>
</ul>
</p>
<h1>Features</h1>
		
<p>
	<ul>
								<li>
									<h3>Graphing</h3>
									<p>Plot multiple functions on the dynamically resizing grid. Scroll to zoom, drag to move.</p>
								</li>
								<li>
									<h3>Special functions</h3>
									<p>It transforms your function into what the computer can calculate. Includes functions such as &Gamma;(x),<br />&zeta;(x), x!, sinc(x)</p>
								</li>
								<li>
									<h3>LaTeX Rendering</h3>
									<p>Uses <a href="http://laughinghan.github.com/mathquill/">MathQuill</a> for high quality math rendering.</p>
								</li>
								<li>
									<h3>Integration</h3>
									<p>Numerically integrate functions.<br />Solve <a href="http://en.wikipedia.org/wiki/Differential_equation" rel="external" title="Differential equations on Wikipedia">differential equations,</a> such as f'(x)=-x/f(x)</p>
								</li>
								<li>
									<h3>HTML5</h3>
									<p>No download required! Runs from within the browser using the new HTML5 Canvas element.<br />It also uses localStorage to save, and is an Offline Application which means you can use it when you're not even connected to the net!</p>
								</li>
								<li>
									<h3>API</h3>
									<p>Embed it in your own site or forum. <br /><a href="?develop">Use the API</a></p>
								</li>
							</ul>
		</p>
<?php require './footer.php'; ?>
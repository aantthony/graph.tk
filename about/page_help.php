<?php

$p='help';
require './header.php';
		
	
		?>

		<h1>Help</h1>
			<ul>
				<li>
					<h3>Basics</h3>
					<p>Press the + to get examples of new functions. To type special characters, type "\" then their name, then press enter. To make a &radic;, type "\sqrt". For "&Sigma;" type "\sum" then press enter.</p>
				</li>
				<li>
					<h3>Differentiation</h3>
					<p>Example: Evaluate the deriviative y', when y = log(x). Graph "logx" in the first box. Then in another, type f′(x)</p>
				</li>
				<li>
					<h3>Integration</h3>
					<p>Example: Evaluate <span style="font-size:x-large">&int;</span>x&#8901;e<sup>−x<sup>2</sup></sup> from 0 to &infin;. Type x*e^-x^2 into the first box. Now click "Diff Eq" and type "g(x)" in the first differential box. Let x<sub>0</sub> = y<sub>0</sub> = 0. Click Solve. Integral should end at &frac12;.</p>
				</li>
			</ul>
			<ul>
				<li>
					<h3>Function list</h3>
					<ul style="margin-left:1em">
		<li>x!</li>
		<li>x^2 (x<sup>2</sup>)</li>
		<li>gamma(x)</li>
		<li>g'[0](x) (derivative of g[0])</li>
		<li>diff(0,2,x) (second derivative of g[0])</li>
		<li>exp(x) (e<sup>x</sup>)</li>
		<li>log(x) (natural log of x)</li>
		<li>fact(x) (same as x!)</li>
					</ul>
				</li>
				<li>
					<p>Help me make this graph app better by <a href="?contact">reporting bugs and giving feedback</a>, and <a href="http://twitter.com/?status=Javascript+graph+app!+http%3A%2F%2Fgraph.tk%2F" rel="external">tweeting.</a></p>
				</li>
			</ul>
			

<?php require './footer.php'; ?>
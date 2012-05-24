Graph.tk is being rewritten from scratch (again), and that new version hasn't been released publicly yet. The code is not available either. So, development on *this git repository* has ended, because the new version will be much, much better.

The math CAS code for the new version is available under [javascript-cas](https://github.com/aantthony/javascript-cas), which is currently being worked on so isn't really suitable as a library for other things yet.

Graph.tk is a web application that graphs, solves, simplifies, integrates and differentiates expressions. Currently, it can differentiate most of the functions it knows, but there are many bugs. It cannot expand or factorize properly yet, so it cannot find inverses well, or solve equations.
It can currently solve already factorized expressions like: 0=(x^2 /12-log(2))*(x-1)(x+3).

### Try it out
[graph.tk](http://graph.tk/) is the website which this code is used on.

### Requirements:
* JQuery
* MathQuill
* A browser that supports the html5 canvas tag.

### More information about this application.
* [Install Graph.tk as a Chrome app](https://chrome.google.com/webstore/detail/nkhkaamdeplibnmodcgodlkghphdbahk)
* http://www.chromeexperiments.com/detail/graph-plotter/
* http://graph.tk/about

### Stats
* 1.6M+ functions graphed.

### Known Bugs
* Some of the derivitives it finds are incorrect.
* Cannot solve x+x=0, but can solve 2x=0.

### Things planned
* Access external data? csv, fft, images, stock market data
* 3D! the whole graph thing rotates in an animation to become a flat plane, and then the 3d function is plotted.

## License
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

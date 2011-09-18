These shaders will be dumped into one hash table, "shaders" which will be on the global object.

Use "make shaders" to create all.js. The debug.html page loads all.js, but index.html doesn't need to because all.js is included in the minified js file.

Note that "make shaders" requires [Node.js](http://nodejs.org/) to be installed and in your $PATH.
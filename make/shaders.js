#!/usr/bin/env node
var fs = require("fs");

var subdir="./shaders/";
var fileNames = fs.readdirSync(subdir).filter(function(x) {return /\.(vertex|fragment|glsl)$/.test(x)});;
var response = {};
fileNames.forEach(function(filename) {
	try{
		
		response[filename] = fs.readFileSync(subdir+filename, "ascii");
	} catch(err){
		console.error("There was an error opening the file: ");
		console.log(err);
	}
});
console.log("\n\n\nvar shaders = ",JSON.stringify(response),";\n\n");
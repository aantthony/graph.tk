var renderers = [];
GL={};//Graph objects (see /src/GL/*)
renderers.push((function(){
return (function(canvas, params){

	function check(n){
		var x;
		while(x=gl.getError()){
			var str="";
			for(i in gl){if(gl[i]==x){str=i;break;}}
			console.error(n+": "+x+": "+str);
		}
	}
	
function graph_object(g){
	for(i in GL){
		if(GL.hasOwnProperty(i)){
			if(GL[i].match(g)){
				return new GL[i](g);
			}
		}
	}
	throw("Graph.tk doesn't know how to render such a graph.");
}
var graphs = {};
var renderer = {
	"name":"webGL",
	"add": function(g){
		g.addDelegate(this);
		this.update(g);
	},
	"update": function(g){
		if(g){
			console.log("updat",g);
			graphs[g.id]=graph_object(g);
		}
		drawScene();
	},
	"delete": function(g){
		delete graphs[g.id];
		drawScene();
	},
	"hide": function(g){
		graphs[g.id].visible = g.visible;
		drawScene();
	},
	"show": function(g){
		graphs[g.id].visible = g.visible;
		drawScene();
	},
	"resize": function(width, height, no_redraw){
		gl.viewportWidth = width;
		gl.viewportHeight = height;
	    mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.0000001, 1000000000.0, gl.pMatrix);
		if(!no_redraw){
			drawScene();
		}
	},
	"draw": function(){
		drawScene();
	}

};

renderer.cam_lat = 0;
renderer.cam_long = 0;
renderer.cam_dist = 10;
renderer.d = 2;

var stats;
if(window.Stats){

	stats = new Stats();
	
	// Align top-left
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';

	document.body.appendChild( stats.domElement );

}else{
	stats={
		update: function() {
		
		}
	};
}


//InitGL:
var gl;
try {
	//TODO: check this
	params = {antialias: true};
	gl = canvas.getContext("webgl", params);
	if (gl === null) {
		gl = canvas.getContext('experimental-webgl', params);
	}
	if (gl === null) {
		throw("Fail");
	}
} catch (e) {
	alert(e);
}
//Hacks:
gl.import=function(str, imp){
	return str.replace("#import javascript", imp)
}
gl.mvMatrix = mat4.create(); //Model View matrix
gl.pMatrix = mat4.create();  //Projection matrix
gl.sMatrix = mat4.create();  //Full screen square map matrix

renderer.resize(canvas.width,canvas.height,true);

//InitShaders:
check("Initlalise");
window.check=check;

for(i in GL){
	if(GL.hasOwnProperty(i)){
		GL[i].init(gl);
		check("init "+ i);
	}
}


//InitBuffers:
gl.squareVertexPositionBuffer = gl.createBuffer();
var len=1.0;
var vertices = [
	-len,  -len,  0.0,
	-len,  +len,  0.0,
	+len,  -len,  0.0,
	+len,  +len,  0.0
];
gl.bindBuffer(gl.ARRAY_BUFFER, gl.squareVertexPositionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
gl.squareVertexPositionBuffer.itemSize = 3;
gl.squareVertexPositionBuffer.numItems = vertices.length/gl.squareVertexPositionBuffer.itemSize;



gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

function drawScene(){
	gl.getError();
	check(0);
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.depthMask(true)
	gl.enable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	//Set up model view matrix, (projection is already set by resize, but it still needs uploading)
	
	var cam_dist_now = renderer.cam_dist;
	var cam_lat_now = renderer.cam_lat;
	var cam_long_now = renderer.cam_long;
	
	if(renderer.d === 2){
		mat4.identity(gl.mvMatrix);
		mat4.translate(gl.mvMatrix, [0, 0, -cam_dist_now]);
		mat4.identity(gl.sMatrix);
		//mat4.translate(gl.sMatrix, [0,0,cam_dist_now-1.0]);
		var scale = 0.5*cam_dist_now*gl.viewportWidth / gl.viewportHeight;
		mat4.scale(gl.sMatrix, [scale,scale,scale]);
		
		mat4.rotate(gl.mvMatrix, cam_lat_now, [-1, 0, 0]);
		mat4.rotate(gl.mvMatrix, cam_long_now, [0, 0, 1]);
		
	}else{
		mat4.identity(gl.mvMatrix);
		mat4.translate(gl.mvMatrix, [0, 0, -cam_dist_now]);
		mat4.rotate(gl.mvMatrix, cam_lat_now, [-1, 0, 0]);
		mat4.rotate(gl.mvMatrix, cam_long_now, [0, 0, 1]);
	}
	for(id in graphs){
		if(graphs.hasOwnProperty(id)){
			if(graphs[id].visible){
				graphs[id].draw(gl);
			}
		}
	}
	stats.update();
}

drawScene();

return renderer;
});
})());

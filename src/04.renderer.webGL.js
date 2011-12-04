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
function d_mode_update(){
	
	var _d = 2;
	for(id in graphs){
		if(graphs.hasOwnProperty(id)){
			if(graphs[id].d===3 && graphs[id].visible){
				_d = 3;
				break;
			}
		}
	}
	if(_d!=renderer.d){
		if(_d===3){
			renderer.cam_lat = Math.PI/6;
			renderer.cam_long = Math.PI/4;
		}
		renderer.dchange = true;
		renderer.d = _d;
		startAnimation();
	}

}
function graph_object(g){
	//TODO: check number of occurences of xyz
	var m = g.math;
	m = m.sub("r", M("\\sqrt (x^2+y^2)"));
	m = m.sub("θ", M("\\atan(y,x)"));
	m = m.sub("∞", M("-\\log(0)"));
	m = m.sub("e", Math.E);
	m = m.sub("π", Math.PI);
	g.math = m;
	
	if(g.math.type==="=" && (g.math[0]==="z" ||g.math[1]==="z" )){
		return new GL["surface2"](g);
	}
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
var components = [];
var ks = {};
var renderer = {
	"name":"webGL",
	"add": function(g){
		g.addDelegate(this);
		this.update(g);
	},
	"update": function(g, flags){
		if(g){
			graphs[g.id]=graph_object(g);
			d_mode_update();
		}else if(flags){
			if(flags.stopdchangeanimation && renderer.dchange){
				renderer.dchange = false;
				if(!renderer.velocity){
					stopAnimation();
				}
			}
		}
		drawScene();
	},
	"delete": function(g){
		delete graphs[g.id];
		d_mode_update();
		drawScene();
	},
	"hide": function(g){
		graphs[g.id].visible = g.visible;
		d_mode_update();
		drawScene();
	},
	"show": function(g){
		graphs[g.id].visible = g.visible;
		d_mode_update();
		drawScene();
	},
	"resize": function(width, height, no_redraw){
		gl.viewportWidth = width;
		gl.viewportHeight = height;
	    mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.01, 1000000.0, gl.pMatrix);
		if(!no_redraw){
			drawScene();
		}
	},
	"draw": function(){
		drawScene();
	},
	"setVelocity": function(velocity){
		//never use (0,0) use FALSE instead
		if(velocity){
			renderer.velocity = velocity;
			startAnimation();
		}else{
			if(renderer.velocity){
				if(!renderer.dchange){
					stopAnimation();
				}
			}
			renderer.velocity=false;
		}
	},
	"stopMoveInDirection": function(){
		
	}

};

renderer.cam_lat = 0;
renderer.cam_long = 0;
renderer.cam_dist = 10;
renderer.cam_x=0;
renderer.cam_y=0;
renderer.d = 2;
renderer.dchange = false;
renderer.velocity = false;
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
gl.nMatrix = mat3.create();  //Normal matrix. I don't know how this works yet lol.

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
function setComponents(){
	components.push(new GL());
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


var cam_dist_now = renderer.cam_dist;
var cam_lat_now = renderer.cam_lat;
var cam_long_now = renderer.cam_long;
var cam_x_now = renderer.cam_x;
var cam_y_now = renderer.cam_y;
var animating = false;

var last_time;
var t = 0.0;
function dt(){
	var n = new Date()-0;
	var old = last_time;
	last_time = n;
	return (n - old)*0.001;
}


function startAnimation(){
	dt();
	if(animating){
		return;
	}
	console.log("start");
	animating=true;
	tick();
}
window.startAnimation=function(){
	startAnimation();
};
function stopAnimation(){
	console.log("stop");
	animating=false;
	//drawScene();
}
function tick(){
	var res;
	if(animating){
		var deltat = dt();
		t+=deltat;
		res = requestAnimFrame(tick);
		if(renderer.velocity){
			renderer.cam_x += renderer.velocity.x*deltat;
			renderer.cam_y += renderer.velocity.y*deltat;
		}
		drawScene(deltat);
	}
	return res;
}



function drawScene(deltat){
	gl.getError();
	check("begin");
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.depthMask(true);
	gl.enable(gl.BLEND);
	
	//gl.disable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	//Set up model view matrix, (projection is already set by resize, but it still needs uploading)
	
	if(renderer.d === 2){
		
		cam_x_now = renderer.cam_x;
		cam_y_now = renderer.cam_y;
		
		mat4.identity(gl.mvMatrix);
		mat4.translate(gl.mvMatrix, [0, 0, -cam_dist_now]);
		if(renderer.dchange){
			deltat=deltat || 1/60;
			cam_lat_now += 7.0*deltat*(0-cam_lat_now);
			cam_long_now += 7.0*deltat*(0-cam_long_now);
			mat4.rotate(gl.mvMatrix, cam_lat_now, [-1, 0, 0]);
			mat4.rotate(gl.mvMatrix, cam_long_now, [0, 0, 1]);
			
			if(Math.abs(cam_lat_now) + Math.abs(cam_long_now) + Math.abs(cam_dist_now-10.0) <= 0.01){
				renderer.dchange = false;
				if(!renderer.velocity){
					stopAnimation();
				}
			}
		}else{
			cam_dist_now = renderer.cam_dist;
			cam_lat_now = 0;
			cam_long_now = 0;
		}
		mat4.translate(gl.mvMatrix, [-cam_x_now, -cam_y_now, 0]);
		mat4.identity(gl.sMatrix);
		
		mat4.translate(gl.sMatrix, [cam_x_now, cam_y_now, 0]);
		var scale = 0.5*cam_dist_now*gl.viewportWidth / gl.viewportHeight;
		mat4.scale(gl.sMatrix, [scale,scale,scale]);
		
		
		renderer.cam_lat/=2;
		renderer.cam_long/=2;
		gl.worldLineWidth = scale*0.002;
		
	}else{
		
		if(renderer.dchange){
			
			deltat=deltat || 1/60;
			cam_lat_now += 7.0*deltat*(renderer.cam_lat-cam_lat_now);
			cam_long_now += 7.0*deltat*(renderer.cam_long-cam_long_now);
			cam_dist_now = renderer.cam_dist;
			
			if(
				Math.abs(cam_lat_now-renderer.cam_lat) + 
				Math.abs(cam_long_now-renderer.cam_long)
				<= 0.1) {
				renderer.dchange=false;
				if(!renderer.velocity){
					stopAnimation();
				}
			}
			
		}else{
			cam_dist_now = renderer.cam_dist;
			cam_lat_now = renderer.cam_lat;
			cam_long_now = renderer.cam_long;
			cam_x_now = renderer.cam_x;
			cam_y_now = renderer.cam_y;
		}
		
		mat4.identity(gl.mvMatrix);
		
		mat4.translate(gl.mvMatrix, [0, 0, -cam_dist_now]);
		
		mat4.rotate(gl.mvMatrix, cam_lat_now, [-1, 0, 0]);
		mat4.rotate(gl.mvMatrix, cam_long_now, [0, 0, 1]);
		
		
		
		mat4.translate(gl.mvMatrix, [-cam_x_now, -cam_y_now, 0]);
		mat4.identity(gl.sMatrix);
		
		mat4.translate(gl.sMatrix, [cam_x_now, cam_y_now, 0]);
		var scale = 0.5*cam_dist_now*gl.viewportWidth / gl.viewportHeight;
		mat4.scale(gl.sMatrix, [scale,scale,scale]);
		
		
		//mat4.rotate(gl.mvMatrix, cam_lat_now, [-1, 0, 0]);
		//mat4.rotate(gl.mvMatrix, cam_long_now, [0, 0, 1]);
		
		
		gl.worldLineWidth = scale*0.002;
	}
	
	//It seems to just get rid of scaling effects?
    mat4.toInverseMat3(gl.mvMatrix, gl.nMatrix);
    mat3.transpose(gl.nMatrix);
	
	var todo = [];
	for(id in graphs){
		if(graphs.hasOwnProperty(id)){
			if(graphs[id].visible){
				if(graphs[id].depthMask !== false){
					graphs[id].draw(gl, t);
				}else{
					todo.push(graphs[id]);
				}
			}
		}
	}
	todo.forEach(function(graph){
		graph.draw(gl,t);
	});
	components.forEach(function(c){
		c.draw(gl);
	});
	
	stats.update();
}

drawScene();

return renderer;
});
})());

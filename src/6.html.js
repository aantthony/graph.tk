$(function() {
	var renderer;
	document.body.removeChild(document.getElementById("loading"));
	var html = {
		canvas: document.createElement("canvas"),
		graphs: document.createElement("ul"),
	};
	
	html.canvas.width=window.innerWidth;
	html.canvas.height=window.innerHeight;
	function resize(){
		html.canvas.width=window.innerWidth  || document.body.clientWidth;
		html.canvas.height=window.innerHeight|| document.body.clientHeight || 120;//120 for iframe default
		drawScene();
	}
	
	document.body.appendChild(html.canvas);
	
	var equations = document.createElement("div");
	var buttons = document.createElement("div");
	equations.className="overlay";
	equations.id="funcs";
	
	buttons.className="buttons";
	function button(value, title, callback){
		var b = document.createElement("input");
		b.type="button";
		b.value=value;
		b.title=title;
		b.onclick=callback;
		buttons.appendChild(b);
		return button;
	}
	button("+", "Add a function", function() {
		
	});
	button(">_", "Math Console", function() {
		
	});
	button(".png", "Make screenshot", function() {
		
	});
	var help_button = document.createElement("a");
	help_button.target="_blank";
	help_button.className="help_button";
	help_button.title="Help Page";
	help_button.href="about/";
	buttons.appendChild(help_button);
	equations.appendChild(html.graphs);
	equations.appendChild(buttons);
	document.body.appendChild(equations);
	(function() {
		var drag_start_x, drag_start_y;
		var radians_per_pixel_x = 0.01,
			radians_per_pixel_y = -0.01;
		var drag_start_cam_long,
			drag_start_cam_lat;
		
		html.canvas.addEventListener("mousemove", function(e) {
			if(drag_start_x!==undefined){
				renderer.cam_long = drag_start_cam_long+radians_per_pixel_x*(e.x-drag_start_x);
				renderer.cam_lat = drag_start_cam_lat+radians_per_pixel_y*(e.y-drag_start_y);
				if(renderer.cam_lat<0.0){
					renderer.cam_lat=0.0;
				} else if(renderer.cam_lat>Math.PI){
					renderer.cam_lat=Math.PI;
				}
				renderer.update();
			}
		});
		html.canvas.addEventListener("mousedown", function(e) {
			drag_start_x=e.x;
			drag_start_y=e.y;
			drag_start_cam_long=renderer.cam_long;
			drag_start_cam_lat=renderer.cam_lat;
			if(!window.D3){
				html.canvas.style.cursor = "url(css/grabbing.gif), grabbing";
			}
			
		});
		
		html.canvas.addEventListener("mouseup", function(e){
			drag_start_x=drag_start_y=undefined;
			html.canvas.style.cursor="";
		});
		
	}());
	while(renderers.length){
		if(renderers[0].start(html.canvas)){
			renderer=renderers[0];
			renderers=true;
			break;
		}else{
			renderers.splice(0,1);
		}
	}
	
	if(renderers!==true){
		throw("Could not initialise any renderer!");
	}
})
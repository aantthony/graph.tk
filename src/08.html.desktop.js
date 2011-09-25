var renderer;
function ui_init(window) {
	
	var html = {
		canvas: document.createElement("canvas"),
		graphs: document.createElement("ul"),
	};
	var graphs={};
	var ui = {
		createGraph: function(id, g){
			graphs[id]={
				node: createGraphNode(id, g)
			};
		},
		destroyGraph:function(id){
			html.graphs.removeChild(graphs[id].node);
			delete graphs[id];
		}
	};
	var proto_li = (function(){
		var _proto=document.createElement("li");
	    var _proto_div=document.createElement("div");
	        var _proto_warn=document.createElement("aside");
	        _proto_warn.appendChild(document.createTextNode("fail"));

	    _proto_div.className="b";
	    _proto_div.style.backgroundColor="#07c";
	    var _proto_input=document.createElement("input");
	    _proto_input.type="checkbox";
	    _proto_input.checked="checked";
	        _proto_input.title=localized.showhide;
	    _proto_div.appendChild(_proto_input);


	    var _proto_math=document.createElement("span");
	    _proto_math.className="matheditor";
	    var _proto_del=document.createElement("span");
	    _proto_del.className="delete";
	        _proto.appendChild(_proto_div);
	    _proto.appendChild(_proto_math);
	    _proto.appendChild(_proto_del);
	    _proto.appendChild(_proto_warn);
		return _proto.cloneNode(true);
	}());
	function createGraphNode(id, g){
		var li=proto_li.cloneNode(true);
		li.id="eq-"+id;
		var b_=li.firstChild;
		var check_=li.firstChild.firstChild;
		var delete_=li.getElementsByClassName("delete")[0];
		var inputbox = li.getElementsByClassName("matheditor")[0];
		inputbox.appendChild(document.createTextNode(g.latex||""));
		check_.addEventListener("change",function(e){
            
        },false);
		
        b_.style.backgroundColor=g.color;
		
        delete_.addEventListener("mouseup",function(e){app.destroyGraph(id);e.stopPropagation();},false);

		
		html.graphs.appendChild(li);
		$(inputbox).mathquill("editable").bind("keyup", function(e){
			if(e.keyCode==13 || true){
				var latex=$(inputbox).mathquill("latex");
				var math = M(M.latex.parse(latex));
				g.math=math;
				app.updateGraphWithID(id);
			}
		});
		
		return li;
	}
	html.canvas.width=window.innerWidth;
	html.canvas.height=window.innerHeight;
	function resize(){
		html.canvas.width=window.innerWidth  || document.body.clientWidth;
		html.canvas.height=window.innerHeight|| document.body.clientHeight || 120;//120 for iframe default
	}
	
	document.body.appendChild(html.canvas);
	
	var equations = document.createElement("div");
	var buttons = document.createElement("div");
	equations.className="overlay";
	equations.id="funcs";//change this to a class for portability
	
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
		app.createGraph();
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
			radians_per_pixel_y = -0.01,
			dist_units_per_pixel = 0.01;
		var drag_start_cam_long,
			drag_start_cam_lat,
			drag_start_cam_dist;
		html.canvas.addEventListener("mousedown", function(e) {
			if (e.x === undefined) {
				e.x = e.pageX;
				e.y = e.pageY;
			}
			drag_start_x=e.x;
			drag_start_y=e.y;
			drag_start_cam_long=renderer.cam_long;
			drag_start_cam_lat=renderer.cam_lat;
			if(!window.D3){
				html.canvas.style.cursor = "url(css/grabbing.gif), grabbing";
			}

		});
		html.canvas.addEventListener("mousemove", function(e) {
			if(drag_start_x!==undefined){
				if (e.x === undefined) {
					e.x = e.pageX;
					e.y = e.pageY;
				}
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
		function mousewheel(e){
			e = e || window.event;
			var mx,my;
			if (e.x === undefined) {
				e.x = e.pageX;
				e.y = e.pageY;
			}
			if(e.wheelDeltaY===undefined){
				e.wheelDeltaY=-e.detail;
			}
			var delta=e.wheelDeltaY;
			if(delta>1.2){
		      delta=1.2;
		    }else if(delta<-1.2){
		      delta=-1.2;
		    }
			delta*=dist_units_per_pixel;
			var ex=Math.exp(delta);
			renderer.cam_dist*=ex;
			renderer.update();
		      //scaley*=ex;
		    /*

		      nscalex/scalex=exp
		      mx =  scalex*px - cx

		      (mx + cx)/scalex=px
		      ∆cx =  nscalex*(mx + cx)/scalex - cx - mx
		      ∆cx =  ex*(mx + cx) - cx - mx

		      (cy-my)/scaley = py

		      my +ex*(cy-my) - cy= ∆cy

		      mx =  - cx

		    */
		/*
		    var dx=mx+cx;
		    var dy=my-cy;
		    if((dx*dx+dy*dy)>1000){
		            //Move camera towards the point if
		            //the squared distance to the origin is more than 1000.
		      cx=ex*(mx+cx)-mx;
		      cy+=my+ex*(cy-my)-cy;
		    }
		    updatePTD(mx,my);
*/
		        //Prevent browser from scrolling page
		        e.preventDefault();
		        return false;
		  }
		
		html.canvas.addEventListener("mousewheel",mousewheel, false);
		html.canvas.addEventListener("DOMMouseScroll",mousewheel, false);
	
		
		html.canvas.addEventListener("mouseup", function(e){
			drag_start_x=drag_start_y=undefined;
			html.canvas.style.cursor="";
		});
		
	}());
	
	while(renderers.length){
		if(renderer = renderers[0](html.canvas)){
			window.renderer=renderer;//debug
			renderers=true;
			break;
		}else{
			renderers.splice(0,1);
		}
	}
	
	if(renderers!==true){
		throw("Could not initialise any renderer!");
	}
	return ui;
}
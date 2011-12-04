var html = (function(){
	var renderer,
		dom = {
		"canvas": d.createElement("canvas"),
		"graphs": d.createElement("ul")
		},
		proto_li = (function(){
		var p=d.createElement("li"),
			div=d.createElement("div"),
			warn=d.createElement("aside"),
			input=d.createElement("input"),
			math=d.createElement("span"),
	    	del=d.createElement("span");
		warn.appendChild(d.createTextNode("fail"));
		
		div.className="b";
		div.style.backgroundColor="#07c";
	    input.type="checkbox";
		input.checked="checked";
		input.title=strings.showhide;
		div.appendChild(input);

	    math.className="matheditor";
	    del.className="delete";
		p.appendChild(div);
	    p.appendChild(math);
	    p.appendChild(del);
	    p.appendChild(warn);
		return p.cloneNode(true);
	}());
	function createGraphNode(id, g){
		var li=proto_li.cloneNode(true);
		li.id="eq-"+id;
		var b_=li.firstChild,
			check_=li.firstChild.firstChild,
			delete_=li.getElementsByClassName("delete")[0],
			inputbox = li.getElementsByClassName("matheditor")[0],
			warn = li.getElementsByTagName("aside")[0];
		inputbox.appendChild(d.createTextNode(g.latex||""));
		check_.addEventListener("change",function(e){
            app.showHideGraph(id, check_.checked);
        }, false);
		
        b_.style.backgroundColor=g.color;
		
        delete_.addEventListener("mouseup",function(e){app.destroyGraph(id);e.stopPropagation();},false);
		warn.addEventListener("mouseup", function(e){
			alert(warn.message);
		})
		
		
		warn.style.display = "none";
			
		dom.graphs.appendChild(li);
		$(inputbox).mathquill("editable").bind("keyup", function(e){
			if(e.keyCode==13 || true){
				try{
					var latex=$(inputbox).mathquill("latex");
					var math = M(M.latex.parse(latex));
					math = math.simplify();
					g.math=math;
					g.update();
					warn.style.display = "none";
				}catch(ex){
					warn.style.display = "";
					warn.message = ex.message;
					console.error(ex);
					warn.firstChild.nodeValue = "Error";
				}
			}
		});
		
		return li;
	}
	//Initialise the canvas
	dom.canvas.width = window.innerWidth   || d.body.clientWidth;
	dom.canvas.height = window.innerHeight || d.body.clientHeight || 120;
	
	function resize(){
		dom.canvas.width = window.innerWidth   || d.body.clientWidth;
		dom.canvas.height = window.innerHeight || d.body.clientHeight || 120; //120 for iframe default
		renderer.resize(dom.canvas.width, dom.canvas.height);
	}
	
	addEventListener("resize", resize);
	d.body.appendChild(dom.canvas);
	
	
	var equations = d.createElement("div");
	var buttons = d.createElement("div");
	equations.className="overlay";
	equations.id="funcs";//change this to a class for portability
	
	buttons.className="buttons";
	function button(value, title, callback){
		var b = d.createElement("input");
		b.type = "button";
		b.value = value;
		b.title = title;
		b.onclick = callback;
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
	var help_button = d.createElement("a");
	help_button.target = "_blank";
	help_button.className = "help_button";
	help_button.title = "Help Page";
	help_button.href = "about/";
	buttons.appendChild(help_button);
	equations.appendChild(dom.graphs);
	equations.appendChild(buttons);
	d.body.appendChild(equations);
	(function() {
		var drag_start_x, drag_start_y;
		var radians_per_pixel_x = 0.01,
			radians_per_pixel_y = -0.01,
			dist_units_per_pixel = 0.04;
		var drag_start_cam_long,
			drag_start_cam_lat,
			drag_start_cam_dist,
			drag_start_cam_x,
			drag_start_cam_y;
		dom.canvas.addEventListener("mousedown", function(e) {
			if (e.x === undefined) {
				e.x = e.pageX;
				e.y = e.pageY;
			}
			drag_start_x=e.x;
			drag_start_y=e.y;
			if(renderer.d == 2){
				dom.canvas.style.cursor = "url(css/grabbing.gif), grabbing";
				drag_start_cam_x = renderer.cam_x;
				drag_start_cam_y = renderer.cam_y;
			}else{
				drag_start_cam_long=renderer.cam_long;
				drag_start_cam_lat=renderer.cam_lat;
			}
		});
		dom.canvas.addEventListener("mousemove", function(e) {
			if(drag_start_x!==undefined){
				if (e.x === undefined) {
					e.x = e.pageX;
					e.y = e.pageY;
				}
				if(renderer.d == 2){
					var d_c = 0.83/dom.canvas.height;
					var d_s = d_c*renderer.cam_dist;//I don't know what this should be!
					renderer.cam_x = drag_start_cam_x-d_s*(e.x-drag_start_x);
					renderer.cam_y = drag_start_cam_y+d_s*(e.y-drag_start_y);
				}else{
					renderer.cam_long = drag_start_cam_long+radians_per_pixel_x*(e.x-drag_start_x);
					renderer.cam_lat = drag_start_cam_lat+radians_per_pixel_y*(e.y-drag_start_y);
					if(renderer.cam_lat<0.0){
						renderer.cam_lat=0.0;
					} else if(renderer.cam_lat>Math.PI){
						renderer.cam_lat=Math.PI;
					}
				}
				renderer.update(undefined, {stopdchangeanimation: true});
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
			if(renderer.d == 2){
				renderer.cam_dist*=ex;
			}else{
				renderer.cam_dist*=ex;
			}
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
		var keys = {
			"up": 87,
			"down": 83,
			"left": 65,
			"right": 68
		};
		var down_keys={};
		var ks={
			updown: 0,
			leftright: 0
		}
		function update_ks(){
			if(renderer.d==3){
				if(down_keys[keys.up]){
					ks.updown = +1;
				}else if(down_keys[keys.down]){
					ks.updown = -1;
				}else{
					ks.updown = 0;
				}
				if(down_keys[keys.left]){
					ks.leftright = -1;
				}else if(down_keys[keys.right]){
					ks.leftright = +1;
				}else{
					ks.leftright = 0;
				}
				if(ks.updown === 0 && ks.leftright === 0){
					renderer.setVelocity(false);
				}else{
					var speed = 0.8;
					speed *= renderer.cam_dist;
					var s = Math.sin(renderer.cam_long);
					var c = Math.cos(renderer.cam_long);
					renderer.setVelocity({x: speed * (ks.leftright*c + ks.updown*s), y:speed * (ks.updown*c - ks.leftright*s)});
				}
			}else{
				renderer.setVelocity(false);
			}
			
		}
		function keydown(e){
			switch(e.keyCode){
				case keys.up:
				case keys.down:
				case keys.left:
				case keys.right:
					down_keys[e.keyCode]=1;
					update_ks();
					break;
				default:
			}
		}
		function keyup(e){
			switch(e.keyCode){
				case keys.up:
				case keys.down:
				case keys.left:
				case keys.right:
					down_keys[e.keyCode]=0;
					update_ks();
					break;
				default:
			}
		}
		dom.canvas.addEventListener("mousewheel",mousewheel, false);
		dom.canvas.addEventListener("DOMMouseScroll",mousewheel, false);
		document.body.addEventListener("keydown",keydown, false);
		document.body.addEventListener("keyup",keyup, false);
	
	
		dom.canvas.addEventListener("mouseup", function(e){
			drag_start_x=drag_start_y=undefined;
			dom.canvas.style.cursor="";
		});
		
	}());
	
	while(renderers.length){
		if(renderer = renderers[0](dom.canvas)){
			renderers=true;
			break;
		}else{
			renderers.splice(0,1);
		}
	}
	
var html = {
	renderer: renderer,
	"didAddGraph": function(g){
		dom.graphs.appendChild(createGraphNode(g.id, g));
	},
	"didDeleteGraph": function(id){
		dom.graphs.removeChild(d.getElementById("eq-"+id));
	}
};
return html;
});//NOT EXECUTED

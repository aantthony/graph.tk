Array.prototype.remove = function(elem) {  
	var index=this.indexOf(elem);
	if(index!==-1){this.splice(index,1)}
};

String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};

var app={};

	//Visible region on screen: (Global so things eval'ed in compile() can access)
    //Maybe all things should be in one object to avoid stuff like this.
var boundleft = -10;
var boundright = 10;
var boundtop = 10;
var boundbottom = -10;

var rmin=0;
var rmax=10;

var overleft,overtop,overbottom,overright;
var width,height;
var gittest=1;

var messages={
    "standalone":"To run this app in fullscreen mode, add it to your home screen.",
    "excanvasfail":"Explorer Canvas failed: quitting.",
    "badbrowser":"Browser not supported",
    "example":"Example",
    "version":"version",
    "type":"Type",
    "add":"Add a new equation/graph",
    "console":"Show Console",
    "help":"Help Page",
    "png":"Take Screenshot Image",
    "reload":"Reset the Graph",
    "showhide":"Show/Hide Graph",
    "config":"Configure"

};

app.config={
    "lineWidth":1.5,
    "pt":true,
    "font":"12px sans-serif"
};
app.ui=(function(){
	var allowdrag=true;//Set using block: and unblock: in the postMessage API.
	var webkit=/[Ww]eb[kK]it/.test(navigator.userAgent);
    if(/(iPhone)/i.test(navigator.userAgent)){
        if(!navigator.standalone){
           alert(messages.standalone);
        }
    }
	var draw;
	var ctx;
	var ptd,con,proto,conin,logt,ul;
    /*
        ptd: (0,0)
        con: Console div
        proto: prototype function li.
        conin: Mathquill input span for console.
        logt: console results div.
    
    */
	function resize(){
	    width=window.innerWidth  || document.body.clientWidth;
	    height=window.innerHeight|| document.body.clientHeight || 120;//120 for iframe default
        logt.style.maxHeight=~~(height-85)+"px";
	    canvas.width = width;
	    canvas.height= height;
	    ctx && draw();
	}
	//Current Mouse coordinates
	var mx = 400;
	var my = 300;

	//Last mouse coordinates
	var lmx=mx;
	var lmy=my;

	var drag;

	var scalex = 64;
	var scaley = scalex;//not always
    var scalez = scalex;//not always


	var gridsize;

	//Location of canvas on screen. While dragging this changes.
	var _cx = 0;
	var _cy = 0;
	
	//Camera position
	var cx = (window.innerWidth || document.body.clientWidth  || 640)/-3;
	var cy = (window.innerHeight|| document.body.clientHeight || 120)*2/3;
	var cz = 10000;


	function draw(){
        //they can be accidentially changed
	    e = Math.E;
	    pi = Math.PI;

	    if (!ctx) {
	        return;
	    }
	    ctx.lineCap = "butt";
        ctx.strokeStyle = ctx.fillStyle = "black";
	    ctx.clearRect(0, 0, width, height);
	    //try{

	    boundleft = cx / scalex;
	    boundright = (width + cx) / scalex;
	    boundbottom = -(height - cy) / scaley;
	    boundtop = cy / scaley;
        
        //This can probably be simplified a bit
        rmax=Math.sqrt(Math.max(boundleft*boundleft+boundbottom*boundbottom,boundbottom*boundbottom+boundright*boundright,boundright*boundright+boundtop*boundtop,boundtop*boundtop+boundleft*boundleft));
        if(boundleft<0 && boundright>0 && boundtop>0 && boundbottom<0){
            rmin=0;
        }else{
            //TODO: Work out the shotest distance from (0,0) to the screen rectangle.
        }
	    gridsize = pow(2, 6 - Math.round(log(scalex) / log(2)));
	    overleft = gridsize * ~~ (boundleft / gridsize) - gridsize;
	    overright = gridsize * ~~ (boundright / gridsize) + gridsize;
	    overtop = gridsize * ~~ (boundtop / gridsize) + gridsize;
	    overbottom = gridsize * ~~ (boundbottom / gridsize) - gridsize;

	    //Draw grid lines
	
		
        ctx.font=app.config.font;
        
	    ctx.strokeStyle = "#888";
        ctx.fillStyle="#888";
	    ctx.lineWidth = 0.1;
        var n=0;
	    for (var x = overleft; x <= overright; x += gridsize / 4) {
	        ctx.beginPath();
	        ctx.move(x, overbottom);
	        ctx.line(x, overtop);
	        ctx.stroke();
	    }
	    for (var y = overbottom; y <= overtop; y += gridsize / 4) {
	        ctx.beginPath();
	        ctx.move(overleft, y);
	        ctx.line(overright, y);
	        ctx.stroke();
	    }
        /*ctx.shadowColor = "rgba(255,255,255,1.0)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = 4;*/
        //Like overleft, but in units of 4*gridsize
        var dblleft=gridsize*4 * ~~ (boundleft / (4*gridsize)) - 4*gridsize;
        var dblleft=gridsize*4 * ~~ (boundbottom / (4*gridsize)) - 4*gridsize;

        
        

        ctx.lineWidth = 0.4;
		for (var x = overleft; x <= overright; x += gridsize) {
			ctx.beginPath();
			ctx.move(x, overbottom);
			ctx.line(x, overtop);
			ctx.stroke();
		}

	    for (var y = overbottom; y <= overtop; y += gridsize) {
			ctx.beginPath();
			ctx.move(overleft, y);
			ctx.line(overright, y);
			ctx.stroke();
		}
        
		ctx.lineWidth=2;
	
		
		ctx.strokeStyle="black";
					
	    ctx.beginPath();
	    ctx.move(overleft,0);
	    ctx.line(overright,0);
	    ctx.stroke();

	    ctx.beginPath();
	    ctx.move(0,overbottom);
	    ctx.line(0,overtop);
	    ctx.stroke();

        

        ctx.lineWidth=app.config.lineWidth;
		var alreadydrawnpoints=[];
        graphs.forEach(function(e){
            if(!e.disabled){
                ctx.strokeStyle=ctx.fillStyle=e.color;
                e.plot(ctx);
                if(app.config.fillText && app.config.pt && e.pt){
                    //TODO: duplicate point checking
                    e.pt.forEach(function(pt){
                        ctx.beginPath();
                        var _nx=pt[0].eval();
                        var _ny=pt[1].eval();
						if(alreadydrawnpoints.indexOf(_nx+","+_ny)===-1){
							alreadydrawnpoints.push(_nx+","+_ny);
						
                        	//console.log(pt);
                        	//Stupid Firefox!
                        	if(!isNaN(_nx) && !isNaN(_ny) && _ny<overtop && _ny>overbottom && _nx<overright && _nx>overleft){
                            	try{
                                	ctx.arc(scalex*_nx-cx,cy-scaley*_ny,app.config.lineWidth*2,0,Math.PI*2,true);
                                	ctx.fill();
                                	var pt_simplified=pt.simplify(0,0,1);
                                var text=undefined;
                                	if(pt_simplified[0]===0 && pt_simplified[1]===0){
                                    	//empty block
                                	}else if(pt_simplified[0]===0){
                                    	text=pt_simplified[1].getString(0);
                                	}else if(pt_simplified[1]===0){
                                    	text=pt_simplified[0].getString(0);
                                	}else{
                                    	text=pt_simplified.getString(0);
                                	}
                                	window.z=pt_simplified;
                                	if(text!=undefined){
                                    	ctx.fillText(utf8_print(text),12+scalex*_nx-cx,cy-scaley*_ny);
                                	}
                            	}catch(ex){
                                	app.ui.console.warn("Could not plot dot: ("+_nx+","+_ny+")");
                            	}
                        	}
						}
                    });
                }
            }
        });
	    //}catch(ex){}
		ctx.fillStyle="#888";
		for(var x=dblleft; x<=overright; x+=gridsize*4){
			
            if(x!=0 && alreadydrawnpoints.indexOf(x+","+0)==-1){
				alreadydrawnpoints.push(x+","+0);
            	ctx.beginPath();
            	ctx.arc(scalex*x-cx,cy-scaley*0,2,0,Math.PI*2,true);
            	ctx.fill();
            	ctx.fillText(x.toFixed(3).replace(/\.?0+$/,""),scalex*x-cx,14+cy-scaley*0);
            }
            
        }
        for(var y=dblleft; y<=overright; y+=gridsize*4){
            if(y!=0 && alreadydrawnpoints.indexOf(0+","+y)==-1){
				alreadydrawnpoints.push(0+","+y);
            	ctx.beginPath();
            	ctx.arc(-cx,cy-scaley*y,2,0,Math.PI*2,true);
            	ctx.fill();
            	ctx.fillText(y.toFixed(3).replace(/\.?0+$/,""),10-cx,4+cy-scaley*y);
            }
            
        }

	}









	var drawwhiledrag_c=0;
	function mousedown(e) {
        if(e.button != 0 || !allowdrag){return;}
	    lmx=mx=e.x || e.pageX;
	    lmy=my=e.y || e.pageY;
	    drag = true;
	    canvas.style.cursor = "url(grabbing.gif), grabbing";
	    if (!drawwhiledrag_c) {
	        setTimeout(drawwhiledrag, 1000);
	        drawwhiledrag_c++;
	    }
	};
	function updatePTD(mx,my){
		/*
			sx=scalex*px-cx
			
			(sx+cx)/scalex=px
			
			
			
			sy=cy-scaley*py
			
			(cy-sy)/scaley=py
		
		*/
		var px=(mx+cx)/scalex;
		var py=(cy-my)/scaley;
		ptd.firstChild.nodeValue="("+px.toPrecision(6)+","+py.toPrecision(6)+")";
	}
	function mousemove(e) {
        if(e.button != 0 || !allowdrag){return;}
	    e = e || window.event;
	    if (e.x !== undefined) {
	        mx = e.x;
	        my = e.y;
	    } else {
	        mx = e.pageX;
	        my = e.pageY;
	    }
	    if(drag){
	        _cx += mx - lmx;
	        _cy += my - lmy;
			if(webkit){
				canvas.style["-webkit-transform"]="translate("+_cx+"px,"+_cy+"px)";
			}else{
				canvas.style.left = _cx + "px";
				canvas.style.top = _cy + "px";
			}
	
	    }
		updatePTD(mx,my);
        //Last mouse position
	    lmx = mx;
	    lmy = my;
	}
	var scaleconst = 0.001;
	if (/AppleWebKit/.test(navigator.userAgent)) {
	    scaleconst = 0.0001;
	}
    if (/Chrome/.test(navigator.userAgent)) {
	    scaleconst = 0.005;
	}
	if (/Firefox/.test(navigator.userAgent)) {
	    scaleconst = 0.012;
	}
	if (/Opera/.test(navigator.userAgent)) {
	    scaleconst = 0.03
	}
	if (!/Mac OS X/.test(navigator.userAgent)) {
	    scaleconst = 0.01
	}
    if (/Mac OS X 10_7/.test(navigator.userAgent)) {
	    scaleconst = 0.02
	}
	function mousewheel(e){
        
        if(!allowdrag){return;}
		e = e || window.event;
	    if (e.x !== undefined) {
	        mx = e.x;
	        my = e.y;
	    } else {
	        mx = e.pageX;
	        my = e.pageY;
	    }
        
        var delta=scaleconst*((e.wheelDeltaY!=undefined)?e.wheelDeltaY:-e.detail);
        if(delta>1.2){
			delta=1.2;
		}else if(delta<-1.2){
			delta=-1.2;
		}
		var ex=Math.exp(delta);
	    scalex*=ex;
	    scaley*=ex;
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
		var dx=mx+cx;
		var dy=my-cy;
		if((dx*dx+dy*dy)>1000){
            //Move camera towards the point if
            //the squared distance to the origin is more than 1000.
			cx=ex*(mx+cx)-mx;
			cy+=my+ex*(cy-my)-cy;
		}
		updatePTD(mx,my);
	    draw();
        
        //Prevent browser from scrolling page
        e.preventDefault();
        return false;
	}
	function perform_translation(){
	    cx-=_cx;
	    cy+=_cy;
	    _cx=_cy=0;
		if(webkit){
			canvas.style["-webkit-transform"]="translate(0px,0px)";
		}else{
		    canvas.style.left = _cx + "px";
		    canvas.style.top = _cy + "px";
		}
	}

	function drawwhiledrag() {
	    if (drag) {
	        perform_translation();
	        draw();
	        setTimeout(drawwhiledrag, 1000);
	    }else{
	        drawwhiledrag_c--;
	    }
	}






	function generateJSON(obj){
			var w=document.createElement("ul");
			w.className="json";
			var mode=typeof obj;
			if(obj===null){
				mode="undefined";
			}
			if(mode=="function" && obj.length!=undefined && obj[0]!=undefined){
				mode="object";
			}
			mode=mode.toString();
			switch(mode){
				case "number":

					var fn=document.createElement("span");
					fn.appendChild(document.createTextNode(obj));
					w.appendChild(fn);
					return w;

					break;
				case "string":
					var fn=document.createElement("strong");
					fn.appendChild(document.createTextNode("\""+obj+"\""));
					w.appendChild(fn);
					return w;

				break;
				case "boolean":
					w.appendChild(document.createTextNode(obj));
					return w;

				break;
				case "undefined":
				case "function":
					var fn=document.createElement("i");
					if(obj===undefined){

						fn.appendChild(document.createTextNode("undefined"));
					}else if(obj===null){

						fn.appendChild(document.createTextNode("null"));
					}else{

						fn.appendChild(document.createTextNode(obj.toString()));
					}
					w.appendChild(fn);
					return w;
				break;

				case "object":
				var found=false;

	function do_loop(i){

		var li=document.createElement("li");

		var m2=typeof obj[i];
		if(obj[i]===null || obj[i]===undefined){
			m2="undefined";
		}

		switch(m2){

			case "function":
			case "object":

				var b=document.createElement("b");

				b.appendChild(document.createTextNode(i+": "));

				var div=document.createElement("div");

				div.appendChild(b);
				div.appendChild(document.createTextNode((typeof(obj[i])).capitalize()));
				li.appendChild(div);
				li.obj=obj[i];

				var children=document.createElement("div");
				children.className="child";
				li.appendChild(children);
				li.done=false;
				li.className="hide";

				li.addEventListener("click",function(e){
					e.stopPropagation();
					if(this.className=="show"){
						this.className="hide";
						return;
					}

					this.className="show";
					if(!this.done){
						this.getElementsByClassName("child")[0].appendChild(generateJSON(this.obj));
						this.done=true;
					}

					return false;
				},false);

				break;
			default:

				var b=document.createElement("b");
				li.className="end";
				b.appendChild(document.createTextNode(i+": "));

				li.appendChild(b);
				var str=obj[i];
				if(m2=="undefined"){
					var strong=document.createElement("i");
					strong.appendChild(document.createTextNode(str));
					li.appendChild(strong);
				}else if(m2=="boolean"){
					li.appendChild(document.createTextNode(str));
				}else if(m2=="string"){
					var strong=document.createElement("strong");
					strong.appendChild(document.createTextNode("\""+str+"\""));
					li.appendChild(strong);
				}else if(m2=="number"){
					var strong=document.createElement("span");
					strong.appendChild(document.createTextNode(str));
					li.appendChild(strong);
				}else {
					li.appendChild(document.createTextNode(str));
				}



		}
		w.appendChild(li);
	}
        if(obj.__proto__!=Array.prototype){
            for(i in obj){
                found=true;
                do_loop(i);
            }
        }
	    if(!found){
	        if(obj.length!==undefined){
	            for(var i=0;i<obj.length;i++){
	                found=true;
	                do_loop(i);
	            }
	            if(!found){
	                w.appendChild(document.createTextNode(obj));
	                return w;
	            }
	        }else{
	            w.appendChild(document.createTextNode(obj));
	            return w;
	        }
	    }
	    break;
	    default:


	    }
	return w;

	}
	
	var ui={
    "remove":function(n){
        if(!ul){
			ul=document.getElementById("graphs");
		}
        ul.removeChild(n);
    },"png":function(){
        window.location=canvas.toDataURL("image/png");
    },"add":function(n){
		var li=proto.cloneNode(true);
		li.id="eq-"+n.gid;
    $(li).find(":checkbox").attr('checked', !n.disabled);
		if(!ul){
			ul=document.getElementById("graphs");
		}
		ul.appendChild(li);
		var inputbox = li.getElementsByClassName("matheditor")[0];
        var warn_ = li.getElementsByTagName("aside")[0];
        var b_=li.firstChild;
        var check_=li.firstChild.firstChild;
        var delete_=li.getElementsByClassName("delete")[0];
		inputbox.appendChild(document.createTextNode(n.equation||""));
        check_.addEventListener("change",function(e){
            for(var i=0;i<graphs.length;i++){
                if(graphs[i].gid==n.gid){
                    graphs[i].disabled=!check_.checked;
                    draw();
                    break;
                }
            }
        },false);
        
        b_.style.backgroundColor=n.color;
        
        //The below code is for focusing on the mathquill when clicking to the right of it. It doesn't work with the latest mathquill. (2011-04-03)
		//inputbox.addEventListener("mouseup",function(e){e.stopPropagation();},false);
		
        //b_.addEventListener("mouseup",function(e){e.stopPropagation();},false);
        
        /*li.addEventListener("mouseup",function(e){
			$(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
			$(inputbox).trigger({ type: "keydown", which: 39 });
            $(inputbox).focus();
		},false);
        */
        
        delete_.addEventListener("mouseup",function(e){app.remove(li);e.stopPropagation();},false);
        
		$(inputbox).mathquill("editable");
		//$(inputbox).mathquill("redraw");
        
        $(inputbox).bind("keydown keyup",
        function(){
            for(var i=0;i<graphs.length;i++){
                if(graphs[i].gid==n.gid){
                    
                    
                    
        
                   
        
                    var l__=$(inputbox).mathquill("latex");
					
                    graphs[i].equation=l__;
                    try{
                        var c=compile(l__);
                    }catch(ex){
                         
                        warn_.firstChild.nodeValue=messages.error+": "+JSON.stringify(ex).toString();
                        warn_.style.display="block";
                        return;
                    }
                    warn_.firstChild.nodeValue="";
                    warn_.style.display="none";
                    for(k in c){
                        if(c.hasOwnProperty(k)){
                            graphs[i][k]=c[k];
                        }
                    }
                    /*
                    graphs[i].f=c.f;
                    graphs[i].plot=c.plot;
                    graphs[i].math=c.math;
                    graphs[i].xc=c.xc;
                    graphs[i].yc=c.yc;
                    graphs[i].xs=c.xs;
                    graphs[i].ys=c.ys;
                    */
                    draw();
                    break;
                }
            }
        });
		if(!n.auto){
            $(inputbox).trigger({ type: "keydown", ctrlKey: true, which: 65 });
			$(inputbox).focus();
        }
		
        warn_.firstChild.nodeValue="";
        warn_.style.display="none";
		return li;
	},
	"colors":{
		"free":("#000,#f08,#8f0,#80f,#880,#088,#808,#0ff,#f80,#f0f,#0a0,#f00,#07c".split(",")),
	},
	"refresh":function(){
        if(draw){
            draw();
        }
    },"block":function(block_it){
        if(block_it != undefined) {
            allowdrag=block_it?false:true;
        } else {
            return !!allowdrag;
        }
    },"legend":function(show_legend){
        if(show_legend !== undefined) {
            $("#funcs").toggle(!!show_legend);
        } else {
            return $("#funcs:visible").length > 0
        }
    },"get_scale":function() {
        return [scalex,scaley,scalez];
    },"set_scale":function(x,y,z){
        scalex=x||1;
        scaley=y||x||1;
        scalez=y||x||1;
        draw();
    },"scale":function(x,y,z){
        scalex*=x||1;
        scaley*=y||x||1;
        scalez*=y||x||1;
        draw();
    },"button":function(value,show) {
      if(show !== undefined) {
        $(".buttons input[value='" + value + "']").toggle(!!show);
      } else {
        return $(".buttons input[value='" + value + "']:visible").length > 0;
      }
    },"translate":function(x,y,z){
        cx+=x||0;
        cy+=y||0;
        cz+=z||0;
        draw();
    },"get_camera":function() {
        return [cx,cy,cz];
    },"set_camera":function(x,y,z){
        cx=x;
        cy=y;
        cz=z;
        draw();
    },"center":function(x,y,z){
        cx=scalex*(x||0)-width/2;
        cy=scaley*(y||0)+height/2;
        cz=scalez*(z||0)-width/2;
        draw();
    },"init":function(fullscreen){
		(new Image()).src="grabbing.gif";
		canvas=document.createElement("canvas");
		if(fullscreen){
			canvas.width=window.innerWidth;
			canvas.height=window.innerHeight;
		}
		document.body.appendChild(canvas);
		if(canvas.getContext){
			ctx=canvas.getContext("2d");
		}else{
			if(!ctx && G_vmlCanvasManager){
                //Explorer canvas. Currently doesn't work because
                //the parser is too much for ie. But we will
                //try to fix that in a parser rewrite.
                G_vmlCanvasManager.initElement(el);
                if(canvas.getContext){
                    ctx = canvas.getContext("2d");
                }else{
                    alert(messages.excanvasfail);
                }
            }else if(!ctx){
                alert(messages.badbrowser);
                return;
            }
		}
		if(!app.config.fillText){
            app.config.fillText=ctx.fillText?true:false;
        }
		canvas.style.background="white";
		canvas.style.cursor = "default";
		canvas.style.position="fixed";
		
		ptd=document.createElement("div");
        ptd.id="ptd";
		ptd.className="monospace";
		ptd.appendChild(document.createTextNode("(0,0)"));
        document.body.appendChild(ptd);
        if(!fullscreen){
            ptd.style.display="none";
        }
		
		con=document.createElement("div");
		con.id="con";
		con.className="overlay";
		con.style.display="none";
        
        logt=document.createElement("div");
        logt.id="logt";
        logt.className="monospace";
        con.appendChild(logt);
        
        var conin_=document.createElement("span");
        conin_.id="conin";
        con.appendChild(conin_);
        
        
		document.body.appendChild(con);
        
		conin=document.getElementById("conin");
        $(conin).mathquill("editable");
		//$(conin).mathquill("redraw");
        
		conin.addEventListener("keydown",function(event){
			if(event.which==13){
                try{
                var needsredraw=false;
                conin.last=$(conin).mathquill("latex");
                var out=p_latex(conin.last).simplify();
                if(out.type==eqtype.equality){
                    if(typeof out[0]=="string"){
                        if(out[0]=="e" || out[0]=="pi"){
                            throw(MessageStrings.protected);
                            return;
                        }
                        app.variables[out[0]]=out[1].eval();
                        needsredraw=true;
                    }
                }
                var can_eval_code=out.canEval();
                if(can_eval_code==false || can_eval_code==2){
                    app.ui.console.log(((out.getString().markup())));
                }else{
                    app.ui.console.log(generateJSON(usr.eval(out.getString(0,1))));
                }
                $(conin).mathquill("latex","");
                if(needsredraw){
                    draw();
                }
                }catch(ex){
                    app.ui.console.warn(ex.toString());
                }
			}
			else if(event.which==38 && event.shiftKey){
                if(!/\\[a-z]*|[^\s]/ig.test(conin.last)){
                    conin.last=" ";
                }
                $(conin).mathquill("latex",conin.last);
			}
		},false);

		var funcs=document.createElement("div");
		funcs.className="overlay";
		funcs.id="funcs";
        if(!fullscreen){
            funcs.style.display="none";
        }
		var _ul=document.createElement("ul");
		_ul.id="graphs";
		funcs.appendChild(_ul);
		
		var _proto=document.createElement("li");
		var _proto_div=document.createElement("div");
        var _proto_warn=document.createElement("aside");
        _proto_warn.appendChild(document.createTextNode("fail"));
        
		_proto_div.className="b";
		_proto_div.style.backgroundColor="#07c";
		var _proto_input=document.createElement("input");
		_proto_input.type="checkbox";
		_proto_input.checked="checked";
        _proto_input.title=messages.showhide;
		_proto_div.appendChild(_proto_input);
		
		
		var _proto_math=document.createElement("span");
		_proto_math.className="matheditor";
		var _proto_del=document.createElement("span");
		_proto_del.className="delete";
        _proto.appendChild(_proto_div);
		_proto.appendChild(_proto_math);
		_proto.appendChild(_proto_del);
		_proto.appendChild(_proto_warn);
		var buttons=document.createElement("div");
		buttons.className="buttons";
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value="+";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.add;
        newfuncbtn.onclick=function(){app.add()};
        buttons.appendChild(newfuncbtn);
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value=">_";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.console;
        newfuncbtn.onclick=function(){app.console()};
        buttons.appendChild(newfuncbtn);
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value=".png";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.png;
        newfuncbtn.onclick=function(){app.png()};
        buttons.appendChild(newfuncbtn);
        
        if(app.view_configured != false) {
          var newfuncbtn=document.createElement("input");
          newfuncbtn.value="reload";
          newfuncbtn.type="button";
          newfuncbtn.title=messages.reload;
          newfuncbtn.onclick=function(){location.reload()};
          buttons.appendChild(newfuncbtn);
        }
        if(app.view_configured==undefined && false) {
          var newfuncbtn=document.createElement("input");
          newfuncbtn.value="config";
          newfuncbtn.type="button";
          newfuncbtn.title=messages.config;
          newfuncbtn.onclick=function(){app.ui.modalConfig()};
          buttons.appendChild(newfuncbtn);
        }
        
        var alink=document.createElement("a");
        alink.href="about/";
        alink.target="_blank";
        
        var newfuncbtn=document.createElement("input");
        newfuncbtn.value="";
        newfuncbtn.style.textDecoration="none";
        newfuncbtn.type="button";
        newfuncbtn.title=messages.help;
        
        alink.appendChild(newfuncbtn);
        buttons.appendChild(alink);
        
        funcs.appendChild(buttons);
		document.body.appendChild(funcs);
		proto = _proto.cloneNode(true);
		proto.removeAttribute("id");

		canvas.onmousedown=mousedown;
		
		document.body.addEventListener("mouseup",function(){if(!allowdrag){return;}drag=false;perform_translation();canvas.style.cursor = "default";draw()},false);
		document.body.addEventListener("mousemove",mousemove,false);
		   	   window.addEventListener("mousewheel",mousewheel,false);
               window.addEventListener("DOMMouseScroll",mousewheel,false);
               window.addEventListener("resize",resize,false);
        con.addEventListener("mousewheel",function(e){e.stopPropagation();},false);
		document.body.removeChild(document.body.firstChild);
		//we may have to implement scaling if browsers don't work properly
        if(webkit){
		ctx.move=function(px,py,pz){
			return ctx.moveTo(scalex*px-cx,cy-scaley*py);
		};
        
		ctx.line=function(px,py,pz){
			return ctx.lineTo(scalex*px-cx,cy-scaley*py);
		};
        }else{
            ctx.move=function(px,py,pz){
            if(isNaN(px) || isNaN(py)){
                return;
            }
            if(px>overright){
                px=overright;
            }
            if(px<overleft){
                px=overleft;
            }
            if(py>overtop){
                py=overtop;
            }
            if(py<overbottom){
                py=overbottom;
            }
			return ctx.moveTo(scalex*px-cx,cy-scaley*py);
			return;
			if (!isNaN(py)) {
				if (py > boundtop*4) {
					ctx.moveTo(scalex*(px-cx), scaley*(cy-boundtop*4));
					return;
				} else if (py < boundbottom*4) {
					ctx.moveTo(scalex*(px-cx), scaley*(cy-boundbottom*4));
					return;
				}
				ctx.moveTo(scalex*(px+cx), scaley*(-cy-py));
			}
		};
        
		ctx.line=function(px,py,pz){
            if(isNaN(px) || isNaN(py)){
                return;
            }
            if(px>overright){
                px=overright;
            }
            if(px<overleft){
                px=overleft;
            }
            if(py>overtop){
                py=overtop;
            }
            if(py<overbottom){
                py=overbottom;
            }
			return ctx.lineTo(scalex*px-cx,cy-scaley*py);
			ctx.lineTo(scalex*px-cx, cy-scaley*py);
			return;
			if (!isNaN(py)) {
				if (py > boundtop *4) {
					ctx.lineTo(scalex*(px-cx), scaley*(cy-boundtop*4));
					return;
				} else if (py < boundbottom *4) {
					ctx.lineTo(scalex*(px-cx), scaley*(cy-boundbottom*4));
					return;
				}
				ctx.lineTo(scalex*(px-cx), scaley*(cy-py));
			}
		};
        
        
        
        }
		resize();
	}//end init();
	};//end ui
	

	//Is console visible:
	var _console=false;
    ui.modalConfig=function(){
        alert("Settings Panel Not Implemented Yet");
    };
	ui.console={"show":function(){
        con.style.display="block";
        _console=true;
    },"clear":function(){
        while(logt.firstChild){
            logt.removeChild(logt.firstChild);
        }
        return "Cleared";
	},"hide":function(){
        con.style.display="none";
        _console=false;
	},"toggle":function(){
        if(!_console){
            app.ui.console.show();
            $(conin).focus();
            return;
		}
        app.ui.console.hide();
    },"warn":function(x,noshow){
        var div=document.createElement("div");
        var warn=document.createElement("div");
        warn.className="warn";
        div.appendChild(warn);
        div.style.minHeight="23px";
        if(typeof x !="object"){
            div.appendChild(document.createTextNode(x));
        }else{
            div.appendChild(x);
		}
        logt.appendChild(div);
        if(!noshow && !_console){
			app.ui.console.show();
		}
        logt.scrollTop=1e8;    
    },"log":function(x,noshow){
        if(typeof x !="object"){
            var div=document.createElement("div");
            div.appendChild(document.createTextNode(x));
            logt.appendChild(div);
        }else{
            logt.appendChild(x);
		}
        if(!noshow && !_console){
			app.ui.console.show();
		}
        logt.scrollTop=1e8;

	}};
	
	return ui;
})();

function clear(){
    return app.ui.console.clear();
}
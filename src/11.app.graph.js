(function(){
	window.Color=Color;
	function Color(x){
		if(typeof x === "string"){
			var c = parseInt(x.substring(1),16);
			this.rgba=[0,0,0,1];
			this.rgba[2]=(c%256)/256;c>>=8;
			this.rgba[1]=(c%256)/256;c>>=8;
			this.rgba[0]=(c%256)/256;c>>=8;
		}else if(typeof x==="object"){
			this.rgba = [x[0]||0.0, x[1]||0.0, x[2]||0.0, x[3]||1.0];
		}else{
			//this.rgba=[0,0,0,1];
		}
	}
	Color.prototype = {
		get rgb(){
			return this.rgba.slice(0,-1);
		},
		set rgb(v){
			this.splice(0,3,v[0],v[1],v[2]);
		},
		toString: function(){
			var num = ((this.rgba[2]*256) | ((this.rgba[1]*256) << 8) | ((this.rgba[0]*256) << 16)).toString(16);
			while(num.length<6){
				num="0"+num;
			}
			return "#"+num;
		}
	};
	
	window.Color=Color;
	var colorpool=["#0077cc","#ff0000","#00ff00"].reverse().map(function(x){return new Color(x);});
	app.Graph = function(eq){
		this.color = colorpool.pop() || new Color([Math.random(),Math.random(),Math.random()]);
		this.latex=eq;
		this.math=M(this.latex);
	};
	
}());
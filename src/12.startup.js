function main(flags){
	var state;
	if(window.localStorage && localStorage.getItem){
		try{
			if(state = localStorage.getItem("graph-tk")){
				state = JSON.parse(state);
			}
		}catch(ex){
			throw("Could not load saved state.");
			state = undefined;
		}
	}
	app.init(state);
	app.createGraph("x/y");
	window.boot = "ok";
}

d.body.removeChild(d.getElementById("loading"));
window.boot = main;
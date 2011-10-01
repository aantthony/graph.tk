function init(){
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
	if(state == undefined){
		state = {}
	}
	app.ui = ui_init(window);
	app.public.cam(Math.PI/4,Math.PI/4, 10.5)
	app.createGraph("y^2<-x");
}

document.body.removeChild(document.getElementById("loading"));

track.time(init)("full load", new Date()-startupTime);
var app=(function(){
	var graphs = {};
	
	function guid(n){
	    var s=[];
	    for(var i=0;i<20;i++){
			s.push((~~(Math.random()*16)).toString(16));
	    }
		s=s.join("");
		if(graphs[s]){
			if(n>10){
				throw("Random is not random enough!");
			}
			return guid((n||0)+1);
		}
	    return s;
	}
	var app = {
		createGraph: function(eq){
			var g,id;
			graphs[id=guid()] = g = new app.Graph(eq);
			app.ui.createGraph(id, g);
			renderer.createGraph(id, g);
		},
		updateGraphWithID: function(id){
			console.log("App was notified that graph with id=",id, " was changed and is now ",graphs[id]);
			renderer.updateGraph(id, graphs[id]);
		}
	};
	
	return app;
}());
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
			graphs[id=guid()] = g = new app.Graph(eq||"x");
			
			track.time(function ui_create_graph(){
				app.ui.createGraph(id, g);
			});
			track.time(function renderer_create_graph(){
				renderer.createGraph(id, g)
			});
		},
		destroyGraph: function(id){
			renderer.destroyGraph(id);
			app.ui.destroyGraph(id);
		},
		updateGraphWithID: function(id){
			track.time(function renderer_updateGraph(){
				renderer.updateGraph(id, graphs[id]);
			})
		},
		showHideGraph: function(id, show){
			renderer.showHideGraph(id, show);
		},
		"public": {
			cam: function (lat_, long_, dist_){
				renderer.cam_lat = lat_;
				renderer.cam_long = long_;
				renderer.cam_dist = dist_;
			}
		}
	};
	
	return app;
}());
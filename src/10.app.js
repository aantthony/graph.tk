var app = (function(){
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
	"init": function(state){
		html = html();
	},
	createGraph: function(g){
		var g, id;
		graphs[id=guid()] = g = new app.Graph(g);
		g.id = id;
		html.didAddGraph(g);
		html.renderer.add(g);
		return g;
	},
	showHideGraph: function(id, show){
		graphs[id].hide(show);
	},
	"destroyGraph": function(id){
		graphs[id].delete();
		delete graphs[id];
		html.didDeleteGraph(id);
	}
};
return app;
})();
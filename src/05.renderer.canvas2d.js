canvasRenderers = {}; //fetched dynamically, because this is for slow browsers.
//Graph objects (see /src/GL/*)
renderers.push(function(){
	var graphs = {};
    var components = [];

	function graph_object(g){
		return new canvasRenderers
	}
	var renderer = {
        "name": "webGL",
        "add": function(g) {
            g.addDelegate(this);
            this.update(g);
        },
        "update": function(g, flags) {
            if (g) {
                graphs[g.id] = graph_object(g);
            }
            drawScene();
        },
        "delete": function(g) {
            delete graphs[g.id];
            drawScene();
        },
        "hide": function(g) {
            graphs[g.id].visible = g.visible;
            drawScene();
        },
        "show": function(g) {
            graphs[g.id].visible = g.visible;
            drawScene();
        },
        "resize": function(width, height, no_redraw) {
            if (!no_redraw) {
                drawScene();
            }
        },
        "draw": function() {
            drawScene();
        },
        "setVelocity": function(velocity) {
            //never use (0,0) use FALSE instead
            if (velocity) {
                renderer.velocity = velocity;
                startAnimation();
            } else {
                if (renderer.velocity) {
                    if (!renderer.dchange && !renderer.animating) {
                        stopAnimation();
                    }
                }
                renderer.velocity = false;
            }
        },
        "stopMoveInDirection": function() {

		}

    };
	function drawScene(){
		for (id in graphs) {
            if (graphs.hasOwnProperty(id)) {
                if (graphs[id].visible) {
                    graphs[id].draw(canvas, t);
                }
            }
        }
	}
	return renderer;
	
});
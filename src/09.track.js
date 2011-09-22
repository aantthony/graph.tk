var track = (function() {
	var performance = {};
	var track = {
		event: function() {
			
		},
		error: function(){
			
		},
		time: function(event, ms) {
			if(ms == undefined){
				return track.time(event.name, event);
			}
			if(typeof ms == "function"){
				var start = new Date();
				ms.apply(Array.prototype.slice.apply(arguments,[2]));
				return track.time(event, new Date() - start);
			}else{
				console.log("Performance Log: '"+event+"' took "+ms+" ms.");
			}
			switch(event){
				case "render":
					if(ms > 300){
						renderer.decreaseQuality();
					}
			}
			return track.time;
		}
	};
	return track;
}());
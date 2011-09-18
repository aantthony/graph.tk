
(function() {
	var already = {};
	for(i in window){
		already[i]=true;
	}
	window.__defineGetter__("globals",function() {
		var obj = [];
		var i;
		for(i in window){
			if(already[i] !== true){
				obj.push(i);
			}
		}
		return obj;
	});
}());

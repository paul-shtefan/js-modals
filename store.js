var Store = function()
{
	var windows = new Array();
	var currWindowId;
	var cache = {};

	function loadMap(){
		map.windows.forEach(function(w){

			var mWindow = new model.mWindow(w.id, w.x, w.y, w.width, w.height, w.title);
			store.windows.push(mWindow);

			// Load and append custom UI elements
			if(w.elements)
				w.elements.forEach(function(e){
					switch(e.type){
						case 'link': {
							var link = model.wLink(e.x, e.y, e.text, e.targetWindowId, w.id);
							mWindow.appentElement(link);
							break;
						}
					}
				});

			// Append default system UI elements
			mWindow.appentElement(model.wClose(w.x + w.width - 53, w.y + 2, w.id));
		});
	}

	function setCurrWindow(id){
		currWindowId = id;
	}

	function getCurrWindow(){
		if(currWindowId)
			return getWindow(currWindowId);

		return null;
	}

	function getWindow(id){
		if(!cache[id])
			for(var i = 0, len = windows.length; i < len; i++) {
				var w = windows[i];
				if(w.id == id){
					cache[id] = w;
				}
			}

		return cache[id];
	}

	return {
		windows: windows,
		getCurrWindow: getCurrWindow,
		setCurrWindow: setCurrWindow,
		loadMap: loadMap,
		getWindow: getWindow
		
	}
}
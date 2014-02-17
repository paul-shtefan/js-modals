var Events = function(){

	function initKeyEvents(){
		document.addEventListener('keydown', keyDownHandler, false);
	}

	function keyDownHandler(e){
		var currWindow = store.getCurrWindow();

		var keyCodesMaps = {
			32: function(){
				if(!currWindow && store.windows.length > 0){
						store.windows[0].show();
					}			
			},
			37: function(){
				if(currWindow)
					currWindow.changeElementFocus('left');
			},
			38: function(){
				if(currWindow)
					currWindow.changeElementFocus('top');
			},
			39: function(){
				if(currWindow)
					currWindow.changeElementFocus('right');
			},
			40: function(){
				if(currWindow)
					currWindow.changeElementFocus('bottom');
			},
			13: function(){
				currWindow.selectedElement.click();
			},
			27: function(){
				currWindow.close();
			}
		};

		keyCodesMaps[e.keyCode]();

		drawing.drawScene();
	}

	return {
		initKeyEvents: initKeyEvents
	}
}
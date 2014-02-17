var Events = function(){

	function initKeyEvents(){
		document.addEventListener('keydown', keyDownHandler, false);
	}

	function keyDownHandler(e){
		var currWindow = store.getCurrWindow();
		switch(e.keyCode){
			case 32: {
				
				if(!currWindow && store.windows.length > 0){
					store.windows[0].show();
				}
				break;
			}

			case 37: {
				if(currWindow)
					currWindow.changeElementFocus('left');
				break;
			}

			case 38: {
				if(currWindow)
					currWindow.changeElementFocus('top');
				break;
			}

			case 39: {
				if(currWindow)
					currWindow.changeElementFocus('right');
				break;
			}

			case 40: {
				if(currWindow)
					currWindow.changeElementFocus('bottom');
				break;
			}

			case 13: {
				currWindow.selectedElement.click();
				break;
			}

			case 27: {
				currWindow.close();
				break;
			}
		}

		drawing.drawScene();
	}

	return {
		initKeyEvents: initKeyEvents
	}
}
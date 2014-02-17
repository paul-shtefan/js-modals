var Drawing = function(){

	function drawScene(){
		canvas.clearCanvas();
		if(store.getCurrWindow() != null) 
			drawMoadlWindow(store.getCurrWindow());
	}

	function drawMoadlWindow(window){
		canvas.drawRect(window.x, window.y, window.width, window.height, '#fff', 5);
		canvas.drawText(window.x + 10, window.y + 35, window.title, '30px Verdana', '#000');

		window.elements.forEach(function(element){
			switch(element.type){
				case 'wLink':
					drawLink(window, element);
					break;

				case 'wClose':
					drawCloseButton(window, element);
					break;
			}
			
		});
	}

	function drawLink(window, button){
		var xPos = parseInt(window.x + button.x);
		var yPos = parseInt(window.y + button.y);

		drawElement(xPos, yPos, 100, 50, button == window.selectedElement);
		canvas.drawText(xPos + 10, yPos + 30, button.text, '15px Verdana bold', '#000');
	}

	function drawCloseButton(window, closeButton){
		var xPos = closeButton.x;
		var yPos = closeButton.y;

		drawElement(xPos, yPos, 50, 50, closeButton == window.selectedElement);
		canvas.drawText(xPos + 17, yPos + 33, 'X', '20px Verdana bold', '#000');
	}

	function drawElement(x, y, width, height, selected){
		canvas.drawRect(x, y, width, height, selected ? '#ddd' : '#C4C4C4', selected ? 2 : 0);
	}

	return {
		drawScene: drawScene
	}
}
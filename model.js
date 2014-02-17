function Model(){

	function mWindow(id, x, y, width, height, title){

		var id = id;
		var x = x; 
		var y = y;
		var title = title;
		var width = width; 
		var height = height;
		var elements = new Array();
		var senderId;
		var selectedElement = elements[0];

		function appentElement(element){
			elements.push(element);
		}

		function changeElementFocus(side){
			var currWindow = store.getCurrWindow();

			currWindow.selectedElement = !currWindow.selectedElement ? 
											currWindow.elements[0] : 
												calc.getCloseNeighbor(side, currWindow.elements, currWindow.selectedElement);
		}

		function show(sender){

			store.getWindow(this.id).senderId = sender;
			store.setCurrWindow(this.id);
		}

		function close(){
			store.setCurrWindow(this.senderId);
		}

		return {
			id: id,
			x: x,
			y: y,
			width: width,
			height: height,
			title: title,
			elements: elements,
			selectedElement: selectedElement,
			senderId: senderId,

			appentElement: appentElement,
			show: show,
			close: close,
			changeElementFocus: changeElementFocus

		}
	}

	function wClose(x, y, containerId){
		var x = x;
		var y = y;
		var containerId = containerId;

		function click(){
			store.getWindow(containerId).close();
		}

		return {
			type: 'wClose',
			click: click,
			x: x,
			y: y
		}
	}

	function wLink(x, y, text, targetId, containerId){
		var x = x;
		var y = y;
		var text = text;
		var targetId = targetId;
		var containerId = containerId;

		function click(){
			store.getWindow(targetId).show(containerId);
		}

		return {
			x: x,
			y: y,			
			text: text,
			click: click,
			type: 'wLink'
		}
	}

	return {
		mWindow: mWindow,
		wLink: wLink,
		wClose: wClose
	}
}
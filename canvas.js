var Canvas = function(){

	function canvas(){
		return document.getElementById('canvas');
	}

	function context(){
		return canvas().getContext('2d');
	}

	function clearCanvas(){
		var cnv = canvas();
		cnv.width = cnv.width;
	}

	function drawRect(x, y, width, height, fillColor, borderWidth){
		var ctx = context();

		ctx.beginPath();
      	ctx.rect(x, y, width, height);
      	ctx.fillStyle = fillColor;
      	ctx.fill();
      	
      	if(borderWidth > 0) {
      		ctx.lineWidth = borderWidth;
    	  	ctx.strokeStyle = '#05BCE6';
	      	ctx.stroke();
      	}
	}

	function drawText(x, y, text, font, color){
		var ctx = context();
		ctx.font = font;
		ctx.fillStyle = color;
      	ctx.fillText(text, x, y);
	}

	return {
		canvas: canvas,
		context: context,
		clearCanvas: clearCanvas,
		drawRect: drawRect,
		drawText: drawText
	}
}
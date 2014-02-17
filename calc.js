var Calc = function(){

	function getCloseNeighbor(side, elements, currElement){
		var neighbors = new Array();

		switch(side){
			case 'top': {
				elements.forEach(function(el){
					if(el.y < currElement.y)
						neighbors.push(el);
				});
				break;
			}

			case 'left': {
				elements.forEach(function(el){
					if(el.x < currElement.x)
						neighbors.push(el);
				});
				break;
			}

			case 'right': {
				elements.forEach(function(el){
					if(el.x > currElement.x)
						neighbors.push(el);
				});
				break;
			}

			case 'bottom': {
				elements.forEach(function(el){
					if(el.y > currElement.y)
						neighbors.push(el);
				});
				break;
			}			
		}

		var closeNeighbor = {neighbor: null, distance: 100000};
		neighbors.forEach(function(n){
				var distance = getDistance(
					{ x: currElement.x, y: currElement.y },
					{ x: n.x, y: n.y });

				closeNeighbor = distance <= closeNeighbor.distance ? 
									{neighbor: n, distance: distance} : 
										closeNeighbor;
		});

		return !closeNeighbor.neighbor ? currElement : closeNeighbor.neighbor;
	}

	function getDistance(point0, point1){
		var distance = Math.sqrt(
			Math.abs(
				Math.pow((point1.x - point0.x), 2) + 
				Math.pow((point1.y - point0.y), 2))
			);

		return distance;
	}

	return {
		getCloseNeighbor: getCloseNeighbor
	}
}
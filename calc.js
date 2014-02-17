var Calc = function(){

	function getCloseNeighbor(side, elements, currElement){
		var neighbors = new Array();

		var neighborQuarterFilter = {
			'top': function(el){
				return el.y < currElement.y ? el : null;
			},
			'left': function(el){
				return el.x < currElement.x ? el : null;
			},
			'right': function(el){
				return el.x > currElement.x ? el : null
			},
			'bottom': function(el){
				return el.y > currElement.y ? el : null
			}			
		}

		elements.forEach(function(el){
			var fel = neighborQuarterFilter[side](el);
			if(fel)
				neighbors.push(fel);
		});

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
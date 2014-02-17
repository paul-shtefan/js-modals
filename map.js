var map = {
	windows: [
		{
			id: 1,
			title: 'window 0',
			x: 100,
			y: 100,
			width: 900,
			height: 400,
			elements: [
				{
					type: 'link',
					x: 10,
					y: 340,
					text: 'open 1.1',
					targetWindowId: 2
				},
				{
					type: 'link',
					x: 120,
					y: 320,
					text: 'open 1.2',
					targetWindowId: 3
				},
				{
					type: 'link',
					x: 230,
					y: 340,
					text: 'open 1.3',
					targetWindowId: 4
				},
				{
					type: 'link',
					x: 120,
					y: 240,
					text: 'open 1.4',
					targetWindowId: 5
				}					
			]

		},
		{
			id: 2,
			title: 'window 1.1',
			x: 100,
			y: 100,
			width: 900,
			height: 400,
			elements: [
				{
					type: 'link',
					x: 10,
					y: 340,
					text: 'open 2.1',
					targetWindowId: 6
				},
				{
					type: 'link',
					x: 120,
					y: 320,
					text: 'open 2.2',
					targetWindowId: 7
				}
			]
		},
		{
			id: 3,
			title: 'window 1.2',
			x: 100,
			y: 100,
			width: 900,
			height: 400,
			elements: [
				{
					type: 'link',
					x: 10,
					y: 340,
					text: 'open 2.1',
					targetWindowId: 6
				},
				{
					type: 'link',
					x: 120,
					y: 340,
					text: 'open 2.2',
					targetWindowId: 7
				},				{
					type: 'link',
					x: 260,
					y: 340,
					text: 'open 2.1',
					targetWindowId: 6
				},
				{
					type: 'link',
					x: 120,
					y: 50,
					text: 'open 2.2',
					targetWindowId: 7
				},				
				{
					type: 'link',
					x: 260,
					y: 70,
					text: 'open 2.1',
					targetWindowId: 6
				}
			]

		},
		{
			id: 4,
			title: 'window 1.3',
			x: 100,
			y: 100,
			width: 900,
			height: 400		
		},
		{
			id: 5,
			title: 'window 1.4',
			x: 100,
			y: 100,
			width: 900,
			height: 400		
		},
		{
			id: 6,
			title: 'window 2.1',
			x: 100,
			y: 100,
			width: 500,
			height: 200		
		},
		{
			id: 7,
			title: 'window 2.2',
			x: 100,
			y: 100,
			width: 600,
			height: 250		
		}
	]
}
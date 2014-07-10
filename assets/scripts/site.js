if (window.DeviceOrientationEvent) {
	alert('DeviceOrientationEvent');

	var wrapper = document.body;

	window.addEventListener('deviceorientation', function (eventData) {
		
		return;

/*
		if (!eventData.beta && !eventData.gamma)
			return;
*/

		var y = Math.round((-eventData.beta + 90) * (40/180) - 40);
		var x = Math.round(-eventData.gamma * (20/180) - 20);

		if (x > 0) {
			x = -x;
		} else if (x < -40) {
			x = -(x + 80);
		}

		var position = y + 'px ' + x + 'px';
		wrapper.style.backgroundPosition = position;

	}, false);
}


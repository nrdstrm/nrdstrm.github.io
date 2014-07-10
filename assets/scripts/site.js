if (window.DeviceOrientationEvent) {
	alert('DeviceOrientationEvent');

	window.addEventListener('deviceorientation', function (eventData) {

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

		var log = document.getElementById('log');
		alert(log);

		log.value = 'x: ' + x + ', y: ' + y;

	}, false);
}


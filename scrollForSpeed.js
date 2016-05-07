function scrollForSpeed(multiplier) {
	
	multiplier = multiplier || 10;
	
	var vid = document.getElementsByClassName("test");
	var lengthOfVid = vid.length;
	
	var lastSpeed;
	var lastTop = 0;
	var top = 0;
	$( window ).scroll(function() {
		
		top = $(window).scrollTop();
		
		var speed = Math.abs(top - lastTop);
		
		
		if (speed > 1.5 && lastSpeed > 5&& speed < 100) {for (var x = 0; x < vid.length; x++) {vid[x].playbackRate = speed*multiplier;}}
		else {for (var x = 0; x < vid.length; x++) {vid[x].playbackRate = 1;}}
		console.log(speed*multiplier + " ja " + vid[0].playbackRate);
		lastSpeed = speed;
		lastTop = top;
	});
}


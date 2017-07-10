var sounds = [
"bubbles.mp3",
"clay.mp3",
"confetti.mp3", 
"corona.mp3",
"dotted-spiral.mp3",
"flash-1.mp3",
"flash-2.mp3",
"flash-3.mp3",
"glimmer.mp3",
"moon.mp3",
"pinwheel.mp3",
"piston-1.mp3",
"piston-2.mp3",
"piston-3.mp3",
"prism-1.mp3",
"prism-2.mp3",
"prism-3.mp3",
"splits.mp3",
"squiggle.mp3",
"strike.mp3",
"suspension.mp3",
"timer.mp3",
"ufo.mp3",
"veil.mp3",
"wipe.mp3",
"zig-zag.mp3"]

var circles = [];

// Only executed our code once the DOM is ready.
window.onload = function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('myCanvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	paper.view.draw();

	document.addEventListener("keypress", function(event) {
		var sound = new Howl({
			src: ['assets/sounds/' + sounds[event.charCode - 97]],
			buffer: true
		});
		sound.play();

		var x = Math.floor(Math.random() * window.innerWidth + 10);
		var y = Math.floor(Math.random() * window.innerHeight + 10);
		var r = Math.floor(Math.random() * 200 + 100);

		//paper.project.activeLayer.removeChildren();

		var myCircle = new paper.Path.Circle(new paper.Point(x, y), r);
		myCircle.fillColor = new paper.Color(Math.random(), Math.random(), Math.random(), 1);
		circles.push(myCircle);

		paper.view.onFrame = function(event) {
			for(var i = 0; i < circles.length; i++) {
				circles[i].fillColor.hue += 1;
				circles[i].scale(0.95);
				if(circles[i].area < 1) {
					circles[i].remove();
					circles.splice(i, 1);
				}
			}
		}
	});
}

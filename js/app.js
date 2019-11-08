

window.addEventListener("load", function() {
	let noise = new SimplexNoise(Math.random)
	let loopTime = 4
	let count = 300

	function radialNoise(r, theta, offset) {
		
		return noise.noise2D(r*Math.cos(theta) + offset, r*Math.sin(theta) + offset)
	}

	 utilities.createProcessing("drawing", (t, g) => {
		// Update
	}, (g, time) => {
		g.background(0)
		let t = time.current

		let pct = (t%loopTime)/loopTime
		// console.log(pct)

		for (var i = 0; i < count; i++) {
			let noiseTheta = i*.02 + pct*Math.PI*2
			let v = radialNoise(.4, noiseTheta, i*.01)

			let theta = Math.PI*4*i/count + pct*Math.PI*2
			let r = radialNoise(.4, noiseTheta, i*.01 + 100)
			let radius = 20*(radialNoise(.4, noiseTheta, i*.01 + 300) + 1)
			let hue = 2*(radialNoise(.1, noiseTheta, i*.001 + 500) + 1)
				
				r = 50*(r + 1)
			g.fill(hue%1, 1, 1)
			g.stroke(hue%1, .3, 1)
			// let r = radialNoise(10, )
			// g.ellipse((i/count - .5)*g.width, .5*v*g.height, 5, 5)
				g.ellipse(1.5*r*Math.cos(theta), r*Math.sin(theta), radius, radius)
		}
		// Draw
	})




	// Override save commands
	document.addEventListener("keydown", (e) => {
		if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
			e.preventDefault();
				// Process the event here (such as click on submit button)
				
				
			}
		}, false);
	
});

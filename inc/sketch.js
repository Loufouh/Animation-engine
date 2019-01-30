"use strict"

let dist = 0;
let radiusGoal = 100;
let currentRadius = 200;

function setup() {

}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	fill(new Color(255));

	let x = currentRadius*Math.cos(dist*Math.PI/30);
	let y = currentRadius*Math.sin(dist*Math.PI/30);

	circle(canvas.width/2 + x, canvas.height/2 + y, 50);	

	if(dist >= 360)
		dist = 0;
	
	if(currentRadius === radiusGoal)
		radiusGoal = randomInt(50, 400);

	currentRadius += (currentRadius < radiusGoal)? 1 : -1;
	dist++;
}


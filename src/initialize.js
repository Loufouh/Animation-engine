"use strict";

let canvas;
let fpsCursor;
let fpsContainer;

window.onload = function () {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));
	
	fpsContainer = document.getElementById("fpsContainer");

	fpsCursor = document.querySelector("input");
	fpsCursor.addEventListener("mousemove", ()=>wantedFPS = fpsCursor.value)
	fpsCursor.value = wantedFPS = 35;
	
	start();
}

function updateFPS() {
	wantedFPS = fpsCursor.value;
}


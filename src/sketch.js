"use strict"

let tickContainer;
let fpsCursor;

let dist = 0;
const TRAJECTORY_RADIUS = 200;

function setup() {
    tickContainer = document.getElementById("tick-container");
    fpsCursor = document.getElementById("fps-control");

    fpsCursor.addEventListener("input", function () {
        wantedFPS = fpsCursor.value;
    });

    wantedFPS = fpsCursor.value;
}

function loop() {
    let deltaTime = tick();

    tickContainer.innerHTML = String(deltaTime);

    background(new Color(200, 100, 10, 1, ColorType.HSL));
    drawCircle();

    dist += (deltaTime / 15) % 360;
}

function drawCircle() {
    fill(new Color(255));

    circle(
        canvas.width / 2 + TRAJECTORY_RADIUS * Math.cos(dist * Math.PI / 30),
        canvas.height / 2 + TRAJECTORY_RADIUS * Math.sin(dist * Math.PI / 30),
        50
    );
}

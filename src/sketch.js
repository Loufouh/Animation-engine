"use strict"

let tickContainer;
let fpsCursor;

let dist = 0;
let radiusGoal = 100;
let currentRadius = 200;

function setup() {
    tickContainer = document.getElementById("tick-container");
    fpsCursor = document.getElementById("fps-control");

    fpsCursor.addEventListener("input", function () {
        wantedFPS = fpsCursor.value;
    });

    fpsCursor.value = wantedFPS = 35;
}

function loop() {
    tickContainer.innerHTML = String(tick());

    background(new Color(200, 100, 10, 1, ColorType.HSL));
    drawCircle();

    if (dist >= 360) {
        dist = 0;
    }

    if (currentRadius === radiusGoal) {
        radiusGoal = randomInt(10, 300);
    }

    currentRadius += (currentRadius < radiusGoal) ? 1 : -1;
    dist++;
}

function drawCircle() {
    fill(new Color(255));

    let x = currentRadius * Math.cos(dist * Math.PI / 30);
    let y = currentRadius * Math.sin(dist * Math.PI / 30);

    circle(canvas.width / 2 + x, canvas.height / 2 + y, 50);
}

"use strict";

let lastTickTime = new Date();

function tick() {
    let newTickTime = new Date();
    let deltaTime = newTickTime - lastTickTime;

    lastTickTime = newTickTime;

    return deltaTime;
}

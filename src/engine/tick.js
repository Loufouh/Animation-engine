"use strict";

let lastTickTime = undefined;

/**
 * Indicate the time spent since last call.
 * @returns {number} The time in milliseconds (0 if first call).
 */
function tick() {
    let newTickTime = new Date();

    if(lastTickTime === undefined) {
        lastTickTime = newTickTime;
    }

    let deltaTime = newTickTime - lastTickTime;

    lastTickTime = newTickTime;

    return deltaTime;
}

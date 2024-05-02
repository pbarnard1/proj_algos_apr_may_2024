// Counting Valleys problem: https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
function countingValleys(steps, path) {
    let altitude = 0; // How high up we are in elevation, starting at 0 (sea level)
    let valleyCount = 0; // Number of valleys we encounter
    // Loop through the string to travel along this path
    for (let k = 0; k < steps; k++) { // Either "steps" OR "path.length" in the middle
        // console.log(`The current character at index ${k} is ${path[k]}`);
        if (path[k] === "U") {
            // console.log("Going up");
            if (altitude === -1) { // About to leave the valley, as we're at an altitude of -1 and are about to ascend to sea level
                // console.log("Altitude is -1, and we're going up, so adding 1 to valley count");
                valleyCount++;
            }
            altitude++; // Go up
        } else {
            // console.log("Going down");
            altitude--; // Go down
        }
        // console.log(`Altitude is now ${altitude}`);
    }
    // console.log(`Number of valleys = ${valleyCount}`)
    return valleyCount;
}
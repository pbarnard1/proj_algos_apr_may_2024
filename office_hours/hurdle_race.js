// The Hurdle Race challenge: https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true
function hurdleRace(k, height) {
    // Find max height
    let maxHeight = height[0];
    for (let k = 1; k < height.length; k++) {
        if (height[k] > maxHeight) {
            maxHeight = height[k];
        }
    }
    // three ways to return the value, while ensuring we return at least 0
    // if (maxHeight > k) {
    //     return maxHeight - k;
    // } else {
    //     return 0;
    // }
    return maxHeight - k > 0 ? maxHeight - k : 0;
    // return Math.max(0, maxHeight - k);
}
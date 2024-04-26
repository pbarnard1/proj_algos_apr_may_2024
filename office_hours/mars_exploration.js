// Mars Exploration string challenge from HackerRank: 
// https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
function marsExploration(s) {
    let incorrectCharCount = 0; // How many characters in the received signal are INCORRECT
    // Loop will go through each set of 3 characters
    for (let i = 0; i < s.length; i += 3) { // Notice how we increment here!
        // Note we have 3 INDEPENDENT checks for each character!
        // Check the first character in the "box" of 3 characters
        if (s[i] !== "S") {
            incorrectCharCount++;
        }
        if (s[i+1] !== "O") { // Check second character in box
            incorrectCharCount++;
        }
        if (s[i+2] !== "S") { // Check third character in box
            incorrectCharCount++;
        }
    }
    return incorrectCharCount;
}
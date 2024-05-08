/*
HackerRank challenge Alternating Characters: https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true
*/
function alternatingCharacters(s) {
    let totalDeletions = 0; // The number of deletions we'll need to make in the string
    // let charChange = false; // Boolean indicating whether we've changed characters
    // Loop through the string one character at a time
    for (let k = 1; k < s.length; k++) { // Start at index 1 because we're comparing the character before to the current one
        // let curChar = s[k]; // Current character in the string at index k
        if (s[k-1] === s[k]) { // Compare the current character to the one before it
            // console.log(`Characters ${s[k-1]} and ${s[k]} at indexes ${k-1} and ${k} for the string ${s} are the same`);
            totalDeletions++; // If the characters are the same, we increment the number of deletions
        }
    }
    return totalDeletions;
}
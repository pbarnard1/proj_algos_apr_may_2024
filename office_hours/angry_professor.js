/*
Angry Professor challenge: https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true
*/

function angryProfessor(k, a) {
    let onTimeCount = 0; // Number of students who arrive on time
    // Go through each value in the array, one at a time
    for (let val of a) {// For-each loop where we grab each value from the array directly without worrying about the index - this is in order
        // console.log(val);
        // Check this value against 0 - is the student on time?
        if (val <= 0) {
            // The student is on time if the value is negative or 0
            onTimeCount++; // Increase this counter by 1
        }
    }
    // Compare the number of students who are actually on time (onTimeCount)
    // and the minimum number of students we actually need (k) to determine
    // whether we will hold class
    // if (onTimeCount >= k) { // Check to see if we have enough students
    //     return "NO";
    // } else { // Not enough students - yes, class is cancelled
    //     return "YES";
    // }
    // ONE-LINE version with a ternary operator
    // Syntax: condition ? valueIfTrue : valueIfFalse
    return onTimeCount >= k ? "NO" : "YES";
}
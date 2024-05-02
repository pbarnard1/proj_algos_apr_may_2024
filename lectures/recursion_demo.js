function nonrecursiveCountdown(startingValue = 10) {
    // Count down from starting value to 1, inclusively
    for (let i = startingValue; i >= 1; i--) {
        console.log(i);
    }
    console.log("Liftoff!");
}
// nonrecursiveCountdown();
// nonrecursiveCountdown(30);

// Recursive countdown function
function rCountdown(value) {
    console.log(value);
    if (value <= 1) { // Base case - recursion stops
        console.log("Lift off!");
        return; // Stop the recursion
    }
    rCountdown(value-1); // Recursive step
}

// rCountdown(10);

let myArr = [10, 5, 7, [1, 3, [8, 3, [], 5, [1, [3]]], -3], [4, 7, -5, 10]];

// Challenge: given an array that will have numbers or subarrays of numbers, return the sum of ALL values.
function arraySum(currentArr) {
    let overallSum = 0;
    console.log("Current array is:");
    console.log(currentArr);
    // Go through the current array, one item at a time
    for (let k = 0; k < currentArr.length; k++) {
        if (Array.isArray(currentArr[k])) { // We have an array
            console.log("This is an array:")
            console.log(currentArr[k])
            overallSum += arraySum(currentArr[k]); // Add the values in this subarray recursively
        } else { // We have a value, so add it (this is an implicit base case)
            console.log(`Adding the value ${currentArr[k]}`);
            overallSum += currentArr[k];
        }
    }
    return overallSum; // Return the sum
}

// Demo checking if we have an array or not
// console.log(myArr);
// for (let val of myArr) {
//     console.log(val);
//     console.log(Array.isArray(val));
// }

console.log(arraySum(myArr));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /* FASTER VERSION with a hash table (object) */
    // Hash table
    let allFoundValues = {};
    for (let k = 0; k < nums.length; k++) {
        let currentValue = nums[k];
        // Check to see if the value is NOT in the hash table - didn't need if statement;
        // we will save the LAST instance of the value in terms of index
        // if (!(currentValue in allFoundValues)) {
            allFoundValues[currentValue] = k;
        // }
    }
    // console.log(allFoundValues);
    // Loop again through the array to find the indexes where the values add up to the target
    for (let k = 0; k < nums.length; k++) {
        let currentVal = nums[k];
        let otherValue = target - nums[k];
        // console.log(`The current value at index ${k} is ${currentVal}`);
        // console.log(`Search for the value ${otherValue}`);
        // Check to see whether the other value exists in the hash map
        // console.log(otherValue in allFoundValues);
        // console.log(`Checking to see if ${otherValue} is NOT at index ${k}`)
        // console.log(allFoundValues[otherValue] != k);
        // If we find the corresponding value in the hash map AND
        // this value is at an index OTHER than the current location (index k)
        if (otherValue in allFoundValues && allFoundValues[otherValue] != k) {
            return [k, allFoundValues[otherValue]];
        }
        // return [-1, -1]; // Arbitrary answer saying that there is no solution
    }

    /* SLOWER VERSION that uses a nested for loop */
    // /* Loop through the values in the array */
    // // Left pointer: starting at index 0 and ending at the SECOND to last value (hence the -1)
    // for (let i = 0; i < nums.length - 1; i++) {
    //     // Right pointer: starting at the first index AFTER the left pointer (hence the i + 1)
    //     for (let j = i + 1; j < nums.length; j++) { 
    //         // Add these two values
    //         let currentSum = nums[i] + nums[j];
    //         // Check to see whether these two values add up to the target or not
    //         if (currentSum === target) {
    //             return [i, j]; // Return the two indexes as an array
    //         }
    //     }
    // }
    // return [-1, -1]; // Arbitrary answer saying that there is no solution
};
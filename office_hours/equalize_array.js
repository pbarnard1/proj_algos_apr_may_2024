// Equalize the Array challenge: https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true
function equalizeArray(arr) {
    // Keep track of how many times each value in the array occurs
    let valueFreq = {};
    /* Example with [3, 1, 2, 3, 3]
        {
            "3": 3, // "value": frequency (number of times the value was found in the array)
            "2": 1,
            "1": 1
        }
    */
    for (let val of arr) { // "Enhanced" for/for each loop where we grab each value directly from the array in order
        if (val in valueFreq) { // Check to see if we have found this value beforehand (i.e. a duplicate)
            valueFreq[val]++; // Increase the frequency by one
        } else { // This is a new value
            valueFreq[val] = 1; // New value, so set its initial frequency to 1
        }
        // console.log(valueFreq);
    }
    // Determine the highest frequency, because the minimum number of deletions will
    // be the size of the array MINUS the highest frequency (i.e. if we keep the
    // value that occurs the most, this will lead to the smallest number of deletions)
    
    // Loop through our hash map (object) to find the highest frequency
    let maxFreq = 0;
    for (let key in valueFreq) { // Go through each key, one at a time
        // console.log(key);
        if (valueFreq[key] > maxFreq) { // New highest frequency found
            maxFreq = valueFreq[key];
        }
    }
    return arr.length - maxFreq;
}
var getRow = function(rowIndex) {
    // Recursive function with a memo (calculatedValues) to help us find and calculate terms in Pascal's triangle
    // Challenge: can you minimize the recursive calls even more?
    function getPascalTerm(row, col, calculatedValues = {}) {
        let key = `${row},${col}`;
        if (!(key in calculatedValues)) { // If we do NOT have this value saved, calculate it via recursion and save into our memo
            if (row == col || col == 0) { // End of row OR start of row - base cases
                calculatedValues[key] = 1; // Save this value in the memo
                return 1;
            }
            // Recursively (if needed) look at the row above to the left and right (print statements done for visualization - no colors)
            console.log(`Calculating term at row ${row-1} and column ${col-1}...`);
            let leftTerm = getPascalTerm(row-1,col-1, calculatedValues);
            console.log(`Term at row ${row-1} and column ${col-1} is ${leftTerm}`);
            console.log(`Calculating term at row ${row-1} and column ${col}...`);
            let rightTerm = getPascalTerm(row-1,col, calculatedValues);
            console.log(`Term at row ${row-1} and column ${col} is ${rightTerm}`);
            // Save these values in our memo
            calculatedValues[`${row-1},${col-1}`] = leftTerm;
            calculatedValues[`${row-1},${col}`] = rightTerm;
            // Save this new term in this row in our memo
            calculatedValues[key] = leftTerm + rightTerm;
        } 
        return calculatedValues[key];
    }
    // Now calculate values for the indicated row (0-indexed)
    let allValues = [];
    for (let k = 0; k <= rowIndex; k++) {
        allValues.push(getPascalTerm(rowIndex,k));
    }
    return allValues;
};

// Display first 10 rows
for (let k = 0; k < 10; k++) {
    console.log(getRow(k));
}
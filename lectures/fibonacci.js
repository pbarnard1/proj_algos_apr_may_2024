// Fibonacci sequence with no memos or comments from console.log statements:
function plainFibonacci(k) {
    if (k <= 1) {
        return k;
    }
    return plainFibonacci(k-1) + plainFibonacci(k-2);
}

// Fibonaccis with visuals via console.log (might need to do this via console in your browser to see the colors)
function plainFibonacciWithComments(k, colorArr, level = 0) {
    if (k <= 1) {
        console.log(`Base case reached at k = ${k}: returning this value...`);
        return k;
    }
    console.log(`%cCalculating the left term at index ${k-1}:`,`color:${colorArr[level % colorArr.length]}`);
    let leftTerm = plainFibonacciWithComments(k-1, colorArr, level+1);
    console.log(`%cCalculating the right term at index ${k-2}:`,`color:${colorArr[level % colorArr.length]}`);
    let rightTerm = plainFibonacciWithComments(k-2, colorArr, level+1);
    console.log(`%cReturning the term at index ${k}: ${leftTerm+rightTerm}`,`color:${colorArr[level % colorArr.length]}`);
    return leftTerm + rightTerm;
}

let myColorArr=["red","blue","green","skyblue","#b1231a"];
plainFibonacciWithComments(7,myColorArr);

// Recursive Fibonacci with a memo that saves previous calculations
function fibonacci(k, calculatedTerms = {}) { 
    if (k <= 1) { // Base cases: k = 0 and k = 1
        calculatedTerms[k] = k;
        return k;
    }
    let leftValue;
    // If we have NOT already calculated the "k-1"th term, do so via recursion
    if (!((k-1) in calculatedTerms)) {
        leftValue = fibonacci(k-1, calculatedTerms);
        calculatedTerms[k-1] = leftValue; // Save this calculation so we don't need to do it again
    } else { // Re-use the calculation, as we already know its value
        leftValue = calculatedTerms[k-1];
    }
    let rightValue;
    // If we have NOT already calculated the "k-2"th term, do so via recursion
    if (!((k-2) in calculatedTerms)) {
        rightValue = fibonacci(k-2, calculatedTerms);
        calculatedTerms[k-2] = rightValue; // Save this calculation so we don't need to do it again
    } else { // Re-use the calculation, as we already know its value
        rightValue = calculatedTerms[k-2];
    }

    return leftValue + rightValue;
}

// Test for larger terms from k = 0 through k = 100
for (let k = 0; k <= 100; k++) {
    console.log(`${k}th term is ${fibonacci(k)}`);
}
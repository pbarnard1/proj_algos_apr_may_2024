/*
Funny String challenge: https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true
*/
function funnyString(s) {
    // Adrian's solution

    let codeArr = []; // Array which will hold the ASCII codes
    for (let k = 0; k < s.length; k++) {
        const curChar = s[k];
        codeArr.push(curChar.charCodeAt(0));
    }
    // console.log(codeArr);
    let diffArr = []; // Hold the differences in the ASCII codes
    for (let k = 1; k < codeArr.length; k++) {
        diffArr.push(Math.abs(codeArr[k] - codeArr[k-1]));
    }
    // console.log(diffArr);
    // KEY: Both difference arrays must be symmetric (or like a palindrome) for the string to be funny, so there's no need to
    // reverse the string and get that difference array
    let leftInd = 0; // Point to left index
    let rightInd = diffArr.length - 1; // Point to right index
    while (leftInd < rightInd) {
        // If these differences don't match, it's not a funny string
        if (diffArr[leftInd] !== diffArr[rightInd]) {
            return "Not Funny";
        }
        leftInd++;
        rightInd--;
    }
    return "Funny"; // All differences match, so this is a funny match
    

    // Peer-built code from office hour (not 100% complete - so feel free to add on!)

    // let arr = [];
    // for(letter in s){
    //     arr.push(letter.charCodeAt());
    // }
    
    // const reverseArr = arr.reverse();
    // let tempArr = [];
    
    // for(let i = 0;i<arr.length;i++ ){
        
    //     if((i+1) <= arr.length){
    //         const diff = Math.abs(arr[i] - arr[i+1]);
    //         tempArr.push(diff);  
    //     }
    // }
    
    // arr = tempArr
    // tempArr = []
    
    // for(let i = 0;i<reverseArr.length;i++ ){
        
    //     if((i+1) <= reverseArr.length){
    //         const diff = Math.abs(arr[i] - arr[i+1]);
    //         tempArr.push(diff);  
    //     }
    // }
    
    // reverseArr = tempArr
    
    
    
}
/*
Check to see whether a given string, s, is a palindrome AFTER all non-alphanumeric (letters and numbers) are removed, AND
the string is converted to lower case.  We will get a boolean in return.
*/

function isPalindrome(s) {
    // Make a new string to remove all characters that aren't letters or numbers
    let newStr = "";
    for (let k = 0; k < s.length; k++) {
        let curChar = s[k]; // Current character
        curChar = curChar.toLowerCase(); // Convert to lower case
        // Is this a letter OR a number?
        if (("a" <= curChar && curChar <= "z") || ("0" <= curChar && curChar <= "9")) {
            newStr = newStr.concat(curChar); // If so, add this letter/number to the string
        }
    }
    // console.log(newStr); // To see what's left of the original string - only numbers and letters
    // Take the remaining string and check to see if it's a palindrome (here is a demo of the two-pointer method)
    for (let k = 0; k < Math.floor(newStr.length / 2); k++) {
        // Grab the character in the first half
        let leftChar = newStr[k];
        // Character at the last half
        let rightChar = newStr[newStr.length - 1 - k];
        // console.log(`Left character at index ${k} = ${leftChar}, right character at index ${newStr.length - 1 - k} = ${rightChar}`);
        // If they DON'T MATCH
        if (leftChar !== rightChar) {
            return false; // Not a palindrom
        }
    }
    return true; // It is a palindrome
};
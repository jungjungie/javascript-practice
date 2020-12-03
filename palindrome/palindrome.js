function checkPalindrome (str) {
    // Convert the string to all lowercase letters
    str = str.toLowerCase();

    // Set reverseStr variable to the string spelled backwards
    let reverseStr = str.split("").reverse().join("");

    // If the string is the same as the reverseStr, then return true. Otherwise, return false.
    if (str === reverseStr) {
        return true;
    } 
    return false;
}

checkPalindrome("noon"); // Expected output: true
checkPalindrome("horse"); // Expected output: false
checkPalindrome("racecar"); // Expected output: true
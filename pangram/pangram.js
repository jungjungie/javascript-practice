let confirmPangram = str => {
    // Variables
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let pangram = true;

    // Convert the string to all lowercase letters
    str = str.toLowerCase();

    // Loop through the alphabet, and if the given string does not include any of the letters from the alphabet, set pangram to false
    for (let i=0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            pangram = false;
        }
    }   

    // If pangram is still set to true, return true.
    if (pangram) {
        return true;
    }
    // Else, return false.
    return false;
}

console.log(confirmPangram("Watch Jeopardy, Alex Trebek’s fun TV quiz game")); // Expected output: true
console.log(confirmPangram("Five hexing wizard bots jump quickly")); // Expected output: true
console.log(confirmPangram("JavaScript is the best")); // Expected output: false
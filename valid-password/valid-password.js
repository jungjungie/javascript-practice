let validatePassword = str => {
    // Variables
    let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseLetters = uppercaseLetters.toLowerCase();

    let includesUppercase = false;
    let includesLowercase = false;

    // If the string is greater than or equal to 8 characters
    if (str.length >= 8) {
        // Loop through and set includesUppercase to true if the string includes an uppercase letter
        for (let i=0; i < uppercaseLetters.length; i++) {
            if (str.includes(uppercaseLetters[i])) {
                includesUppercase = true;
            }
        }

        // Loop through and set includesLowercase to true if the string includes an lowercase letter
        for (let i=0; i < lowercaseLetters.length; i++) {
            if (str.includes(lowercaseLetters[i])) {
                includesLowercase = true;
            }
        }

        // If the character includes an uppercase and lowercase letter, return true
        if (includesUppercase && includesLowercase) {
            return true;
        }
    }

    return false;
}

console.log(validatePassword('RexTheDog'));
console.log(validatePassword('rexthedog'));
console.log(validatePassword('REXTHEDOG'));
console.log(validatePassword('Dog'));
let reverseDigits = num => {
    // Variables
    let number = num.toString();
    let reversedNumber = '';
    
    // Loop through the number backwards and add each digit to the reversedNumber string
    for (let i = number.length - 1; i >= 0; i--) {
        reversedNumber += number[i];
    }

    return reversedNumber;
}

console.log(reverseDigits(1234)); // Expected output: 4321
console.log(reverseDigits(1201)); // Expected output: 1021
console.log(reverseDigits(4)); // Expected output: 4
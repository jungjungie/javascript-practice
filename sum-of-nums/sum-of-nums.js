function addNums (num) {
    // Variable starting the sum at 0;
    let sum = 0;

    // Loop through the array and add each number to the sum
    for (let i=1; i <= num; i++) {
        sum += i;
    }

    // Return the the final sum
    return sum;
}

addNums(2); // Expected output: 3
addNums(4); // Expected output: 10
addNums(10); // Expected output: 55
// INSTRUCTIONS: Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55


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

addNums(2);
addNums(4);
addNums(10);
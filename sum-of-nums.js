// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55


function addNums (num) {
    let sum = 0;

    for (let i=1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

addNums(2);
addNums(4);
addNums(10);
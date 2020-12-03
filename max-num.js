// INSTRUCTIONS: Write a function that takes in an array of numbers and outputs the maximum number.

// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3

// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6

// Input: [ 3, 3, 3 ]
// Output: 3

function findMaxNum (arr) {
    // Sort the array from lowest to highest number
    arr.sort((a,b) => a - b);

    // Return the last number in the sorted array
    return arr[arr.length-1];
}

findMaxNum([ 1, 2, 3 ]);
findMaxNum([ 3, 6, 4, 5, 2, 1 ]);
findMaxNum([ 3, 3, 3 ]);
// ======================================================
// Solution 1
function findMaxNum (arr) {
    // Sort the array from lowest to highest number
    arr.sort((a,b) => a - b);

    // Return the last number in the sorted array
    return arr[arr.length-1];
}

// ======================================================
// Solution 2
function findMaxNum (arr) {
    // Variable setting the max number to the first number in the array
    let maxNum = arr[0];

    // Loop through the array starting at the 2nd number. If the current maxNum is less than the number we are looping through, then that number becomes the new max.
    for (let i=1; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }

    // Return the final maxNum
    return maxNum;
}

findMaxNum([ 1, 2, 3 ]); // Expected output: 3
findMaxNum([ 3, 6, 4, 5, 2, 1 ]); // Expected output: 6
findMaxNum([ 3, 3, 3 ]); // Expected output: 3
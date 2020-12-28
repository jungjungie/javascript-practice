// Solution 1
let doubleNums = arr => {
    // Variables
    let newArr = [];
    
    // Loop through the array. Multiply each number by 2 and push it to the newArr.
    for (let i=0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }

    return newArr;
}

// Solution 2
let doubleNums = arr => {
    arr.forEach(item => item * 2);
    return arr;
}

console.log(doubleNums([1, 2, 3])); // Expected output: [2,4,6]
console.log(doubleNums([-1, -2, -3])); // Expected output: [-2, -4, -6]
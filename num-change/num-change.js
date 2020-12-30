let calculateNums = (arr, cbFunc) => {
    // Variables
    let newArr = [];

    // Loop through the array. Calculate each item in the callback function and push the number to the newArr.
    for (let i=0; i < arr.length; i++) {
        newArr.push(cbFunc(arr[i]));
    }

    return newArr;
}

console.log(calculateNums([1,2,3], function(num){return num * 2})); // Expected output: [2,4,6]
console.log(calculateNums([1,2,3], function(num){return num + 1})); // Expected output: [2,3,4]
console.log(calculateNums([1,2,3], function(num) {return num /2})); // Expected output: [.5, 1. 1.5]
console.log(calculateNums([1,2,3], function(num) {return num - 2})); // Expected output: [-1, 0, 1]
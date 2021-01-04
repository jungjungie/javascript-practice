let filterNums = (arr, cbFunc) => {
    // Variables
    let newArr = [];

    // Loop through the array
    for (let i=0; i < arr.length; i++) {
        // If the current number that is put through the callback function is true, then push it to the new array
        if (cbFunc(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(filterNums([1, 2, 3], function(num) { return num === 2 }));
console.log(filterNums([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0 }));
console.log(filterNums([1, 2, 3, 4, 5, 6], function(num) { return num > 3 }));
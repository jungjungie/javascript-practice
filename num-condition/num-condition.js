let checkCondition = (arr, func) => {

    // Loop through the array
    for (let i=0; i < arr.length; i++) {
        // Run the current item through the function, and if it is true return true
        if (func(arr[i])) {
            return true;
        }
    }

    // Otherwise return false
    return false;
}

console.log(checkCondition([1,2,3], function(num){return num === 2}));
console.log(checkCondition([1,5,3], function(num){return num === 2}));
console.log(checkCondition([1,2,3], function(num){return num % 2 === 0}));
console.log(checkCondition([1,5,3], function(num){return num % 2 === 0}));
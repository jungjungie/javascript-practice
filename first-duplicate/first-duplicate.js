let firstDuplicate = arr => {
    // Loop through the array
    for (let i=0; i < arr.length; i++) {
        // If any of the following numbers we loop through are equal to teh current number, then return that number
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
}

console.log(firstDuplicate([2, 5, 6, 3, 5]));
console.log(firstDuplicate([1, 3, 4, 1, 3, 4]));
console.log(firstDuplicate([2, 4, 5]));
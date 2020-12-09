let removeDuplicates = arr => {
    // Loop through the array
    for (let i=0; i < arr.length; i++) {

        // Within the inner loop, if the current number is equal to any of the following numbers, then remove that number from the array and decrease j by 1 to account for the next number in the loop
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }

    return arr;
}

console.log(removeDuplicates([1,2,2,3])); // Expected output: [1,2,3] 
console.log(removeDuplicates([4,5,4,4,7,5])); // Expected output: [4,5,7]
console.log(removeDuplicates([1,2,3,5])); // Expected output: [1,2,3,5]
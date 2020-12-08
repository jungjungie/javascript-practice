function calculateAvg (arr) {
    // Variables
    let sum =0;

    // Loop through the array and add each number to the sum
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Divide the sum by the number of items in the array
    return sum / arr.length;
}

console.log(calculateAvg([1, 4, 7])); //Expected output: 4
console.log(calculateAvg([10, 5])); //Expected output: 7.5
console.log(calculateAvg([1.5, 3, 2.5, 1])); //Expected output: 2
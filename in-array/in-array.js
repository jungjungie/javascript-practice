// Solution 1
let checkIfIncluded = (arr, el) => {
    if (arr.includes(el)) {
        return true;
    }
    return false;
}

// ====================================================
// Solution 2
let checkIfIncluded = (arr, el) => {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] == el) {
            return true;
        }
    }
    return false;
}

console.log(checkIfIncluded([1,2,3], 1)); // Expected output: true
console.log(checkIfIncluded([1,2,3], 4)); // Expected output: false
console.log(checkIfIncluded(['code', 'dev', 'nerd'], 'nerd')); // Expected output: true
console.log(checkIfIncluded(['code', 'dev', 'nerd'], 'genius')); // Expected output: false
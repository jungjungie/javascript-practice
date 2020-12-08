const confirmInteger = el => {
    if (parseInt(el) === el) {
        return true;
    }
    return false;
}

console.log(confirmInteger("7")); //Expected output: false
console.log(confirmInteger(7)); //Expected output: true
console.log(confirmInteger(4.3)); //Expected output: false
let dayOfWeek = num => {
    switch (num) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return undefined;
    }
}

console.log(dayOfWeek(1)); // Expected output: 'Monday'
console.log(dayOfWeek(5)); // Expected output: 'Friday'
console.log(dayOfWeek(8)); // Expected output: undefined
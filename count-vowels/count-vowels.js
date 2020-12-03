function countVowels (str) {
    // Variables
    let vowels = 'aeiou';
    let vowelCount = 0;

    // Convert all letters in the string to lowercase
    str = str.toLowerCase();

    // Loop through the string we are given, and if the vowels string includes the current letter we are looking at, then increase the vowelCount
    for (let i=0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

countVowels("hello"); // Expected output: 2
countVowels("you are great!"); // Expected output: 6
countVowels("why?"); // Expected output: 0
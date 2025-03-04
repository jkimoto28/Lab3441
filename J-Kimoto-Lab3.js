//Jelani Kimoto
// ITMD 441-02
// Exercise 1: minMaxAverage
function minMaxAverage(numbers) {
    let total = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let avg = numbers.reduce((sum, num) => sum + num, 0) / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Test cases for minMaxAverage
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([15, 25, 35, 45, 55]);

// Exercise 2: countVowels
function countVowels(word) {
    let count = (word.match(/[aeiou]/gi) || []).length;
    console.log(`${word}: ${count} vowels`);
}

// Test cases for countVowels
countVowels("Winter");
countVowels("Beautiful");
countVowels("Programming");

// Exercise 3: sortNumbers
function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}] Sorted Array: [${sortedArray}]`);
}

// Test cases for sortNumbers
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 22, 8, 1]);
sortNumbers([30, 20, 10, 40, 50]);

// Exercise 4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for celsiusToFahrenheit
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-10);

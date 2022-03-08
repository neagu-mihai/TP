"use strict";
exports.__esModule = true;
var fs = require("fs");
var numbers = fs.readFileSync('./utils_ex8.txt').toString();
var numbersArray = numbers.split(' ').map(function (elem) { return parseInt(elem); });
var sum = numbersArray.reduce(function (a, b) { return a + b; }, 0);
var avg = sum / numbersArray.length;
console.log("Sum: ".concat(sum, "; Avg: ").concat(avg, " \n"));
for (var i = 1; i <= 10; i++)
    console.log("".concat(i, " x 5 = ").concat(i * 5));
var testNumber = 6;
var divSum = 0;
for (var i = 1; i < testNumber; i++)
    if (testNumber % i === 0)
        divSum += i;
if (divSum === testNumber)
    console.log('Perfect number');
else
    console.log('Not so perfect number');
var strongNumber = 145;
var digits = strongNumber.toString().split('').map(function (elem) { return parseInt(elem); });
var factorialRecords = [];
var factorial = function (testNumber) {
    if (testNumber == 0 || testNumber == 1)
        return 1;
    if (factorialRecords[testNumber] > 0)
        return factorialRecords[testNumber];
    return factorialRecords[testNumber] = factorial(testNumber - 1) * testNumber;
};
var factorialDigits = digits.map(function (elem) { return factorial(elem); });
var factorialsSum = factorialDigits.reduce(function (a, b) { return a + b; }, 0);
if (factorialsSum === strongNumber)
    console.log("".concat(strongNumber, " is a strong number"));
else
    console.log("".concat(strongNumber, " is not a strong number"));
for (var lineIndex = 0; lineIndex < 4; lineIndex++) {
    var spaces = '';
    var stars = '';
    for (var spaceIndex = 0; spaceIndex < 4 - lineIndex; spaceIndex++)
        spaces += ' ';
    process.stdout.write(spaces);
    for (var starIndex = 0; starIndex < lineIndex + 1; starIndex++)
        stars += '* ';
    process.stdout.write(stars);
    console.log('\n');
}
for (var lineIndex = 0; lineIndex < 7; lineIndex++) {
    var spaces = '';
    var numbers_1 = '';
    for (var spaceIndex = 0; spaceIndex < lineIndex; spaceIndex++)
        spaces += ' ';
    process.stdout.write(spaces);
    for (var numbersIndex = 0; numbersIndex < 7 - lineIndex; numbersIndex++)
        numbers_1 += numbersIndex + 1;
    for (var numbersIndex = 7 - lineIndex - 1; numbersIndex > 0; numbersIndex--)
        numbers_1 += numbersIndex;
    process.stdout.write(numbers_1);
    console.log('\n');
}

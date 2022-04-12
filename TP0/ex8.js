"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const numbers = fs.readFileSync('./utils_ex8.txt').toString();
const numbersArray = numbers.split(' ').map(elem => parseInt(elem));
const sum = numbersArray.reduce((a, b) => a + b, 0);
const avg = sum / numbersArray.length;
console.log(`Sum: ${sum}; Avg: ${avg} \n`);
for (let i = 1; i <= 10; i++)
    console.log(`${i} x 5 = ${i * 5}`);
const testNumber = 6;
let divSum = 0;
for (let i = 1; i < testNumber; i++)
    if (testNumber % i === 0)
        divSum += i;
if (divSum === testNumber)
    console.log('Perfect number');
else
    console.log('Not so perfect number');
const strongNumber = 145;
const digits = strongNumber.toString().split('').map(elem => parseInt(elem));
let factorialRecords = [];
const factorial = (testNumber) => {
    if (testNumber == 0 || testNumber == 1)
        return 1;
    if (factorialRecords[testNumber] > 0)
        return factorialRecords[testNumber];
    return factorialRecords[testNumber] = factorial(testNumber - 1) * testNumber;
};
const factorialDigits = digits.map(elem => factorial(elem));
const factorialsSum = factorialDigits.reduce((a, b) => a + b, 0);
if (factorialsSum === strongNumber)
    console.log(`${strongNumber} is a strong number`);
else
    console.log(`${strongNumber} is not a strong number`);
for (let lineIndex = 0; lineIndex < 4; lineIndex++) {
    let spaces = '';
    let stars = '';
    for (let spaceIndex = 0; spaceIndex < 4 - lineIndex; spaceIndex++)
        spaces += ' ';
    process.stdout.write(spaces);
    for (let starIndex = 0; starIndex < lineIndex + 1; starIndex++)
        stars += '* ';
    process.stdout.write(stars);
    console.log('\n');
}
for (let lineIndex = 0; lineIndex < 7; lineIndex++) {
    let spaces = '';
    let numbers = '';
    for (let spaceIndex = 0; spaceIndex < lineIndex; spaceIndex++)
        spaces += ' ';
    process.stdout.write(spaces);
    for (let numbersIndex = 0; numbersIndex < 7 - lineIndex; numbersIndex++)
        numbers += numbersIndex + 1;
    for (let numbersIndex = 7 - lineIndex - 1; numbersIndex > 0; numbersIndex--)
        numbers += numbersIndex;
    process.stdout.write(numbers);
    console.log('\n');
}

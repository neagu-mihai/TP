import * as fs from 'fs';

const numbers: string = fs.readFileSync('./utils_ex8.txt').toString();
const numbersArray: number[] = numbers.split(' ').map(elem => parseInt(elem));
const sum: number = numbersArray.reduce((a, b) => a + b, 0);
const avg: number = sum / numbersArray.length;
console.log(`Sum: ${sum}; Avg: ${avg} \n`);


for(let i = 1; i <= 10; i++) 
    console.log(`${i} x 5 = ${i * 5}`);


const testNumber: number = 6;
let divSum: number = 0;
for(let i = 1; i < testNumber; i++)
    if(testNumber % i === 0)
        divSum += i;
if(divSum === testNumber)
    console.log('Perfect number');
else 
    console.log('Not so perfect number');


const strongNumber: number = 145;
const digits: number[] = strongNumber.toString().split('').map(elem => parseInt(elem));

let factorialRecords: number[] = [];
const factorial = (testNumber: number) => {
    if (testNumber == 0 || testNumber == 1)
      return 1;
    if (factorialRecords[testNumber] > 0)
      return factorialRecords[testNumber];
    return factorialRecords[testNumber] = factorial(testNumber - 1) * testNumber;
}

const factorialDigits = digits.map(elem => factorial(elem));
const factorialsSum = factorialDigits.reduce((a, b) => a + b, 0);
if(factorialsSum === strongNumber)
    console.log(`${strongNumber} is a strong number`)
else
    console.log(`${strongNumber} is not a strong number`)



for(let lineIndex = 0; lineIndex < 4; lineIndex++){
    let spaces = '';
    let stars = '';

    for(let spaceIndex = 0; spaceIndex < 4 - lineIndex; spaceIndex++)
        spaces+= ' ';
    process.stdout.write(spaces);

    for(let starIndex = 0; starIndex < lineIndex + 1; starIndex++)
        stars+= '* ';
    process.stdout.write(stars);
    
    console.log('\n');
}

for(let lineIndex = 0; lineIndex < 7; lineIndex++) {
    let spaces = '';
    let numbers = '';
    
    for(let spaceIndex = 0; spaceIndex < lineIndex; spaceIndex++)
        spaces += ' ';
    process.stdout.write(spaces);

    for(let numbersIndex = 0; numbersIndex < 7 - lineIndex; numbersIndex++)
        numbers += numbersIndex + 1;
    for(let numbersIndex = 7 - lineIndex - 1; numbersIndex > 0; numbersIndex--)
        numbers += numbersIndex;
    process.stdout.write(numbers);
    
    console.log('\n');
}


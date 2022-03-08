const testNumber: number = 2;

let divIndex = 1;
let evenDivCounter = 0
while(divIndex <= testNumber) {
    if(testNumber % divIndex === 0 && divIndex % 2 === 0) evenDivCounter++;
    divIndex++;
}

console.log(`${testNumber} has ${evenDivCounter} even divisors.`)

divIndex = 1;
let totalDivCounter = 0;
while(divIndex <= testNumber) {
    if(testNumber % divIndex === 0) totalDivCounter++;
    divIndex++;
}
if(totalDivCounter === 2)
    console.log(`${testNumber} is a prime number.`);
else
console.log(`${testNumber} is not a prime number.`);



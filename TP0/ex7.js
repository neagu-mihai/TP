var testNumber = 2;
var divIndex = 1;
var evenDivCounter = 0;
while (divIndex <= testNumber) {
    if (testNumber % divIndex === 0 && divIndex % 2 === 0)
        evenDivCounter++;
    divIndex++;
}
console.log("".concat(testNumber, " has ").concat(evenDivCounter, " even divisors."));
divIndex = 1;
var totalDivCounter = 0;
while (divIndex <= testNumber) {
    if (testNumber % divIndex === 0)
        totalDivCounter++;
    divIndex++;
}
if (totalDivCounter === 2)
    console.log("".concat(testNumber, " is a prime number."));
else
    console.log("".concat(testNumber, " is not a prime number."));

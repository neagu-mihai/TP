const testString: string = 'cod';
let substrArray: string[] = [];
for(let i = 0; i < testString.length; i++) {
    for(let j = i; j < testString.length; j++) {
        substrArray.push(testString.slice(i, j + 1))
    }
}

console.log(substrArray);
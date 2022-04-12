// npm install --save-dev @types/node
import * as fs from 'fs';

let data: string = fs.readFileSync('./BusinessFinancialData.csv').toString();


// Point a)
let entreprises: string[] = data.split(/\r?\n/);
console.log(entreprises);

// Point b)
let entreprise_regex:RegExp = /([A-Z\.0-9]+),([0-9]+\.[0-9]+\s?-\s?[0-9]+\.[0-9]+)+,([0-9]+\.?[0-9]*),([a-zA-Z\s\-?]+),([a-zA-Z()\s,]+),([a-zA-Z,\s"]+)/;
for(let entreprise of entreprises) {
    let match:RegExpExecArray|null = entreprise_regex.exec(entreprise);
    if(match) {
        console.log(match.splice(1, 5).join('\n'));
        console.log('--------------------------');
    }
}




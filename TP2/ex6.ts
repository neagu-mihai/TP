import * as fs from 'fs';

let data: string = fs.readFileSync('./BusinessFinancialData.csv').toString();

interface Entrprise {
    code: string,
    periode: string,
    valeur: number,
    sujet: string,
    categorie: string,
    domaine: string
}

let entreprises: string[] = data.split(/\r?\n/);

let entreprise_regex:RegExp = /([A-Z\.0-9]+),([0-9]+\.[0-9]+\s?-\s?[0-9]+\.[0-9]+)+,([0-9]+\.?[0-9]*),([a-zA-Z\s\-?]+),([a-zA-Z()\s,]+),([a-zA-Z,\s\-"]+)/;

let entreprises_array: Entrprise[] = [];

for(let entreprise of entreprises) {
    let match:RegExpExecArray|null = entreprise_regex.exec(entreprise);

    if(match) {
        let entr_obj: Entrprise = {
            code: !match[1] ? 'Undefined code' : match[1],
            periode: !match[2] ? 'Undefined period' : match[2],
            valeur: !match[3] ? 0 : parseFloat(match[3]),
            sujet: !match[4] ? 'Undefined subject' : match[4],
            categorie: !match[5] ? 'Undefined category' : match[5],
            domaine: !match[6] ? 'Undefined domain' : match[6]
        };
        entreprises_array.push(entr_obj);
    }
}

console.log(entreprises_array);

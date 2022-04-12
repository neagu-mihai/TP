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

let entreprises: string[] = data.split("\r\n");
let entreprises_array: Entrprise[] = [];

for(let entreprise of entreprises) {
    let components: string[] = entreprise.split(',');
    let code: string = components[0];
    let periode: string = components[1];
    let valeur: number = parseFloat(components[2]);
    let sujet: string = components[3];
    let categorie: string = components[4];
    let domaine: string = components[5];

   let entr_obj: Entrprise = {
       code,
       periode,
       valeur,
       sujet,
       categorie,
       domaine
   };

   entreprises_array.push(entr_obj);
}

console.log(entreprises_array);

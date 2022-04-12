// npm install --save-dev @types/node
import * as fs from 'fs';

let data: string = fs.readFileSync('./BusinessFinancialData.csv').toString();


// Point a)
let entreprises: string[] = data.split("\r\n");
console.log(entreprises);

// Point b)
for(let entreprise of entreprises) {
    let components: string[] = entreprise.split(',');
    let code: string = components[0];
    let valeur: string = components[2];
    let categorie: string = components[4];

    console.log("Code: " + code);
    console.log("Valeur totale: " + valeur);
    console.log("Categorie: " + categorie);
    console.log("-----------------------------------------------\n");
}




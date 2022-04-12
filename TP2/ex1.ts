let entreprise: string = 'BDCQ.SF1AA3CA,2020.09 - 2020.11,1576.216,Business Data Collection - BDC,Sales (operating income),Mining';


// Point a)
console.log("Position du sujet: " + entreprise.indexOf('Business Data Collection - BDC'));


// Point b)
console.log("Derniere position de l'espace: " + entreprise.lastIndexOf(" "));


// Point c)
let components: string[] = entreprise.split(",");
console.log("Code: " + components[0]);
console.log("Valeur totale: " + components[2]);
console.log("Categorie: " + components[4]);
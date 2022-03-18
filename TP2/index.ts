import * as fs from 'fs';
let file_content: string;
//ex1
try {
    file_content = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    let ln=file_content.split('\n');
    let n3=ln[2];
    console.log(n3);
    //a)
    console.log(n3.indexOf("Business Data Collection - BDC"));
    //b)
    console.log(n3.lastIndexOf('\s'));
    //c)
    let n3p=n3.split(',');
    delete n3p[5];
    delete n3p[3];
    delete n3p[1];
    console.log(n3p);
} catch(error) {
    console.log(error);
}
//ex2
type Entreprise={
    code:String,
        periode:String,
        valeur_totale:String,
        sujet:String,
        categorie:String,
        domaine:String,
}
let file_content2:string;
try {
    file_content2 = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    //a)
    let ln=file_content2.split('\n');
    console.log(ln);
    //b)
    for( let i in ln)
    {
        let lnp=ln[i].split(',');
        console.log(lnp[0].concat(" ",lnp[2]," ",lnp[4]));
    }
    //ex3
    let enumenp:Array<Entreprise>=[];
    for( let i in ln)
    {
        let lnp=ln[i].split(',');
        let enp: Entreprise= {code:lnp[0],
        periode:lnp[1],
        valeur_totale:lnp[2],
        sujet:lnp[3],
        categorie:lnp[4],
        domaine:lnp[5]};
        enumenp.push(enp);
    }
    console.log(enumenp);
} catch(error) {
    console.log(error);
}
//ex4
let file_content3: string;
type File_loc={
    directory:String,
}

try {
    file_content3 = fs.readFileSync('passwd', 'ascii');
    let ln=file_content3.split('\n');
    let enumloc:Array<File_loc>=[];
    for( let i in ln)
    {
        let loc:File_loc={directory:ln[i]};
        enumloc.push(loc);

    }
    console.log(file_content3);
} catch(error) {
    console.log(error);
}




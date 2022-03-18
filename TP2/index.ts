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
} catch(error) {
    console.log(error);
}




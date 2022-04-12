import * as fs from 'fs';
 
let file_content: string;
try {
    file_content = fs.readFileSync('typescript_class.ts', 'ascii');
    //a)
    let regex: RegExp= new RegExp(/^(?!\s*import).+\r\n/,"gm");
    let ln=file_content.split(regex);
    ln=ln.filter(element => {return element !== ''; });
    console.log(ln);
    //b)
    let regex2: RegExp= new RegExp(/^(?!\s*class).+\r\n/,"gm");
    let ln2=file_content.split(regex2);
    ln2=ln2.filter(element => {return element !== ''; });
    console.log(ln2);
    //c)
    let regex3: RegExp= new RegExp(/^(?!\s*class).+\r\n|\s*class\s*[A-Za-z]+\s(?!extends).+\r\n/,"gm");
    let ln3=file_content.split(regex3);
    ln3=ln3.filter(element => {return element !== ''; });
    console.log(ln3);
    //d)
    let regex4: RegExp= new RegExp(/^(?!\s*function).+\r\n/,"gm");
    let ln4=file_content.split(regex4);
    ln4=ln4.filter(element => {return element !== ''; });
    console.log(ln4);
} catch(error) {
    console.log(error);
}
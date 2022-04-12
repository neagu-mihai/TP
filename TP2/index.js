"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
let file_content;
//ex1
try {
    file_content = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    let ln = file_content.split('\n');
    let n3 = ln[2];
    console.log(n3);
    //a)
    console.log(n3.indexOf("Business Data Collection - BDC"));
    //b)
    console.log(n3.lastIndexOf('\s'));
    //c)
    let n3p = n3.split(',');
    delete n3p[5];
    delete n3p[3];
    delete n3p[1];
    console.log(n3p);
}
catch (error) {
    console.log(error);
}
let file_content2;
try {
    file_content2 = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    //a)
    let ln = file_content2.split('\n');
    console.log(ln);
    //b)
    for (let i in ln) {
        let lnp = ln[i].split(',');
        console.log(lnp[0].concat(" ", lnp[2], " ", lnp[4]));
    }
    //ex3
    let enumenp = [];
    for (let i in ln) {
        let lnp = ln[i].split(',');
        let enp = { code: lnp[0],
            periode: lnp[1],
            valeur_totale: lnp[2],
            sujet: lnp[3],
            categorie: lnp[4],
            domaine: lnp[5] };
        enumenp.push(enp);
    }
    console.log(enumenp);
}
catch (error) {
    console.log(error);
}
//ex4
let file_content3;
try {
    file_content3 = fs.readFileSync('passwd', 'ascii');
    let ln = file_content3.split('\n');
    let enumloc = [];
    for (let i in ln) {
        let loc = { directory: ln[i] };
        enumloc.push(loc);
    }
    console.log(file_content3);
}
catch (error) {
    console.log(error);
}
//ex5
let file_content4;
try {
    file_content4 = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    //a)
    let regex = /\n|\z/;
    let ln = file_content4.split(regex);
    console.log(ln);
    //b)
    let rexex2 = /,|\n/;
    for (let i in ln) {
        let lnp = ln[i].split(rexex2);
        console.log(lnp[0] + " " + lnp[2] + " " + lnp[4]);
    }
    //ex6
    let enumenp = [];
    for (let i in ln) {
        let lnp = ln[i].split(rexex2);
        let enp = { code: lnp[0],
            periode: lnp[1],
            valeur_totale: lnp[2],
            sujet: lnp[3],
            categorie: lnp[4],
            domaine: lnp[5] };
        enumenp.push(enp);
    }
    console.log(enumenp);
}
catch (error) {
    console.log(error);
}
//ex7
let file_content5;
try {
    file_content5 = fs.readFileSync('passwd', 'ascii');
    let regex = /\n|\z/;
    let ln = file_content5.split(regex);
    let enumloc = [];
    for (let i in ln) {
        let loc = { directory: ln[i] };
        enumloc.push(loc);
    }
    console.log(file_content5);
}
catch (error) {
    console.log(error);
}
//ex8
let file_content6;
function toString(err) {
    return err.type + " " + err.code + " " + err.type_error + " " + err.description + "\n";
}
try {
    file_content6 = fs.readFileSync('typescript_errors.txt', 'ascii');
    let regex = /\^.+:/;
    //a)
    let ln = file_content6.split(regex);
    console.log(ln.length - 1);
    let regex2 = /.+\(|[^0-9]+\n+[a-z\s=0-9";]+|\)/;
    //b)
    let ln2 = file_content6.split(regex2);
    ln2 = ln2.filter(element => { return element !== ''; });
    console.log(ln2);
    //c)
    let regex3 = /.+:|.+:|\..+|^[a-z].+|\n|[a-z]+\[\];|\s+.+;|\}|[a-z]+\s.+\s\{/;
    let ln3 = file_content6.split(regex3);
    ln3 = ln3.filter(element => { return (element !== '' && element !== '\r' && element !== " \r"); });
    let arrerr = [];
    for (let i in ln2) {
        let typ_err = ln3[i].includes("Type");
        let err = { type: "Error", code: ln2[i], type_error: typ_err, description: ln3[i] };
        arrerr.push(err);
    }
    let to_write = "";
    for (let i in ln2) {
        let temp = toString(arrerr[i]);
        to_write = to_write.concat(temp);
    }
    try {
        fs.writeFileSync('output.txt', to_write);
    }
    catch (error) {
        console.log(error);
    }
}
catch (error) {
    console.log(error);
}

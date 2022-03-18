"use strict";
exports.__esModule = true;
var fs = require("fs");
var file_content;
//ex1
try {
    file_content = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    var ln = file_content.split('\n');
    var n3 = ln[2];
    console.log(n3);
    //a)
    console.log(n3.indexOf("Business Data Collection - BDC"));
    //b)
    console.log(n3.lastIndexOf('\s'));
    //c)
    var n3p = n3.split(',');
    delete n3p[5];
    delete n3p[3];
    delete n3p[1];
    console.log(n3p);
}
catch (error) {
    console.log(error);
}
var file_content2;
try {
    file_content2 = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    //a)
    var ln = file_content2.split('\n');
    console.log(ln);
    //b)
    for (var i in ln) {
        var lnp = ln[i].split(',');
        console.log(lnp[0].concat(" ", lnp[2], " ", lnp[4]));
    }
    //ex3
    var enumenp = [];
    for (var i in ln) {
        var lnp = ln[i].split(',');
        var enp = { code: lnp[0],
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
var file_content3;
try {
    file_content3 = fs.readFileSync('passwd', 'ascii');
    var ln = file_content3.split('\n');
    var enumloc = [];
    for (var i in ln) {
        var loc = { directory: ln[i] };
        enumloc.push(loc);
    }
    console.log(file_content3);
}
catch (error) {
    console.log(error);
}
//ex5
var file_content4;
try {
    file_content4 = fs.readFileSync('BusinessFinancialData.csv', 'ascii');
    //a)
    var regex = /\n|\z/;
    var ln = file_content4.split(regex);
    console.log(ln);
    //b)
    var rexex2 = /,|\n/;
    for (var i in ln) {
        var lnp = ln[i].split(rexex2);
        console.log(lnp[0] + " " + lnp[2] + " " + lnp[4]);
    }
    //ex6
    var enumenp = [];
    for (var i in ln) {
        var lnp = ln[i].split(rexex2);
        var enp = { code: lnp[0],
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
var file_content5;
try {
    file_content5 = fs.readFileSync('passwd', 'ascii');
    var regex = /\n|\z/;
    var ln = file_content5.split(regex);
    var enumloc = [];
    for (var i in ln) {
        var loc = { directory: ln[i] };
        enumloc.push(loc);
    }
    console.log(file_content5);
}
catch (error) {
    console.log(error);
}
//ex8
var file_content6;
try {
    file_content6 = fs.readFileSync('typescript_errors.txt', 'ascii');
    var regex = /\^.+:/;
    //a)
    var ln = file_content6.split(regex);
    console.log(ln.length - 1);
    var regex2 = /.+\(|[^0-9]+\n+[a-z\s=0-9";]+|\)/;
    //b)
    var ln2 = file_content6.split(regex2);
    ln2 = ln2.filter(function (element) { return element !== ''; });
    console.log(ln2);
    //c)
    var regex3 = /.+:|.+:|\..+|^[a-z].+|\n|[a-z]+\[\];|\s+.+;|\}|[a-z]+\s.+\s\{/;
    var ln3 = file_content6.split(regex3);
    ln3 = ln3.filter(function (element) { return (element !== '' && element !== '\r' && element !== " \r"); });
    var arrerr = [];
    for (var i in ln2) {
        var typ_err = ln3[i].includes("Type");
        var err = { type: "Error", code: ln2[i], type_error: typ_err, description: ln3[i] };
        arrerr.push(err);
    }
    console.log(arrerr);
}
catch (error) {
    console.log(error);
}

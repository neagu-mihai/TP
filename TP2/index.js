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

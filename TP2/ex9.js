"use strict";
exports.__esModule = true;
var fs = require("fs");
var file_content;
try {
    file_content = fs.readFileSync('typescript_class.ts', 'ascii');
    //a)
    var regex = new RegExp(/^(?!\s*import).+\r\n/, "gm");
    var ln = file_content.split(regex);
    ln = ln.filter(function (element) { return element !== ''; });
    console.log(ln);
    //b)
    var regex2 = new RegExp(/^(?!\s*class).+\r\n/, "gm");
    var ln2 = file_content.split(regex2);
    ln2 = ln2.filter(function (element) { return element !== ''; });
    console.log(ln2);
    //c)
    var regex3 = new RegExp(/^(?!\s*class).+\r\n|\s*class\s*[A-Za-z]+\s(?!extends).+\r\n/, "gm");
    var ln3 = file_content.split(regex3);
    ln3 = ln3.filter(function (element) { return element !== ''; });
    console.log(ln3);
    //d)
    var regex4 = new RegExp(/^(?!\s*function).+\r\n/, "gm");
    var ln4 = file_content.split(regex4);
    ln4 = ln4.filter(function (element) { return element !== ''; });
    console.log(ln4);
}
catch (error) {
    console.log(error);
}

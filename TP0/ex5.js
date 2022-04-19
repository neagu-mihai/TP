"use strict";
exports.__esModule = true;
var os = require("os");
var fs = require("fs");
var mem = os.freemem() / 1024;
var osType = os.type();
var kernel = os.version();
var cpus = os.cpus();
fs.writeFileSync("./os.info", "Memory: ".concat(mem, " \nOS Type: ").concat(osType, " \nKernel version: ").concat(kernel, " \nCPUs: \n").concat(JSON.stringify(cpus)));

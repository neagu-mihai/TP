"use strict";
exports.__esModule = true;
var os = require("os");
console.log(os.homedir());
console.log(os.uptime());
console.log(os.freemem() / 1024 / 1024);

"use strict";
exports.__esModule = true;
var timer = require("timers");
var numbers = [1, 2, 3, 4];
numbers.forEach(function (elem, index) {
    timer.setTimeout(function () {
        console.log(elem);
    }, index * 1000);
});

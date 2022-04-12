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
let data = fs.readFileSync('./typescript_class.ts').toString();
let lines = data.split(/\r?\n/);
let libraries = [];
let all_classes = [];
let child_classes = [];
let all_functions = [];
for (let line of lines) {
    let libraries_match = line.match(/(import \* as )([a-zA-Z\-0-9\@\/]*)( from) ([a-zA-Z\-\s0-9\@\/'"]*)/);
    if (libraries_match) {
        libraries.push(libraries_match[4].slice(1, -1));
    }
    let all_classes_match = line.match(/(class) ([a-zA-Z]+)/);
    if (all_classes_match) {
        all_classes.push(all_classes_match[2]);
    }
    let child_classes_match = line.match(/(class) ([a-zA-Z]+) extends ([a-zA-Z]+)/);
    if (child_classes_match) {
        let child_class = {
            name: child_classes_match[2],
            parent_name: child_classes_match[3]
        };
        child_classes.push(child_class);
    }
    let functions_match = line.match(/(function) ([A-Za-z0-9\_]+)\s?([a-zA-Z\(\)\:\s0-9\_,]+\s?\:\s?([a-z]+))/);
    if (functions_match) {
        let function_declaration = {
            name: functions_match[2],
            return_type: functions_match[4]
        };
        all_functions.push(function_declaration);
    }
}
console.log(libraries);
console.log(all_classes);
console.log(child_classes);
console.log(all_functions);

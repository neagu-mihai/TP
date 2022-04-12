import * as fs from 'fs';

let data: string = fs.readFileSync('./typescript_class.ts').toString();
let lines: string[] = data.split(/\r?\n/);
let libraries: string[] = [];
let all_classes: string[] = [];

interface ChildClass {
    name: string,
    parent_name: string
}
let child_classes: ChildClass[] = [];

interface FunctionDeclaration {
    name: string,
    return_type: string
}
let all_functions: FunctionDeclaration[] = [];

for(let line of lines) {
    let libraries_match: RegExpMatchArray|null = line.match(/(import \* as )([a-zA-Z\-0-9\@\/]*)( from) ([a-zA-Z\-\s0-9\@\/'"]*)/);
    if(libraries_match) {
        libraries.push(libraries_match[4].slice(1,-1));
    }

    let all_classes_match: RegExpMatchArray|null = line.match(/(class) ([a-zA-Z]+)/);
    if(all_classes_match) {
        all_classes.push(all_classes_match[2]);
    }

    let child_classes_match: RegExpMatchArray|null = line.match(/(class) ([a-zA-Z]+) extends ([a-zA-Z]+)/);
    if(child_classes_match) {
        let child_class: ChildClass = {
            name: child_classes_match[2],
            parent_name: child_classes_match[3]
        }
        child_classes.push(child_class);
    }
    let functions_match: RegExpMatchArray|null = line.match(/(function) ([A-Za-z0-9\_]+)\s?([a-zA-Z\(\)\:\s0-9\_,]+\s?\:\s?([a-z]+))/);
    if(functions_match) {
        let function_declaration: FunctionDeclaration = {
            name: functions_match[2],
            return_type: functions_match[4]
        }
        all_functions.push(function_declaration);
    }
}
console.log(libraries);
console.log(all_classes);
console.log(child_classes);
console.log(all_functions);
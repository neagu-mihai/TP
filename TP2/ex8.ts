import * as fs from 'fs';
import { type } from 'os';

let typescript_errors: string = fs.readFileSync('./typescript_errors.txt').toString();

let lines: string[] = typescript_errors.split(/\r?\n/);

let error_number: number = 0;
let error_codes: number[] = [];

interface Error {
    type: string,
    code: string,
    type_error: boolean,
    description: string
}

let error_list: Error[] = [];
let error_regex: RegExp = /\^\s(Error):([A-Za-z\s'"\-]+)(\.ts)?\(?([0-9]+)?\)?/;
for(let line of lines) {
    if(line.indexOf("Error") >= 0) {
        error_number++;
        let match:RegExpExecArray|null = error_regex.exec(line);
        if(match) {
            let type: string = "error";
            let code: string = !match[4] ? "Inexistent code" : match[4];
            if(code !== "Inexistent code") {
                error_codes.push(parseInt(code));
            }
            let type_error: boolean = match[2].indexOf("type") >= 0 ? true : false;
            let description: string = match[2];
            let error: Error = {
                type,
                code,
                type_error,
                description
            }
            error_list.push(error);
        }
    }
}
console.log("Numero erreurs: " + error_number);
console.log("Codes d'erreur: " + error_codes);
fs.writeFileSync('./errors_list.json', JSON.stringify(error_list,null, 3), 'utf8');
import {  CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { AlfLexer } from './AlfLexer';
import { AlfParser, ProgContext } from './AlfParser';
import * as fs from 'fs';

// Create the lexer and parser
let input: string = '10\n20';

/* Exercice 5 */
// let input: string = "Bonjour! Le TP d'ALF est de 8 a 10.";

/* Exercice 6 */
// let input: string = fs.readFileSync('./text_and_numbers.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);
 
// Parse the input, where `prog` is whatever entry point you defined
let tree:ProgContext = parser.prog();

// Exercice 4a
let file_content: string = fs.readFileSync('./Alf.tokens').toString();
let lines: string[] = file_content.split(/\r?\n/);
let tokens_dictionary: {[key: number]: string} = {};

for(let line of lines) {
    if(line !== '') {
        let parts: string[] = line.split('=');
        let key: number = parseInt(parts[1]);
        let value: string = parts[0];
        tokens_dictionary[key] = value;
    }
}
console.log('------------------------');
console.log('EXERCICE 4a');
console.log(tokens_dictionary);


// Exercice 4b
let currentToken: Token = tokenStream.get(0);
let token_obj: {[key: string]: string} = {};

while(currentToken.type !== Token.EOF) {
    let type_name = tokens_dictionary[currentToken.type];
    let token_text = currentToken.text;
    if(token_text) {
        token_obj[token_text] = type_name;
    }
    currentToken = tokenStream.tokenSource.nextToken();
}
console.log('------------------------');
console.log('EXERCICE 4b');
console.log(token_obj)

// Exercice 6
// let currentToken6: Token = tokenStream.get(0);
// interface TokensDictionary {
//     value: string,
//     type: string,
//     line: number
// }
// let token_obj6: TokensDictionary;
// let tokens_array: TokensDictionary[] = [];
// while(currentToken6.type !== Token.EOF) {
//     let type_name = tokens_dictionary[currentToken6.type];
//     let token_text = currentToken6.text;
//     if(token_text && currentToken6.type !== AlfLexer.NEWLINE) {
//         token_obj6 = {
//             value: token_text,
//             type: type_name,
//             line: currentToken6.line
//         };
//         tokens_array.push(token_obj6);
//     }
//     currentToken6 = tokenStream.tokenSource.nextToken();
// }
// console.log('------------------------');
// console.log('EXERCICE 6');
// console.log(tokens_array); 

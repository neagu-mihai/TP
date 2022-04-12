import {  CharStreams, CodePointCharStream, CommonTokenStream, RecognitionException, Token } from 'antlr4ts';
import { PythonLexer } from './PythonLexer';
import { PythonParser, StartContext } from './PythonParser';
import * as fs from 'fs';


/* Exercice 7 */
// let input: string = "for i in array: i = 3";

/* Exercice 8 */
let input: string = fs.readFileSync('./program.py').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: PythonLexer = new PythonLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: PythonParser = new PythonParser(tokenStream);
 
// Parse the input, where `start` is whatever entry point you defined
let tree:StartContext = parser.start();

let file_content: string = fs.readFileSync('./Python.tokens').toString();
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
console.log(tokens_dictionary);

// Exercice 7
let currentToken: Token = tokenStream.get(0);
interface TokensDictionary {
    value: string,
    type: string,
    line: number
}
let token_obj: TokensDictionary;
let tokens_array: TokensDictionary[] = [];
while(currentToken.type !== Token.EOF) {
    let type_name = tokens_dictionary[currentToken.type];
    let token_text = currentToken.text;
    if(token_text && currentToken.type !== PythonLexer.NEWLINE && currentToken.type !== PythonLexer.WS) {
        token_obj = {
            value: token_text,
            type: type_name,
            line: currentToken.line
        };
        tokens_array.push(token_obj);
    }
    currentToken = tokenStream.tokenSource.nextToken();
}
console.log(tokens_array); 


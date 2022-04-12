grammar Ex1;
 
start               : (statement SEMICOLON NEWLINE*)*               #multilineProg
                    | statement SEMICOLON NEWLINE*                  #singlelineProg 
                    ;
 
statement           : declaration                                   #declarationRule
                    | expression                                    #expressionRule
                    | attribution                                   #attributionRule
                    ;
 
declaration         : type VARIABLE EQ expression                   #variableDeclaration
                    ;
 
type                : INT                                           #typeInt
                    | FLOAT                                         #typeFloat
                    | STRING                                        #typeString
                    ;
 
value               : INT_NUMBER                                    #valueInt
                    | FLOAT_NUMBER                                  #valueFloat
                    | STRING_TEXT                                   #valueString
                    | VARIABLE                                      #valueVariable
                    ;
 
expression          : left=expression op=MUL right=expression       #expressionMultiply
                    | left=expression op=DIV right=expression       #expressionDivision                   
                    | left=expression op=REM right=expression       #expressionRem 
                    | left=expression op=ADD right=expression       #expressionAddition
                    | left=expression op=SUB right=expression       #expressionSubtraction
                    | LP expression RP                              #expressionParanthesis
                    | value                                         #expressionValue
                    ;
 
/** TODO 1: Add the tokens (in the Lexer part) and the rules (with aliases) for boolean expressions
  * Operators: OR, AND, NOT
  * Values: true, false, variables 
 */
 
 
attribution         : VARIABLE EQ expression                        #variableAttribution
                    ;
 
 
/** TODO 4: Add the tokens (in the Lexer part) and the rules (with aliases) for lists declaration
  * Keyword: list
  * Name: any variable name
  * Values: any value separated by comma
 */
 
 
/** TODO 5: Add the tokens (in the Lexer part) and the rules (with aliases) for functions declaration
  * Keyword: function
  * Name: any variable name
  * Parameters: any declaration separated by comma
  * Instructions: any statement separated by a semicolon and one or more new lines
  * Return: "return" keyword + any statement ending with a semicolon 
 */
 
/** BONUS: Add the tokens (in the Lexer part) and the rules (with aliases) for function calls
  * Function name: any variable name
  * Parameters: any value separated by comma
  * Add the function call to the variable declaration  
 */
 
 
WS                  :   (' ')       -> skip;
NEWLINE             :   ([\r\n]+)   -> skip;
VARIABLE            :   ('_'[a-zA-Z0-9]+);
ADD                 :   '+';
SUB                 :   '-';
MUL                 :   '*';
DIV                 :   '/';
REM                 :   '%';
INT                 :   'int';
FLOAT               :   'float';
STRING              :   'string';
LP                  :   '(';
RP                  :   ')';
EQ                  :   '=';
SEMICOLON           :   ';';
INT_NUMBER          :   ([0-9]+);
FLOAT_NUMBER        :   ([0-9]+'.'[0-9]+);
STRING_TEXT         :   ('"'~["]+'"'|'\''~[']+'\'');
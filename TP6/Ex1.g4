grammar Ex1;

start               : (statement SEMICOLON NEWLINE*)*   #multilineProg
                    | statement SEMICOLON NEWLINE*              #singlelineProg 
                    ;
//  EX 4, 5
statement           : declaration                       #declarationRule
                    | expression                        #expressionRule
                    | list_declaration                  #listRule
                    | function_declaration              #functionRule
                    | attribution                       #attributionRule
                    ;

declaration         : type VARIABLE EQ expression       #variableDeclaration
                    | type VARIABLE EQ function_call    #variableFunctionCall
                    ;

type                : INT                               #typeInt
                    | FLOAT                             #typeFloat
                    | STRING                            #typeString
                    | BOOLEAN                           #typeBoolean
                    ;
// EX 1
value               : INT_NUMBER                        #valueInt
                    | FLOAT_NUMBER                      #valueFloat
                    | STRING_TEXT                       #valueString
                    | BOOL_VALUE                        #valueBoolean
                    | VARIABLE                          #valueVariable
                    ;

expression          : left=expression op=MUL right=expression     #expressionMultiply
                    | left=expression op=DIV right=expression     #expressionDivision                   
                    | left=expression op=REM right=expression     #expressionRem 
                    | left=expression op=ADD right=expression     #expressionAddition
                    | left=expression op=SUB right=expression     #expressionSubtraction
                    | LP expression RP                            #expressionParanthesis
                    | expression_boolean                          #expressionBoolean
                    | value                                       #expressionValue
                    ;
// EX 1
expression_boolean  : left=expression_boolean op=OR right=expression_boolean    #expressionOr
                    | left=expression_boolean op=AND right=expression_boolean   #expressionAnd
                    | op=NOT right=expression_boolean                           #expressionNot
                    | LP expression_boolean RP                                  #expressionBoolParanthesis
                    | value                                                     #expressionBoolValue
                    ;

attribution         : VARIABLE EQ expression                        #variableAttribution
                    ;
// EX 4
list_declaration    : LIST VARIABLE EQ LSP values RSP               #listDeclaration
                    ;

values              : (value COMMA?)*                                #listValues
                    ;
//  EX 5
function_declaration: FUNCTION VARIABLE LP (parameter COMMA?)* RP NEWLINE* LB NEWLINE* (statement SEMICOLON NEWLINE*)* return_function NEWLINE* RB    #functionContent
                    ;


parameter           : declaration                               #functionParameter
                    ;

return_function     : RETURN statement SEMICOLON                #returnStatement
                    | RETURN SEMICOLON                          #emptyReturn
                    ;

function_call       : VARIABLE LP (value COMMA*)* RP   #functionCall
                    ;


// EX 1
WS                  :   (' ')       -> skip;
NEWLINE             :   ([\r\n]+)   -> skip;
FUNCTION            :   'function';
VARIABLE            :   ('_'[a-zA-Z0-9]+);
ADD                 :   '+';
SUB                 :   '-';
MUL                 :   '*';
DIV                 :   '/';
REM                 :   '%';
INT                 :   'int';
FLOAT               :   'float';
STRING              :   'string';
BOOLEAN             :   'bool';
LIST                :   'list';
LP                  :   '(';
RP                  :   ')';
EQ                  :   '=';
SEMICOLON           :   ';';
AND                 :   '&&';
OR                  :   '||';
NOT                 :   '!';
LSP                 :   '[';
RSP                 :   ']';
COMMA               :   ',';
BOOL_VALUE          :   ('true'|'false');
LB                  :   '{';
RB                  :   '}';
RETURN              :   'return';
INT_NUMBER          :   ([0-9]+);
FLOAT_NUMBER        :   ([0-9]+'.'[0-9]+);
STRING_TEXT         :   ('"'~["]+'"'|'\''~[']+'\'');

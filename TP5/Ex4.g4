grammar Ex4;

start       : (statement SEMICOLON NEWLINE*)*   #multilineProg
            | statement SEMICOLON               #singlelineProg 
            ;

statement   : declaration                       #declarationRule
            | expression                        #expressionRule
            ;

declaration : type VARIABLE EQ expression       #variableDeclaration
            ;

type        : INT                               #typeInt
            | FLOAT                             #typeFloat
            | STRING                            #typeString
            ;

value       : INT_NUMBER                        #valueInt
            | FLOAT_NUMBER                      #valueFloat
            | STRING_TEXT                       #valueString
            | VARIABLE                          #valueVariable
            ;

expression  : left=expression op=MUL right=expression     #expressionMultiply
            | left=expression op=DIV right=expression     #expressionDivision                   
            | left=expression op=REM right=expression     #expressionRem 
            | left=expression op=ADD right=expression     #expressionAddition
            | left=expression op=SUB right=expression     #expressionSubtraction
            | LP expression RP                            #expressionParanthesis
            | value                                       #expressionValue
            ;

WS          :   (' ')       -> skip;
NEWLINE     :   ([\r\n]+)   -> skip;
VARIABLE    :   ('_'[a-zA-Z0-9]+);
ADD         :   '+';
SUB         :   '-';
MUL         :   '*';
DIV         :   '/';
REM         :   '%';
INT         :   'int';
FLOAT       :   'float';
STRING      :   'string';
LP          :   '(';
RP          :   ')';
EQ          :   '=';
SEMICOLON   :   ';';
INT_NUMBER  :   ([0-9]+);
FLOAT_NUMBER:   ([0-9]+'.'[0-9]+);
STRING_TEXT :   ('"'~["]+'"'|'\''~[']+'\'');
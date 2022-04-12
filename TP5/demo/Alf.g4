grammar Alf;

start       : declaration                  #declarationStatement
            ;

declaration : type VARIABLE EQ value       #variableDeclaration
            ;

type        : INT                           #typeInt
            | FLOAT                         #typeFloat
            | STRING                        #typeString
            ;

value       : INT_NUMBER                    #valueInt
            | FLOAT_NUMBER                  #valueFloat
            | STRING_TEXT                   #valueString
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

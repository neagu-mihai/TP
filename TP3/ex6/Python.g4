grammar Python;

start:;

LP                              :   '(';
RP                              :   ')';
PLUS                            :   '+';
MINUS                           :   '-';
EGAL                            :   '=';
COLON                           :   ':';
SEMICOLON                       :   ';';
LB                              :   '{';
RB                              :   '}';
LSP                             :   '[';
RSP                             :   ']';
MUL                             :   '*';
DIV                             :   '/';
REM                             :   '%';
FOR                             :   'for';
IF                              :   'if';
ELSE                            :   'else';
WHILE                           :   'while';
CLASS                           :   'class';
BREAK                           :   'break';
DEF                             :   'def';
IN                              :   'in';

WS                              :   ([ ]+);
INT                             :   ([0-9]+);
VARIABLE                        :   ([a-zA-Z0-9]+);
FUNCTION_NAME                   :   ([a-zA-Z_][a-zA-Z0-9_]*);
FLOAT                           :   ([0-9]+'.'[0-9]+);
NEWLINE                         :   ([\r\n]+);
STRING                          :   ('"'~["]+'"'|'\''~[']+'\'');

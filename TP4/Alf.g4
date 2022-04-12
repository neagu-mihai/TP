grammar Alf;

/* Parser */
start           : statements
                ;

statements      : statement NEWLINE* statements
                | statement NEWLINE*
                ;

statement       : declaration ';'
                ;

declaration     : VARIABLE EQUAL INT_VALUE
                ;


/* Lexer */
NEWLINE         : ([\r\n]+)    -> skip;
WS              : ([ ]+)    -> skip;
EQUAL           : '=';
VARIABLE        : ('_'[a-zA-Z0-9]+);
INT_VALUE       : ([0-9]+);





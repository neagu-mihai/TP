grammar Ex1; 


start           : declaration SEMICOLON
                ;

declaration     : VARIABLE EQUAL INT_VALUE
                ;


NEWLINE         : ([\r\n]+)     -> skip;
WS              : ([ ]+)        -> skip;
SEMICOLON       : ';';
EQUAL           : '=';
VARIABLE        : ('_'[a-zA-Z0-9]+);
INT_VALUE       : ([0-9]+);
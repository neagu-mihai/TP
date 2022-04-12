grammar Ex2; 


start           : declaration SEMICOLON
                ;

declaration     : type VARIABLE EQUAL value
                ;

type            : TYPE_INT
                | TYPE_FLOAT
                | TYPE_STRING
                ;

value           : INT_VALUE
                | FLOAT_VALUE
                | STRING_VALUE
                ;


NEWLINE         : ([\r\n]+)     -> skip;
WS              : ([ ]+)        -> skip;
SEMICOLON       : ';';
EQUAL           : '=';
TYPE_INT        : 'int';
TYPE_FLOAT      : 'float';
TYPE_STRING     : 'string';
VARIABLE        : ('_'[a-zA-Z0-9]+);
INT_VALUE       : ([0-9]+);
FLOAT_VALUE     : ([0-9]+'.'[0-9]+);
STRING_VALUE    : ('"'~["]+'"'|'\''~[']+'\'');
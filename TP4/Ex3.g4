grammar Ex3; 


start           : declaration SEMICOLON
                | expression SEMICOLON
                ;

expression  : left=expression op=MUL right=expression     
            | left=expression op=DIV right=expression
            | left=expression op=REM right=expression     
            | left=expression op=ADD right=expression     
            | left=expression op=SUB right=expression     
            | number=(INT_VALUE|FLOAT_VALUE)            
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
MUL             : '*';
DIV             : '/';
REM             : '%';
ADD             : '+';
SUB             : '-';
VARIABLE        : ('_'[a-zA-Z0-9]+);
INT_VALUE       : ([0-9]+);
FLOAT_VALUE     : ([0-9]+'.'[0-9]+);
STRING_VALUE    : ('"'~["]+'"'|'\''~[']+'\'');
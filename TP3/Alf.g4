grammar Alf;

prog:;

NEWLINE     :   ([\r\n]+);
INT         :   ([0-9]+);

/* Exercice 5 */
WORD        :   ([A-Za-z]+);
PONCTUATION :   ([,.?!:;']+);
WS          :   ([ ]+);
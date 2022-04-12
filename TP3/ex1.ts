let books_array: string[] = [
    'Engineering a Compiler,9780120884780,7th February 2011',
    'Modern Operating Systems 4,9780133591620,21st March 2014',
    'Computer Networks,9332518742,9th January 2010'
];
let regex: RegExp = /([a-zA-Z\s0-9]+),([0-9]+),([a-zA-Z0-9\s]+)/;
let match: RegExpExecArray | null = null;
interface Book {
    titre: string,
    ISBN: number,
    date_publication: string
};
let book_obj: Book;
for(let book of books_array) {
    match = regex.exec(book);
    if(match) {
        book_obj = {
            titre: match[1],
            ISBN: parseInt(match[2]),
            date_publication: match[3]
        };
        console.log(book_obj);
    }
}

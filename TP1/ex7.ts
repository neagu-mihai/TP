interface User {
    name: string;
    age: number;
    occupation: string;
}
 
interface Admin {
    name: string;
    age: number;
    role: string;
}
 
export type Person = User|Admin;
 
export const persons: Person[] = [
    {
        name: 'John Doe',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    }
];
 
export function logPerson(user: Person) {   
    console.log(` - ${user.name}, ${user.age}`);
}
 
persons.forEach(logPerson);
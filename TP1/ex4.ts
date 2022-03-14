class Employee {
    public nom: string;
    public prenom: string;
    public departement: string;
    public experience: number;

    constructor(lastName: string, firstName: string, dept: string, exp: number) {
        this.nom = lastName;
        this.prenom = firstName;
        this.departement = dept;
        this.experience = exp;
    }
}

export class Manager extends Employee {
    public noSubord: number;

    constructor(lastName: string, firstName: string, dept: string, exp: number, sub: number) {
        super(lastName, firstName, dept, exp);
        this.noSubord = sub;
    }
}

const newMng: Manager = new Manager('Ghindaoanu', 'Diana', 'IT', 3, 2);
console.log(newMng);

const checkProp = (propName: string): string => {
    return newMng[propName] ? 'Property exists' : 'Property does not exist';
}
console.log(checkProp('inexistent'));
console.log(checkProp('nom'));
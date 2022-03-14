interface Employe {
    nom: string;
    prenom: string;
    departement: string;
    experience: number;
}

const newEmp: Employe = {
    nom: process.argv[2],
    prenom: process.argv[3],
    departement: process.argv[4],
    experience: +process.argv[5]
};

console.log(`Nom: ${newEmp.nom}; Prenom: ${newEmp.prenom}; Dept: ${newEmp.departement}; Experience: ${newEmp.experience}; `);

const empArray: Employe[] = [
    {
        nom: 'Popescu',
        prenom: 'Ana',
        departement: 'Marketing',
        experience: 10
    },
    {
        nom: 'Calin',
        prenom: 'Andrei',
        departement: 'HR',
        experience: 2
    },
    {
        nom: 'Stoica',
        prenom: 'Eliza',
        departement: 'IT',
        experience: 5
    }
];

const experiences: number[] = empArray.map(emp => emp.experience);
console.log(`Most experienced: ${Math.max(...experiences)}`);

const geomAvg = Math.pow(empArray.reduce((acc, current) => acc * current.experience, 1), 1/empArray.length);
console.log(`Geometric mean: ${geomAvg}`);

const prenoms: number[] = empArray.map(emp => emp.prenom.length);
const longestPrenom: number = Math.max(...prenoms)
console.log(`Longest first name: ${JSON.stringify(empArray.find((emp) => emp.prenom.length === longestPrenom))}`);

const sortedArr: Employe[] = empArray.sort((a, b) => a.nom > b.nom ? 1 : ((a.nom < b.nom) ? -1 : 0));
console.log(sortedArr);


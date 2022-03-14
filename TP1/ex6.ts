import { Manager } from "./ex4";

const testMng: Manager = new Manager('Grigore', 'Alexandra', 'Support', 3, 10);

let keyValueList: (string|number)[][] = [];

const props: string[] = Object.keys(testMng);
for(let prop of props) {
    keyValueList.push([prop, testMng[prop]]);
}

console.log(keyValueList);
import * as fs from 'fs';


let passwd_file:string = fs.readFileSync('./passwd').toString();
let components:string[] = passwd_file.split("\r\n");

interface User {
    username: string,
    password: string,
    uid: string,
    gid: string,
    uid_info: string,
    homedir: string,
    shell: string
}

let users:User[] = [];
for(let comp of components)
{
    let user_info:string[] = comp.split(':');
    let user:User = {
        username: user_info[0],
        password: user_info[1],
        uid: user_info[2],
        gid: user_info[3],
        uid_info: user_info[4],
        homedir: user_info[5],
        shell: user_info[6]
    };
    users.push(user);
}
console.log(users);
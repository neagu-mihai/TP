import * as fs from 'fs';

let passwd_content:string = fs.readFileSync('./passwd').toString();

let lines:string[] = passwd_content.split(/\r?\n/);

let passwd_regex:RegExp = /^([a-z\-_]+)?:(x)?:([0-9]+)?:([0-9]+)?:([A-Za-z\s-(),]+)?:([A-Za-z\/\-0-9]+)?:([A-Za-z\/]+)?$/;
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
for(let line of lines)
{
    let user_match:RegExpExecArray|null = passwd_regex.exec(line);
    if(user_match) {
        let user:User = {
            username: !user_match[1] ? "Undefined username" : user_match[1],
            password: !user_match[2] ? "Undefined password" : user_match[2],
            uid: !user_match[3] ? "Undefined UID" : user_match[3],
            gid: !user_match[4] ? "Undefined GID" : user_match[4],
            uid_info: !user_match[5] ? "Undefined UID info" : user_match[5],
            homedir: !user_match[6] ? "Undefined homedir" : user_match[6],
            shell: !user_match[7] ? "Undefined shell" : user_match[7],
        };
        users.push(user);
    }
}
console.log(users);
import * as os from "os";
import * as chalk from "chalk";

const mem: number = os.freemem() / 1024;
const osType: string = os.type();
const kernel: string = os.version();
const cpus: string = JSON.stringify(os.cpus());

console.log(chalk.redBright(mem));
console.log(chalk.green(osType));
console.log(chalk.blueBright(kernel));
console.log(chalk.yellow(cpus));

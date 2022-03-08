import * as os from "os";
import * as fs from "fs";
import { CpuInfo } from "os";

const mem: number = os.freemem() / 1024;
const osType: string = os.type();
const kernel: string = os.version();
const cpus: CpuInfo[] = os.cpus();

fs.writeFileSync(
  "./os.info",
  `Memory: ${mem} \nOS Type: ${osType} \nKernel version: ${kernel} \nCPUs: \n${JSON.stringify(
    cpus
  )}`
);

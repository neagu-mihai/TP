console.log(process.argv);
console.log(process.argv.length - 2);

for (let param of process.argv.slice(2)) console.log(param);

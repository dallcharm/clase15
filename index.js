const process = require('process');


console.log("--------------------------------------------");

console.log(process.memoryUsage());

console.log("--------------------------------------------");

console.log(`Current directory: ${process.cwd()}`);

console.log("--------------------------------------------");

//if (process.getgid) {
//    console.log(`Current gid: ${process.getgid()}`);
//  }


const startUsage = process.cpuUsage();
  // { user: 38579, system: 6986 }
  
  // spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);
  console.log(process.cpuUsage(startUsage));
  // { user: 514883, system: 11226 }

console.log("--------------------------------------------");

console.log(process.env)
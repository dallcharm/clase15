const { execFile } = require('child_process');
const child = execFile('git', ['branch'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
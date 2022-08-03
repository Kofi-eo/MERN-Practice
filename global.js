// const path = require("path");

// console.log(__dirname); //directory name node module
// console.log(__filename); //file name node module
// console.log(path.basename(__filename)); //file name only

// console.log(process.argv);

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);

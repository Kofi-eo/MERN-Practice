/* const path = require("path");

console.log(__dirname); //directory name node module
console.log(__filename); //file name node module
console.log(path.basename(__filename)); //file name only

console.log(process.argv);

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user); */

/*Tut 2*/

/* process.stdout.write("Hello \n \n");

const questions = [
  "what is your name?",
  "what would you rather be doing?",
  "what is your preferred programmig language",
];

const answers = []; */

/* function ask(i) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(`>`);
}

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

ask(answers.length); */

// Tut 3 Settimeout and setInterval
/* const waitTime = 3000;
const waitInterval = 500;
const currentTime = 0;

console.log(`setting a ${waitTime / 1000} second delay  `);
const timerFinish = () => console.log("done");

setTimeout(timerFinish, waitTime);

const interval = setInterval(x, y);

clearInterval(interval); */

// Tut 4 Modules
/* const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));
const dirUploads = path.join(__dirname, "www", "website");

util.log(dirUploads);

util.log(v8.getHeapStatistics()); */

//Tut 5 readline Module

/* const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How do you like node?", (answer) => {
  console.log(`Your Answer: ${answer}`);
});
 */

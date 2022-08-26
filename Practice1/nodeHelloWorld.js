console.log("Hello World"); // run by typing => node nodeHelloWorld in terminal

const url = require("url");
const parsedUrl = url.parse("https://www.example.com/y");

console.log(parsedUrl.protocol); // https:
console.log(parsedUrl.host); // www.example.com
console.log(parsedUrl.query); // y

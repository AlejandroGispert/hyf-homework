// "use strict";

// this works  node avg.js -i 2  -n 4
// const args = require("minimist")(process.argv.slice(2));

// console.log(parseInt(args.i) + parseInt(args.n));

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No numbers provided. Insert a number please.");
  process.exit(1);
}
let sum = 0;

for (let arg of args) {
  sum += Number(arg);
}
const numbers = args.map(Number);
const average = (sum / numbers.length).toFixed(2);
// Output the sum
console.log(`The result is: ${average}`);

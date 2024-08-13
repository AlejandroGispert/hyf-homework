const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const num = Number(args[i]);

  if (isNaN(num)) {
    console.log(`Invalid input: ${args[i]}`);
    process.exit(1);
  }
}

if (args.length === 0) {
  console.log("No numbers provided. Insert a number please.");
  process.exit(1);
}
let sum = 0;

for (let arg of args) {
  sum += Number(arg);
}
const numbers = args.map(Number);
const average = (sum / numbers.length).toFixed(0);
// Output the sum
console.log(`The result is: ${average}`);

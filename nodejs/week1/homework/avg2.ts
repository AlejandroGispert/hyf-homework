const args: string[] = process.argv.slice(2);

if (args.length === 0) {
  console.log("No numbers provided. Insert a number please.");
  process.exit(1);
}

for (let i = 0; i < args.length; i++) {
  const receivedInput: number = Number(args[i]);

  if (isNaN(receivedInput)) {
    console.log(`Invalid input: ${args[i]}`);
    process.exit(1);
  }
}
const numbers: number[] = args.map(Number);

let sum: number = 0;

for (let arg of args) {
  sum += Number(arg);
}

const average: number = Number((sum / numbers.length).toFixed(0));
// Output the sum
console.log(`The result is: ${average}`);

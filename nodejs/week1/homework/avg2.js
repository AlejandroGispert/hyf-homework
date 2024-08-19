var args = process.argv.slice(2);
if (args.length === 0) {
    console.log("No numbers provided. Insert a number please.");
    process.exit(1);
}
for (var i = 0; i < args.length; i++) {
    var receivedInput = Number(args[i]);
    if (isNaN(receivedInput)) {
        console.log("Invalid input: ".concat(args[i]));
        process.exit(1);
    }
}
var numbers = args.map(Number);
var sum = 0;
for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
    var arg = args_1[_i];
    sum += Number(arg);
}
var average = Number((sum / numbers.length).toFixed(0));
// Output the sum
console.log("The result is: ".concat(average));

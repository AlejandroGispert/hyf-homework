// Fizz buzz
// This is a classic programming task.

// Create a function that prints the numbers from 1 to 100.
// But for multiples of three print Fizz instead of the number and
// for  the multiples of five print Buzz. For numbers which are multiples of
// both three and five print FizzBuzz.

// When that works. Make the two number for multiples into parameters.
// So it can be called like this:

const fizzBuzz = (num, num2) => {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i % num === 0 && i % num2 === 0) {
      result += "FizzBuzz\n";
    } else if (i % num === 0) {
      result += "Fizz\n";
    } else if (i % num2 === 0) {
      result += "Buzz\n";
    } else {
      result += i + "\n";
    }
  }
  return result;
};
console.log(fizzBuzz(3, 5));

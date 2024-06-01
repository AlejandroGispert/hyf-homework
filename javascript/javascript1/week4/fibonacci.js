//Fibonacci Sequence

// Given a specific number in the fibonacci sequence return the fibonachi number.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fib = (num) => {
  let fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  let i = 2; //i tool so long to deliver the homework because of this number.
  while (i < num) {
    // Apply basic Fibonacci formulae
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];

    i++;
  }

  return fibonacciArray[num - 1];
};

console.log(fib(10));

console.log(fib(5)); // 3
fib(10); // 34

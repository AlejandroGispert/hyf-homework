//Fibonacci Sequence

// Given a specific number in the fibonacci sequence return the fibonachi number.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fib = (num) => {
  let fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  let i = 1;
  while (i < num) {
    // Apply basic Fibonacci formulae
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];

    // Increment the conditional variable
    i++;
    console.log(fibonacciArray);
  }

  return fibonacciArray[num - 1];
};

console.log(fib(10));

fib(5); // 3
fib(10); // 34

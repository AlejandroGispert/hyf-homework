function highAndLow(numbers) {
  let singleNumbersArray = numbers.toString().split(" ");

  let max = Math.max(...singleNumbersArray);

  let min = Math.min(...singleNumbersArray);

  return `${max} ${min}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

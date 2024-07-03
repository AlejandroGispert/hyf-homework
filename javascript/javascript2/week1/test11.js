function addCheckDigit(number) {
  const factor = [];
  const arrayForSum = [];
  let result = "";

  //factor maker
  while (factor.length < number.length) {
    for (let i = 2; i <= 7; i++) {
      factor.unshift(i);

      if (factor.length === number.length) {
        break;
      }
    }
  }

  //number multiplier
  for (let i = 0; i < number.length; i++) {
    arrayForSum.push(number[i] * factor[i]);
  }
  //sum of the numbers
  const toRemainder = arrayForSum.reduce((a, b) => a + b);

  if (toRemainder % 11 === 0) {
    result = 0;
  } else if (toRemainder % 11 === 1) {
    result = "X";
  } else {
    result = 11 - (toRemainder % 11);
  }

  return number + result;
}

console.log(addCheckDigit("111111111")); //"0365327"

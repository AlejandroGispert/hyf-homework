function sumArray(array) {
  // By alejandro and Ali
  if (array === null || array === undefined) {
    return 0;
  } else if (array.length < 3) {
    return 0;
  } else {
    const inputArray = [...array];

    if (isNaN(inputArray)) {
      const newArray = inputArray.sort((a, b) => a - b);
      //console.log(newArray);
      newArray.shift();

      newArray.pop();

      // console.log(newArray);
      return newArray.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }
}

console.log(sumArray([undefined]));

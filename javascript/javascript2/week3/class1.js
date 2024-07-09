const array = [1, 2, 3, 4];
const sumWithInitial = array.reduce((accumulator, currentValue, index, arr) => {
  accumulator.push(currentValue * 3);
  return accumulator;
}, []);

sumWithInitial;
console.log(sumWithInitial);

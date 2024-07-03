function createPhoneNumber(numbers) {
  const firstNumberGroup = numbers.splice(0, 3).join("");
  const secondNumberGroup = numbers.splice(0, 3).join("");
  const thirdNumberGroup = numbers.splice(0, 4).join("");

  const result = `(${firstNumberGroup}) ${secondNumberGroup}-${thirdNumberGroup}`;
  return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

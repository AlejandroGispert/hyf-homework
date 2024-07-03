function getMiddle(s) {
  // by Alejandro
  const result = [];
  const array = s.split("");

  if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1]);
    result.push(array[array.length / 2]);
  } else {
    result.push(array[Math.floor(array.length / 2)]);
  }

  return result.join("");
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));

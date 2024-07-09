function getCount(str) {
  let vowelCount = 0;
  const stringArray = str.split("");
  const vowelArray = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < vowelArray.length; j++) {
      if (stringArray[i] === vowelArray[j]) {
        vowelCount++;
      } else {
        continue;
      }
    }
  }
  return vowelCount;
}
console.log(getCount("papi"));

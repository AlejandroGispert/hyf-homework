function romanize(num) {
  const values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  result = "";

  for (let i in values) {
    while (num >= values[i]) {
      result += i;
      num -= values[i];
    }
  }
  return result;
}

console.log(romanize(1990));

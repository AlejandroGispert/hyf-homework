function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((e) => e ** 2)
      .join("")
  );
}

console.log(squareDigits(765));

function persistence(num) {
  let finalResult = "something";
  let numArray = num.toString().split("");
  const multiplication = (arr) => arr.reduce((a, b) => a * b);

  //   if (num.length > 1) {
  while (finalResult.toString().split("").length > 1) {
    if (finalResult === "something") {
      finalResult = multiplication(numArray);
    } else {
      finalResult = multiplication(finalResult.toString().split(""));
      //console.log(finalResult);
    }
  }
  return finalResult;
}
//   else if (num.length === 1) {
//     return 0;
//   }
// }

console.log(persistence(39));
console.log(persistence(999));

function testit(s) {
  if (s === "" || s === "0" || s === "00") {
    return "";
  } else {
    const newArray = s.split("");

    const result = newArray.filter((e) => e === "1");

    if (result.length > 1 && result.length % 2 === 1) {
      result.pop();
      console.log(result);
    }
    if (result.length > 3) {
      result.pop();
      console.log(result);
    }
    //console.log(result);
    return result.join("");
  }
}

console.log("#1: " + testit("001"));
console.log("#2: " + testit("")); //"", "")
console.log("#3: " + testit("0")); //"", "")
console.log("#4: " + testit("00")); //"", "")
console.log("#5: " + testit("001")); //"1", "")
console.log("#6: " + testit("0011")); //"11", "")
console.log("#7: " + testit("00111")); //"11", "")
console.log("#8: " + testit("001111")); //"111", "")
console.log("#9: " + testit("0011111")); //"111", "")
console.log("#10: " + testit("00111111"));
//

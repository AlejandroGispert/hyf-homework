// Create a function that takes a number as parameter.
// The function should return the following object:

const formatCreditCardNumber = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    return { error: "Input must be a valid number" };
  } else {
    let numArray = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
    // console.log(numArray);
    let result1 = "";
    let result2 = "";
    let result3 = "";
    let result4 = "";

    for (let i = 0; i < numArray.length; i++) {
      // console.log("number: " + number + " i :" + i);
      if (i < 4) {
        result1 += numArray[i];
      } else if (i < 8) {
        result2 += numArray[i];
      } else if (i < 12) {
        result3 += numArray[i];
      } else if (i < 16) {
        result4 += numArray[i];
      }
    }

    const finalResult = result1 + " " + result2 + " " + result3 + " " + result4;
    console.log(finalResult);
    return { original: num, formatted: finalResult };
  }
};

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
console.log(formatCreditCardNumber(4781321334789876));
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/
// Thins to consider:

// What should happen if the function is called with an argument that is not a number?

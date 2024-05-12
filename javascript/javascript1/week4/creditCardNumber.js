// Create a function that takes a number as parameter.
// The function should return the following object:

const formatCreditCardNumber = (num) => {
  let numArray = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  let result1 = "";
  let result2 = "";
  let result3 = "";

  for (const number of numArray) {
    if (numArray.indexOf(number) < 4) {
      result1 += number;
    } else if (numArray.indexOf(number) >= 4 && numArray.indexOf(number) < 8) {
      result2 += number;
    } else if (numArray.indexOf(number) >= 8 && numArray.indexOf(number) < 12) {
      result3 += number;
    }
  }
  const finalResult = result1 + " " + result2 + " " + result3;
  return { original: num, formatted: finalResult };
};

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/
// Thins to consider:

// What should happen if the function is called with an argument that is not a number?

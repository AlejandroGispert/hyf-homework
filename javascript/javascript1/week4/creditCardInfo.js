// Credit card info
// S

const getCardInfo = (cardNumber) => {
  let cardType = "";

  //or BIN, Bank Identification Number
  //   const issuerIdentificationNumber = cardNumber.toString().slice(0, 6);
  //   const lastDigit = cardNumber.toString().slice(-1);

  const firstDigit = cardNumber.toString().slice(0, 1);
  const firstTwoDigits = cardNumber.toString().slice(0, 2);

  switch (true) {
    case firstDigit == 4 &&
      cardNumber.toString().length >= 13 &&
      cardNumber.toString().length <= 16:
      cardType = "Visa";

      break;
    case firstDigit == 5 && cardNumber.toString().length === 16:
      cardType = "Mastercard";

      break;
    case (firstTwoDigits == 34 || firstTwoDigits == 37) &&
      cardNumber.toString().length == 15:
      cardType = "American Express";

      break;
    case firstDigit == 6 && cardNumber.toString().length == 16:
      cardType = "Discover";

      break;
    default:
      cardType = "Unknown";
  }

  return cardType;
};

console.log(getCardInfo(4781321334789876));

// Length: Most credit cards have a specific number of digits.
//  For example, Visa cards start with 4 and are 13 or 16 digits long,
//  Mastercards start with 5 and are 16 digits long, American Express
//  cards start with 34 or 37 and are 15 digits long,
// and Discover cards start with 6 and are 16 digits long.

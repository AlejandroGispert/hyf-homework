// Credit card info
// S

const getCardInfo = (cardNumber) => {
  let cardType = "";

  //or BIN, Bank Identification Number
  //   const issuerIdentificationNumber = cardNumber.toString().slice(0, 6);
  //   const lastDigit = cardNumber.toString().slice(-1);
  const cardNumberStr = cardNumber.toString();
  const firstDigit = cardNumberStr.slice(0, 1);
  const firstTwoDigits = cardNumberStr.slice(0, 2);

  switch (true) {
    case parseInt(firstDigit) === 4 &&
      cardNumberStr.length >= 13 &&
      cardNumberStr.length <= 16:
      cardType = "Visa";

      break;
    case parseInt(firstDigit) === 5 && cardNumberStr.length === 16:
      cardType = "Mastercard";

      break;
    case (parseInt(firstTwoDigits) === 34 || firstTwoDigits == 37) &&
      cardNumberStr.length == 15:
      cardType = "American Express";

      break;
    case parseInt(firstDigit) === 6 && cardNumberStr.length == 16:
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

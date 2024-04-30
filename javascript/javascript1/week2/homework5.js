// Candy helper optional

const boughtCandyPrices = [];

//old logic That works perfectly
// const addCandy = (candyType, weight) => {
//   candyType.toLowerCase();

//   switch (candyType) {
//     case (candyType = "sweet"):
//       boughtCandyPrices.push(weight * 0.5);
//       break;
//     case (candyType = "chocolate"):
//       boughtCandyPrices.push(weight * 0.7);
//       break;
//     case (candyType = "toffee"):
//       boughtCandyPrices.push(weight * 1.1);
//       break;
//     case (candyType = "chewing-gum"):
//       boughtCandyPrices.push(weight * 0.03);
//       break;
//   }
// };

//new and improved logic
const candyPriceList = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  "chewing-gum": 0.03,
};

const addCandy = (candyType, weight) => {
  for (let candy in candyPriceList) {
    if (candy === candyType) {
      boughtCandyPrices.push(weight * candyPriceList[candy]);
      break; // Exit the loop once the matching type is found
    }
  }
};

addCandy("toffee", 20);
addCandy("sweet", 20);
// Adds the price of 20 grams of sweets to the array boughtCandyPrices
//console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;

const canBuyMoreCandy = () => {
  const sumOfArray = boughtCandyPrices.reduce((a, b) => a + b, 0);

  return amountToSpend >= sumOfArray
    ? console.log("You can buy more, so please do!")
    : console.log("Enough candy for you!");
};

console.log(amountToSpend);

canBuyMoreCandy();

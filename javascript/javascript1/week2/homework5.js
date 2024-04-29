// Candy helper optional

const boughtCandyPrices = [];

const addCandy = (candyType, weight) => {
  candyType.toLowerCase();

  switch (candyType) {
    case (candyType = "sweet"):
      boughtCandyPrices.push(weight * 0.5);
      break;
    case (candyType = "chocolate"):
      boughtCandyPrices.push(weight * 0.7);
      break;
    case (candyType = "toffee"):
      boughtCandyPrices.push(weight * 1.1);
      break;
    case (candyType = "chewing-gum"):
      boughtCandyPrices.push(weight * 0.03);
      break;
  }
};

addCandy("toffee", 20);
addCandy("sweet", 20);
// Adds the price of 20 grams of sweets to the array boughtCandyPrices
//console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;

const canBuyMoreCandy = () => {
  let sum = 0;

  const sumOfArray = boughtCandyPrices.reduce((a, b) => a + b, 0);
  //console.log(sumOfArray);
  if (amountToSpend >= sumOfArray) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
};

console.log(amountToSpend);

canBuyMoreCandy();

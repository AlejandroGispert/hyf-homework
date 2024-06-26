/* 
//************************************************ 
STEP2 answer
//************************************************ 

Alejandro Gispert
https://www.freecodecamp.org/AlejandroGispert

*/

//************************************************
//Age-ify (A future age calculator)
//************************************************

//added some JSdoc
/**
 * defining the years
 * @param {number} yearOfBirth its actually my birthYear
 * @param {number} yearFuture its a year i choose

 */
const yearOfBirth = 1986;
const yearFuture = 2045;

const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

//************************************************
//Goodboy-Oldboy (A dog age calculator)
//************************************************

//corrected the years nitty-picky
const dogYearOfBirth = 2017;
const dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
let years = "human years";

if (shouldShowResultInDogYears) {
  years = "dog years";
  //corrected years
  dogYear *= 7;
}
//changed to template literals
console.log(`Your dog will be ${dogYear} ${years} old in ${dogYearFuture}`);

//************************************************
//Housey pricey (A house price estimator)
//************************************************

//added arrow function with implicit return
const volumeCalculator = (length, width, depth) => length * width * depth;

const volumeInMetersPeter = volumeCalculator(8, 10, 10);
const volumeInMetersJulia = volumeCalculator(5, 11, 8);
const gardenSizeInM2Peter = 100;
const gardenSizeInM2Julia = 70;

//added explicit return arrow function
const rightHousePriceCalculator = (volume, garden) => {
  return volume * 2.5 * 1000 + garden * 300;
};

const realHouseCostPeter = rightHousePriceCalculator(
  volumeInMetersPeter,
  gardenSizeInM2Peter
);
const realHouseCostJulia = rightHousePriceCalculator(
  volumeInMetersJulia,
  gardenSizeInM2Julia
);

//added some ternary logic inside the function
const compareHousePrice = (realPrice, houseCurrentPrice) => {
  return realPrice > houseCurrentPrice
    ? "its a good offer."
    : "its a bad offer.";
};

const convenienceForPeter = compareHousePrice(realHouseCostPeter, 2500000);
const convenienceForJulia = compareHousePrice(realHouseCostPeter, 1000000);
console.log("For Peter, buying that house " + convenienceForPeter);
console.log("For Julia, buying that house " + convenienceForJulia);
/*
function numberWithPunctum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
*/

//used "toFixed", but it only adds after the decimals,so i found another logic to make it work, instead of regex
// const houseConvenienceForPeter =
//   "Peter is considering a house for 2.500.000 but the correct price of that house is: " +
//   (correctHousePricePeter / 1000000).toFixed(3) +
//   ".000";
// const houseConvenienceForJulia =
//   "Julia is considering a house for 1.000.000 but the correct price of that house is: " +
//   (correctHousePriceJulia / 1000000).toFixed(3) +
//   ".000";

// console.log(houseConvenienceForPeter);
// console.log(houseConvenienceForJulia);
//************************************************************ */
// Ez Namey (Startup name generator) Optional
//************************************************************ */
const firstWords = [
  "Point",
  "Scality",
  "Converged",
  "Utopia",
  "Technologent",
  "Omnilert",
  "Optimity",
  "Plan4",
  "Innometrics",
  "Plexus",
];
const secondWords = [
  "Fireworks",
  "Compass",
  "Alfatek",
  "Excelero",
  "Perficient",
  "Titan",
  "Aims",
  "Innominds",
  "Innovations",
  "Ventures",
];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName =
  firstWords[randomNumber1] + " " + secondWords[randomNumber2];
const nameLength = startupName.length - 1;

console.log(
  "The startup: " + startupName + " contains " + nameLength + " characters"
);

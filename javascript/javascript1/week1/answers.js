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

const yearOfBirth = 1986
const yearFuture = 2045

const age = yearFuture - yearOfBirth

console.log("You will be " + age +" years old in " + yearFuture)

//************************************************ 
//Goodboy-Oldboy (A dog age calculator)
//************************************************ 


const dogYearOfBirth = 2010
const dogYearFuture = 2045
let dogYear = dogYearFuture - dogYearOfBirth
const shouldShowResultInDogYears = true
let years = "human years"

if (shouldShowResultInDogYears) {
years = "dog years"
   dogYear *= 5
}
console.log("Your dog will be " + dogYear +" "+ years +" old in " + dogYearFuture )



//************************************************ 
//Housey pricey (A house price estimator)
//************************************************ 
const length = 5   
const width = 11
const depth = 8

const Peter = [8,10,10]
const Julia =[length,width,depth]

const volumeInMetersPeter = Peter[0] * Peter[1] * Peter[2]
const volumeInMetersJulia = Julia[0] * Julia[1] * Julia[2]

const gardenSizeInM2Peter =  100;
const gardenSizeInM2Julia =  70;

const correctHousePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
const correctHousePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

function numberWithPunctum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const result = "Peter is considering a house for 2.500.000 but the correct price of that house is: " + numberWithPunctum(correctHousePricePeter)
const result2 = "Julia is considering a house for 1.000.000 but the correct price of that house is: " + numberWithPunctum(correctHousePriceJulia)

console.log(result)
console.log(result2)

// Ez Namey (Startup name generator) Optional

const firstWords = ["Point", "Scality", "Converged","Utopia", "Technologent", "Omnilert","Optimity", "Plan4", "Innometrics",
"Plexus"]
const secondWords =["Fireworks","Compass", "Alfatek", "Excelero", "Perficient","Titan", "Aims",
"Innominds","Innovations" ,"Ventures"]


const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber]
const nameLength = startupName.length - 1

console.log("The startup: " + startupName + " contains " + nameLength + " characters")
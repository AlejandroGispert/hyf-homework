//Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
//names.splice(1, 1);
const indexOfNameToRemove = names.indexOf(nameToRemove);

if (indexOfNameToRemove >= 0) {
  names.splice(indexOfNameToRemove, 1);
} else {
  console.log("Informative error message");
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

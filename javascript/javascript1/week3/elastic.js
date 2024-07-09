const myObject = {
  key1: "value1",
  key2: "value2",
};

console.log(Object.keys(myObject)); // ['key1', 'key2']   returns array with keys

console.log(Object.values(myObject)); // ['value1', 'value2'] return arrays with values

console.log(Object.entries(myObject)); // [ ['key1', 'value1'] , ['key2', 'value2'] ]
//returns 1 big array with subarrays

const entries = Object.entries(myObject);

const myObjectAgain = Object.fromEntries(entries); //Creates an object from arrray with subarrays
console.log(myObjectAgain);

const fruits = ["apple", "banana", "orange"];

fruits.push("kiwi");
console.log(fruits);

console.log(fruits.pop());

fruits.push("dragonfruit", "elderberry");
console.log(
  `${
    fruits.includes("banana") ? "banana" : "no banana"
  } is inside of the fruit array`
);

fruits.unshift("strawberry");
console.log(fruits);

const fruitOut = fruits.shift();
console.log(fruitOut);

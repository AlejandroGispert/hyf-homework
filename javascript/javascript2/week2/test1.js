myId;

console.log(myId.innerHTML);

myId.innerHTML = "what!!";

console.log(myId.innerHTML);

const fruits = ["bananas", "pear", "chicken"];

fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

fruits.array.forEach((_, index, array) => console.log(index));

const toRemove = "chicken";
const modified = fruits.filter((fruit) => fruit != toRemove);

console.log("modified: " + modified);

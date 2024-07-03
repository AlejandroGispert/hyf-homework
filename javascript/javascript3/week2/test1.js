//cchunk codecapm

function chunkArrayInGroups(arr, size) {
  const splitAmount = size;

  const chunkArray = [];

  for (let i = 0; i < arr.length; i) {
    chunkArray.push(arr.splice(i, splitAmount));
  }
  return chunkArray;
}

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

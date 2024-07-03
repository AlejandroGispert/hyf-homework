// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)

const filterRange = (arr, a, b) => {
  let result = [];
  let newA = 0;
  let newB = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(filterRange([5, 3, 8, 1], 1, 4));

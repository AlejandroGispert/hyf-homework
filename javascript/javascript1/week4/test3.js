function findOdd(a) {
  //happy coding!

  //   if (a.length === 0) {
  //     return a[0];
  //   } else {
  for (let i = 0; i < a.length; i++) {
    let resultCount = 0;

    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        resultCount++;
      }
    }
    if (resultCount % 2 !== 0) {
      return a[i];
    }
  }
}
// }
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

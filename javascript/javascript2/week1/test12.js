function* paperFold() {
  let result = [0];
  if (result[0] === 0 && result.length === 1) {
    result[0] = 1;
  } else {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
      if (result[i] === 1) {
        result.splice(i, 0, 1);
        result.splice(i + 2, 0, 0);
      }
    }

    yield result.join("").toString();
  }
}

console.log(paperFold().next());
console.log(paperFold().next());

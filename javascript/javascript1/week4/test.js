function checkExam(array1, array2) {
  // good luck
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result = result + 4;
    } else {
      result = result - 1;
    }
  }
  if (result > 0) {
    return result.toString();
  } else {
    return "0";
  }
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));

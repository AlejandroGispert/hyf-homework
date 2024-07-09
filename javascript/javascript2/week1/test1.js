function inArray(array1, array2) {
  const result = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      let splittedArray = array1[i].toString().toLowerCase().split("");
      let splittedArray2 = array2[j].toString().toLowerCase().split("");
      //console.log(splittedArray.every((e) => splittedArray2.includes(e)));
      if (splittedArray.every((e) => splittedArray2.includes(e))) {
        // console.log(array1[i] + " test 2, array is present in array2");

        if (result.includes(splittedArray.join("")) == false) {
          result.push(splittedArray.join(""));
        }
      } else {
        // console.log(array1[i] + " test 2, array is not present in array2");
      }
    }
  }
  return result.sort();
}

//a1 = ["xyz", "live", "strong"];

//a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = [he, pini, or, ou, gla, ion, ing, ect, 1.9];
a2 = [
  here,
  is,
  that,
  Ruby,
  browse,
  updated,
  have,
  1.9,
  glad,
  am,
  sample,
  I,
  would,
  have,
  using,
  does,
  known,
  I,
  comment,
  the,
];
// [ '1.9', 'ect', 'gla', 'he', 'ing', 'ion', 'or', 'ou', 'pini' ]
//to have the same ordered members as [ '1.9', 'gla', 'he', 'ing', 'ion', 'or', 'ou' ]
console.log(inArray(a1, a2));

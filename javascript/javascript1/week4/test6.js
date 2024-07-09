//Allocating Hotel Rooms

function arrayConversion(arr) {
  const newArr = [...arr];

  const firstIterationArr = [];
  const secondIterationArr = [];
  const thirdIterationArr = [];
  const fourthIterationArr = [];

  for (let i = 0; i < newArr.length; i += 2) {
    firstIterationArr.push(newArr[i] + newArr[i + 1]);

    // console.log("first: " + firstIterationArr);
  }

  if (firstIterationArr.length != 1) {
    for (let i = 0; i < firstIterationArr.length; i += 2) {
      secondIterationArr.push(firstIterationArr[i] * firstIterationArr[i + 1]);

      //console.log("sec: " + secondIterationArr);
    }
  } else {
    return firstIterationArr[0];
  }

  if (secondIterationArr.length != 1) {
    for (let i = 0; i < secondIterationArr.length; i += 2) {
      thirdIterationArr.push(secondIterationArr[i] + secondIterationArr[i + 1]);

      // console.log("third: " + thirdIterationArr);
      // console.log(thirdIterationArr.length);
    }
  } else {
    return secondIterationArr[0];
  }

  if (thirdIterationArr.length != 1) {
    for (let i = 0; i < thirdIterationArr.length; i += 2) {
      fourthIterationArr.push(thirdIterationArr[i] * thirdIterationArr[i + 1]);

      //console.log("fourth: " + fourthIterationArr);
    }
  } else {
    return thirdIterationArr[0];
  }
  if (fourthIterationArr.length != 1) {
    return arrayConversion(fourthIterationArr);
  } else {
    return fourthIterationArr[0];
  }
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// function arrayConversion(arr) {
//     for (let i = 0; arr.length > 1; i++) {
//       const newArr = [];
//       for (let j = 0; j < arr.length; j += 2) {
//         if (i % 2 === 0) {
//           newArr.push(arr[j] + arr[j + 1]);
//         } else {
//           newArr.push(arr[j] * arr[j + 1]);
//         }
//       }
//       arr = newArr;
//     }
//     return arr[0];
//   }

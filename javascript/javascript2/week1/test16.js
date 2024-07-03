// Mutation codecamp

function mutation(arr) {
  const firstArray = arr[1].toLowerCase().split("");
  const secondArray = arr[0].toLowerCase().split("");
  const result = [];

  for (let i = 0; i < firstArray.length; i++) {
    if (secondArray.includes(firstArray[i])) {
      result.push(true);
      console.log(firstArray[i]);
    } else {
      console.log("not included: " + firstArray[i]);
      result.push(false);
    }
  }
  if (result.every((e) => e === true)) {
    console.log("YEAH");
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["hello", "hey"]));
// mutation(["hello", "hey"]);
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// mutation(["Alien", "line"])

function solution(str) {
  const newArray = str.split("");
  const secondNewArray = [];
  if (newArray.length % 2 !== 0) {
    newArray.push("_");
    // console.log("desigual" + newArray);
  } else {
    //console.log("igual" + newArray);
  }

  for (let i = 0; i < newArray.length; i++) {
    secondNewArray.push(newArray[i] + newArray[i + 1]);
    newArray.shift();
  }
  return secondNewArray;
}

console.log(solution("abcdef"));
console.log(solution("abc"));

// others solutions
// ¨
// function solution(str){
//     arr = [];
//     for(var i = 0; i < str.length; i += 2){
//       second = str[i+1] || '_';
//       arr.push(str[i] + second);
//     }
//     return arr;
//   }

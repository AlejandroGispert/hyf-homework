function likes(names) {
  let result = "";

  switch (names.length) {
    case names.length === 0:
      result += "no one likes this";
      break;
    case names.length == 1:
      result += `${names[0]} likes this`;
      break;
    case names.length == 2:
      result += `${names[0]} and ${names[1]} like this`;

      break;
    case names.length == 3:
      result += `${names[0]}, ${names[1]} and ${names[2]} like this`;
      console.log(result);
      break;
    case names.length == 4:
      result += `${names[0]}, ${names[1]} and 2 others like this`;
      console.log(result);
      break;
  }

  return result;
}
console.log(likes(["Peter", "Jacob", "Mark", "Max"]));

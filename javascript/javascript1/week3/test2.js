// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

const camelize = (str) => {
  let myArray = str.split("-");
  let newArray = [];
  let firstChar = "";

  for (let i = 0; i < myArray.length; i++) {
    firstChar = myArray[i].charAt(0).toUpperCase();
    // newArray.push(myArray[i]);

    newArray.push(firstChar + myArray[i].slice(1));

    //console.log("firstChar: " + firstChar);
  }

  return newArray.join("");
};

console.log(camelize("hola-como-estas"));

// return str
//   .toLowerCase()
//   .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

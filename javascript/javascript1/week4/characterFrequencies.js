// Character frequencies
// Write a function that counts the frequency of characters in a string:

const getCharacterFrequencies = (str) => {
  const characterArray = str.toLowerCase().split("").sort();

  let countOfCharacters = 0;
  const characters = [];
  let loopCounter = 0;

  for (const char of characterArray) {
    for (let i = 0; i < characterArray.length; i++) {
      if (characterArray[i] === char) {
        countOfCharacters = 0;
        countOfCharacters++;
        for (let j = characterArray.length; j > 0; j--) {
          if (characterArray[i - j] === char && characterArray[i] === char) {
            countOfCharacters++;
          }
        }
      }
    }
    if (countOfCharacters === 1) {
      characters.push({ character: char, count: countOfCharacters });
    } else if (countOfCharacters >= 1) {
      loopCounter++;
      if (loopCounter === 2) {
        characters.push({ character: char, count: countOfCharacters });
      }
    }
  }
  const finalObject = { characters: characters, length: characterArray.length };
  return finalObject;
};
console.log(getCharacterFrequencies("happyppp"));

// const getCharacterFrequencies = (str) => {
//   const characterCount = {};
//   const characterArray = str.toLowerCase().split("").sort();

//   for (const char of characterArray) {
//     characterCount[char] = (characterCount[char] || 0) + 1;
//   }

//   const characters = [];
//   for (const char in characterCount) {
//     characters.push({ character: char, count: characterCount[char] });
//   }

//   return characterCount;
// };

// console.log(getCharacterFrequencies("happyppp"));

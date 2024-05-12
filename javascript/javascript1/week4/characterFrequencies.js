// Character frequencies
// Write a function that counts the frequency of characters in a string:

const getCharacterFrequencies = (str) => {
  const characterArray = str.toLowerCase().split("").sort();

  let countOfCharacters = 0;
  const characters = [];
  let loopCounter = 0;

  for (const char of characterArray) {
    for (let i = 0; i < characterArray.length; i++) {
      if (characterArray[i].match(char)) {
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
    } else if (countOfCharacters > 1) {
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

/* correct answer
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/

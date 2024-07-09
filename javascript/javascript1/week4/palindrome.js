// Palindromic substring
// Write a function that finds the longest
// palindromic substring of a given string.

const longestPalindromic = (inputString) => {
  let longest = "";

  // Iterate through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      const substring = inputString.slice(i, j);
      console.log("substring: " + substring);
      // Check if the substring is a palindrome
      if (
        substring === substring.split("").reverse().join("") &&
        substring.length > longest.length
      ) {
        longest = substring;
      }
    }
  }

  return longest;
};
console.log(longestPalindromic("lumuljhkhkh8"));

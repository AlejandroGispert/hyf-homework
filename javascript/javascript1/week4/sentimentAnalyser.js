// Build a sentiment analyzer
// A sentiment analyzer is some functionality that
// figures out how positive/negative a sentence is.

// Fx the sentence `I am mega super awesome happy"
// Should have a high score The sentence "I hate doing boring stuff"
// ¨' should have a low score.

// Create a function that takes a string as a parameter.
// calling the function will return an object with score,
//  positiveWords and negativeWords.
//  You decide how the score should be
// implemented and what words are negative and positive.

// Here is an example of using the function:

const getSentimentScore = (str) => {
  const happyWordsArray = ["mega", "super", "awesome", "happy", "positive"];
  const sadWordsArray = ["boring", "hate", "negative"];
  const wordArray = str.split(" ");
  let score = 0;

  const positiveWord = [];
  const negativeWord = [];

  console.log(wordArray);
  for (const word of wordArray) {
    if (happyWordsArray.includes(word)) {
      score++;
      positiveWord.push(word);
    } else if (sadWordsArray.includes(word)) {
      score--;
      negativeWord.push(word);
    }
  }
  console.log(score);
  const resultObject = {
    score,
    positiveWord,
    negativeWord,
  };
  return resultObject;
};

const sentimentScoreObject = getSentimentScore("I am mega super awesome happy");

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/

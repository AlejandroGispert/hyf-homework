var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

const addFunction = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].usersAnswer = null;
  }

  return arr;
};

console.log(addFunction(questions));

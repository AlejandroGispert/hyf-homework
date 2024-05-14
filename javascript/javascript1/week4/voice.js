//Voice assistant
let catchedName = "";
const catchedToDo = [];
const eightBallAnswers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Most likely",
  "Outlook not so good",
  "Very doubtful",
];

const getReply = (command) => {
  const splittedArray = command.split(" ");

  let response = "";

  if (command.toLowerCase().includes("my name is")) {
    if (catchedName === "") {
      for (let i = 0; i < splittedArray.length; i++) {
        if (
          splittedArray[i] === "my" &&
          splittedArray[i + 1] === "name" &&
          splittedArray[i + 2] === "is"
        ) {
          catchedName = splittedArray[i + 3];
          response = `Lovely to meet you ${catchedName}`;
        }
      }
    } else if (catchedName != "") {
      response = "You already told me your name " + catchedName;
    }
  }
  //case 2
  else if (command.toLowerCase().includes("what is my name")) {
    if (catchedName == "") {
      response = "I don't know sweety";
    } else {
      response = `I believe your name is ${catchedName}`;
    }
  }
  //case 3
  else if (
    command.toLowerCase().includes("add") &&
    command.toLowerCase().includes("todo")
  ) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (splittedArray[i].toLowerCase() === "add") {
        if (!catchedToDo.includes(splittedArray[i + 1])) {
          catchedToDo.push(splittedArray[i + 1]);
          response += `Added ${splittedArray[i + 1]} to our TODO list\n`;
        } else {
          response = `That item is already in our TODO list`;
        }
      }
    }
  }

  //case 4 remove
  else if (
    command.toLowerCase().includes("remove") &&
    command.toLowerCase().includes("todo")
  ) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (splittedArray[i].toLowerCase() === "remove") {
        if (!catchedToDo.includes(splittedArray[i + 1])) {
          response = `Item ${splittedArray[i + 1]} is not in our TODO list`;
        } else {
          console.log(catchedToDo);
          let indexToRemove = catchedToDo.indexOf(splittedArray[i + 1]);
          catchedToDo.splice(indexToRemove, 1);
          response += `Removed ${splittedArray[i + 1]} from our TODO list\n`;
          console.log(catchedToDo);
        }
      }
    }
  }

  //case 5  Whats on my todo
  else if (
    (command.toLowerCase().includes("whats on") ||
      command.toLowerCase().includes("what's on")) &&
    (command.toLowerCase().includes("todo") ||
      command.toLowerCase().includes("todo?"))
  ) {
    response += `these are the items on the todo: \n`;
    catchedToDo.map((e) => (response += `${e}\n`));
  }

  //case 6 wht day is today
  else if (command.toLowerCase().includes("what day is today")) {
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    response += `Today is ${date.getDate()} of ${
      months[date.getMonth()]
    } ${date.getFullYear()}. Enjoy your day!`;
  }

  //case 6 math
  else if (command.toLowerCase().includes("what is")) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (
        splittedArray[i].toLowerCase() === "what" &&
        splittedArray[i + 1].toLowerCase() === "is"
      ) {
        switch (splittedArray[i + 3]) {
          case "+":
            response =
              Number(splittedArray[i + 2]) + Number(splittedArray[i + 4]);
            break;
          case "-":
            response =
              Number(splittedArray[i + 2]) - Number(splittedArray[i + 4]);
            break;
          case "*":
            response =
              Number(splittedArray[i + 2]) * Number(splittedArray[i + 4]);
            break;
          case "/":
            response =
              Number(splittedArray[i + 2]) / Number(splittedArray[i + 4]);
            break;
        }
      }
    }
  }
  //case6 set a timer
  else if (command.toLowerCase().includes("set a timer")) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (
        splittedArray[i].toLowerCase().includes("for") &&
        splittedArray[i].toLowerCase().includes("minutes")
      ) {
        response = `Timer set for ${splittedArray[i + 1]} minutes`;

        const milliseconds = Number(splittedArray[i + 1]) * 60 * 1000;
        const print = () => (response = "Timer done");
        setTimeout(print, milliseconds);
        //setInterval
      } else if (
        !splittedArray[i].toLowerCase().includes("for") &&
        !splittedArray[i].toLowerCase().includes("minutes")
      ) {
        response =
          "Please give some minutes value by saying: Set a timer for x minutes.";
      }
    }
  }

  //final method 8 ball
  else {
    response =
      eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)];
  }
  //final return
  return response;
};
//console.log(getReply("hello, my name is Bob"));

//console.log(getReply("what is my name"));

// console.log(
//   getReply("Add fishing to my todo and add shopping and add cooking")
// );

//console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
//console.log(getReply("Remove fishing from my todo"));
//console.log(getReply("What's on my todo?"));
console.log(getReply("what day is today"));

//console.log(getReply("what is 3 + 3"));
//console.log(getReply("what is 4 * 4"));
console.log(getReply("Set a timer "));
//console.log(getReply("what do you want of me"));

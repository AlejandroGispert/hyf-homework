import "./styles.scss";

// Or if installed from NPM to use with a bundler
import Artyom from "artyom.js";
// const artyom = require("artyom.js");
const artyom = new Artyom();

let capturedName = "";
const capturedToDo = [];
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
    if (capturedName === "") {
      for (let i = 0; i < splittedArray.length; i++) {
        if (
          splittedArray[i] === "my" &&
          splittedArray[i + 1] === "name" &&
          splittedArray[i + 2] === "is"
        ) {
          capturedName = splittedArray[i + 3];
          response = `Lovely to meet you ${capturedName}`;
        }
      }
    } else if (capturedName !== "") {
      response = "You already told me your name " + capturedName;
    }
  }
  //case 2
  else if (command.toLowerCase().includes("what is my name")) {
    if (capturedName === "") {
      response = "I don't know sweety";
    } else {
      response = `I believe your name is ${capturedName}`;
    }
  }
  //case 3
  else if (
    command.toLowerCase().includes("add") &&
    command.toLowerCase().includes("to-do")
  ) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (splittedArray[i].toLowerCase() === "add") {
        if (!capturedToDo.includes(splittedArray[i + 1])) {
          capturedToDo.push(splittedArray[i + 1]);
          response += `Added ${splittedArray[i + 1]} to our to-do list\n`;
        } else {
          response = `That item is already in our to-do list`;
        }
      }
    }
  }

  //case 4 remove
  else if (
    command.toLowerCase().includes("remove") &&
    command.toLowerCase().includes("to-do")
  ) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (splittedArray[i].toLowerCase() === "remove") {
        if (!capturedToDo.includes(splittedArray[i + 1])) {
          response = `Item ${splittedArray[i + 1]} is not in our to-do list`;
        } else {
          console.log(capturedToDo);
          let indexToRemove = capturedToDo.indexOf(splittedArray[i + 1]);
          capturedToDo.splice(indexToRemove, 1);
          response += `Removed ${splittedArray[i + 1]} from our to-do list\n`;
          console.log(capturedToDo);
        }
      }
    }
  }

  //case 5  Whats on my todo
  else if (
    (command.toLowerCase().includes("what is on") ||
      command.toLowerCase().includes("what's on")) &&
    (command.toLowerCase().includes("todo") ||
      command.toLowerCase().includes("to-do"))
  ) {
    response += `these are the items on our to-do list: \n`;
    capturedToDo.map((e) => (response += `${e}\n`));
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
          case "plus":
            response =
              Number(splittedArray[i + 2]) + Number(splittedArray[i + 4]);
            break;
          case "-":
            response =
              Number(splittedArray[i + 2]) - Number(splittedArray[i + 4]);
            break;
          case "minus":
            response =
              Number(splittedArray[i + 2]) - Number(splittedArray[i + 4]);
            break;
          case "*":
            response =
              Number(splittedArray[i + 2]) * Number(splittedArray[i + 4]);
            break;
          case "times":
            response =
              Number(splittedArray[i + 2]) * Number(splittedArray[i + 4]);
            break;
          case "/":
            response =
              Number(splittedArray[i + 2]) / Number(splittedArray[i + 4]);
            break;
          case "slash":
            response =
              Number(splittedArray[i + 2]) / Number(splittedArray[i + 4]);
            break;
        }
      }
    }
  }
  //case6 set a timer
  else if (
    command.toLowerCase().includes("set") ||
    command.toLowerCase().includes("timer")
  ) {
    for (let i = 0; i < splittedArray.length; i++) {
      if (splittedArray[i].toLowerCase().includes("for")) {
        if (
          splittedArray[i].toLowerCase().includes("1") ||
          splittedArray[i].toLowerCase().includes("one")
        ) {
          response = `Timer set for ${splittedArray[i + 1]} minut`;
        } else {
          response = `Timer set for ${splittedArray[i + 1]} minutes`;
        }
        const milliseconds = Number(splittedArray[i + 1]) * 60 * 1000;
        const print = () => (response = "Timer done");
        setTimeout(print, milliseconds);
      }
    }
  }

  //final method 8 ball
  else {
    response =
      eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)];
  }
  //final return
  return response.toString();
};

function isgetReplyAvailable() {
  return typeof getReply !== "undefined" && typeof getReply === "function";
}

if (isgetReplyAvailable()) {
  let command;
  let timeoutId;
  let setIntervalTimer;

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.innerHTML = "Talk now 🙂";
    setIntervalTimer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 2;
      if (randomNumber % 2 === 0) {
        button.innerHTML = "Talk now 😮";
      } else {
        button.innerHTML = "Talk now 🙂";
      }
    }, 100);
    clearTimeout(timeoutId);

    command = "";
    timeoutId = setTimeout(() => {
      clearInterval(setIntervalTimer);
      try {
        const response = getReply(command);
        console.log(response);
        artyom.say(response);

        button.innerHTML = "Give a new command";
      } catch (error) {
        console.error("An error occurred:", error);
        // Optionally handle the error, e.g., display a message to the user
        button.innerHTML = "An error occurred. Please try again.";
      }
    }, 5000);
  });

  var UserDictation = artyom.newDictation({
    continuous: false, // Enable continuous if HTTPS connection
    onResult: function (text) {
      // Do something with the text
      if (text.length > command.length) {
        command = text;
        console.log(command);
      }
    },
    onStart: function () {
      console.log("Dictations started by the users");
    },
    onEnd: function () {
      console.log("Dictation stopped by the user");
    },
  });

  UserDictation.start();
} else {
  alert("no getReply function detected");
}

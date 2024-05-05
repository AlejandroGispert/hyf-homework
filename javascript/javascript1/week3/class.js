const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};

const user3 = {
  name: "Alejandro",
  age: 37,
  role: "Musician",
  classes: ["Music", "Coding"],
  hobbies: {
    favourite: "Eating Sushi",
    sports: "Dancing",
  },
};

// SOLUTION1
let result = [];

let obj = {};
const users = [user, user2, user3];

function renderObject(val) {
  return JSON.stringify(val);
}
let output = "";
const keysToLog = ["name", "age", "hobbies"];
for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < keysToLog.length; j++) {
    //  if (typeof users[i][keysToLog[j]] === "object") {
    output += renderObject(users[i][keysToLog[j]]) + " ";
    // }
  }
  output += "\n";
}
console.log(output);

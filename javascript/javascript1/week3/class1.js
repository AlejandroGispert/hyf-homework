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

let result = [];

let obj = {};
const users = [user, user2, user3];
const keysToLog = ["name", "age", "role"];

for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < keysToLog.length; j++) {
    result.push(`the user ${keysToLog[j]} is: ${users[i][keysToLog[j]]}`);

    // obj.user = `the user ${keysToLog[j]} is: ${users[i][keysToLog[j]]}`;
    obj[`user${i}`] = users[i];
    //obj = { ...users[i] };
  }
}
console.log(result);
// create an object wioth those properties
console.log(obj);

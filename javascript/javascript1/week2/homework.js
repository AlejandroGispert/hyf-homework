// Flight booking fullname function
const getFullname = (firstname, surname, useFormalName) => {
  if (useFormalName) {
    return "Lord " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
};

getFullname("Benjamin", "Hughes"); // returns "Benjamin Hughes"

const fullname1 = getFullname("Pepe", "Cuba", false);
const fullname2 = getFullname("Loco", "Rodriguez", true);

console.log("fullname1: " + fullname1 + " fullname2: " + fullname2);

// Event application

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();

const getEventWeekday = (num) => {
  if (num > 8) {
    let restingWeeks = num - 7;
    //console.log("restingWeeks " + restingWeeks);
    return getEventWeekday(restingWeeks);
  } else if (num <= 7 && num > 0) {
    let day = weekday[date.getDay() + num];
    // console.log("passed " + day);
    return day;
  } else if (num === 0) {
    let day = weekday[date.getDay()];
    console.log("today is: " + day);
    return day;
  } else {
    console.log("failed");
  }
};

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"

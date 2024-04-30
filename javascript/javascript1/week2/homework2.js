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

// MY OLD LOGIC THAT WORKS PERFECTLY
// const getEventWeekday = (num) => {
//   if (num > 8) {
//     let restingWeeks = num - 7;
//     //console.log("restingWeeks " + restingWeeks);
//     return getEventWeekday(restingWeeks);
//   } else if (num <= 7 && num > 0) {
//     let day = weekday[date.getDay() + num];
//     // console.log("passed " + day);
//     return day;
//   } else if (num === 0) {
//     let day = weekday[date.getDay()];
//     console.log("today is: " + day);
//     return day;
//   } else {
//     console.log("failed");
//   }
// };

// NEW LOGIC THAT ALSO WORKS PERFECTLY, but its more appropiate

const getEventWeekday = (num) => {
  const currentDay = date.getDay();
  const futureDay = (currentDay + num) % 7;
  return weekday[futureDay];
};

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"

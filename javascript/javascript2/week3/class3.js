// // const array = [1, 2, 3, 4];

// // const output = array.reduce((accumulator, currrentValue, index) => {
// //   const curr = currrentValue * 3; //whatever you need
// //   accumulator[index] = curr; //modify the accumulator
// //   return accumulator; //return the accumulator
// // }, []);

// // const output2 = array.map((el) => el * 3);

// // console.log(output);
// // const initialValue = 0;
// // const sumWithInitial = array.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue
// // ); //10

// // console.log(sumWithInitial);

// // const sumWithout = array.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue
// // ); //10
// // console.log(sumWithout);

// // ("abds");

// // const sumWithInitial1 = array.reduce((accumulator, currentValue) => {
// //   console.log(accumulator);
// //   return accumulator + currentValue * 3;
// // }, []);
// // console.log(sumWithInitial1);

// // const output1 = array.reduce((accumulator, currrentValue) => {
// //   const curr = currrentValue * 3; //whatever you need
// //   return [...accumulator, curr];
// // }, []);

// // console.log(output1);

// // const array2 = [...array];
// // array2.push(5); //void, undefined
// // console.log(array2);
// // array2[array2.length] = 6;
// // console.log([...array2, 7]);
// // console.log(array2);
// // const obj = {
// //   a: "something",
// //   b: "something else",
// // };

// // const obj2 = { ...obj };

// // obj2.c = "bla";

// // console.log(obj, obj2);

// // console.log([...array, ...array2]);
// // console.log({ ...array });

// function nameOfFunction() {
//   //function
// }

// const variable = () => {
//   //function
// };
// nameOfFunction();
// variable();

// (function () {
//   //function
// }); //anonymous function

// const array = [1, 2, 3, 4];

// array.forEach(function (el) {
//   console.log(el);
// });

// const dog = {
//   ears: 2,
//   bark: () => alert("woof"),
// };
// //dog.bark();

// (function () {
//   //function
//   console.log("hello from the other side");
// })(); //anonymous function

// const button = document.querySelector("button");

// button.addEventListener("click", () => console.log("red"));

// button.addEventListener("click", function () {
//   console.log("blue");
// });

// button.addEventListener("click", () => nameColor("pink"));

// function nameColor(color) {
//   console.log(color);
// }

// console.log("First log");

// setTimeout(function () {
//   console.log("In timeout");
// }, 5000); //ms

// console.log("Second log");

/// --excercises ---

// window.addEventListener("mousemove", mouseMove);

// const arrayX = [];
// const arrayY = [];

// function mouseMove(event) {
//   const x = event.clientX;
//   const y = event.clientY;
//   arrayX.push(x);
//   arrayY.push(y);
// }

// const calculateAverage = (array) => {
//   const sum = array.reduce((acc, el) => acc + el, 0);
//   return sum / array.length;
// };

// setTimeout(logOutAverage, 1000);

// function logOutAverage() {
//   const averageX = calculateAverage(arrayX);
//   const averageY = calculateAverage(arrayY);
//   console.log(averageX, averageY);
//   window.removeEventListener("mousemove", mouseMove);
//   console.log(arrayX.length);
// }
// setTimeout(function () {
//   console.log(arrayX.length);
// }, 2000);

let count = 0;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// button1.addEventListener("click", logAndIncrement);
// button2.addEventListener("click", logAndIncrement);

// function logAndIncrement() {
//   console.log(count);
//   count++;
// }

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => button.addEventListener("click", logAndIncrement));

function delay() {
  setTimeout(() => console.log("some text"), 3000);
}

button1.addEventListener("click", delay);
///
const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: "...E tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: "...and justice for all.",
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: "10", year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: "10 Cloverfield Lane",
    year: 2016,
    rating: 7.2,
    votes: 216151,
    running_times: 6240,
  },
  {
    title: "10 Items or Less",
    year: 2006,
    rating: 6.7,
    votes: 13342,
    running_times: 4920,
  },
  {
    title: "10 Things I Hate About You",
    year: 1999,
    rating: 7.2,
    votes: 247070,
    running_times: 5820,
  },
  {
    title: "10 Years",
    year: 2011,
    rating: 6.1,
    votes: 20790,
    running_times: 6000,
  },
  {
    title: "10,000 BC",
    year: 2008,
    rating: 5.1,
    votes: 114750,
    running_times: 6540,
  },
  {
    title: "100 Feet",
    year: 2008,
    rating: 5.5,
    votes: 10979,
    running_times: 6240,
  },
  {
    title: "100 Girls",
    year: 2000,
    rating: 5.9,
    votes: 19232,
    running_times: 5640,
  },
  {
    title: "101 Dalmatians",
    year: 1996,
    rating: 5.7,
    votes: 83245,
    running_times: 6180,
  },
  {
    title: "102 Dalmatians",
    year: 2000,
    rating: 4.9,
    votes: 28927,
    running_times: 6000,
  },
  {
    title: "11-11-11",
    year: 2011,
    rating: 4,
    votes: 11425,
    running_times: 5400,
  },
  {
    title: "11:14",
    year: 2003,
    rating: 7.2,
    votes: 40149,
    running_times: 5700,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    rating: 8.9,
    votes: 518449,
    running_times: 5760,
  },
  {
    title: "12 Rounds",
    year: 2009,
    rating: 5.6,
    votes: 24457,
    running_times: 6480,
  },
  {
    title: "12 Years a Slave",
    year: 2013,
    rating: 8.1,
    votes: 513047,
    running_times: 8040,
  },
  {
    title: "127 Hours",
    year: 2010,
    rating: 7.6,
    votes: 302809,
    running_times: 5640,
  },
  { title: "13", year: 2010, rating: 6.1, votes: 36623, running_times: 5460 },
  {
    title: "13 Going on 30",
    year: 2004,
    rating: 6.1,
    votes: 134434,
    running_times: 5880,
  },
  {
    title: "13 Hours",
    year: 2016,
    rating: 7.3,
    votes: 85771,
    running_times: 8640,
  },
];
const intialValue = {
  old: [],
  mid: [],
  new: [],
};
const moviesGrouped = movies.reduce((previousIteration, currentValue) => {
  if (currentValue.year < 2000)
    return {
      ...previousIteration,
      old: [...previousIteration.old, currentValue],
    };
  if (currentValue.year >= 2000 && currentValue.year < 2010)
    return {
      ...previousIteration,
      mid: [...previousIteration.mid, currentValue],
    };
  return {
    ...previousIteration,
    new: [...previousIteration.new, currentValue],
  };
}, intialValue);

console.log(moviesGrouped);

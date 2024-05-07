// Series duration of my life

// const seriesDurations = [
//   {
//     title: "Game of thrones",
//     days: 3,
//     hours: 1,
//     minutes: 0,
//   },
//   {
//     title: "Sopranos",
//     days: 3,
//     hours: 14,
//     minutes: 0,
//   },
//   {
//     title: "The Wire",
//     days: 2,
//     hours: 12,
//     minutes: 0,
//   },
// ];
// How much time of my life have i been watching series on tv? Lets find out!
// Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years.

// Firstly change the seriesDurations array found above to include your favorite series. Find the duration of a series here: http://tiii.me/

// Create a function that logs out the following text using the seriesDurations array:

// Game of thrones took 0.01% of my life
// Sopranos took 0.012% of my life
// The Wire took 0.007% of my life

// In total that is 0.2% of my life
// Here is an example:

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Avatar: The Last Airbender - with actors",
    days: 0,
    hours: 7,
    minutes: 12,
  },
  {
    title: "Avatar: The Last Airbender - Cartoon",
    days: 1,
    hours: 1,
    minutes: 25,
  },
  {
    title: "The Last of Us",
    days: 0,
    hours: 8,
    minutes: 51,
  },
  {
    title: "My Demon",
    days: 0,
    hours: 17,
    minutes: 20,
  },
  {
    title: "Heroes",
    days: 2,
    hours: 7,
    minutes: 54,
  },
  {
    title: "Lost",
    days: 3,
    hours: 16,
    minutes: 30,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  //refactored
  const averageLifeInYears = 80;

  //to calculate average days in a year, including leap years
  const yearAverageDays = (3 * 365 + 366) / 4;
  const eightyYearsInHours = averageLifeInYears * yearAverageDays * 24;
  const eightyYearsInMinutes = eightyYearsInHours * 60;

  let countOfTimePercent = 0;
  let result = [];
  let total = 0;

  //value to pass in all toFixed
  const toFixedValue = 3;

  for (let i = 0; i < seriesDurations.length; i++) {
    // Destructuring here
    const { title, days, hours, minutes } = seriesDurations[i];

    let totalHours = days * 24 + hours + minutes / 60;

    let percent = (totalHours / eightyYearsInHours) * 100;

    countOfTimePercent += totalHours;

    total += (countOfTimePercent / eightyYearsInHours) * 100;

    result.push(`${title} took ${percent.toFixed(toFixedValue)}% of my life`);
  }

  return (
    result.join("\n") +
    `\nIn total that is ${total.toFixed(toFixedValue)}% of my life`
  );
}

console.log(logOutSeriesText());

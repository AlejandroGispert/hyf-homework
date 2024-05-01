// Create a function to convert celcius to fahrenheight

const celsius = 60;
const fahrenheit = 150;

const tempConverter = (x) => {
  if (x < 90) {
    return console.log("This is the Farenheit: " + (x * 1.8 + 32));
  } else if (x >= 90) {
    return console.log("This is the Celsius: " + (x - 32) / 1.8);
  }
};
tempConverter(celsius);
tempConverter(fahrenheit);

// __________________

// area of the circle by its radius

const calculateCircleArea = (radius) => {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(area);
  return area;
};
calculateCircleArea(20);

// ------------------------ ex1

let count = 0;

clickMe1.addEventListener("click", () => {
  if (count === 0) {
    console.log(0);
    count++;
  } else {
    return console.log(count++);
  }
});

clickMe2.addEventListener("click", () => {
  if (count === 0) {
    console.log(0);
    count++;
  } else {
    return console.log(count++);
  }
});
//-------- ex2--------------------------------

clickMe3.addEventListener("click", () => {
  setInterval(() => {
    return console.log("This text was delayed by 3 seconds");
  }, 3000);
});
//--------  ex 3

// Page onload
// First create a callback function as a variable that logs this out:
// "DOM fully loaded and parsed" This callback function should be called when the DOM is fully loaded. To find what this function is called go to google! What should we search for???
document.addEventListener("DOMContentLoaded", () =>
  console.log("DOM fully loaded and parsed")
);

//-------------------------------- ex 4
window.addEventListener("mousedown", mouseMove);
const arrayX = [];
const arrayY = [];

function mouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;
  arrayX.push(x);
  arrayY.push(y);
}

const calcultateAverage = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
  return sum / array.length;
};

setTimeout(() => {
  const averageX = calcultateAverage(arrayX);
  const averageY = calcultateAverage(arrayY);
  console.log("averageX: " + averageX + " averageY " + averageY);
  window.removeEventListener("mousemove", mouseMove);
}, 1000);
setTimeout(() => console.log(arrayX.length), 1000);

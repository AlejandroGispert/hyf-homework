// let myObject = `{
//   name: "Alejandro",
//   age: 37,
//   height: "137",
// }`;
// const string = JSON.stringify(myObject);

// console.log(string);

// const parsed = JSON.parse(string);

// console.log(parsed);
//----------

document.addEventListener("DOMContentLoaded", fetcher);

function fetcher() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => updateDOM(data));
}
let numberToIncrease = 5;
function updateDOM(data) {
  const ul = document.querySelector("ul");
  data.forEach((user, index) => {
    if (index === numberToIncrease) {
      const li = document.createElement("li");
      li.textContent = user.name;
      ul.appendChild(li);
      console.log(user.name);
    }
  });
  const btn = document.getElementById("btn");
  btn.addEventListener("click", clicked);

  function clicked() {
    numberToIncrease++;
    updateDOM(data);
    console.log(numberToIncrease);
    //window.location.reload();
  }
}

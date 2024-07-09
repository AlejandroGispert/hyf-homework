document.addEventListener("DOMContentLoaded", fetcher);

let globalBreed;

let globalData;

function breedFetcher() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => updateDOM1(data));
}
breedFetcher();
async function fetcher(breed) {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => console.log(data));
  // updateDOM1(data)
}

let numberToIncrease = 10;

let random = Math.floor(Math.random() * 100);

async function updateDOM1(data) {
  //console.log("data", data.message);

  const nav = document.getElementById("nav");

  const text = document.createElement("h3");

  let breed = Object.keys(data.message)[random].toString();
  text.textContent = breed;
  globalBreed = breed;
  nav.appendChild(text);

  //console.log("breed", breed);
  await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => {
      // console.log("response", response.json());
      return response.json();
    })
    .then((data) => updateDOM3(data));
}

async function updateDOM3(data) {
  //console.log("data", data.message);
  const nav = document.getElementById("nav");
  const image = document.createElement("img");

  image.src = data.message;

  nav.appendChild(image);
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    console.log("Delayed for 2 second.");
    window.location.reload();
  }, "2000");
});

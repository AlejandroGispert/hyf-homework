document.addEventListener("DOMContentLoaded", fetcher);

function fetcher() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      return response.json();
    })
    .then((data) => updateDOM(data));
}
let numberToIncrease = 10;
function updateDOM(data) {
  const ul = document.querySelector("ul");
  data.forEach((user, index) => {
    if (index < 10) {
      const li1 = document.createElement("li");

      li1.innerHTML = `<hr/><h2 style="display:flex;float:left;margin:20px;padding: 10px;width: 50%;list-style-type:none">${user.title}</h2>
      <a href="${user.url}" target=”_blank” ><img src="${user.thumbnailUrl}" style="display:inline-flex;padding: 1px;text-align:center;list-style:none"/></a><hr/>`;
      ul.appendChild(li1);

      console.log(user.title);
    }
  });
  const btn = document.getElementById("btn");
  btn.addEventListener("click", clicked);

  function clicked() {
    // numberToIncrease + 1;
    updateDOM(data);
    console.log(numberToIncrease);
    //window.location.reload();
  }
}

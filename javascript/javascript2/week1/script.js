//Two ways to solve this problem
// #1
const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

// let all = "";
// for (const podcast of podcasts) {
//   if (podcast.imageUrl) {
//     all += `<ul><li>
// <h1>${podcast.name}</h1>
// <img src="${podcast.imageUrl}">
// </li></ul>`;
//   } else {
//     all += `<ul><li>
// <h1>${podcast.name}</h1>

// </li></ul>`;
//   }
// }
// document.body.innerHTML = all;

//_----------------------------------------------------------------
// #2
const ul = document.createElement("ul");

for (const podcast of podcasts) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  h1.innerHTML = podcast.name;

  li.appendChild(h1);

  if (podcast.imageUrl) {
    const img = document.createElement("img");

    img.src = podcast.imageUrl;
    li.appendChild(img);
  }
  ul.appendChild(li);
  document.body.appendChild(ul);
}

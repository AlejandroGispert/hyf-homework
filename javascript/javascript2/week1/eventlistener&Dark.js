// Simple eventlistener
// When clicking a button, change the text on the button to say "Button clicked"
// Light mode dark mode

button = document.querySelector("button");
button.addEventListener("click", () => {
  button.innerHTML = "Button clicked";
  console.log("butiton clicked");
  document.body.style.backgroundColor = "black";
  button.style.color = "white";
});

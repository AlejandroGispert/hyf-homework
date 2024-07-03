const questionsContainer = document.getElementById("questionContainer");
const startQuizBtn = document.getElementById("startQuiz");

const quizContainer = document.getElementById("quizContainer");

// const questionCss = document.querySelector(".question");
const results = [];
async function fetchAllQuestions() {
  startQuizBtn.style.visibility = "hidden";
  questionsContainer.style.visibility = "visible";
  quizContainer.style.visibility = "visible";
  quizContainer.classList.remove("hidden");
  questionsContainer.style.backgroundColor = "green";
  try {
    const data = await fetch(
      "https://run.mocky.io/v3/0a3616a2-4181-4a06-856f-c42c0e3aa74b"
    );
    const questions = await data.json();

    function randomIndexFunc(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    // Shuffle the array

    // Print the shuffled array
    // console.log(shuffledItems);

    questions.results.forEach((data) => {
      //console.log(data.correct_answer);
      const answersArray = [
        data.correct_answer,
        data.incorrect_answers[0],
        data.incorrect_answers[1],
        data.incorrect_answers[2],
      ];
      let randomIndex = randomIndexFunc(answersArray);

      questionsContainer.innerHTML += `<div style="padding:20px"><h3  class="question" >${data.question}</h3><input type="radio" value="${randomIndex[0]}" class="options"><label class="label">${randomIndex[0]}</label></input><input type="radio" class="options" value="${randomIndex[1]}"><label class="label">${randomIndex[1]}</label></input><input type="radio" class="options" value="${randomIndex[2]}"><label class="label">${randomIndex[2]}</label></input><input type="radio" class="options" value="${randomIndex[3]}"><label class="label">${randomIndex[3]}</label></input><h3  class="question" >${data.question}</h3></div>`;
      //console.log(data.question);
    });
  } catch (error) {
    console.log(error.message);
  }
}
const submitQuiz = document.getElementById("submitQuiz");
submitQuiz.classList.remove("hidden");

submitQuiz.addEventListener("click", () => {
  const radios = document.querySelectorAll(".options");
  for (let radio of radios) {
    if (radio.checked) {
      console.log("Active radio button: " + radio.value);
      results.push(radio.value);
      break;
    }
  }
});
console.log(results);
startQuizBtn.addEventListener("click", fetchAllQuestions);

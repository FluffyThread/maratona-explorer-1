// variables

// input data
// user questions

// output data

const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

const answerElement = document.querySelector("#resposta");

function makeQuestion() {
  if (inputQuestion.value === "") {
    alert("Digite sua pergunta");
    return;
  }

  makeQuestionButton.setAttribute("disabled", true);

  const userQuestion = "<div>" + inputQuestion.value + "</div>";

  //get ramdom number
  const answersLength = answers.length;

  randomIndex = Math.floor(Math.random() * answersLength);

  console.log(answers[randomIndex]);
  answerElement.innerHTML = userQuestion + answers[randomIndex];

  answerElement.style.opacity = 1;

  // make the answer go away after 3 seconds
  setTimeout(function () {
    answerElement.style.opacity = 0;
    makeQuestionButton.removeAttribute("disabled");
  }, 3000);
}

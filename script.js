// array where questions are stored
const questions = [
  { question: "What is CSS an acronym for?",
    answer: "Cascading style sheet"
  },
  { question: "What is HTML an acronym for?",
    answer: "Hypertext Markup Language"
  },
  { question: "What kind of loop would you use in Javascript to interate through an array?",
    answer: "for loop"
  },
  { question: "What are 'if' and 'else'statements called in Javascript?",
    answer: "Conditional statements"
  },
  { question: "What is Jquery?",
    answer: "Javascript library designed to simplify the client side of HTML."
  }
];

//define variables
letCurrentQuestionIndex = 0;
let score = 0;
let timer = 60;
let timerInterval;

const startButton = document.getElementById("start-button");
const timerElement = document.getElementById("timer");
const questionContainer = document.getElementById("question-container");


startButton.addEventListener("click", startQuiz());

//function to start quiz
function startQuiz() {
   displayQuestion();
   timerInterval = setInterval(updateTimer, 1000);
}

//display questions
function displayQuestion(){
    if(currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;

    } else {
        endQuiz();
    }
}

//checks answers and subtracts 10 seconds on incorrecr answers
function checkAnswers(slectedOption){
    const question = question[currentQuestionIndex];

    if(slectedOption == question.correct){
        score++
    }else{
        timer -= 10;
        if(timer < 0){
            timer = 0;
        }
    }
    currentQuestionIndex++
    displayQuestion();
}

function updateTimer(){
    timerElement.textContent = timer;
    if(timer <= 0){
        clearInterval(timerInterval);
        endQuiz();
    }
}

// ends quiz and displays user score
function endQuiz(){
    questionContainer.innerHTML = `
      <h2>Quiz Over</h2>
      <p>Your Score: ${score}</p>
    `;
}




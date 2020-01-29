const start = document.getElementById("start")
const questionContainer = document.getElementById("question-container")
// const next = document.getElementById("next-btn")
const questionElement = document.getElementById("question")
const answersButtonsElement = document.getElementById("answer-btns")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")
const score = document.getElementById("score")

let questions = [
  {
    question: 'This is the first question array',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the second question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the third question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the fourth question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the fifth question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the sixth question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the seventh question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the eigth question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the ninth question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  },
  {
    question: 'This is the tenth question',
    ansA: '1st answer',
    ansB: '2nd answer',
    ansC: '3rd answer',
    ansD: '4th answer',
    correct: "A"
  }
]

let lastQuestionIndex = questions.length -1 
let currentQuestionsIndex = 0
let totalScore = 0

function renderQuestion (){
  let i = questions[currentQuestionsIndex]
  questionElement.innerHTML = "<h3>" + i.question + "</h3>"
  choiceA.innerHTML = i.ansA
  choiceB.innerHTML = i.ansB
  choiceC.innerHTML = i.ansC
  choiceD.innerHTML = i.ansD
}

start.addEventListener("click", startQuiz)
 
function startQuiz() {
  $("#intro-container").hide()
  renderQuestion()
  $("#question-container").show()
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestionsIndex].correct) {
    totalScore++
  } 
  if(currentQuestionsIndex < lastQuestionIndex){
    currentQuestionsIndex++
    renderQuestion()
  }else{
    $("#question-container").hide()
    $("#score-container").show()
    renderScore()
  }
}

function renderScore (){
  let percent = (totalScore / questions.length) * 100
  score.innerHTML = "<h3>Your Score is: " + percent + "%</h3>"
}




  





  
// next.addEventListener("click", function(){
//   currentQuestionsIndex ++
//   nextQuestion()
// })
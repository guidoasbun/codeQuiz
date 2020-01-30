const start = document.getElementById("start")
const questionContainer = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answersButtonsElement = document.getElementById("answer-btns")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")
const score = document.getElementById("score")
const timerElement = document.getElementById("timer-element")
const result = document.getElementById("result")
const restart = document.getElementById("restartBtn")

let questions = [
  {
    question: 'What does HTML stand for?',
    ansA: 'Hyper Text Markup Language',
    ansB: 'Hello There My Lad',
    ansC: 'High Table Makes Loud',
    ansD: 'Hydro Turbine Marine Layer',
    correct: "A"
  },
  {
    question: 'What does CSS Stand for?',
    ansA: 'Computer Savy Surfer',
    ansB: 'Course Sent Silicon',
    ansC: 'Cascading Style Sheet',
    ansD: 'Cascadin Silicone Sheet',
    correct: "C"
  },
  {
    question: 'In HTML, the &#60 title &#62 element is located inside',
    ansA: '&#60 head &#62 element',
    ansB: '&#60 body &#62 element',
    ansC: '&#60 link &#62 element',
    ansD: 'Is not an element of HTML',
    correct: "B"
  },
  {
    question: 'In HTML, Where can we use the &#60 style> tag?',
    ansA: 'Just in &#60 head &#62 element',
    ansB: 'Just in &#60 body &#62 element',
    ansC: 'In &#60 head &#62 and in &#60 body &#62 elements',
    ansD: '&#60 tyle &#62 is not an HTML element',
    correct: "A"
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    ansA: '&#60 js &#62',
    ansB: '&#60 javascript &#62',
    ansC: '&#60 script &#62',
    ansD: '&#60 scripting &#62',
    correct: "C"
  },
  {
    question: 'Where is the correct place to insert JavaScript?',
    ansA: 'The &#60 head &#62 section',
    ansB: 'Both the &#60 head &#62 and the &#60 body &#62 section',
    ansC: 'The &#60 body &#62 section',
    ansD: 'You do not isert JavaScript',
    correct: "B"
  },
  {
    question: 'How do you call a function named "myFunction"?',
    ansA: 'myFunction()',
    ansB: 'call function myFunction()',
    ansC: 'call myFunction()',
    ansD: 'run.myFunction',
    correct: "A"
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    ansA: 'if(i&#60  &#62 5)',
    ansB: 'if i=! then',
    ansC: 'if i &#60  &#62 5',
    ansD: 'if(i !=5)',
    correct: "D"
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    ansA: 'In the &#60 body &#62 section',
    ansB: 'In the &#60 head &#62 section',
    ansC: 'At the end of the document',
    ansD: 'Outside the &#60 html &#62',
    correct: "B"
  },
  {
    question: 'Which HTML attribute is used to define inline styles?',
    ansA: 'styles',
    ansB: 'font',
    ansC: 'class',
    ansD: 'style',
    correct: "D"
  }
]

let lastQuestionIndex = questions.length -1 
let currentQuestionsIndex = 0
let totalScore = 0
let quizTime = 60 + 1
let quizTimer = setInterval(renderTimer, 1000)

function renderQuestion (){
  let i = questions[currentQuestionsIndex]
  questionElement.innerHTML = "<h3>" + i.question + "</h3>"
  choiceA.innerHTML = i.ansA
  choiceB.innerHTML = i.ansB
  choiceC.innerHTML = i.ansC
  choiceD.innerHTML = i.ansD
}

start.addEventListener("click", startQuiz)
restart.addEventListener("click", restartQuiz)

function reset(){
  quizTime = 60 + 1
  totalScore = 0
  currentQuestionsIndex = 0
  lastQuestionIndex = questions.length - 1 
  let quizTimer = setInterval(renderTimer, 1000)
  $("#score-container").hide()
}

function restartQuiz(){
  
  startQuiz()
  reset()
}

function startQuiz() {
  $("#intro-container").hide()
  $("#question-container").show()
  $("#score-container").hide()
  renderQuestion()
  renderTimer()
  
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestionsIndex].correct) {
    totalScore++
    correctAnswer()
  }else {
    wrongAnswer()
  }
  if(currentQuestionsIndex < lastQuestionIndex){
    currentQuestionsIndex++
    renderQuestion()
  }else{
    $("#intro-container").hide()
    $("#question-container").hide()
    $("#score-container").show()
    renderScore()
  }
}

function correctAnswer(){
  result.innerHTML = "Correct!!"
}

function wrongAnswer() {
  result.innerHTML = "Incorect, you lost 5 seconds"
  quizTime = quizTime - 5
}

function renderScore (){
  let percent = (totalScore / questions.length) * 100
  score.innerHTML = "<h3>Your Score is: " + percent + "%</h3>"
}

function renderTimer(){
  quizTime --
  timerElement.innerHTML = 'Time remaining: '+ quizTime
  if (quizTime === 0){
    $("#intro-container").hide()
    $("#question-container").hide()
    $("#score-container").show()
    renderScore()
  }
  
}






  





  
// next.addEventListener("click", function(){
//   currentQuestionsIndex ++
//   nextQuestion()
// })
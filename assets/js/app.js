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
    question: "In HTML, the <title> element is located inside",
    ansA: '<head> element',
    ansB: '<body> element',
    ansC: '<link> element',
    ansD: 'Is not an element of HTML',
    correct: "B"
  },
  {
    question: 'In HTML, Where can we use the <style> tag?',
    ansA: 'Just in <head> element',
    ansB: 'Just in <body> element',
    ansC: 'In <head> and in <body> elements',
    ansD: '<style> is not an HTML element',
    correct: "A"
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    ansA: '<js>',
    ansB: '<javascript>',
    ansC: '<script>',
    ansD: '<scripting>',
    correct: "C"
  },
  {
    question: 'Where is the correct place to insert JavaScript?',
    ansA: 'The <head> section',
    ansB: 'Both the <head> and the <body> section',
    ansC: 'The <body> section',
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
    ansA: 'if(i<>5)',
    ansB: 'if i=! then',
    ansC: 'if i <> 5',
    ansD: 'if(i !=5)',
    correct: "D"
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    ansA: 'In the <body> section',
    ansB: 'In the <head> section',
    ansC: 'At the end of the document',
    ansD: 'Outside the <html>',
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
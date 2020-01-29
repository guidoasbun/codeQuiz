const start = document.getElementById("start")
const questionContainer = document.getElementById("question-container")
const next = document.getElementById("next-btn")
const questionElement = document.getElementById("question")
const answersButtonsElement = document.getElementById("answer-btns")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

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


let currentQuestionsIndex = 0

let score = 0

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
  $("#intro-container").hide();
  renderQuestion()
  $("#question-container").show();
  nextQuestion()
}

next.addEventListener("click", function(){
  currentQuestionsIndex ++
  nextQuestion()
})

function nextQuestion(){
  
}




  

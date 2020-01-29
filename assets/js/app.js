let questions = [
  {
    question: 'This is the first question',
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

const start = document.getElementById("start")
const questionContainer = document.getElementById("question-container")
const nextButton = document.getElementById("next-btn")
const questionElement = document.getElementById("question")
const answersButtonsElement = document.getElementById("answer-btns")


start.addEventListener("click", function(){
  $("#intro-container").hide();
  $("#question-container").show();
})
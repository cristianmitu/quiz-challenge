let timerEl = document.querySelector("#time");
quizTimer = 100;
let quizInterval = setInterval(function(){
timerEl.textContent = quizTimer;
},1000);
let questions = [
    {question: "1" ,answers :["ex1-1" , "ex1-2" , "ex1-3"], corectAnswer : 1},
    {question: "2" ,answers :["ex2-1" , "ex2-2" , "ex2-3"], corectAnswer : 2},
    {question: "3" ,answers :["ex3-1" , "ex3-2" , "ex3-3"], corectAnswer : 3},
    {question: "4" ,answers :["ex4-1" , "ex-42" , "ex4-3"], corectAnswer : 4},
    {question: "5" ,answers :["ex5-1" , "ex5-2" , "ex6-3"], corectAnswer : 5},
    {question: "6" ,answers :["ex7-1" , "ex7-2" , "ex7-3"], corectAnswer : 6},
    {question: "7" ,answers :["ex8-1" , "ex8-2" , "ex8-3"], corectAnswer : 7},

];

let startQuiz =  document.querySelector("#start");
let choicesEl = document.querySelector("#choices");
let startScreen = document.querySelector("#start-screen");
let currentQuestion;
let answers ;
let corectAnswer;
// 
for (let i = 0; i < questions.length; i++) {
    currentQuestion = questions[i].question[0];
    corectAnswer = questions[i].corectAnswer[0] 
    console.log(currentQuestion);
    console.log(corectAnswer);
    for (let j = 0; j < questions[i].answers.length; j++) {
        answers = questions[i].answers[j];
        console.log(answers);
    }
  
};

//start quiz

startQuiz.addEventListener("click",function(event){
    startScreen.setAttribute("class" , "hide");
     
      
});
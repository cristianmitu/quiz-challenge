let timerEl = document.querySelector("#time");
let quizInterval;
let quizTimer = 100;
let questions = [
    {question: "1" ,answers :["ex1-1" , "ex1-2" , "ex1-3"], corectAnswer : "1"},
    {question: "2" ,answers :["ex2-1" , "ex2-2" , "ex2-3"], corectAnswer : "2"},
    {question: "3" ,answers :["ex3-1" , "ex3-2" , "ex3-3"], corectAnswer : "3"},
    {question: "4" ,answers :["ex4-1" , "ex4-2" , "ex4-3"], corectAnswer : "4"},
    {question: "5" ,answers :["ex5-1" , "ex5-2" , "ex5-3"], corectAnswer : "5"},
    {question: "6" ,answers :["ex6-1" , "ex6-2" , "ex6-3"], corectAnswer : "6"},
    {question: "7" ,answers :["ex7-1" , "ex7-2" , "ex7-3"], corectAnswer : "7"},

];

let startQuizEl =  document.querySelector("#start");
let startScreenEl = document.querySelector("#start-screen");
let questionsEl = document.querySelector("#questions");
let questionsTitleEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let currentQuestion;
let answers;
let corectAnswer;
let score;

//start quiz

startQuizEl.addEventListener("click",function(event){
    startScreenEl.setAttribute("class" , "hide");
    questionsEl.setAttribute("class","start");
    quizInterval = setInterval(function(){    
        quizTimer--;    
        timerEl.textContent = quizTimer;
        },1000);              
});

for (let i = 0; i < questions.length; i++) {    
    currentQuestion = questions[i].question;    
    corectAnswer = questions[i].corectAnswer[0];
    // questionsTitleEl.textContent = currentQuestion;
    //questionsEl.setAttribute("class",""); 
    console.log("current question",currentQuestion);
    console.log("corect answer : ",corectAnswer);
    for (let j = 0; j < questions[i].answers.length; j++) {
        answers = questions[i].answers[j];
        console.log("answers : ",answers);
    }
    console.log(questionsTitleEl.textContent = currentQuestion);
};

    

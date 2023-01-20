let questions = [
    {question: "1" ,answers :["ex1-1" , "ex1-2" , "ex1-3"], correctAnswer : "1"},
    {question: "2" ,answers :["ex2-1" , "ex2-2" , "ex2-3"], correctAnswer : "2"},
    {question: "3" ,answers :["ex3-1" , "ex3-2" , "ex3-3"], correctAnswer : "3"},
    {question: "4" ,answers :["ex4-1" , "ex4-2" , "ex4-3"], correctAnswer : "4"},
    {question: "5" ,answers :["ex5-1" , "ex5-2" , "ex5-3"], correctAnswer : "5"},
    {question: "6" ,answers :["ex6-1" , "ex6-2" , "ex6-3"], correctAnswer : "6"},
    {question: "7" ,answers :["ex7-1" , "ex7-2" , "ex7-3"], correctAnswer : "7"},
];

let startQuizEl =  document.querySelector("#start");
let startScreenEl = document.querySelector("#start-screen");
let endScreenEl = document.querySelector("#end-screen");
let questionsEl = document.querySelector("#questions");
let questionsTitleEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let timerEl = document.querySelector("#time");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submitInitials = document.querySelector("#submit");
let quizTimer = 100;
let quizInterval;
let currentQuestion;
let answers;
let answersOptions;
let userScore;
let correctAnswer;
let failSound = new Audio("./assets/sfx/incorrect.wav")
let successSound = new Audio("./assets/sfx/correct.wav")

//start quiz
function startQuiz(){
startQuizEl.addEventListener("click",function(event){
    startScreenEl.setAttribute("class" , "hide");
    questionsEl.setAttribute("class","start");
    choicesEl.setAttribute("class","start");
    quizInterval = setInterval(function(){    
        quizTimer--;    
        timerEl.textContent = quizTimer;
        },1000); 
                     
});
}
//end quiz
function endQuiz() {
    startQuizEl.addEventListener("click",function(event){
        endScreenEl.setAttribute("class" , "start");
        questionsEl.setAttribute("class","hide");
        quizInterval = clearInterval(quizInterval);
        userScore = quizTimer;
        finalScore.append(userScore);
});

}
startQuiz();



function nextQuestion(){
    
    for (let i = 0; i < questions.length; i++) {  
        currentQuestion = "";
        currentQuestion = questions[i].question;    
        correctAnswer = questions[i].correctAnswer[0];
        questionsTitleEl.textContent = currentQuestion;
        //questionsEl.setAttribute("class",""); 
        console.log("current question",currentQuestion);
        console.log("corect answer : ",correctAnswer);
        answers = questions[i].answers; 
        console.log("answers : ",answers);            
        console.log(questionsTitleEl.textContent = currentQuestion);
    };
    
    for (let i = 0; i < answers.length; i++) {
        answersOptions = [];
        answersOptions = answers[i];
        let answerBtn = document.createElement("button");
        answerBtn.textContent = answersOptions;
        choicesEl.appendChild(answerBtn);
        console.log("answers : ",answersOptions);
        
    }
    return currentQuestion , answersOptions;

    
}    
nextQuestion();
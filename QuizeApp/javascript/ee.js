// Define quiz questions
var quizQuestions = [
    {
     question: "oop stands for what?",
     choices: ["object operation program", "object oreinted program", "object operad program", "none"],
     answer: 1
    },
    {
     question: "which one of the following is the pillars of oop?",
     choices: ["Abstraction", "inheritance", "polyimorpism", "all"],
     answer: 3
    },
    {
     question: "What is the father of java ?",
     choices: ["james ward", "james gosling", "tim berner-lee", " none"],
     answer: 1
    },
    {
     question: "Which one is true about java?",
     choices: ["case sensitive", "plat form independent", "robust", "all"],
     answer: 3
    },
    {
     question: "when java invented ?",
     choices: ["1960", "1970", "2023", "none"],
     answer: 3
    }
   ];
   
   // Define variables
   var currentQuestion = 0;
   var score = 0;
   var totalQuestions = quizQuestions.length;
   var time = 30;
   var timer;
   var correctAnswers = [];
   
   // Start quiz function
   function startQuiz() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
    startTimer();
   }
   
   // Show question function
   function showQuestion() {
   var question = quizQuestions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choice0").innerHTML = question.choices[0];
    document.getElementById("choice1").innerHTML = question.choices[1];
    document.getElementById("choice2").innerHTML = question.choices[2];
    document.getElementById("choice3").innerHTML = question.choices[3];
    document.getElementById("current-question").innerHTML = currentQuestion + 1;
    document.getElementById("total-questions").innerHTML = totalQuestions;
   }
   
   // Check answer function
   function checkAnswer(choice) {
    var question = quizQuestions[currentQuestion];
    if (choice == question.answer) {
     score++;
     correctAnswers.push(true);
    } else {
     correctAnswers.push(false);
    }
    currentQuestion++;
    if (currentQuestion >= totalQuestions) {
     clearInterval(timer);
     showResults();
    } else {
     showQuestion();
    }
   }
   
   // Start timer function
   function startTimer() {
    timer = setInterval(function() {
     time--;
     document.getElementById("time").innerHTML = time;
     if (time <= 0) {
      clearInterval(timer);
      showResults();
     }
    }, 1000);
   }
   
   // Show results function
   function showResults() {
    var numCorrect = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
     if (correctAnswers[i]) {
      numCorrect++;
     }
    }
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("total-correct").innerHTML = numCorrect;
    document.getElementById("num-questions").innerHTML = totalQuestions;
   }
   
   // Restart quiz function
   function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    time = 30;
    correctAnswers = [];
    document.getElementById("results").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
    startTimer();
   }

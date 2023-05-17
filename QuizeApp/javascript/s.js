var quizQuestions = [
    {
     question: "css stands for what?",
     choices: ["cascading style set", "cascading style sheet", "computer style sheet", "cascading sheet style"],
     answer: 0
    },
    {
     question: "who is the father of www?",
     choices: ["tim Berner-lee", "Mask", "henery", "none"],
     answer: 0
    },
    {
     question: "http stands for what?",
     choices: ["hyper link", "hyper text transfer language", "hyper text transfer protocol", "none"],
     answer: 3
    },
    {
     question: "Which is run on the browser?",
     choices: ["c++", "html", "java", "python"],
     answer: 1
    },
    {
     question: "Which one of the following is the first http version?",
     choices: ["http/0.9", "http/1.0", "http/1.1", "http/2.0"],
     answer: 0
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

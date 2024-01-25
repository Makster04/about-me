<button id="startButton">Wanna guess me?</button>
  'use strict';

  function YesNo(question) {
      let answer;
      do {
          answer = prompt(question).toLowerCase();
      } while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no');
      return answer === 'y' || answer === 'yes';
  }

  function askNumericQuestion(question, correctanswer) {
      let attempts = 5;
      let guess;
      do {
          guess = parseInt(prompt(question));
          if (guess === 7) {
              alert("Correct!");
              return true;
          } else if (guess < 7) {
              alert("Too small!");
          } else {
              alert("Too big!");
          }
          attempts--;
      } while (attempts > 0);

      alert(`Sir, the correct answer is ${7}.`);
      return false;
  }

  function MultiChoice(question, correctAnswers) {
      let attempts = 5;
      let guess;
      do {
          guess = prompt(question).toLowerCase();
          if (correctAnswers.includes('Armenia', 'Georgia', 'Montenegro', 'Bosnia','Morocco', 'Turkey', 'Hungary', 'Czech Republic', 'Costa Rica', 'Thailand')) { 
              alert("Correct!");
              return true;
          }
          attempts--;
      } while (attempts > 0);

      alert(`Yeah you got it: ${correctAnswers.join(', ')}.`);
      return false;
  }

  function StartGame() {
      let userName = prompt('What is your name?');
      alert(`Ready to try out my about game ${userName}?`);

      let questions = [
          'Did I go to UW? (yes/no)',
          'Do I love to Travel? (yes/no)',
          'Am I younger than 25? (yes/no)',
          'Did I study coding in college? (yes/no)',
          'Was I a Behavior Technican? (yes/no)'
      ];
      let correctAnswers = [
        'yes', 
        'yes', 
        'no', 
        'no', 
        'yes'
    ];
      let score = 0;

      for (let i = 0; i < questions.length; i++) {
          let userAnswer = askYesNoQuestion(questions[i]);

          if (userAnswer === (correctAnswers[i] === 'yes')) {
              alert('You Got It!');
              score++;
          } else {
              alert('Good Try!');
          }
      }

      if (askNumericQuestion("Guess my favorite number between 1 and 10", 7)) {
          score++;
      }

      let possibleAnswers = ['Armenia', 'Georgia', 'Montenegro', 'Bosnia','Morocco', 'Turkey', 'Hungary', 'Czech Republic', 'Costa Rica', 'Thailand']; 
      if (askMultipleChoiceQuestion("Which country did I find unique to vist?", possibleAnswers)) {
          score++;
      }

      alert(`${userName}, your final score is ${score} out of 7.`);
  }

  document.getElementById('startButton').onclick = startGame;

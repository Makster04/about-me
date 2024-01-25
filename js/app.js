let userName;

// Function to get Yes/No answers
function YesNo(question) {
  let answer;
  do {
    answer = prompt(question).toLowerCase();
  } while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no');
  return answer === 'y' || answer === 'yes';
}

// Function to ask a numeric question
function askNumericQuestion(question, correctAnswer) {
  let attempts = 5;
  let guess;
  do {
    guess = parseInt(prompt(question));
    if (guess === correctAnswer) {
      alert("Correct!");
      return true;
    } else if (guess < correctAnswer) {
      alert("Too small!");
    } else {
      alert("Too big!");
    }
    attempts--;
  } while (attempts > 0);

  alert(`Sir, the correct answer is ${correctAnswer}.`);
  return false;
}

// Function to ask a multiple-choice question
function MultiChoice(question, correctAnswers) {
  let attempts = 3; // Reduced the maximum number of tries
  let guess;
  do {
    guess = prompt(question).toLowerCase();
    if (correctAnswers.includes(guess)) {
      alert("Correct!");
      return true;
    }
    attempts--;
    alert(`Wrong answer! You have ${attempts} ${attempts === 1 ? 'try' : 'tries'} left.`);
  } while (attempts > 0);

  alert(`Yeah, you got it: ${correctAnswers.join(', ')}.`);
  return false;
}

// Function to start the game
function StartGame() {
  userName = prompt('What is your name?');
  alert(`Ready to try out my about game ${userName}?`);

  let questions = [
    'Did I go to UW? (yes/no)',
    'Do I love to Travel? (yes/no)',
    'Am I younger than 25? (yes/no)',
    'Did I study coding in college? (yes/no)',
    'Was I a Behavior Technician? (yes/no)'
  ];

  let correctAnswers = ['yes', 'yes', 'no', 'no', 'yes'];
  let score = 0;

  // Loop through questions
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = YesNo(questions[i]);

    if (userAnswer === (correctAnswers[i] === 'yes')) {
      alert('You Got It!');
      score++;
    } else {
      alert('Oof, maybe next time!');
    }
  }

  // Ask a numeric question
  if (askNumericQuestion("Guess my favorite number between 1 and 10", 7)) {
    score++;
  }

// Ask a multiple-choice question
let possibleAnswers = ['georgia', 'montenegro', 'bosnia', 'morocco', 'turkey', 'hungary', 'czech republic', 'costa rica', 'thailand'];
let correctAnswer = 'armenia';
let maxTries = 3; // Set the maximum number of tries
let tries = 0; // Initialize the tries counter

while (tries < maxTries) {
  let userAnswer = MultiChoice("Which country did I find unique to visit?", possibleAnswers.concat(correctAnswer));

  if (userAnswer.toLowerCase() === correctAnswer) {
    score++;
    alert("Correct answer!");
    break; // Exit the loop if the answer is correct
  } else {
    tries++;
    alert(`Wrong answer! You have ${maxTries - tries} ${tries === 1 ? 'try' : 'tries'} left.`);
  }
}

  alert(`${userName}, your final score is ${score} out of 7.`);
}

// Call the StartGame function to begin the game
StartGame();

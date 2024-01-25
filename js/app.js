let question1 = prompt('Am I taller than 6ft?'); 
let answer1 = 'yes';

if (question1 === 'yes') {
    console.log('yes'); 
} else {
    alert('Im not that short');
    console.log('wrong'); 
}


let question2 = prompt('Am I married?');
let answer2 = 'yes';

if (question2 === 'yes') {
    console.log('yes'); 
} else {
    alert('Not yet sadly');
    console.log('wrong'); 
}


let question3 = prompt('Was I raised in Washington?'); 
let answer3 = 'yes';

if (question3 === 'yes') {
    console.log('yes'); 
} else {
    alert('Yes I was!');
    console.log('wrong'); 
}

let question4 = prompt('Did I go to UW?'); 
let answer4 = 'yes'; 

if (question4 === 'yes') {
    console.log('yes'); 
} else {
    alert('I did!');
    console.log('wrong'); 
}

let question5 = prompt('Was I born in April?');
let answer5 = 'yes'; 

if (question5 === 'yes') {
    console.log('yes'); 
} else {
    alert('I was!');
    console.log('wrong'); 
}


let question6 = prompt('What is your name?');
document.write('<p>Hello! '+ question6 + '</p>');

//end part 1

let userNumberGuess = prompt('How old am I?');
let correctNumber = 25;

if (userNumberGuess > correctNumber) {
    alert('Too Old');
  } else if (userNumberGuess < correctNumber) {
    alert('Too Young');
  } else {
    alert('Bingo!');
  }
//need to finish 


//this is part 3
const possibleAnswers = ["pho", "curry", "hot pot", "korean bbq"];
const maxAttempts = 6;
let attempts = 0;

while (attempts < maxAttempts) {
  const userGuess = prompt("guess my favorite NBA player");

  if (possibleAnswers.includes(userGuess)) {
    alert("He is up there!");
    break;
  } else {
    alert('Probably not!');
  }

  attempts++;
}
if (attempts === maxAttempts) {
  alert('sorry! You failed!'); 
}

//part 4

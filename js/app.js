function buttonGame() {
    let userName = "Welcome welcome! What do you call yourself?!";
    let user = prompt(userName);
    let answerString1 = "Whatsupp " + user + "! Do you know anything about me?!";
    alert(answerString1);
    let userConfirmed;
    do {
        userConfirmed = prompt("Are you readdyyyyyyyyy? (y/n)");
        userConfirmed = userConfirmed ? userConfirmed.toLowerCase() : "";
    } while (userConfirmed !== "y" && userConfirmed !== "n");
    if (userConfirmed !== "y") {
        alert("Aight, see you later?");
        return;
    }
    let questions = [
        "What month was I born?",
        "What college did I go to (2 letter abbreviation)?",
        "How old was I in 2009?",
        "Which city do I live in?",
        "Which map region is my family from?",
        "Who is my favorite Basketball Player?"
    ];
    let correctAnswers = [
        "april",
        "UW",
        "11",
        "bellevue",
        "balkans",
        "Nikola Jokic"
    ];
    let answerChoices = [
        ["april"],
        ["UW"],
        ["11"],
        ["bellevue"],
        Array.from({ length: 11 }, (_, i) => (i + 15).toString()),
        ["Nikola Jokic", "Shai Gilgeous-Alexander", "Tyrese Haliburton", "LeBron James", "Luka Doncic", "DeArron Fox", "Alperen Sengun", "Victor Wembanyama", "Kawhi Leonard", "Anthony Edwards"]
    ];
    let correctCount = 0;
    let wrongCount = 0;
    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i]);
        let lowercasedAnswer = userAnswer.toLowerCase();
        let correctAnswer = correctAnswers[i].toLowerCase();
        if (i === 4) {
            // Numeric Validation
            let userGuessNumber = parseInt(userAnswer);
            if (isNaN(userGuessNumber)) {
                alert("Please enter a valid number.");
                break;
            }
            let favoriteNumber = 7;
            let remainingTriesNumber = 4;
            while (remainingTriesNumber > 0) {
                if (userGuessNumber === favoriteNumber) {
                    alert("CORRECT!");
                    correctCount++;
                    break;
                } else {
                    remainingTriesNumber--;
                    alert("WRONG! " + remainingTriesNumber + " tries left.");
                    if (remainingTriesNumber > 0) {
                        userAnswer = prompt(questions[i]);
                        userGuessNumber = parseInt(userAnswer);
                    }
                }
            }
        } else if (i === 5) {
            // Nickname Comparison in Question 5
            let remainingTriesNickname = 6;
            while (remainingTriesNickname > 0) {
                let userGuessNickname = prompt(
                    questions[i] + "\nAvailable choices: " + answerChoices[i].join(", ")
                );
                if (!answerChoices[i].includes(userGuessNickname)) {
                    alert("Invalid choice. Please choose from the available options.");
                    continue;
                }
                if (userGuessNickname.toLowerCase() === correctAnswer) {
                    alert("Yay, you guessed correctly!");
                    correctCount++;
                    break;
                } else {
                    remainingTriesNickname--;
                    alert("WRONGGGG! You have " + remainingTriesNickname + " tries left.");
                    answerChoices[i] = answerChoices[i].filter(choice => choice !== userGuessNickname);
                }
            }
        } else {
            if (lowercasedAnswer === correctAnswer) {
                let confirmation = "Give me a high five " + user + ", You nailed it!!";
                alert(confirmation);
                correctCount++;
            } else {
                alert("Better luck on the next one :(" + user + "");
                wrongCount++;
            }
        }
    }
    let finalMessage = "Thanks for giving it a go, " + user + "!\nYou got " + correctCount + " right and " + wrongCount + " wrong!!!";
    alert(finalMessage);
}

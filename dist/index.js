"use strict";
var _a, _b;
let secretWord;
let amountOfMistakes = 0;
let letterGuessed = [];
(_a = document.getElementById("sendSecretWord")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const inputWord = document.getElementById("secretWord");
    secretWord = String(inputWord === null || inputWord === void 0 ? void 0 : inputWord.value);
    alert(secretWord);
});
(_b = document.getElementById("sendGuess")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const inputGuess = document.getElementById("guess");
    const output = document.querySelector('#output');
    if (output != null) {
        output.innerText = guessLetter(inputGuess === null || inputGuess === void 0 ? void 0 : inputGuess.value);
    }
});
const guessLetter = (letter) => {
    if (secretWord.includes(letter)) {
        letterGuessed.push(letter);
        const userString = buildGuessedWord();
        if (!userString.includes('*')) {
            return ("Congradulation!! You've guessed the word! The word is: " + secretWord);
        }
        else {
            return (userString);
        }
    }
    else {
        amountOfMistakes++;
        return ("Wrong guess! you currently guessed: " + amountOfMistakes + " letters wrong");
    }
};
const buildGuessedWord = () => {
    let answer = "";
    for (let i = 0; i < secretWord.length; i++) {
        if (letterGuessed.includes(secretWord[i])) {
            answer += secretWord[i];
        }
        else {
            answer += '*';
        }
    }
    return answer;
};

let secretWord : string[] = [];
let amountOfMistakes : number = 0;
let letterGuessed : string[] = [];


document.getElementById("sendSecretWord")?.addEventListener("click",()=>{
    const inputWord = document.getElementById("secretWord") as HTMLInputElement;
    secretWord = String(inputWord?.value).split("");
    alert(secretWord);
})

document.getElementById("sendGuess")?.addEventListener("click",()=>{
    const inputGuess = document.getElementById("guess") as HTMLInputElement;
    const output = document.querySelector('#output') as HTMLElement | null;
    if (output!=null){
        output.innerText = guessLetter(inputGuess?.value);
    }
})


const guessLetter = (letter: string) => {
    if (secretWord.includes(letter)) {
      letterGuessed.push(letter);
      const userString = buildGuessedWord();
  
      if (!userString.includes('*')) {
        return `Congratulations! You've guessed the word. The word is: ${secretWord}`;
      } 
      else {
        return userString;
      }
    } 
    else {
      amountOfMistakes++;
      return `Wrong guess! You've guessed ${amountOfMistakes} letters wrong.`;
    }
  };
  


const buildGuessedWord =()=> {
    return secretWord.map(char => letterGuessed.includes(char) ? char : '*').join('');
}
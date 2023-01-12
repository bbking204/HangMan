let secretWord : string;
let amountOfMistakes : number = 0;
let letterGuessed : string[] = [];

document.getElementById("sendSecretWord")?.addEventListener("click",()=>{
    const inputWord = document.getElementById("secretWord") as HTMLInputElement;
    secretWord = String(inputWord?.value);
    alert(secretWord);
})

document.getElementById("sendGuess")?.addEventListener("click",()=>{
    const inputGuess = document.getElementById("guess") as HTMLInputElement;
    const output = document.querySelector('#output') as HTMLElement | null;
    if (output!=null){
        output.innerText = guessLetter(inputGuess?.value);
    }
})

const guessLetter =(letter : string)=>{
    if(secretWord.includes(letter)){
        letterGuessed.push(letter);
        const userString = buildGuessedWord();
        if(!userString.includes('*')){
            return ("Congradulation!! You've guessed the word! The word is: " + secretWord);
        }
        else{
            return (userString);
        }
    }
    else{
        amountOfMistakes++;
        return ("Wrong guess! you currently guessed: " + amountOfMistakes + " letters wrong");
    }
}


const buildGuessedWord =()=> {
    let answer : string = "";
    for (let i = 0; i<secretWord.length; i++){
        if(letterGuessed.includes(secretWord[i])){
            answer += secretWord[i];
        }
        else{
            answer+='*';
        }
    }
    return answer;
}
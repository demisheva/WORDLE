import { dictionary } from './dictionary.js';

const numberOfGuesses = 6;
let guessesRemaining = numberOfGuesses;
let currentGuessArray = [];
let currentGuess = '';
let currentGuessInDictionary = false;
let rightWord = dictionary[Math.floor(Math.random() * dictionary.length)];
let rightWordArray=rightWord.split('')

console.log('rightWord - ',rightWord)


function drowBoard() {
    let board = document.getElementById('game-board');
    for (let i = 0; i < numberOfGuesses; i++) {
        let row = document.createElement('div');
        row.className = `letter-row row${i}`;

        for (let j = 0; j < 5; j++) {
            let box = document.createElement('input');
            box.className = 'letter-input';
            box.setAttribute('maxlength', '1');
            row.appendChild(box);
        }

        board.appendChild(row)
    }
}

drowBoard();

document.getElementById('check').onclick = checkWord;

function checkWord() { 
    let lettersInRow = document.querySelectorAll(`.row${[numberOfGuesses - guessesRemaining]
        } .letter-input`);
    console.log('row#',`row${[numberOfGuesses - guessesRemaining]}`);
    console.log('lettersInRow - ',lettersInRow);

    for (let i = 0; i < lettersInRow.length; i++) {
        currentGuessArray.push(lettersInRow[i].value.toLowerCase());
    }  

    currentGuess = currentGuessArray.join('');

    for (let i = 0; i < lettersInRow.length; i++) {
        for (let j = 0; j < rightWordArray.length; j++) {
            if (rightWordArray[j] === currentGuessArray[i]) {
                lettersInRow[i].classList.add('have-letter');
                lettersInRow[i].classList.remove('correct-letter', 'no-letter');
            }
        }
        if (currentGuessArray[i] === rightWordArray[i]) {
            lettersInRow[i].classList.add('correct-letter');
            lettersInRow[i].classList.remove('have-letter', 'no-letter');

        } else if (currentGuessArray[i] !== rightWordArray[i]) {
            lettersInRow[i].classList.add('no-letter');
        }
    }

    for (let i = 0; i < dictionary.length; i++) {
        if (currentGuess === dictionary[i]) {
            console.log(`dictionary[i] -`, dictionary[i]);
            currentGuessInDictionary = true;
        }
    }

    if (currentGuessInDictionary === false) { 
        alert('Not in word list');
        for (let i = 0; i < lettersInRow.length; i++) {
            lettersInRow[i].value = '';
            lettersInRow[i].classList.remove('no-letter', 'correct-letter', 'have-letter');
        } 
        guessesRemaining++;
        
    }

    console.log(currentGuess === rightWord)
    if (currentGuess === rightWord) { 
        alert('Congratulations! You won.')
    }
    guessesRemaining--;

    console.log('guessesRemaining - ', guessesRemaining)
    console.log('currentGuessArray -',currentGuessArray)
    console.log('currentGuess -',currentGuess)
    console.log('rightWordArray -',rightWordArray);

    if (guessesRemaining < 1) {
        alert('Game Over');
        setTimeout(resetGame, 3000);
    }

    currentGuessArray = [];
    currentGuessInDictionary = false;

}

document.getElementById('reset').onclick = resetGame;

function resetGame() { 
    location.reload();
    return false;
}

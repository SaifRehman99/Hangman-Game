//hangman class
class Hangman {
    //constructor to make instance of hangman
    constructor(word, attempts) {
        this.word = word.toLowerCase().split(''),
            this.attempts = attempts,
            this.guessedLetter = [],
            this.status = 'Playing'

    }
    // some class methods defined below!



    // when enterning the letter to gues the word,
    makeGuess(guess) {
        guess = guess.toLowerCase();
        let isUnique = !this.guessedLetter.includes(guess);
        let isbadGuess = !this.word.includes(guess);

        //if true stop the below doesnt run 
        if (this.status !== 'Playing') {
            return
        }

        // if no letter is include push in the array or the guess is unique
        if (isUnique) {
            this.guessedLetter.push(guess);
        }
        // decrement the attempts
        if (isUnique && isbadGuess) {
            this.attempts--;

        }
        this.currentStatus();

    }



    // displaying the guessed letters
    get getGuess() {


        let puzzel = '';

        //iterate over the word and add in the puzzel if not founf add ***
        this.word.forEach((item) => {
            if (this.guessedLetter.includes(item) || item === ' ') {

                puzzel += item;
            } else {
                puzzel += '*';
            }

        })
        return puzzel;

    }



    //changing the status of the game
    currentStatus() {
        //final method
        const finished = this.word.every((item) => this.guessedLetter.includes(item) || item === ' ')

        if (this.attempts === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished';
        } else {
            this.status = 'Playing';
        }


    }


    // printing message on the screen about your work
    get message() {
        if (this.status === 'Playing') {
            return `Guess left : ${this.attempts}`
        } else if (this.status === 'Failed') {
            return `Nice Try!, The word was "${this.word.join('').toUpperCase()}"`
        } else {
            return `Great Work!`
        }

    }





}
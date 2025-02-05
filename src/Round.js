var Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    newTurn.evaluateGuess();
    if (guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.returnCurrentCard();
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (this.turns === this.incorrectGuesses.length) {
      return `0%`;
    } else {
      return `${((this.turns - this.incorrectGuesses.length) / this.turns) * 100 }%`;
    }
  }

  endRound() {
    let result = `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
    console.log(result);
    return result;
  }
}

module.exports = Round;

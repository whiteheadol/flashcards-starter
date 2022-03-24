var Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = [];
  }
//start with currentCard hardcoded to the 0 index

  returnCurrentCard() {
    // this.currentCard = this.deck.cards[this.turns];
    // return this.currentCard;
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    console.log(this.currentCard)
    let newTurn = new Turn(guess, this.currentCard);
    if (guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
      console.log(`incorrect!`);
    } else {
      console.log(`correct!`);
    }
    this.turns++;
    this.currentCard = this.returnCurrentCard();
    //ReturnCC should just return a value - set that value somewhere else
    // return newTurn;
    console.log(this.currentCard);
  }

  calculatePercentCorrect() {
    if (this.turns === this.incorrectGuesses.length) {
      return `0%`;
    } else {
      return `${this.incorrectGuesses.length / this.turns *100}%`;
    }
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }
}

module.exports = Round;

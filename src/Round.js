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
    if (guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
      this.turns++;
      this.currentCard = this.returnCurrentCard();
      return `incorrect!`;
    } else {
      this.turns++;
      this.currentCard = this.returnCurrentCard();
      return `correct!`;
    }
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

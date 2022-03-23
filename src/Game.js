const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
var Card = require('./Card');

class Game {
  constructor(round) {
    this.currentRound = round;
    this.deck = this.start();
    // console.log(this.currentRound);
  }

  start() {
    this.deck = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    })
    return this.deck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor(round) {
    this.currentRound = null;
    this.start();
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let newDeck = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    let anotherDeck = new Deck(newDeck);
    this.currentRound = new Round(anotherDeck);
    this.printMessage(anotherDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;

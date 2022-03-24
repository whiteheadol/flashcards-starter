const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let cardOne, cardTwo, cardThree, deck, round;

  beforeEach(() => {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([cardOne, cardTwo, cardThree]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a current card', function() {
    expect(round.currentCard).to.equal(cardOne);
  });

  it('should be able to display the current card', function() {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(cardOne);
  });

  it('each time a turn is taken, the number of turns increment', function() {
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
  });

  it('each time a turn is taken, the next card becomes the current card', function() {
    round.takeTurn('guess');
    expect(round.currentCard).to.equal(cardTwo);
  });

  it('the guess is evaluated and recorded for each turn', function() {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('guess');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('the user should receive feedback on their guess', function() {
    expect(round.takeTurn('guess')).to.equal('incorrect!');
    expect(round.takeTurn('array')).to.equal('correct!');
  });

  it('there should be a method that calculates what percentage of answers a user has gotten correct', function() {
    round.takeTurn('guess');
    expect(round.calculatePercentCorrect()).to.equal('0%');
    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.equal('50%');
  });

  it('the user should see feedback about the round when they end the round', function() {
    round.takeTurn('guess');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 0% of the questions correctly!`);
    round.takeTurn('array');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });

})

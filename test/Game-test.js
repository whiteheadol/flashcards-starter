const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  let cardOne;
  let cardTwo;
  let cardThree;
  let turnOne;
  let deck;
  let round;

  beforeEach(() => {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    turnOne = new Turn('object', cardOne);
    deck = new Deck([cardOne, cardTwo, cardThree]);
    //'../src/data'
    round = new Round(deck);
  });

  it('should be a function', function() {
    const game = new Game(round);
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game(round);
    expect(game).to.be.an.instanceof(Game);
  });

  it('the game should keep track of the current round', function() {
    const game = new Game(round);
    expect(game.currentRound).to.equal(round);
  });

  it('there should be a method to start the game and create cards', function() {
    const game = new Game(round);
    game.start();
    expect(game.deck[0]).to.deep.equal(cardOne);
  });

  //within the start method, an iterator to loop through the data array
  //and instantiate new instances
})

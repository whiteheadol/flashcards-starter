const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  let cardOne, cardTwo, cardThree, turnOne, deck, round, game;

  beforeEach(() => {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    turnOne = new Turn('object', cardOne);
    deck = new Deck([cardOne, cardTwo, cardThree]);
    round = new Round(deck);
    game = new Game(round);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.exist;
  });

  it('should be a method to start the game and create cards in the deck', function() {
    game.start();
    expect(game.currentRound.deck.cards.length).to.equal(30);
    expect(game.currentRound.deck.cards[0]).to.deep.equal(cardOne);
    expect(game.currentRound.deck.cards[1]).to.deep.equal(cardTwo);
  });

  it('should instantiate a new round using the current deck', function() {
    game.start();
    expect(game.currentRound.deck).to.exist;
    expect(game.currentRound.turns).to.equal(0);
    expect(game.currentRound.currentCard).to.deep.equal(cardOne);
  });

})

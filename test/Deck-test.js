const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let cardOne, cardTwo, cardThree, deck;

  beforeEach(() => {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([cardOne, cardTwo, cardThree]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('each instance should hold an array of card objects', function() {
    expect(deck.cards).to.be.a('array');
  });

  it('should be able to count number of cards in the deck', function() {
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  });

});

class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

evaluateGuess() {
  if (this.userGuess === this.currentCard.correctAnswer) {
    return true;
  } else {
    return false;
  }
  // switch (this.userGuess) {
  //   case this.currentCard.correctAnswer:
  //   return true;
  //   break;
  //   default:
  //   return false;
  // }
}

giveFeedback() {
  if (this.evaluateGuess()) {
    return 'correct!';
  } else {
    return 'incorrect!';
    }
  }
}


module.exports = Turn;

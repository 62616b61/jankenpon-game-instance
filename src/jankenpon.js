class Jankenpon {
  constructor () {
    this.rules = [2, 0, 1]

    this.state = 'idle'
    this.score = [0, 0]
    this.choice = [null, null]
    this.tie = null
    this.winner = null
  }

  reset () {
    this.state = 'idle'
    this.choice = [null, null]
    this.tie = null
    this.winner = null
  }

  choose (player, shape) {
    this.state = 'waiting'
    this.choice[player] = shape

    if (this.choice[0] && this.choice[1]) {
      this.play()
    }
  }

  play () {
    this.state = 'finished'
    const shape1 = this.choice[0]
    const shape2 = this.choice[1]

    // tie
    if (shape1 === shape2) {
      this.tie = true
    }
    // player 0 won
    else if (this.rules[shape1] === shape2) {
      this.tie = false
      this.winner = 0
      this.score[0]++
    }
    // player 1 won
    else {
      this.tie = false
      this.winner = 1
      this.score[1]++
    }
  }

  status () {
    return {
      state: this.state,
      score: this.score,
      results: {
        tie: this.tie,
        winner: this.winner
      }
    }
  }
}

module.exports = Jankenpon

const IDLE = 'idle'
const WAITING = 'waiting'
const FINISHED = 'finished'

class Jankenpon {
  constructor () {
    this.rules = [2, 0, 1]

    this.state = IDLE
    this.score = [0, 0]
    this.choice = [null, null]
    this.tie = null
    this.winner = null
  }

  reset () {
    this.state = IDLE
    this.choice = [null, null]
    this.tie = null
    this.winner = null
  }

  choose (player, shape) {
    // If player has already made a choice, skip
    if (this.choice[player]) return

    this.state = WAITING
    this.choice[player] = shape

    if (this.choice[0] && this.choice[1]) {
      this.play()
    }
  }

  play () {
    this.state = FINISHED
    const shape1 = parseInt(this.choice[0])
    const shape2 = parseInt(this.choice[1])

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

    console.log('shape1', shape1)
    console.log('shape2', shape2)
    console.log('cond1', shape1 === shape2)
    console.log('cond2', this.rules[shape1] === shape2)

    console.log('playing', this.tie, this.winner, this.score)
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

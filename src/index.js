const express = require('express')

const constants = require('./config/constants')
const Jankenpon = require('./jankenpon')

const app = express()
const jankenpon = new Jankenpon()

app.get('/status', (req, res) => res.json(jankenpon.status()))

app.get('/reset', (req, res) => {
  jankenpon.reset()
  res.sendStatus(200)
})

app.get('/choose/:player/:shape', (req, res) => {
  const player = req.params.player
  const shape = req.params.shape

  console.log('choice:', player, shape)

  jankenpon.choose(player, shape)
  res.sendStatus(200)
})

app.listen(constants.PORT, err => {
  if (err) console.error('Error occured')
  else {
    console.log(`running on ${constants.PORT}`)
  }
})

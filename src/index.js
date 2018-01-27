const express = require('express')

const app = express()

app.get('/state', (req, res) => {
  res.json({ msg: 'Hello World' })
})

app.listen(3000, err => {
  if (err) console.error('Error occured')
  else {
    console.log('running on 3000')
  }
})

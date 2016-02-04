'use strict'

const config = require('./config')
const path = require('path')
let app = require('express')()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/demo_router.html'))
})

app.get('/textBody', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/text_body.html'))
})

app.get('/api/textBody', (req, res) => {
  res.send('LOREM IPSUM')
})
app.listen(config.port)

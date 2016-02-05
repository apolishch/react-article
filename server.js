'use strict'

const config = require('./config')
const path = require('path')
const express = require('express')
let app = express()

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/react_article.html'))
})

app.get('/api/textBody', (req, res) => {
  res.send('LOREM IPSUM')
})

app.get('/api/multiTabText', (req, res) => {
  res.send({
    tab1: {
      editable: false,
      body: 'LOREM IPSUM'
    },
    tab2: {
      editable: false,
      body: ['LOREM', 'IPSUM']
    },
    tab3: {
      editable: false,
      body: {text: 'LOREM IPSUM'}
    },
    tab4: {
      editable: true,
      body: 'LOREM IPSUM'
    },
    tab5: {
      editable: true,
      body: ['LOREM', 'IPSUM']
    },
    tab6: {
      editable: true,
      body: {text: 'LOREM IPSUM'}
    }
  })
})
app.listen(config.port)

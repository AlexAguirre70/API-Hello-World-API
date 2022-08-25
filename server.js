// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const languagesController= require('./controllers/languages_controller.js')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use('languages', languagesController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World! API')
})
// Index:
languages.get('/', (req, res) => {
  Language.find()
      .then(foundLanguages => {
          res.json(foundLanguages)
      })
})

// Show:
languages.get('/:name', (req, res) => {
  Language.findOne({ name: req.params.name .toLowerCase() })
      .then(foundLanguage => {
          res.json(foundLanguage)
      })
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})
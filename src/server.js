const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('../models/queries.js')
const usr = require('../models/users.js')
const matching = require('../models/matching.js')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })

)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API. This is the core service of Tinoite.' })
})

app.get('/users', usr.getUsers)

app.get('/users/:id', usr.getUserById)

app.post('/users', usr.createUser)

app.post('/like', matching.likeUser)

app.get('/likesOf/:id', matching.getMatchesOf)

app.post('/gender', db.createGender)

app.put('/users/:id', usr.updateUser)

app.delete('/users/:id', usr.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

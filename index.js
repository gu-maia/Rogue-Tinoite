const express    = require ('express');
const bodyParser = require('body-parser');
const CryptoJS = require("crypto-js");
const app        = express();
const port       = 3000;
const db         = require('./queries.js');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
	  extended: true,
	 })

)


app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' + CryptoJS.MD5("test").toString()})
})

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)

app.post('/users', db.createUser);

app.post('/gender', db.createGender);

app.put('/users/:id', db.updateUser)

app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
 })

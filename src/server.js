const express = require('express')
const routes = require('./routes')
require('./database')
const port = 3000

const app = express();

app.use(express.json())
app.use(routes);


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

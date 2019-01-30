const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route.route')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/routes', route)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/beet')

app.get('/', (req, res) => res.send('Hello, World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))
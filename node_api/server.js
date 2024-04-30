console.log("In server JS")

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/name', function(req,res) {
    let queryString = req.query("name)")
    console.log(queryString)
    res.json(queryString)
})

app.listen(3000)
console.log("api launched at localhost 3000")
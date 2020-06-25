const express = require("express")
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World 2')
})

app.get('/about', function (req, res) {
    res.json({
        name: "Daniel Correa"
    })
})
   
app.listen(3000)
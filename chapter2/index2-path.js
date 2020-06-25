const express = require("express")
const path = require("path")
const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "views/index.html"))
})

app.get('/about', function (req, res) {
    res.json({
        name: "Daniel Correa"
    })
})
   
app.listen(3000)
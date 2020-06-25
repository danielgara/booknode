const express = require("express")
const path = require("path")
const ejs = require("ejs")

const app = express()
app.set("view engine","ejs")
app.use(express.static("public"))

app.get('/', function (req, res) {
    res.render("index")
})

app.get('/about', function (req, res) {
    res.render("about")
})

app.get('/contact', function (req, res) {
    res.render("contact")
})

app.get('/post', function (req, res) {
    res.render("post")
})

app.listen(3000)
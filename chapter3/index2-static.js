const express = require("express")
const path = require("path")
const app = express()
app.use(express.static("public"))

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "pages/index.html"))
})

app.get('/about', function (req, res) {
    res.sendFile(path.resolve(__dirname, "pages/about.html"))
})

app.get('/contact', function (req, res) {
    res.sendFile(path.resolve(__dirname, "pages/contact.html"))
})

app.get('/post', function (req, res) {
    res.sendFile(path.resolve(__dirname, "pages/post.html"))
})
   
app.listen(3000)
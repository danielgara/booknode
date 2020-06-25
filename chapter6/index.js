const express = require("express")
const path = require("path")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const BlogPost = require("./models/BlogPost")

mongoose.connect("mongodb://localhost/mongo",{useNewUrlParser:true, useUnifiedTopology: true})

const app = express()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

/*app.get('/', function (req, res) {
    res.render("index")
})*/

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    res.render("index",{
        posts: blogposts
    })
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

app.get('/posts/new', function (req, res) {
    res.render("create")
})

/*app.post('/posts/store', function (req, res) {
    BlogPost.create(req.body,(error,blogpost)=>{
        console.log(error,blogpost)
    })
    res.redirect("/")
})*/

app.post('/posts/store', async (req, res) => {
    await BlogPost.create(req.body)
    res.redirect("/")
})

app.listen(3000)
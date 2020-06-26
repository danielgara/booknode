const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

/* include controllers */
const homeController = require("./controllers/home") 
const aboutController = require("./controllers/about") 
const contactController = require("./controllers/contact") 
const newPostController = require("./controllers/newPost") 
const getPostController = require("./controllers/getPost") 
const storePostController = require("./controllers/storePost") 
const newUserController = require("./controllers/newUser") 
const storeUserController = require("./controllers/storeUser") 
const loginController = require("./controllers/login") 
const loginUserController = require("./controllers/loginUser") 

/* include middleware */
const validateMiddleware = require("./middleware/validationMiddleware") 

mongoose.connect("mongodb://localhost/mongo",{useNewUrlParser:true, useUnifiedTopology: true})

const app = express()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use("/posts/store",validateMiddleware)

/* Routes */
app.get('/', homeController)
app.get('/about', aboutController)
app.get('/contact', contactController)
app.get('/posts/new', newPostController)
app.get('/post/:id', getPostController)
app.post('/posts/store', storePostController)
app.get('/auth/register', newUserController)
app.get('/auth/login', loginController)
app.post('/users/login', loginUserController)
app.post('/users/register', storeUserController)

app.listen(3000)
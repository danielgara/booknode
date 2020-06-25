const mongoose = require("mongoose")
const BlogPost = require("./models/BlogPost")

mongoose.connect("mongodb://localhost/mongo",{useNewUrlParser:true})

//CREATE
/*BlogPost.create({
    title:"Tema 2",
    body:"el peor tema"
},(error,blogpost)=>{
    console.log(error,blogpost)
})*/

//FIND
BlogPost.find({},(error,blogpost)=>{
    console.log(error,blogpost)
})

//FIND BY TITLE
BlogPost.find({title:"Tema 1"},(error,blogpost)=>{
    console.log(error,blogpost)
})

//FIND BY ID
let id = "5ef4b0fead356f1a0cf81e35"
BlogPost.findById(id,(error,blogpost)=>{
    console.log(error,blogpost)
})

//FIND BY ID AND UPDATE
BlogPost.findByIdAndUpdate(id,{title:"Tema 3"},(error,blogpost)=>{
    console.log(error,blogpost)
})

//FIND BY ID AND UPDATE
BlogPost.findByIdAndDelete(id,(error,blogpost)=>{
    console.log(error,blogpost)
})
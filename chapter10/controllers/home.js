const BlogPost = require("../models/BlogPost")

module.exports = async function (req, res){
    const blogposts = await BlogPost.find({})
    res.render("index",{
        posts: blogposts
    })
}
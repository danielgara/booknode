const BlogPost = require("../models/BlogPost")

module.exports = async function (req, res){
    const blogpost = await BlogPost.findById(req.params.id)
    res.render("post",{blogpost})
}
const User = require("../models/User")

module.exports = function(req,res,next){
    User.findById(req.session.userId, function(error,user){
        if(error || !user){
            return res.redirect("/")
        }
        next()
    })
}
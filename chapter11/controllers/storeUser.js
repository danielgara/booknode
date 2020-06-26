const User = require("../models/User")

module.exports = async function (req, res){
    await User.create(req.body, function(error, user){
        if(error){
            return res.redirect("/auth/register")
        }
        res.redirect("/")
    })
}
const passport = require("passport");
const UserModels = require("../Models/userModel");
const localStrategy = require("passport-local");

passport.use(new localStrategy(UserModels.authenticate()));

exports.homepage = function (req, res, next) {
    res.render("index")
}

exports.signuppage = (req, res, next) => {
    console.log(req.body);
}


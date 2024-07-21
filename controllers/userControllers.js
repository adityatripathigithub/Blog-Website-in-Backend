const passport = require("passport");
const UserModels = require("../Models/userModel");
const localStrategy = require("passport-local");
const userModel = require("../Models/userModel");

passport.use(new localStrategy(UserModels.authenticate()));

exports.homepage = function (req, res, next) {
    res.render("index")
}

exports.signuppage = (req, res, next) => {
    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        fullname: req.body.fullname,

    });

    userModel.register(newUser, req.body.password).then((u) => {
        passport.authenticate("local")(req, res, () => {
            res.redirect("/login")
        })
    })
};

exports.signinpage = passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login"
})


exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect("/login");
    });
}
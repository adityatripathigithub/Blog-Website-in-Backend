
exports.homepage = function(req, res, next) {
    res.render("index")
}

exports.signuppage = (req, res, next) =>{
    console.log(req.body);
}
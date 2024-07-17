exports.indexhomepage = function (req, res, next) {
    res.render('index', { title: 'Express' });
}

exports.indexlogin = function (req, res, next) {
    res.render('login');
}

exports.indexregister = function (req, res, next) {
    res.render('register');
}
exports.indexprofile = function (req, res, next) {
    res.render('profile');
}


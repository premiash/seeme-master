var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signup.handlebars');
}

exports.signin = function(req, res) {
    res.render('signin.handlebars');
}

exports.profile = function(req, res) {
    res.render('profile.handlebars');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });

}
var path = require('path');

module.exports = function(app) {

    // Route for home page
    app.get('/', function(req, res) {
        res.render('index.handlebars'); // load the index.ejs file
    });
};
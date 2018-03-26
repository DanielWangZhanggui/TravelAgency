var util = require('util');

module.exports = function (app) {

	app.get('/', function (req, res, next) {
		res.json({
            "username": "Daniel",
            "org": "admin"
        });
	}); 

	app.get('/create', function (req, res, next) {
		res.json({
            "result":"success",
            "username":req.body.username
        });
	});

	app.get('/delete/:id', function (req, res, next) {
		res.json({
            "result":"success",
            "username":req.body.username
        });
	});

	app.get('/update/:id', function (req, res, next) {
		res.json({
            "result":"success",
            "username":req.body.username
        });
	});

	app.post('/login', function (req, res, next) {

		// you might like to do a database look-up or something more scalable here
		if (req.body.username && req.body.username === 'Daniel' && req.body.password && req.body.password === 'Q@Aabc123') {
			req.session.authenticated = true;
			res.status(200).json({
                "result":"success",
                "username":req.body.username
            });
		} else {
			// req.flash('error', 'Username or password are incorrect');
			res.status(403).json({
                "result":"failed",
                "username":req.body.username
            });
		}

	});

	app.get('/logout', function (req, res, next) {
		res.json({
            "result":"success",
            "username":req.body.username
        });
	});

};
var express = require('express');
var cookieParser = require('cookie-parser');
var express_session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = 8999;
var app = express();

function checkAuth (req, res, next) {
	console.log('checkAuth ' + req.url);
	if (req.url === '/*' && (!req.session || !req.session.authenticated)) {
		res.render('unauthorised', { status: 403 });
		return;
    }
    
	next();
}

app.use(cookieParser());
app.use(express_session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(checkAuth);
// app.use(app.router);
app.use(cors());
require('./lib/routes.js')(app);

app.listen(port);
console.log('Node listening on port %s', port);
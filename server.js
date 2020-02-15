require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define routes
// user routes


app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


const userRouters = require('./app/api/users/users.router');
app.use('/api/user/', userRouters);

const rolesRouter = require('./app/api/roles/roles.routes');
app.use('/api/roles', rolesRouter);



// admin authentication router
const adminAuthenticationRouter = require('./app/api/authentication/authentication.router')
app.use('/api/authentication', adminAuthenticationRouter);



app.listen(port, () => console.log('server started at port 3000'));





require('dotenv').config();
const Controller = require('../Controller');
const Users = require('../../models/users/Users')
// user callable
const User = new Users();

//require bycript
const bycript = require('bcrypt')
// require json web token
const jwt = require('jsonwebtoken')


class Admin extends Controller {
	constructor() {
		super();
	}

	authentication(req, res) {
		let email = req.body.user;
		let password = req.body.password;
		User.findUserByEmail(email, (error, user) => {
			//console.log(error)
			if (error) {
				return res.status(200).json({
					status: 500,
					message: 'Invalid user and password'
				})
			} else {
				if (user === null || user === undefined) {
					return res.status(200).json({
						status: 500,
						message: 'Your entered user name dont match with our record'
					})
				} else {
					let userPassword = user['password'];
					bycript.compare(password, userPassword, (err, same) => {
						console.log('compare error :' + err);
						console.log('compare success: ' + same)
						if (err) {
							return res.status(200).json({
								status: 500,
								message: 'We unable to verify your password'
							})
						}

						if (same === true) {
							const data = {
								name: user['name'],
								email: user['email']
							}

							// create web token

							jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
								if (err) {
									return res.status(200).json({
										status: 500,
										message: 'Sorry , we are unable create token for you'
									})
								} else {
									return res.status(200).json({
										status: 200,
										message: 'Login success to our server',
										access_key: token,
										name: user['name'],
										email: user['email']
									})
								}
							})
						} else {
							return res.status(200).json({
								status: 500,
								message: 'We unable to verify your password'
							})
						}
					})
				}
			}
		})
	}
}

module.exports = Admin;





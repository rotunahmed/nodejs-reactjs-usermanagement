const { genSaltSync, hashSync } = require('bcrypt');
const Controller = require('../Controller');
const Users = require('../../models/users/Users');
const user = new Users();


class UserController extends Controller {

    constructor() {
        super()
    }

    getUsers(req, res) {
        const body = req.body;
        user.getUsers(body, (error, results) => {
            console.log(results);
            if (error) {
                return res.status(500).json({
                    status: 300,
                    message: error
                })
            } else {
                return res.status(200).json({
                    status: 200,
                    data: results
                })
            }
        })
    }


    create(req, res) {
        const body = req.body
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        user.createUser(body, (err, results) => {
            if (err) {
                if (err.errno === 1062) {
                    return res.status(500).json({
                        status: 300,
                        message: err.sqlMessage
                    })
                }
            }

            return res.status(200).json({
                status: 200,
                message: 'User has been created',
                data: results
            })
        })
    }
}

module.exports = UserController
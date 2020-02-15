const Model = require('../Model');

class Users extends Model {

    constructor() {
        super()
    }

    getUsers(data, callBack) {
        this.db.select()
            .table('roles').where('role_id', 1).first()
            .then((result) => {
                return callBack(null, result);
            }).catch(function (error) {
                return callBack(error);
            })
    }

    createUser(data, callBack) {
        let users = {
            name: data.name,
            user_name: data.username,
            password: data.password,
            email: data.email,
            phone: data.phone
        };
        this.db.insert(users).into('administrator')
            .then((results) => {
                return callBack(null, results);
            })
            .catch((error) => {
                return callBack(error)
            })
    }

    userFind(user, table, column, callBack) {
        //console.log("'" + user + "'");
        this.db.count('id as idCount')
            .table(table)
            .where(column, user).first()
            .then((result) => {
                return callBack(null, result)
            })
            .catch((error) => {
                return callBack(null, error)
            })
    }


    findUserByEmail(email, callback) {
        this.db.select()
            .from('administrator')
            .where('email', email)
            .first()
            .then((result) => {
                return callback(null, result)
            }).catch((error) => {
                return callback(error)
            })
    }


}

module.exports = Users
const { check, oneOf, validationResult } = require('express-validator');
const db = require('../../db/db');


const createUserValidation = [
    check('password').isLength({ min: 8, max: 12 }).withMessage('Password min 8 and max length 12 length'),
    check('email').isEmail().withMessage('PLease enter valid email address')
        .custom(value => {
            return db.count('id as idCount')
                .table('administrator')
                .where('email', value).first()
                .then((result) => {
                    if (result['idCount'] > 0) {
                        return Promise.reject('E-mail already in use');
                    }
                })
        }),
    check('username').not().isEmpty().withMessage('User name not be empty')
        .custom(value => {
            return db.count('id as idCount')
                .table('administrator')
                .where('user_name', value).first()
                .then((result) => {
                    if (result['idCount'] > 0) {
                        return Promise.reject('User name already in use');
                    }
                })
        })
        .isLength({ min: 6, max: 30 }).withMessage('User name atleast 6 length')
        .escape()
        .trim(),

    check('name').not().isEmpty().withMessage('User name not be empty')
        .escape()
        .trim(),


    (req, res, next) => {
        try {
            validationResult(req).throw();

            next()
        } catch (err) {
            res.status(422).json(err);
        }
    }
]

module.exports = createUserValidation
const UserController = require('../../controllers/users/UserController');

const userController = new UserController();

const router = require('express').Router();


// validation create user
const createUserValidation = require('../../validations/users/createUserValidations');
router.post('/create', createUserValidation, userController.create);

// get users router
router.get('/getUsers', userController.getUsers);

module.exports = router;
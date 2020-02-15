const router = require('express').Router();

const Roles = require('.././../controllers/roles/roles.controller');
const  role = new Roles();
router.get('/get', role.getRoles);

// roles validations
const role_validation = require('../../validations/roles/roles.validations');
router.post('/create', role_validation, role.create);

module.exports = router;
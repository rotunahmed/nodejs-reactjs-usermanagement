const Admin = require('../../controllers/authentication/admin.controller')
const router = require('express').Router();

const administrator = new Admin();

router.post('/admin', administrator.authentication);

module.exports = router;
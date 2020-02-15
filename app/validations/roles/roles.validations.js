const { check, oneOf, validationResult } = require('express-validator');
const db = require('../../db/db');


module.exports = role_validation = [
 check('name')
	 .isString()
	 .not()
	 .isEmpty()
	 .escape()
	 .custom(value => {
	 	return db.count('role_id as idCount')
		    .table('roles')
		    .where('role_name', value)
		    .first()
		    .then((result)=>{
		    	if (result['idCount'] > 0){
				    if (result['idCount'] > 0) {
					    return Promise.reject(value +' already exists');
				    }
			    }
		    })
	 }),
check('state').isNumeric()
];
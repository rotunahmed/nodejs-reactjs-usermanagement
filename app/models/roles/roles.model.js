const Model = require('../Model');


class Role extends Model{
	constructor() {
		super();
	}
	
	
	createRole(data, callback){
		let roles = {
			role_name:data.name,
			role_state:data.state
		};
		this.db.insert(roles)
			.table('roles')
			.then((result)=>{
				return callback(null, result);
			}).catch((error) =>{
				return callback(error)
		})
	}
	
	
	
	getRoles(data, callback){
		this.db.select()
			.from(`roles`)
			.then((results) =>{
				return callback(null,results);
			}).catch((error)=>{
				return callback(error);
		})
	}
}

module.exports = Role;
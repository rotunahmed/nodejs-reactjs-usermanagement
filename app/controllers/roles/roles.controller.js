const Controller = require('../Controller');

const  R = require('../../models/roles/roles.model');

const  Role = new R();

class Roles extends Controller {
    constructor() {
        super()
    }
    
    
    create(req, res){
        const  data = req.body;
        Role.createRole(data, (error, result)=>{
            if (error) {
                return res.status(500).json({
                    status: 300,
                    message: error
                })
            } else {
                return res.status(200).json({
                    status: 200,
                    data: result,
                    message: 'Roles has been created'
                })
            }
        })
    }
    
    
    getRoles(req, res){
        const body = req.body;
        Role.getRoles(body, (error, result) =>{
            if (error) {
                return res.status(500).json({
                    status: 300,
                    message: error
                })
            } else {
                return res.status(200).json({
                    status: 200,
                    data: result
                })
            }
        })
    }
    
}

module.exports = Roles;
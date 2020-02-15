require('dotenv').config();
let environment = process.env.ENVIRONMENT;
let config = require("../../knexfile")[environment];

module.exports = require("knex")(config);


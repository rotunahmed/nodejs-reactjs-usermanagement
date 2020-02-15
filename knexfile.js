require('dotenv').config();
module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.DATABASE
        },
        migrations: {
            directory: __dirname + "/app/db/migrations"
        },
        seeds: {
            directory: __dirname + "/app/db/seeds"
        }
    },
    production: {
        client: "mysql",
        connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.DATABASE
        },
        migrations: {
            directory: __dirname + "/app/db/migrations"
        },
        seeds: {
            directory: __dirname + "/app/db/seeds"
        }
    }
}
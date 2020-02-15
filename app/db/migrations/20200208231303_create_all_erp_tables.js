
exports.up = function (knex) {
    return knex.schema
        .createTable('roles', function (table) {
            table.increments('role_id').primary();
            table.string('role_name').notNullable().unique();
            table.boolean('role_state').defaultTo(false);
        })
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('username', 255).notNullable().unique();
            table.string('password', 255).notNullable();
            table.string('email', 255).notNullable().unique();
            table.boolean('banned').defaultTo(false);
            table.boolean('is_delete').defaultTo(false);
            table.boolean('activated').defaultTo(false);
            table.integer('role_id', 10).unsigned().references('role_id').inTable('roles');
            table.integer('create_by').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })

        .createTable('access_permission', function (table) {
            table.increments('id').primary();
            table.integer('role_id').unsigned().references('role_id').inTable('roles');
            table.json('permissions').default('*');
        })
        .createTable('user_info', function (table) {
            table.increments('id').primary();
            table.string('first_name', 255);
            table.string('last_name');
            table.string('father_name', 255);
            table.string('mother_name');
            table.string('national_id', 255).notNullable();
            table.string('email');
            table.string('phone_number');
            table.integer('age', 10);
            table.enum('sex', ['F', 'M', 'S']).notNullable();
            table.text('address');
            table.string('profile_image');
            table.string('website');
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('modules', function (table) {
            table.increments('id').primary();
            table.string('module_name', 200).unique().notNullable();
            table.integer('parent_id', 10).notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());

        })
};

exports.down = function (knex) {
    return knex
        .schema
        .dropTable('users')
        .dropTable('modules')
        .dropTable('access_permission')
        .dropTable('roles')
        .dropTable('users');
};

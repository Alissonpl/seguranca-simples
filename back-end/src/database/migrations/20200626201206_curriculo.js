exports.up = function(knex) {

    return knex.schema.createTable('curriculo', function (table){
        table.increments('id').primary();
        table.string('nome', 30).notNullable();
        table.string('email', 30).notNullable();
        table.string('experiencia', 1000).notNullable();
    });       
    
 
};

exports.down = function(knex) {
 return knex.schema.dropTable('curriculo');
};
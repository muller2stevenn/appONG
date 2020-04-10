exports.up = function(knex) { //criação das tabelas
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) { //rollback se der merda na criação
    return knex.schema.dropTable('ongs');
};

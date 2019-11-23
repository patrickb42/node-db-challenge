import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable('thing', (tbl) => {
      tbl.increments();
    }).createTable('other thing', (tbl) => {
      tbl.increments();
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTableIfExists('thing')
    .dropTableIfExists('other thing');
}

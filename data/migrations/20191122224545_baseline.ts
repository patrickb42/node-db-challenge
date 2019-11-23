import * as Knex from 'knex';

const up = (knex: Knex) => knex.schema
  .createTable('thing', (tbl) => {
    tbl.increments();
  }).createTable('other thing', (tbl) => {
    tbl.increments();
  });

const down = (knex: Knex) => knex.schema
  .dropTableIfExists('thing')
  .dropTableIfExists('other thing');

export { up, down };

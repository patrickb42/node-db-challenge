import * as Knex from 'knex';

const makeProjectsTable = async (knex: Knex) => knex.schema.createTable('projects', (tbl) => {
  tbl.increments();
  tbl.string('name', 128)
    .notNullable();
  tbl.string('description', 1000);
  tbl.boolean('completed')
    .defaultTo(false);
});

const makeResourcesTable = async (knex: Knex) => knex.schema.createTable('resources', (tbl) => {
  tbl.increments();
  tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects');
  tbl.string('name', 128)
    .notNullable();
  tbl.string('description', 1000);
});

const makeTasksTable = async (knex: Knex) => knex.schema.createTable('tasks', (tbl) => {
  tbl.increments();
  tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects');
  tbl.string('description', 1000)
    .notNullable();
  tbl.string('notes', 5000);
  tbl.boolean('completed')
    .defaultTo(false);
});


export async function up(knex: Knex): Promise<any> {
  await makeProjectsTable(knex);
  await makeResourcesTable(knex);
  await makeTasksTable(knex);
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
}

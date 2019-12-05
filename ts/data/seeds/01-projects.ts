import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('projects').insert([
    {
      id: 1, // the id is completely optional since this is an auto-incrementing key
      name: 'name 1',
      description: 'description 1',
      completed: false, // completed is completely optional because it defaults to false
    },
    {
      name: 'name 2',
      description: 'description 2',
      completed: false,
    },
    {
      id: 3,
      name: 'name 3',
      description: 'description 3',
    },
    {
      name: 'name 4',
      description: 'description 4',
    },
    {
      id: 5,
      name: 'name 5',
      description: 'description 5',
      completed: true,
    },
    {
      name: 'name 6',
      description: 'description 6',
      completed: true,
    },
  ]);
}

export default {};

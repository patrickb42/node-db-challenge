import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('resources').insert([
    {
      id: 1,
      name: 'name 1',
      description: 'description 1',
    },
    {
      name: 'name 2',
      description: 'description 2',
    },
    {
      name: 'name 3',
      description: 'description 3',
    },
    {
      name: 'name 4',
      description: 'description 4',
    },
    {
      name: 'name 5',
      description: 'description 5',
    },
    {
      name: 'name 6',
      description: 'description 6',
    },
  ]);
}

export default {};

import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('tasks').insert([
    {
      id: 1,
      project_id: 2,
      description: 'description 1',
      notes: 'notes 1',
      completed: false,
    },
    {
      project_id: 3,
      description: 'description 2',
      notes: 'notes 2',
    },
    {
      project_id: 3,
      description: 'description 3',
      notes: 'notes 3',
      completed: false,
    },
    {
      project_id: 4,
      description: 'description 4',
      notes: 'notes 4',
    },
    {
      project_id: 4,
      description: 'description 5',
      notes: 'notes 5',
      completed: true,
    },
  ]);
}

export default {};

import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('projects_resources').insert([
    {
      project_id: 2,
      resource_id: 2,
    },
    {
      project_id: 3,
      resource_id: 3,
    },
    {
      project_id: 3,
      resource_id: 4,
    },
    {
      project_id: 4,
      resource_id: 3,
    },
    {
      project_id: 4,
      resource_id: 4,
    },
    {
      project_id: 5,
      resource_id: 5,
    },
    {
      project_id: 6,
      resource_id: 5,
    },
  ]);
}

export default {};

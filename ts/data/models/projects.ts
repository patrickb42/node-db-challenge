import { Project } from '../../types';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';
import { basicModelTemplate } from './basicModelTemplate';

export default basicModelTemplate<Project>({
  tableName: 'projects',
  preprocessData: (data) => convertObjectCamelToSnake({ obj: data }),
  processResult: (result) => ({
    ...convertObjectSnakeToCamel<Project>({ obj: result }),
    completed: !!result.completed,
  }),
});

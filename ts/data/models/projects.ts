import { Project } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

export default basicModelTemplate<Project>({
  tableName: 'projects',
  preprocessData: (data) => convertObjectCamelToSnake({ obj: data }),
  processResult: (result) => ({
    ...convertObjectSnakeToCamel({ obj: result }),
    completed: !!result.completed,
  }),
});

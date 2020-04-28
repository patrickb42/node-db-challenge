import { Task } from '../../types';
import { basicModelTemplate } from './basicModelTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

export default basicModelTemplate<Task>({
  tableName: 'tasks',
  preprocessData: (data) => convertObjectCamelToSnake({ obj: data }),
  processResult: (result) => ({
    ...convertObjectSnakeToCamel<Task>({ obj: result }),
    completed: !!result.completed,
  }),
});

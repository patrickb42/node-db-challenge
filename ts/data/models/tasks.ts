import { Task } from '../../types';
import { basicTemplate } from './basicTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

export default basicTemplate<Task>({
  tableName: 'tasks',
  preprocessData: (data) => convertObjectCamelToSnake({ obj: data }),
  processResult: (result) => ({
    ...convertObjectSnakeToCamel({ obj: result }),
    completed: !!result.completed,
  }),
});

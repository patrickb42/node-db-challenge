import { Task } from '../../types';
import { basicTemplate } from './basicTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

export default basicTemplate<Task>({
  tableName: 'tasks',
  preprocessData: (data) => convertObjectCamelToSnake(data),
  processResult: (result) => {
    return {
      ...convertObjectSnakeToCamel(result),
      completed: !!result.completed,
    };
  },
});

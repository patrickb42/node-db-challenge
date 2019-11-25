import { Project } from '../../types';
import { basicTemplate } from './basicTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

export default basicTemplate<Project>({
  tableName: 'projects',
  preprocessData: (data) => convertObjectCamelToSnake(data),
  processResult: (result) => {
    return {
      ...convertObjectSnakeToCamel(result),
      completed: !!result.completed,
    };
  },
});

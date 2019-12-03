import { Project } from '../../types';
import { basicTemplate } from './basicTemplate';
import { convertObjectCamelToSnake, convertObjectSnakeToCamel } from '../../utils';

export default basicTemplate<Project>({
  tableName: 'projects',
  preprocessData: (data) => convertObjectCamelToSnake({ obj: data }),
  processResult: (result) => ({
    ...convertObjectSnakeToCamel({ obj: result }),
    completed: !!result.completed,
  }),
});

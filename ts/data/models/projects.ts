import { Project } from '../../types';
import { basicTemplate } from './basicTemplate';

export default basicTemplate<Project>({
  tableName: 'projects',
  processData: (data) => {
    return {
      ...data,
      completed: !!data.completed,
    };
  },
});

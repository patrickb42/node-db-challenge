import { Task } from '../../types';
import { basicTemplate } from './basicTemplate';

export default basicTemplate<Task>({
  tableName: 'task',
  processData: (data) => {
    return {
      ...data,
      completed: !!data.completed,
    };
  },
});

import { Task } from '../../types';
import { basicTemplate } from './basicTemplate';

export default basicTemplate<Task>({ tableName: 'tasks' });

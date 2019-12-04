import { basicCRUDRouteTemplate } from './basicCRUDRouteTemplate';
import { Tasks } from '../data/models';
import { validateTask, verifyTaskId } from '../middleware';


export const router = basicCRUDRouteTemplate({
  basicModel: Tasks,
  itemName: 'task',
  itemValidator: validateTask,
  itemIdVerifier: verifyTaskId,
});

export default {};

import { basicItemVerifierTemplate } from './basicItemVerifierTemplate';
import { Tasks } from '../data/models';


export const verifyTaskId = basicItemVerifierTemplate({
  itemName: 'task',
  getItemFromDb: Tasks.get,
});

export default {};

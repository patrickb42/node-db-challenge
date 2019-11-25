import { basicItemVerifierTemplate } from './basicItemVerifierTemplate';
import { Projects } from '../data/models';


export const verifyProjectId = basicItemVerifierTemplate({
  itemName: 'project',
  getItemFromDb: Projects.get,
});

export default {};

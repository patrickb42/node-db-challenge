import { basicItemVerifierTemplate } from './basicItemVerifierTemplate';
import { Resources } from '../data/models';


export const verifyResourceId = basicItemVerifierTemplate({
  itemName: 'sesource',
  getItemFromDb: Resources.get,
});

export default {};

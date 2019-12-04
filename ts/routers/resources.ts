import { basicCRUDRouteTemplate } from './basicCRUDRouteTemplate';
import { Resources } from '../data/models';
import { validateResource, verifyResourceId } from '../middleware';


export const router = basicCRUDRouteTemplate({
  basicModel: Resources,
  itemName: 'resource',
  itemValidator: validateResource,
  itemIdVerifier: verifyResourceId,
});

export default {};

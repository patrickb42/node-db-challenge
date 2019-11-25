import * as Express from 'express';

import { basicCRUDRouteTemplate } from './basicCRUDRouteTemplate';
import { Resources } from '../data/models';
import { validateResource } from '../middleware';
import { verifyResourceId } from '../middleware';


export const router = basicCRUDRouteTemplate({
  basicModel: Resources,
  itemName: 'resource',
  itemValidator: validateResource,
  itemIdVerifier: verifyResourceId,
});

export default {};

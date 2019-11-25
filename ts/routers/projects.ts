import * as Express from 'express';

import { basicCRUDRouteTemplate } from './basicCRUDRouteTemplate';
import { Projects } from '../data/models';
import { validateProject } from '../middleware';
import { verifyProjectId } from '../middleware';


export const router = basicCRUDRouteTemplate({
  basicModel: Projects,
  itemName: 'project',
  itemValidator: validateProject,
  itemIdVerifier: verifyProjectId,
});

export default {};

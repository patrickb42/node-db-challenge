import * as Express from 'express';

import { basicCRUDFunctionsTemplate } from './basicCRUDFunctionsTemplate';


interface BasicCRUDRouteTemplateArg {
  basicModel,
  itemName: string,
  itemValidator,
  itemIdVerifier,
}

export const basicCRUDRouteTemplate = ({
  basicModel,
  itemName,
  itemValidator,
  itemIdVerifier,
}: BasicCRUDRouteTemplateArg) => {
  const router = Express.Router();
  const {
    get,
    getById,
    post,
    put,
    del,
  } = basicCRUDFunctionsTemplate({ basicModel, itemName });

  router.get('/', get);
  router.get('/:id', itemIdVerifier, getById);
  router.post('/', itemValidator, post);
  router.put('/:id', itemIdVerifier, itemValidator, put);
  router.delete('/:id', del);

  return router;
};

export default {};

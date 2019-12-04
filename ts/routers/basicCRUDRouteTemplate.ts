import * as Express from 'express';

import { basicRESTCallTemplate } from './basicRESTCallTemplate';

interface BasicCRUDRouteTemapleArg {
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
}: BasicCRUDRouteTemapleArg) => {
  const router = Express.Router();

  const get = (req: Express.Request, res: Express.Response) => {
    basicRESTCallTemplate({
      dbOperation: basicModel.get,
      dbOperationArg: {},
      operationFailed: (result: []) => (result.length === 0),
      operationFailureCode: 204,
      operationFailureObject: { message: `no ${itemName}s found` },
      opperationSuccessCode: 200,
      operationErrorMessage: `error getting ${itemName}s`,
    })(req, res);
  };

  const getById = (req: Express.Request, res: Express.Response) => res
    .status(200).json(req[itemName]);

  const post = (req: Express.Request, res: Express.Response) => {
    basicRESTCallTemplate({
      dbOperation: basicModel.insert,
      dbOperationArg: { item: req[itemName] },
      operationFailed: (result) => (result === undefined),
      operationFailureCode: 500,
      operationFailureObject: { message: `${itemName} not added due to server error` },
      opperationSuccessCode: 201,
      operationErrorMessage: `error adding ${itemName}`,
    })(req, res);
  };

  const put = (req: Express.Request, res: Express.Response) => {
    const { id } = req.params;

    basicRESTCallTemplate({
      dbOperation: basicModel.update,
      dbOperationArg: { id, changes: req[itemName] },
      operationFailed: (result) => (result === undefined),
      operationFailureCode: 500,
      operationFailureObject: { message: `error updating ${itemName} is id ${id}` },
      opperationSuccessCode: 200,
      operationErrorMessage: `error updating ${itemName} by id ${id}`,
    })(req, res);
  };

  const del = (req: Express.Request, res: Express.Response) => {
    const { id } = req.params;

    basicRESTCallTemplate({
      dbOperation: basicModel.remove,
      dbOperationArg: { id },
      operationFailed: () => (false),
      operationFailureCode: 404,
      operationFailureObject: { message: 'this code should never be reached' },
      opperationSuccessCode: 200,
      operationErrorMessage: `error deleting ${itemName} by id ${id}`,
    })(req, res);
  };


  router.get('/', get);
  router.get('/:id', itemIdVerifier, getById);
  router.post('/', itemValidator, post);
  router.put('/:id', itemIdVerifier, itemValidator, put);
  router.delete('/:id', del);

  return router;
};

export default {};

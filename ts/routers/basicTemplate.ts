import * as Express from 'express';

interface BasicTemplateArgs {
  dbOperation: (args: Object) => any,
  dbOperationArg?: Object,
  operationFailed: (args: Object) => boolean,
  operationFailureCode: number,
  operationFailureObject: {
    message: string,
  },
  opperationSuccessCode: number,
  operationErrorMessage: string,
}

const basicTemplate = ({
  dbOperation,
  dbOperationArg = {},
  operationFailed,
  operationFailureCode,
  operationFailureObject,
  opperationSuccessCode,
  operationErrorMessage,
}: BasicTemplateArgs) => async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await dbOperation(dbOperationArg);
    return (operationFailed(result))
      ? res.status(operationFailureCode).json(operationFailureObject)
      : res.status(opperationSuccessCode).json(result);
  } catch (error) {
    return res.status(500).json({
      error: operationErrorMessage,
      message: error.message,
    });
  }
};

export { basicTemplate };
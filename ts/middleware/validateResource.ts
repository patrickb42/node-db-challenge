import * as Express from 'express';

import { Resource, ValidatedResourceRequest } from '../types';

export const validateResource = (
  req: ValidatedResourceRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const { name, description }: Resource = req.body;

  req.resource = { name, description };
  return (name === undefined)
    ? res.status(400).json({ message: 'Resources must have a name' })
    : next();
};

export default {};

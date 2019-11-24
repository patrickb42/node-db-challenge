import * as Express from 'express';

import { Project, ValidatedProjectRequest } from '../types';

export const validateProject = (
  req: ValidatedProjectRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const { name, description, completed }: Project = req.body;

  req.project = { name, description, completed };
  return (name === undefined)
    ? res.status(400).json({ message: 'Projects must have a name' })
    : next();
};

export default { validateProject };

import * as Express from 'express';

import { Task, ValidatedTaskRequest } from '../types';

export const validateProject = (
  req: ValidatedTaskRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const { description, notes, completed }: Task = req.body;

  req.task = { description, notes, completed };
  return (description === undefined)
    ? res.status(400).json({ message: 'Tasks must have a description' })
    : next();
};

export default { validateProject };

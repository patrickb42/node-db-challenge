import * as Express from 'express';

import { Task, ValidatedTaskRequest } from '../types';

export const validateTask = (
  req: ValidatedTaskRequest,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const {
    projectId,
    description,
    notes,
    completed,
  }: Task = req.body;

  req.task = {
    projectId,
    description,
    notes,
    completed,
  };
  return (projectId === undefined
          || description === undefined)
    ? res.status(400).json({ message: 'Tasks must have a projectId and description' })
    : next();
};

export default {};

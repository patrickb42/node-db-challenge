import * as Express from 'express';
import * as Helmet from 'helmet';

import {
  // projectsRouter,
  // resourcesRouter,
  tasksRouter,
} from './routers';

const server = Express();

server.use(Helmet());
server.use(Express.json());

// server.use('/api/projects', projectsRouter);
// server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

export default server;

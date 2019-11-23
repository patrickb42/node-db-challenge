import * as Express from 'express';
import * as Helmet from 'helmet';

const server = Express();

server.use(Helmet());
server.use(Express.json());

export default server;

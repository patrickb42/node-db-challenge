import * as express from 'express';
import * as helment from 'helmet';

const server = express();

server.use(helment());
server.use(express.json());

export default server;

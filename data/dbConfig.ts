import * as Knex from 'knex';

import * as config from '../knexfile';

export default Knex(config.development);

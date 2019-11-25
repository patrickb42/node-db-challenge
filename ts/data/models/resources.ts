import { Resource } from '../../types';
import { basicTemplate } from './basicTemplate';

export default basicTemplate<Resource>({
  tableName: 'resources',
});

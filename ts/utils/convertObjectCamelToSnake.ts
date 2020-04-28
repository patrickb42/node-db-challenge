import { camelCaseToSnakeCase } from './camelCaseToSnakeCase';


interface ConvertObjectCamelToSnakeArg {
  obj: {},
}

export const convertObjectCamelToSnake = <T>({ obj }: ConvertObjectCamelToSnakeArg) => Object
  .keys(obj).reduce((acc, key) => {
    acc[camelCaseToSnakeCase({ string: key })] = obj[key];
    return acc;
  }, {}) as T;

export default {};

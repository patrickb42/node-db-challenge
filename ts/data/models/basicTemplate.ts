import db from '../dbConfig';


interface ModelTemplateArg {
  tableName: string,
  processData?: (data) => any,
}

export const basicTemplate = <T>({
  tableName,
  processData = async (data) => data,
}: ModelTemplateArg) => {
  interface GetArg {
    id?: number;
  }

  const get = ({ id }: GetArg = {}) => {
    return (id === undefined)
      ? db(tableName)
        .then((data) => data.map(processData))
      : db(tableName)
        .where('id', id)
        .then((data) => processData(data));
  };


  interface InsertArg {
    item: T,
  }

  const insert = ({ item }: InsertArg) => db(tableName)
    .insert(item)
    .first()
    .then((id) => get({ id }));


  interface UpdateArg {
    id: number,
    changes: T,
  }

  const update = ({ id, changes }: UpdateArg) => db(tableName)
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? get({ id }) : null));


  interface RemoveArg {
    id: number,
  }

  const remove = ({ id }: RemoveArg) => db(tableName)
    .where('id', id)
    .del();

  return {
    get,
    insert,
    update,
    remove,
  };
};

export default {};

import db from '../dbConfig';


interface ModelTemplateArg {
  tableName: string,
}

export const basicTemplate = <T>({ tableName }: ModelTemplateArg) => {
  interface GetArg {
    id?: number;
  }

  const get = ({ id }: GetArg = {}) => {
    return (id === undefined)
      ? db(tableName)
      : db(tableName)
        .where('id', id);
  };


  interface InsertArg {
    item: T,
  }

  const insert = ({ item }: InsertArg) => db(tableName)
    .insert(item)
    .then(([id]) => get({ id }));


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

export default { basicTemplate };

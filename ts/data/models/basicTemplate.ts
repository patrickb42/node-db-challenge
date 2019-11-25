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
        .then((data) => (data !== undefined ? data.map(processData) : undefined))
      : db(tableName)
        .where('id', id)
        .first()
        .then((data) => (data !== undefined ? processData(data) : undefined));
  };


  interface InsertArg {
    item: T,
  }

  const insert = ({ item }: InsertArg) => db(tableName)
    .insert(item)
    .then((id) => {
      console.log(id);
      return id;
    })
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

export default {};

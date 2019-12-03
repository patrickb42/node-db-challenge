import * as Express from 'express';


interface BasicItemVerifierTemplateArg {
  itemName: string,
  getItemFromDb,
}

export const basicItemVerifierTemplate = ({
  itemName,
  getItemFromDb,
}: BasicItemVerifierTemplateArg) => async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const { id } = req.params;

  try {
    const result = await getItemFromDb({ id });
    if (result === undefined || result.length === 0) {
      return res.status(404).json({ message: `no ${itemName} found under id ${id}` });
    }
    req[itemName] = result;
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: `error getting ${itemName} by id ${id}`,
    });
  }
  return next();
};

export default {};

import jwt from 'jsonwebtoken';
import { isEmpty } from 'lodash';

export const authGuard = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decodedToken.id;

    if (!userId) {
      res.status(401);

      throw new Error('Unauthorized to access this resource');
    }

    req.body.user = { id: userId };

    next();
  } catch (error) {
    res.status(401);

    throw new Error('Unauthorized to access this resource');
  }
};

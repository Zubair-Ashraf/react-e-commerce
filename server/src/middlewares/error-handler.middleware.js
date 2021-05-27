export const notFound = (req, res, next) => {
  const error = new Error(`Route Not Found`);

  res.status(404);

  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({ message: err.message });
};

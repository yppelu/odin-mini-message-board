import { ErrorRequestHandler, NextFunction, Request, Response } from 'express-serve-static-core';

export default function errorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  res.send('500 Internal Server Error');
}

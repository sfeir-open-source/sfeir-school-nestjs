import { NextFunction, Request, Response } from 'express';

export function cookies(request: Request, response: Response, next: NextFunction) {
  response.cookie('userToken', 'sfeir');
  next();
}

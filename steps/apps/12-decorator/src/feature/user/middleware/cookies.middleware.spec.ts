import { NextFunction, Request, Response } from 'express';
import { cookies } from './cookies.middleware';

describe('CookiesMiddleware', () => {
  let request: Request;
  let response: Response;
  let next: NextFunction;

  beforeEach(() => {
    request = {} as Request;
    response = {
      cookie(name: string, value: string) {
        return;
      },
    } as Response;
    next = () => null;
  });

  test('should set the cookie', () => {
    const cookieSpy = spyOn(response, 'cookie');
    cookies(request, response, next);

    expect(cookieSpy).toHaveBeenCalledTimes(1);
    expect(cookieSpy).toBeCalledWith('userToken', 'sfeir');
  });
});

import { HttpException } from '@nestjs/common';
import { RessourceNotFoundException } from './not-found.exception';

fdescribe('RessourceNotFoundException', () => {
  test('should create a NotFound Exception with an custom message', () => {
    const exception = new RessourceNotFoundException(100);
    expect(exception).toBeInstanceOf(HttpException);
    expect(exception.getStatus()).toEqual(404);
    expect(exception.message).toEqual(`Ressource 100 seems not exist`);
  });
});

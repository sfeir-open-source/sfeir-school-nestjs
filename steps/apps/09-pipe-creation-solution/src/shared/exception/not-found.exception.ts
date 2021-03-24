import { HttpException, HttpStatus } from '@nestjs/common';

export class RessourceNotFoundException<T> extends HttpException {
  constructor(idRessource: T) {
    super(`Ressource ${idRessource} seems not exist`, HttpStatus.NOT_FOUND);
  }
}

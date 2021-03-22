import { Test } from '@nestjs/testing';
import { AppLoggerService } from '../../core/logger/logger.service';
import { Credentials } from './models/user.model';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [AppLoggerService],
    }).compile();

    controller = module.get(UserController);
  });

  test('sshould be defined', () => {
    expect(controller).toBeDefined();
  });

  test('should return a credentials', () => {
    const credentials: Credentials = { mail: 'frizzarin.n@sfeir.com', password: 'sfeir' };
    expect(controller.signInUser(credentials)).toEqual(credentials);
  });
});

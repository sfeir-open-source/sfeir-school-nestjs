import { Test } from '@nestjs/testing';
import { Credentials } from './models/user.model';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
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

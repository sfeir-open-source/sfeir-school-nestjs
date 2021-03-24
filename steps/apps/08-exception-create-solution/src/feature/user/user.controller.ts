import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Credentials } from './models/user.model';

@Controller('api/user')
export class UserController {
  @HttpCode(201)
  @Post('sign-in')
  signInUser(@Body() credentials: Credentials): Credentials {
    return credentials;
  }
}

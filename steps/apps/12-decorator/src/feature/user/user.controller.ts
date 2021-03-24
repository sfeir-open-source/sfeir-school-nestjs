import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Credentials } from './models/user.model';

@Controller('api/user')
export class UserController {
  @HttpCode(201)
  @Post('sign-in')
  signInUser(@Body() credentials: Credentials): Credentials {
    return credentials;
  }

  @Get('token')
  @HttpCode(200)
  getToken(): { token: string } {
    return undefined;
  }
}

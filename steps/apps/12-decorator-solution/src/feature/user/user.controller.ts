import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Cookies } from '../../shared/decorators/cookie.decorator';
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
  getToken(@Cookies('userToken') token: string): { token: string } {
    return { token };
  }
}

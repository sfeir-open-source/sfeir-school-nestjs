import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppLoggerService } from '../../core/logger/logger.service';
import { Cookies } from '../../shared/decorators/cookie.decorator';
import { Credentials } from './models/user.model';

@Controller('api/user')
export class UserController {
  constructor(private readonly loggerService: AppLoggerService) {
    loggerService.setContext('USER_EDNPOINTS');
  }

  @HttpCode(201)
  @Post('sign-in')
  signInUser(@Body() credentials: Credentials): Credentials {
    this.loggerService.log('Authentification User');
    return credentials;
  }

  @Get('token')
  @HttpCode(200)
  getToken(@Cookies('userToken') token: string): { token: string } {
    this.loggerService.log('Fetch Token');
    return { token };
  }
}

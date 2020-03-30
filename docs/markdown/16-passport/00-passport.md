<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Passport

##==##
# Passport
Afin de gérer au mieux la partie authentification de l’application, il est conseillé d’utiliser l’excellente librairie NodeJS Passport.

Il est possible d’utiliser :

* La stratégie Bearer pour de l’auth OAuth 2.0
* La stratégie JWT pour la gestion des tokens

https://docs.nestjs.com/techniques/authentication

##==##
# Bearer strategy (service)
```
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.usersService.findOneByToken(token);
  }
}
```

##==##
# Bearer strategy (strategy)
```
import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(token: string) {
    const user = await this.authService.validateUser(token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

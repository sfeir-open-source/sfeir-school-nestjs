<!-- .slide: class="transition " -->

# Passport

##==##

# Passport
Afin de gérer au mieux la partie authentification de l’application, il est conseillé d’utiliser l’excellente librairie NodeJS Passport.

Il est possible d’utiliser :

* Passport local pour de la connexion login/password
* De la connexion OAuth2
* JWT pour la gestion des tokens

##==##
<!-- .slide: class="with-code" -->

# Install

```npm
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
```

<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Local Auth service

```typescript
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Validate if user passed along with HTTP request
    // is associated with any registered account in the database
    return await this.usersService.findOne(username, password);
  }
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Passport local (strategy)
```typescript
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```
<!-- .slide: class="with-code" -->


##==##
<!-- .slide: class="with-code" -->

# AuthGuard

Utilisation d'une guard permettant d'utiliser la stratégie locale sur une route d'un controller

```typescript
@UseGuards(AuthGuard('local'))
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 13: Passport Local
## Exercice
<br>

### TP/passport
<br>

1. Créer un module auth
2. Créer un service auth
3. Implémenter une méthode validateUser dans le service permettant de vérifier un user par son email.
4. Créer un fichier local.strategy.ts qui valide un user par rapport à la méthode validateUser.
5. Créer un controller auth implémentant la route login et utilisant une AuthGuard avec la stratégie locale
6.Créer un fichier local strategy local.strategy.ts permettant de valider un user

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# SOLUTION

### TP/passport-solution

<!-- .element: class="full-center" -->

<!-- .slide: class="transition " -->

# Exceptions

##==##
# Exceptions
Nest est livré avec une couche d'exceptions intégrée qui est responsable du traitement de toutes les exceptions non gérées dans une application. Lorsqu'une exception n'est pas gérée par votre code d'application, elle est capturée par cette couche, qui envoie ensuite automatiquement une réponse appropriée.

![w-1000 center](./assets/images/g5c62ad2ab9_0_374.png)

##==##
<!-- .slide: class="with-code" -->

# Exception Globale
Cette action est effectuée par un filtre d'exception global intégré, qui gère les exceptions de type HttpException (et ses sous-classes). Lorsqu'une exception n'est pas reconnue (il ne s'agit ni d'une exception HttpException ni d'une classe qui hérite de l'exception HttpException), le client reçoit la réponse JSON par défaut suivante:

```typescript
{
  "statusCode": 500,
  "message": "Internal server error"
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Exception de base
La classe HttpException intégrée est exposée à partir du paquet **@nestjs/common**.

```typescript
@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Exception override
Le constructeur HttpException utilise deux arguments qui déterminent le corps de la réponse JSON et le code d'état de la réponse HTTP.

```typescript
@Get()
async findAll() {
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, 403);
}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Custom Exception
Une exception custom doit hériter de HttpException

```typescript
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
```

Utilisation dans le controller

```typescript
@Get()
async findAll() {
  throw new ForbiddenException();
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="two-column-layout"-->
# Nest Exceptions

##--##
* BadRequestException **(400)**
* UnauthorizedException **(401)**
* NotFoundException **(404)**
* ForbiddenException **(403)**
* NotAcceptableException **(406)**
* RequestTimeoutException **(408)**
* ConflictException **(409)**
* GoneException **(410)**

##--##
* PayloadTooLargeException **(413)**
* UnsupportedMediaTypeException **(415)**
* UnprocessableEntityException **(422)**
* InternalServerErrorException **(500)**
* NotImplementedException **(501)**
* BadGatewayException **(502)**
* ServiceUnavailableException **(503)**
* GatewayTimeoutException **(504)**

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 05: Création d'une exception
## Exercice
<br>

1. Créer une nouvelle route **/error** dans **UsersController**
2. Redéfinir l’exception NotImplementedCustom qui retournera le code **501** avec un message personnalisé
<br>

### git checkout -f step-05

##==##
<!-- .slide: class="with-code" -->

# SOLUTION
```git checkout -f step-05-solution```
<!-- .element: class="full-center" -->









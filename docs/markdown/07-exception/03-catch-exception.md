# Comment catcher un exception pour en modifier le body
- Nest permet de catcher une exception en particulier <br/><br/>
- ... Mais également de catcher toutes les exceptions <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Mais comment ça s'écrit tout ça ??
**Encore et toujours la même philosophie: une classe implémentant ExceptionFilter précédée de l'annotation @Catch** <br/><br/>

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentHost) { }  
}
```
<!-- .element: class="big-code" -->

##==##

# Heu pardon mais c'est quoi l'exception et l'host
- l'exception -> l'exception en cours (NotFoundException, HttpException, etc) <br/><br/>
- l'host -> ici il s'agit du contexte d'exécution de votre application (http, graphql, rpc, webSocket)<br/><br/>
    - switchToHttp() <br/><br/>
    - switchToRps()<br/><br/>
    - switchToWs()

##==##

<!-- .slide: class="with-code inconsolata" -->
# Ok et on fait quoi avec ça ?
```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class RessourceNotFoundExcpetionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentHost) {
    const context = host.switchToHttp() // Ici je choisis le context http puisque API rest
    const request = context.getRequest<Request>(); // Je récupère l'object requête et je caste en Request Express
    const response = context.getResponse<Response>() // Je récupère l'object réponse et je case en Response Express
    
    response.status(400).json({ ...exception, path: request.url })
  }  
}
```
<!-- .element: class="medium-code" -->

##==##

# Alors comment enregistrer notre httpException filter
Une fois de plus de deux manières ;) <br/><br/>

- Propre à une route ou à un controller <br/><br/>
- De manière globale

##==##

<!-- .slide: class="with-code inconsolata" -->
# Propre à une route ou à un controller

```typescript
@UseFilters(new RessourceNotFoundExceptionFilter())
@Controller('api/todos')
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript
@Post()
@UseFilters(new RessourceNotFoundExceptionFilter())
getTodos() {}
```
<!--.element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# De manière globale

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RessourceNotFoundException());
  await app.listen(3000);
}
bootstrap();
```
<!-- .element: class="big-code" -->
<br/><br/>

**Et si cette exception dépend de providers ??**

##==##

<!-- .slide: class="with-code inconsolata" -->
# Il est possible de l'enregistrer comme un provider

```typescript
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: RessourceNotFoundException,
    },
  ],
})
export class AppModule {}
```
<!-- .element: class="medium-code" -->

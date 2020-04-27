<!-- .slide: class="transition " -->

# Exceptions Filters

##==##
# Exception filter
Les exceptions de base répondent déjà à un grand cas d’utilisations. Cependant il peut-être utile d’ajouter d’autres informations comme des logs ou une modification du json de la response.

##==##
<!-- .slide: class="with-code" -->

# http-exception.filter.ts
```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'; 
import { Request, Response } from 'express'; 

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        path: request.url,
      });
  }
}
```

##==##
# Binding exception filter
L’annotation **@UseFilters()** du package **@nestjs/common** permet de catcher l’exception à différents niveaux.

##==##
<!-- .slide: class="with-code" -->

# Sur une action
```typescript
@Post()
@UseFilters(HttpExceptionFilter)
async create(@Body() createDemoDto: CreateDemoDto) {
  throw new ForbiddenException();
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Sur un controller
Utilisation de l’annotation **@UseFilters**

```typescript
@UseFilters(new HttpExceptionFilter())
export class UsersController {}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Au niveau global
```typescript
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Catch'Em All

Il est possible de catch toutes les exceptions en utilisant l’annotation @catch sans paramètres.

```typescript
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
…

const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
…
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 12: Création d'un exception filter
## Exercice
<br>

### TP/exception-filter
<br>

1. Utiliser le CLI pour créer un nouveau service **UsersService**
   ```shell
    $ nest g service users
  ```
2. Créer les méthodes **findByEmail**, **create**, **update** et **delete**
3. Vérifier le bon fonctionnement en testant les controllers avec **console.log(‘...’)**
<br>

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# SOLUTION

### TP/exception-filter-solution

<!-- .element: class="full-center" -->

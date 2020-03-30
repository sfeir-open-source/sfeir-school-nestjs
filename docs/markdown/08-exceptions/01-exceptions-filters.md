<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Exceptions Filters

##==##
# Exception filter
Les exceptions de base répondent déjà à un grand cas d’utilisations. Cependant il peut-être utile d’ajouter d’autres informations comme des logs ou une modification du json de la response.

##==##
# http-exception.filter.ts
```
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
# Sur une action
```
@Post()
@UseFilters(HttpExceptionFilter)
async create(@Body() createDemoDto: CreateDemoDto) {
  throw new ForbiddenException();
}
```

##==##
# Sur un controller
Utilisation de l’annotation **@UseFilters**

```
@UseFilters(new HttpExceptionFilter())
export class UsersController {}
```

##==##
# Au niveau global
```
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```

##==##
# Catch'Em All

Il est possible de catch toutes les exceptions en utilisant l’annotation @catch sans paramètres.

```
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
…

const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
…
}
```

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 06: Création d'un exception filter
## Exercice

<br>
1. Utiliser le CLI pour créer un nouveau service **UsersService**
   ```
    $ nest g service users
  ```
2. Créer les méthodes **findByEmail**, **create**, **update** et **delete**
3. Vérifier le bon fonctionnement en testant les controllers avec **console.log(‘...’)**
<br>

### git checkout -f step-06

##==##
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
  <div class="full-center">git checkout -f step-06-solution</div>



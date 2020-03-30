<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Interceptors

##==##
# Interceptors

Les interceptors sont inspirés de la Programmation Orientée Aspect (AOP).
Ils permettent de faire de la transformation, ajouter de la logique avant/après une méthode ...

![full-width](./assets/images/g5c833a2249_0_311.png)

##==##
# Implémentation

L’interceptor doit implémenter NestInterceptor et définir la méthode intercept.

```
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next
      .handle()
      .pipe(
        tap(() => console.log('After...')),
      );
  }
}
```

##==##
# Sur un controller
Utilisation de l’annotation @UseInterceptors

```
@UseInterceptors(LoggingInterceptor)
export class DemosController {}
```

##==##
# Au niveau global
```
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
```

##==##
# Différents cas d'utilisation

Voici différents cas d’utilisation pour montrer la variété qu’offre les interceptors.

* Modifier les réponses
* Override des exceptions
* Gérer un cache
* Gérer un timeout

##==##
# Modification de la réponse

Modification de la réponse http

```
intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
```

##==##
# Exception override
Il est possible de surcharger une exception

```
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => throwError(new BadGatewayException())),
      );
  }
```

##==##
# Gestion du cache
Exemple simple de gestion du cache (non réaliste)

```
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    if (isCached) {
      return of([]);
    }
    return next.handle();
  }
```

##==##
# Gestion du timeout
Après 5 secondes, le traitement de la demande sera annulé

```
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(5000))
}
```

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 09: Créer un interceptor
## Exercice

<br>
1. Créer un interceptor permettant de logger le temps d’une action et l’attacher au niveau global
    ```
    $ nest g interceptor shared/logging
    ```
2. Créer un interceptor permettant de surcharger les exceptions en ServiceUnavailableException et l’attacher à UsersController
    ```
    $ nest g interceptor shared/override
    ```
<br>

### git checkout -f step-09

##==##
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
  <div class="full-center">git checkout -f step-09-solution</div>









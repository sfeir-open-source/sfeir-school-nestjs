<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Middleware

##==##
# Middleware

Le middleware est une fonction appelée avant le Route Handler. Les fonctions middleware ont accès aux objets requête et réponse, ainsi qu'à la fonction middleware next() dans le cycle requête-réponse de l'application.
![full-width](./assets/images/g5c62ad2ab9_0_268.png)

##==##
# Express Middleware

Les middlewares Nest sont, par défaut, équivalents aux middlewares **Express**. La description suivante de la documentation officielle décrit les capacités du middleware:

* Exécuter tout type de code
* Apporter des modifications aux objets de demande et de réponse
* Terminer le cycle de demande-réponse
* Appeler la fonction middleware suivant dans la pile

Si la fonction middleware en cours ne termine pas le cycle de demande-réponse, elle doit appeler la fonction **next()** pour transmettre le contrôle à la fonction middleware suivant. Sinon, la demande restera bloquée.

https://expressjs.com/fr/guide/using-middleware.html

##==##
# Simple Class Middleware example
Exemple d’un simple logger Middleware dans une classe

```
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
```

##==##
# Utilisation du Middleware
La configuration se fait en utilisant la méthode **configure()** de la classe de module. Les modules qui incluent un middleware doivent implémenter l'interface NestModule. 

```
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UsersModule } from './demos/demos.module';

@Module({
  imports: [DemosModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('demos');
  }
}
```

##==##
# Route spécifique
Il est possible d’appliquer un Middleware uniquement pour une route spécifique et un type de méthode request 

```
configure(consumer: MiddlewareConsumer) {
consumer
  .apply(LoggerMiddleware)
  .forRoutes({ path: 'demos', method: RequestMethod.GET });
}
```

##==##
# Route wildcards
Il est possible d’appliquer un Middleware uniquement pour une route spécifique 

```
forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
```


##==##
# Middleware Consumer
Le MiddlewareConsumer peut aussi prendre en paramètre 1 ou plusieurs controllers

```
configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(DemosController, OtherController);
  }
```
Il est possible d’exclure des routes

```
consumer
  .apply(LoggerMiddleware)
  .exclude(
    { path: 'demos', method: RequestMethod.GET },
    { path: 'demos', method: RequestMethod.POST }
  )
  .forRoutes(DemosController);
```

##==##
# Simple Function Middleware example
Exemple d’un simple logger Middleware dans une fonction (quand aucune dépendance n’est nécessaire)

```
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};

consumer
  .apply(logger)
  .forRoutes(DemosController);
```

##==##
# Multiple Middleware
Il est possible de chaîner plusieurs Middlewares (l’ordre est important)
```
consumer.apply(cors(), helmet(), logger).forRoutes(DemosController);
```

##==##
# Global Middleware
Si nous voulons lier un middleware à toutes les routes, nous pouvons utiliser la méthode use () fournie par l'instance INestApplication
```
const app = await NestFactory.create(ApplicationModule);
app.use(logger);
await app.listen(3000);
```

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 04: Création d'un Middleware
## Exercice

<br>
1. Créer un middleware de logs permettant d’afficher le body de la requête sur les routes du **UsersControllers** sauf le **Post**
   ```
    $ nest g middleware users/logger
  ```
<br>

### git checkout -f step-04

##==##
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
  <div class="full-center">git checkout -f step-04-solution</div>





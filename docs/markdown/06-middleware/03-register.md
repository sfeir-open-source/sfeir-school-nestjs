# Comment enregister son middleware ?
<br><br>

- De manière globale <br><br>
- Sur un ensemble de routes

##==##

<!-- .slide: class="with-code incconsolata" -->
# De manière globale
**L'enregistrement se fait dans le fichier main.ts** 

<br><br>

```typescript
const app = await NestFactory.create(AppModule);
app.use(Cookies);
await app.listen(3000);
```
<!-- .element: class="big-code"-->

##==##

<!--.slide: class="with-code inconsolata"-->
# Sur un ensemble de routes
```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CookiesMiddleWare } from './feature/user/cookieMiddleware';

@Module({
  imports: [UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CookiesMiddleWare)
      .forRoutes(UserController);
  }
}
````
<!--.element: class="big-code" -->
Notes: 
- Il est possible de d'enregistrer plusieurs middleware d'un coup en les séparant pas une virgule
- Il est possible de passer plusieurs controller en les séparant pas une virgule
- Il est possible d'exclure certaines routes en utilisant la fonction exclude

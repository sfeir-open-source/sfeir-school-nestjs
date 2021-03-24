# Qu'est ce qu'un middleware ?
**Un middleware est une fonction appelée avant le route handler et qui a accès à l'objet de requête mais également de réponse**
<br><br>

![h-500](assets/images/school/06-middleware/middleware.png)

##==##

# Les différentes manières d'écrire un middleware
<br><br>

- une classe implémentant l'interface NestMiddleware précédée de la notation @Injectable <br><br>
- une simple fonction <br><br>

##==##

<!--.slide: class="two-column-layout" -->

# Exemple d'illustration
##--##
<!-- .slide: class="with-code inconsolata" -->
<br><br>

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CookiesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```
<!-- .element: class="big-code" -->

##--##
<!-- .slide: class="with-code inconsolata" -->
<br><br>

```typescript
import { Request, Response, NextFunction } from 'express';

export function Cookies(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};
```
<!-- .element: class="big-code" -->

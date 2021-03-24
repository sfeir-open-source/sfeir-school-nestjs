# Qu'est ce qu'un décorator
<br><br>

- Les décorateurs nous viennent d monde javascript <br><br>
- Ce n'est pas  propre à NestJs ni à Angular <br><br>
- De simples fonctions qui réalisent un traitement plus ou moins complexe <br><br>

##==##

# Qu'est ce que nous apporte Nest Js sur ce plan ?

- Ecrire un décorateur en pure JS n'est pas forcément évident <br><br>
- Nest nous apporte une fonction helper pour les écrire plus simplement

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment ça s'écrit ??
<br><br>

```typescript

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
```
<!-- .element class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment les utiliser ?
<br><br>

**Grâce à l'annotation @** <br><br>

```typescript
getTodo(@Cookie('userToken') token: string) { }
```
<!-- .element: class="big-code" -->


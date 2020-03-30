<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Custom decorators

##==##
# Create Decorator
Il est possible de définir ses propres decorator pour notamment rendre le code plus lisible.
```
import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data, req) => {
  return req.user;
});
```

##==##
# Utilisation dans le Controller
On peut alors utiliser l’annotation @User pour directement récupérer le User de la requête.

```
@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}
```

##==##
# Récupération d'une data

Il est possible de récupérer une donnée d’un objet.

```
import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data: string, req) => {
  return data ? req.user && req.user[data] : req.user;
});
```

Et de spécifier exactement quelle donnée on souhaite recevoir.

```
@Get()
async findOne(@User('firstName') firstName: string) {
  console.log(`Hello ${firstName}`);
}
```

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 10: Créer un decorator
## Exercice

<br>
1. Créer un decorator permettant de récupérer l’email dans la “query” de la requête pour trouver un user par email
   ```
    $ nest g decorator users/user
  ```
<br>

### git checkout -f step-10

##==##
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
  <div class="full-center">git checkout -f step-10-solution</div>


<!-- .slide: class="transition" -->

# Services

##==##
# Services
* Le controller à la responsabilité de répondre aux requêtes
* Les traitements sont ensuite délégués à des services spécialisés
* Le décorateur **@Injectable** défini le service comme un provider NestJS et permet via l’injection de dépendance de réutiliser ce dernier


##==##
<!-- .slide: class="with-code" -->

# Injectable
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class DemosService {
  findAll(): any {
    return ‘something’;
  }
}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Module
Enregistrement du service dans le module :

```typescript
@Module({ 
    imports: [], 
    controllers: [AppController, UsersController], 
    providers: [AppService, UsersService], 
})
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Injection de dépendance
Afin de pouvoir utiliser un service dans une autre classe, ce dernier doit être injecté dans le constructor.

```typescript
constructor(private readonly demosService: DemosService) {}
```
<!-- .slide: class="big-code" -->


##==##
# Scope
Par défaut les providers sont des singletons et ont un scope (‘lifetime’) synchronisé avec l’application.
* résolution de dépendance pendant le bootstrap
* destruction à la fermeture de l’application

Il est possible d’avoir des scopes au niveau des requêtes avec une durée de vie différente.


##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 2: Création d’un service
## Exercice
<br>

### TP/service
<br>

1. Utiliser le CLI pour créer un nouveau service **UsersService**
   ```shell
    $ nest g service users
  ```
2. Créer les méthodes **findByEmail**, **create**, **update** et **delete**
3. Vérifier le bon fonctionnement en testant les controllers avec **console.log(‘...’)**

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# SOLUTION

### TP/service-solution

<!-- .element: class="full-center" -->

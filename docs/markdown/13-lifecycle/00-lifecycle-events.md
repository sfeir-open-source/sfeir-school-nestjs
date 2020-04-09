<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Lifecycle Events

##==##
# Events
Après la création d’un composant Injectable ou un Controller, il est possible d’implémenter les évènements suivants.

* **OnModuleInit** : quand le module a été initialisé
* **OnApplicationBootstrap** : quand l’application a été bootstrap et est totalement démarrée
* **OnModuleDestroy** : Avant la destruction du module host
* **OnApplicationShutdown**: à la fermeture de l’application

##==##
<!-- .slide: class="with-code" -->

# Example
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }
}
```
<!-- .slide: class="big-code" -->

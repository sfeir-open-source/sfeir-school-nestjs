# Lifecycle dans Nest Js

Nest Js possède des évènement de lifecycle que l'on peut placer en trois catégories<br><br>

- Initialisation <br><br>
- En cours<br><br>
- Fin du serveur

##==##

# Un beau schéma est toujours plus parlant
![full-center](assets/images/school/13-lifecyles/lifecycle-events.png)

##==##

# Les 5 lifecycles 

- **onModuleInit()** appelé quand les dépendances du modules sont résolues <br><br>
- **onApplicationBootstrap** appelé quand tous les modules ont été correctement initialisé <br><br>
- **onModuleDestroy** appelé une fois que le signal de fin du serveur a été envoyé <br><br>
- **beforeApplicationShutdown** appelé une fois que tous les hooks onModuleDestroy ont été appelé<br><br>
- **onApplicationShutdown** appelé une fois que toutes les connections sont closes<br<br>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Et comment on implémente ça dans le code

**Chaque lifecycle est une interface à implémenter**<br><br>

```typescript
@Injectable()
export class UserService implements OnModuleInit {
  onModuleInit(): void {
    console.log('The module has been initialized');
  }
}
```
<!-- .element: class="big-code" -->

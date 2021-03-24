# Il existe deux types de module
<br><br>

- global <br><br>
- dynamique <br><br>

##==##

# Les Modules Globaux

**A l'instar d'Angular les services sont injectés dans le scope du module** <br><br>

- Rendre les exports "globaux" <br><br>
- Scope Global <br><br>
- Possibilité d'injecter sans obligatoire importer le module

##==##

<!-- .slide: class="with-code inconsolata" -->
# L'écriture d'un module Global

```typescript
import { Module, Global } from '@nestjs/common';
import { TodoService } from './todo.service';

@Global()
@Module({ 
  providers: [TodoService],
  exports: [TodoService]
})
export class DataServiceModule { }
```
<!-- .element: class="big-code"-->

##==##

# Qu'est ce qu'une module dynamique ?
<br><br>

- Module customisable <br><br>
- Possibilité de passer des paramètres <br><br>
- très utile lors de la création de librairie

##==##

<!-- .slide: class="with-code inconsolota" -->
# Comment créer un module dynamique
<br><br>

```typescript
import { Module } from '@nestjs/common';

@Module()
export class AppModule {
  forRoot(params: string) {
    return {
      module: AppModule,
      providers: [{ provide: 'current-user', useValue: params }]
    }}}
```
<!-- .element: class="big-code" -->

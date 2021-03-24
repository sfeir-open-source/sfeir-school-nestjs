# L'apect modulaire est très important

- un module par fonctionnalité (endpoint) <br><br>
- un shared module <br><br>
- un core module <br><br>
- assure la haute scalabilité de l'architecture

##==##

<!-- .slide: class="with-code inconsolata"-->
# Qu'est ce qu'un module ?

**Un module est une classe précédée par l'annotation @Module** <br><br>

```typescript
import { Module } from '@nestjs/common';

@Module({
  imports: [ /* import here another module */ ],
  controllers: [/* import here controller of your module */],
  providers: [/* import here providers of your module */],
  exports: [/* export what must export your module */]  
})
export class AppModule { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->
# Où s'importe un module ?

**Un module s'importe toujours dans le tableau des imports d'un autre module** <br><br>

```typescript
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule]  
})
export class AppModule { }
```
<!-- .element: class="big-code" -->

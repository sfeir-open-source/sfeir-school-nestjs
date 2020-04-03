<!-- .slide: class="transition " -->

# Modules

##==##
<!-- .slide: class="with-code" -->

# Modules
Les modules sont des singletons par défaut, ainsi le contenu peut être partagé sans effort à un autre module en utilisant la fonction export.

```typescript
import { Module } from '@nestjs/common';
import { DemosService } from './demos.service';

@Module({
  controllers: [],
  providers: [DemosService],
  exports: [DemosService]
})
export class DemosModule {}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Modules
Il est ainsi possible de ré-exporter des modules

```typescript
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Modules
Les providers sont par défaut restreint au scope du module. 
Pour qu’un ensemble de providers soit disponible à travers toute l’application, l’annotation **@Global** est utilisée

```typescript
import { Module, Global } from '@nestjs/common';
import { DemosService } from './demos.service';

@Global()
@Module({
  controllers: [],
  providers: [DemosService],
  exports: [DemosService],
})
export class DemosModule {}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 3: Création d'un module
## Exercice

<br>
1. Créer un module user et y déclarer le controller et le service
   ```
    $ nest g module users
  ```
2. Référencer le nouveau module dans le module principal
<br>

### git checkout -f step-03

##==##
<!-- .slide: class="" -->

# SOLUTION
```git checkout -f step-03-solution```
<!-- .element: class="full-center" -->

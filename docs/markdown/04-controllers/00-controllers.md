<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Controllers

##==##
# Controllers
Responsable du traitement des **requêtes http** entrantes et du renvoi des **réponses http** au client.

![full-width](./assets/images/g59af2e18c1_0_79.png)


##==##
<!-- .slide: class="with-code" -->

# Controllers
* Décorateur **@Controller** indiquant la route
* Décorateur **@Get**, **@Post**, **@Put**, **@Delete**… décrivant la méthode http de l’action
* L’action qui est la méthode du controller

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('demos')
export class DemosController {
  @Get()
  findAll(): string {
    return 'This action returns all demos;
  }
}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Controllers
Le controller doit être déclaré dans le module

```typescript
@Module({ 
    imports: [], 
    controllers: [AppController, DemosController], 
    providers: [AppService], 
}) 
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# CRUD (POST)
En utilisant le DTO suivant (create-demo.dto.ts):

```typescript
export class CreateDemoDto {
  readonly name: string;
  readonly surname: string;
  readonly age: number;
}
```

```typescript
@Post()
async create(@Body() createDemoDto: CreateDemoDto) {
  return 'This action adds a new demo';
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# CRUD (GET)
```typescript
  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all demos (limit: ${query.limit} demos)`;
  }
```

```typescript
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} demo`;
  }
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# CRUD (PUT)
```typescript
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return `This action updates a #${id} demo`;
  }
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# CRUD (DELETE)
```typescript
 @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} demo`;
  }
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Asynchrone
```typescript
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```

```typescript
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Global Prefix

Dans le **main.ts** il est possible d’ajouter un prefix d’api global

```typescript
app.setGlobalPrefix('api');
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 1: Création d’un controller
## Exercice

<br>
1. Utiliser le CLI pour créer un nouveau controller **UsersController**
   ```
    $ nest g controller users
  ```
2. Créer les DTO **CreateUserDto** et **UpdateUserDto**
3. Créer les méthodes **Get**, **Post**, **Put**, **Delete** correspondant au **step-01** du fichier Postman
<br>

### git checkout -f step-01

##==##
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
```git checkout -f step-01-solution```
<!-- .element: class="full-center" -->


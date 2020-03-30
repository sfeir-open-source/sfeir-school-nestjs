<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Controllers

##==##
# Controllers

Responsable du traitement des **requêtes http** entrantes et du renvoi des **réponses http** au client.

![full-width](./assets/images/g59af2e18c1_0_79.png)


##==##
# Controllers

* Décorateur **@Controller** indiquant la route
* Décorateur **@Get**, **@Post**, **@Put**, **@Delete**… décrivant la méthode http de l’action
* L’action qui est la méthode du controller

```
import { Controller, Get } from '@nestjs/common';

@Controller('demos')
export class DemosController {
  @Get()
  findAll(): string {
    return 'This action returns all demos;
  }
}
```

##==##
# Controllers

Le controller doit être déclaré dans le module

```
@Module({ 
    imports: [], 
    controllers: [AppController, DemosController], 
    providers: [AppService], 
}) 
```

##==##
# CRUD (POST)
En utilisant le DTO suivant (create-demo.dto.ts):

```
export class CreateDemoDto {
  readonly name: string;
  readonly surname: string;
  readonly age: number;
}
```

```
@Post()
async create(@Body() createDemoDto: CreateDemoDto) {
  return 'This action adds a new demo';
}
```

##==##
# CRUD (GET)
```
  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all demos (limit: ${query.limit} demos)`;
  }
```

```
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} demo`;
  }
```

##==##
# CRUD (PUT)
```
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return `This action updates a #${id} demo`;
  }
```

##==##
# CRUD (DELETE)
```
 @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} demo`;
  }
```

##==##
# Asynchrone

```
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```

```
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```

##==##
# Global Prefix

Dans le **main.ts** il est possible d’ajouter un prefix d’api global

```
app.setGlobalPrefix('api');
```

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
  <div class="full-center">git checkout -f step-01-solution</div>


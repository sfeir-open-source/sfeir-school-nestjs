<!-- .slide: class="transition " -->

# Swagger

##==##
<!-- .slide: class="with-code" -->

# Install
La spécification OpenAPI (Swagger) est un format de définition puissant pour décrire les API RESTful. Nest fournit un module dédié pour l'utiliser.

```shell
$ npm install --save @nestjs/swagger swagger-ui-express
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Bootstrap
```typescript
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  const options = new DocumentBuilder()
    .setTitle('Demos example')
    .setDescription('The demos API description')
    .setVersion('1.0')
    .addTag('demos')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

##==##
<!-- .slide: class="with-code" -->

# DTO
Chaque propriété du DTO doit être annoté avec @ApiProperty. L’annotation @ApiPropertyOptional permet de définir si un champs est obligatoire ou non.

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreateDemoDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly test: string;
}
```
<!-- .slide: class="big-code" -->


##==##
# Divers
Afin de customiser Swagger, il est possible de :

* Travailler avec des enums
* Travailler avec des tableaux
* Attacher un tag à un controller
* Définir des réponses HTPP custom
* Gérer l’authentification
* Faire de l’upload de fichier

https://docs.nestjs.com/recipes/swagger

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 11: Configuration de swagger
## Exercice
<br>

### TP/swagger
<br>

1. Initialiser swagger sur l'application

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# SOLUTION

### TP/swagger-solution

<!-- .element: class="full-center" -->

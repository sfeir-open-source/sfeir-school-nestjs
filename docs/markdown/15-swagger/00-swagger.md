<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Swagger

##==##
# Install
La spécification OpenAPI (Swagger) est un format de définition puissant pour décrire les API RESTful. Nest fournit un module dédié pour l'utiliser.

```
$ npm install --save @nestjs/swagger swagger-ui-express
```

##==##
# Bootstrap
```
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
# DTO
Chaque propriété du DTO doit être annoté avec @ApiModelProperty. L’annotation @ApiModelPropertyOptional permet de définir si un champs est obligatoire ou non.

```
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDemoDto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly test: string;
}
```

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

# Exercice 12: Configuration de swagger
## Exercice

<br>
1. Initialiser swagger sur l'application
<br>

### git checkout -f step-12

##==##
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
  <div class="full-center">git checkout -f step-12-solution</div>

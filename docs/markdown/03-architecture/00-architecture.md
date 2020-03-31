<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Architecture globale

##==##
<!-- .slide: class="with-code" -->

# Bootstrap

Point d’entrée de l’application **(main.ts)**

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { 
    const app = await NestFactory.create(AppModule); 
    await app.listen(3000); 
} 
bootstrap();

```

##==##
<!-- .slide: class="with-code" -->

# Module 

Module principal de l’application (app.module.ts)

```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ 
    imports: [], 
    controllers: [AppController], 
    providers: [AppService], 
}) 

export class AppModule {}
```

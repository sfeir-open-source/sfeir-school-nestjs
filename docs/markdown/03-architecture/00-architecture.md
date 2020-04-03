<!-- .slide: class="transition" -->

# Architecture globale

##==##
<!-- .slide: class="with-code" -->

# Bootstrap

Point d’entrée de l’application **(main.ts)**

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { 
    const app = await NestFactory.create(AppModule); 
    await app.listen(3000); 
} 
bootstrap();
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Module 

Module principal de l’application (app.module.ts)

```typescript
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
<!-- .slide: class="big-code" -->

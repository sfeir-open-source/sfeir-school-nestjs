<!-- .slide: class="with-code inconsolata" -->
# Bootstraping d'une application Nest
- Avec le CLI et la commande suivante
```bash
nest new my-awesome-back-end
```
<!-- .element: class="big-code" -->

<br/><br/>

- Manuellement avec l'installation des packages suivants:
```bash
npm install --save @nestjs/core @nestjs/common rxjs reflect-metadata
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Bootstrapper manuellement demande beaucoup de travail
- réaliser une configuration typescript <br/><br/>
- réaliser une configuration de dev, prod <br/><br/>
- créer son bootstrapping soit même<br/><br/>

##==##

<!-- .slide: class="two-column with-code inconsolata" -->
## main.ts
```typescript
import { NestFactory } from '@nestjs/core';
import { BootstrapingModule } from './02-bootstraping.module';

async function bootstrap() {
  const app = await NestFactory.create(BootstrapingModule);
  await app.listen(3000);
}

bootstrap().then();
```
<!-- .element: class="medium-code"-->

##--##
## Module et Controller
```typescript
import { Module } from '@nestjs/common';
import { BootstrapingController } from './02-bootstraping.controller';

@Module({
  imports: [],
  controllers: [BootstrapingController],
})
export class BootstrapingModule {}
```
<!-- .element: class="medium-code"-->

<br/><br/>

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller()
export class BootstrapingController {
  @Get()
  getHello(): string {
    return 'Hello students';
  }
}
```
<!-- .element: class="medium-code"-->

##==##

# Qu'apporte de plus CLI

- Tout est déjà configuré :) <br/><br/>
    - config eslint
    - config prettier
    - config de test, de dev et de prod
    
<br/><br/>

**Il ne vous reste plus qu'à coder vos endpoints**



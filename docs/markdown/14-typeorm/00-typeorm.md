<!-- .slide: class="transition " -->

# TypeORM

##==##
<!-- .slide: class="with-code" -->

# Présentation
TypeORM est l’ORM (Object Relational Mapper) le plus mature et a été choisi par défaut par NestJS.

```shell
$ npm install --save @nestjs/typeorm typeorm mysql
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# MySQL
Utilisation d’un fichier de configuration ormconfig.json

```json5
{
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: true
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Import

On peut ensuite importer le module TypeORM
```typescript
@Module({
  imports: [TypeOrmModule.forRoot()],
})

```
Il est alors possible d’injecter Connection et EntityManager à travers tout le projet.
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Entity
Dans le pattern Repository, il faut tout d’abord créer une entity.

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  ...
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Domain Module
Un sous module définissant le domaine permettant d’organiser le projet. forFeature permet d’injecter le repository directement dans le service.

```typescript
import ...

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  providers: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule {}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="with-code" -->

# Service
```typescript
import ...

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>) {}

    findAll(): Promise<School[]> {
      return this.schoolRepository.find();
    }
}
```
<!-- .slide: class="big-code" -->


##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 11: Utilisation de TypeORM (1/2)
## Exercice

<br>
1. Installer MySql ou une image via docker
   ```
    $ docker run --name=mysqlschool -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=school mysql:5.7
  ```
2. Créer une base de donnée mysql avec les scripts présents dans le répertoire sql
3. Configurer typeORM pour la base de données ‘nestschool’
<br>

### git checkout -f step-11

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 11: Utilisation de TypeORM (2/2)
## Exercice

<br>
1. Créer l’entity user “user.entity.ts” avec tous les champs obligatoire sauf l’âge
2. Modifier la méthode getByEmail pour retourner le user en base de donnée
<br>

##==##
<!-- .slide: class="" -->

# SOLUTION
```git checkout -f step-11-solution```
<!-- .element: class="full-center" -->

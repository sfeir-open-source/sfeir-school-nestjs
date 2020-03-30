<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# TypeORM

##==##
# Présentation
TypeORM est l’ORM (Object Relational Mapper) le plus mature et a été choisi par défaut par NestJS.

```
$ npm install --save @nestjs/typeorm typeorm mysql
```

##==##
# MySQL
Utilisation d’un fichier de configuration ormconfig.json

```
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "test",
  "entities": ["src/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```

##==##
# Import

On peut ensuite importer le module TypeORM
```
@Module({
  imports: [TypeOrmModule.forRoot()],
})

```
Il est alors possible d’injecter Connection et EntityManager à travers tout le projet.

##==##
# Entity

Dans le pattern Repository, il faut tout d’abord créer une entity.

```
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

##==##
# Domain Module
Un sous module définissant le domaine permettant d’organiser le projet. forFeature permet d’injecter le repository directement dans le service.

```
import ...

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  providers: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule {}
```

##==##
# Service
```
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
<!-- .slide: class="sfeir-bg-white-4" -->

# SOLUTION
  <div class="full-center">git checkout -f step-11-solution</div>

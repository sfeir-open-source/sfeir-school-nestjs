# Mapped types DTO
<br><br><br>

**Les Mappeds types DTO, permettent de faire de la compositiion de DTO, en utilisant la puissance de typage de typescript**
Notes:
Les Mapped types sont disponibles grâce au package @nestjs/mapped-types

##==##

<!-- .slide: class="with-code inconsolata" -->
# Une énoncé pour mieux comprendre
<br><br>

```typescript
export class Author {
  username: string;
  email: string;
  address: string
}
```
<!-- .element: class="big-code" -->
Notes: Ici tous les champs sont obligatoires

##==##

<!-- .slide: class="with-code inconsolata" -->
# Créer une DTO rendant les champs optionnels
<br><br>

```typescript
export class AuthorOptionnal extends PartialType(Author) {}
```
<!-- .element: class="big-code" -->
Notes: Ici nous créons une classe AuthorOptionnal dont les champs sont ceux de la classe Author mais optionnels

##==##

<!-- .slide: class="with-code inconsolata" -->
# Prendre un champs particulier de la DTO
<br><br>

```typescript
export class Usernane extends PicType(Author, ['username'] as const ) {} 
```
<!-- .element: class="big-code" -->
Notes: Ici nous créons une class Username qui possèdera unqieument le champs username de la classe Author

##==##

<!-- .slide: class="with-code inconsolata" -->
# Exclure un champs en particulier de la DTO
<br><br>

```typescript
export class WithOutAddress extends OmitType(Author, ['address'] as const) {}
```
<!-- .element: class="big-code" -->
Notes: 
Ici nous créons une classe WithOutAddress qui possèdera tous les champs de la classe Author sauf le champs address

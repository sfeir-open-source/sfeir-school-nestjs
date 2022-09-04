<!-- .slide: class="exercice" -->
# 12-injection-scope
## Lab
L'objectif de cet exercice est de créer son propre Logger

Votre Logger doit répondre aux critères suivant
- Votre Logger doit étendre le logger par défaut de Nest JS
- Votre Logger doit avoir un context différent par feature
- Votre Logger doit être utilisé par défaut
- Le Logger doit logger les calls et les erreurs

##==##

<!-- .slide: class="exercice" -->
# 12-injection-scope
## Exercice
Un peu de refactor :)

- Rendre le module Core Global
- Déplacer le fichier not-found-catching.exception.ts dans le dossier core/exception
- Enregistrer le filtre RessourceNotFoundExceptionFilter de manière globale dans le module core
- Supprimer l'enregistrement global de ce filtre dans le main.ts
- Verifier votre travail pour voir s'il a aucune regression

##==##

<!--.slide: class="exercice" -->
# 12-injection-scope
## Lab
Créer votre logger :)

- Dans le dossier core, créer un service qui étend le logger de Nest JS
- Votre Logger doit posséder une instance par Feature
- Enregistrer puis exporter ce provider pour qu'il soit disponible dans toute l'app
- Enregistrer votre logger dans le fichier main.ts

##==##

<!-- .slide: class="exercice" -->
# 12-injection-scope
## Lab
Utiliser votre Logger

- Injecter votre logger dans le TodoService et changer le context de votre logger
- Injecter votre logger dans le UserController et changer le context de votre logger
- Afficher une erreur quand la ressource demandé n'est pas disponible

##==##

<!-- .slide: class="exercice" -->
# 12-injection-scope
## Soluce
**Solution : 12-injection-scope-solution**
<!-- .element: class="full-center" -->

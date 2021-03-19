<!-- .slide: class="exercice" -->
# 12-injection-scope
## Exercice
L'objectif de cet exercice est de créer son propre Logger

Votre Logger doit répondre aux critères suivant: <br><br>
- Votre Logger doit étendre le logger par défaut de Nest JS<br><br>
- Votre Logger doit avoir un context différent par feature<br><br>
- Votre Logger doit être utilisé par défaut<br><br>
- Le Logger doit logger les calls et les erreurs

##==##

<!-- .slide: class="exercice" -->
# 12-injection-scope
## Exercice
Un peu de refactor :) <br><br>

- Rendre le module Core Global <br><br>
- Déplacer le fichier not-found-catching.exception.ts dans le dossier core/exception <br><br>
- Enregistrer le filtre RessourceNotFoundExceptionFilter de manière globale dans le module core<br><br>
- Supprimer l'enregistrement global de ce filtre dans le main.ts<br><br>
- Verifier votre travail pour voir s'il a aucune regression

##==##

<!--.slide: class="exercice" -->
# 12-injection-scope
## Exercice
Créer votre logger :) <br><br>

- Dans le dossier core, créer un service qui étend le logger de Nest JS<br><br>
- Votre Logger doit posséder une instance par Feature<br><br>
- Enregistrer puis exporter ce provider pour qu'il soit disponible dans toute l'app<br><br>
- Enregistrer votre logger dans le fichier main.ts

##==##

<!-- .slide: class="exercice" -->
# 12-injection-scope
## Exercice
Utiliser votre Logger <br><br>

- Injecter votre logger dans le TodoService et changer le context de votre logger<br><br>
- Injecter votre logger dans le UserController et changer le context de votre logger<br><br>
- Afficher une erreur quand la ressource demandé n'est pas disponible<br><br>

##==##

<!-- .slide: class="exercice" -->
# 12-injection-scope
## Solution
**Solution : 13-injection-scope-solution**
<!-- .element: class="full-center" -->

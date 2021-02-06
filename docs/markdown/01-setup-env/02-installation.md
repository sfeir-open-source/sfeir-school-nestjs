<!-- .slide: class="with-code Inconsolata" -->
# Nest js et son CLI
Pour utiliser Nest le plus facilement possible, pensez à installer son CLI

```shell
npm run install -g @nestjs/cli
```
<!-- .element: class="big-code" -->
<br>

![center h-800](assets/images/school/01-setup-env/nest-cli.png)
Notes:
Il est conseillé d'utiliser le CLI de Nest pour bootstraper un projet, cependant il est possible de le faire manuellement en installant les package suivant:
- @nestjs/core
- @nestjs/common
- rxjs
- reflect-metadata

##==##

# Quel IDE choisir ?

- Visual Studio Code <br> <br>
- WebStorm
<br><br><br>
  
![h-300 w-300](assets/images/school/01-setup-env/vscode.png)
![float-right h-300](assets/images/school/01-setup-env/webstorm.png)

##==##

# Bienvenue dans vsode

- Solution proposée par Microsoft<br><br>
- Entièrement customizable, de nombreux plugins<br><br>
- Paramétrer pour en faire un IDE complet prend du temps<br><br>

![h-400 w-400](assets/images/school/01-setup-env/editorconfig.png)
![float-right h-400 w-400](assets/images/school/01-setup-env/prettier.svg)

##==##

# Bienvenue dans Webstorm

- Solution proposée par JetBrains (éditeur d'IDE) <br><br>
- Viens avec tout le nécessaire (debug, tests, support syntaxique pour les frameworks front) <br><br>
- Payant mais très puissant <br><br>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Dependances nécessaires aux tps

Déplacer vous dans le dossier steps et taper la commande suivante:
```shell
npm install
```
<!-- .element: class="big-code" -->

<br>
ou
<br><br>

```shell
npm ci
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment lancer l'exercice d'un TP 

Dans le dossier steps/apps, il y a un dossier par concepts / chapitre

Pour lancer le serveur **Nest** contenu dans ce dossier il vous suffira de lancer la commande suivante dans le dossiers steps <br><br>

```shell
npm run start:dev -- _nom_dossier_dans_apps__
```
<!-- .element: class="big-code" -->

<br><br><br>

## Exemple

```shell
npm run start:dev -- 02-bootstaping
```
<!-- .element: class="big-code" -->

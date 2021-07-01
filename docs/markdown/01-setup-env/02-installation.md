<!-- .slide: class="with-code Inconsolata" -->
# Nest js et son CLI
Pour utiliser Nest le plus facilement possible, pensez à installer son CLI

```shell
npm install -g @nestjs/cli
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

# Bienvenue dans VSCode

- Solution proposée par Microsoft<br><br>
- Entièrement customisable, de nombreux plugins<br><br>
- Paramétrer pour en faire un IDE complet prend du temps<br><br>

![h-400 w-400](assets/images/school/01-setup-env/editorconfig.png)
![float-right h-400 w-400](assets/images/school/01-setup-env/prettier.svg)

##==##

# Bienvenue dans Webstorm

- Solution proposée par JetBrains (éditeur d'IDE) <br><br>
- Vient avec tout le nécessaire (debug, tests, support syntaxique pour les frameworks front) <br><br>
- Payant mais très puissant <br><br>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Bootstrapping de l'application

```bash
git clone https://github.com/sfeir-open-source/sfeir-school-nestjs.git
cd steps && npm i || npm ci
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment lancer l'exercice d'un TP 

Dans le dossier steps/apps, il y a un dossier par concept / chapitre

Pour lancer le serveur **Nest** contenu dans ce dossier il vous suffira de lancer la commande suivante dans le dossiers steps <br><br>

```shell
npm run start -- _nom_dossier_dans_apps__
```
<!-- .element: class="big-code" -->

<br><br><br>

## Exemple

```shell
npm run start -- 02-bootstaping
```
<!-- .element: class="big-code" -->

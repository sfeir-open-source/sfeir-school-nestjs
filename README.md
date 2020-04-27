# NestJS - SFEIR School  
This is a Nest framework TypeScript [SFEIR School](https://www.sfeir.com/formation/school/).

![logo](https://www.sfeir.com/img/school/formations/xxx.png)

[Calendrier des formations, liste des formateurs et programme de formation](https://www.sfeir.com/formation/school/nestjs-200/)

# Slides

You can view the slides [here](https://sfeir-open-source.github.io/sfeir-school-nestjs/).

## Installation

- `git clone https://github.com/sfeir-open-source/sfeir-school-nestjs.git`
- `cd sfeir-school-nestjs/TP`
- `npm install`

## Slides

Les slides sont disponibles ici : [Sfeir School Angular](https://sfeir-open-source.github.io/sfeir-school-nestjs/)

Les Slides sont derrière une license [CC BY ND 3.0](https://github.com/sfeir-open-source/sfeir-school-angular/blob/master/docs/LICENSE)

## Commandes

La formation se déroule step by step, chaque TP ayant deux projets associés dans le dossier [`TP/apps/`](TP/apps), un pour la réalisation de l'excice et un autre avec la solution pour cet exercice, toujours intitulé avec le nom du projet step suivi de `-solution`.

Chacun de ces projets étant un projet NestJS CLI, vous pouvez utiliser les commande NestJS CLI habituelles.
Exemple : `nest start <projet>`

Nous avons cependant mis en place différents scripts pour vous faciliter cela. Cf. (package.json)[package.json].
La majorité de ces scripts sont simplement des alias pour une commande NestJS CLI. Vous pouvez donc utiliser les options de
 NestJS CLI, mais [après l'option `--` de npm](https://docs.npmjs.com/cli/run-script.html) afin de lui indiquer qu'il s'agit d
 'options à passer au script et non d'options npm.

Voir la [documentation de NEstJS CLI](https://docs.nestjs.com/cli/usages) pour toute autre commande.

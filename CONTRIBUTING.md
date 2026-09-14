# Travailler ensemble sur Hydrogadz 2026

## ⚠️ La règle d'or : toujours repartir de la version GitHub

C'est un petit site : on touche tous aux mêmes fichiers (`index.html`, `style.css`…).
Si quelqu'un travaille sur une vieille version, on va s'emmêler les pinceaux et créer des conflits.

**GitHub est la seule version de référence.** Avant **chaque** session de travail, sans exception :

```bash
git checkout main
git pull
git checkout -b feature/ma-tache
```

- **Avant de commencer** : `git pull` sur `main`, puis nouvelle branche.
- **Pendant la tâche**, si quelqu'un a mergé quelque chose entre-temps : récupérer ses changements
  (`git checkout main`, `git pull`, `git checkout feature/ma-tache`, `git merge main`).
- **Après un merge** : tout le monde refait `git checkout main` puis `git pull`.
- **On se prévient** sur le groupe quand on attaque une partie du site (« je fais la section équipe »)
  pour ne pas modifier la même chose à deux.
- **On ne garde pas une branche des jours** : petite tâche, PR rapide, merge, et on repart de `main` à jour.

## Les règles

1. **Jamais de push direct sur `main`.** GitHub le bloque de toute façon.
2. **Une branche par tâche** : `feature/nom-de-la-tache` (ou `prenom/nom-de-la-tache`).
3. **Des commits fréquents et clairs** : un commit = un petit changement qu'on peut décrire en une phrase.
4. **Une Pull Request (PR) dès que la tâche est prête**, même si elle est petite.
5. **On relit rapidement les PR des autres** avant de merger.

## Le workflow pas à pas

### 1. Partir d'un `main` à jour

```bash
git checkout main
git pull
```

### 2. Créer sa branche

```bash
git checkout -b feature/page-contact
```

### 3. Travailler et commiter souvent

```bash
git add .
git commit -m "Ajoute le formulaire de contact"
```

Bons messages : `Ajoute la section équipe`, `Corrige le menu sur mobile`.
À éviter : `modifs`, `test`, `ça marche enfin`.

### 4. Envoyer sa branche sur GitHub

```bash
git push -u origin feature/page-contact
```

(Les fois suivantes, `git push` suffit.)

### 5. Ouvrir la Pull Request

Sur GitHub, un bandeau jaune propose **Compare & pull request**. Sinon :

```bash
gh pr create --fill
```

Dans la description, dire en deux lignes ce qui change et comment le vérifier.

### 6. Relecture et merge

- Quelqu'un d'autre relit la PR, laisse des commentaires ou clique sur **Approve**.
- Une fois approuvée, on clique sur **Merge pull request**, puis **Delete branch**.
- Chacun récupère ensuite la nouvelle version : `git checkout main && git pull`.

## En cas de conflit

Si GitHub signale un conflit sur la PR :

```bash
git checkout main
git pull
git checkout feature/page-contact
git merge main
```

Ouvrir les fichiers marqués en conflit, garder la bonne version (VS Code propose des boutons pour ça),
puis `git add .`, `git commit` et `git push`. En cas de doute, on demande à l'équipe avant de forcer quoi que ce soit.

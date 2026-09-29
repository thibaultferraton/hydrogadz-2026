# Travailler ensemble sur Hydrogadz 2026

## Les règles

1. **Jamais de push direct sur `main`.** GitHub le bloque de toute façon.
2. **Une branche par tâche** : `feature/nom-de-la-tache` (ou `prenom/nom-de-la-tache`).
3. **Des commits fréquents et clairs** : un commit = un petit changement qu'on peut décrire en une phrase.
4. **Une Pull Request (PR) dès que la tâche est prête**, même si elle est petite.
5. **Pas de relecture obligatoire** : chacun merge sa PR lui-même dès qu'elle est prête.

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

### 6. Merge

- Pas besoin d'attendre une relecture : on clique soi-même sur **Merge pull request**, puis **Delete branch**.
- Le site en ligne se met à jour tout seul après le merge.
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

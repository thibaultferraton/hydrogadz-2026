# Hydrogadz 2026

Site web collaboratif du projet Hydrogadz 2026, en HTML, CSS et JavaScript, sans outil de build.

## Structure

```
index.html   → la page principale
style.css    → le style du site
script.js    → les interactions
```

## Lancer le site en local

1. Récupérer le projet :

   ```bash
   git clone https://github.com/thibaultferraton/hydrogadz-2026.git
   cd hydrogadz-2026
   ```

2. Ouvrir le site, au choix :

   - **Le plus simple** : double-cliquer sur `index.html`, il s'ouvre dans le navigateur.
   - **Recommandé (rechargement automatique)** : dans VS Code, installer l'extension
     **Live Server**, puis clic droit sur `index.html` → *Open with Live Server*.
   - **En ligne de commande** (si Node.js est installé) :

     ```bash
     npx serve .
     ```

     puis ouvrir l'adresse affichée (souvent http://localhost:3000).

## Contribuer

Lire [CONTRIBUTING.md](CONTRIBUTING.md) avant de commencer : on ne pousse jamais directement sur `main`.

> ⚠️ **À chaque fois, avant de travailler, on récupère la dernière version depuis GitHub**
> (`git checkout main` puis `git pull`), et seulement ensuite on crée sa branche.
> Sinon on travaille sur une vieille version et on s'emmêle les pinceaux.

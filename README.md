# Hydrogadz 2026

Site web de l'association Hydrogadz (Arts et Métiers, Aix-en-Provence) au Monaco Energy Boat Challenge.
HTML, CSS et JavaScript, sans outil de build.

## Structure

```
index.html, bateau.html, equipe.html,
historique.html, partenaires.html,
soutenir.html, mentions-legales.html   → les pages
content/                               → les textes et les listes (modifiables sans coder)
css/                                   → le style (tokens.css = couleurs, polices, tailles)
js/                                    → le header/footer commun et les interactions
assets/                                → logos, photos, modèle 3D, icônes
docs/                                  → comment tout ça fonctionne
```

- **Comment le site est organisé** : [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **Ajouter des photos, prompts Gemini** : [docs/PHOTOS.md](docs/PHOTOS.md)

## Modifier un contenu sans coder

Membres, partenaires, saisons, fiche technique : tout est dans le dossier `content/`.
On ouvre le fichier, on change le texte entre guillemets, on enregistre.

**Voir ce qu'il reste à remplir** : ajoutez `?todo` à la fin de l'adresse d'une page
(par exemple `index.html?todo`). Les informations manquantes apparaissent alors en orange.
Les visiteurs, eux, ne voient jamais ces repères : une info absente est simplement masquée.

## Lancer le site en local

1. Récupérer le projet :

   ```bash
   git clone https://github.com/thibaultferraton/hydrogadz-2026.git
   cd hydrogadz-2026
   ```

2. Ouvrir le site, au choix :

   - **Recommandé** : dans VS Code, installer l'extension **Live Server**, puis clic droit sur
     `index.html` → *Open with Live Server* (rechargement automatique).
   - **En ligne de commande** (si Node.js est installé) :

     ```bash
     npx serve .
     ```

     puis ouvrir l'adresse affichée (souvent http://localhost:3000).
   - Double-cliquer sur `index.html` marche aussi, mais le modèle 3D ne se chargera pas dans ce mode.

## Contribuer

Lire [CONTRIBUTING.md](CONTRIBUTING.md) avant de commencer : on ne pousse jamais directement sur `main`.

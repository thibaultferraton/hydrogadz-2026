# Architecture du site

Site statique en HTML / CSS / JavaScript, **sans outil de build** : on ouvre un fichier, on le modifie,
on recharge la page. Node.js ne sert qu'à optimiser les photos (optionnel).

## Arborescence

```
hydrogadz-2026/
├── index.html              Accueil : photo, bande de chiffres, projet, MEBC, appel au soutien
├── projets.html            Nos trois chantiers : batterie, cockpit, transmission (+ vue 3D)
├── equipe.html             L'équipe : pôles, trombinoscope, recrutement
├── historique.html         Les saisons au MEBC (frise) + galerie
├── partenaires.html        Devenir partenaire, formulaire de contact, et faire un don
├── mentions-legales.html   Obligatoire en France : éditeur, hébergeur, données, crédits
├── 404.html                Page d'erreur (servie automatiquement par GitHub Pages)
│
├── content/                ← LES TEXTES ET LES LISTES. Modifiables sans savoir coder.
│   ├── site.js             Nom, menu, contact, réseaux, bande de chiffres de l'accueil
│   ├── projets.js          Les trois chantiers + le modèle 3D
│   ├── roadmap.js          La feuille de route de l'accueil (dates MEBC officielles, le reste en interne)
│   ├── dons.js             HelloAsso, virement, à quoi sert l'argent
│   ├── equipe.js           Pôles et membres
│   ├── historique.js       Saisons + galerie photo
│   └── partenaires.js      Partenaires, objectif de financement, façons de soutenir,
│                           niveaux de partenariat, budget prévisionnel (repris de la plaquette)
│
├── css/                    Chargés dans cet ordre dans chaque page :
│   ├── tokens.css          Couleurs, polices, tailles, espacements (charte de la plaquette partenaires)
│   ├── base.css            Remise à zéro + styles des balises
│   ├── layout.css          Conteneurs, sections, grilles
│   └── components.css      Header, boutons, cartes, frise, formulaire, footer…
│
├── js/                     Chargés dans cet ordre (après content/) :
│   ├── outils.js           Fonctions partagées (échappement du texte, photo, « à compléter »)
│   ├── layout.js           Header + footer, écrits une fois et injectés dans toutes les pages
│   ├── render.js           Remplit les blocs data-render="…" à partir de content/
│   ├── vue-3d.js           Emplacement du modèle 3D (page bateau)
│   ├── formulaire.js       Envoi du formulaire partenaires sans quitter la page
│   └── main.js             Apparition des blocs au défilement
│
├── assets/
│   ├── logos/              Logos (PNG transparents) : Hydrogadz, variante claire, partenaires
│   ├── photos/             Photos optimisées (.webp). Voir docs/PHOTOS.md
│   │   └── _originaux/     Photos brutes, NON envoyées sur GitHub
│   ├── models/             Modèle 3D .glb de la CAO (à venir)
│   ├── decor/              Boussole et lignes de vagues de la plaquette (SVG)
│   └── icons/              Favicons
│
├── tools/
│   └── optimiser-images.mjs   npm run images : _originaux/ → .webp légers
└── docs/
    ├── ARCHITECTURE.md     Ce fichier
    └── PHOTOS.md           Photos disponibles, photos à faire, prompts Gemini
```

## Les trois principes

### 1. Le contenu est séparé du code

Tout ce qui est une **liste** (membres, partenaires, saisons, chantiers, fiche technique, galerie)
vit dans `content/`. Une page déclare juste un emplacement :

```html
<div class="grille" data-render="poles"></div>
```

et `js/render.js` le remplit à partir de `content/equipe.js`. Pour ajouter un partenaire, on ajoute
un bloc dans `content/partenaires.js` : son logo apparaît **à la fois** sur l'accueil et sur la page partenaires.

Les textes uniques (titres, paragraphes d'intro) restent dans le HTML : c'est plus simple à lire
et mieux pour le référencement Google.

### 2. Rien ne casse quand il manque quelque chose

- Une valeur à `null` dans `content/` → une étiquette orange **« À compléter »** s'affiche.
  Quand tout sera rempli, il n'y en aura plus aucune sur le site : c'est la liste des choses à faire.
- Une photo à `null` → un cadre « Photo à venir ».
- Pas de modèle 3D → un emplacement réservé. Fichier .glb introuvable → pareil, pas de page cassée.

### 3. Un seul endroit par réglage

| Je veux changer…                     | Fichier                          |
| ------------------------------------ | -------------------------------- |
| Une couleur, une police, un espacement | `css/tokens.css`               |
| Le menu                              | `content/site.js` → `menu`       |
| Le header ou le footer               | `js/layout.js`                   |
| La clé du formulaire                 | `partenaires.html` → `access_key` |

## Ajouter une page

1. Copier `equipe.html` (le plus simple) et le renommer.
2. Changer le `<title>`, la `description` et le contenu du `<main>`.
3. Ajouter la page au menu dans `content/site.js`.

## Le modèle 3D

Quand la CAO sera prête :

1. Exporter l'assemblage en **glTF binaire (.glb)** depuis le logiciel de CAO
   (SolidWorks : via un export glTF / un convertisseur ; sinon passer par Blender).
   Viser **moins de 10 Mo** : simplifier les pièces invisibles (visserie, intérieurs).
2. Le déposer dans `assets/models/`, par exemple `assets/models/bateau.glb`.
3. Dans `content/bateau.js`, remplacer `fichier: null` par `fichier: "assets/models/bateau.glb"`.

La vue utilise [`<model-viewer>`](https://modelviewer.dev/) (Google, gratuit) : rotation à la souris,
zoom, rotation automatique. Aucune autre modification de code n'est nécessaire.

## Le formulaire partenaires

Il passe par [Web3Forms](https://web3forms.com) : les messages arrivent par email, sans serveur.
La clé dans `partenaires.html` est **publique par conception** (elle identifie la boîte de réception,
elle ne donne accès à rien). Le domaine déclaré côté Web3Forms est `thibaultferraton.github.io` :
à mettre à jour le jour où l'asso prend un nom de domaine.

## Prochaines étapes prévues

- **Passe esthétique** : identité typographique, animations (GSAP, gratuit), défilement fluide.
  Les animations iront dans un futur `js/animations.js`.
- Remplir les « À compléter » (voir `content/` et `mentions-legales.html`).
- Remplacer les photos basse résolution (voir `docs/PHOTOS.md`).
- Obtenir les logos partenaires officiels en SVG.

## Confidentialité : ce qu'on n'écrit pas sur le site

Le site est public et lu par les équipes concurrentes. **Le détail technique du projet n'y figure pas** :
pas de choix de conception, pas de specs, pas de fournisseurs, pas de chantiers en cours.
On reste au niveau « catamaran électrique conçu par des étudiants ». En cas de doute, on n'écrit rien.

Le message principal du site est simple : **nous cherchons des soutiens**.

## Dons : HelloAsso plutôt que l'IBAN

`content/dons.js` prévoit deux moyens de don. Recommandation :

- **HelloAsso** (gratuit pour les associations, sans commission) gère le paiement par carte, les reçus
  et la comptabilité. C'est la voie à privilégier.
- **L'IBAN affiché en clair** sur un site public est à décider en bureau : c'est courant pour une
  association, mais ça expose le compte à des tentatives de fraude. Tant que `iban` vaut `null`,
  la page affiche un emplacement réservé au lieu d'informations inventées.

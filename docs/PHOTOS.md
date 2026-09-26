# Photos

## Ajouter une photo

1. Déposer l'original dans `assets/photos/_originaux/` avec un nom clair en minuscules
   (`essais-lac-2027.jpg`, pas `IMG_4521.JPG`).
2. `npm install` (une seule fois), puis `npm run images`.
3. La version légère apparaît dans `assets/photos/essais-lac-2027.webp` : c'est elle qu'on utilise dans le site.

Pas de Node sur ton ordi ? Envoie les photos à la personne qui gère le site.

## Photos en place

| Fichier | Contenu | Taille | Où |
| --- | --- | --- | --- |
| `cockpit-exterieur-large.webp` | Le bateau sur ses tréteaux devant le bâtiment | 1920 px ✅ | **Photo d'accueil**, partage réseaux |
| `monaco-yachts.webp` | Le bateau 10 et son pilote devant un yacht, à Monaco (photo iPhone) | 1920 px ✅ | Bandeau pleine largeur de l'accueil (cadrage réglé par `--cadrage` dans index.html), partage de la page partenaires |
| `cockpit-exterieur.webp` | Le cockpit et les coques sur une bâche | 1920 px ✅ | Galerie |
| `hero-atelier.webp` | Recadrage large de la photo précédente | 1920 px ✅ | Accueil, section bateau |
| `bateau-05-monaco.webp` | Le bateau 05 en mer devant Monaco | 646 px ⚠️ | Historique 2026, page soutenir |
| `pilote-et-equipier.webp` | Briefing pilote dans le cockpit | 676 px | Accueil, galerie |
| `cockpit-hangar.webp` | Cockpit au hangar | 652 px | Accueil, bateau (aperçu 3D) |
| `bateau-en-course.webp` | Cockpit bleu en course (recadré d'un collage) | 343 px ⚠️ | Historique 2025, galerie |
| `atelier-cockpit.webp` | L'équipe à l'atelier (recadré d'un collage) | 414 px ⚠️ | Bateau, galerie |
| `banc-propulsion.webp` | Banc d'essai de la propulsion | 1920 px ✅ | Bateau, historique 2027 |
| `monaco-port.webp` | Le port de Monaco (recadré d'un collage) | 362 px ⚠️ | Galerie |
| `mebc-flotte.webp` | La flotte vue du ciel | 1920 px ✅ | Accueil (section MEBC) |
| `mebc-depart.webp` | Départ de course avec le public | 1920 px ✅ | Non utilisée pour l'instant |
| `mebc-course.webp` | Plusieurs bateaux en course | 675 px | Galerie |

⚠️ = trop petite pour un grand affichage. Pour le hero plein écran, il faut **au moins 1920 px de large**.

**Droits** : les photos `mebc-*` montrent d'autres équipes et viennent probablement des photographes
officiels du Yacht Club de Monaco. Avant la mise en ligne publique, vérifier qu'on a le droit de les utiliser
et compléter les crédits dans `mentions-legales.html`.

## Photos à faire en priorité

1. **Le bateau en mer, format paysage, en haute définition.** On a maintenant une bonne photo à quai,
   mais aucune photo de course nette : c'est ce qui manque le plus pour l'accueil.
2. **Une photo de groupe** de l'équipe 2026-2027, en extérieur, fond dégagé.
3. **Un portrait par membre** pour le trombinoscope : même cadrage, même fond, format carré.
4. **Des détails techniques** en gros plan : moteur, hélice, pack batterie, électronique.
5. **L'équipe au travail** à l'atelier, sur un plan de travail rangé.

Les originaux des années précédentes (téléphones, Drive) sont souvent bien meilleurs que les versions
Instagram, qui sont compressées à 1080 px.

---

## Gemini : quand l'utiliser, et comment

**Règle d'or : Gemini retouche nos vraies photos, il n'invente jamais le bateau ni l'équipe.**
Un sponsor industriel qui repère un bateau généré par IA perd confiance. Toujours partir d'une vraie photo,
et toujours vérifier après coup que le numéro de coque, les logos sponsors et les visages n'ont pas changé.

Coller les prompts tels quels dans Gemini, avec la photo en pièce jointe.
Récupérer le résultat en PNG, le mettre dans `_originaux/`, puis `npm run images`.

### 1. Agrandir et élargir la photo du hero (priorité n°1)

Photo à joindre : l'original de `bateau-05-monaco` (le bateau 05 devant Monaco).

```
Upscale this photo to high resolution and extend it to a 16:9 widescreen format.
Continue the sea, the sky and the Monaco coastline naturally on the left and right sides.
Keep the boat, the pilot, the French flag, the hull number "05" and every sponsor logo
exactly as they are: do not redraw, move or change them.
Do not add any new boat, person or object. Photorealistic, same light, same colors.
```

### 2. Agrandir les petites photos recadrées

Photo à joindre : `bateau-en-course`, `atelier-cockpit` ou `monaco-port`.

```
Upscale this photo to 2x its resolution and remove compression artifacts.
Keep every detail identical: people, faces, logos, numbers and text must not change.
Do not add or remove anything. Photorealistic result.
```

### 3. Fonds et textures (pas de bateau, pas de personne)

Pour habiller les sections du site. Aucune retouche de vraie photo ici, donc aucun risque.

```
Abstract background for a website, 16:9, very high resolution.
Deep navy blue water surface seen from above at night, with soft light reflections
and subtle ripples. Color palette strictly limited to navy #0B1A2E, electric blue #2F5BFF
and light blue #2A9DFF. Minimal, elegant, lots of empty space. No boat, no people, no text, no logo.
```

```
Abstract background for a website, 16:9, very high resolution.
Thin flowing lines of light suggesting electric energy and water currents,
on a deep navy #0B1A2E background, glowing in #2F5BFF and #2A9DFF.
Technical and elegant, like an engineering visualization. No text, no logo, no objects.
```

### À ne pas faire

- Retirer le texte incrusté sur les photos des collages Instagram (« HYDRO GADZ », « Partenariat ») :
  ce qu'il y a derrière le texte serait inventé, visages compris. Retrouver l'original à la place.
- Générer le bateau, l'équipe ou une scène de course « de toutes pièces ».
- Retoucher les logos des partenaires : demander les fichiers officiels (SVG) à chaque partenaire.

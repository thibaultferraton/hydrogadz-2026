# Modèles 3D

Déposer ici l'export de la CAO au format **.glb** (glTF binaire), moins de 10 Mo idéalement.

Ensuite, dans `content/bateau.js` :

```js
modele3d: {
  fichier: "assets/models/bateau.glb",
  ...
}
```

La page `bateau.html` l'affiche automatiquement. Détails dans `docs/ARCHITECTURE.md`.

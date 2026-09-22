// ============================================================================
//  LE BATEAU — page bateau.html
//
//  ⚠️ CONFIDENTIALITÉ : le détail technique du projet ne doit PAS apparaître
//  sur le site public (choix de conception, specs, fournisseurs, chantiers en
//  cours). On reste volontairement général. En cas de doute, on n'écrit rien.
// ============================================================================

window.HG = window.HG || {};

HG.bateau = {
  // Modèle 3D au format .glb.
  // Tant que c'est null, la page affiche un emplacement réservé.
  // Le jour où on a la CAO : déposer le fichier dans assets/models/ puis écrire
  //   fichier: "assets/models/bateau.glb",
  modele3d: {
    fichier: null,
    apercu: "assets/photos/cockpit-hangar.webp", // image affichée pendant le chargement
    description: "Catamaran électrique Hydrogadz",
    // Si le modèle affiché n'est pas le nôtre (illustration récupérée ailleurs),
    // écrire ici la source et la licence : elles s'affichent sous la vue 3D.
    credit: null,
  },

  // Ce qu'on accepte de dire publiquement du bateau. Rien de plus.
  general: [
    {
      titre: "Une coque commune",
      texte: "En Energy Class, toutes les équipes reçoivent la même coque de catamaran.",
    },
    {
      titre: "Une propulsion électrique",
      texte: "Zéro émission : c'est la règle de la compétition, et tout l'intérêt du défi.",
    },
    {
      titre: "Conçu par des étudiants",
      texte: "Tout est dessiné, fabriqué et testé par les élèves ingénieurs de l'association.",
    },
  ],
};

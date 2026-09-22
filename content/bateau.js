// ============================================================================
//  LE BATEAU — page bateau.html
// ============================================================================

window.HG = window.HG || {};

HG.bateau = {
  // Modèle 3D issu de la CAO, au format .glb (export glTF binaire).
  // Tant que c'est null, la page affiche un emplacement réservé.
  // Le jour où on l'a : déposer le fichier dans assets/models/ puis écrire
  //   fichier: "assets/models/bateau.glb",
  modele3d: {
    fichier: null,
    apercu: "assets/photos/cockpit-hangar.webp", // image affichée pendant le chargement
    description: "Catamaran électrique Hydrogadz",
  },

  // Les chantiers techniques de l'année.
  chantiers: [
    {
      titre: "Transmission",
      texte: "Conception de la chaîne de transmission entre le moteur et l'hélice.",
    },
    {
      titre: "Batterie",
      texte: "Architecture et intégration du pack batterie embarqué.",
    },
    {
      titre: "Cockpit",
      texte: "Conception et fabrication du cockpit du pilote.",
    },
    {
      titre: "Hélice",
      texte: "Travail sur la problématique de l'hélice et son rendement.",
    },
    {
      titre: "Télémétrie",
      texte: "Mesurer en temps réel ce qui se passe à bord pendant les courses.",
    },
  ],

  // Fiche technique. Laisser la valeur à null tant qu'on ne l'a pas :
  // la ligne s'affiche alors comme « à compléter ».
  fiche: [
    { label: "Type", valeur: "Catamaran — Energy Class" },
    { label: "Propulsion", valeur: "Électrique" },
    { label: "Batterie", valeur: null }, // TODO : chimie + capacité
    { label: "Moteur", valeur: null }, // TODO : modèle + puissance
    { label: "Vitesse max", valeur: null },
    { label: "Masse", valeur: null },
  ],
};

// ============================================================================
//  HISTORIQUE — page historique.html
//  Une entrée par saison, de la plus récente à la plus ancienne.
//  Une valeur à null s'affiche comme « à compléter ».
// ============================================================================

window.HG = window.HG || {};

HG.historique = [
  {
    annee: "2027",
    titre: "MEBC 2027",
    statut: "en-cours", // "en-cours" ou "termine"
    texte: "La saison en cours : conception, financement et construction pour Monaco.",
    resultats: null,
    photo: "assets/photos/banc-propulsion.webp",
  },
  {
    annee: "2026",
    titre: "MEBC 2026",
    statut: "termine",
    texte: null, // TODO : récit de la saison (2-3 phrases)
    resultats: null, // TODO : classements, ex. "12e à l'endurance"
    photo: "assets/photos/bateau-05-monaco.webp",
  },
  {
    annee: "2025",
    titre: "MEBC 2025",
    statut: "termine",
    texte: null, // TODO
    resultats: null, // TODO
    photo: "assets/photos/bateau-en-course.webp",
  },
  {
    annee: "2024",
    titre: "MEBC 2024",
    statut: "termine",
    texte: null, // TODO
    resultats: null, // TODO
    photo: null,
  },
];

// Galerie photo en bas de la page historique.
HG.galerie = [
  { photo: "assets/photos/pilote-et-equipier.webp", legende: "Préparation du pilote avant une course" },
  { photo: "assets/photos/bateau-en-course.webp", legende: "En course à Monaco" },
  { photo: "assets/photos/mebc-course.webp", legende: "La flotte du MEBC en pleine course" },
  { photo: "assets/photos/atelier-cockpit.webp", legende: "À l'atelier" },
  { photo: "assets/photos/monaco-port.webp", legende: "Le port de Monaco" },
  { photo: "assets/photos/cockpit-hangar.webp", legende: "Le cockpit au hangar" },
];

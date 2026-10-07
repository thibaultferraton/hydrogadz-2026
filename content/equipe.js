// ============================================================================
//  L'ÉQUIPE — page equipe.html
//
//  ⚠️ CONFIDENTIALITÉ : on nomme les pôles, pas le détail de ce qu'ils font
//  techniquement cette saison.
// ============================================================================

window.HG = window.HG || {};

HG.equipe = {
  // Le bureau de l'association, affiché en haut de la page.
  // photo : "assets/photos/equipe/prenom-nom.webp", ou null (les initiales s'affichent).
  bureau: [
    { prenom: "Esteve", nom: "Ponson", role: "Président", photo: null },
    { prenom: "Anatole", nom: "Martenot", role: "Vice-président", photo: null },
    { prenom: "Jules", nom: "Vails", role: "Trésorier", photo: null },
    { prenom: "Gabriel", nom: "Gourgeon", role: "Secrétaire", photo: null },
  ],

  // Les pôles de l'asso.
  poles: [
    { titre: "Technique", texte: "Conception, fabrication et essais du bateau." },
    { titre: "Pilotage", texte: "Préparation des pilotes et stratégie de course." },
    { titre: "Communication", texte: "Réseaux sociaux, site internet et image de l'association." },
    { titre: "Partenariats", texte: "Relation avec les sponsors et recherche de financement." },
    { titre: "Logistique", texte: "Transport, matériel et organisation des déplacements." },
    { titre: "Trésorerie", texte: "Budget de la saison et suivi des dépenses." },
  ],

  // Les membres. Pour ajouter quelqu'un, copier le bloc d'exemple, enlever les //
  // devant chaque ligne, et le remplir.
  // photo : "assets/photos/equipe/prenom-nom.webp", ou null (les initiales s'affichent).
  membres: [
    // {
    //   prenom: "Camille",
    //   nom: "Martin",
    //   role: "Présidente",
    //   pole: "Partenariats",
    //   photo: null,
    // },
  ],

  // Les PJT (projets d'expertise) : les élèves qui travaillent sur chaque chantier,
  // affichés sous les membres.
  // photo : "assets/photos/pjt-nom.webp", ou null (l'emplacement n'apparaît qu'avec ?todo).
  // membres : liste de noms, par exemple ["Camille Martin", "Léo Durand"].
  pjt: [
    {
      titre: "PJT Transmission",
      texte: "Ils amènent la puissance du moteur jusqu'à l'hélice.",
      photo: null, // TODO : photo de l'équipe PJT Transmission
      membres: [],
    },
    {
      titre: "PJT Batteries",
      texte: "Ils s'occupent du stockage de l'énergie embarquée.",
      photo: null, // TODO : photo de l'équipe PJT Batteries
      membres: [],
    },
    {
      titre: "PJT Cockpit",
      texte: "Ils conçoivent et fabriquent la place du pilote.",
      photo: null, // TODO : photo de l'équipe PJT Cockpit
      membres: [],
    },
  ],
};

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
    { prenom: "Esteve", nom: "Ponson", role: "Président", photo: "assets/photos/equipe/esteve-ponson.webp" },
    { prenom: "Anatole", nom: "Martenot", role: "Vice-président", photo: "assets/photos/equipe/anatole-martenot.webp" },
    { prenom: "Jules", nom: "Vails", role: "Trésorier", photo: "assets/photos/equipe/jules-vaills.webp" },
    { prenom: "Gabriel", nom: "Gourgeon", role: "Secrétaire", photo: "assets/photos/equipe/gabriel-gourgeon.webp" },
  ],

  // Les pôles de l'asso, affichés en trois colonnes.
  // membres : les noms du pôle. groupes : des noms classés par rôle, si besoin.
  poles: [
    {
      titre: "Partenariats",
      texte: "Relation avec les sponsors et recherche de financement.",
      membres: ["Esteve Ponson", "Anatole Martenot", "Jules Vails", "Gabriel Gourgeon", "Martin Vallayer"],
    },
    {
      titre: "Communication",
      texte: "Réseaux sociaux, site internet et image de l'association.",
      groupes: [
        { role: "Responsable réseaux sociaux", membres: ["Lou Laclef"] },
        { role: "Responsables site internet", membres: ["Thibault Ferraton", "Dylan Pain", "Gaspard Honoré"] },
      ],
    },
    {
      titre: "Logistique",
      texte: "Transport, matériel et organisation des déplacements.",
      membres: ["Vincent Keller", "Enzo Girerd", "Axel Munto", "Antoine Gauthier"],
    },
  ],

  // Photo de groupe, affichée en haut de la section des membres.
  photoGroupe: {
    src: "assets/photos/equipe/equipe-2026.webp",
    alt: "Les membres de l'équipe Hydrogadz en tenue, dans la cour du campus d'Aix-en-Provence",
    legende: "L'équipe Hydrogadz 2026-2027",
  },

  // Les membres hors bureau. role et pole sont facultatifs.
  // photo : "assets/photos/equipe/prenom-nom.webp", ou null (les initiales s'affichent).
  membres: [
    { prenom: "Achille", nom: "Bantignies Le Bars", photo: "assets/photos/equipe/achille.webp" },
    { prenom: "Antoine", nom: "Gauthier", photo: "assets/photos/equipe/antoine.webp" },
    { prenom: "Axel", nom: "Munto", photo: "assets/photos/equipe/axel-munto.webp" },
    { prenom: "Dylan", nom: "Pain", photo: "assets/photos/equipe/dylan-pain.webp" },
    { prenom: "Enzo", nom: "Girerd", photo: "assets/photos/equipe/enzo-girerd.webp" },
    { prenom: "Gaspard", nom: "Honoré", photo: "assets/photos/equipe/gaspard-honore.webp" },
    { prenom: "Lou", nom: "Laclef", photo: "assets/photos/equipe/lou-laclef.webp" },
    { prenom: "Lubin", nom: "Tassou", photo: "assets/photos/equipe/lubin-tassou.webp" },
    { prenom: "Martin", nom: "Vallayer", photo: "assets/photos/equipe/martin-vallayer.webp" },
    { prenom: "Thibault", nom: "Ferraton", photo: "assets/photos/equipe/thibault-ferraton.webp" },
    { prenom: "Vincent", nom: "Keller", photo: "assets/photos/equipe/vincent-keller.webp" },
  ],

  // Les PJT (projets d'expertise) : les élèves qui travaillent sur chaque chantier,
  // affichés sous les membres.
  // photo : "assets/photos/pjt-nom.webp", ou null (l'emplacement n'apparaît qu'avec ?todo).
  // membres : liste de noms, par exemple ["Camille Martin", "Léo Durand"].
  pjt: [
    {
      titre: "PJT Transmission",
      texte: "Réparation de la transmission, du moteur à l'hélice.",
      photo: "assets/photos/equipe/pjt-transmission.webp",
      membres: [],
    },
    {
      titre: "PJT Batteries",
      texte: "Redimensionnement des batteries.",
      photo: "assets/photos/equipe/pjt-batteries.webp",
      membres: [],
    },
    {
      titre: "PJT Cockpit",
      texte: "Création d'un nouveau cockpit et conception d'une nouvelle direction.",
      photo: "assets/photos/equipe/pjt-cockpit.webp",
      membres: [],
    },
  ],
};

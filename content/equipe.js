// ============================================================================
//  L'ÉQUIPE — page equipe.html
//
//  ⚠️ CONFIDENTIALITÉ : on nomme les pôles, pas le détail de ce qu'ils font
//  techniquement cette saison.
// ============================================================================

window.HG = window.HG || {};

HG.equipe = {
  // Les pôles de l'asso.
  poles: [
    { titre: "Technique", texte: "Conception, fabrication et essais du bateau." },
    { titre: "Pilotage", texte: "Préparation des pilotes et stratégie de course." },
    { titre: "Communication", texte: "Réseaux sociaux, site internet et image de l'association." },
    { titre: "Partenariats", texte: "Relation avec les sponsors et recherche de financement." },
    { titre: "Logistique", texte: "Transport, matériel et organisation des déplacements." },
    { titre: "Trésorerie", texte: "Budget de la saison et suivi des dépenses." },
  ],

  // Photo de groupe, affichée en haut de la section des membres.
  photoGroupe: {
    src: "assets/photos/equipe/equipe-2026.webp",
    alt: "Les membres de l'équipe Hydrogadz en tenue, dans la cour du campus d'Aix-en-Provence",
    legende: "L'équipe Hydrogadz 2026-2027",
  },

  // Les membres, le bureau d'abord. Pour ajouter quelqu'un, copier un bloc.
  // role : optionnel (bureau). pole : optionnel. nom : peut rester vide en attendant.
  // photo : "assets/photos/equipe/prenom-nom.webp", ou null (les initiales s'affichent).
  membres: [
    { prenom: "Estève", nom: "Ponson", role: "Président", photo: "assets/photos/equipe/esteve-ponson.webp" },
    { prenom: "Anatole", nom: "Martenot", role: "Vice-président", photo: "assets/photos/equipe/anatole-martenot.webp" },
    { prenom: "Gabriel", nom: "Gourgeon", role: "Secrétaire", photo: "assets/photos/equipe/gabriel-gourgeon.webp" },
    { prenom: "Jules", nom: "Vaills", role: "Trésorier", photo: "assets/photos/equipe/jules-vaills.webp" },
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
};

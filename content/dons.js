// ============================================================================
//  NOUS SOUTENIR — page soutenir.html
//  Tant qu'une valeur vaut null, la page affiche « À compléter » au lieu
//  d'informations bancaires inventées.
// ============================================================================

window.HG = window.HG || {};

HG.dons = {
  // Lien de collecte HelloAsso (gratuit pour les associations, gère les reçus).
  // Créer la campagne sur https://www.helloasso.com puis coller l'URL ici.
  helloasso: null,

  // Virement bancaire. ⚠️ Ne remplir qu'après avoir décidé en bureau si on
  // affiche l'IBAN publiquement (voir la note dans docs/ARCHITECTURE.md).
  virement: {
    titulaire: null, // ex. "Association Hydrogadz"
    iban: null,
    bic: null,
  },

  // À quoi sert l'argent. Rester général, pas de montants par poste.
  usages: [
    { titre: "Le matériel", texte: "Les composants et les matériaux nécessaires à la construction du bateau." },
    { titre: "La compétition", texte: "L'inscription au Monaco Energy Boat Challenge et l'acheminement du bateau." },
    { titre: "Les déplacements", texte: "Les essais en mer et la semaine de course à Monaco." },
    { titre: "La sécurité", texte: "Les équipements obligatoires pour les pilotes et l'équipe." },
  ],
};

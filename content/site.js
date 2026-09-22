// ============================================================================
//  INFOS GÉNÉRALES DU SITE
//  Ce fichier se modifie sans savoir coder : on change le texte entre guillemets.
//  Une valeur à null = l'élément n'est pas affiché sur le site.
// ============================================================================

window.HG = window.HG || {};

HG.site = {
  nom: "Hydrogadz",
  accroche: "L'équipe Arts et Métiers d'Aix-en-Provence au Monaco Energy Boat Challenge.",
  campus: "Arts et Métiers — campus d'Aix-en-Provence",
  objectif: "MEBC 2027",

  // Pages affichées dans le menu, dans cet ordre.
  menu: [
    { titre: "Le bateau", lien: "bateau.html" },
    { titre: "L'équipe", lien: "equipe.html" },
    { titre: "Historique", lien: "historique.html" },
    { titre: "Nous soutenir", lien: "soutenir.html" },
  ],
  // Bouton mis en avant à droite du menu.
  boutonMenu: { titre: "Devenir partenaire", lien: "partenaires.html" },

  contact: {
    email: null, // TODO : adresse de contact de l'asso (ex. "contact@hydrogadz.fr")
  },

  reseaux: {
    instagram: "https://www.instagram.com/hydrogadz/",
    linkedin: null, // TODO : page LinkedIn de l'asso si elle existe
  },

  // Le formulaire partenaires (clé Web3Forms, choix proposés) est directement
  // dans partenaires.html, pour qu'il marche même sans JavaScript.
};

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
    { titre: "Nos projets", lien: "projets.html" },
    { titre: "L'équipe", lien: "equipe.html" },
    { titre: "Historique", lien: "historique.html" },
  ],
  // Bouton mis en avant à droite du menu.
  boutonMenu: { titre: "Devenir partenaire", lien: "partenaires.html" },

  // La bande de chiffres en bas de la photo d'accueil.
  // « exposant » sert aux unités (kWh, €…) pour qu'elles restent petites.
  chiffresCles: [
    { valeur: "Juil.", exposant: " 2027", label: "Monaco · Port Hercule" },
    { valeur: "50 000", exposant: " €", label: "Budget de la saison" },
    { valeur: "3", exposant: "", label: "Participations au MEBC" },
    { valeur: "4", exposant: "", label: "Épreuves en mer" },
    { valeur: "0", exposant: " g", label: "CO₂ autorisé en course" },
  ],

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

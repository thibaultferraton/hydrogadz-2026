// ============================================================================
//  NOS PROJETS — page projets.html
//
//  ⚠️ On présente CE QU'ON FAIT, pas COMMENT on le fait.
//  Pas de choix de conception, pas de specs, pas de fournisseurs : le site est
//  public et lu par les équipes concurrentes. En cas de doute, on n'écrit rien.
// ============================================================================

window.HG = window.HG || {};

HG.projets = {
  // Les trois chantiers de la saison.
  chantiers: [
    {
      numero: "01",
      titre: "La batterie",
      accroche: "Stocker l'énergie, et la gérer",
      texte:
        "Le règlement impose une quantité d'énergie embarquée limitée et identique pour tous. " +
        "Tout se joue donc sur la façon dont on la stocke, dont on la protège et dont on la " +
        "distribue pendant les trois heures d'endurance. C'est le cœur électrique du bateau.",
      photo: null, // TODO : une photo du pack batterie (sans détail de câblage)
    },
    {
      numero: "02",
      titre: "Le cockpit",
      accroche: "La place du pilote",
      texte:
        "C'est la partie que l'on fabrique entièrement : la coque du cockpit, le poste de pilotage, " +
        "l'ergonomie et la sécurité. Le pilote doit tenir trois heures de course, voir où il va, " +
        "et pouvoir sortir vite en cas de problème.",
      photo: "assets/photos/cockpit-exterieur.webp",
    },
    {
      numero: "03",
      titre: "La transmission",
      accroche: "Du moteur à l'eau",
      texte:
        "Transmettre la puissance du moteur jusqu'à l'hélice sans gaspiller d'énergie. " +
        "Chaque point de rendement gagné ici, c'est de la distance en plus à l'arrivée " +
        "de l'épreuve d'endurance.",
      photo: "assets/photos/banc-propulsion.webp",
    },
  ],

  // Modèle 3D au format .glb, affiché en haut de la page.
  // Tant que c'est null, la vue n'apparaît pas du tout.
  // Le jour où on a la CAO : déposer le fichier dans assets/models/ puis écrire
  //   fichier: "assets/models/bateau.glb",
  modele3d: {
    fichier: null,
    apercu: "assets/photos/cockpit-hangar.webp",
    description: "Catamaran électrique Hydrogadz",
    // Si le modèle affiché n'est pas le nôtre, indiquer ici sa source et sa licence.
    credit: null,
  },
};

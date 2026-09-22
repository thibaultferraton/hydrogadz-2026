// ============================================================================
//  PARTENAIRES — page partenaires.html + bandeau de logos de l'accueil
// ============================================================================

window.HG = window.HG || {};

HG.partenaires = {
  // Les partenaires actuels. Logo : PNG ou SVG à fond transparent dans assets/logos/.
  actuels: [
    {
      nom: "Capgemini Engineering",
      type: "Partenaire technologique",
      logo: "assets/logos/capgemini-engineering.png",
      lien: "https://www.capgemini.com/fr-fr/about-us/who-we-are/capgemini-engineering/",
    },
    {
      nom: "Arts et Métiers",
      type: "École",
      logo: "assets/logos/arts-et-metiers.png",
      lien: "https://artsetmetiers.fr/",
    },
  ],

  // Ce qu'un partenaire obtient.
  avantages: [
    { titre: "Visibilité", texte: "Votre logo sur le bateau, sur nos réseaux et à Monaco." },
    { titre: "Image", texte: "Associez votre marque à un projet d'ingénierie zéro émission." },
    { titre: "Recrutement", texte: "Un accès direct à de futurs ingénieurs Arts et Métiers." },
    // TODO : vérifier que l'asso peut émettre des reçus fiscaux avant de garder cette ligne
    { titre: "Mécénat", texte: "Association loi 1901 : défiscalisation possible." },
  ],
};

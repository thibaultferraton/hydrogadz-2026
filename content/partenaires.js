// ============================================================================
//  PARTENAIRES — page partenaires.html + appel au soutien et logos de l'accueil
//  Textes repris de la plaquette partenaires 2026-2027.
//
//  ⚠️ CONFIDENTIALITÉ : comme pour content/projets.js, on ne détaille pas ici
//  nos choix techniques (le site est lu par les équipes concurrentes). La
//  plaquette, elle, est envoyée aux entreprises intéressées.
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

  // L'objectif de financement de la saison (encadré en haut de la page partenaires
  // et appel au soutien de l'accueil). C'est un objectif, pas un budget acquis.
  objectif: {
    montant: "50 000 €",
    texte:
      "Une enveloppe de confort pour financer les achats et pouvoir sous-traiter les pièces " +
      "que nous ne pourrions pas fabriquer nous-mêmes. Les apports techniques et matériels " +
      "réduisent d'autant les dépenses correspondantes.",
  },

  // Les façons de nous soutenir (accueil + page partenaires).
  // don: true = le don libre, présenté à part sur la page partenaires.
  moyens: [
    {
      titre: "Financement",
      texte: "Un soutien financier pour les achats de composants et les prestations de fabrication.",
    },
    {
      titre: "Expertise et fabrication",
      texte: "Des études, des matériaux, de l'usinage, de la fonderie ou de l'impression 3D métallique.",
    },
    {
      titre: "Équipements",
      texte: "Du matériel pour le bateau, des vêtements et des objets aux couleurs de l'équipe.",
    },
    {
      titre: "Don libre",
      don: true,
      texte: "Particuliers comme entreprises : un don, sans contrepartie publicitaire, indépendant des packs.",
    },
  ],

  // Ce que l'équipe s'engage à rendre à ses partenaires.
  engagements: [
    { titre: "Visibilité", texte: "Votre logo sur le bateau et les tenues, des publications Instagram et LinkedIn." },
    { titre: "Suivi du projet", texte: "Une newsletter mensuelle et des échanges réguliers avec l'équipe." },
    { titre: "Rencontres", texte: "Des visites à l'école, des démonstrations et un accueil à Monaco selon les possibilités." },
  ],

  // Les niveaux de partenariat de la saison 2026-2027.
  niveaux: [
    {
      montant: "1 000 €",
      nom: "Supporter HydroGadz",
      texte: "Logo sur le site et la plaquette. Remerciement sur nos réseaux sociaux et invitations aux événements du projet.",
    },
    {
      montant: "3 000 €",
      nom: "Partenaire",
      texte: "Les contreparties Supporter, avec un logo sur un emplacement secondaire du bateau, une publication dédiée et une présence sur les supports de la saison.",
    },
    {
      montant: "5 000 €",
      nom: "Partenaire supérieur",
      texte: "Votre entreprise associée à l'un de nos développements techniques, et votre savoir-faire mis en valeur dans nos communications. Une grande visibilité.",
    },
    {
      montant: "10 000 €",
      nom: "Partenaire majeur",
      texte: "Logo très visible sur le bateau et les vêtements. Photos et vidéos du projet, visite de l'équipe et rencontres lors des événements, dont le MEBC selon les possibilités.",
    },
    {
      montant: "15 000 € ou plus",
      nom: "Partenaire principal",
      note: "1 à 2 entreprises",
      texte: "Grand emplacement sur la coque ou le cockpit. Communication prioritaire sur tous les supports, contenus spécifiques, présentations et échanges autour de vos métiers et de vos recrutements.",
    },
  ],

  // Budget prévisionnel de la saison, en pourcentage. Du plus gros au plus petit.
  budget: [
    { poste: "Amélioration du bateau", part: 53.5 },
    { poste: "Logement", part: 14.5 },
    { poste: "Transport", part: 7.8 },
    { poste: "Communication", part: 7.4 },
    { poste: "Matériel", part: 6.7 },
    { poste: "Nourriture", part: 5.6 },
    { poste: "Administratif", part: 4.6 },
  ],

  // Ce qu'un partenaire y gagne (page partenaires, sous le texte « Pourquoi nous soutenir »).
  avantages: [
    { titre: "Recrutement et stages", texte: "Repérez vos futurs stagiaires, alternants et ingénieurs Arts et Métiers, déjà rodés au travail en équipe sur un vrai projet." },
    { titre: "Visibilité", texte: "Votre logo sur le bateau, nos tenues et nos réseaux, jusque sur l'eau à Monaco, devant les acteurs du nautisme." },
    { titre: "Innovation et image", texte: "Associez votre marque à une navigation zéro émission et mettez votre savoir-faire à l'épreuve de la course." },
    // Un sponsoring avec contreparties est une charge déductible pour l'entreprise.
    // TODO : vérifier que l'asso peut émettre des reçus fiscaux avant de parler
    // de la réduction d'impôt de 60 % du mécénat.
    { titre: "Fiscalité", texte: "Un partenariat avec contreparties publicitaires est une charge déductible du résultat de votre entreprise." },
  ],
};

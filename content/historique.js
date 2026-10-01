// ============================================================================
//  HISTORIQUE — page historique.html
//  Source : le doc « HydroGadz — matière pour le site » (lecture du drive).
//  Une valeur à null s'affiche comme « à compléter ».
// ============================================================================

window.HG = window.HG || {};

HG.historique = {
  // Bandeau de chiffres sous l'en-tête.
  chiffres: [
    { valeur: "2018", label: "création de l'association, sur le campus d'Aix" },
    { valeur: "4", label: "participations au MEBC : 2019, 2024, 2025 et 2026" },
    { valeur: "4e", label: "au général en 2019, 1er de la catégorie hydrogène" },
    { valeur: "10 mois", label: "pour concevoir et construire le premier bateau" },
  ],

  // La genèse : de la première visite à Monaco à la création de l'asso.
  genese: [
    {
      date: "Déc. 2017",
      texte: "Thomas Grosjean, élève en 1re année, visite le Yacht Club de Monaco. Son président le met en contact avec le responsable de l'Energy Boat Challenge.",
    },
    {
      date: "Début 2018",
      texte: "Joan Roig le rejoint. Ils vérifient la faisabilité technique et font même corriger le règlement du concours sur la mesure de l'énergie embarquée.",
    },
    {
      date: "Juin 2018",
      texte: "Choix de l'hydrogène et de la pile à combustible : pas la technologie la plus rentable, mais la plus innovante.",
    },
    {
      date: "Juillet 2018",
      texte: "L'équipe assiste au challenge en spectatrice, à Monaco, pour cadrer le projet.",
    },
    {
      date: "Sept. 2018",
      texte: "Camille Bouin et Antoine Losito complètent l'équipe. Assemblée constitutive le 4 septembre, parution au Journal officiel le 15. Les premiers PJT sont lancés.",
    },
    {
      date: "Janv. 2019",
      texte: "Après six mois de conception « en partant d'une feuille blanche », la Fondation Arts et Métiers remet un prix au projet.",
    },
  ],

  // La frise : une entrée par saison, de la plus récente à la plus ancienne.
  // annee : l'été du MEBC visé par le mandat.
  // statut :
  //   "en-cours"    saison en cours (badge « En cours »)
  //   "termine"     MEBC couru : ligne en couleur + ligne Résultats
  //   "a-confirmer" participation au MEBC pas attestée par les documents
  //   "sans-course" pas de course cette année-là
  //   "pause"       association en sommeil (pas de photo)
  // mebc : une ligne visible par tous qui dit si l'équipe a couru le MEBC cette année-là.
  // bureau : null si inconnu, la ligne ne s'affiche pas.
  // photo : null affiche « Photo à venir ». alt : description de la photo.
  saisons: [
    {
      annee: "2027",
      mandat: "225 · 2026-2027",
      titre: "Cap sur Côme et Monaco",
      statut: "en-cours",
      mebc: "Objectif : présélection au lac de Côme, puis Monaco en juillet 2027",
      texte: "Quinze étudiants en trois PJT (batteries, transmission, cockpit) préparent un bateau plus léger : nouveau cockpit, batteries plus récentes, hélices toroïdales en fonderie ou en impression 3D métal. Nouveauté cette année : une présélection au lac de Côme avant Monaco.",
      resultats: null,
      bureau: "Estève Ponson (président), Anatole Martenot (vice-président), Gabriel Gourgeon (secrétaire), Jules Vaills (trésorier)",
      photo: null, // TODO : une photo de l'équipe 2026-2027
      alt: null,
    },
    {
      annee: "2026",
      mandat: "224 · 2025-2026",
      titre: "MEBC 2026",
      statut: "termine",
      mebc: "Au départ du MEBC 2026",
      texte: "Dix-huit élèves en trois PJT (transmission, hélices, communication). La transmission est recalculée par éléments finis et retournée pour placer les hélices à l'avant, et un nouveau moteur OZO remplace l'ancien, trop juste en 2025. Essais en mer chez Monaco Marine, à La Seyne-sur-Mer, en mai et juin.",
      resultats: "12e sur 21 au classement général (slalom 10e, endurance 12e, vitesse 13e, championnat 15e).",
      bureau: "Paul Crocquet (président), Antoine Girardot (vice-président), César Astier (secrétaire), Alexandre Rodriguez (trésorier)",
      photo: "assets/photos/saison-2026-equipe.webp", // TODO : une photo du bateau au MEBC 2026
      alt: "L'équipe 2025-2026 en tenue devant un bâtiment du campus d'Aix-en-Provence",
    },
    {
      annee: "2025",
      mandat: "223 · 2024-2025",
      titre: "MEBC 2025",
      statut: "termine",
      mebc: "Au départ du MEBC 2025",
      texte: "Treize élèves, épaulés par trois ingénieurs de Capgemini, transforment le bateau : plateforme coulissante pour régler l'assiette, transmission contrarotative conçue et fabriquée par l'équipe, hélices toroïdales développées avec Capgemini, télémétrie 4G/5G. À Monaco, la propulsion surchauffe toute la semaine, mais l'équipe arrache une victoire en finale.",
      // TODO : classement général 2025, publié nulle part (ni site officiel ni presse)
      resultats: "Victoire en duel de finale face à Nereides-UTT. Hélices toroïdales remarquées par Nice-Matin et Monaco-Matin.",
      bureau: "Thomas D'Orso (président et pilote), Adrien Mobisson (vice-président), Louis Delahaye (trésorier), Matéo Mangialomini (secrétaire)",
      photo: "assets/photos/saison-2025-en-course.webp",
      alt: "Le bateau 05 d'HydroGadz en course au large de Monaco, drapeau français à l'arrière, juillet 2025",
    },
    {
      annee: "2024",
      mandat: "222 · 2023-2024",
      titre: "La relance",
      statut: "termine",
      mebc: "Au départ du MEBC 2024",
      texte: "Le projet repart après plusieurs années sans équipe. Le règlement a changé : la saison sert à comprendre le bateau et à le remettre à l'eau, avec Capgemini Engineering comme nouveau partenaire technique. L'équipe court le MEBC 2024 sous le nom « Hydrogadz / Monaco Marine ».",
      resultats: "11e sur 18 au classement général (endurance 10e, slalom, championnat et vitesse 11e).",
      bureau: "Agathe Frémont (team manager et pilote), Roman Frédière-Boiteau (vice-manager), Guilhem Leclère (secrétaire), Benjamin Duportal (trésorier)",
      photo: "assets/photos/saison-2024-cockpit-blue-blue.webp", // TODO : remplacer par une photo du MEBC 2024
      alt: "Le cockpit « Blue Blue » du bateau couru en 2024, de retour à l'atelier en novembre 2024",
    },
    {
      annee: "2023",
      mandat: "221 · 2022-2023",
      titre: "Mise en sommeil",
      statut: "pause",
      mebc: "Pas de participation au MEBC",
      texte: "Le Covid a marqué une pause dans le projet : aucun document ne subsiste de cette année-là et le bateau reste à quai. HydroGadz repartira « de zéro » à la rentrée 2023.",
      resultats: null,
      bureau: null,
      photo: null,
      alt: null,
    },
    {
      annee: "2022",
      mandat: "220 · 2021-2022",
      titre: "Objectif 2022",
      statut: "sans-course",
      mebc: "Pas de participation au MEBC 2022",
      texte: "Pas de course à l'été 2021. Un bureau de douze élèves vise la première place au MEBC de juillet 2022, avec des essais au port et une démonstration à Saint-Tropez au programme. L'équipe ne sera finalement pas au départ.",
      resultats: null,
      bureau: "Thomas Gravier (président), Paul Mosser (vice-président), Yannis Yekken (trésorier), Nicolas Alba (secrétaire)",
      photo: "assets/photos/saison-2022-equipe-bimont.webp",
      alt: "Douze membres d'HydroGadz en tenue au bord du lac de Bimont, octobre 2021",
    },
    {
      annee: "2021",
      mandat: "219 · 2020-2021",
      titre: "Saint-Tropez et un premier site",
      statut: "sans-course",
      mebc: "Participation au MEBC 2021 annulée",
      texte: "Vingt-cinq élèves et dix professeurs sur six sujets. Après des essais en mer à l'Union nautique de Marseille en octobre 2020, sur batteries puis à l'hydrogène, le bateau est mis à l'eau à Saint-Tropez les 27 et 28 janvier 2021 devant des élus locaux, à l'invitation de Sportmer, et le site hydrogadz.fr ouvre le 1er mai.",
      resultats: null,
      bureau: "Marianne Julien (présidente et pilote), Adrien Rodriguez (team manager), Chloé Paskoff (trésorière), Fabien Clerc (secrétaire)",
      photo: "assets/photos/saison-2021-saint-tropez.webp", // Photo : Antoine Barbe
      alt: "Le bateau aux couleurs de Sportmer navigue devant le phare de Saint-Tropez, début 2021",
    },
    {
      annee: "2020",
      mandat: "218 · 2019-2020",
      titre: "Plus de puissance",
      statut: "sans-course",
      mebc: "Édition 2020 du MEBC annulée (Covid)",
      texte: "Six groupes de PJT (hybridation, stockage d'hydrogène, motorisation, cockpit, acquisition de données) visent un moteur plus puissant pour atteindre 30 km/h. En octobre 2019, le Blue-Blue est exposé à la Fête de la science de Gardanne et l'équipe participe au salon Studyrama. Le Covid entraîne l'annulation de l'édition 2020 ; en juin, le bateau est perfectionné et repeint.",
      resultats: null,
      bureau: "Hugo Aubertin (président), Jérémi Guérin (vice-président), Martin Kao (trésorier), Paul Bonneau (secrétaire)",
      photo: "assets/photos/saison-2020-salon.webp",
      alt: "Deux membres d'HydroGadz en tenue sur un stand consacré à l'hydrogène, octobre 2019",
    },
    {
      annee: "2019",
      mandat: "217 · 2018-2019",
      titre: "Le Blue-Blue",
      statut: "termine",
      mebc: "Première participation au MEBC",
      texte: "Première saison : le Blue-Blue, catamaran à pile à hydrogène, est conçu et fabriqué en dix mois par une trentaine d'élèves et dix professeurs. Pour sa toute première participation, l'équipe s'invite en haut du classement.",
      resultats: "4e au classement général, 1er de la catégorie hydrogène et Prix Zéro Émission.",
      bureau: "Thomas Grosjean (président), Joan Roig (vice-président), Camille Bouin (trésorière), Antoine Losito (secrétaire)",
      photo: "assets/photos/saison-2019-blue-blue-monaco.webp",
      alt: "Le pilote dans le Blue-Blue, aux logos d'Hélion et d'Arts et Métiers, au port de Monaco en juillet 2019",
    },
  ],

  // Le premier bateau, en fiche technique.
  blueBlue: [
    { label: "Énergie", valeur: "Pile à hydrogène + batterie tampon" },
    { label: "Pile à combustible", valeur: "5,2 kW, 68 cellules, prêtée par Hélion" },
    { label: "Hydrogène", valeur: "2 bouteilles en carbone de 7,2 L, à 350 bars" },
    { label: "Énergie embarquée", valeur: "5 kWh (limite du règlement)" },
    // L'ancien site Wix indique « Torqeedo électrique, 5 kW, rendement global 56 % » :
    // à vérifier (moteur changé en 2020 ?). En attendant, on garde la valeur du dossier.
    { label: "Moteur", valeur: "Synchrone, 4 kW" },
    { label: "Masse", valeur: "260 kg" },
    { label: "Vitesse de croisière", valeur: "7 à 8 nœuds (13 à 15 km/h)" }, // 7 nœuds sur l'ancien site Wix
    { label: "Vitesse max", valeur: "11 à 12 nœuds (20 à 22 km/h)" }, // 11 dans le dossier partenaires, 12 sur l'ancien site
    { label: "Autonomie", valeur: "20 km" },
    { label: "Cockpit", valeur: "Récupéré sur un planeur" },
  ],

  // Les grandes étapes techniques depuis le Blue-Blue.
  evolutions: [
    {
      periode: "2019-2021",
      titre: "Fiabiliser l'hydrogène",
      texte: "Nouveau moteur, direction reconçue, pile remontée avec des pièces imprimées en 3D, nouveau cockpit, télémétrie, simulation des courses et nouvelle peinture en 2020.",
    },
    {
      periode: "2024",
      titre: "Remettre le bateau à l'eau",
      texte: "Remise en état avec Capgemini Engineering et son projet de recherche SEANERGIES, qui étudie un nouveau châssis autour de deux barres carbone de 4 m.",
    },
    {
      periode: "2024-2025",
      titre: "Tout fait maison",
      texte: "Plateforme coulissante pour l'assiette, transmission contrarotative, hélices maison et toroïdales, télémétrie 4G/5G, batteries neuves en mai 2025.",
    },
    {
      periode: "2025-2026",
      titre: "Gagner en rendement",
      texte: "32 batteries, 48 V, 9,6 kWh montées sur rail, hélices devant le bulbe, moteur OZO. Les panneaux solaires, étudiés, sont écartés : +1,3 % de vitesse seulement.",
    },
    {
      periode: "2026-2027",
      titre: "Alléger",
      texte: "Nouveau cockpit, batteries plus récentes et plus légères, hélices toroïdales en fonderie ou en impression 3D métal.",
    },
  ],

  // Les partenaires, période par période.
  partenaires: [
    {
      periode: "2025-2026",
      noms: "Capgemini Engineering, Monaco Marine, Fondation Arts et Métiers, Crédit Mutuel, Gemelec, Safe Harbor",
    },
    {
      periode: "2024-2025",
      noms: "Capgemini Engineering (hélices toroïdales, télémétrie), Monaco Marine, NAO (hélices renforcées)",
    },
    {
      periode: "2020-2021",
      noms: "Hynamics, Valorem, Sportmer (démonstration à Saint-Tropez), Xydrogen, Orion Naval Solutions",
    },
    {
      periode: "2019-2020",
      noms: "Hélion (partenaire principal), Sportmer, Cogemat, CGMV, E-Tech, Xydrogen, D2M Engineering, Orion Naval Solutions, Fondation Arts et Métiers, CROUS, Région Sud",
    },
    {
      periode: "2018-2019",
      noms: "Hélion (pile à combustible), Adamia, Alcrys, Areva, Cap Santé, FFDVI, Fondation Arts et Métiers, Permare, Telis, UNM",
    },
  ],
};

// Vidéos de la page historique (chaîne YouTube de l'asso, reprises de l'ancien site Wix).
// Elles ne se chargent qu'au clic, depuis youtube-nocookie.com (voir js/main.js).
// youtube : l'identifiant de la vidéo, ce qui suit « v= » dans son adresse YouTube.
// vignette : une image du site, pour ne rien charger chez YouTube avant le clic.
HG.videos = [
  { youtube: "T2fTD6Joj-Y", titre: "HydroGadz au Monaco Energy Boat Challenge 2019", duree: "1:01", vignette: "assets/photos/video-mebc-2019.webp" },
  { youtube: "cWm4v0EP0Zc", titre: "Le Blue-Blue en navigation", duree: "1:11", vignette: "assets/photos/video-navigation-blue-blue.webp" },
  { youtube: "jJpA1hdYpwU", titre: "Démonstration à Saint-Tropez, janvier 2021", duree: "3:45", vignette: "assets/photos/video-saint-tropez-2021.webp" },
];

// Galerie photo en bas de la page historique, dans l'ordre chronologique.
// Les photos de 2019 viennent pour la plupart de l'ancien site Wix de l'asso.
// Sur grand écran, les photos n°1, 4, 5, 8, 9, 12… sont affichées en large (16:9) :
// garder les photos verticales aux autres places.
HG.galerie = [
  { photo: "assets/photos/galerie-2019-local-cockpit.webp", legende: "Le cockpit de planeur au local d'HydroGadz, avril 2019" },
  { photo: "assets/photos/galerie-2019-poncage-cockpit.webp", legende: "Ponçage du cockpit, récupéré sur un planeur, avril 2019" },
  { photo: "assets/photos/galerie-2019-fabrication-cockpit.webp", legende: "Fabrication du cockpit, mai 2019" },
  { photo: "assets/photos/galerie-2019-electronique.webp", legende: "Travail sur l'électronique, mai 2019" },
  { photo: "assets/photos/galerie-2019-essais-pharo.webp", legende: "Essais en mer devant le palais du Pharo, Marseille, juin 2019" },
  { photo: "assets/photos/galerie-2019-essais-marseille-large.webp", legende: "Essais en mer au large de Marseille, juin 2019" },
  { photo: "assets/photos/galerie-2019-preparatifs-nuit.webp", legende: "Derniers réglages à la nuit tombée, Monaco, juillet 2019" },
  { photo: "assets/photos/galerie-2019-blue-blue-monaco.webp", legende: "Le Blue-Blue, baptisé « (Blue)² » sur sa coque, au port de Monaco le 3 juillet 2019" },
  { photo: "assets/photos/galerie-2019-port-monaco.webp", legende: "Le Blue-Blue entre les yachts du port de Monaco, juillet 2019" },
  { photo: "assets/photos/galerie-2019-slalom.webp", legende: "Entre les bouées, Monaco 2019 (© YCM / Studio Borlenghi)" },
  { photo: "assets/photos/galerie-2019-prix-zero-emission.webp", legende: "Remise du Prix Zéro Émission à Monaco, 2019 (© YCM / Studio Borlenghi)" },
  { photo: "assets/photos/galerie-2019-equipe.webp", legende: "L'équipe en tenue, septembre 2019" },
  { photo: "assets/photos/galerie-2020-peinture.webp", legende: "Le cockpit repeint en bleu foncé, 2020" },
  { photo: "assets/photos/galerie-2020-essais-marseille.webp", legende: "Essais en mer à Marseille, octobre 2020" },
  { photo: "assets/photos/galerie-2021-port-saint-tropez.webp", legende: "Démonstration dans le port de Saint-Tropez, début 2021 (photo : Antoine Barbe)" },
  { photo: "assets/photos/galerie-2021-cockpit.webp", legende: "Travail sur le cockpit, octobre 2021" },
  { photo: "assets/photos/galerie-2024-equipe-bateau.webp", legende: "L'équipe 2024-2025 et son bateau, novembre 2024" },
  { photo: "assets/photos/galerie-2024-demontage.webp", legende: "Le bateau démonté sur le campus, novembre 2024" },
  { photo: "assets/photos/cockpit-exterieur.webp", legende: "Le cockpit et les coques avant remontage" },
  { photo: "assets/photos/galerie-2025-helice-toroidale.webp", legende: "Une hélice toroïdale développée avec Capgemini, Monaco 2025" },
  { photo: "assets/photos/galerie-2025-france-3.webp", legende: "Tournage de France 3 au MEBC 2025" },
  { photo: "assets/photos/galerie-2025-finale.webp", legende: "Le duel de finale devant le public, 5 juillet 2025" },
  { photo: "assets/photos/galerie-2025-equipe.webp", legende: "L'équipe au MEBC 2025" },
];

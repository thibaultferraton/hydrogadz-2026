// ============================================================================
//  OUTILS — petites fonctions partagées par les autres scripts.
//  Chargé en premier, juste après les fichiers de content/.
// ============================================================================

window.HG = window.HG || {};

HG.outils = {
  // Protège le texte venant de content/ avant de l'insérer dans la page.
  esc(texte) {
    return String(texte ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  },

  // Étiquette visible pour un contenu pas encore rempli.
  aCompleter(quoi = "À compléter") {
    return `<span class="a-completer">${HG.outils.esc(quoi)}</span>`;
  },

  // Une photo, ou rien du tout si le chemin est null (l'emplacement réservé
  // n'apparaît qu'en mode travail, voir js/main.js).
  photo(chemin, alt, classe = "photo") {
    if (!chemin) {
      return `<div class="emplacement"><strong>Photo à venir</strong></div>`;
    }
    return `<div class="${classe}"><img src="${HG.outils.esc(chemin)}" alt="${HG.outils.esc(alt)}" loading="lazy" decoding="async"></div>`;
  },
};

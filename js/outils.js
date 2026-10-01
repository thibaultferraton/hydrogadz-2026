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

  // Une vidéo YouTube sous forme de vignette : rien n'est chargé chez YouTube
  // avant le clic (voir js/main.js). Sans JavaScript, le lien ouvre YouTube.
  video(v) {
    const esc = HG.outils.esc;
    return `
      <a class="video" href="https://www.youtube.com/watch?v=${esc(v.youtube)}" target="_blank" rel="noopener"
         data-video="${esc(v.youtube)}" data-titre="${esc(v.titre)}" aria-label="Lire la vidéo : ${esc(v.titre)} (YouTube)">
        <img src="${esc(v.vignette)}" alt="" loading="lazy" decoding="async">
        <span class="video__lecture" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>
        ${v.duree ? `<span class="video__duree">${esc(v.duree)}</span>` : ""}
      </a>`;
  },
};

// ============================================================================
//  RENDU — remplit les blocs <... data-render="nom"> à partir de content/.
//  Pour un nouveau type de bloc : ajouter une fonction dans RENDUS,
//  puis mettre data-render="son-nom" dans la page.
// ============================================================================

(function () {
  const { esc, aCompleter, photo } = HG.outils;

  const RENDUS = {
    // Bandeau de logos (accueil, partenaires)
    logos: () =>
      HG.partenaires.actuels
        .map(
          (p) => `
          <a href="${esc(p.lien)}" target="_blank" rel="noopener" title="${esc(p.nom)} — ${esc(p.type)}">
            <img src="${esc(p.logo)}" alt="${esc(p.nom)}" loading="lazy">
          </a>`
        )
        .join(""),

    avantages: () =>
      HG.partenaires.avantages
        .map((a) => `<article class="carte apparition"><h3>${esc(a.titre)}</h3><p>${esc(a.texte)}</p></article>`)
        .join(""),

    chantiers: () =>
      HG.bateau.chantiers
        .map((c) => `<article class="carte apparition"><h3>${esc(c.titre)}</h3><p>${esc(c.texte)}</p></article>`)
        .join(""),

    fiche: () =>
      HG.bateau.fiche
        .map((l) => `<div><dt>${esc(l.label)}</dt><dd>${l.valeur ? esc(l.valeur) : aCompleter()}</dd></div>`)
        .join(""),

    poles: () =>
      HG.equipe.poles
        .map((p) => `<article class="carte apparition"><h3>${esc(p.titre)}</h3><p>${esc(p.texte)}</p></article>`)
        .join(""),

    membres: () => {
      if (HG.equipe.membres.length === 0) {
        return `<div class="emplacement" style="grid-column: 1 / -1">
          <strong>Le trombinoscope arrive</strong>
          Ajouter les membres dans content/equipe.js
        </div>`;
      }
      return HG.equipe.membres
        .map((m) => {
          const initiales = `${m.prenom?.[0] ?? ""}${m.nom?.[0] ?? ""}`;
          const visuel = m.photo ? `<img src="${esc(m.photo)}" alt="" loading="lazy">` : esc(initiales);
          return `
            <article class="membre apparition">
              <div class="membre__photo">${visuel}</div>
              <h3>${esc(m.prenom)} ${esc(m.nom)}</h3>
              <p class="membre__role">${esc(m.role)}</p>
              <p class="texte-doux">${esc(m.pole)}</p>
            </article>`;
        })
        .join("");
    },

    frise: () =>
      HG.historique
        .map(
          (s) => `
          <li class="saison apparition">
            <div class="saison__annee">${esc(s.annee)}</div>
            <div class="saison__corps">
              <h3>${esc(s.titre)}${s.statut === "en-cours" ? '<span class="saison__statut">En cours</span>' : ""}</h3>
              <p>${s.texte ? esc(s.texte) : aCompleter("Récit de la saison à compléter")}</p>
              ${s.statut === "termine" ? `<p><strong>Résultats :</strong> ${s.resultats ? esc(s.resultats) : aCompleter()}</p>` : ""}
            </div>
            ${photo(s.photo, s.titre)}
          </li>`
        )
        .join(""),

    galerie: () =>
      HG.galerie
        .map(
          (g) => `
          <figure class="apparition">
            ${photo(g.photo, g.legende)}
            <figcaption>${esc(g.legende)}</figcaption>
          </figure>`
        )
        .join(""),
  };

  document.querySelectorAll("[data-render]").forEach((el) => {
    const rendu = RENDUS[el.dataset.render];
    if (rendu) {
      el.innerHTML = rendu();
    } else {
      console.warn(`Aucun rendu nommé « ${el.dataset.render} » dans js/render.js`);
    }
  });
})();

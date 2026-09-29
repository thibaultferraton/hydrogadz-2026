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

    // Page historique
    chiffres: () =>
      HG.historique.chiffres
        .map(
          (c) => `
          <div class="apparition">
            <span class="chiffre__valeur">${esc(c.valeur)}</span>
            <span class="chiffre__label">${esc(c.label)}</span>
          </div>`
        )
        .join(""),

    genese: () =>
      HG.historique.genese
        .map(
          (j) => `
          <li class="jalon apparition">
            <span class="jalon__date">${esc(j.date)}</span>
            <p>${esc(j.texte)}</p>
          </li>`
        )
        .join(""),

    frise: () => {
      const badges = { "en-cours": "En cours", pause: "En sommeil" };
      const ligneResultats = (s) => {
        if (s.statut === "termine") return `<p><strong>Résultats :</strong> ${s.resultats ? esc(s.resultats) : aCompleter()}</p>`;
        if (s.statut === "a-confirmer") return `<p><strong>MEBC :</strong> ${aCompleter("Participation à confirmer")}</p>`;
        return "";
      };
      return HG.historique.saisons
        .map(
          (s) => `
          <li class="saison${s.statut === "pause" ? " saison--pause" : ""} apparition">
            <div class="saison__annee">${esc(s.annee)}</div>
            <div class="saison__corps">
              <h3>${esc(s.titre)}${badges[s.statut] ? `<span class="saison__statut">${badges[s.statut]}</span>` : ""}</h3>
              <p class="saison__mandat">Mandat ${esc(s.mandat)}</p>
              <p>${s.texte ? esc(s.texte) : aCompleter("Récit de la saison à compléter")}</p>
              ${ligneResultats(s)}
              ${s.bureau ? `<p class="saison__bureau"><strong>Bureau :</strong> ${esc(s.bureau)}</p>` : ""}
            </div>
            ${s.statut === "pause" ? "" : photo(s.photo, s.alt || s.titre)}
          </li>`
        )
        .join("");
    },

    blueblue: () =>
      HG.historique.blueBlue
        .map((l) => `<div><dt>${esc(l.label)}</dt><dd>${l.valeur ? esc(l.valeur) : aCompleter()}</dd></div>`)
        .join(""),

    evolutions: () =>
      HG.historique.evolutions
        .map(
          (e) => `
          <article class="carte apparition">
            <span class="surtitre">${esc(e.periode)}</span>
            <h3>${esc(e.titre)}</h3>
            <p>${esc(e.texte)}</p>
          </article>`
        )
        .join(""),

    "partenaires-passes": () =>
      HG.historique.partenaires
        .map((p) => `<article class="carte apparition"><h3>${esc(p.periode)}</h3><p>${esc(p.noms)}</p></article>`)
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

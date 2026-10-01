// ============================================================================
//  RENDU — remplit les blocs <... data-render="nom"> à partir de content/.
//  Pour un nouveau type de bloc : ajouter une fonction dans RENDUS,
//  puis mettre data-render="son-nom" dans la page.
// ============================================================================

(function () {
  const { esc, aCompleter, photo } = HG.outils;

  const RENDUS = {
    // Bande de chiffres sous la photo d'accueil
    "chiffres-cles": () =>
      HG.site.chiffresCles
        .map(
          (c) => `
          <div class="bande-chiffres__cellule">
            <span class="bande-chiffres__valeur">${esc(c.valeur)}<span class="bande-chiffres__exposant">${esc(c.exposant)}</span></span>
            <span class="bande-chiffres__label">${esc(c.label)}</span>
          </div>`
        )
        .join(""),

    // Frise « De l'atelier à Monaco » (accueil)
    roadmap: () => {
      const libelle = { termine: "Terminé", "en-cours": "En cours", "a-venir": "À venir" };
      return HG.roadmap
        .map(
          (e) => `
          <li class="etape etape--${esc(e.statut)} apparition">
            <span class="etape__periode">${esc(e.periode)}</span>
            <h3 class="etape__titre">${esc(e.titre)}</h3>
            <p class="etape__texte">${esc(e.texte)}</p>
            <span class="etape__statut">${esc(libelle[e.statut] ?? "")}</span>
          </li>`
        )
        .join("");
    },

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

    // Objectif de financement : montant + nombre de façons de nous soutenir
    objectif: () => {
      const { objectif, moyens } = HG.partenaires;
      const facons = moyens.length;
      return `
        <div>
          <span class="objectif__montant">${esc(objectif.montant)}</span>
          <span class="objectif__label">Notre objectif de financement pour la saison</span>
        </div>
        <p class="objectif__facons"><strong>${facons}</strong> façons de<br>nous soutenir</p>
        <p class="objectif__texte">${esc(objectif.texte)}</p>`;
    },

    // Les façons de nous soutenir, numérotées
    moyens: () =>
      HG.partenaires.moyens
        .map(
          (m, i) => `
          <li class="moyen apparition">
            <span class="moyen__numero">${String(i + 1).padStart(2, "0")}</span>
            <h3>${esc(m.titre)}</h3>
            <p>${esc(m.texte)}</p>
          </li>`
        )
        .join(""),

    // « Votre contribution » : les moyens sans le don, qui a sa propre section
    contributions: () =>
      HG.partenaires.moyens
        .filter((m) => !m.don)
        .map((m) => `<li class="carte"><h3>${esc(m.titre)}</h3><p>${esc(m.texte)}</p></li>`)
        .join(""),

    engagements: () =>
      HG.partenaires.engagements
        .map((e) => `<li class="carte carte--sable"><h3>${esc(e.titre)}</h3><p>${esc(e.texte)}</p></li>`)
        .join(""),

    niveaux: () =>
      HG.partenaires.niveaux
        .map(
          (n) => `
          <li class="niveau apparition">
            <div>
              <span class="niveau__montant">${esc(n.montant)}</span>
              <span class="niveau__nom">${esc(n.nom)}</span>
              ${n.note ? `<span class="niveau__note">${esc(n.note)}</span>` : ""}
            </div>
            <p>${esc(n.texte)}</p>
          </li>`
        )
        .join(""),

    // Barres horizontales : la plus grande part occupe toute la largeur
    budget: () => {
      const max = Math.max(...HG.partenaires.budget.map((b) => b.part));
      const format = (n) => n.toLocaleString("fr-FR", { minimumFractionDigits: 1 }) + " %";
      return HG.partenaires.budget
        .map(
          (b, i) => `
          <li class="budget__ligne${i === 0 ? " budget__ligne--principale" : ""}" title="${esc(b.poste)} : ${format(b.part)} du budget">
            <span>${esc(b.poste)}</span>
            <span class="budget__piste"><span class="budget__barre" style="--part: ${((b.part / max) * 100).toFixed(1)}%"></span></span>
            <span class="budget__valeur">${format(b.part)}</span>
          </li>`
        )
        .join("");
    },

    // Les trois chantiers : texte à gauche, photo à droite, en alternance.
    chantiers: () =>
      HG.projets.chantiers
        .map(
          (c) => `
          <article class="chantier${c.photo ? "" : " chantier--sans-photo"} apparition">
            <div class="chantier__texte">
              <span class="chantier__numero">${esc(c.numero)}</span>
              <h2>${esc(c.titre)}</h2>
              <p class="chantier__accroche">${esc(c.accroche)}</p>
              <p class="texte-doux">${esc(c.texte)}</p>
            </div>
            ${c.photo ? photo(c.photo, c.titre, "photo chantier__photo") : ""}
          </article>`
        )
        .join(""),

    "dons-usages": () =>
      HG.dons.usages
        .map((u) => `<article class="carte apparition"><h3>${esc(u.titre)}</h3><p>${esc(u.texte)}</p></article>`)
        .join(""),

    // Moyens de don : n'affiche que ce qui est réellement renseigné.
    "dons-moyens": () => {
      const { helloasso, virement } = HG.dons;
      const blocs = [];

      blocs.push(
        helloasso
          ? `<div class="carte apparition">
               <h3>Don en ligne</h3>
               <p>Paiement sécurisé par HelloAsso, sans frais pour l'association.</p>
               <div class="groupe-boutons" style="margin-top: var(--esp-4)">
                 <a class="bouton bouton--principal" href="${esc(helloasso)}" target="_blank" rel="noopener">Faire un don</a>
               </div>
             </div>`
          : `<div class="emplacement apparition">
               <strong>Don en ligne à mettre en place</strong>
               Créer la collecte sur helloasso.com, puis coller le lien dans content/dons.js
             </div>`
      );

      blocs.push(
        virement.iban
          ? `<div class="carte apparition">
               <h3>Virement bancaire</h3>
               <dl class="fiche" style="margin-top: var(--esp-3)">
                 <div><dt>Titulaire</dt><dd>${esc(virement.titulaire)}</dd></div>
                 <div><dt>IBAN</dt><dd>${esc(virement.iban)}</dd></div>
                 ${virement.bic ? `<div><dt>BIC</dt><dd>${esc(virement.bic)}</dd></div>` : ""}
               </dl>
             </div>`
          : `<div class="emplacement apparition">
               <strong>Coordonnées bancaires à compléter</strong>
               À renseigner dans content/dons.js une fois la décision prise en bureau
             </div>`
      );

      return blocs.join("");
    },

    poles: () =>
      HG.equipe.poles
        .map((p) => `<article class="carte apparition"><h3>${esc(p.titre)}</h3><p>${esc(p.texte)}</p></article>`)
        .join(""),

    membres: () => {
      // Pas de membres renseignés : on masque toute la section plutôt que
      // d'afficher une grille vide au visiteur.
      if (HG.equipe.membres.length === 0) {
        document.querySelector("[data-section-membres]")?.remove();
        return "";
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
      // Ce qui manque ne s'affiche qu'en mode travail (?todo), jamais aux visiteurs.
      const ligneResultats = (s) => {
        if (s.statut === "termine") return s.resultats ? `<p><strong>Résultats :</strong> ${esc(s.resultats)}</p>` : aCompleter("Résultats à compléter");
        if (s.statut === "a-confirmer") return aCompleter("Participation au MEBC à confirmer");
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
              ${s.texte ? `<p>${esc(s.texte)}</p>` : aCompleter("Récit de la saison à compléter")}
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
        .filter((l) => l.valeur)
        .map((l) => `<div><dt>${esc(l.label)}</dt><dd>${esc(l.valeur)}</dd></div>`)
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

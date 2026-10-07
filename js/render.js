// ============================================================================
//  RENDU — remplit les blocs <... data-render="nom"> à partir de content/.
//  Pour un nouveau type de bloc : ajouter une fonction dans RENDUS,
//  puis mettre data-render="son-nom" dans la page.
// ============================================================================

(function () {
  const { esc, euros, aCompleter, photo, video } = HG.outils;

  // Carte d'une personne (bureau, membres) : la photo, ou ses initiales en attendant.
  const carteMembre = (m) => {
    const initiales = `${m.prenom?.[0] ?? ""}${m.nom?.[0] ?? ""}`;
    const visuel = m.photo ? `<img src="${esc(m.photo)}" alt="" loading="lazy">` : esc(initiales);
    return `
      <article class="membre apparition">
        <div class="membre__photo">${visuel}</div>
        <h3>${esc(m.prenom)} ${esc(m.nom)}</h3>
        <p class="membre__role">${esc(m.role)}</p>
        ${m.pole ? `<p class="texte-doux">${esc(m.pole)}</p>` : ""}
      </article>`;
  };

  // Carte d'un partenaire (page partenariat) : logo, nom, puis ses apports
  // ou, pour un soutien hors grille, une phrase. Sans logo, le nom suffit.
  const cartePartenaire = (p) => `
    <article class="partenaire">
      ${
        p.logo
          ? `<a class="partenaire__logo" href="${esc(p.lien)}" target="_blank" rel="noopener" aria-label="${esc(p.nom)}, site officiel">
               <img src="${esc(p.logo)}" alt="${esc(p.nom)}" loading="lazy">
             </a>`
          : ""
      }
      <div>
        <h4 class="partenaire__nom">${esc(p.nom)}</h4>
        ${
          p.apports?.length
            ? `<ul class="partenaire__apports" aria-label="Ce que ${esc(p.nom)} nous apporte">${p.apports.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>`
            : ""
        }
        ${p.texte ? `<p class="partenaire__texte">${esc(p.texte)}</p>` : ""}
      </div>
    </article>`;

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

    // Frise en haut de la page partenariat : l'argent réuni sur l'objectif de la saison
    collecte: () => {
      const { objectif: montant, reuni, miseAJour } = HG.partenaires.collecte;
      const part = Math.min(reuni / montant, 1);
      const pourcent = `${Math.round(part * 100)} %`;
      const resume = `${euros(reuni)} réunis sur ${euros(montant)}, soit ${pourcent}`;
      // Une graduation tous les 10 000 € : « 0 € », « 10 k€ »… « 50 k€ »
      const pas = 10000;
      const graduations = Array.from({ length: Math.floor(montant / pas) + 1 }, (_, i) => i * pas);
      return `
        <div class="collecte__chiffres">
          <div>
            <span class="collecte__reuni">${euros(reuni)}</span>
            <span class="collecte__sur">réunis sur un objectif de <strong>${euros(montant)}</strong></span>
          </div>
          <span class="collecte__pourcent">${pourcent}</span>
        </div>
        <div class="collecte__piste" role="progressbar" aria-label="Financement réuni pour la saison"
             aria-valuemin="0" aria-valuemax="${montant}" aria-valuenow="${reuni}" aria-valuetext="${esc(resume)}"
             title="${esc(resume)}">
          <span class="collecte__barre" style="--part: ${(part * 100).toFixed(1)}%"></span>
        </div>
        <ol class="collecte__graduations" aria-hidden="true">
          ${graduations
            .map((g) => `<li style="--position: ${((g / montant) * 100).toFixed(1)}%">${g === 0 ? "0 €" : `${g / 1000} k€`}</li>`)
            .join("")}
        </ol>
        <p class="collecte__note">
          Financement réuni au ${esc(miseAJour)}. Les apports en expertise et en équipement
          n'y sont pas comptés : ils s'y ajoutent et réduisent d'autant nos dépenses.
        </p>`;
    },

    // Les partenaires de la saison, rangés par niveau, du plus haut au plus bas.
    // Seuls les niveaux qui ont au moins un partenaire s'affichent ; les points
    // (1 à 5) situent le niveau dans la grille de la page « Devenir partenaire ».
    paliers: () => {
      const { niveaux, saison } = HG.partenaires;
      return niveaux
        .map((n, i) => ({ n, rang: i + 1, partenaires: saison.filter((p) => p.niveau === n.nom) }))
        .filter((palier) => palier.partenaires.length)
        .reverse()
        .map(({ n, rang, partenaires }) => {
          const points = niveaux.map((_, i) => `<span${i < rang ? ' class="plein"' : ""}></span>`).join("");
          return `
          <li class="palier palier--rang-${rang} apparition">
            <div class="palier__niveau">
              <span class="palier__points" aria-hidden="true">${points}</span>
              <h3 class="palier__nom">${esc(n.nom)}</h3>
            </div>
            <div class="palier__partenaires">${partenaires.map(cartePartenaire).join("")}</div>
          </li>`;
        })
        .join("");
    },

    // Les soutiens hors grille de partenariat (l'école), sous les niveaux
    soutiens: () =>
      HG.partenaires.saison
        .filter((p) => !p.niveau)
        .map(
          (p) => `
          <li class="palier palier--hors-grille apparition">
            <div class="palier__niveau">
              <h3 class="palier__nom">${esc(p.type ?? "Avec le soutien de")}</h3>
            </div>
            <div class="palier__partenaires">${cartePartenaire(p)}</div>
          </li>`
        )
        .join(""),

    // Ce qu'il reste à réunir, dans l'appel au soutien de la page partenariat
    reste: () => {
      const { objectif, reuni } = HG.partenaires.collecte;
      return esc(euros(Math.max(objectif - reuni, 0)));
    },

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

    poles: () => {
      const noms = (liste = []) =>
        liste.length ? `<ul class="pole__membres">${liste.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : "";
      return HG.equipe.poles
        .map(
          (p) => `
          <article class="carte apparition">
            <h3>${esc(p.titre)}</h3>
            <p>${esc(p.texte)}</p>
            ${noms(p.membres)}
            ${(p.groupes ?? [])
              .map((g) => `<p class="pole__role">${esc(g.role)}</p>${noms(g.membres)}`)
              .join("")}
          </article>`
        )
        .join("");
    },

    bureau: () => HG.equipe.bureau.map(carteMembre).join(""),

    membres: () => {
      // Pas de membres renseignés : on masque toute la section plutôt que
      // d'afficher une grille vide au visiteur.
      if (HG.equipe.membres.length === 0) {
        document.querySelector("[data-section-membres]")?.remove();
        return "";
      }
      return HG.equipe.membres.map(carteMembre).join("");
    },

    // Les PJT : une photo de groupe, le chantier et ses membres.
    pjt: () =>
      HG.equipe.pjt
        .map(
          (g) => `
          <article class="pjt apparition">
            ${photo(g.photo, g.titre, "photo photo--paysage")}
            <h3>${esc(g.titre)}</h3>
            <p class="texte-doux">${esc(g.texte)}</p>
            ${
              g.membres?.length
                ? `<ul class="pjt__membres">${g.membres.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>`
                : aCompleter("Membres à compléter")
            }
          </article>`
        )
        .join(""),

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
              ${s.mebc ? `<p class="saison__mebc${s.statut === "termine" ? " saison__mebc--couru" : ""}">${esc(s.mebc)}</p>` : ""}
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

    videos: () =>
      HG.videos
        .map(
          (v) => `
          <figure class="figure-legendee apparition">
            ${video(v)}
            <figcaption>${esc(v.titre)}</figcaption>
          </figure>`
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

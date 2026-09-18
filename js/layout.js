// ============================================================================
//  HEADER + FOOTER — écrits une seule fois ici, injectés dans toutes les pages.
//  Chaque page contient <div data-layout="header"></div> et <div data-layout="footer"></div>.
//  Pour ajouter une page au menu : content/site.js → menu.
// ============================================================================

(function () {
  const site = HG.site;
  const pageActuelle = location.pathname.split("/").pop() || "index.html";
  const esc = HG.outils.esc;

  const lienMenu = (item) => {
    const actif = item.lien === pageActuelle ? ' aria-current="page"' : "";
    return `<a class="nav__lien" href="${esc(item.lien)}"${actif}>${esc(item.titre)}</a>`;
  };

  const header = `
    <header class="header">
      <div class="conteneur header__barre">
        <a class="header__logo" href="index.html" aria-label="${esc(site.nom)} — accueil">
          <img src="assets/logos/hydrogadz-clair.png" alt="${esc(site.nom)}" width="160" height="42">
        </a>
        <nav class="nav" aria-label="Navigation principale">
          <button class="nav__bouton-menu" type="button" aria-expanded="false" aria-controls="menu-principal">
            <span class="visuellement-cache">Ouvrir le menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <div class="nav__liste" id="menu-principal">
            ${site.menu.map(lienMenu).join("")}
            <a class="bouton bouton--principal" href="${esc(site.boutonMenu.lien)}">${esc(site.boutonMenu.titre)}</a>
          </div>
        </nav>
      </div>
    </header>`;

  const reseaux = [
    site.reseaux.instagram && `<li><a href="${esc(site.reseaux.instagram)}" target="_blank" rel="noopener">Instagram</a></li>`,
    site.reseaux.linkedin && `<li><a href="${esc(site.reseaux.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>`,
    site.contact.email && `<li><a href="mailto:${esc(site.contact.email)}">${esc(site.contact.email)}</a></li>`,
  ].filter(Boolean).join("");

  const footer = `
    <footer class="footer">
      <div class="conteneur">
        <div class="footer__grille">
          <div>
            <img src="assets/logos/hydrogadz-clair.png" alt="${esc(site.nom)}" width="115" height="30">
            <p>${esc(site.campus)}</p>
            <p>Objectif ${esc(site.objectif)}</p>
          </div>
          <div>
            <h2>Le site</h2>
            <ul>
              <li><a href="index.html">Accueil</a></li>
              ${site.menu.map((i) => `<li><a href="${esc(i.lien)}">${esc(i.titre)}</a></li>`).join("")}
              <li><a href="${esc(site.boutonMenu.lien)}">${esc(site.boutonMenu.titre)}</a></li>
            </ul>
          </div>
          <div>
            <h2>Nous suivre</h2>
            <ul>${reseaux}</ul>
          </div>
        </div>
        <div class="footer__bas">
          © ${new Date().getFullYear()} ${esc(site.nom)} · <a href="mentions-legales.html">Mentions légales</a>
        </div>
      </div>
    </footer>`;

  document.querySelector('[data-layout="header"]')?.insertAdjacentHTML("afterend", header);
  document.querySelector('[data-layout="header"]')?.remove();
  document.querySelector('[data-layout="footer"]')?.insertAdjacentHTML("afterend", footer);
  document.querySelector('[data-layout="footer"]')?.remove();

  // Menu mobile
  const bouton = document.querySelector(".nav__bouton-menu");
  const liste = document.querySelector(".nav__liste");
  bouton?.addEventListener("click", () => {
    const ouvert = liste.classList.toggle("est-ouvert");
    bouton.setAttribute("aria-expanded", String(ouvert));
    document.querySelector(".header").classList.toggle("header--plein", ouvert || scrollY > 40);
  });

  // Header plein dès qu'on quitte le haut de la page
  const headerEl = document.querySelector(".header");
  const majHeader = () => headerEl.classList.toggle("header--plein", scrollY > 40 || liste.classList.contains("est-ouvert"));
  addEventListener("scroll", majHeader, { passive: true });
  majHeader();
})();

// ============================================================================
//  MAIN — petites interactions communes à toutes les pages.
//  Les futures animations (GSAP, défilement fluide…) viendront dans js/animations.js.
// ============================================================================

(function () {
  document.documentElement.classList.remove("sans-js");

  // Mode travail : ajouter ?todo à l'adresse d'une page fait apparaître
  // les repères « À compléter ». Les visiteurs ne les voient jamais.
  if (location.search.includes("todo")) {
    document.documentElement.classList.add("mode-todo");
  }

  // Fait apparaître les blocs .apparition quand ils entrent à l'écran
  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach((entree) => {
        if (entree.isIntersecting) {
          entree.target.classList.add("est-visible");
          observateur.unobserve(entree.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".apparition").forEach((el) => observateur.observe(el));

  // Vidéos YouTube : la vignette est remplacée par le lecteur au clic seulement,
  // en mode « confidentialité renforcée » (youtube-nocookie.com). Avant le clic,
  // aucune requête ne part chez YouTube.
  document.addEventListener("click", (e) => {
    const lien = e.target.closest("a.video[data-video]");
    // Ctrl/Cmd + clic : on laisse le navigateur ouvrir YouTube dans un onglet
    if (!lien || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();

    const lecteur = document.createElement("iframe");
    lecteur.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(lien.dataset.video)}?autoplay=1&rel=0`;
    lecteur.title = lien.dataset.titre || "Vidéo YouTube";
    lecteur.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    lecteur.allowFullscreen = true;
    lecteur.referrerPolicy = "strict-origin-when-cross-origin";

    const cadre = document.createElement("div");
    cadre.className = "video";
    cadre.append(lecteur);
    lien.replaceWith(cadre);
    lecteur.focus();
  });
})();

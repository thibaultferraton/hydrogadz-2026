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
})();

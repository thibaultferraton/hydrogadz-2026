// ============================================================================
//  VUE 3D DU BATEAU — emplacement pour le modèle issu de la CAO.
//
//  Tant que content/bateau.js → modele3d.fichier vaut null, on affiche un
//  emplacement réservé. Dès qu'un .glb est renseigné, on charge <model-viewer>
//  (composant gratuit de Google) : rotation à la souris, zoom, rotation auto.
//  Si le fichier est introuvable, on revient à l'emplacement : le site ne casse jamais.
// ============================================================================

(function () {
  const conteneur = document.querySelector("[data-vue-3d]");
  if (!conteneur) return;

  const { esc } = HG.outils;
  const modele = HG.bateau.modele3d;

  const emplacement = (message) => {
    conteneur.innerHTML = `
      <div class="emplacement">
        <strong>Modèle 3D à venir</strong>
        ${esc(message)}
      </div>`;
  };

  if (!modele.fichier) {
    emplacement("Déposer l'export .glb de la CAO dans assets/models/ puis le déclarer dans content/bateau.js");
    return;
  }

  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@4/dist/model-viewer.min.js";
  document.head.appendChild(script);

  conteneur.innerHTML = `
    <model-viewer
      src="${esc(modele.fichier)}"
      poster="${esc(modele.apercu ?? "")}"
      alt="${esc(modele.description)}"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="1"
      interaction-prompt="auto"
    ></model-viewer>`;

  conteneur.querySelector("model-viewer").addEventListener("error", () => {
    emplacement(`Fichier introuvable : ${modele.fichier}`);
  });
})();

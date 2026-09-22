// ============================================================================
//  FORMULAIRE PARTENAIRES — envoi via Web3Forms (les réponses arrivent par email).
//  La clé est dans partenaires.html. Ce script envoie le formulaire sans quitter
//  la page et affiche un message de confirmation. Sans JavaScript, le
//  formulaire fonctionne quand même (envoi classique).
// ============================================================================

(function () {
  const form = document.querySelector("[data-formulaire]");
  if (!form) return;

  const message = form.querySelector(".formulaire__message");
  const bouton = form.querySelector('[type="submit"]');

  const afficher = (texte, type) => {
    message.textContent = texte;
    message.className = `formulaire__message formulaire__message--${type}`;
    message.hidden = false;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    bouton.disabled = true;
    bouton.textContent = "Envoi…";

    try {
      const reponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const resultat = await reponse.json();
      if (!resultat.success) throw new Error(resultat.message);

      form.reset();
      afficher("Merci ! Votre message est bien parti, on revient vers vous très vite.", "ok");
    } catch (erreur) {
      console.error(erreur);
      afficher("L'envoi a échoué. Réessayez dans un instant, ou écrivez-nous sur Instagram.", "erreur");
    } finally {
      bouton.disabled = false;
      bouton.textContent = "Envoyer";
    }
  });
})();

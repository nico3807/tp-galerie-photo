// --- 1. FONCTION PÉDAGOGIQUE POUR LE MENU (Partagée par toutes les pages) ---

/**
 * Fonction JavaScript appelée par le bouton pour déployer/rétracter les blocs de code (indices).
 * Elle manipule la classe CSS 'is-expanded' et assure la restauration du titre descriptif.
 * @param {HTMLElement} button - Le bouton cliqué (l'objet 'this' dans le HTML).
 */
function toggleCode(button) {
  // 1. Stocker le texte descriptif initial (ex: "Indice de syntaxe...")
  if (!button.originalDescription) {
    // Enlève le "[ + ] " qui fait 4 caractères et stocke le reste du texte descriptif.
    button.originalDescription = button.textContent.substring(4).trim();
  }

  // 2. Sélectionne le div.code-content (élément masqué)
  const content = button.nextElementSibling;

  // 3. Bascule la classe CSS 'is-expanded'
  content.classList.toggle("is-expanded");

  // 4. Mise à jour du texte du bouton [+] ou [-]
  if (content.classList.contains("is-expanded")) {
    button.textContent = "[ - ] Masquer le code";
  } else {
    // Rétablit le [+] et la description stockée button.textContent = "[ + ] " + button.originalDescription;
    button.textContent = button.originalDescription;
  }
}

// --- 2. FONCTIONS DE DÉMONSTRATION POUR LES PAGES DE RÉFÉRENCE DU DOM ---

/**
 * Fonction de démonstration pour page_1.html (Sélection et Création).
 * Exécute tous les exemples interactifs pour illustrer les méthodes.
 */
function runPage1Examples() {
  const outputDiv = document.getElementById("output");

  // Réinitialisation de la zone de sortie
  outputDiv.innerHTML = "<h2>Résultats de la Démo :</h2>";
  const bodyTitle = document.querySelector("h1");
  bodyTitle.textContent = "1. 🔎 SÉLECTION EN COURS...";

  // --- 1.1 SÉLECTION ---

  // 1. getElementById (Modifie le texte du bouton)
  const btnDemarrer = document.getElementById("start-btn");
  btnDemarrer.textContent = "Exécution en cours...";
  console.log("1. Démarrage : Texte du bouton modifié via ID.");

  // 2. querySelector (Colore le premier lien)
  document.querySelector(".mon-lien").style.color = "red";
  console.log("2. querySelector : Le premier lien est maintenant rouge.");

  // 3. querySelectorAll (Modifie le poids de police de tous les liens)
  document.querySelectorAll(".mon-lien").forEach((lien) => {
    lien.style.fontWeight = "bold";
  });
  console.log("3. querySelectorAll : Tous les liens sont en gras.");

  // --- 1.2 CRÉATION et INSERTION ---

  // 4. createElement & appendChild (Ajout d'un message)
  const msg = document.createElement("p");
  msg.innerHTML = "<strong>4. Message ajouté par appendChild !</strong>";
  outputDiv.appendChild(msg);
  console.log(
    "4. createElement/appendChild : Message ajouté dans la div de sortie."
  );

  // 5. createTextNode (Ajout de texte brut)
  const text = document.createTextNode(" - 5. Fin de l'ajout en texte brut.");
  outputDiv.appendChild(text);
  console.log("5. createTextNode : Texte brut ajouté.");

  // 6. remove (Supprimer le bouton après un délai)
  console.log("6. remove : Le bouton va s'autodétruire dans 3 secondes...");
  setTimeout(() => {
    const btnToRemove = document.getElementById("start-btn");
    if (btnToRemove) {
      btnToRemove.remove();
    }
    bodyTitle.textContent = "1. 🔎 Sélection et Création d'Éléments (Terminé)";
    console.log("-> FIN DE L'EXEMPLE : Le bouton a été retiré du DOM.");
  }, 3000);
}

/**
 * Fonction de démonstration pour page_2.html (Contenu et Attributs).
 */
function runPage2Examples() {
  // Réinitialisation de la démonstration :
  const demoBox = document.getElementById("demo-box");
  demoBox.style.backgroundColor = "transparent";
  document.querySelectorAll(".bouton-action").forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.fontSize = "";
  });
  const titrePrincipal = document.getElementById("titre-principal");
  titrePrincipal.textContent = "Titre Principal";

  // --- 1. SÉLECTION D'UN SEUL ÉLÉMENT (querySelector) ---

  // Indice 1 : Sélection par ID (#) et modification du texte
  const monTitre = document.querySelector("#titre-principal");
  monTitre.textContent = "Titre SÉLECTIONNÉ !";
  console.log("1. querySelector (#): Le titre principal a été modifié.");

  // Indice 2 : Sélection du PREMIER élément par Classe (.) et modification du style
  const monBouton = document.querySelector(".bouton-action");
  monBouton.style.backgroundColor = "#00CCFF"; // Bleu clair
  monBouton.style.color = "white";
  console.log("2. querySelector (.): Le Bouton 1 est maintenant bleu.");

  // --- 2. SÉLECTION DE PLUSIEURS ÉLÉMENTS (querySelectorAll) ---

  // Indice 3 : Sélectionner TOUS les éléments et les modifier via forEach
  const tousLesBoutons = document.querySelectorAll(".bouton-action");
  tousLesBoutons.forEach((bouton) => {
    bouton.style.fontSize = "1.2em";
    bouton.style.border = "2px solid red";
  });
  console.log(
    "3. querySelectorAll : Tous les boutons sont en grande taille et ont une bordure rouge."
  );

  // Finalisation
  demoBox.style.backgroundColor = "#e9f5ff";
  alert(
    "Démonstration de sélection terminée. Vérifiez les modifications et la console !"
  );
}

/**
 * Fonction de démonstration pour page_3.html (Style, Classes et Événements).
 */
function runPage3Examples() {
  const targetBox = document.getElementById("target-box");
  const imageCible = document.getElementById("image-cible");
  const lienCible = document.getElementById("lien-cible");
  const bodyTitle = document.querySelector("h1");

  // Réinitialisation des éléments pour une nouvelle démonstration
  targetBox.innerHTML =
    "<p>Ceci est un paragraphe avec <strong>HTML</strong>.</p>";
  imageCible.src = "logo_MMI_Beziers.jpg"; // Réinitialiser à l'image locale initiale
  imageCible.alt = "Image initiale";
  lienCible.href = "original.html";
  bodyTitle.textContent = "3. ✍️ Modification en cours...";

  console.log("--- Début de la démonstration du Contenu/Attributs ---");

  // --- 3.1 CHANGER LE TEXTE OU LE HTML ---

  // 1. textContent (supprime le HTML)
  setTimeout(() => {
    targetBox.textContent =
      "1. Contenu sans formatage HTML (textContent). Le <strong>HTML</strong> a disparu.";
    console.log("1. textContent : Contenu remplacé par du texte brut.");
  }, 500);

  // 2. innerHTML (ajoute le HTML)
  setTimeout(() => {
    targetBox.innerHTML =
      "<p>2. Nouveau <strong>contenu HTML</strong> inséré ! (innerHTML)</p>";
    console.log("2. innerHTML : Nouveau contenu HTML inséré.");
  }, 2000);

  // --- 3.2 CHANGER LES ATTRIBUTS ---

  // 3. Modifier src et alt (Image)
  setTimeout(() => {
    imageCible.src =
      "https://iut-beziers.edu.umontpellier.fr/files/2025/11/affiche-jpo2026-iutbeziers-600x849.png";
    imageCible.alt = "Nouvelle image de démonstration.";
    console.log("3. Attributs SRC et ALT de l'image modifiés.");
  }, 3500);

  // 4. Modifier href (Lien)
  setTimeout(() => {
    lienCible.href = "https://iut-beziers.edu.umontpellier.fr/";
    lienCible.textContent = "Lien vers iut de béziers (modifié)";
    console.log("4. Attribut HREF du lien modifié.");
  }, 5000);

  // Finalisation
  setTimeout(() => {
    bodyTitle.textContent = "3. ✍️ Modifier le contenu et les attributs";
    alert("Démonstration terminée ! Vérifiez l'URL du lien et l'image.");
  }, 6000);
}

/**
 * Fonction de démonstration pour page_4.html (Infos Document et Collections).
 */
function runPage4Examples() {
  const target = document.getElementById("target-style");
  const bodyTitle = document.querySelector("h1");

  // Réinitialisation de l'élément cible et du titre
  target.className = ""; // Retire toutes les classes
  target.style.cssText = ""; // Retire tous les styles en ligne
  target.textContent = "Élément cible de manipulation de style.";
  bodyTitle.textContent = "4. 🎨 Manipulation du Style en cours...";
  console.log("--- Début de la démonstration de Style ---");

  // 1. Style en ligne (backgroundColor)
  setTimeout(() => {
    target.style.backgroundColor = "tomato";
    target.textContent = "1. Couleur de fond modifiée (style.backgroundColor).";
    console.log(
      "1. Style en ligne : Couleur changée en 'tomato' via camelCase."
    );
  }, 1000);

  // 2. Style en ligne (display: none)
  setTimeout(() => {
    target.style.display = "none";
    console.log("2. Style en ligne : L'élément est masqué (display: none).");
  }, 2500);

  // 3. Réapparition et classList.add/remove
  setTimeout(() => {
    target.style.display = "block"; // Faire réapparaître
    target.style.backgroundColor = ""; // Réinitialiser le style en ligne

    target.classList.add("large-font");
    target.textContent = "3. Classe 'large-font' ajoutée (classList.add).";
    console.log("3. classList.add : Augmentation de la taille de police.");
  }, 4000);

  // 4. classList.remove
  setTimeout(() => {
    target.classList.remove("large-font");
    target.textContent = "4. Classe 'large-font' retirée (classList.remove).";
    console.log("4. classList.remove : Retour à la taille normale.");
  }, 5500);

  // 5. classList.toggle
  setTimeout(() => {
    target.classList.toggle("dark-mode");
    target.textContent = "5. Mode Sombre Actif (classList.toggle).";
    console.log("5. classList.toggle : Bascule en mode sombre.");
  }, 7000);

  // 6. classList.toggle (Retour à l'état initial)
  setTimeout(() => {
    target.classList.toggle("dark-mode");
    target.textContent = "6. Retour au mode clair (toggle).";
    console.log("6. classList.toggle : Retour en mode clair.");
    bodyTitle.textContent = "4. 🎨 Manipuler le Style (CSS)";
  }, 8500);
}

/**
 * Fonction de démonstration pour page_5.html (Créer et Ajouter des éléments).
 */
function runPage5Examples() {
  const hero = document.getElementById("hero");
  hero.innerHTML = "Zone parent cible (ID: hero)"; // Réinitialisation

  // 1. Création et Customisation
  const nouveauBouton = document.createElement("button");
  nouveauBouton.textContent = "Bouton créé dynamiquement";
  nouveauBouton.classList.add("btn-primary");

  // 2. Insertion dans le DOM
  hero.appendChild(nouveauBouton);

  console.log("Élément créé et ajouté à la zone #hero.");
  alert("Un nouveau bouton vert a été inséré dans la zone pointillée !");
}

/**
 * Fonction de démonstration pour page_6.html (Événements).
 */
function runPage6Examples() {
  const btn = document.querySelector("#event-btn");
  const input = document.querySelector("#input-field-event");

  // Réinitialisation (Retirer les écouteurs précédents pour éviter les duplications)
  btn.removeEventListener("click", btnClickHandler);
  input.removeEventListener("input", inputHandler);

  // Définir les Handlers (Fonctions)
  function btnClickHandler() {
    document.body.classList.toggle("dark-mode-site");
    console.log("Mode sombre basculé via addEventListener.");
  }

  function inputHandler(e) {
    console.log("Saisie en temps réel (input event): " + e.target.value);
  }

  // Attacher les écouteurs (Fonctionnel)
  btn.addEventListener("click", btnClickHandler);
  input.addEventListener("input", inputHandler);

  alert(
    "Le bouton CLICK et le champ INPUT sont maintenant actifs. Ouvrez la console !"
  );
}

// --- INITIALISATION DES VARIABLES GLOBALES ET DES ÉCOUTEURS ---

window.onload = function () {
  // Le code du générateur de mot de passe est omis ici pour la clarté du TP DOM.
  // Si la page contient le générateur, la logique doit être réintégrée.
};

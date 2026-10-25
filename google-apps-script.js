/**
 * ==============================================================================
 * SCRIPT GOOGLE APPS SCRIPT POUR LE TOURNOI D'ÉCHECS DU 1ER NOVEMBRE (AUCA)
 * ==============================================================================
 * 
 * Instructions de mise en place en 2 minutes :
 * 
 * 1. Ouvrez Google Sheets (https://sheets.google.com) et créez une nouvelle feuille.
 * 2. Renommez la feuille en "Inscriptions Tournoi 1er Novembre AUCA".
 * 3. En haut, cliquez sur : Extensions > Apps Script.
 * 4. Supprimez tout le code existant dans l'éditeur et collez le script ci-dessous.
 * 5. Cliquez sur l'icône de disquette (Enregistrer).
 * 6. Cliquez sur le bouton bleu "Déployer" en haut à droite > "Nouveau déploiement".
 * 7. Dans le type de déploiement (icône d'engrenage), choisissez "Application Web".
 * 8. Remplissez les champs :
 *    - Description : Webhook Inscriptions AUCA
 *    - Exécuter en tant que : Moi (votre adresse email Google)
 *    - Qui a accès : Tout le monde (Anyone)  <--- IMPORTANT pour que la page web puisse envoyer les données
 * 9. Cliquez sur "Déployer", autorisez les accès.
 * 10. Copiez l'URL de l'application Web (elle se termine par /exec).
 * 11. Sur la page du tournoi, ouvrez l'Espace Arbitres (Ctrl+Shift+A ou en bas de page)
 *     et collez cette URL dans le champ "URL Webhook Google Apps Script", puis cliquez sur "Enregistrer".
 * 
 * Et voilà ! Chaque participant inscrit sur la page apparaîtra instantanément dans votre Google Sheet !
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Initialisation des en-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "ID Dossard",
        "Date & Heure",
        "Nom / Pseudo",
        "Prénom",
        "Ville / Wilaya",
        "Club",
        "Téléphone",
        "Adresse Email",
        "Identifiant FIDE / Elo"
      ]);
      
      // Mise en forme de la première ligne
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setBackground("#0B4EA2");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }
    
    // Lecture des données envoyées par la page d'inscription
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    
    sheet.appendRow([
      data.id || "AUCA-" + Math.floor(Math.random() * 1000),
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      data.firstname || "",
      data.city || "",
      data.club || "",
      data.phone || "",
      data.email || "",
      data.fide || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Inscription enregistrée avec succès" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Le Webhook Google Apps Script du Tournoi d'Échecs AUCA fonctionne parfaitement !")
    .setMimeType(ContentService.MimeType.TEXT);
}

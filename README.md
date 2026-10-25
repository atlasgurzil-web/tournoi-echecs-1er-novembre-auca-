# 🏆 Le Cercle des Rois 4 🇩🇿 — Tournoi d'Échecs à Annaba (Café Dardara)

Page d'inscription officielle et moderne pour la 4ème édition du tournoi **Le Cercle des Rois**, organisée en hommage au **1er Novembre 1954**. Conçue pour être partagée en **Story Instagram**, Facebook, WhatsApp ou via un lien direct hébergé sur **Vercel**.

Organisé par le club d'échecs **Le Cercle des Rois** (Annaba) dans l'arène conviviale du **Café Dardara**, le **Jeudi 29 Octobre 2026**.

---

## 🧭 OÙ VA VOTRE BASE DE DONNÉES ? (EXPLICATION TECHNIQUE CLAIRE)

Lorsque votre site est en ligne sur **Vercel**, des dizaines de joueurs vont cliquer sur votre lien depuis leur téléphone portable via Instagram ou Facebook :

### 1. Pourquoi le stockage "local" (localStorage) ne suffit pas en production ?
Le `localStorage` stocke les informations **uniquement dans la mémoire du téléphone du visiteur**. Si un joueur s'inscrit sur son smartphone, les données restent sur son appareil. L'organisateur sur son ordinateur ou son propre téléphone ne verrait rien sans synchronisation cloud !

### 2. Où sont réellement stockées les données en production ?
Pour que le site soit **centralisé et techniquement irréprochable**, chaque fois qu'un joueur clique sur *« Valider mon Inscription & Générer mon Pass »*, le site envoie une requête vers **votre Base de Données Cloud Google Sheets** (ou l'API Serverless Vercel `/api/register`).

**Le chemin des données est le suivant :**
```text
[ Smartphone du Joueur sur Instagram ]
                   │
                   ▼ (Requête HTTP POST sécurisée)
     [ Script Google Apps Script Cloud ]
                   │
                   ▼ (Ajout instantané de la ligne)
[ Votre Tableur Google Sheets Privé sur Google Drive ]
                   │
                   ▼ (Consultation en direct)
[ Les Arbitres du Cercle des Rois au Café Dardara ] ──► [ Export Swiss-Manager / Sevilla ]
```

### 3. Où l'organisateur consulte-t-il les inscriptions ?
1. **Directement dans votre Google Sheets** : Vous ouvrez votre Google Sheet sur votre PC ou via l'application Google Sheets sur votre téléphone. Chaque nouvelle inscription apparaît en temps réel à la seconde près avec :
   - ID Dossard (`#CDR-XXX`)
   - Date et Heure
   - Nom complet ou Pseudo
   - Prénom
   - Ville / Wilaya
   - Club d'échecs
   - Téléphone
   - Email
   - Identifiant FIDE / Elo
2. **Sur le site dans l'Espace Arbitres** (accessible via le bouton discret en bas de page ou le raccourci `Ctrl + Shift + A`, protégé par le mot de passe organisateur) pour un export CSV immédiat incluant Ville et Club.
3. **Statistiques en direct via Umami Analytics** : Suivez le nombre de visites depuis les Stories Instagram / Facebook, le téléchargement des Pass Joueur et les inscriptions en direct sur votre tableau de bord Umami Cloud.

---

## ⚡ MISE EN PLACE DE VOTRE BASE CLOUD EN 2 MINUTES CHRONO

1. Rendez-vous sur [Google Sheets](https://sheets.google.com) et créez une nouvelle feuille vide.
2. Renommez-la : **« Inscriptions Le Cercle des Rois 4 »**.
3. Dans le menu en haut, cliquez sur **Extensions** > **Apps Script**.
4. Effacez le code existant, ouvrez le fichier [`google-apps-script.js`](./google-apps-script.js) de ce projet, copiez tout son contenu et collez-le dans l'éditeur Google.
5. Cliquez sur **Enregistrer** (l'icône de disquette 💾).
6. Cliquez sur le bouton bleu **Déployer** (en haut à droite) > **Nouveau déploiement**.
7. Cliquez sur l'icône d'engrenage ⚙️ à gauche de "Sélectionner le type", et choisissez **Application Web**.
8. Configurez les options :
   - **Exécuter en tant que :** *Moi*
   - **Qui a accès :** *Tout le monde (Anyone)* ⚠️ *(Indispensable pour que les téléphones des visiteurs puissent inscrire leur nom dans la feuille sans avoir besoin de se connecter à votre compte Google)*.
9. Cliquez sur **Déployer**, autorisez l'accès avec votre compte Google.
10. Copiez l'**URL de l'application Web** fournie (elle se termine par `/exec`).

**Deux manières de lier cette URL à votre site :**
- **Option Simple (dans la console Arbitre) :** Ouvrez la console (`Ctrl + Shift + A`), collez l'URL dans le champ "URL Webhook Google Apps Script", puis cliquez sur "Enregistrer".
- **Option Variable Vercel :** Dans votre tableau de bord Vercel > Settings > Environment Variables, ajoutez `GOOGLE_SHEET_WEBHOOK_URL` avec votre URL.

---

## 🚀 DÉPLOIEMENT SUR VERCEL EN 30 SECONDES

Le projet est configuré nativement pour Vercel grâce au fichier [`vercel.json`](./vercel.json) et à la fonction Serverless [`api/register.js`](./api/register.js).

1. Allez sur [vercel.com](https://vercel.com).
2. Connectez votre compte GitHub et importez ce dépôt (ou glissez-déposez le dossier complet sur le CLI Vercel `npx vercel`).
3. Vercel va automatiquement détecter le site statique et l'API Serverless.
4. Cliquez sur **Deploy**.
5. Vous obtenez immédiatement votre lien public HTTPS sécurisé (ex: `https://cercle-des-rois-4.vercel.app`), prêt à être partagé en Story Instagram !

---

## 📁 FICHIERS DU PROJET

- [**`index.html`**](./index.html) : La page web officielle du tournoi Le Cercle des Rois 4 avec visuels héroïques IA, formulaire optimisé mobile, et génération du Pass Joueur Story.
- [**`drapeau-algerie.png`**](./drapeau-algerie.png) : Emblème officiel du Drapeau de l'Algérie (médaillon haute définition).
- [**`drapeau-algerie.svg`**](./drapeau-algerie.svg) : Version vectorielle SVG du Drapeau de l'Algérie avec croissant et étoile.
- [**`api/register.js`**](./api/register.js) : Fonction API Serverless Vercel sécurisée.
- [**`vercel.json`**](./vercel.json) : Configuration officielle de déploiement et de sécurité Vercel.
- [**`google-apps-script.js`**](./google-apps-script.js) : Le code prêt à coller pour votre base Google Sheets.
- [**`hero-chess-algeria.jpg`**](./hero-chess-algeria.jpg) : Visuel cinématique 16:9 de la bataille d'échecs sous le drapeau algérien.
- [**`story-chess-algeria.jpg`**](./story-chess-algeria.jpg) : Visuel 9:16 pour le Pass Joueur Story Instagram.
- [**`docs/DESIGN.md`**](./docs/DESIGN.md) : Spécifications complètes du design system.
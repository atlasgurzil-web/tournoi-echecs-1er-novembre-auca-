# Design System — Le Cercle des Rois 4 (Hommage au 1er Novembre)

## Product Context
- **Quoi** : Plateforme officielle d'inscription et vitrine immersive pour la 4ème édition du tournoi **Le Cercle des Rois**, organisée en hommage au 1er Novembre 1954 au Café Dardara à Annaba.
- **Pour qui** : Joueurs et passionnés d'échecs de la wilaya d'Annaba et de toute l'Algérie (amateurs et compétiteurs FIDE), abonnés réseaux sociaux (Instagram Stories, Facebook, WhatsApp).
- **Espace** : Événementiel sportif de club, commémoration nationale de la Révolution algérienne et café d'échecs.
- **Type** : Marketing événementiel héroïque & Inscription mobile-first avec génération de Pass Joueur Story cinématique.
- **Memorable thing** : Une bataille d'échecs royale sous la devise du Cercle des Rois, baignée dans la lumière et la fierté du drapeau algérien.

## Aesthetic Direction
- **Direction** : Royal Grandmaster & National Pride (Le Cercle des Rois — Hommage au 1er Novembre).
- **Décoration** : Expressif & Cinématique (illustrations IA de choc tactique d'échecs sur fond du drapeau national, rubans tricolores algériens en dégradé, textures d'échiquier nocturnes, emblème royal du Roi couronné doré, croissants et étoiles lumineux, badges dorés FIDE).
- **Visuels générés & Blasons** :
  - `logo-cercle-des-rois.svg` & `logo-cercle-des-rois.png` : Emblème royal officiel (Roi d'échecs ciselé, couronne impériale dorée, lauriers d'or et médaillon patriotique Vert, Rouge, Blanc).
  - `hero-chess-algeria.jpg` (16:9) : Échiquier monumental en marbre sombre embrumé de braises dorées, dominé par un Roi en or ciselé et un Cavalier dynamique, sous les rayons volumétriques du drapeau algérien.
  - `story-chess-algeria.jpg` (9:16 portrait) : Gros plan dramatique d'une reine en onyx et d'un cavalier doré face à face avec halos vert émeraude et rouge rubis, utilisé pour le Pass Joueur Story.
- **Mood** : Royal, épique, solennel, combattif et rassembleur.

## Typography
- **Display/Hero** : `Cinzel` (Google Fonts, weights 700, 800, 900) — Prestance impériale des grands maîtres et mémoire nationale.
- **Arabic / National** : `Cairo` (Google Fonts, weights 700, 800, 900) — Calligraphie arabe officielle du club (`نادي حلقة الملوك للشطرنج — عنابة`, `دورة حلقة الملوك 4`).
- **Body / UI** : `Plus Jakarta Sans` (Google Fonts, weights 400, 500, 600, 700) — Lisibilité irréprochable sur écrans mobiles (WebViews Instagram / Facebook).
- **Data/Tables/FIDE** : `JetBrains Mono` (Google Fonts, weights 500, 700) — Tabular-nums pour les 7 rondes, dossiers `#CDR-XXX` et classements FIDE.
- **Loading** : Google Fonts préconnecté avec affichage `display=swap`.
- **Scale** : 11px (micro) / 12px (caption) / 14px (body-sm) / 16px (body) / 18px (h4) / 24px (h3) / 32px (h2) / 48px-72px (h1 hero).

## Color
- **Approche** : Expressive Patriotique & Prestige Royal
- **Primary (Vert Algérie)** : `#006233` (vert officiel du drapeau) — Bordures majeures, validations, rubans. Déclinaisons : éclatant `#008744`, sombre `#004524`.
- **Secondary (Rouge Révolution)** : `#D21034` (rouge officiel de l'étoile et du croissant) — Accents d'urgence, fermetures d'inscriptions, points cardinaux.
- **Accent (Or Impérial & Trophée)** : `#F59E0B` / `#D97706` — Badges trophées, médailles, couronne royale du Cercle des Rois.
- **Signature Club (Bleu Nuit Royal)** : `#1E3A8A` — Couleur royale profonde, liens FIDE, badges d'organisation.
- **Neutrals** :
  - `#FFFFFF` (Blanc Étoile, pureté, titres et contrastes majeurs)
  - `#F8FAFC` (Blanc ivoire pièces claires)
  - `#94A3B8` (Gris ardoise pour texte secondaire)
  - `#1E293B` (Bordures et séparateurs)
  - `#0D1527` (Cartes et surfaces verre)
  - `#060A12` (Noir nuit échiquier, fond principal)
- **Semantic** :
  - Success : `#008744` (Vert drapeau)
  - Warning : `#F59E0B` (Or ambré)
  - Error : `#D21034` (Rouge national)
  - Info : `#1E3A8A` (Bleu royal)
- **Dark mode** : Dark-first natif par essence avec overlay cinématographique pour garantir une lisibilité optimale sur les illustrations de bataille.

## Spacing
- **Base** : 4px
- **Densité** : Confortable avec zones tactiles adaptées aux écrans de smartphones (48px de hauteur minimale pour les boutons CTA).
- **Scale** : 2xs(2px) · xs(4px) · sm(8px) · md(16px) · lg(24px) · xl(32px) · 2xl(48px) · 3xl(64px).

## Layout
- **Approche** : Hybrid (Éditorial cinématique en desktop, cards empilées disciplinées en mobile).
- **Grid** : 1 colonne (mobile <640px), 2 colonnes (tablette 640-1024px), 4 colonnes métriques (desktop >1024px).
- **Max content width** : 1152px (`max-w-6xl`).
- **Border radius** : sm: 8px, md: 12px, lg: 16px, xl: 24px, full: 9999px.

## Motion
- **Approche** : Intentionnel (150ms à 250ms).
- **Easing** : `cubic-bezier(0.16, 1, 0.3, 1)` pour les ouvertures de modales et zooms du Pass Joueur.
- **Duration** : Micro-hover (150ms), transition d'état et validation (200ms), apparition modale Pass (250ms).

## Decisions Log
| Date | Décision | Rationale |
|------|----------|-----------|
| 2026-10-24 | Création initiale | /design — Direction patriotique officielle 1er Novembre pour le Tournoi d'Échecs au Café Dardara. |
| 2026-10-24 | Intégration Visuels Épiques IA | Ajout des arrière-plans cinématiques de bataille d'échecs avec le drapeau algérien (`hero-chess-algeria.jpg` et `story-chess-algeria.jpg` au ratio 9:16 pour le Pass Joueur). |
| 2026-10-25 | Rebranding : Le Cercle des Rois 4 | /interroge — Renommage du club en **Le Cercle des Rois**, tournoi officialisé comme **Le Cercle des Rois 4** (4ème Édition) en hommage au 1er Novembre. Création de l'emblème royal patriotique (Roi d'échecs & couronne), préfixe `#CDR-`, date fixée au Jeudi 29 Octobre 2026. |
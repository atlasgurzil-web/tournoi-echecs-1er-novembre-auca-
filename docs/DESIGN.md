# Design System — Tournoi d'Échecs du 1er Novembre (AUCA Annaba)

## Product Context
- **Quoi** : Plateforme officielle d'inscription et vitrine immersive pour la grande bataille échiquéenne du 1er Novembre, organisée par le Club Sportif AUCA Annaba au Café Dardara.
- **Pour qui** : Joueurs et passionnés d'échecs de la wilaya d'Annaba et d'Algérie (amateurs et compétiteurs FIDE), abonnés réseaux sociaux (Instagram Stories, Facebook, WhatsApp).
- **Espace** : Événementiel sportif associatif, commémoration nationale de la Révolution algérienne et café d'échecs.
- **Type** : Marketing événementiel héroïque & Inscription mobile-first avec génération de Pass Joueur Story cinématique.
- **Memorable thing** : Une bataille d'échecs épique baignée dans la lumière et la fierté du drapeau algérien pour la fête nationale du 1er Novembre.

## Aesthetic Direction
- **Direction** : Epic Battle Grandmaster & National Pride (Algérie 1954 - AUCA 2026).
- **Décoration** : Expressif & Cinématique (illustrations IA de choc tactique d'échecs sur fond du drapeau national, rubans tricolores algériens en dégradé, textures d'échiquier nocturnes, filigrane du lion AUCA, croissants et étoiles lumineux, badges dorés FIDE).
- **Visuels générés par IA** :
  - `hero-chess-algeria.jpg` (16:9) : Échiquier monumental en marbre sombre embrumé de braises dorées, dominé par un Roi en or ciselé et un Cavalier dynamique, sous les rayons volumétriques du drapeau algérien.
  - `story-chess-algeria.jpg` (9:16 portrait) : Gros plan dramatique d'une reine en onyx et d'un cavalier doré face à face avec halos vert émeraude et rouge rubis, utilisé pour le Pass Joueur Story.
- **Mood** : Épique, solennel, combattif et rassembleur.

## Typography
- **Display/Hero** : `Cinzel` (Google Fonts, weights 700, 800, 900) — Prestance impériale des grands maîtres et mémoire nationale.
- **Arabic / National** : `Cairo` (Google Fonts, weights 700, 800, 900) — Calligraphie arabe officielle du club AUCA (`النادي الرياضي أمل اتحاد أشبال عنابة`, `ملحمة الشطرنج بمناسبة ذكرى أول نوفمبر`).
- **Body / UI** : `Plus Jakarta Sans` (Google Fonts, weights 400, 500, 600, 700) — Lisibilité irréprochable sur écrans mobiles (WebViews Instagram / Facebook).
- **Data/Tables/FIDE** : `JetBrains Mono` (Google Fonts, weights 500, 700) — Tabular-nums pour les 7 rondes et les classements FIDE.
- **Loading** : Google Fonts préconnecté avec affichage `display=swap`.
- **Scale** : 11px (micro) / 12px (caption) / 14px (body-sm) / 16px (body) / 18px (h4) / 24px (h3) / 32px (h2) / 48px-72px (h1 hero).

## Color
- **Approche** : Expressive Patriotique & Prestige Club
- **Primary (Vert Algérie)** : `#006233` (vert officiel du drapeau) — Bordures majeures, validations, rubans. Déclinaisons : éclatant `#008744`, sombre `#004524`.
- **Secondary (Rouge Révolution)** : `#D21034` (rouge officiel de l'étoile et du croissant) — Accents d'urgence, fermetures d'inscriptions, points cardinaux.
- **Accent (Or Victoire & AUCA)** : `#F59E0B` / `#D97706` — Badges trophées, médailles, accents royaux AUCA.
- **Signature Club (Bleu Royal AUCA)** : `#0B4EA2` — Couleur historique du club au Lion, liens FIDE, badges d'organisation.
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
  - Info : `#0B4EA2` (Bleu AUCA)
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
| 2026-10-24 | Création initiale | /design — Direction patriotique officielle 1er Novembre pour le Tournoi d'Échecs AUCA au Café Dardara. |
| 2026-10-24 | Intégration Visuels Épiques IA | Ajout des arrière-plans cinématiques de bataille d'échecs avec le drapeau algérien (`hero-chess-algeria.jpg` et `story-chess-algeria.jpg` au ratio 9:16 pour le Pass Joueur). |

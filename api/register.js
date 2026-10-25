/**
 * API Serverless Vercel : /api/register
 * 
 * Reçoit l'inscription depuis n'importe quel smartphone et la relaie
 * vers votre base de données Cloud (Google Sheets / Supabase / Webhook).
 */

export default async function handler(req, res) {
  // En-têtes CORS pour autoriser les requêtes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (!data.name || data.name.trim() === '') {
      return res.status(400).json({ error: 'Le champ Nom ou Pseudo est requis.' });
    }

    // Validation et assainissement des entrées (Défense en profondeur)
    const sanitize = (val, maxLen) => {
      if (!val || typeof val !== 'string') return '';
      let s = val.trim().slice(0, maxLen);
      // Préfixe anti-formule si injection suspecte
      if (/^[=\+\-@]/.test(s)) s = "'" + s;
      return s;
    };

    const sanitizedPayload = {
      id: sanitize(data.id || 'CDR-' + Math.floor(Math.random() * 900 + 100), 20),
      timestamp: sanitize(data.timestamp || new Date().toISOString(), 35),
      name: sanitize(data.name, 80),
      firstname: sanitize(data.firstname, 80),
      city: sanitize(data.city, 80),
      club: sanitize(data.club, 80),
      phone: sanitize(data.phone, 30),
      email: sanitize(data.email, 100),
      fide: sanitize(data.fide, 60)
    };

    // 1. Relais automatique vers Google Sheets
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbxX_cs2z3rMrEnmmCWy5T72wGUqAIZV2AqcfExgigcXSaDedXUDJxM8g419NZp-rM59/exec';
    let sheetSynced = false;

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sanitizedPayload)
        });
        sheetSynced = response.ok;
      } catch (err) {
        console.error('Erreur transmission Google Sheets :', err);
      }
    }

    // 2. Réponse de succès au client
    return res.status(200).json({
      success: true,
      message: 'Inscription enregistrée avec succès dans le Cloud.',
      id: data.id,
      timestamp: data.timestamp,
      cloudSynced: sheetSynced || Boolean(webhookUrl)
    });

  } catch (error) {
    console.error('Erreur serveur /api/register :', error);
    return res.status(500).json({ error: 'Erreur interne du serveur lors de l\'enregistrement.' });
  }
}

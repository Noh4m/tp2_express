// ./routes/myRouter.js
const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/', (req, res) => {
  res.send('Page d\'accueil');
});

module.exports = router;

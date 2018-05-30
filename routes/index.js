const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('answer-form');
});

module.exports = router;

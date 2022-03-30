const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('deu certo');
});

router.get('/', (req, res) => {
  res.render('main')
})

module.exports = router
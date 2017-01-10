var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/render', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/plain', function(req, res, next) {
  res.send("hello World");
});

module.exports = router;

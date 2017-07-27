var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Studio!', place:"Dalian Studio",message: 'This is a Devops Demo' });
});

module.exports = router;

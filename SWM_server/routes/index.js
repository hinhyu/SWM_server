var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/**
 * generator 설치하면 기본적으로 생성되는 파일.
 * 우선은 건들이지 않아도 될 것 같음.
 */

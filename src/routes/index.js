var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/app', function(req, res, next) {
  response = {
    'method': 'GET',
    'path': '/',
    'body': {
      'key': 'mockapi',
      'value': '0.0.5'
    }
  }
  res.json(response);
});

module.exports = router;

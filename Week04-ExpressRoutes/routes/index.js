var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {//parent page /
  res.render('index', { title: 'Express Routes Sugita' });
});

router.get('/read', function(request,response){//child-page /read
  response.send([
    {name: 'SarahLee'},
    {name: 'Boo'}
  ]);// -> When called, it's convered to JSON (double-quote around 'name')
});

module.exports = router;

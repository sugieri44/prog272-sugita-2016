var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {//parent page /
  res.render('index', { title: 'Express Routes Sugita' });
});

router.get('/read', function(request,response){//child-page /read
  console.log('Read was called on the server', request.query); //print out the content of the query on the server's console
  response.send([
    {name: 'SarahLee'},
    {name: 'Boo', myArray: [1,2,3]},
    {result: parseInt(request.query.operatorA) + parseInt(request.query.operatorB)}
  ]);// -> When called, it's convered to JSON (double-quote around 'name'
});

router.get('/qux', function(request,response){//child-page /qux
  console.log('Qux was called on the server');//Displayed on this server's console
  response.send([
    {name: 'QuxLee'},
    {name: 'Qux'}
  ]);
});

router.get('/:id', function(request,response){//glab whatever passed in
  response.send(request.params.id);//and display
});

module.exports = router;

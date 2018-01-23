var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'xD' , suite:'ca va etre bien' });
});
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Page d\'inscription' });
});

router.post('/register', function(req,res,next){
    var login= res.get('login');
    var password= res.get('password');
    console.log ( 'Votre Login :' + login + ' et votre mdp :' + password + ' . ')
});
module.exports = router;

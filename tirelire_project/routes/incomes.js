var router = require('express').Router();
var incomesCtrl = require('../controllers/incomes');


// GET /expenses
router.get('/', isLoggedIn, incomesCtrl.index);
router.get('/new', isLoggedIn, incomesCtrl.new);
router.get('/:id', isLoggedIn, incomesCtrl.show);
router.post('/', isLoggedIn, incomesCtrl.create);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
var router = require('express').Router();
var expensesCtrl = require('../controllers/expenses');

// GET /expenses
router.get('/', isLoggedIn, expensesCtrl.index);
router.get('/new', isLoggedIn, expensesCtrl.new);
router.get('/:id', isLoggedIn, expensesCtrl.show);
router.post('/', isLoggedIn, expensesCtrl.create);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;

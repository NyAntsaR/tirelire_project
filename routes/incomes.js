var router = require('express').Router();
var incomesCtrl = require('../controllers/incomes');


// GET /expenses
router.get('/new', isLoggedIn, incomesCtrl.new);
router.get('/:id', isLoggedIn, incomesCtrl.show);
router.post('/', isLoggedIn, incomesCtrl.create);
router.get('/:id/edit', isLoggedIn, incomesCtrl.edit);
router.put('/:id', isLoggedIn, incomesCtrl.update, incomesCtrl.show);
router.delete('/:id', isLoggedIn, incomesCtrl.remove)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
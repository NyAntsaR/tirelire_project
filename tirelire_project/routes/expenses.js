var router = require('expresse').Router();
var expensesCtrl = require('../controllers/expenses');

// GET /expenses
router.get('/expenses', expensesCtrl.index);

router.get('/users', isLoggedIn, function(req, res){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
    res.render('expenses', {
      user: req.user,
      expenses: [],
      title: 'tirelire',
    })
})


module.exports = router;

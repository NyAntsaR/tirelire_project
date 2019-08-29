var express = require('express');
var router = express.Router();
var categoriesCtrl = require('../controllers/categories');

router.get('/categories/new', isLoggedIn, categoriesCtrl.new);
router.post('/categories', isLoggedIn, categoriesCtrl.create);
router.post('/expenses/:id/categories', isLoggedIn, categoriesCtrl.addToCat);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
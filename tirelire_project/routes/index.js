var router = require('express').Router();
var passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  console.log("when callend")
  // console.log(req.)
  res.redirect('/users');
});


// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


router.get('/users', function(req, res){
  if (req.isAuthenticated()) {
    console.log(req.user.name)
    // res.redirect('/expenses')
  res.render('expenses', {
    user: req.user,
    expenses: [],
    title: 'tirelire',
  })
} else {
  console.log("No auth")
  res.render('users', {
    user: null,
    title: 'tirelire',
  })
}
  console.log("CALLED ME")
  
});

module.exports = router;
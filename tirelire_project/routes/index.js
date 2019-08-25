var router = require('express').Router();
var passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  console.log('index')
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
    successRedirect : '/expenses',
    failureRedirect : '/users'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// //OAut authenticated
// router.get('/expenses', function(req, res){
//   if (req.isAuthenticated()) {

//     res.render('expenses', {
//       user: req.user,
//       expenses: [],
//       title: 'All Expenses',
//     })
//   } 
// });

// //new
// router.get('/expenses/new', function(req, res){
//   if (req.isAuthenticated()) {

//     res.render('expenses/new', {
//       user: req.user,
//       expenses: [],
//       title: 'Add Expenses',
//     })
//   } 
// });

module.exports = router;
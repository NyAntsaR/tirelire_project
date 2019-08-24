const User = require('../models/user');

module.exports = {
  index
};

function index(req, res, next) {
  console.log(req.query)
  User.find({} , function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', {
      users,
      user: req.user,
      title: req.query.name,
    });
  }); 
}

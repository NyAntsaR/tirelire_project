var Income = require('../models/income');

module.exports = {
  create
};

function create(req, res) {
  Income.findById(req.params.id, function(err, income) {
    income.icomments.push(req.body);
    income.save(function(err) {
      res.redirect(`/incomes/${income._id}`);
    });
  });
}
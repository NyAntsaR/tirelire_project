var Expense = require('../models/expense');

module.exports = {
  create
};

function create(req, res) {
  Expense.findById(req.params.id, function(err, expense) {
    expense.comments.push(req.body);
    expense.save(function(err) {
      res.redirect(`/expenses/${expense._id}`);
    });
  });
}
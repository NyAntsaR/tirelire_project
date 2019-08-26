var Category = require('../models/category');
var Expense = require('../models/expense');

module.exports = {
  new: newCategory,
  create,
  addToCat
};

function addToCat(req, res) {
  Expense.findById(req.params.id, function (err, expense) {
    expense.category.push(req.body.categoryId);
    expense.save(function (err) {
      res.redirect(`/expenses/${expense._id}`);
    });
  });
}

function create(req, res) {
    Category.create(req.body, function (err, category) {
        res.redirect('/categories/new');
    });
}

function newCategory(req, res) {
    Category.find({}, function (err, categories) {
        res.render('categories/new', {
            user: req.user,
            title: 'Add Category',
            categories
        });
    })
}
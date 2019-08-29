var Income = require('../models/income');
var Expense = require('../models/expense');
var User = require('../models/user');

module.exports = {
    show,
    new: newIncome,
    create,
    edit,
    update,
    remove
}

function show(req, res) {
    Income.findById(req.params.id, function(err, income) {
        res.render('incomes/show', {
            user: req.user,
            income,
            title: "Details"
        });
    });
}

function newIncome(req, res) {
    res.render('incomes/new', {
        user: req.user,
        title: 'Add Income',  
    })
}

function create(req, res) {
    var income = new Income(req.body);
    income.save(function (err) {
        console.log(`I Am saved: " ${income}`);
        //handle errors
        if (err) return res.redirect('/incomes/new');
        res.redirect('/expenses');
    });
}

function update(req, res, next) {
    Income.findOneAndUpdate({_id: req.params.id}, 
        req.body, 
        function(err) {
      next()
    })
}

function edit(req, res) {
    Income.findById(req.params.id, function (err, income) {
        User.findById(income.user, function(err, user) {
            res.render('incomes/edit', {
            title: 'Edit Income', 
            income, 
            user: req.user
            });
        });
    });
}

  
function remove(req, res, next) {
    Income.findOneAndDelete({_id: req.params.id})
    .exec( function (err) {
      res.redirect('/expenses');
    });
  }




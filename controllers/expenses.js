var Expense = require('../models/expense');
var Income = require('../models/income');
var Category = require('../models/category');
var User = require('../models/user');


module.exports = {
    index,
    show,
    new: newExpense,
    create,
    edit, 
    update,
    remove
}

function index(req, res) {
    console.log("index");
    Expense.find({})
    .then(function(expenses) {
        console.log(expenses);
        Income.find({})
        .then(function(incomes){
            res.render('expenses/index', {
                user: req.user,
                title: 'List',
                expenses,
                incomes
            });
        })
        .catch(function(err){
            console.log(err);
            res.render('expenses/index', {
                message: err
            });
        })
    })
}

function show(req, res) {
    console.log("show");
    Expense.findById(req.params.id)
    .populate('category')
    .exec(function(err, expense) {
        Category.find({_id: {$nin: expense.category}})
        .exec(function(err, categories) {
            console.log(categories);
            res.render('expenses/show', {
                user: req.user,
                title: "Details",
                expense,
                categories
            });
        });
    });
}

function newExpense(req, res) {
    console.log("new");
    res.render('expenses/new', {
        user: req.user,
        title: 'Add Expense',  
    })
}

function create(req, res) {
    console.log("create");
    var expense = new Expense(req.body);
    expense.save(function (err) {
        console.log(`I Am saved: " ${expense}`);
        //handle errors
        if (err) return res.redirect('/expenses/new');
        res.redirect('/expenses');
    });
}

function update(req, res, next) {
    Expense.findOneAndUpdate({_id: req.params.id}, 
        req.body, function(err) {
      next()
    })
  }

  function edit(req, res) {
    Expense.findById(req.params.id, function (err, expense) {
        res.render('expenses/edit', {
          title: 'Edit Expense', 
          expense, 
          user: req.user
        });
    });
  }
  
function remove(req, res, next) {
    Expense.findOneAndDelete({_id: req.params.id})
    .exec( function (err) {
      res.redirect('/expenses');
    });
  }
  




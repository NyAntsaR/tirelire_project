var Expense = require('../models/expense');
var Income = require('../models/income');
var Category = require('../models/category');

module.exports = {
    index,
    show,
    new: newExpense,
    create
}

function index(req, res) {
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
    res.render('expenses/new', {
        user: req.user,
        title: 'Add Expense',  
    })
}

function create(req, res) {
    var expense = new Expense(req.body);
    expense.save(function (err) {
        console.log(`I Am saved: " ${expense}`);
        //handle errors
        if (err) return res.redirect('/expenses/new');
        res.redirect('/expenses');
    });
}




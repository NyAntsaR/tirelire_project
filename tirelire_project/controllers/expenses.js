var Expense = require('../models/expense');

module.exports = {
    index,
    show,
    new: newExpense,
    create,
}

function index(req, res) {
    Expense.find({})
    .then(function(expenses) {
        console.log(expenses);
        res.render('expenses/index', {
            user: req.user,
            title: 'All Expense',
            expenses
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
    Expense.findById(req.params.id, function(err, expense) {
        res.render('expenses/show', {
            user: req.user,
            expense,
            title: "Details"
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




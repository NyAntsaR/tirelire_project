var Income = require('../models/income');

module.exports = {
    show,
    new: newIncome,
    create,
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




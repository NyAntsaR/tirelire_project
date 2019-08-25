
var User = require('../models/user');
var Expense = require('../models/expense');

module.exports = {
    index, 
}

function index(req, res) {
    Expense.find({})
    .then(expenses => {
        res.render('expenses/index', {
            user: req.user,
            title: 'Expense',
            expenses
        });
    })
    .catch(err => {
        if (err) console.log(err);
        res.render('Err')
    });
}

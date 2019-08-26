var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    store: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },

    category: [{
        type: Schema.Types.ObjectId, 
        ref: 'Category'}]
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;

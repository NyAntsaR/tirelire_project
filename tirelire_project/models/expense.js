var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
}, {
    timestamps: true
});

var expenseSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },

    category: [{
        type: Schema.Types.ObjectId, 
        ref: 'Category'
    }],

    comments: [commentSchema]

});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    store: {
        type: String,
        require: true
    }
    
})

module.exports = mongoose.model('Expense', expenseSchema);
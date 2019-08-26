var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incomeSchema = new Schema({
    name: {
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
    } 
});

const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;
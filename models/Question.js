var mongoose = require('mongoose');
var Options = require('./Options')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: ['Options'],

    answer: {
      type: Number,
      required: true
    },

    explanation:{
      type: String,
      default: ""
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Question', QuestionSchema);

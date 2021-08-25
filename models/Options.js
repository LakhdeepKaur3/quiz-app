const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  option: {
    optionId:Number,
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Options', optionSchema);
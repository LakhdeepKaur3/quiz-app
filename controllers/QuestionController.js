var Question = require("../models/Question");

var questionController = {};

// Show list of question
questionController.list = function (req, res) {
  Question.find({}).exec(function (err, questions) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.json({ questions: questions });
    }
  });
};

// Show employee by id
questionController.getById = function (req, res) {
  Question.findOne({ _id: req.params.id }).exec(function (err, question) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.json({ question: question });
    }
  });
};

// Create new question
questionController.create = function (req, res) {
  var question = new Question(req.body);

  question.save(function (err, question) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created question.");
      res.json({ message: 'Successfully created question.' })
    }
  });
};

// Update an question
questionController.update = function (req, res) {
  Question.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, question) {
    if (err) {
      console.log(err);
    }
    res.json({ question: question })
  });
};

// Delete an question
questionController.delete = function (req, res) {
  Question.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Question deleted!");
      res.json({ message: 'Question deleted successfully' });
    }
  });
};

// Validate answer
questionController.validate = function (req, res) {
  Question.findOne({ _id: req.params.id }).exec(function (err, question) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      if (question.answer === req.body.selectedOption) {
        res.json({ message: 'Correct answer.Keep it up!' })
      } else {
        res.json({ message: 'Wrong answer.Give another try!' })
      }
    }
  });
};

module.exports = questionController;

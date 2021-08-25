var express = require('express');
var router = express.Router();
var question = require("../controllers/QuestionController");
var verifyToken = require('./authenticate');

// Get all questions
router.get('/', verifyToken, function (req, res) {
  question.list(req, res);
});

// Get single question by id
router.get('/:id', verifyToken, function (req, res) {
  question.getById(req, res);
});

// Create question
router.post('/create', verifyToken, function (req, res) {
  question.create(req, res);
});

// Update Question
router.put('/update/:id', verifyToken, function (req, res) {
  question.update(req, res);
});

// Delete question
router.delete('/delete/:id',verifyToken, function (req, res, next) {
  question.delete(req, res);
});

// Delete question
router.post('/validate/:id', verifyToken, function (req, res, next) {
  question.validate(req, res);
});

module.exports = router;

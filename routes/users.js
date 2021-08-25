var express = require('express');
var router = express.Router();
var user = require("../controllers/UserController");

/* GET users listing. */
router.post('/register', function (req, res, next) {
    user.register(req, res);
});

router.post('/login', function (req, res, next) {
    user.login(req, res)
});

module.exports = router;

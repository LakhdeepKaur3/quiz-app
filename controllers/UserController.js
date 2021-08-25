var User = require("../models/User");
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var userController = {};


userController.register = async function (req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        user.save(function (err, user) {
            if (err) {
                console.log(err);
            } else {
                res.json({ message: 'User successfully registered' })
            }
        });
    } catch (error) {
        console.log('error', error)
    }
};

userController.login = async function (req, res) {
    try {
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err) throw err;
            if (!user || !bcrypt.compare(req.body.password, user.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
            }
            return res.json({ token: jwt.sign({ email: user.email, _id: user._id },'secret') });
        });
    } catch (e) {
        console.log(e)
    }
}

module.exports = userController;
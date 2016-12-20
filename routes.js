var express = require('express');
var passport = require('passport');
var Account = require('./models/user');
var router = express.Router();


// router.get('/', function (req, res) {
//     res.render('index', { user : req.user });
// });

router.get('/', function (req, res) {
  res.send('Hello World!')
})

router.get('/register', function(req, res) {
    // res.render('register', { });
    res.send('register')
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.json({user: req.user})
        });
    });
});
router.get('/get/users', function(req, res) {
    Account.find({},function(err, docs){
        res.json(docs)
    })
});

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
// });

// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

// router.get('/ping', function(req, res){
//     res.status(200).send("pong!");
// });

module.exports = router;
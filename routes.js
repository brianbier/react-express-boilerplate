var express = require('express');
var passport = require('passport');
var Account = require('./models/account');
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

router.post('/register', function(req, res,next) {
    var newUser = new Account({ username : req.body.username })
    // console.log(newUser)
    Account.register(newUser, req.body.password, function(err, account) {
        if (err) {
            console.log(err)
        }
        // console.log(account)
        // res.json({username: account.username});
        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                // res.redirect('/')
                res.json({username: account.username});
            });
        });
    });
});

router.get('/get/users', function(req, res) {
    // console.log(res)
    Account.find({},function(err, docs){
        console.log('zzzz')
        // console.log(docs)
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
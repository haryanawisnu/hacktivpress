var app = require('express')
var router = app.Router();
var user = require('../controllers/user')
var passport = require('passport');

router.post('/signin', passport.authenticate('local', {
  session: false
}), function(req, res) {
  var user = req.user;
  res.json(user);
});
router.post("/signup", user.create);

module.exports = router

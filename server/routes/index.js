var app = require('express')
var router = app.Router();
var user = require('../controllers/user')

router.post("/signin", user.signin);
router.post("/signup", user.create);

module.exports = router

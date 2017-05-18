var app = require('express')
var router = app.Router();
var user = require('./controllers/user')

router.get("/", user.showall);
router.post("/", user.create);
router.delte("/:id", user.delete);
router.put("/:id", user.update);

exports.module = router

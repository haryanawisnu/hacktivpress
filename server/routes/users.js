var app = require('express')
var router = app.Router();
var user = require('../controllers/user')

router.get("/", user.showAll);
router.get("/:id", user.showOne);
router.post("/", user.create);
router.delete("/:id", user.delete);
router.put("/:id", user.update);

module.exports = router

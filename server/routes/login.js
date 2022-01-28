const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

<<<<<<< HEAD
<<<<<<< HEAD
router.get('/', controllers.login)
router.post('/', controllers.login)
=======
router.post('/', controllers.login.post);
// router.get('/', controllers.login);
>>>>>>> edce80ede13b96963c2b8ee8b6f50112d0380966
module.exports = router;
=======
//router.get('/', controllers.login.get)
router.post("/", controllers.login.post);
module.exports = router;
>>>>>>> bb

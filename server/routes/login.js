const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

//router.get("/", controllers.login.get);
router.post("/", controllers.login.post);
module.exports = router;

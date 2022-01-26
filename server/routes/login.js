const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.get("/login", controllers.login);
router.post("/login", controllers.login);
module.exports = router;

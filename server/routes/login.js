const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.post('/', controllers.login.post);
// router.get('/', controllers.login);
module.exports = router;
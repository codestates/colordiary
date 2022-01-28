const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.user_refreshtoken)

module.exports = router;

const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.user_accesstoken);
module.exports = router;
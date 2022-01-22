const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.user_mycolor);
router.post('/', controllers.user_mycolor);
router.put('/', controllers.user_mycolor);
router.delete('/', controllers.user_mycolor);

module.exports = router;
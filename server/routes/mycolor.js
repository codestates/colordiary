const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.user_mycolor.get);
router.post('/', controllers.user_mycolor.post);
router.put('/', controllers.user_mycolor.put);
router.delete('/', controllers.user_mycolor.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers');
// const controller = require('../controllers/links');

/* GET links listing. */
// router.get('/', controller.get);
// router.post('/', controller.post);
// router.get('/:id', controller.redirect)
router.get('/user_accesstoken', controllers.user_accesstoken);
router.get('/user_refreshtoken', controllers.user_refreshtoken);
router.get('/user_mycolor', controllers.user_mycolor);

router.post('/signup', controllers.signup);
router.post('/login', controllers.login);
router.post('/user_mycolor', controllers.user_mycolor);
router.post('/user_logout', controllers.user_logout);

router.put('/user_mycolor', controllers.user_mycolor);

router.delete('/user_mycolor', controllers.user_mycolor);
router.delete('/user_delete', controllers.user_delete);

module.exports = router;

// app.get('/user_accesstoken', controllers.user_accesstoken);
// app.get('/user_refreshtoken', controllers.user_refreshtoken);
// app.get('/user_mycolor', controllers.user_mycolor);

// app.post('/signup', controllers.signup);
// app.post('/login', controllers.login);
// app.post('/user_mycolor', controllers.user_mycolor);
// app.post('/user_logout', controllers.user_logout);

// app.put('/user_mycolor', controllers.user_mycolor);

// app.delete('/user_mycolor', controllers.user_mycolor);
// app.delete('/user_delete', controllers.user_delete);
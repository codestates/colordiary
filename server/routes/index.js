const express = require('express');
const router = express.Router();
const accesstoken = require('./accesstoken')
const refreshtoken = require('./refreshtoken')
const mycolor = require('./mycolor')
const login = require('./login')
const signup = require('./signup')
const logout = require('./logout')
/* GET home page. */

router.use('/user_accesstoken', accesstoken)
router.use('/user_refreshtoken', refreshtoken);
router.use('/user_mycolor',mycolor);
router.use('/login', login)
router.use('/signup', signup)
router.use('/user_logout', logout)
module.exports = router;
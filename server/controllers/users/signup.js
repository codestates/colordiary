<<<<<<< HEAD
const { userInfo } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenfunction/token');
=======
// const { userinfo } = require('../../models');
// const { generateAccessToken, sendAccessToken } = require('../tokenfunction/token');
>>>>>>> 7788729dddf12257d93bd34562b8e2f481cb14fe

module.exports =  (req, res) => {

    res.status(500).json({message: 'signup'})

}
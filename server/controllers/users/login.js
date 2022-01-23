const { userInfo } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenfunction/token');

module.exports = (req, res) => {

    res.send('login')

}
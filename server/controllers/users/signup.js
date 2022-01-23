const { userInfo } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenfunction/token');

module.exports = async (req, res) => {

    res.status(500).json({message: 'signup'})

}
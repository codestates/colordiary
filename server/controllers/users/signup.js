const { userinfo } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {

    res.status(500).json({message: 'signup'})

}
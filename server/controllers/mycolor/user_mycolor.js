const {color} = require('../../models');
const {contents} = require('../../models');
const {music} = require('../../models');

module.exports = (req, res) => {
  res.status(500).json({message: 'color'})
}
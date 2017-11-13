'use strict'

const util =  require('../../util');

module.exports = (req, res, next) => {
  res.json(util.jsonResult(true, [1,2,4], 'request success'))
}
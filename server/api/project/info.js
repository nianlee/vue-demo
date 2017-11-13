'use strict'

const util =  require('../../util');

module.exports = (req, res, next) => {
  res.json(util.jsonResult(true, {title: 'project'}, 'request success'))
}

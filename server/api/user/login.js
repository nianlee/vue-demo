'use strict'

const util =  require('../../util');

module.exports = (req, res, next) => {
  const userName = req.body.userName
  const pwd = req.body.pwd

  if (userName === 'linian' && pwd === '123456') {
    res.json(util.jsonResult(true, {}, 'success'))
  } else {
    res.json(util.jsonResult(false, {}, 'username or password incorrect'))    
  }
};


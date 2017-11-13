'use strict'

exports.jsonResult = (success, data, message) => {
  return {
    success,
    data,
    message,
  }
}
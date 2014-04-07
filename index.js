var assert = require('assert')

module.exports = function(str, amount){
  assert(typeof str === 'string')
  assert(amount == null || typeof amount === 'string')
  amount = amount || '  '
  return str.split('\n').map(function(line){
    return amount + line
  }).join('\n')
}
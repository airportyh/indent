
var assert = require('assert');

/**
 * Indent a `string` by `w`.
 *
 * @param {String} string
 * @param {String or Number} w
 * @return {String}
 */

module.exports = function indent(string, w){
  assert('string' == typeof string);
  assert('string' == typeof w || 'number' == typeof w);
  if ('number' == typeof w) w = new Array(n + 1).join(' ');
  return string.replace(/^/m, w || '');
};
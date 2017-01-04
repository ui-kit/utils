var isTouch = require('./is-touch');
var getOffset = require('./get-offset');

var utils = {
  isTouch: isTouch.default
  getOffset: getOffset.default;
};

module.exports = utils;
module.exports['default'] = utils;
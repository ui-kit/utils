var isTouch = require('./is-touch');
var isMobile = require('./is-mobile');
var getOffset = require('./get-offset');

var utils = {
  isMobile: isMobile.default,
  isTouch: isTouch.default,
  getOffset: getOffset.default
};

module.exports = utils;
module.exports['default'] = utils;
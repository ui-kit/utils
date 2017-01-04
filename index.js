module.exports = utils;
module.exports['default'] = utils;

var isTouch = require('./is-touch').default;

function utils(base, props, statuses) {
  return {
    isTouch: isTouch
  };
};

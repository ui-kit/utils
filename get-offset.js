Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  var offset = {
    left: 0,
    top: 0
  };

  while (el) {
    offset.left += el.offsetLeft;
    offset.top += el.offsetTop;
    el = el.offsetParent;
  }

  return offset;
}

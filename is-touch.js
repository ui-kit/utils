Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (
    ('ontouchstart' in global) ||
    global.DocumentTouch &&
    document instanceof global.DocumentTouch
  ) || navigator.msMaxTouchPoints || false;
}

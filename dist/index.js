function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var Growl = function Growl(_ref) {
  var active = _ref.active,
    message = _ref.message,
    onDismissed = _ref.onDismissed,
    _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? 3 : _ref$timeout;
  var SECOND = 1000;
  React.useEffect(function () {
    if (active) setTimeout(function () {
      return onDismissed();
    }, timeout * SECOND);
  }, [active, onDismissed, timeout]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "growl" + (active ? ' active' : '')
  }, message, /*#__PURE__*/React__default.createElement("div", {
    onClick: onDismissed,
    className: "growl-close"
  }));
};
function useGrowl() {
  var _React$useState = React__default.useState(false),
    growlActive = _React$useState[0],
    setGrowlActive = _React$useState[1];
  return [growlActive, function (active) {
    setGrowlActive(active);
  }];
}

exports.Growl = Growl;
exports.useGrowl = useGrowl;
//# sourceMappingURL=index.js.map

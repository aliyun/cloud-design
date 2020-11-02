import {N as NextConfigProvider, p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, o as obj, d as classnames, R as React, g as _extends, C as Component, i as propTypes} from "./index.79f375bb.js";
var _class, _temp;
var Divider = (_temp = _class = function(_Component) {
  _inherits(Divider2, _Component);
  function Divider2() {
    _classCallCheck(this, Divider2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Divider2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, dashed = _props.dashed, direction = _props.direction, orientation = _props.orientation, children = _props.children;
    var others = obj.pickOthers(Divider2.propTypes, this.props);
    var cls = classnames((_classNames = {}, _classNames[prefix + "divider"] = true, _classNames[prefix + "divider-dashed"] = !!dashed, _classNames[prefix + "divider-" + direction] = !!direction, _classNames[prefix + "divider-with-text-" + orientation] = !!orientation && children, _classNames), className);
    return React.createElement("div", _extends({role: "separator", className: cls}, others), children && React.createElement("span", {className: prefix + "divider-inner-text"}, children));
  };
  return Divider2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  children: propTypes.any,
  className: propTypes.string,
  dashed: propTypes.bool,
  direction: propTypes.oneOf(["hoz", "ver"]),
  orientation: propTypes.oneOf(["left", "right", "center"])
}, _class.defaultProps = {
  prefix: "next-",
  direction: "hoz",
  orientation: "center",
  dashed: false
}, _temp);
Divider.displayName = "Divider";
var NextDivider = NextConfigProvider.config(polyfill(Divider));
export {NextDivider as N};

import {j as _objectWithoutProperties, R as React, d as classnames, e as _extends, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, C as Component, g as propTypes} from "./index.77174d20.js";
import {o as obj} from "./6d58cf57.js";
import {N as NextConfigProvider} from "./005127c8.js";
var customCache = new Set();
function createFromIconfontCN() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var scriptUrl = options.scriptUrl, _options$extraCommonP = options.extraCommonProps, extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
  var hasExist = customCache.has(scriptUrl);
  if (document.querySelector('script[data-namespace="' + scriptUrl + '"]')) {
    hasExist = true;
  }
  if (typeof document !== "undefined" && typeof window !== "undefined" && typeof document.createElement === "function" && typeof scriptUrl === "string" && scriptUrl.length && !hasExist) {
    var script = document.createElement("script");
    script.setAttribute("src", scriptUrl);
    script.setAttribute("data-namespace", scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }
  var Iconfont = function Iconfont2(props) {
    var _cx;
    var type = props.type, size = props.size, children = props.children, className = props.className, _props$prefix = props.prefix, prefix = _props$prefix === void 0 ? "next-" : _props$prefix, others = _objectWithoutProperties(props, ["type", "size", "children", "className", "prefix"]);
    var content = null;
    if (props.type) {
      content = React.createElement("use", {xlinkHref: "#" + type});
    }
    if (children) {
      content = children;
    }
    var classes = classnames((_cx = {}, _cx[prefix + "icon-remote"] = true, _cx), className);
    return React.createElement(NextIcon, {size}, React.createElement("svg", _extends({
      className: classes,
      focusable: false
    }, others, extraCommonProps), content));
  };
  Iconfont.displayName = "Iconfont";
  return NextConfigProvider.config(Iconfont);
}
var _class, _temp;
var Icon = (_temp = _class = function(_Component) {
  _inherits(Icon2, _Component);
  function Icon2() {
    _classCallCheck(this, Icon2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Icon2.prototype.render = function render() {
    var _cx;
    var _props = this.props, prefix = _props.prefix, type = _props.type, size = _props.size, className = _props.className, rtl = _props.rtl, style = _props.style, children = _props.children;
    var others = obj.pickOthers(_extends({}, Icon2.propTypes), this.props);
    var classes = classnames((_cx = {}, _cx[prefix + "icon"] = true, _cx[prefix + "icon-" + type] = !!type, _cx["" + prefix + size] = !!size && typeof size === "string", _cx[className] = !!className, _cx));
    if (rtl && ["arrow-left", "arrow-right", "arrow-double-left", "arrow-double-right", "switch", "sorting", "descending", "ascending"].indexOf(type) !== -1) {
      others.dir = "rtl";
    }
    var sizeStyle = typeof size === "number" ? {
      width: size,
      height: size,
      lineHeight: size + "px",
      fontSize: size
    } : {};
    return React.createElement("i", _extends({}, others, {
      style: _extends({}, sizeStyle, style),
      className: classes
    }), children);
  };
  return Icon2;
}(Component), _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  type: propTypes.string,
  children: propTypes.node,
  size: propTypes.oneOfType([propTypes.oneOf(["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl", "inherit"]), propTypes.number]),
  className: propTypes.string,
  style: propTypes.object
}), _class.defaultProps = {
  prefix: "next-",
  size: "medium"
}, _class._typeMark = "icon", _temp);
Icon.displayName = "Icon";
Icon.createFromIconfontCN = createFromIconfontCN;
var NextIcon = NextConfigProvider.config(Icon);
export {NextIcon as N};

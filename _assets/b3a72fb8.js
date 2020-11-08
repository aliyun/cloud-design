import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, o as obj, x as NextOverlay, g as _extends, h as propTypes, i as func} from "./index.112f9bd1.js";
var _class, _temp;
var Loading = (_temp = _class = function(_React$Component) {
  _inherits(Loading2, _React$Component);
  function Loading2() {
    _classCallCheck(this, Loading2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Loading2.prototype.render = function render() {
    var _classNames2, _classNames3, _classNames4;
    var _props = this.props, tip = _props.tip, visible = _props.visible, children = _props.children, className = _props.className, style = _props.style, indicator = _props.indicator, color = _props.color, prefix = _props.prefix, fullScreen = _props.fullScreen, onVisibleChange = _props.onVisibleChange, tipAlign = _props.tipAlign, size = _props.size, inline = _props.inline, rtl = _props.rtl;
    var indicatorDom = null;
    var dotCls = prefix + "loading-dot";
    if (indicator) {
      indicatorDom = indicator;
    } else {
      var _classNames;
      var backgroundColor = color;
      var fusionReactorCls = classnames((_classNames = {}, _classNames[prefix + "loading-fusion-reactor"] = true, _classNames[prefix + "loading-medium-fusion-reactor"] = size === "medium", _classNames));
      indicatorDom = React.createElement("div", {className: fusionReactorCls, dir: rtl ? "rtl" : void 0}, React.createElement("span", {className: dotCls, style: {backgroundColor}}), React.createElement("span", {className: dotCls, style: {backgroundColor}}), React.createElement("span", {className: dotCls, style: {backgroundColor}}), React.createElement("span", {className: dotCls, style: {backgroundColor}}));
    }
    var loadingCls = classnames((_classNames2 = {}, _classNames2[prefix + "loading"] = true, _classNames2[prefix + "open"] = visible, _classNames2[prefix + "loading-inline"] = inline, _classNames2[className] = className, _classNames2));
    var tipCls = classnames((_classNames3 = {}, _classNames3[prefix + "loading-tip"] = true, _classNames3[prefix + "loading-tip-fullscreen"] = fullScreen, _classNames3[prefix + "loading-right-tip"] = tipAlign === "right", _classNames3));
    var others = obj.pickOthers(Loading2.propTypes, this.props);
    var contentCls = classnames((_classNames4 = {}, _classNames4[prefix + "loading-component"] = visible, _classNames4[prefix + "loading-wrap"] = true, _classNames4));
    return fullScreen ? [children, React.createElement(NextOverlay, _extends({
      key: "overlay",
      hasMask: true,
      align: "cc cc"
    }, others, {
      className,
      style,
      visible,
      onRequestClose: onVisibleChange
    }), React.createElement("div", {className: tipCls}, React.createElement("div", {className: prefix + "loading-indicator"}, indicatorDom), React.createElement("div", {className: prefix + "loading-tip-content"}, tip), React.createElement("div", {className: prefix + "loading-tip-placeholder"}, tip)))] : React.createElement("div", _extends({className: loadingCls, style}, others), visible ? React.createElement("div", {className: tipCls}, React.createElement("div", {className: prefix + "loading-indicator"}, indicatorDom), React.createElement("div", {className: prefix + "loading-tip-content"}, tip), React.createElement("div", {className: prefix + "loading-tip-placeholder"}, tip)) : null, React.createElement("div", {className: contentCls}, visible ? React.createElement("div", {className: prefix + "loading-masker"}) : null, children));
  };
  return Loading2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  tip: propTypes.any,
  tipAlign: propTypes.oneOf(["right", "bottom"]),
  visible: propTypes.bool,
  onVisibleChange: propTypes.func,
  className: propTypes.string,
  style: propTypes.object,
  size: propTypes.oneOf(["large", "medium"]),
  indicator: propTypes.any,
  color: propTypes.string,
  fullScreen: propTypes.bool,
  children: propTypes.any,
  inline: propTypes.bool,
  rtl: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  visible: true,
  onVisibleChange: func.noop,
  animate: null,
  tipAlign: "bottom",
  size: "large",
  inline: true
}, _temp);
Loading.displayName = "Loading";
var NextLoading = NextConfigProvider.config(Loading);
export {NextLoading as N};

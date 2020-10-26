import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, k as _objectWithoutProperties, d as classnames, R as React, g as _extends, i as propTypes, C as Component, N as NextConfigProvider} from "./index.6aa7224e.js";
var _class, _temp;
var Line = (_temp = _class = function(_React$PureComponent) {
  _inherits(Line2, _React$PureComponent);
  function Line2() {
    _classCallCheck(this, Line2);
    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }
  Line2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props = this.props, prefix = _props.prefix, size = _props.size, state = _props.state, color = _props.color, percent = _props.percent, progressive = _props.progressive, hasBorder = _props.hasBorder, textRender2 = _props.textRender, className = _props.className, rtl = _props.rtl, backgroundColor = _props.backgroundColor, others = _objectWithoutProperties(_props, ["prefix", "size", "state", "color", "percent", "progressive", "hasBorder", "textRender", "className", "rtl", "backgroundColor"]);
    var suffixText = textRender2(percent, {rtl});
    var wrapCls = classnames((_classNames = {}, _classNames[prefix + "progress-line"] = true, _classNames[prefix + "progress-line-show-info"] = suffixText, _classNames[prefix + "progress-line-show-border"] = hasBorder, _classNames["" + (prefix + size)] = size, _classNames[className] = className, _classNames));
    var lineCls = classnames((_classNames2 = {}, _classNames2[prefix + "progress-line-overlay"] = true, _classNames2[prefix + "progress-line-overlay-" + state] = !color && !progressive && state, _classNames2[prefix + "progress-line-overlay-started"] = !color && progressive && percent <= 30, _classNames2[prefix + "progress-line-overlay-middle"] = !color && progressive && percent > 30 && percent < 80, _classNames2[prefix + "progress-line-overlay-finishing"] = !color && progressive && percent >= 80, _classNames2));
    var lineStyle = {
      width: (percent > 100 ? 100 : percent < 0 ? 0 : percent) + "%",
      backgroundColor: color
    };
    var underlayStyle = {backgroundColor};
    return React.createElement("div", _extends({
      dir: rtl ? "rtl" : void 0,
      role: "progressbar",
      "aria-valuenow": percent,
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      className: wrapCls
    }, others), React.createElement("div", {className: prefix + "progress-line-container"}, React.createElement("div", {
      className: prefix + "progress-line-underlay",
      style: underlayStyle
    }, React.createElement("div", {className: lineCls, style: lineStyle}))), suffixText ? React.createElement("div", {className: prefix + "progress-line-text"}, suffixText) : null);
  };
  return Line2;
}(React.PureComponent), _class.propTypes = {
  size: propTypes.oneOf(["small", "medium", "large"]),
  percent: propTypes.number,
  state: propTypes.oneOf(["normal", "success", "error"]),
  progressive: propTypes.bool,
  hasBorder: propTypes.bool,
  textRender: propTypes.func,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  rtl: propTypes.bool,
  prefix: propTypes.string,
  className: propTypes.oneOfType([propTypes.string, propTypes.object])
}, _temp);
var _class$1, _temp$1;
var VIEWBOX_WIDTH = 100;
var HALF_VIEWBOX_WIDTH = VIEWBOX_WIDTH / 2;
var DEFAULT_STROKE_WIDTH = 8;
var viewBox = "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_WIDTH;
var Circle = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Circle2, _Component);
  function Circle2(props) {
    _classCallCheck(this, Circle2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this._underlayRefHandler = function(ref) {
      _this.underlay = ref;
    };
    _this._overlayRefHandler = function(ref) {
      _this.overlay = ref;
    };
    _this.state = {
      underlayStrokeWidth: DEFAULT_STROKE_WIDTH,
      overlayStrokeWidth: DEFAULT_STROKE_WIDTH
    };
    return _this;
  }
  Circle2.prototype.componentDidMount = function componentDidMount() {
    if (this.underlay && this.overlay) {
      this.setState({
        underlayStrokeWidth: this._getCssValue(this.underlay, "stroke-width") || DEFAULT_STROKE_WIDTH,
        overlayStrokeWidth: this._getCssValue(this.overlay, "stroke-width") || DEFAULT_STROKE_WIDTH
      });
    }
  };
  Circle2.prototype._getCssValue = function _getCssValue(dom, name) {
    var css = window.getComputedStyle(dom).getPropertyValue(name);
    var regExp = /(\d*)px/g;
    var result = regExp.exec(css);
    return Array.isArray(result) ? Number(result[1]) : 0;
  };
  Circle2.prototype._computeOverlayStrokeDashOffset = function _computeOverlayStrokeDashOffset() {
    var _state = this.state, underlayStrokeWidth = _state.underlayStrokeWidth, overlayStrokeWidth = _state.overlayStrokeWidth;
    var overlayRadius = HALF_VIEWBOX_WIDTH - overlayStrokeWidth / 2 - (underlayStrokeWidth - overlayStrokeWidth) / 2;
    var overlayLen = Math.PI * 2 * overlayRadius;
    return (VIEWBOX_WIDTH - this.props.percent) / VIEWBOX_WIDTH * overlayLen;
  };
  Circle2.prototype._getPath = function _getPath(radius) {
    return "M " + HALF_VIEWBOX_WIDTH + "," + HALF_VIEWBOX_WIDTH + " m 0,-" + radius + " a " + radius + "," + radius + " 0 1 1 0," + 2 * radius + " a " + radius + "," + radius + " 0 1 1 0,-" + 2 * radius;
  };
  Circle2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props = this.props, prefix = _props.prefix, size = _props.size, state = _props.state, percent = _props.percent, className = _props.className, textRender2 = _props.textRender, progressive = _props.progressive, color = _props.color, backgroundColor = _props.backgroundColor, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "size", "state", "percent", "className", "textRender", "progressive", "color", "backgroundColor", "rtl"]);
    var _state2 = this.state, underlayStrokeWidth = _state2.underlayStrokeWidth, overlayStrokeWidth = _state2.overlayStrokeWidth;
    var underlayRadius = HALF_VIEWBOX_WIDTH - underlayStrokeWidth / 2;
    var underlayPath = this._getPath(underlayRadius);
    var overlayRadius = HALF_VIEWBOX_WIDTH - overlayStrokeWidth / 2 - (underlayStrokeWidth - overlayStrokeWidth) / 2;
    var overlayPath = this._getPath(overlayRadius);
    var overlayLen = Math.PI * 2 * overlayRadius;
    var overlayStrokeDasharray = overlayLen + "px " + overlayLen + "px";
    var overlayStrokeDashoffset = this._computeOverlayStrokeDashOffset() + "px";
    var suffixText = textRender2(percent, {rtl});
    var wrapCls = classnames((_classNames = {}, _classNames[prefix + "progress-circle"] = true, _classNames[prefix + "progress-circle-show-info"] = suffixText, _classNames["" + (prefix + size)] = size, _classNames[className] = className, _classNames));
    var pathCls = classnames((_classNames2 = {}, _classNames2[prefix + "progress-circle-overlay"] = true, _classNames2[prefix + "progress-circle-overlay-" + state] = !color && !progressive && state, _classNames2[prefix + "progress-circle-overlay-started"] = !color && progressive && percent <= 30, _classNames2[prefix + "progress-circle-overlay-middle"] = !color && progressive && percent > 30 && percent < 80, _classNames2[prefix + "progress-circle-overlay-finishing"] = !color && progressive && percent >= 80, _classNames2));
    var underlayStyle = {stroke: backgroundColor};
    return React.createElement("div", _extends({
      className: wrapCls,
      dir: rtl ? "rtl" : void 0,
      role: "progressbar",
      "aria-valuenow": percent,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, others), React.createElement("svg", {
      className: prefix + "progress-circle-container",
      viewBox
    }, React.createElement("path", {
      className: prefix + "progress-circle-underlay",
      d: underlayPath,
      fillOpacity: "0",
      ref: this._underlayRefHandler,
      style: underlayStyle
    }), React.createElement("path", {
      className: pathCls,
      d: overlayPath,
      fillOpacity: "0",
      strokeDasharray: overlayStrokeDasharray,
      strokeDashoffset: overlayStrokeDashoffset,
      ref: this._overlayRefHandler,
      stroke: color
    })), suffixText ? React.createElement("div", {className: prefix + "progress-circle-text"}, suffixText) : null);
  };
  return Circle2;
}(Component), _class$1.propTypes = {
  size: propTypes.oneOf(["small", "medium", "large"]),
  percent: propTypes.number,
  state: propTypes.oneOf(["normal", "success", "error"]),
  progressive: propTypes.bool,
  textRender: propTypes.func,
  prefix: propTypes.string,
  className: propTypes.string,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  rtl: propTypes.bool
}, _temp$1);
Circle.displayName = "Circle";
var _class$2, _temp$2;
var Progress = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Progress2, _Component);
  function Progress2() {
    _classCallCheck(this, Progress2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Progress2.prototype.render = function render() {
    var _props = this.props, shape = _props.shape, hasBorder = _props.hasBorder, others = _objectWithoutProperties(_props, ["shape", "hasBorder"]);
    return shape === "circle" ? React.createElement(Circle, others) : React.createElement(Line, _extends({}, others, {hasBorder}));
  };
  return Progress2;
}(Component), _class$2.propTypes = {
  prefix: propTypes.string,
  shape: propTypes.oneOf(["circle", "line"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  percent: propTypes.number,
  state: propTypes.oneOf(["normal", "success", "error"]),
  progressive: propTypes.bool,
  hasBorder: propTypes.bool,
  textRender: propTypes.func,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  rtl: propTypes.bool
}, _class$2.defaultProps = {
  prefix: "next-",
  shape: "line",
  state: "normal",
  size: "medium",
  percent: 0,
  progressive: false,
  hasBorder: false,
  textRender: function textRender(percent) {
    return Math.floor(percent) + "%";
  }
}, _class$2.contextTypes = {
  prefix: propTypes.string
}, _temp$2);
Progress.displayName = "Progress";
var NextProgress = NextConfigProvider.config(Progress, {
  transform: function transform(props, deprecated) {
    if ("type" in props) {
      deprecated("type", "progressive", "Progress");
      var _props = props, type = _props.type, others = _objectWithoutProperties(_props, ["type"]);
      props = _extends({progressive: type === "progressive"}, others);
    }
    if ("showInfo" in props) {
      deprecated("showInfo", "textRender", "Progress");
      var _props2 = props, showInfo = _props2.showInfo, _others = _objectWithoutProperties(_props2, ["showInfo"]);
      if (showInfo) {
        props = _others;
      } else {
        props = _extends({textRender: function textRender2() {
          return false;
        }}, _others);
      }
    }
    if ("suffix" in props) {
      deprecated("suffix", "textRender", "Progress");
      var _props3 = props, suffix = _props3.suffix, _others2 = _objectWithoutProperties(_props3, ["suffix"]);
      props = _extends({textRender: function textRender2() {
        return suffix;
      }}, _others2);
    }
    return props;
  }
});
export {NextProgress as N};

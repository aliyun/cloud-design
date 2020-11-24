import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, i as propTypes, g as _extends, j as func, e as events, p as polyfill, o as obj, K as KEYCODE, t as dom, N as NextConfigProvider, k as _objectWithoutProperties} from "./index.d0c11305.js";
import {N as NextBalloon} from "./c9f624b3.js";
function inRange(value, range, min) {
  if (!Array.isArray(range)) {
    range = [min, range];
  }
  return value >= range[0] && value <= range[1];
}
function getPercent(min, max, value) {
  return (value - min) * 100 / (max - min);
}
function getPrecision(step) {
  var precision = 0;
  var stepString = step.toString();
  if (stepString.indexOf(".") !== -1) {
    precision = stepString.length - stepString.indexOf(".") - 1;
  }
  return precision;
}
function isEqual(left, right) {
  if (Array.isArray(left)) {
    return left[0] === right[0] && left[1] === right[1];
  } else {
    return left === right;
  }
}
function getDragging(current, preValue) {
  var dragging = "upper";
  if (current > preValue[1]) {
    dragging = "upper";
  } else if (current < preValue[0]) {
    dragging = "lower";
  } else {
    var mid = (preValue[0] + preValue[1]) / 2;
    dragging = current < mid ? "lower" : "upper";
  }
  return dragging;
}
var _class, _temp;
var Scale = (_temp = _class = function(_React$Component) {
  _inherits(Scale2, _React$Component);
  function Scale2() {
    _classCallCheck(this, Scale2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Scale2.prototype._renderItems = function _renderItems() {
    var _props = this.props, min = _props.min, max = _props.max, value = _props.value, prefix = _props.prefix, scales = _props.scales, rtl = _props.rtl;
    var items = [];
    scales.forEach(function(scale, i) {
      var _classNames;
      var classes = classnames((_classNames = {}, _classNames[prefix + "range-scale-item"] = true, _classNames.activated = inRange(scale, value, min), _classNames));
      var style = void 0;
      if (rtl) {
        style = {
          right: getPercent(min, max, scale) + "%",
          left: "auto"
        };
      } else {
        style = {
          left: getPercent(min, max, scale) + "%",
          right: "auto"
        };
      }
      items.push(React.createElement("span", {className: classes, style, key: i}));
    });
    return items;
  };
  Scale2.prototype.render = function render() {
    var _classNames2;
    var prefix = this.props.prefix;
    var classes = classnames((_classNames2 = {}, _classNames2[prefix + "range-scale"] = true, _classNames2));
    var items = this._renderItems();
    return React.createElement("div", {className: classes}, items);
  };
  return Scale2;
}(React.Component), _class.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  prefix: propTypes.string,
  scales: propTypes.arrayOf(propTypes.number),
  rtl: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  min: 0,
  max: 100,
  value: 0,
  rtl: false
}, _temp);
Scale.displayName = "Scale";
var Track = function Track2(_ref) {
  var _classNames;
  var prefix = _ref.prefix;
  var classes = classnames((_classNames = {}, _classNames[prefix + "range-track"] = true, _classNames));
  return React.createElement("div", {className: classes});
};
Track.propTypes = {
  prefix: propTypes.string
};
Track.defaultProps = {
  prefix: "next-"
};
var _class$1, _temp$1;
var Selected = (_temp$1 = _class$1 = function(_React$Component) {
  _inherits(Selected2, _React$Component);
  function Selected2() {
    _classCallCheck(this, Selected2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Selected2.prototype._getStyle = function _getStyle2() {
    var _props = this.props, min = _props.min, max = _props.max, reverse = _props.reverse, rtl = _props.rtl;
    var value = this.props.value;
    if (!Array.isArray(value)) {
      value = [min, value];
    }
    var width = (value[1] - value[0]) * 100 / (max - min);
    var style = void 0;
    if (!rtl && !reverse) {
      style = {
        width: width + "%",
        left: getPercent(min, max, value[0]) + "%"
      };
    } else if (rtl && !reverse) {
      style = {
        width: width + "%",
        left: getPercent(min, max, max + min - value[1]) + "%"
      };
    } else if (!rtl && reverse) {
      style = {
        width: 100 - width + "%",
        left: getPercent(min, max, value[0]) + width + "%"
      };
    } else {
      style = {
        width: 100 - width + "%",
        left: getPercent(min, max, value[0]) + "%"
      };
    }
    return style;
  };
  Selected2.prototype._getStyleLeft = function _getStyleLeft() {
    var _props2 = this.props, min = _props2.min, max = _props2.max, rtl = _props2.rtl;
    var value = this.props.value;
    if (!Array.isArray(value)) {
      value = [min, value];
    }
    var style = {
      width: getPercent(min, max, value[0]) + "%",
      left: 0
    };
    if (rtl) {
      style.width = 100 - getPercent(min, max, value[1]) + "%";
    }
    return style;
  };
  Selected2.prototype._getStyleRight = function _getStyleRight() {
    var _props3 = this.props, min = _props3.min, max = _props3.max, rtl = _props3.rtl;
    var value = this.props.value;
    if (!Array.isArray(value)) {
      value = [min, value];
    }
    var width = (value[1] - value[0]) * 100 / (max - min);
    var style = {
      width: 100 - getPercent(min, max, value[0]) - width + "%",
      left: getPercent(min, max, value[0]) + width + "%"
    };
    if (rtl) {
      style = {
        width: getPercent(min, max, value[0]) + "%",
        left: 100 - getPercent(min, max, value[0]) + "%"
      };
    }
    return style;
  };
  Selected2.prototype.render = function render() {
    var _classNames;
    var _props4 = this.props, prefix = _props4.prefix, slider = _props4.slider, reverse = _props4.reverse, rtl = _props4.rtl;
    var classes = classnames((_classNames = {}, _classNames[prefix + "range-selected"] = true, _classNames));
    var SeletedComps = React.createElement("div", {className: classes, style: this._getStyle()});
    if (slider === "double" && reverse) {
      SeletedComps = React.createElement("div", null, React.createElement("div", {className: classes, style: this._getStyleLeft()}), React.createElement("div", {className: classes, style: this._getStyleRight()}));
    }
    return SeletedComps;
  };
  return Selected2;
}(React.Component), _class$1.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  slider: propTypes.string,
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  prefix: propTypes.string,
  reverse: propTypes.bool,
  rtl: propTypes.bool
}, _class$1.defaultProps = {
  prefix: "next-",
  slider: "single",
  min: 0,
  max: 100,
  value: 0,
  reverse: false,
  rtl: false
}, _temp$1);
Selected.displayName = "Selected";
var _class$2, _temp$2;
var Mark = (_temp$2 = _class$2 = function(_React$Component) {
  _inherits(Mark2, _React$Component);
  function Mark2() {
    _classCallCheck(this, Mark2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Mark2.prototype._renderItems = function _renderItems() {
    var _props = this.props, min = _props.min, max = _props.max, value = _props.value, prefix = _props.prefix, marks = _props.marks, rtl = _props.rtl;
    var items = [];
    Object.keys(marks).forEach(function(mark, i) {
      var _classNames;
      var classes = classnames((_classNames = {}, _classNames[prefix + "range-mark-text"] = true, _classNames.activated = inRange(mark, value, min), _classNames));
      var style = void 0;
      if (rtl) {
        style = {
          right: getPercent(min, max, mark) + "%",
          left: "auto"
        };
      } else {
        style = {
          left: getPercent(min, max, mark) + "%",
          right: "auto"
        };
      }
      items.push(React.createElement("span", {className: classes, style, key: i}, marks[mark]));
    });
    return items;
  };
  Mark2.prototype.render = function render() {
    var _classNames2;
    var _props2 = this.props, prefix = _props2.prefix, marksPosition = _props2.marksPosition;
    var className = marksPosition === "above" ? prefix + "range-mark-above" : prefix + "range-mark-below";
    var classes = classnames(className, (_classNames2 = {}, _classNames2[prefix + "range-mark"] = true, _classNames2));
    var items = this._renderItems();
    return React.createElement("div", {className: classes}, items);
  };
  return Mark2;
}(React.Component), _class$2.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  prefix: propTypes.string,
  marks: propTypes.object,
  marksPosition: propTypes.string,
  rtl: propTypes.bool
}, _class$2.defaultProps = {
  prefix: "next-",
  min: 0,
  max: 100,
  value: 0,
  marksPosition: "",
  rtl: false
}, _temp$2);
Mark.displayName = "Mark";
function _getProps(min, max, value, rtl) {
  return {
    style: {
      left: rtl ? 100 - getPercent(min, max, value) + "%" : getPercent(min, max, value) + "%",
      zIndex: 100
    },
    "aria-valuenow": value,
    "aria-valuetext": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  };
}
function Slider(_ref) {
  var _classNames;
  var prefix = _ref.prefix, hasMovingClass = _ref.hasMovingClass, min = _ref.min, max = _ref.max, value = _ref.value, onKeyDown = _ref.onKeyDown, rtl = _ref.rtl;
  var classes = classnames((_classNames = {}, _classNames[prefix + "range-slider"] = true, _classNames[prefix + "range-slider-moving"] = hasMovingClass, _classNames));
  return React.createElement("div", _extends({
    className: classes,
    onKeyDown,
    role: "slider",
    tabIndex: 0
  }, _getProps(min, max, value, rtl)), React.createElement("div", {className: prefix + "range-slider-inner"}));
}
Slider.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  value: propTypes.number,
  prefix: propTypes.string,
  hasMovingClass: propTypes.bool,
  rtl: propTypes.bool
};
Slider.defaultProps = {
  prefix: "next-",
  min: 0,
  max: 100,
  value: 0,
  hasMovingClass: false,
  rtl: false
};
var _class$3, _temp$3;
var Tooltip = NextBalloon.Tooltip;
var noop = func.noop;
function _getStyle(min, max, value, rtl) {
  if (rtl) {
    return {
      left: getPercent(min, max, max + min - value[1]) + "%",
      right: getPercent(min, max, value[0]) + "%"
    };
  }
  return {
    left: getPercent(min, max, value[0]) + "%",
    right: 100 - getPercent(min, max, value[1]) + "%"
  };
}
function sliderFrag(props) {
  var prefix = props.prefix, min = props.min, max = props.max, value = props.value, disabled = props.disabled, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, rtl = props.rtl;
  var activeClass = !disabled && props.hasMovingClass ? prefix + "range-active" : "";
  return React.createElement("div", {
    className: prefix + "range-frag " + activeClass,
    style: _getStyle(min, max, value, rtl),
    onMouseEnter,
    onMouseLeave,
    onMouseDown
  }, React.createElement("div", {className: prefix + "range-selected"}), React.createElement("div", {className: prefix + "range-slider"}, React.createElement("div", {className: prefix + "range-slider-inner"})), React.createElement("div", {className: prefix + "range-slider"}, React.createElement("div", {className: prefix + "range-slider-inner"})));
}
sliderFrag.propTypes = {
  prefix: propTypes.string,
  min: propTypes.number,
  max: propTypes.number,
  hasMovingClass: propTypes.bool,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onMouseDown: propTypes.func,
  value: propTypes.arrayOf(propTypes.number),
  disabled: propTypes.bool,
  rtl: propTypes.bool
};
var FixedSlider = (_temp$3 = _class$3 = function(_React$Component) {
  _inherits(FixedSlider2, _React$Component);
  function FixedSlider2(props) {
    _classCallCheck(this, FixedSlider2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _this.state = {
      hasMovingClass: false,
      onTooltipVisibleChange: false,
      tooltipAnimation: true
    };
    return _this;
  }
  FixedSlider2.prototype._onMouseEnter = function _onMouseEnter() {
    if (!(this.keyState === "down")) {
      this.keyState = "enter";
    }
    this.setState({
      hasMovingClass: true
    });
  };
  FixedSlider2.prototype._onMouseLeave = function _onMouseLeave() {
    if (this.keyState === "enter") {
      this.setState({
        hasMovingClass: false
      });
    }
  };
  FixedSlider2.prototype._onMouseDown = function _onMouseDown() {
    this.keyState = "down";
    this.setState({
      hasMovingClass: true
    });
    this._addDocumentEvents();
  };
  FixedSlider2.prototype._onMouseUp = function _onMouseUp() {
    if (this.keyState === "down") {
      this.keyState = "";
      this._removeDocumentEvents();
      this.setState({
        hasMovingClass: false
      });
    }
  };
  FixedSlider2.prototype._addDocumentEvents = function _addDocumentEvents() {
    this._onMouseUpListener = events.on(document, "mouseup", this._onMouseUp.bind(this));
  };
  FixedSlider2.prototype._removeDocumentEvents = function _removeDocumentEvents() {
    if (this._onMouseUpListener) {
      this._onMouseUpListener.off();
      this._onMouseUpListener = null;
    }
  };
  FixedSlider2.prototype.render = function render() {
    var _props = this.props, hasTip = _props.hasTip, value = _props.value, tipRender3 = _props.tipRender, tooltipVisible = _props.tooltipVisible, hasMovingClass = _props.hasMovingClass;
    var addedProps = {
      hasMovingClass: hasMovingClass || this.state.hasMovingClass,
      onMouseEnter: this._onMouseEnter.bind(this),
      onMouseLeave: this._onMouseLeave.bind(this),
      onMouseDown: this._onMouseDown.bind(this)
    };
    return hasTip ? React.createElement(Tooltip, {
      popupContainer: function popupContainer(target) {
        return target.parentNode;
      },
      popupProps: {
        visible: tooltipVisible || hasMovingClass,
        animation: this.state.tooltipAnimation ? {in: "expandInUp", out: "expandOutDown"} : false
      },
      trigger: sliderFrag(_extends({}, this.props, addedProps)),
      align: "t"
    }, tipRender3(value[0] + "-" + value[1])) : sliderFrag(_extends({}, this.props, addedProps));
  };
  return FixedSlider2;
}(React.Component), _class$3.propTypes = {
  hasTip: propTypes.bool,
  tooltipVisible: propTypes.bool,
  onTooltipVisibleChange: propTypes.func,
  tooltipAnimation: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  tipRender: propTypes.func,
  disabled: propTypes.bool,
  hasMovingClass: propTypes.bool,
  rtl: propTypes.bool
}, _class$3.defaultProps = {
  disabled: false,
  hasTip: true,
  onChange: noop,
  onProcess: noop,
  tipRender: function tipRender(value) {
    return value;
  },
  reverse: false,
  rtl: false
}, _temp$3);
FixedSlider.displayName = "FixedSlider";
var _class$4, _temp$4;
var Tooltip$1 = NextBalloon.Tooltip;
var noop$1 = func.noop, bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
function _isMultiple(slider, isFixedWidth) {
  return isFixedWidth || slider === "double";
}
function LowerSlider(props) {
  var hasTip = props.hasTip, value = props.value, tipRender3 = props.tipRender, slider = props.slider, tooltipVisible = props.tooltipVisible, onTooltipVisibleChange = props.onTooltipVisibleChange, tooltipAnimation = props.tooltipAnimation;
  if (_isMultiple(slider)) {
    return hasTip ? React.createElement(Tooltip$1, {
      popupContainer: function popupContainer(target) {
        return target.parentNode;
      },
      popupProps: {
        visible: tooltipVisible,
        onVisibleChange: onTooltipVisibleChange,
        animation: tooltipAnimation,
        needAdjust: false
      },
      trigger: Slider(_extends({}, props, {value: value[0]})),
      align: "t"
    }, tipRender3("" + value[0])) : Slider(_extends({}, props, {value: value[0]}));
  }
  return null;
}
LowerSlider.propTypes = {
  hasTip: propTypes.bool,
  tooltipVisible: propTypes.bool,
  onTooltipVisibleChange: propTypes.func,
  tooltipAnimation: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  tipRender: propTypes.func,
  slider: propTypes.oneOf(["single", "double"])
};
function UpperSlider(props) {
  var newprop = _extends({}, props);
  var hasTip = newprop.hasTip, value = newprop.value, tipRender3 = newprop.tipRender, slider = newprop.slider, tooltipVisible = newprop.tooltipVisible, onTooltipVisibleChange = newprop.onTooltipVisibleChange, tooltipAnimation = newprop.tooltipAnimation;
  if (_isMultiple(slider)) {
    delete newprop.onKeyDown;
    return hasTip ? React.createElement(Tooltip$1, {
      popupContainer: function popupContainer(target) {
        return target.parentNode;
      },
      popupProps: {
        visible: tooltipVisible,
        onVisibleChange: onTooltipVisibleChange,
        animation: tooltipAnimation,
        needAdjust: false
      },
      trigger: Slider(_extends({}, newprop, {value: value[1]})),
      align: "t"
    }, tipRender3(value[1])) : Slider(_extends({}, newprop, {value: value[1]}));
  }
  return hasTip ? React.createElement(Tooltip$1, {
    popupContainer: function popupContainer(target) {
      return target.parentNode;
    },
    popupProps: {
      visible: tooltipVisible,
      onVisibleChange: onTooltipVisibleChange,
      animation: tooltipAnimation,
      needAdjust: false
    },
    animation: {
      in: "fadeInUp",
      out: "fadeOutDown"
    },
    trigger: Slider(newprop),
    align: "t"
  }, tipRender3(value)) : Slider(newprop);
}
UpperSlider.propTypes = {
  hasTip: propTypes.bool,
  tooltipVisible: propTypes.bool,
  onTooltipVisibleChange: propTypes.func,
  tooltipAnimation: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  tipRender: propTypes.func,
  slider: propTypes.oneOf(["single", "double"])
};
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
var Range = (_temp$4 = _class$4 = function(_React$Component) {
  _inherits(Range2, _React$Component);
  function Range2(props) {
    _classCallCheck(this, Range2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    var min = props.min;
    var initialValue = _isMultiple(props.slider) ? [min, min] : min;
    var defaultValue = "defaultValue" in props ? props.defaultValue : initialValue;
    var value = props.value !== void 0 ? props.value : defaultValue;
    _this.state = {
      value,
      tempValue: value,
      hasMovingClass: false,
      lowerTooltipVisible: false,
      upperTooltipVisible: false,
      tooltipAnimation: true
    };
    bindCtx(_this, ["handleLowerTooltipVisibleChange", "handleUpperTooltipVisibleChange", "onKeyDown"]);
    return _this;
  }
  Range2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if ("value" in props) {
      var min = props.min, slider = props.slider, value = props.value;
      var hasMovingClass = state.hasMovingClass;
      var newState = {
        value
      };
      if (value === void 0) {
        newState.value = _isMultiple(slider) ? [min, min] : min;
      }
      if (!hasMovingClass) {
        newState.tempValue = newState.value;
      }
      return newState;
    }
    return null;
  };
  Range2.prototype._marksToScales = function _marksToScales(marks) {
    var result = [];
    if (Object.prototype.toString.call(marks) === "[object Object]") {
      for (var key in marks) {
        if (Object.hasOwnProperty.call(marks, key)) {
          result.push(parseInt(key));
        }
      }
    } else {
      result = marks;
    }
    return result;
  };
  Range2.prototype._calcScales = function _calcScales() {
    var _props = this.props, min = _props.min, max = _props.max, marks = _props.marks;
    var scales = this._marksToScales(marks);
    if (scales !== false) {
      if (Array.isArray(scales)) {
        return scales;
      } else {
        var pace = (max - min) / scales;
        var result = [];
        result.push(min);
        for (var i = 1; i < scales; i++) {
          result.push(min + i * pace);
        }
        result.push(max);
        return result;
      }
    } else {
      return [];
    }
  };
  Range2.prototype._calcMarks = function _calcMarks() {
    var _props2 = this.props, min = _props2.min, max = _props2.max, marks = _props2.marks;
    var result = {};
    if (Array.isArray(marks)) {
      marks.forEach(function(m) {
        result[m] = m.toString();
      });
    } else if (typeof marks === "number") {
      var pace = (max - min) / marks;
      result[min] = min;
      for (var i = 1; i < marks; i++) {
        var mark = min + i * pace;
        var precision = getPrecision(mark);
        if (precision > 2) {
          precision = 2;
        }
        mark = mark.toFixed(precision);
        result[mark] = mark;
      }
      result[max] = max;
    } else {
      result = marks;
    }
    return result;
  };
  Range2.prototype._onMouseDown = function _onMouseDown(e) {
    if (e.button === 0) {
      this._start(e.pageX);
      this._addDocumentMouseEvents();
      pauseEvent(e);
    }
  };
  Range2.prototype._onTouchStart = function _onTouchStart(e) {
    this._start(e.targetTouches[0].pageX);
    this._addDocumentTouchEvents();
    e.stopPropagation();
  };
  Range2.prototype.onKeyDown = function onKeyDown(e) {
    if (this.props.disabled)
      return;
    if (e.keyCode === KEYCODE.LEFT_ARROW || e.keyCode === KEYCODE.RIGHT_ARROW) {
      e.stopPropagation();
      e.preventDefault();
      var newValue = void 0;
      if (e.keyCode === KEYCODE.LEFT_ARROW) {
        newValue = this.state.value - this.props.step;
      } else {
        newValue = this.state.value + this.props.step;
      }
      if (newValue > this.props.max) {
        newValue = this.props.max;
      }
      if (newValue < this.props.min) {
        newValue = this.props.min;
      }
      if (newValue !== this.state.value) {
        this.setState({
          value: newValue
        });
        this.props.onChange(newValue);
      }
    }
  };
  Range2.prototype._start = function _start(position) {
    this.setState({
      hasMovingClass: true
    });
    var tempValue = this.state.tempValue;
    var range = this.dom;
    var start = dom.getOffset(range).left;
    var width = range.clientWidth;
    if (!width) {
      if (range.style.width) {
        var index = range.style.width.indexOf("px");
        if (index !== -1) {
          width = Number(range.style.width.slice(0, index));
        }
      }
    }
    this._moving = {
      start,
      end: start + width,
      startValue: tempValue
    };
    this._onProcess(position, true);
  };
  Range2.prototype._end = function _end() {
    var startValue = this._moving.startValue;
    var _state = this.state, tempValue = _state.tempValue, value = _state.value;
    this._moving = null;
    this._removeDocumentEvents();
    this.setState({
      hasMovingClass: false,
      lowerTooltipVisible: false,
      upperTooltipVisible: false,
      tooltipAnimation: true
    });
    if (!isEqual(tempValue, startValue)) {
      if (!("value" in this.props)) {
        this.setState({
          value: tempValue
        });
      } else {
        this.setState({
          tempValue: value,
          value
        });
      }
      this.props.onChange(tempValue);
    }
  };
  Range2.prototype._move = function _move(e) {
    var position = e.type === "mousemove" ? e.pageX : e.targetTouches[0].pageX;
    this._onProcess(position);
  };
  Range2.prototype._onProcess = function _onProcess(position, start) {
    var tempValue = this.state.tempValue;
    var current = this._positionToCurrent(position);
    if (this.isFixedWidth) {
      if (start) {
        this.lastPosition = current;
      }
    } else if (start) {
      this.lastPosition = current;
      if (_isMultiple(this.props.slider)) {
        this._moving.dragging = getDragging(current, tempValue);
      } else {
        this._moving.dragging = "upper";
      }
      this.setState({
        lowerTooltipVisible: this._moving.dragging === "lower",
        upperTooltipVisible: this._moving.dragging === "upper",
        tooltipAnimation: false
      });
    } else if (this.oldDragging === "lower" && this._moving.dragging === "upper") {
      this.setState({
        upperTooltipVisible: true,
        lowerTooltipVisible: false
      });
    } else if (this.oldDragging === "upper" && this._moving.dragging === "lower") {
      this.setState({
        upperTooltipVisible: false,
        lowerTooltipVisible: true
      });
    }
    this.oldDragging = this._moving.dragging;
    var nextValue = this._currentToValue(current, tempValue, this.lastPosition, this.isFixedWidth);
    this.lastPosition = current;
    if (!isEqual(nextValue, tempValue)) {
      this.setState({
        tempValue: nextValue
      });
      this.props.onProcess(nextValue);
    }
  };
  Range2.prototype._addDocumentMouseEvents = function _addDocumentMouseEvents() {
    this._onMouseMoveListener = events.on(document, "mousemove", this._move.bind(this));
    this._onMouseUpListener = events.on(document, "mouseup", this._end.bind(this));
  };
  Range2.prototype._addDocumentTouchEvents = function _addDocumentTouchEvents() {
    this._onTouchMoveListener = events.on(document, "touchmove", this._move.bind(this));
    this._onTouchEndListener = events.on(document, "touchend", this._end.bind(this));
  };
  Range2.prototype._removeDocumentEvents = function _removeDocumentEvents() {
    if (this._onMouseMoveListener) {
      this._onMouseMoveListener.off();
      this._onMouseMoveListener = null;
    }
    if (this._onMouseUpListener) {
      this._onMouseUpListener.off();
      this._onMouseUpListener = null;
    }
    if (this._onTouchMoveListener) {
      this._onTouchMoveListener.off();
      this._onTouchMoveListener = null;
    }
    if (this._onTouchEndListener) {
      this._onTouchEndListener.off();
      this._onTouchEndListener = null;
    }
  };
  Range2.prototype._positionToCurrent = function _positionToCurrent(position) {
    var _moving = this._moving, start = _moving.start, end = _moving.end;
    var _props3 = this.props, step = _props3.step, min = _props3.min, max = _props3.max, rtl = _props3.rtl;
    if (position < start) {
      position = start;
    } else if (position > end) {
      position = end;
    }
    var percent = getPercent(start, end, position);
    percent = rtl ? 100 - percent : percent;
    var newValue = parseFloat((Math.round(percent / 100 * (max - min) / step) * step).toFixed(getPrecision(step)));
    return min + newValue;
  };
  Range2.prototype._currentToValue = function _currentToValue(current, preValue, lastPosition, isFixedWidth) {
    var dragging = this._moving.dragging;
    var _props4 = this.props, min = _props4.min, max = _props4.max;
    if (!_isMultiple(this.props.slider, isFixedWidth)) {
      return current;
    } else {
      var result = void 0;
      var precision = getPrecision(this.props.step);
      var diff = current - lastPosition;
      var newLeft = +(+preValue[0] + diff).toFixed(precision);
      var newRight = +(+preValue[1] + diff).toFixed(precision);
      var newMaxLeft = +(max - preValue[1] + preValue[0]).toFixed(precision);
      var newMinRight = +(min + preValue[1] - preValue[0]).toFixed(precision);
      if (isFixedWidth) {
        if (newLeft < min) {
          result = [min, newMinRight];
        } else if (newRight > max) {
          result = [newMaxLeft, max];
        } else {
          result = [newLeft, newRight];
        }
      } else if (dragging === "lower") {
        if (current > preValue[1]) {
          result = [preValue[1], current];
          this._moving.dragging = "upper";
        } else {
          result = [current, preValue[1]];
        }
      } else if (dragging === "upper") {
        if (current < preValue[0]) {
          result = [current, preValue[0]];
          this._moving.dragging = "lower";
        } else {
          result = [preValue[0], current];
        }
      }
      return result;
    }
  };
  Range2.prototype.handleLowerTooltipVisibleChange = function handleLowerTooltipVisibleChange(visible) {
    if (this.state.hasMovingClass) {
      return;
    }
    this.setState({
      lowerTooltipVisible: visible
    });
  };
  Range2.prototype.handleUpperTooltipVisibleChange = function handleUpperTooltipVisibleChange(visible) {
    if (this.state.hasMovingClass) {
      return;
    }
    this.setState({
      upperTooltipVisible: visible
    });
  };
  Range2.prototype.render = function render() {
    var _classNames, _this2 = this;
    var value = this._moving ? this.state.tempValue : this.state.value;
    var _props5 = this.props, prefix = _props5.prefix, min = _props5.min, max = _props5.max, disabled = _props5.disabled, style = _props5.style, id = _props5.id, slider = _props5.slider, reverse = _props5.reverse, className = _props5.className, marks = _props5.marks, marksPosition = _props5.marksPosition, hasTip = _props5.hasTip, tipRender3 = _props5.tipRender, fixedWidth = _props5.fixedWidth, defaultValue = _props5.defaultValue, tooltipVisible = _props5.tooltipVisible, rtl = _props5.rtl, isPreview = _props5.isPreview, renderPreview = _props5.renderPreview;
    var others = pickOthers(Object.keys(Range2.propTypes), this.props);
    var classes = classnames((_classNames = {}, _classNames[prefix + "range"] = true, _classNames.disabled = disabled, _classNames[className] = className, _classNames));
    if (Array.isArray(value)) {
      value.forEach(function(item, index) {
        if (item > max) {
          value[index] = max;
        }
      });
    } else if (value > max) {
      value = max;
    }
    var commonProps = {
      prefix,
      min,
      max,
      value,
      reverse,
      slider,
      hasTip,
      tipRender: tipRender3,
      marksPosition,
      tooltipVisible,
      hasMovingClass: this.state.hasMovingClass,
      disabled,
      rtl
    };
    this.isFixedWidth = fixedWidth && (value ? Array.isArray(value) : defaultValue ? Array.isArray(defaultValue) : false);
    if (isPreview) {
      var previewCls = classnames(className, prefix + "form-preview");
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({
          id,
          dir: rtl ? "rtl" : "ltr"
        }, others, {
          className: previewCls
        }), renderPreview(value, this.props));
      }
      return React.createElement("p", _extends({
        id,
        dir: rtl ? "rtl" : "ltr"
      }, others, {
        className: previewCls
      }), Array.isArray(value) ? value.join("~") : value);
    }
    return React.createElement("div", _extends({
      ref: function ref(dom2) {
        _this2.dom = dom2;
      }
    }, others, {
      style,
      className: classes,
      id,
      dir: rtl ? "rtl" : "ltr",
      onMouseDown: disabled ? noop$1 : this._onMouseDown.bind(this),
      onTouchStart: disabled ? noop$1 : this._onTouchStart.bind(this)
    }), marks !== false && marksPosition === "above" ? React.createElement(Mark, _extends({}, commonProps, {marks: this._calcMarks()})) : null, React.createElement("div", {className: prefix + "range-inner"}, React.createElement(Scale, _extends({}, commonProps, {scales: this._calcScales()})), React.createElement(Track, commonProps), this.isFixedWidth ? React.createElement(FixedSlider, commonProps) : React.createElement("div", null, React.createElement(Selected, commonProps), React.createElement(LowerSlider, _extends({}, commonProps, {
      hasMovingClass: this.state.hasMovingClass && this._moving && this._moving.dragging === "lower",
      tooltipVisible: tooltipVisible || this.state.lowerTooltipVisible,
      onTooltipVisibleChange: this.handleLowerTooltipVisibleChange,
      tooltipAnimation: this.state.tooltipAnimation ? {
        in: "expandInUp",
        out: "expandOutDown"
      } : false
    })), React.createElement(UpperSlider, _extends({}, commonProps, {
      onKeyDown: this.onKeyDown,
      hasMovingClass: this.state.hasMovingClass && this._moving && this._moving.dragging === "upper",
      tooltipVisible: tooltipVisible || this.state.upperTooltipVisible,
      onTooltipVisibleChange: this.handleUpperTooltipVisibleChange,
      tooltipAnimation: this.state.tooltipAnimation ? {
        in: "expandInUp",
        out: "expandOutDown"
      } : false
    })))), marks !== false && marksPosition === "below" ? React.createElement(Mark, _extends({}, commonProps, {marks: this._calcMarks()})) : null);
  };
  return Range2;
}(React.Component), _class$4.contextTypes = {
  prefix: propTypes.string
}, _class$4.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
  slider: propTypes.oneOf(["single", "double"]),
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  value: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  tempValue: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  defaultValue: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  marks: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.arrayOf(propTypes.number), propTypes.object]),
  marksPosition: propTypes.oneOf(["above", "below"]),
  disabled: propTypes.bool,
  onChange: propTypes.func,
  onProcess: propTypes.func,
  hasTip: propTypes.bool,
  tipRender: propTypes.func,
  id: propTypes.string,
  reverse: propTypes.bool,
  pure: propTypes.bool,
  fixedWidth: propTypes.bool,
  tooltipVisible: propTypes.bool,
  rtl: propTypes.bool,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}, _class$4.defaultProps = {
  prefix: "next-",
  slider: "single",
  min: 0,
  max: 100,
  step: 1,
  marks: false,
  disabled: false,
  fixedWidth: false,
  tooltipVisible: false,
  hasTip: true,
  onChange: noop$1,
  onProcess: noop$1,
  tipRender: function tipRender2(value) {
    return value;
  },
  reverse: false,
  pure: false,
  marksPosition: "above",
  rtl: false,
  isPreview: false
}, _temp$4);
Range.displayName = "Range";
var Range$1 = polyfill(Range);
var NextRange = NextConfigProvider.config(Range$1, {
  transform: function transform(props, deprecated) {
    if ("hasTips" in props) {
      deprecated("hasTips", "hasTip", "Range");
      var _props = props, hasTips = _props.hasTips, others = _objectWithoutProperties(_props, ["hasTips"]);
      props = _extends({hasTip: hasTips}, others);
    }
    if ("tipFormatter" in props) {
      deprecated("tipFormatter", "tipRender", "Range");
      var _props2 = props, tipFormatter = _props2.tipFormatter, _others = _objectWithoutProperties(_props2, ["tipFormatter"]);
      props = _extends({tipRender: tipFormatter}, _others);
    }
    return props;
  }
});
const Range$2 = React.forwardRef(({marksPosition = "below", ...restProps}, ref) => {
  return /* @__PURE__ */ React.createElement(NextRange, {
    marksPosition,
    ref,
    ...restProps
  });
});
export {Range$2 as R};

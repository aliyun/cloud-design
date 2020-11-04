import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, h as propTypes, i as func, k as _objectWithoutProperties, g as _extends, C as Component, z as zhCN, K as KEYCODE} from "./index.09bdaa64.js";
import {h as hooks} from "./cf6ed2e0.js";
function checkMomentObj(props, propName, componentName) {
  if (props[propName] && !hooks.isMoment(props[propName])) {
    return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Required a moment object");
  }
}
function checkDateValue(props, propName, componentName) {
  if (props[propName] && !hooks.isMoment(props[propName]) && typeof props[propName] !== "string") {
    return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Required a moment object or format date string!");
  }
}
function formatDateValue(value, format) {
  var val = typeof value === "string" ? hooks(value, format, true) : value;
  if (val && hooks.isMoment(val) && val.isValid()) {
    return val;
  }
  return null;
}
var _class, _temp2;
function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments.length <= 0 ? void 0 : arguments[0], 10);
  };
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  requestAnimationFrame(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) {
      return;
    }
    scrollTo(element, to, duration - 10);
  });
}
var noop = function noop2() {
};
var TimeMenu = (_temp2 = _class = function(_React$Component) {
  _inherits(TimeMenu2, _React$Component);
  function TimeMenu2() {
    var _temp, _this, _ret;
    _classCallCheck(this, TimeMenu2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._menuRefHandler = function(ref) {
      _this.menu = ref;
    }, _this.createMenuItems = function(list) {
      var _this$props = _this.props, prefix = _this$props.prefix, mode = _this$props.mode, disabled = _this$props.disabled, disabledItems2 = _this$props.disabledItems, activeIndex = _this$props.activeIndex, onSelect2 = _this$props.onSelect, renderTimeMenuItems2 = _this$props.renderTimeMenuItems, timeValue = _this$props.value;
      list = renderTimeMenuItems2(list, mode, timeValue) || list;
      return list.map(function(_ref) {
        var _classnames;
        var label = _ref.label, value = _ref.value;
        var isDisabled = disabled || disabledItems2(value);
        var itemCls = classnames((_classnames = {}, _classnames[prefix + "time-picker-menu-item"] = true, _classnames[prefix + "disabled"] = isDisabled, _classnames[prefix + "selected"] = value === activeIndex, _classnames));
        var onClick = isDisabled ? noop : function() {
          return onSelect2(value, mode);
        };
        return React.createElement("li", {
          role: "option",
          "aria-selected": String(value === activeIndex),
          key: value,
          title: value,
          className: itemCls,
          onClick
        }, label);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  TimeMenu2.prototype.componentDidMount = function componentDidMount() {
    this.scrollToSelected(0);
  };
  TimeMenu2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.activeIndex !== this.props.activeIndex) {
      this.scrollToSelected(120);
    }
  };
  TimeMenu2.prototype.scrollToSelected = function scrollToSelected() {
    var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var _props = this.props, activeIndex = _props.activeIndex, step = _props.step;
    var targetIndex = Math.floor((activeIndex || 0) / step);
    var firstItem = this.menu.children[targetIndex];
    var offsetTo = firstItem.offsetTop;
    scrollTo(this.menu, offsetTo, duration);
  };
  TimeMenu2.prototype.render = function render() {
    var _props2 = this.props, prefix = _props2.prefix, title = _props2.title, mode = _props2.mode, step = _props2.step;
    var total = mode === "hour" ? 24 : 60;
    var list = [];
    for (var i = 0; i < total; i++) {
      if (i % step === 0) {
        list.push({
          label: i,
          value: i
        });
      }
    }
    var menuTitle = title ? React.createElement("div", {className: prefix + "time-picker-menu-title"}, title) : null;
    return React.createElement("div", {className: prefix + "time-picker-menu"}, menuTitle, React.createElement("ul", {
      role: "listbox",
      className: prefix + "time-picker-menu-" + mode,
      ref: this._menuRefHandler
    }, this.createMenuItems(list)));
  };
  return TimeMenu2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  title: propTypes.node,
  mode: propTypes.oneOf(["hour", "minute", "second"]),
  step: propTypes.number,
  activeIndex: propTypes.number,
  value: checkMomentObj,
  disabledItems: propTypes.func,
  renderTimeMenuItems: propTypes.func,
  onSelect: propTypes.func,
  disabled: propTypes.bool
}, _class.defaultProps = {
  step: 1,
  disabledItems: function disabledItems() {
    return false;
  },
  renderTimeMenuItems: function renderTimeMenuItems(list) {
    return list;
  },
  onSelect: function onSelect() {
  },
  disabled: false
}, _temp2);
TimeMenu.displayName = "TimeMenu";
var _class$1, _temp2$1;
var noop$1 = func.noop;
var TimePickerPanel = (_temp2$1 = _class$1 = function(_Component) {
  _inherits(TimePickerPanel2, _Component);
  function TimePickerPanel2() {
    var _temp, _this, _ret;
    _classCallCheck(this, TimePickerPanel2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSelectMenuItem = function(index, type) {
      var value = _this.props.value;
      var clonedValue = value ? value.clone() : hooks("00:00:00", "HH:mm:ss", true);
      switch (type) {
        case "hour":
          clonedValue.hour(index);
          break;
        case "minute":
          clonedValue.minute(index);
          break;
        case "second":
          clonedValue.second(index);
          break;
      }
      _this.props.onSelect(clonedValue);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  TimePickerPanel2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, value = _props.value, locale = _props.locale, className = _props.className, disabled = _props.disabled, showHour = _props.showHour, showMinute = _props.showMinute, showSecond = _props.showSecond, hourStep = _props.hourStep, minuteStep = _props.minuteStep, secondStep = _props.secondStep, disabledHours = _props.disabledHours, disabledMinutes = _props.disabledMinutes, disabledSeconds = _props.disabledSeconds, renderTimeMenuItems2 = _props.renderTimeMenuItems, others = _objectWithoutProperties(_props, ["prefix", "value", "locale", "className", "disabled", "showHour", "showMinute", "showSecond", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems"]);
    var colLen = [showHour, showMinute, showSecond].filter(function(v) {
      return v;
    }).length;
    var classNames = classnames(prefix + "time-picker-panel", prefix + "time-picker-panel-col-" + colLen, className);
    var commonProps = {
      prefix,
      disabled,
      onSelect: this.onSelectMenuItem,
      renderTimeMenuItems: renderTimeMenuItems2,
      value
    };
    var activeHour = void 0;
    var activeMinute = void 0;
    var activeSecond = void 0;
    if (value && hooks.isMoment(value)) {
      activeHour = value.hour();
      activeMinute = value.minute();
      activeSecond = value.second();
    }
    return React.createElement("div", _extends({}, others, {className: classNames}), showHour ? React.createElement(TimeMenu, _extends({}, commonProps, {
      activeIndex: activeHour,
      title: locale.hour,
      mode: "hour",
      step: hourStep,
      disabledItems: disabledHours
    })) : null, showMinute ? React.createElement(TimeMenu, _extends({}, commonProps, {
      activeIndex: activeMinute,
      title: locale.minute,
      mode: "minute",
      step: minuteStep,
      disabledItems: disabledMinutes
    })) : null, showSecond ? React.createElement(TimeMenu, _extends({}, commonProps, {
      activeIndex: activeSecond,
      title: locale.second,
      step: secondStep,
      mode: "second",
      disabledItems: disabledSeconds
    })) : null);
  };
  return TimePickerPanel2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  value: checkMomentObj,
  showHour: propTypes.bool,
  showMinute: propTypes.bool,
  showSecond: propTypes.bool,
  hourStep: propTypes.number,
  minuteStep: propTypes.number,
  secondStep: propTypes.number,
  disabledHours: propTypes.func,
  disabledMinutes: propTypes.func,
  disabledSeconds: propTypes.func,
  renderTimeMenuItems: propTypes.func,
  onSelect: propTypes.func,
  locale: propTypes.object,
  disabled: propTypes.bool,
  className: propTypes.string
}, _class$1.defaultProps = {
  prefix: "next-",
  showHour: true,
  showSecond: true,
  showMinute: true,
  disabledHours: noop$1,
  disabledMinutes: noop$1,
  disabledSeconds: noop$1,
  onSelect: noop$1,
  disabled: false,
  locale: zhCN.TimePicker
}, _temp2$1);
TimePickerPanel.displayName = "TimePickerPanel";
var PANEL = {
  TIME: "time-panel",
  DATE: "date-panel"
};
var DEFAULT_TIME_FORMAT = "HH:mm:ss";
function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}
function resetValueTime(source, target) {
  if (!hooks.isMoment(source) || !hooks.isMoment(target)) {
    return source;
  }
  return source.clone().hour(target.hour()).minute(target.minute()).second(target.second());
}
function formatDateValue$1(value, format) {
  var val = typeof value === "string" ? hooks(value, format, false) : value;
  if (val && hooks.isMoment(val) && val.isValid()) {
    return val;
  }
  return null;
}
function checkDateValue$1(props, propName, componentName) {
  if (props[propName] && !hooks.isMoment(props[propName]) && typeof props[propName] !== "string") {
    return new Error("Invalid prop " + propName + " supplied to " + componentName + ". Required a moment object or format date string!");
  }
}
function getDateTimeFormat(format, showTime, type) {
  if (!format && type) {
    format = {
      date: "YYYY-MM-DD",
      month: "YYYY-MM",
      year: "YYYY",
      time: ""
    }[type];
  }
  var timeFormat = showTime ? showTime.format || DEFAULT_TIME_FORMAT : "";
  var dateTimeFormat = timeFormat ? format + " " + timeFormat : format;
  return {
    format,
    timeFormat,
    dateTimeFormat
  };
}
function onDateKeydown(e, _ref, type) {
  var format = _ref.format, dateInputStr = _ref.dateInputStr, value = _ref.value;
  if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
    return;
  }
  if (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1 || e.controlKey || e.shiftKey) {
    return;
  }
  var date = hooks(dateInputStr, format, true);
  if (date.isValid()) {
    var stepUnit = e.altKey ? "year" : "month";
    switch (e.keyCode) {
      case KEYCODE.UP:
        date.subtract(1, type);
        break;
      case KEYCODE.DOWN:
        date.add(1, type);
        break;
      case KEYCODE.PAGE_UP:
        date.subtract(1, stepUnit);
        break;
      case KEYCODE.PAGE_DOWN:
        date.add(1, stepUnit);
        break;
    }
  } else if (value) {
    date = value.clone();
  } else {
    date = hooks();
  }
  e.preventDefault();
  return date.format(format);
}
function onTimeKeydown(e, _ref2, type) {
  var format = _ref2.format, timeInputStr = _ref2.timeInputStr, steps = _ref2.steps, value = _ref2.value;
  if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1)
    return;
  if (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1 || e.controlKey || e.shiftKey)
    return;
  var time = hooks(timeInputStr, format, true);
  if (time.isValid()) {
    var stepUnit = e.altKey ? "hour" : "minute";
    switch (e.keyCode) {
      case KEYCODE.UP:
        time.subtract(steps[type], type);
        break;
      case KEYCODE.DOWN:
        time.add(steps[type], type);
        break;
      case KEYCODE.PAGE_UP:
        time.subtract(steps[stepUnit], stepUnit);
        break;
      case KEYCODE.PAGE_DOWN:
        time.add(steps[stepUnit], stepUnit);
        break;
    }
  } else if (value) {
    time = value.clone();
  } else {
    time = hooks().hours(0).minutes(0).seconds(0);
  }
  e.preventDefault();
  return time.format(format);
}
export {PANEL as P, TimePickerPanel as T, onTimeKeydown as a, formatDateValue as b, checkDateValue$1 as c, checkDateValue as d, formatDateValue$1 as f, getDateTimeFormat as g, isFunction as i, onDateKeydown as o, resetValueTime as r};

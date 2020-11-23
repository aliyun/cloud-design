import {p as polyfill, x as NextOverlay, j as func, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, g as _extends, k as _objectWithoutProperties, o as obj, s as NextIcon, w as NextInput, C as Component, N as NextConfigProvider, i as propTypes, z as zhCN} from "./index.96485df2.js";
import {h as hooks} from "./cf6ed2e0.js";
import {b as formatDateValue, T as TimePickerPanel, d as checkDateValue, a as onTimeKeydown} from "./8bd0a761.js";
var _class, _temp, _initialiseProps;
var Popup = NextOverlay.Popup;
var noop = func.noop;
var timePickerLocale = zhCN.TimePicker;
var TimePicker = (_temp = _class = function(_Component) {
  _inherits(TimePicker2, _Component);
  function TimePicker2(props, context) {
    _classCallCheck(this, TimePicker2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _initialiseProps.call(_this);
    var value = formatDateValue(props.value || props.defaultValue, props.format);
    _this.inputAsString = typeof (props.value || props.defaultValue) === "string";
    _this.state = {
      value,
      inputStr: "",
      inputing: false,
      visible: props.visible || props.defaultVisible
    };
    return _this;
  }
  TimePicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var state = {};
    if ("value" in props) {
      state.value = formatDateValue(props.value, props.format);
    }
    if ("visible" in props) {
      state.visible = props.visible;
    }
    return state;
  };
  TimePicker2.prototype.onValueChange = function onValueChange(newValue) {
    var ret = this.inputAsString && newValue ? newValue.format(this.props.format) : newValue;
    this.props.onChange(ret);
  };
  TimePicker2.prototype.renderPreview = function renderPreview(others) {
    var _props = this.props, prefix = _props.prefix, format = _props.format, className = _props.className, renderPreview2 = _props.renderPreview;
    var value = this.state.value;
    var previewCls = classnames(className, prefix + "form-preview");
    var label = value ? value.format(format) : "";
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(value, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), label);
  };
  TimePicker2.prototype.render = function render() {
    var _classnames, _classnames2;
    var _props2 = this.props, prefix = _props2.prefix, label = _props2.label, state = _props2.state, placeholder = _props2.placeholder, size = _props2.size, format = _props2.format, hasClear = _props2.hasClear, hourStep = _props2.hourStep, minuteStep = _props2.minuteStep, secondStep = _props2.secondStep, disabledHours = _props2.disabledHours, disabledMinutes = _props2.disabledMinutes, disabledSeconds = _props2.disabledSeconds, renderTimeMenuItems = _props2.renderTimeMenuItems, inputProps = _props2.inputProps, popupAlign = _props2.popupAlign, popupTriggerType = _props2.popupTriggerType, popupContainer = _props2.popupContainer, popupStyle = _props2.popupStyle, popupClassName = _props2.popupClassName, popupProps = _props2.popupProps, popupComponent = _props2.popupComponent, popupContent = _props2.popupContent, followTrigger = _props2.followTrigger, disabled = _props2.disabled, className = _props2.className, locale = _props2.locale, rtl = _props2.rtl, isPreview = _props2.isPreview, others = _objectWithoutProperties(_props2, ["prefix", "label", "state", "placeholder", "size", "format", "hasClear", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems", "inputProps", "popupAlign", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "disabled", "className", "locale", "rtl", "isPreview"]);
    var _state = this.state, value = _state.value, inputStr = _state.inputStr, inputing = _state.inputing, visible = _state.visible;
    var triggerCls = classnames((_classnames = {}, _classnames[prefix + "time-picker-trigger"] = true, _classnames));
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview) {
      return this.renderPreview(obj.pickOthers(others, TimePicker2.PropTypes));
    }
    var inputValue = inputing ? inputStr : value && value.format(format) || "";
    var sharedInputProps = _extends({}, inputProps, {
      size,
      disabled,
      value: inputValue,
      hasClear: value && hasClear,
      onChange: this.onInputChange,
      onBlur: this.onInputBlur,
      onPressEnter: this.onInputBlur,
      onKeyDown: this.onKeyown,
      hint: React.createElement(NextIcon, {
        type: "clock",
        className: prefix + "time-picker-symbol-clock-icon"
      })
    });
    var triggerInput = React.createElement("div", {className: triggerCls}, React.createElement(NextInput, _extends({}, sharedInputProps, {
      label,
      state,
      placeholder: placeholder || locale.placeholder,
      className: prefix + "time-picker-input"
    })));
    var panelProps = {
      prefix,
      locale,
      value,
      disabled,
      showHour: format.indexOf("H") > -1,
      showSecond: format.indexOf("s") > -1,
      showMinute: format.indexOf("m") > -1,
      hourStep,
      minuteStep,
      secondStep,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      renderTimeMenuItems,
      onSelect: this.onTimePanelSelect
    };
    var classNames = classnames((_classnames2 = {}, _classnames2[prefix + "time-picker"] = true, _classnames2[prefix + "time-picker-" + size] = size, _classnames2[prefix + "disabled"] = disabled, _classnames2), className);
    var PopupComponent = popupComponent ? popupComponent : Popup;
    return React.createElement("div", _extends({}, obj.pickOthers(TimePicker2.propTypes, others), {
      className: classNames
    }), React.createElement(PopupComponent, _extends({
      autoFocus: true,
      align: popupAlign
    }, popupProps, {
      followTrigger,
      visible,
      onVisibleChange: this.onVisibleChange,
      trigger: triggerInput,
      container: popupContainer,
      disabled,
      triggerType: popupTriggerType,
      style: popupStyle,
      className: popupClassName
    }), popupContent ? popupContent : React.createElement("div", {
      dir: others.dir,
      className: prefix + "time-picker-body"
    }, React.createElement("div", {
      className: prefix + "time-picker-panel-header"
    }, React.createElement(NextInput, _extends({}, sharedInputProps, {
      placeholder: format,
      className: prefix + "time-picker-panel-input"
    }))), React.createElement(TimePickerPanel, panelProps))));
  };
  return TimePicker2;
}(Component), _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  label: propTypes.node,
  state: propTypes.oneOf(["error", "success"]),
  placeholder: propTypes.string,
  value: checkDateValue,
  defaultValue: checkDateValue,
  size: propTypes.oneOf(["small", "medium", "large"]),
  hasClear: propTypes.bool,
  format: propTypes.string,
  hourStep: propTypes.number,
  minuteStep: propTypes.number,
  secondStep: propTypes.number,
  disabledHours: propTypes.func,
  disabledMinutes: propTypes.func,
  disabledSeconds: propTypes.func,
  renderTimeMenuItems: propTypes.func,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  popupContainer: propTypes.any,
  popupAlign: propTypes.string,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  onVisibleChange: propTypes.func,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  disabled: propTypes.bool,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  onChange: propTypes.func,
  className: propTypes.string,
  name: propTypes.string,
  inputProps: propTypes.object,
  popupComponent: propTypes.elementType,
  popupContent: propTypes.node
}), _class.defaultProps = {
  prefix: "next-",
  rtl: false,
  locale: timePickerLocale,
  size: "medium",
  format: "HH:mm:ss",
  hasClear: true,
  disabled: false,
  popupAlign: "tl tl",
  popupTriggerType: "click",
  onChange: noop,
  onVisibleChange: noop
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this.onClearValue = function() {
    _this2.setState({
      value: null
    });
    if (_this2.state.value) {
      _this2.onValueChange(null);
    }
  };
  this.onInputChange = function(inputValue, e, eventType) {
    if (!("value" in _this2.props)) {
      if (eventType === "clear" || !inputValue) {
        e.stopPropagation();
        _this2.onClearValue();
      }
      _this2.setState({
        inputStr: inputValue,
        inputing: true
      });
    } else if (eventType === "clear") {
      e.stopPropagation();
      _this2.onValueChange(null);
    }
  };
  this.onInputBlur = function() {
    var inputStr = _this2.state.inputStr;
    if (inputStr) {
      var format = _this2.props.format;
      var parsed = hooks(inputStr, format, true);
      if (parsed.isValid()) {
        _this2.setState({
          value: parsed,
          inputStr: ""
        });
        _this2.onValueChange(parsed);
      }
      _this2.setState({
        inputing: false
      });
    }
  };
  this.onKeyown = function(e) {
    var _state2 = _this2.state, value = _state2.value, inputStr = _state2.inputStr;
    var _props3 = _this2.props, format = _props3.format, _props3$hourStep = _props3.hourStep, hourStep = _props3$hourStep === void 0 ? 1 : _props3$hourStep, _props3$minuteStep = _props3.minuteStep, minuteStep = _props3$minuteStep === void 0 ? 1 : _props3$minuteStep, _props3$secondStep = _props3.secondStep, secondStep = _props3$secondStep === void 0 ? 1 : _props3$secondStep, disabledMinutes = _props3.disabledMinutes, disabledSeconds = _props3.disabledSeconds;
    var unit = "second";
    if (disabledSeconds) {
      unit = disabledMinutes ? "hour" : "minute";
    }
    var timeStr = onTimeKeydown(e, {
      format,
      timeInputStr: inputStr,
      steps: {
        hour: hourStep,
        minute: minuteStep,
        second: secondStep
      },
      value
    }, unit);
    if (!timeStr)
      return;
    _this2.onInputChange(timeStr);
  };
  this.onTimePanelSelect = function(value) {
    if (!("value" in _this2.props)) {
      _this2.setState({
        value,
        inputing: false
      });
    }
    if (!_this2.state.value || value.valueOf() !== _this2.state.value.valueOf()) {
      _this2.onValueChange(value);
    }
  };
  this.onVisibleChange = function(visible, type) {
    if (!("visible" in _this2.props)) {
      _this2.setState({
        visible
      });
    }
    _this2.props.onVisibleChange(visible, type);
  };
}, _temp);
TimePicker.displayName = "TimePicker";
var TimePicker$1 = polyfill(TimePicker);
var NextTimePicker = NextConfigProvider.config(TimePicker$1, {
  transform: function transform(props, deprecated) {
    if ("defaultOpen" in props) {
      deprecated("defaultOpen", "defaultVisible", "TimePicker");
      var _props = props, defaultOpen = _props.defaultOpen, others = _objectWithoutProperties(_props, ["defaultOpen"]);
      props = _extends({defaultVisible: defaultOpen}, others);
    }
    if ("open" in props) {
      deprecated("open", "visible", "TimePicker");
      var _props2 = props, open = _props2.open, _others = _objectWithoutProperties(_props2, ["open"]);
      props = _extends({visible: open}, _others);
    }
    if ("onOpenChange" in props) {
      deprecated("onOpenChange", "onVisibleChange", "TimePicker");
      var _props3 = props, onOpenChange = _props3.onOpenChange, _others2 = _objectWithoutProperties(_props3, ["onOpenChange"]);
      props = _extends({onVisibleChange: onOpenChange}, _others2);
    }
    return props;
  }
});
export {NextTimePicker as N};

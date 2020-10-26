import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, g as _extends, j as func, p as polyfill, x as NextOverlay, d as classnames, k as _objectWithoutProperties, o as obj, w as NextInput, n as _typeof, s as NextIcon, C as Component, N as NextConfigProvider, i as propTypes, z as zhCN, K as KEYCODE} from "./index.91461bfc.js";
import {N as NextButton} from "./2de87bf0.js";
import {h as hooks} from "./cf6ed2e0.js";
import {N as NextCalendar, R as RangeCalendar} from "./2d07363a.js";
import {P as PANEL, g as getDateTimeFormat, f as formatDateValue, T as TimePickerPanel, c as checkDateValue, r as resetValueTime, o as onDateKeydown, a as onTimeKeydown, i as isFunction} from "./b24b6b69.js";
var _class, _temp2;
var PanelFooter = (_temp2 = _class = function(_React$PureComponent) {
  _inherits(PanelFooter2, _React$PureComponent);
  function PanelFooter2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, PanelFooter2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.changePanel = function() {
      var _PANEL$DATE$PANEL$TIM;
      var targetPanel = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[PANEL.DATE] = PANEL.TIME, _PANEL$DATE$PANEL$TIM[PANEL.TIME] = PANEL.DATE, _PANEL$DATE$PANEL$TIM)[_this.props.panel];
      _this.props.onPanelChange(targetPanel);
    }, _this.createRanges = function(ranges) {
      if (!ranges || ranges.length === 0)
        return null;
      var _this$props = _this.props, onOk = _this$props.onOk, prefix = _this$props.prefix;
      return React.createElement("div", {className: prefix + "date-picker-panel-tools"}, ranges.map(function(_ref) {
        var label = _ref.label, _ref$value = _ref.value, value = _ref$value === void 0 ? [] : _ref$value, onChange = _ref.onChange;
        var handleClick = function handleClick2() {
          var momentValue = value.map(function(v) {
            return hooks(v);
          });
          onChange(momentValue);
          onOk(momentValue);
        };
        return React.createElement(NextButton, {
          key: label,
          text: true,
          size: "small",
          type: "primary",
          onClick: handleClick
        }, label);
      }));
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  PanelFooter2.prototype.render = function render() {
    var _PANEL$DATE$PANEL$TIM2;
    var _props = this.props, prefix = _props.prefix, locale = _props.locale, panel = _props.panel, value = _props.value, ranges = _props.ranges, disabledOk = _props.disabledOk, onPanelChange = _props.onPanelChange, onOk = _props.onOk;
    var panelBtnLabel = (_PANEL$DATE$PANEL$TIM2 = {}, _PANEL$DATE$PANEL$TIM2[PANEL.DATE] = locale.selectTime, _PANEL$DATE$PANEL$TIM2[PANEL.TIME] = locale.selectDate, _PANEL$DATE$PANEL$TIM2)[panel];
    var sharedBtnProps = {
      size: "small",
      type: "primary",
      disabled: !value
    };
    var onClick = function onClick2() {
      return onOk();
    };
    return React.createElement("div", {className: prefix + "date-picker-panel-footer"}, this.createRanges(ranges), onPanelChange ? React.createElement(NextButton, _extends({}, sharedBtnProps, {text: true, onClick: this.changePanel}), panelBtnLabel) : null, React.createElement(NextButton, _extends({}, sharedBtnProps, {
      disabled: disabledOk || !value,
      onClick
    }), locale.ok));
  };
  return PanelFooter2;
}(React.PureComponent), _class.defaultProps = {
  onOk: func.noop
}, _temp2);
var _class$1, _temp, _initialiseProps;
var Popup = NextOverlay.Popup;
var DatePicker = (_temp = _class$1 = function(_Component) {
  _inherits(DatePicker2, _Component);
  function DatePicker2(props, context) {
    _classCallCheck(this, DatePicker2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _initialiseProps.call(_this);
    var _getDateTimeFormat = getDateTimeFormat(props.format, props.showTime), format = _getDateTimeFormat.format, timeFormat = _getDateTimeFormat.timeFormat, dateTimeFormat = _getDateTimeFormat.dateTimeFormat;
    _this.state = {
      value: formatDateValue(props.defaultValue, dateTimeFormat),
      dateInputStr: "",
      timeInputStr: "",
      inputing: false,
      visible: props.defaultVisible,
      inputAsString: typeof props.defaultValue === "string",
      panel: PANEL.DATE,
      format,
      timeFormat,
      dateTimeFormat
    };
    return _this;
  }
  DatePicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var formatStates = getDateTimeFormat(props.format, props.showTime);
    var states = {};
    if ("value" in props) {
      states.value = formatDateValue(props.value, formatStates.dateTimeFormat);
      states.inputAsString = typeof props.value === "string";
    }
    if ("visible" in props) {
      states.visible = props.visible;
    }
    return _extends({}, states, formatStates);
  };
  DatePicker2.prototype.renderPreview = function renderPreview(others) {
    var _props = this.props, prefix = _props.prefix, format = _props.format, className = _props.className, renderPreview2 = _props.renderPreview;
    var value = this.state.value;
    var previewCls = classnames(className, prefix + "form-preview");
    var label = value ? value.format(format) : "";
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(value, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), label);
  };
  DatePicker2.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3, _classnames4, _PANEL$DATE$PANEL$TIM;
    var _props2 = this.props, prefix = _props2.prefix, rtl = _props2.rtl, locale = _props2.locale, label = _props2.label, state = _props2.state, defaultVisibleMonth = _props2.defaultVisibleMonth, onVisibleMonthChange = _props2.onVisibleMonthChange, showTime = _props2.showTime, disabledDate6 = _props2.disabledDate, footerRender6 = _props2.footerRender, placeholder = _props2.placeholder, size = _props2.size, disabled = _props2.disabled, hasClear = _props2.hasClear, popupTriggerType = _props2.popupTriggerType, popupAlign = _props2.popupAlign, popupContainer = _props2.popupContainer, popupStyle = _props2.popupStyle, popupClassName = _props2.popupClassName, popupProps = _props2.popupProps, popupComponent = _props2.popupComponent, popupContent = _props2.popupContent, followTrigger = _props2.followTrigger, className = _props2.className, inputProps = _props2.inputProps, dateCellRender = _props2.dateCellRender, monthCellRender = _props2.monthCellRender, yearCellRender = _props2.yearCellRender, dateInputAriaLabel = _props2.dateInputAriaLabel, timeInputAriaLabel = _props2.timeInputAriaLabel, isPreview = _props2.isPreview, disableChangeMode = _props2.disableChangeMode, yearRange = _props2.yearRange, others = _objectWithoutProperties(_props2, ["prefix", "rtl", "locale", "label", "state", "defaultVisibleMonth", "onVisibleMonthChange", "showTime", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "dateCellRender", "monthCellRender", "yearCellRender", "dateInputAriaLabel", "timeInputAriaLabel", "isPreview", "disableChangeMode", "yearRange"]);
    var _state = this.state, visible = _state.visible, value = _state.value, dateInputStr = _state.dateInputStr, timeInputStr = _state.timeInputStr, panel = _state.panel, inputing = _state.inputing, format = _state.format, timeFormat = _state.timeFormat, dateTimeFormat = _state.dateTimeFormat;
    var datePickerCls = classnames((_classnames = {}, _classnames[prefix + "date-picker"] = true, _classnames), className);
    var triggerInputCls = classnames((_classnames2 = {}, _classnames2[prefix + "date-picker-input"] = true, _classnames2[prefix + "error"] = false, _classnames2));
    var panelBodyClassName = classnames((_classnames3 = {}, _classnames3[prefix + "date-picker-body"] = true, _classnames3[prefix + "date-picker-body-show-time"] = showTime, _classnames3));
    var panelDateInputCls = classnames((_classnames4 = {}, _classnames4[prefix + "date-picker-panel-input"] = true, _classnames4[prefix + "focus"] = panel === PANEL.DATE, _classnames4));
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview) {
      return this.renderPreview(obj.pickOthers(others, DatePicker2.PropTypes));
    }
    var sharedInputProps = _extends({}, inputProps, {
      size,
      disabled,
      onChange: this.onDateInputChange,
      onBlur: this.onDateInputBlur,
      onPressEnter: this.onDateInputBlur,
      onKeyDown: this.onKeyDown
    });
    var dateInputValue = inputing === "date" ? dateInputStr : value && value.format(format) || "";
    var triggerInputValue = dateInputValue;
    var dateInput = React.createElement(NextInput, _extends({}, sharedInputProps, {
      "aria-label": dateInputAriaLabel,
      value: dateInputValue,
      onFocus: this.onFoucsDateInput,
      placeholder: format,
      className: panelDateInputCls
    }));
    var datePanel = React.createElement(NextCalendar, {
      shape: "panel",
      value,
      format,
      dateCellRender,
      monthCellRender,
      yearCellRender,
      onSelect: this.onSelectCalendarPanel,
      defaultVisibleMonth,
      onVisibleMonthChange,
      disabledDate: disabledDate6,
      disableChangeMode,
      yearRange
    });
    var panelFooter = footerRender6();
    var timeInput = null;
    var timePanel = null;
    if (showTime) {
      var _classnames5;
      var timeInputValue = inputing === "time" ? timeInputStr : value && value.format(timeFormat) || "";
      triggerInputValue = value && value.format(dateTimeFormat) || "";
      var timePanelProps = (typeof showTime === "undefined" ? "undefined" : _typeof(showTime)) === "object" ? showTime : {};
      var showSecond = timeFormat.indexOf("s") > -1;
      var showMinute = timeFormat.indexOf("m") > -1;
      var panelTimeInputCls = classnames((_classnames5 = {}, _classnames5[prefix + "date-picker-panel-input"] = true, _classnames5[prefix + "focus"] = panel === PANEL.TIME, _classnames5));
      timeInput = React.createElement(NextInput, {
        placeholder: timeFormat,
        value: timeInputValue,
        size,
        "aria-label": timeInputAriaLabel,
        disabled: disabled || !value,
        onChange: this.onTimeInputChange,
        onFocus: this.onFoucsTimeInput,
        onBlur: this.onTimeInputBlur,
        onPressEnter: this.onTimeInputBlur,
        onKeyDown: this.onTimeKeyDown,
        className: panelTimeInputCls
      });
      timePanel = React.createElement(TimePickerPanel, _extends({}, timePanelProps, {
        locale,
        className: prefix + "date-picker-panel-time",
        showSecond,
        showMinute,
        disabled,
        prefix,
        value,
        onSelect: this.onSelectTimePanel
      }));
      panelFooter = panelFooter || React.createElement(PanelFooter, {
        prefix,
        locale,
        value,
        panel,
        onPanelChange: this.changePanel,
        onOk: this.onOk
      });
    }
    var panelBody = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[PANEL.DATE] = datePanel, _PANEL$DATE$PANEL$TIM[PANEL.TIME] = timePanel, _PANEL$DATE$PANEL$TIM)[panel];
    var allowClear = value && hasClear;
    var trigger = React.createElement("div", {className: prefix + "date-picker-trigger"}, React.createElement(NextInput, _extends({}, sharedInputProps, {
      label,
      state,
      value: triggerInputValue,
      role: "combobox",
      "aria-expanded": visible,
      readOnly: true,
      placeholder: placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder),
      hint: React.createElement(NextIcon, {
        type: "calendar",
        className: prefix + "date-picker-symbol-calendar-icon"
      }),
      hasClear: allowClear,
      className: triggerInputCls
    })));
    var PopupComponent = popupComponent ? popupComponent : Popup;
    return React.createElement("div", _extends({}, obj.pickOthers(DatePicker2.propTypes, others), {
      className: datePickerCls
    }), React.createElement(PopupComponent, _extends({
      autoFocus: true,
      align: popupAlign
    }, popupProps, {
      followTrigger,
      disabled,
      visible,
      onVisibleChange: this.onVisibleChange,
      triggerType: popupTriggerType,
      container: popupContainer,
      style: popupStyle,
      className: popupClassName,
      trigger
    }), popupContent ? popupContent : React.createElement("div", {dir: others.dir, className: panelBodyClassName}, React.createElement("div", {
      className: prefix + "date-picker-panel-header"
    }, dateInput, timeInput), panelBody, panelFooter)));
  };
  return DatePicker2;
}(Component), _class$1.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  label: propTypes.node,
  state: propTypes.oneOf(["success", "loading", "error"]),
  placeholder: propTypes.string,
  defaultVisibleMonth: propTypes.func,
  onVisibleMonthChange: propTypes.func,
  value: checkDateValue,
  defaultValue: checkDateValue,
  format: propTypes.string,
  showTime: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  resetTime: propTypes.bool,
  disabledDate: propTypes.func,
  footerRender: propTypes.func,
  onChange: propTypes.func,
  onOk: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"]),
  disabled: propTypes.bool,
  hasClear: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupAlign: propTypes.string,
  popupContainer: propTypes.any,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  inputProps: propTypes.object,
  dateCellRender: propTypes.func,
  monthCellRender: propTypes.func,
  yearCellRender: propTypes.func,
  dateInputAriaLabel: propTypes.string,
  timeInputAriaLabel: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  locale: propTypes.object,
  className: propTypes.string,
  name: propTypes.string,
  popupComponent: propTypes.elementType,
  popupContent: propTypes.node,
  disableChangeMode: propTypes.bool,
  yearRange: propTypes.arrayOf(propTypes.number)
}), _class$1.defaultProps = {
  prefix: "next-",
  rtl: false,
  format: "YYYY-MM-DD",
  size: "medium",
  showTime: false,
  resetTime: false,
  disabledDate: function disabledDate() {
    return false;
  },
  footerRender: function footerRender() {
    return null;
  },
  hasClear: true,
  popupTriggerType: "click",
  popupAlign: "tl tl",
  locale: zhCN.DatePicker,
  defaultVisible: false,
  onChange: func.noop,
  onVisibleChange: func.noop,
  onOk: func.noop
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this.onValueChange = function(newValue) {
    var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "onChange";
    var ret = _this2.state.inputAsString && newValue ? newValue.format(_this2.state.dateTimeFormat) : newValue;
    _this2.props[handler](ret);
  };
  this.onSelectCalendarPanel = function(value) {
    var _props3 = _this2.props, showTime = _props3.showTime, resetTime = _props3.resetTime;
    var prevValue = _this2.state.value;
    var newValue = value;
    if (showTime) {
      if (!prevValue) {
        if (showTime.defaultValue) {
          var defaultTimeValue = formatDateValue(showTime.defaultValue, _this2.state.timeFormat);
          newValue = resetValueTime(value, defaultTimeValue);
        }
      } else if (!resetTime) {
        newValue = resetValueTime(value, prevValue);
      }
    }
    _this2.handleChange(newValue, prevValue, {inputing: false});
    if (!showTime) {
      _this2.onVisibleChange(false, "calendarSelect");
    }
  };
  this.onSelectTimePanel = function(value) {
    _this2.handleChange(value, _this2.state.value, {inputing: false});
  };
  this.clearValue = function() {
    _this2.setState({
      dateInputStr: "",
      timeInputStr: ""
    });
    _this2.handleChange(null, _this2.state.value, {inputing: false});
  };
  this.onDateInputChange = function(inputStr, e, eventType) {
    if (eventType === "clear" || !inputStr) {
      e.stopPropagation();
      _this2.clearValue();
    } else {
      _this2.setState({
        dateInputStr: inputStr,
        inputing: "date"
      });
    }
  };
  this.onTimeInputChange = function(inputStr) {
    _this2.setState({
      timeInputStr: inputStr,
      inputing: "time"
    });
  };
  this.onDateInputBlur = function() {
    var _state2 = _this2.state, dateInputStr = _state2.dateInputStr, value = _state2.value, format = _state2.format;
    var resetTime = _this2.props.resetTime;
    if (dateInputStr) {
      var disabledDate6 = _this2.props.disabledDate;
      var parsed = hooks(dateInputStr, format, true);
      _this2.setState({
        dateInputStr: "",
        inputing: false
      });
      if (parsed.isValid() && !disabledDate6(parsed, "date")) {
        parsed = resetTime ? parsed : resetValueTime(parsed, value);
        _this2.handleChange(parsed, value);
      }
    }
  };
  this.onTimeInputBlur = function() {
    var _state3 = _this2.state, value = _state3.value, timeInputStr = _state3.timeInputStr, timeFormat = _state3.timeFormat;
    if (timeInputStr) {
      var parsed = hooks(timeInputStr, timeFormat, true);
      _this2.setState({
        timeInputStr: "",
        inputing: false
      });
      if (parsed.isValid()) {
        var hour = parsed.hour();
        var minute = parsed.minute();
        var second = parsed.second();
        var newValue = value.clone().hour(hour).minute(minute).second(second);
        _this2.handleChange(newValue, _this2.state.value);
      }
    }
  };
  this.onKeyDown = function(e) {
    var format = _this2.props.format;
    var _state4 = _this2.state, dateInputStr = _state4.dateInputStr, value = _state4.value;
    var dateStr = onDateKeydown(e, {format, dateInputStr, value}, "day");
    if (!dateStr)
      return;
    _this2.onDateInputChange(dateStr);
  };
  this.onTimeKeyDown = function(e) {
    var showTime = _this2.props.showTime;
    var _state5 = _this2.state, timeInputStr = _state5.timeInputStr, timeFormat = _state5.timeFormat, value = _state5.value;
    var _ref = (typeof showTime === "undefined" ? "undefined" : _typeof(showTime)) === "object" ? showTime : {}, disabledMinutes = _ref.disabledMinutes, disabledSeconds = _ref.disabledSeconds, _ref$hourStep = _ref.hourStep, hourStep = _ref$hourStep === void 0 ? 1 : _ref$hourStep, _ref$minuteStep = _ref.minuteStep, minuteStep = _ref$minuteStep === void 0 ? 1 : _ref$minuteStep, _ref$secondStep = _ref.secondStep, secondStep = _ref$secondStep === void 0 ? 1 : _ref$secondStep;
    var unit = "second";
    if (disabledSeconds) {
      unit = disabledMinutes ? "hour" : "minute";
    }
    var timeStr = onTimeKeydown(e, {
      format: timeFormat,
      timeInputStr,
      value,
      steps: {
        hour: hourStep,
        minute: minuteStep,
        second: secondStep
      }
    }, unit);
    if (!timeStr)
      return;
    _this2.onTimeInputChange(timeStr);
  };
  this.handleChange = function(newValue, prevValue) {
    var others = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!("value" in _this2.props)) {
      _this2.setState(_extends({
        value: newValue
      }, others));
    } else {
      _this2.setState(_extends({}, others));
    }
    var newValueOf = newValue ? newValue.valueOf() : null;
    var preValueOf = prevValue ? prevValue.valueOf() : null;
    if (newValueOf !== preValueOf) {
      _this2.onValueChange(newValue);
    }
  };
  this.onFoucsDateInput = function() {
    if (_this2.state.panel !== PANEL.DATE) {
      _this2.setState({
        panel: PANEL.DATE
      });
    }
  };
  this.onFoucsTimeInput = function() {
    if (_this2.state.panel !== PANEL.TIME) {
      _this2.setState({
        panel: PANEL.TIME
      });
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
  this.changePanel = function(panel) {
    _this2.setState({
      panel
    });
  };
  this.onOk = function(value) {
    _this2.onVisibleChange(false, "okBtnClick");
    _this2.onValueChange(value || _this2.state.value, "onOk");
  };
}, _temp);
DatePicker.displayName = "DatePicker";
var DatePicker$1 = polyfill(DatePicker);
var _class$2, _temp$1, _initialiseProps$1;
var Popup$1 = NextOverlay.Popup;
function mapInputStateName(name) {
  return {
    startValue: "startDateInputStr",
    endValue: "endDateInputStr",
    startTime: "startTimeInputStr",
    endTime: "endTimeInputStr"
  }[name];
}
function mapTimeToValue(name) {
  return {
    startTime: "startValue",
    endTime: "endValue"
  }[name];
}
function getFormatValues(values, format) {
  if (!Array.isArray(values)) {
    return [null, null];
  }
  return [formatDateValue(values[0], format), formatDateValue(values[1], format)];
}
var RangePicker = (_temp$1 = _class$2 = function(_Component) {
  _inherits(RangePicker2, _Component);
  function RangePicker2(props, context) {
    _classCallCheck(this, RangePicker2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _initialiseProps$1.call(_this);
    var _getDateTimeFormat = getDateTimeFormat(props.format, props.showTime, props.type), format = _getDateTimeFormat.format, timeFormat = _getDateTimeFormat.timeFormat, dateTimeFormat = _getDateTimeFormat.dateTimeFormat;
    var val = props.value || props.defaultValue;
    var values = getFormatValues(val, dateTimeFormat);
    _this.state = {
      visible: props.visible || props.defaultVisible,
      startValue: values[0],
      endValue: values[1],
      startDateInputStr: "",
      endDateInputStr: "",
      activeDateInput: "startValue",
      startTimeInputStr: "",
      endTimeInputStr: "",
      inputing: false,
      panel: PANEL.DATE,
      format,
      timeFormat,
      dateTimeFormat,
      inputAsString: val && (typeof val[0] === "string" || typeof val[1] === "string")
    };
    return _this;
  }
  RangePicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var formatStates = getDateTimeFormat(props.format, props.showTime, props.type);
    var states = {};
    if ("value" in props) {
      var values = getFormatValues(props.value, formatStates.dateTimeFormat);
      states.startValue = values[0];
      states.endValue = values[1];
      states.inputAsString = props.value && (typeof props.value[0] === "string" || typeof props.value[1] === "string");
    }
    if ("visible" in props) {
      states.visible = props.visible;
    }
    return _extends({}, states, formatStates);
  };
  RangePicker2.prototype.renderPreview = function renderPreview(_ref, others) {
    var startValue = _ref[0], endValue = _ref[1];
    var _props = this.props, prefix = _props.prefix, className = _props.className, renderPreview2 = _props.renderPreview;
    var dateTimeFormat = this.state.dateTimeFormat;
    var previewCls = classnames(className, prefix + "form-preview");
    var startLabel = startValue ? startValue.format(dateTimeFormat) : "";
    var endLabel = endValue ? endValue.format(dateTimeFormat) : "";
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2([startValue, endValue], this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), startLabel, " - ", endLabel);
  };
  RangePicker2.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3, _classnames4, _classnames5, _this2 = this, _PANEL$DATE$PANEL$TIM;
    var _props2 = this.props, prefix = _props2.prefix, rtl = _props2.rtl, type = _props2.type, defaultVisibleMonth = _props2.defaultVisibleMonth, onVisibleMonthChange = _props2.onVisibleMonthChange, showTime = _props2.showTime, _disabledDate = _props2.disabledDate, footerRender6 = _props2.footerRender, label = _props2.label, _props2$ranges = _props2.ranges, ranges = _props2$ranges === void 0 ? {} : _props2$ranges, inputState = _props2.state, size = _props2.size, disabled = _props2.disabled, hasClear = _props2.hasClear, popupTriggerType = _props2.popupTriggerType, popupAlign = _props2.popupAlign, popupContainer = _props2.popupContainer, popupStyle = _props2.popupStyle, popupClassName = _props2.popupClassName, popupProps = _props2.popupProps, popupComponent = _props2.popupComponent, popupContent = _props2.popupContent, followTrigger = _props2.followTrigger, className = _props2.className, locale = _props2.locale, inputProps = _props2.inputProps, dateCellRender = _props2.dateCellRender, monthCellRender = _props2.monthCellRender, yearCellRender = _props2.yearCellRender, startDateInputAriaLabel = _props2.startDateInputAriaLabel, startTimeInputAriaLabel = _props2.startTimeInputAriaLabel, endDateInputAriaLabel = _props2.endDateInputAriaLabel, endTimeInputAriaLabel = _props2.endTimeInputAriaLabel, isPreview = _props2.isPreview, disableChangeMode = _props2.disableChangeMode, yearRange = _props2.yearRange, placeholder = _props2.placeholder, others = _objectWithoutProperties(_props2, ["prefix", "rtl", "type", "defaultVisibleMonth", "onVisibleMonthChange", "showTime", "disabledDate", "footerRender", "label", "ranges", "state", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "locale", "inputProps", "dateCellRender", "monthCellRender", "yearCellRender", "startDateInputAriaLabel", "startTimeInputAriaLabel", "endDateInputAriaLabel", "endTimeInputAriaLabel", "isPreview", "disableChangeMode", "yearRange", "placeholder"]);
    var state = this.state;
    var classNames = classnames((_classnames = {}, _classnames[prefix + "range-picker"] = true, _classnames["" + prefix + size] = size, _classnames[prefix + "disabled"] = disabled, _classnames), className);
    var panelBodyClassName = classnames((_classnames2 = {}, _classnames2[prefix + "range-picker-body"] = true, _classnames2[prefix + "range-picker-body-show-time"] = showTime, _classnames2));
    var triggerCls = classnames((_classnames3 = {}, _classnames3[prefix + "range-picker-trigger"] = true, _classnames3[prefix + "error"] = inputState === "error", _classnames3));
    var startDateInputCls = classnames((_classnames4 = {}, _classnames4[prefix + "range-picker-panel-input-start-date"] = true, _classnames4[prefix + "focus"] = state.activeDateInput === "startValue", _classnames4));
    var endDateInputCls = classnames((_classnames5 = {}, _classnames5[prefix + "range-picker-panel-input-end-date"] = true, _classnames5[prefix + "focus"] = state.activeDateInput === "endValue", _classnames5));
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview) {
      return this.renderPreview([state.startValue, state.endValue], obj.pickOthers(others, RangePicker2.PropTypes));
    }
    var startDateInputValue = state.inputing === "startValue" ? state.startDateInputStr : state.startValue && state.startValue.format(state.format) || "";
    var endDateInputValue = state.inputing === "endValue" ? state.endDateInputStr : state.endValue && state.endValue.format(state.format) || "";
    var startTriggerValue = startDateInputValue;
    var endTriggerValue = endDateInputValue;
    var sharedInputProps = _extends({}, inputProps, {
      size,
      disabled,
      onChange: this.onDateInputChange,
      onBlur: this.onDateInputBlur,
      onPressEnter: this.onDateInputBlur,
      onKeyDown: this.onDateInputKeyDown
    });
    var startDateInput = React.createElement(NextInput, _extends({}, sharedInputProps, {
      "aria-label": startDateInputAriaLabel,
      placeholder: state.format,
      value: startDateInputValue,
      onFocus: function onFocus() {
        return _this2.onFocusDateInput("startValue");
      },
      className: startDateInputCls
    }));
    var endDateInput = React.createElement(NextInput, _extends({}, sharedInputProps, {
      "aria-label": endDateInputAriaLabel,
      placeholder: state.format,
      value: endDateInputValue,
      onFocus: function onFocus() {
        return _this2.onFocusDateInput("endValue");
      },
      className: endDateInputCls
    }));
    var shareCalendarProps = {
      showOtherMonth: true,
      dateCellRender,
      monthCellRender,
      yearCellRender,
      format: state.format,
      defaultVisibleMonth,
      onVisibleMonthChange
    };
    var datePanel = type === "date" ? React.createElement(RangeCalendar, _extends({}, shareCalendarProps, {
      yearRange,
      disableChangeMode,
      disabledDate: _disabledDate,
      onSelect: this.onSelectCalendarPanel,
      startValue: state.startValue,
      endValue: state.endValue
    })) : React.createElement("div", {className: prefix + "range-picker-panel-body"}, React.createElement(NextCalendar, _extends({
      shape: "panel",
      modes: type === "month" ? ["month", "year"] : ["year"]
    }, _extends({}, shareCalendarProps), {
      disabledDate: function disabledDate6(date) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return state.endValue && date.isAfter(state.endValue, type) || _disabledDate && _disabledDate.apply(void 0, [date].concat(args));
      },
      onSelect: function onSelect(value) {
        var selectedValue = value.clone().date(1).hour(0).minute(0).second(0);
        if (type === "year") {
          selectedValue.month(0);
        }
        _this2.onSelectCalendarPanel(selectedValue, "startValue");
      },
      value: state.startValue
    })), React.createElement(NextCalendar, _extends({
      shape: "panel",
      modes: type === "month" ? ["month", "year"] : ["year"]
    }, shareCalendarProps, {
      disabledDate: function disabledDate6(date) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        return state.startValue && date.isBefore(state.startValue, type) || _disabledDate && _disabledDate.apply(void 0, [date].concat(args));
      },
      onSelect: function onSelect(value) {
        var selectedValue = value.clone().hour(23).minute(59).second(59);
        if (type === "year") {
          selectedValue.month(11).date(31);
        } else {
          selectedValue.date(selectedValue.daysInMonth());
        }
        _this2.onSelectCalendarPanel(selectedValue, "endValue");
      },
      value: state.endValue
    })));
    var startTimeInput = null;
    var endTimeInput = null;
    var timePanel = null;
    var panelFooter = footerRender6();
    if (showTime) {
      var _classnames6, _classnames7;
      var startTimeInputValue = state.inputing === "startTime" ? state.startTimeInputStr : state.startValue && state.startValue.format(state.timeFormat) || "";
      var endTimeInputValue = state.inputing === "endTime" ? state.endTimeInputStr : state.endValue && state.endValue.format(state.timeFormat) || "";
      startTriggerValue = state.startValue && state.startValue.format(state.dateTimeFormat) || "";
      endTriggerValue = state.endValue && state.endValue.format(state.dateTimeFormat) || "";
      var sharedTimeInputProps = {
        size,
        placeholder: state.timeFormat,
        onFocus: this.onFocusTimeInput,
        onBlur: this.onTimeInputBlur,
        onPressEnter: this.onTimeInputBlur,
        onChange: this.onTimeInputChange,
        onKeyDown: this.onTimeInputKeyDown
      };
      var startTimeInputCls = classnames((_classnames6 = {}, _classnames6[prefix + "range-picker-panel-input-start-time"] = true, _classnames6[prefix + "focus"] = state.activeDateInput === "startTime", _classnames6));
      startTimeInput = React.createElement(NextInput, _extends({}, sharedTimeInputProps, {
        value: startTimeInputValue,
        "aria-label": startTimeInputAriaLabel,
        disabled: disabled || !state.startValue,
        onFocus: function onFocus() {
          return _this2.onFocusTimeInput("startTime");
        },
        className: startTimeInputCls
      }));
      var endTimeInputCls = classnames((_classnames7 = {}, _classnames7[prefix + "range-picker-panel-input-end-time"] = true, _classnames7[prefix + "focus"] = state.activeDateInput === "endTime", _classnames7));
      endTimeInput = React.createElement(NextInput, _extends({}, sharedTimeInputProps, {
        value: endTimeInputValue,
        "aria-label": endTimeInputAriaLabel,
        disabled: disabled || !state.endValue,
        onFocus: function onFocus() {
          return _this2.onFocusTimeInput("endTime");
        },
        className: endTimeInputCls
      }));
      var showSecond = state.timeFormat.indexOf("s") > -1;
      var showMinute = state.timeFormat.indexOf("m") > -1;
      var sharedTimePickerProps = _extends({}, showTime, {
        prefix,
        locale,
        disabled,
        showSecond,
        showMinute
      });
      var disabledTime = this.getDisabledTime(state);
      timePanel = React.createElement("div", {className: prefix + "range-picker-panel-time"}, React.createElement(TimePickerPanel, _extends({}, sharedTimePickerProps, {
        disabled: disabled || !state.startValue,
        className: prefix + "range-picker-panel-time-start",
        value: state.startValue,
        onSelect: this.onSelectStartTime
      })), React.createElement(TimePickerPanel, _extends({}, sharedTimePickerProps, disabledTime, {
        disabled: disabled || !state.endValue,
        className: prefix + "range-picker-panel-time-end",
        value: state.endValue,
        onSelect: this.onSelectEndTime
      })));
    }
    panelFooter = panelFooter || React.createElement(PanelFooter, {
      prefix,
      value: state.startValue || state.endValue,
      ranges: Object.keys(ranges).map(function(key) {
        return {
          label: key,
          value: ranges[key],
          onChange: function onChange(values) {
            _this2.setState({
              startValue: values[0],
              endValue: values[1]
            });
            _this2.onValueChange(values);
          }
        };
      }),
      disabledOk: !state.startValue || !state.endValue || state.startValue.valueOf() > state.endValue.valueOf(),
      locale,
      panel: state.panel,
      onPanelChange: showTime ? this.changePanel : null,
      onOk: this.onOk
    });
    var panelBody = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[PANEL.DATE] = datePanel, _PANEL$DATE$PANEL$TIM[PANEL.TIME] = timePanel, _PANEL$DATE$PANEL$TIM)[state.panel];
    var allowClear = state.startValue && state.endValue && hasClear;
    var _ref2 = placeholder || [], startPlaceholder = _ref2[0], endPlaceholder = _ref2[1];
    if (typeof placeholder === "string") {
      startPlaceholder = placeholder;
      endPlaceholder = placeholder;
    }
    var trigger = React.createElement("div", {className: triggerCls}, React.createElement(NextInput, _extends({}, sharedInputProps, {
      readOnly: true,
      role: "combobox",
      "aria-expanded": state.visible,
      label,
      placeholder: startPlaceholder || locale.startPlaceholder,
      value: startTriggerValue,
      hasBorder: false,
      className: prefix + "range-picker-trigger-input",
      onFocus: function onFocus() {
        return _this2.onFocusDateInput("startValue");
      }
    })), React.createElement("span", {className: prefix + "range-picker-trigger-separator"}, "-"), React.createElement(NextInput, _extends({}, sharedInputProps, {
      readOnly: true,
      role: "combobox",
      "aria-expanded": state.visible,
      placeholder: endPlaceholder || locale.endPlaceholder,
      value: endTriggerValue,
      hasBorder: false,
      className: prefix + "range-picker-trigger-input",
      onFocus: function onFocus() {
        return _this2.onFocusDateInput("endValue");
      },
      hasClear: allowClear,
      hint: React.createElement(NextIcon, {type: "calendar", className: prefix + "date-picker-symbol-calendar-icon"})
    })));
    var PopupComponent = popupComponent ? popupComponent : Popup$1;
    return React.createElement("div", _extends({}, obj.pickOthers(RangePicker2.propTypes, others), {className: classNames}), React.createElement(PopupComponent, _extends({
      autoFocus: true,
      align: popupAlign
    }, popupProps, {
      followTrigger,
      disabled,
      visible: state.visible,
      onVisibleChange: this.onVisibleChange,
      triggerType: popupTriggerType,
      container: popupContainer,
      style: popupStyle,
      className: popupClassName,
      trigger
    }), popupContent ? popupContent : React.createElement("div", {dir: others.dir, className: panelBodyClassName}, React.createElement("div", {className: prefix + "range-picker-panel-header"}, React.createElement("div", {className: prefix + "range-picker-panel-input"}, startDateInput, startTimeInput, React.createElement("span", {className: prefix + "range-picker-panel-input-separator"}, "-"), endDateInput, endTimeInput)), panelBody, panelFooter)));
  };
  return RangePicker2;
}(Component), _class$2.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  type: propTypes.oneOf(["date", "month", "year"]),
  defaultVisibleMonth: propTypes.func,
  onVisibleMonthChange: propTypes.func,
  value: propTypes.array,
  defaultValue: propTypes.array,
  format: propTypes.string,
  showTime: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  resetTime: propTypes.bool,
  disabledDate: propTypes.func,
  footerRender: propTypes.func,
  onChange: propTypes.func,
  onOk: propTypes.func,
  label: propTypes.node,
  state: propTypes.oneOf(["error", "loading", "success"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  disabled: propTypes.bool,
  hasClear: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupAlign: propTypes.string,
  popupContainer: propTypes.any,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  inputProps: propTypes.object,
  dateCellRender: propTypes.func,
  monthCellRender: propTypes.func,
  yearCellRender: propTypes.func,
  startDateInputAriaLabel: propTypes.string,
  startTimeInputAriaLabel: propTypes.string,
  endDateInputAriaLabel: propTypes.string,
  endTimeInputAriaLabel: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  disableChangeMode: propTypes.bool,
  yearRange: propTypes.arrayOf(propTypes.number),
  ranges: propTypes.object,
  locale: propTypes.object,
  className: propTypes.string,
  name: propTypes.string,
  popupComponent: propTypes.elementType,
  popupContent: propTypes.node,
  placeholder: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.string])
}), _class$2.defaultProps = {
  prefix: "next-",
  rtl: false,
  type: "date",
  size: "medium",
  showTime: false,
  resetTime: false,
  disabledDate: function disabledDate2() {
    return false;
  },
  footerRender: function footerRender2() {
    return null;
  },
  hasClear: true,
  defaultVisible: false,
  popupTriggerType: "click",
  popupAlign: "tl tl",
  locale: zhCN.DatePicker,
  disableChangeMode: false,
  onChange: func.noop,
  onOk: func.noop,
  onVisibleChange: func.noop
}, _initialiseProps$1 = function _initialiseProps3() {
  var _this3 = this;
  this.onValueChange = function(values) {
    var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "onChange";
    var ret = void 0;
    if (!values.length || !_this3.state.inputAsString) {
      ret = values;
    } else {
      ret = [values[0] ? values[0].format(_this3.state.dateTimeFormat) : null, values[1] ? values[1].format(_this3.state.dateTimeFormat) : null];
    }
    _this3.props[handler](ret);
  };
  this.onSelectCalendarPanel = function(value, active) {
    var _props3 = _this3.props, showTime = _props3.showTime, resetTime = _props3.resetTime;
    var _state = _this3.state, prevActiveDateInput = _state.activeDateInput, prevStartValue = _state.startValue, prevEndValue = _state.endValue, timeFormat = _state.timeFormat;
    var newState = {
      activeDateInput: active || prevActiveDateInput,
      inputing: false
    };
    var newValue = value;
    switch (active || prevActiveDateInput) {
      case "startValue": {
        if (!prevEndValue || value.valueOf() <= prevEndValue.valueOf()) {
          newState.activeDateInput = "endValue";
        }
        if (showTime) {
          if (!prevStartValue) {
            if (showTime.defaultValue) {
              var defaultTimeValue = formatDateValue(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[0] : showTime.defaultValue, timeFormat);
              newValue = resetValueTime(value, defaultTimeValue);
            }
          } else if (!resetTime) {
            newValue = resetValueTime(value, prevStartValue);
          }
        }
        newState.startValue = newValue;
        if (prevEndValue && value.valueOf() > prevEndValue.valueOf()) {
          newState.endValue = resetTime ? newValue : resetValueTime(value, prevEndValue);
          if (newState.startValue.valueOf() > newState.endValue.valueOf()) {
            newState.endValue = null;
          }
          newState.activeDateInput = "endValue";
        }
        break;
      }
      case "endValue":
        if (!prevStartValue) {
          newState.activeDateInput = "startValue";
        }
        if (showTime) {
          if (!prevEndValue) {
            if (showTime.defaultValue) {
              var _defaultTimeValue = formatDateValue(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[1] || showTime.defaultValue[0] : showTime.defaultValue, timeFormat);
              newValue = resetValueTime(value, _defaultTimeValue);
            }
          } else if (!resetTime) {
            newValue = resetValueTime(value, prevEndValue);
          }
        }
        newState.endValue = newValue;
        if (prevStartValue && value.valueOf() <= prevStartValue.valueOf()) {
          newState.startValue = resetTime ? value : resetValueTime(value, prevStartValue);
          newState.endValue = resetTime ? value : resetValueTime(value, prevEndValue);
          if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
            newState.endValue = null;
          }
        }
        break;
    }
    var newStartValue = "startValue" in newState ? newState.startValue : prevStartValue;
    var newEndValue = "endValue" in newState ? newState.endValue : prevEndValue;
    if ("value" in _this3.props) {
      delete newState.startValue;
      delete newState.endValue;
    }
    _this3.setState(newState);
    _this3.onValueChange([newStartValue, newEndValue]);
  };
  this.clearRange = function() {
    _this3.setState({
      startDateInputStr: "",
      endDateInputStr: "",
      startTimeInputStr: "",
      endTimeInputStr: ""
    });
    if (!("value" in _this3.props)) {
      _this3.setState({
        startValue: null,
        endValue: null
      });
    }
    _this3.onValueChange([]);
  };
  this.onDateInputChange = function(inputStr, e, eventType) {
    if (eventType === "clear" || !inputStr) {
      e.stopPropagation();
      _this3.clearRange();
    } else {
      var _this3$setState;
      var stateName = mapInputStateName(_this3.state.activeDateInput);
      _this3.setState((_this3$setState = {}, _this3$setState[stateName] = inputStr, _this3$setState.inputing = _this3.state.activeDateInput, _this3$setState));
    }
  };
  this.onDateInputBlur = function() {
    var resetTime = _this3.props.resetTime;
    var activeDateInput = _this3.state.activeDateInput;
    var stateName = mapInputStateName(activeDateInput);
    var dateInputStr = _this3.state[stateName];
    if (dateInputStr) {
      var _this3$setState2;
      var _props4 = _this3.props, format = _props4.format, disabledDate6 = _props4.disabledDate;
      var parsed = hooks(dateInputStr, format, true);
      _this3.setState((_this3$setState2 = {}, _this3$setState2[stateName] = "", _this3$setState2.inputing = false, _this3$setState2));
      if (parsed.isValid() && !disabledDate6(parsed, "date")) {
        var valueName = activeDateInput;
        var newValue = resetTime ? parsed : resetValueTime(parsed, _this3.state[activeDateInput]);
        _this3.handleChange(valueName, newValue);
      }
    }
  };
  this.onDateInputKeyDown = function(e) {
    var type = _this3.props.type;
    var _state2 = _this3.state, activeDateInput = _state2.activeDateInput, format = _state2.format;
    var stateName = mapInputStateName(activeDateInput);
    var dateInputStr = _this3.state[stateName];
    var dateStr = onDateKeydown(e, {
      format,
      value: _this3.state[activeDateInput],
      dateInputStr
    }, type === "date" ? "day" : type);
    if (!dateStr)
      return;
    return _this3.onDateInputChange(dateStr);
  };
  this.onFocusDateInput = function(type) {
    if (type !== _this3.state.activeDateInput) {
      _this3.setState({
        activeDateInput: type
      });
    }
    if (_this3.state.panel !== PANEL.DATE) {
      _this3.setState({
        panel: PANEL.DATE
      });
    }
  };
  this.onFocusTimeInput = function(type) {
    if (type !== _this3.state.activeDateInput) {
      _this3.setState({
        activeDateInput: type
      });
    }
    if (_this3.state.panel !== PANEL.TIME) {
      _this3.setState({
        panel: PANEL.TIME
      });
    }
  };
  this.onSelectStartTime = function(value) {
    if (!("value" in _this3.props)) {
      _this3.setState({
        startValue: value,
        inputing: false,
        activeDateInput: "startTime"
      });
    }
    if (value.valueOf() !== _this3.state.startValue.valueOf()) {
      _this3.onValueChange([value, _this3.state.endValue]);
    }
  };
  this.onSelectEndTime = function(value) {
    if (!("value" in _this3.props)) {
      _this3.setState({
        endValue: value,
        inputing: false,
        activeDateInput: "endTime"
      });
    }
    if (value.valueOf() !== _this3.state.endValue.valueOf()) {
      _this3.onValueChange([_this3.state.startValue, value]);
    }
  };
  this.onTimeInputChange = function(inputStr) {
    var _this3$setState3;
    var stateName = mapInputStateName(_this3.state.activeDateInput);
    _this3.setState((_this3$setState3 = {}, _this3$setState3[stateName] = inputStr, _this3$setState3.inputing = _this3.state.activeDateInput, _this3$setState3));
  };
  this.onTimeInputBlur = function() {
    var stateName = mapInputStateName(_this3.state.activeDateInput);
    var timeInputStr = _this3.state[stateName];
    if (timeInputStr) {
      var _this3$setState4;
      var parsed = hooks(timeInputStr, _this3.state.timeFormat, true);
      _this3.setState((_this3$setState4 = {}, _this3$setState4[stateName] = "", _this3$setState4.inputing = false, _this3$setState4));
      if (parsed.isValid()) {
        var hour = parsed.hour();
        var minute = parsed.minute();
        var second = parsed.second();
        var valueName = mapTimeToValue(_this3.state.activeDateInput);
        var newValue = _this3.state[valueName].clone().hour(hour).minute(minute).second(second);
        _this3.handleChange(valueName, newValue);
      }
    }
  };
  this.onTimeInputKeyDown = function(e) {
    var showTime = _this3.props.showTime;
    var _state3 = _this3.state, activeDateInput = _state3.activeDateInput, timeFormat = _state3.timeFormat;
    var stateName = mapInputStateName(activeDateInput);
    var timeInputStr = _this3.state[stateName];
    var _ref3 = (typeof showTime === "undefined" ? "undefined" : _typeof(showTime)) === "object" ? showTime : {}, disabledMinutes = _ref3.disabledMinutes, disabledSeconds = _ref3.disabledSeconds, _ref3$hourStep = _ref3.hourStep, hourStep = _ref3$hourStep === void 0 ? 1 : _ref3$hourStep, _ref3$minuteStep = _ref3.minuteStep, minuteStep = _ref3$minuteStep === void 0 ? 1 : _ref3$minuteStep, _ref3$secondStep = _ref3.secondStep, secondStep = _ref3$secondStep === void 0 ? 1 : _ref3$secondStep;
    var unit = "second";
    if (disabledSeconds) {
      unit = disabledMinutes ? "hour" : "minute";
    }
    var timeStr = onTimeKeydown(e, {
      format: timeFormat,
      timeInputStr,
      value: _this3.state[activeDateInput.indexOf("start") ? "startValue" : "endValue"],
      steps: {
        hour: hourStep,
        minute: minuteStep,
        second: secondStep
      }
    }, unit);
    if (!timeStr)
      return;
    _this3.onTimeInputChange(timeStr);
  };
  this.handleChange = function(valueName, newValue) {
    var values = ["startValue", "endValue"].map(function(name) {
      return valueName === name ? newValue : _this3.state[name];
    });
    if (values[0] && values[1] && values[0].valueOf() > values[1].valueOf()) {
      return;
    }
    if (!("value" in _this3.props)) {
      var _this3$setState5;
      _this3.setState((_this3$setState5 = {}, _this3$setState5[valueName] = newValue, _this3$setState5));
    }
    _this3.onValueChange(values);
  };
  this.onVisibleChange = function(visible, type) {
    if (!("visible" in _this3.props)) {
      _this3.setState({
        visible
      });
    }
    _this3.props.onVisibleChange(visible, type);
  };
  this.changePanel = function(panel) {
    var _state4 = _this3.state, startValue = _state4.startValue, endValue = _state4.endValue;
    _this3.setState({
      panel,
      activeDateInput: panel === PANEL.DATE ? !!startValue && !endValue ? "endValue" : "startValue" : "startTime"
    });
  };
  this.onOk = function(value) {
    _this3.onVisibleChange(false, "okBtnClick");
    _this3.onValueChange(value || [_this3.state.startValue, _this3.state.endValue], "onOk");
  };
  this.getDisabledTime = function(_ref4) {
    var startValue = _ref4.startValue, endValue = _ref4.endValue;
    var _ref5 = _this3.props.showTime || {}, disabledHours = _ref5.disabledHours, disabledMinutes = _ref5.disabledMinutes, disabledSeconds = _ref5.disabledSeconds;
    var disabledTime = {};
    if (startValue && endValue) {
      var isSameDay = startValue.format("L") === endValue.format("L");
      var newDisabledHours = isFunction(disabledHours) ? disabledHours : function(index) {
        if (isSameDay && index < startValue.hour()) {
          return true;
        }
      };
      var newDisabledMinutes = isFunction(disabledMinutes) ? disabledMinutes : function(index) {
        if (isSameDay && startValue.hour() === endValue.hour() && index < startValue.minute()) {
          return true;
        }
      };
      var newDisabledSeconds = isFunction(disabledSeconds) ? disabledSeconds : function(index) {
        if (isSameDay && startValue.hour() === endValue.hour() && startValue.minute() === endValue.minute() && index < startValue.second()) {
          return true;
        }
      };
      disabledTime = {
        disabledHours: newDisabledHours,
        disabledMinutes: newDisabledMinutes,
        disabledSeconds: newDisabledSeconds
      };
    }
    return disabledTime;
  };
}, _temp$1);
RangePicker.displayName = "RangePicker";
var RangePicker$1 = polyfill(RangePicker);
var _class$3, _temp$2;
var Popup$2 = NextOverlay.Popup;
var MonthPicker = (_temp$2 = _class$3 = function(_Component) {
  _inherits(MonthPicker2, _Component);
  function MonthPicker2(props, context) {
    _classCallCheck(this, MonthPicker2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.onValueChange = function(newValue) {
      var ret = _this.state.inputAsString && newValue ? newValue.format(_this.props.format) : newValue;
      _this.props.onChange(ret);
    };
    _this.onSelectCalendarPanel = function(value) {
      var prevSelectedMonth = _this.state.value;
      var selectedMonth = value.clone().date(1).hour(0).minute(0).second(0);
      _this.handleChange(selectedMonth, prevSelectedMonth, {inputing: false}, function() {
        _this.onVisibleChange(false, "calendarSelect");
      });
    };
    _this.clearValue = function() {
      _this.setState({
        dateInputStr: ""
      });
      _this.handleChange(null, _this.state.value);
    };
    _this.onDateInputChange = function(inputStr, e, eventType) {
      if (eventType === "clear" || !inputStr) {
        e.stopPropagation();
        _this.clearValue();
      } else {
        _this.setState({
          dateInputStr: inputStr,
          inputing: true
        });
      }
    };
    _this.onDateInputBlur = function() {
      var dateInputStr = _this.state.dateInputStr;
      if (dateInputStr) {
        var _this$props = _this.props, disabledDate6 = _this$props.disabledDate, format = _this$props.format;
        var parsed = hooks(dateInputStr, format, true);
        _this.setState({
          dateInputStr: "",
          inputing: false
        });
        if (parsed.isValid() && !disabledDate6(parsed, "month")) {
          _this.handleChange(parsed, _this.state.value);
        }
      }
    };
    _this.onKeyDown = function(e) {
      var format = _this.props.format;
      var _this$state = _this.state, dateInputStr = _this$state.dateInputStr, value = _this$state.value;
      var dateStr = onDateKeydown(e, {format, dateInputStr, value}, "month");
      if (!dateStr)
        return;
      _this.onDateInputChange(dateStr);
    };
    _this.handleChange = function(newValue, prevValue) {
      var others = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = arguments[3];
      if (!("value" in _this.props)) {
        _this.setState(_extends({
          value: newValue
        }, others));
      } else {
        _this.setState(_extends({}, others));
      }
      var format = _this.props.format;
      var newValueOf = newValue ? newValue.format(format) : null;
      var preValueOf = prevValue ? prevValue.format(format) : null;
      if (newValueOf !== preValueOf) {
        _this.onValueChange(newValue);
        if (typeof callback === "function") {
          return callback();
        }
      }
    };
    _this.onVisibleChange = function(visible, type) {
      if (!("visible" in _this.props)) {
        _this.setState({
          visible
        });
      }
      _this.props.onVisibleChange(visible, type);
    };
    _this.state = {
      value: formatDateValue(props.defaultValue, props.format),
      dateInputStr: "",
      inputing: false,
      visible: props.defaultVisible,
      inputAsString: typeof props.defaultValue === "string"
    };
    return _this;
  }
  MonthPicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var states = {};
    if ("value" in props) {
      states.value = formatDateValue(props.value, props.format);
      states.inputAsString = typeof props.value === "string";
    }
    if ("visible" in props) {
      states.visible = props.visible;
    }
    return states;
  };
  MonthPicker2.prototype.renderPreview = function renderPreview(others) {
    var _props = this.props, prefix = _props.prefix, format = _props.format, className = _props.className, renderPreview2 = _props.renderPreview;
    var value = this.state.value;
    var previewCls = classnames(className, prefix + "form-preview");
    var label = value ? value.format(format) : "";
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(value, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), label);
  };
  MonthPicker2.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3;
    var _props2 = this.props, prefix = _props2.prefix, rtl = _props2.rtl, locale = _props2.locale, label = _props2.label, state = _props2.state, format = _props2.format, defaultVisibleYear = _props2.defaultVisibleYear, disabledDate6 = _props2.disabledDate, footerRender6 = _props2.footerRender, placeholder = _props2.placeholder, size = _props2.size, disabled = _props2.disabled, hasClear = _props2.hasClear, popupTriggerType = _props2.popupTriggerType, popupAlign = _props2.popupAlign, popupContainer = _props2.popupContainer, popupStyle = _props2.popupStyle, popupClassName = _props2.popupClassName, popupProps = _props2.popupProps, popupComponent = _props2.popupComponent, popupContent = _props2.popupContent, followTrigger = _props2.followTrigger, className = _props2.className, inputProps = _props2.inputProps, monthCellRender = _props2.monthCellRender, yearCellRender = _props2.yearCellRender, dateInputAriaLabel = _props2.dateInputAriaLabel, isPreview = _props2.isPreview, others = _objectWithoutProperties(_props2, ["prefix", "rtl", "locale", "label", "state", "format", "defaultVisibleYear", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "monthCellRender", "yearCellRender", "dateInputAriaLabel", "isPreview"]);
    var _state = this.state, visible = _state.visible, value = _state.value, dateInputStr = _state.dateInputStr, inputing = _state.inputing;
    var monthPickerCls = classnames((_classnames = {}, _classnames[prefix + "month-picker"] = true, _classnames), className);
    var triggerInputCls = classnames((_classnames2 = {}, _classnames2[prefix + "month-picker-input"] = true, _classnames2[prefix + "error"] = false, _classnames2));
    var panelBodyClassName = classnames((_classnames3 = {}, _classnames3[prefix + "month-picker-body"] = true, _classnames3));
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview) {
      return this.renderPreview(obj.pickOthers(others, MonthPicker2.PropTypes));
    }
    var panelInputCls = prefix + "month-picker-panel-input";
    var sharedInputProps = _extends({}, inputProps, {
      size,
      disabled,
      onChange: this.onDateInputChange,
      onBlur: this.onDateInputBlur,
      onPressEnter: this.onDateInputBlur,
      onKeyDown: this.onKeyDown
    });
    var dateInputValue = inputing ? dateInputStr : value && value.format(format) || "";
    var triggerInputValue = dateInputValue;
    var dateInput = React.createElement(NextInput, _extends({}, sharedInputProps, {
      value: dateInputValue,
      "aria-label": dateInputAriaLabel,
      onFocus: this.onFoucsDateInput,
      placeholder: format,
      className: panelInputCls
    }));
    var datePanel = React.createElement(NextCalendar, {
      shape: "panel",
      modes: ["month", "year"],
      monthCellRender,
      yearCellRender,
      value,
      onSelect: this.onSelectCalendarPanel,
      defaultVisibleMonth: defaultVisibleYear,
      disabledDate: disabledDate6
    });
    var panelBody = datePanel;
    var panelFooter = footerRender6();
    var allowClear = value && hasClear;
    var trigger = React.createElement("div", {className: prefix + "month-picker-trigger"}, React.createElement(NextInput, _extends({}, sharedInputProps, {
      label,
      state,
      readOnly: true,
      value: triggerInputValue,
      placeholder: placeholder || locale.monthPlaceholder,
      hint: React.createElement(NextIcon, {
        type: "calendar",
        className: prefix + "date-picker-symbol-calendar-icon"
      }),
      hasClear: allowClear,
      className: triggerInputCls
    })));
    var PopupComponent = popupComponent ? popupComponent : Popup$2;
    return React.createElement("div", _extends({}, obj.pickOthers(MonthPicker2.propTypes, others), {
      className: monthPickerCls
    }), React.createElement(PopupComponent, _extends({
      autoFocus: true,
      align: popupAlign
    }, popupProps, {
      followTrigger,
      role: "combobox",
      "aria-expanded": visible,
      disabled,
      visible,
      onVisibleChange: this.onVisibleChange,
      triggerType: popupTriggerType,
      container: popupContainer,
      style: popupStyle,
      className: popupClassName,
      trigger
    }), popupContent ? popupContent : React.createElement("div", {className: panelBodyClassName, dir: others.dir}, React.createElement("div", {
      className: prefix + "month-picker-panel-header"
    }, dateInput), panelBody, panelFooter)));
  };
  return MonthPicker2;
}(Component), _class$3.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  label: propTypes.node,
  state: propTypes.oneOf(["success", "loading", "error"]),
  placeholder: propTypes.string,
  defaultVisibleYear: propTypes.func,
  value: checkDateValue,
  defaultValue: checkDateValue,
  format: propTypes.string,
  disabledDate: propTypes.func,
  footerRender: propTypes.func,
  onChange: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"]),
  disabled: propTypes.bool,
  hasClear: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupAlign: propTypes.string,
  popupContainer: propTypes.any,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  inputProps: propTypes.object,
  monthCellRender: propTypes.func,
  yearCellRender: propTypes.func,
  dateInputAriaLabel: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  locale: propTypes.object,
  className: propTypes.string,
  name: propTypes.string,
  popupComponent: propTypes.elementType,
  popupContent: propTypes.node
}), _class$3.defaultProps = {
  prefix: "next-",
  rtl: false,
  format: "YYYY-MM",
  size: "medium",
  disabledDate: function disabledDate3() {
    return false;
  },
  footerRender: function footerRender3() {
    return null;
  },
  hasClear: true,
  popupTriggerType: "click",
  popupAlign: "tl tl",
  locale: zhCN.DatePicker,
  onChange: func.noop,
  onVisibleChange: func.noop
}, _temp$2);
MonthPicker.displayName = "MonthPicker";
var MonthPicker$1 = polyfill(MonthPicker);
var _class$4, _temp$3;
var Popup$3 = NextOverlay.Popup;
var YearPicker = (_temp$3 = _class$4 = function(_Component) {
  _inherits(YearPicker2, _Component);
  function YearPicker2(props, context) {
    _classCallCheck(this, YearPicker2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.onValueChange = function(newValue) {
      var ret = _this.state.inputAsString && newValue ? newValue.format(_this.props.format) : newValue;
      _this.props.onChange(ret);
    };
    _this.onSelectCalendarPanel = function(value) {
      var prevSelectedMonth = _this.state.value;
      var selectedMonth = value.clone().month(0).date(1).hour(0).minute(0).second(0);
      _this.handleChange(selectedMonth, prevSelectedMonth, {inputing: false}, function() {
        _this.onVisibleChange(false, "calendarSelect");
      });
    };
    _this.clearValue = function() {
      _this.setState({
        dateInputStr: ""
      });
      _this.handleChange(null, _this.state.value);
    };
    _this.onDateInputChange = function(inputStr, e, eventType) {
      if (eventType === "clear" || !inputStr) {
        e.stopPropagation();
        _this.clearValue();
      } else {
        _this.setState({
          dateInputStr: inputStr,
          inputing: true
        });
      }
    };
    _this.onDateInputBlur = function() {
      var dateInputStr = _this.state.dateInputStr;
      if (dateInputStr) {
        var _this$props = _this.props, disabledDate6 = _this$props.disabledDate, format = _this$props.format;
        var parsed = hooks(dateInputStr, format, true);
        _this.setState({
          dateInputStr: "",
          inputing: false
        });
        if (parsed.isValid() && !disabledDate6(parsed, "year")) {
          _this.handleChange(parsed, _this.state.value);
        }
      }
    };
    _this.onKeyDown = function(e) {
      var format = _this.props.format;
      var _this$state = _this.state, dateInputStr = _this$state.dateInputStr, value = _this$state.value;
      var dateStr = onDateKeydown(e, {format, dateInputStr, value}, "year");
      if (!dateStr)
        return;
      _this.onDateInputChange(dateStr);
    };
    _this.handleChange = function(newValue, prevValue) {
      var others = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = arguments[3];
      if (!("value" in _this.props)) {
        _this.setState(_extends({
          value: newValue
        }, others));
      } else {
        _this.setState(_extends({}, others));
      }
      var format = _this.props.format;
      var newValueOf = newValue ? newValue.format(format) : null;
      var preValueOf = prevValue ? prevValue.format(format) : null;
      if (newValueOf !== preValueOf) {
        _this.onValueChange(newValue);
        if (typeof callback === "function") {
          return callback();
        }
      }
    };
    _this.onVisibleChange = function(visible, reason) {
      if (!("visible" in _this.props)) {
        _this.setState({
          visible
        });
      }
      _this.props.onVisibleChange(visible, reason);
    };
    _this.state = {
      value: formatDateValue(props.defaultValue, props.format),
      dateInputStr: "",
      inputing: false,
      visible: props.defaultVisible,
      inputAsString: typeof props.defaultValue === "string"
    };
    return _this;
  }
  YearPicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var states = {};
    if ("value" in props) {
      states.value = formatDateValue(props.value, props.format);
      states.inputAsString = typeof props.value === "string";
    }
    if ("visible" in props) {
      states.visible = props.visible;
    }
    return states;
  };
  YearPicker2.prototype.renderPreview = function renderPreview(others) {
    var _props = this.props, prefix = _props.prefix, format = _props.format, className = _props.className, renderPreview2 = _props.renderPreview;
    var value = this.state.value;
    var previewCls = classnames(className, prefix + "form-preview");
    var label = value ? value.format(format) : "";
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(value, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), label);
  };
  YearPicker2.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3;
    var _props2 = this.props, prefix = _props2.prefix, rtl = _props2.rtl, locale = _props2.locale, label = _props2.label, state = _props2.state, format = _props2.format, disabledDate6 = _props2.disabledDate, footerRender6 = _props2.footerRender, placeholder = _props2.placeholder, size = _props2.size, disabled = _props2.disabled, hasClear = _props2.hasClear, popupTriggerType = _props2.popupTriggerType, popupAlign = _props2.popupAlign, popupContainer = _props2.popupContainer, popupStyle = _props2.popupStyle, popupClassName = _props2.popupClassName, popupProps = _props2.popupProps, popupComponent = _props2.popupComponent, popupContent = _props2.popupContent, followTrigger = _props2.followTrigger, className = _props2.className, inputProps = _props2.inputProps, dateInputAriaLabel = _props2.dateInputAriaLabel, yearCellRender = _props2.yearCellRender, isPreview = _props2.isPreview, others = _objectWithoutProperties(_props2, ["prefix", "rtl", "locale", "label", "state", "format", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "dateInputAriaLabel", "yearCellRender", "isPreview"]);
    var _state = this.state, visible = _state.visible, value = _state.value, dateInputStr = _state.dateInputStr, inputing = _state.inputing;
    var yearPickerCls = classnames((_classnames = {}, _classnames[prefix + "year-picker"] = true, _classnames), className);
    var triggerInputCls = classnames((_classnames2 = {}, _classnames2[prefix + "year-picker-input"] = true, _classnames2[prefix + "error"] = false, _classnames2));
    var panelBodyClassName = classnames((_classnames3 = {}, _classnames3[prefix + "year-picker-body"] = true, _classnames3));
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview) {
      return this.renderPreview(obj.pickOthers(others, YearPicker2.PropTypes));
    }
    var panelInputCls = prefix + "year-picker-panel-input";
    var sharedInputProps = _extends({}, inputProps, {
      size,
      disabled,
      onChange: this.onDateInputChange,
      onBlur: this.onDateInputBlur,
      onPressEnter: this.onDateInputBlur,
      onKeyDown: this.onKeyDown
    });
    var dateInputValue = inputing ? dateInputStr : value && value.format(format) || "";
    var triggerInputValue = dateInputValue;
    var dateInput = React.createElement(NextInput, _extends({}, sharedInputProps, {
      "aria-label": dateInputAriaLabel,
      value: dateInputValue,
      placeholder: format,
      className: panelInputCls
    }));
    var datePanel = React.createElement(NextCalendar, {
      shape: "panel",
      modes: ["year"],
      value,
      yearCellRender,
      onSelect: this.onSelectCalendarPanel,
      disabledDate: disabledDate6
    });
    var panelBody = datePanel;
    var panelFooter = footerRender6();
    var allowClear = value && hasClear;
    var trigger = React.createElement("div", {className: prefix + "year-picker-trigger"}, React.createElement(NextInput, _extends({}, sharedInputProps, {
      label,
      state,
      value: triggerInputValue,
      role: "combobox",
      "aria-expanded": visible,
      readOnly: true,
      placeholder: placeholder || locale.yearPlaceholder,
      hint: React.createElement(NextIcon, {
        type: "calendar",
        className: prefix + "date-picker-symbol-calendar-icon"
      }),
      hasClear: allowClear,
      className: triggerInputCls
    })));
    var PopupComponent = popupComponent ? popupComponent : Popup$3;
    return React.createElement("div", _extends({}, obj.pickOthers(YearPicker2.propTypes, others), {
      className: yearPickerCls
    }), React.createElement(PopupComponent, _extends({
      autoFocus: true,
      align: popupAlign
    }, popupProps, {
      followTrigger,
      disabled,
      visible,
      onVisibleChange: this.onVisibleChange,
      triggerType: popupTriggerType,
      container: popupContainer,
      style: popupStyle,
      className: popupClassName,
      trigger
    }), popupContent ? popupContent : React.createElement("div", {dir: others.dir, className: panelBodyClassName}, React.createElement("div", {
      className: prefix + "year-picker-panel-header"
    }, dateInput), panelBody, panelFooter)));
  };
  return YearPicker2;
}(Component), _class$4.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  label: propTypes.node,
  state: propTypes.oneOf(["success", "loading", "error"]),
  placeholder: propTypes.string,
  value: checkDateValue,
  defaultValue: checkDateValue,
  format: propTypes.string,
  disabledDate: propTypes.func,
  footerRender: propTypes.func,
  onChange: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"]),
  disabled: propTypes.bool,
  hasClear: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupAlign: propTypes.string,
  popupContainer: propTypes.any,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  inputProps: propTypes.object,
  yearCellRender: propTypes.func,
  dateInputAriaLabel: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  locale: propTypes.object,
  className: propTypes.string,
  name: propTypes.string,
  popupComponent: propTypes.elementType,
  popupContent: propTypes.node
}, _class$4.defaultProps = {
  prefix: "next-",
  rtl: false,
  format: "YYYY",
  size: "medium",
  disabledDate: function disabledDate4() {
    return false;
  },
  footerRender: function footerRender4() {
    return null;
  },
  hasClear: true,
  popupTriggerType: "click",
  popupAlign: "tl tl",
  locale: zhCN.DatePicker,
  onChange: func.noop,
  onVisibleChange: func.noop
}, _temp$3);
YearPicker.displayName = "YearPicker";
var YearPicker$1 = polyfill(YearPicker);
var _class$5, _temp$4, _initialiseProps$2;
var Popup$4 = NextOverlay.Popup;
var WeekPicker = (_temp$4 = _class$5 = function(_Component) {
  _inherits(WeekPicker2, _Component);
  function WeekPicker2(props, context) {
    _classCallCheck(this, WeekPicker2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _initialiseProps$2.call(_this);
    var value = formatDateValue(props.value || props.defaultValue, props.format);
    _this.state = {
      value,
      visible: props.visible || props.defaultVisible
    };
    return _this;
  }
  WeekPicker2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var st = {};
    if ("value" in props) {
      st.value = formatDateValue(props.value, props.format);
    }
    if ("visible" in props) {
      st.visible = props.visible;
    }
    return st;
  };
  WeekPicker2.prototype.renderPreview = function renderPreview(others) {
    var _props = this.props, prefix = _props.prefix, format = _props.format, className = _props.className, renderPreview2 = _props.renderPreview;
    var value = this.state.value;
    var previewCls = classnames(className, prefix + "form-preview");
    var label = value ? value.format(format) : "";
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(value, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), label);
  };
  WeekPicker2.prototype.render = function render() {
    var _props2 = this.props, prefix = _props2.prefix, rtl = _props2.rtl, locale = _props2.locale, label = _props2.label, state = _props2.state, format = _props2.format, defaultVisibleMonth = _props2.defaultVisibleMonth, onVisibleMonthChange = _props2.onVisibleMonthChange, disabledDate6 = _props2.disabledDate, footerRender6 = _props2.footerRender, placeholder = _props2.placeholder, size = _props2.size, disabled = _props2.disabled, hasClear = _props2.hasClear, popupTriggerType = _props2.popupTriggerType, popupAlign = _props2.popupAlign, popupContainer = _props2.popupContainer, popupStyle = _props2.popupStyle, popupClassName = _props2.popupClassName, popupProps = _props2.popupProps, popupComponent = _props2.popupComponent, popupContent = _props2.popupContent, followTrigger = _props2.followTrigger, className = _props2.className, inputProps = _props2.inputProps, monthCellRender = _props2.monthCellRender, yearCellRender = _props2.yearCellRender, isPreview = _props2.isPreview, others = _objectWithoutProperties(_props2, ["prefix", "rtl", "locale", "label", "state", "format", "defaultVisibleMonth", "onVisibleMonthChange", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "monthCellRender", "yearCellRender", "isPreview"]);
    var _state = this.state, visible = _state.visible, value = _state.value;
    var sharedInputProps = _extends({}, inputProps, {
      size,
      disabled,
      onChange: this.onDateInputChange,
      onKeyDown: this.onKeyDown
    });
    if (rtl) {
      others.dir = "rtl";
    }
    if (isPreview) {
      return this.renderPreview(obj.pickOthers(others, WeekPicker2.PropTypes));
    }
    var trigger = React.createElement("div", {className: prefix + "week-picker-trigger"}, React.createElement(NextInput, _extends({}, sharedInputProps, {
      label,
      state,
      value: value ? value.format(format) : "",
      role: "combobox",
      "aria-expanded": visible,
      readOnly: true,
      placeholder: placeholder || locale.weekPlaceholder,
      hint: React.createElement(NextIcon, {
        type: "calendar",
        className: prefix + "date-picker-symbol-calendar-icon"
      }),
      hasClear: value && hasClear,
      className: prefix + "week-picker-input"
    })));
    var PopupComponent = popupComponent ? popupComponent : Popup$4;
    return React.createElement("div", _extends({}, obj.pickOthers(WeekPicker2.propTypes, others), {
      className: classnames(prefix + "week-picker", className)
    }), React.createElement(PopupComponent, _extends({
      align: popupAlign
    }, popupProps, {
      followTrigger,
      disabled,
      visible,
      onVisibleChange: this.onVisibleChange,
      triggerType: popupTriggerType,
      container: popupContainer,
      style: popupStyle,
      className: popupClassName,
      trigger
    }), popupContent ? popupContent : React.createElement("div", {
      dir: others.dir,
      className: prefix + "week-picker-body"
    }, React.createElement(NextCalendar, {
      shape: "panel",
      value,
      format,
      className: prefix + "calendar-week",
      dateCellRender: this.dateRender,
      monthCellRender,
      yearCellRender,
      onSelect: this.onSelectCalendarPanel,
      defaultVisibleMonth,
      onVisibleMonthChange,
      disabledDate: disabledDate6
    }), footerRender6())));
  };
  return WeekPicker2;
}(Component), _class$5.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  label: propTypes.node,
  state: propTypes.oneOf(["success", "loading", "error"]),
  placeholder: propTypes.string,
  defaultVisibleMonth: propTypes.func,
  onVisibleMonthChange: propTypes.func,
  value: checkDateValue,
  defaultValue: checkDateValue,
  format: propTypes.string,
  disabledDate: propTypes.func,
  footerRender: propTypes.func,
  onChange: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"]),
  disabled: propTypes.bool,
  hasClear: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupAlign: propTypes.string,
  popupContainer: propTypes.any,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  inputProps: propTypes.object,
  dateCellRender: propTypes.func,
  monthCellRender: propTypes.func,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  yearCellRender: propTypes.func,
  locale: propTypes.object,
  className: propTypes.string,
  name: propTypes.string,
  popupComponent: propTypes.elementType,
  popupContent: propTypes.node
}), _class$5.defaultProps = {
  prefix: "next-",
  rtl: false,
  format: "YYYY-wo",
  size: "medium",
  disabledDate: function disabledDate5() {
    return false;
  },
  footerRender: function footerRender5() {
    return null;
  },
  hasClear: true,
  popupTriggerType: "click",
  popupAlign: "tl tl",
  locale: zhCN.DatePicker,
  defaultVisible: false,
  onChange: func.noop,
  onVisibleChange: func.noop
}, _initialiseProps$2 = function _initialiseProps4() {
  var _this2 = this;
  this.handleChange = function(newValue, prevValue) {
    if (!("value" in _this2.props)) {
      _this2.setState({
        value: newValue
      });
    }
    var newValueOf = newValue ? newValue.valueOf() : null;
    var preValueOf = prevValue ? prevValue.valueOf() : null;
    if (newValueOf !== preValueOf) {
      _this2.props.onChange(newValue);
    }
  };
  this.onDateInputChange = function(value, e, eventType) {
    if (eventType === "clear" || !value) {
      e.stopPropagation();
      _this2.handleChange(null, _this2.state.value);
    }
  };
  this.onKeyDown = function(e) {
    if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
      return;
    }
    if (e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1 || e.controlKey || e.shiftKey) {
      return;
    }
    var date = _this2.state.value;
    if (date && date.isValid()) {
      var stepUnit = e.altKey ? "year" : "month";
      switch (e.keyCode) {
        case KEYCODE.UP:
          date.subtract(1, "w");
          break;
        case KEYCODE.DOWN:
          date.add(1, "w");
          break;
        case KEYCODE.PAGE_UP:
          date.subtract(1, stepUnit);
          break;
        case KEYCODE.PAGE_DOWN:
          date.add(1, stepUnit);
          break;
      }
    } else {
      date = hooks();
    }
    e.preventDefault();
    _this2.handleChange(date, _this2.state.value);
  };
  this.onVisibleChange = function(visible, type) {
    if (!("visible" in _this2.props)) {
      _this2.setState({
        visible
      });
    }
    _this2.props.onVisibleChange(visible, type);
  };
  this.onSelectCalendarPanel = function(value) {
    _this2.handleChange(value, _this2.state.value);
    _this2.onVisibleChange(false, "calendarSelect");
  };
  this.dateRender = function(value) {
    var _props3 = _this2.props, prefix = _props3.prefix, dateCellRender = _props3.dateCellRender;
    var selectedValue = _this2.state.value;
    var content = dateCellRender && typeof dateCellRender === "function" ? dateCellRender(value) : value.dates();
    if (selectedValue && selectedValue.years() === value.years() && selectedValue.weeks() === value.weeks()) {
      var _classnames;
      var firstDay = hooks.localeData().firstDayOfWeek();
      var endDay = firstDay - 1 < 0 ? 6 : firstDay - 1;
      return React.createElement("div", {
        className: classnames(prefix + "calendar-week-active-date", (_classnames = {}, _classnames[prefix + "calendar-week-active-start"] = value.days() === hooks.localeData().firstDayOfWeek(), _classnames[prefix + "calendar-week-active-end"] = value.days() === endDay, _classnames))
      }, React.createElement("span", null, content));
    }
    return content;
  };
}, _temp$4);
WeekPicker.displayName = "WeekPicker";
var WeekPicker$1 = polyfill(WeekPicker);
var transform = function transform2(props, deprecated) {
  var open = props.open, defaultOpen = props.defaultOpen, onOpenChange = props.onOpenChange, others = _objectWithoutProperties(props, ["open", "defaultOpen", "onOpenChange"]);
  var newProps = others;
  delete newProps.formater;
  if ("open" in props) {
    deprecated("open", "visible", "DatePicker");
    newProps.visible = open;
    if ("visible" in props) {
      newProps.visible = props.visible;
    }
  }
  if ("defaultOpen" in props) {
    deprecated("defaultOpen", "defaultVisible", "DatePicker");
    newProps.defaultVisible = defaultOpen;
    if ("defaultVisible" in props) {
      newProps.defaultVisible = props.defaultVisible;
    }
  }
  if ("onOpenChange" in props && typeof onOpenChange === "function") {
    deprecated("onOpenChange", "onVisibleChange", "DatePicker");
    newProps.onVisibleChange = onOpenChange;
    if ("onVisibleChange" in props) {
      newProps.onVisibleChange = props.onVisibleChange;
    }
  }
  if ("formater" in props) {
    deprecated("formater", "format showTime.format", "DatePicker");
  }
  if ("format" in props && typeof props.format !== "string") {
    deprecated("format", "format: PropTypes.string,", "DatePicker");
  }
  if ("ranges" in props) {
    deprecated("ranges", "footerRender: PropTypes.func", "RangePicker");
  }
  return newProps;
};
DatePicker$1.RangePicker = NextConfigProvider.config(RangePicker$1, {
  componentName: "DatePicker",
  transform
});
DatePicker$1.MonthPicker = NextConfigProvider.config(MonthPicker$1, {
  componentName: "DatePicker",
  transform
});
DatePicker$1.YearPicker = NextConfigProvider.config(YearPicker$1, {
  componentName: "DatePicker",
  transform
});
DatePicker$1.WeekPicker = NextConfigProvider.config(WeekPicker$1, {
  componentName: "DatePicker"
});
var NextDatePicker = NextConfigProvider.config(DatePicker$1, {
  transform
});
export {NextDatePicker as N};

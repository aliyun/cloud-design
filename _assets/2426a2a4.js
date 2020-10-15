import {g as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, f as _extends, e as classnames, R as React, p as propTypes} from "./index.9ac755a3.js";
import {o as obj, f as func, l as log} from "./4ad0c37a.js";
import {N as NextConfigProvider} from "./1efa18cd.js";
import {N as NextIcon} from "./9cc958bb.js";
import {N as NextButton} from "./ca58aca8.js";
import {N as NextInput} from "./5861d57f.js";
var _class, _temp;
var NumberPicker = (_temp = _class = function(_React$Component) {
  _inherits(NumberPicker2, _React$Component);
  function NumberPicker2(props) {
    _classCallCheck(this, NumberPicker2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    var value = void 0;
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    _this.state = {
      value: value === void 0 || value === null ? "" : value,
      hasFocused: false,
      reRender: true
    };
    return _this;
  }
  NumberPicker2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value && prevState.reRender) {
      var value = nextProps.value;
      return {
        value: value === void 0 || value === null ? "" : value
      };
    }
    return null;
  };
  NumberPicker2.prototype.onChange = function onChange(value, e) {
    if (this.props.editable === true) {
      value = value.trim();
      value = value.replace("。", ".");
      if (this.state.value === value) {
        return;
      }
      if (value) {
        if (value === "-" || this.state.value === "-") {
          this.setState({
            value,
            reRender: false
          });
          return;
        }
        if (value.match(/\.0*$/) || value.match(/\.[0-9]*0$/)) {
          this.setState({
            value,
            reRender: false
          });
          return;
        }
        if (!isNaN(value) && Number(value) < this.props.min) {
          this.setState({
            value,
            reRender: false
          });
          return;
        }
      }
      this.setInputValue(value, e);
    }
  };
  NumberPicker2.prototype.onCorrect = function onCorrect(currentValue, oldValue) {
    this.props.onCorrect({
      currentValue,
      oldValue
    });
  };
  NumberPicker2.prototype.onKeyDown = function onKeyDown(e) {
    var _props;
    if (e.keyCode === 38) {
      this.up(false, e);
    } else if (e.keyCode === 40) {
      this.down(false, e);
    }
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    (_props = this.props).onKeyDown.apply(_props, [e].concat(args));
  };
  NumberPicker2.prototype.onFocus = function onFocus(e) {
    var onFocus2 = this.props.onFocus;
    this.setFocus(true);
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    onFocus2 && onFocus2.apply(void 0, [e].concat(args));
  };
  NumberPicker2.prototype.onBlur = function onBlur(e) {
    var value = this.getCurrentValidValue(e.target.value.trim());
    if (this.state.value !== value) {
      this.setValue(value, e);
    }
    this.setFocus(false);
    var onBlur2 = this.props.onBlur;
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    onBlur2 && onBlur2.apply(void 0, [e].concat(args));
  };
  NumberPicker2.prototype.getCurrentValidValue = function getCurrentValidValue(value) {
    var val = value;
    var props = this.props;
    if (val === "") {
      val = "";
    } else if (!isNaN(val)) {
      val = Number(val);
      if (val < props.min) {
        val = props.min;
      }
      if (val > props.max) {
        val = props.max;
      }
      var strValue = "" + val;
      var pointPos = strValue.indexOf(".");
      var cutPos = pointPos + 1 + this.getPrecision();
      if (pointPos !== -1 && strValue.length > cutPos) {
        val = Number(strValue.substr(0, cutPos));
      }
    } else {
      val = this.state.value;
    }
    if ("" + val !== "" + value) {
      if ("value" in this.props && "" + this.props.value !== "" + this.state.value) {
        this.setState({
          value: this.props.value
        });
      }
      this.onCorrect(val, value);
    }
    return val;
  };
  NumberPicker2.prototype.setValue = function setValue(v, e, triggerType) {
    if (!("value" in this.props)) {
      this.setState({
        value: v
      });
    }
    this.setState({
      reRender: true
    });
    this.props.onChange(isNaN(v) || v === "" ? void 0 : v, _extends({}, e, {
      triggerType
    }));
  };
  NumberPicker2.prototype.setInputValue = function setInputValue(v, e) {
    var value = this.getCurrentValidValue(v);
    if (this.state.value !== value) {
      this.setValue(value, e);
    }
  };
  NumberPicker2.prototype.setFocus = function setFocus(status) {
    var format = this.props.format;
    if (typeof format === "function") {
      this.setState({
        hasFocused: status
      });
    }
  };
  NumberPicker2.prototype.getPrecision = function getPrecision() {
    var props = this.props;
    var stepString = props.step.toString();
    if (stepString.indexOf("e-") >= 0) {
      return parseInt(stepString.slice(stepString.indexOf("e-")), 10);
    }
    var precision = 0;
    if (stepString.indexOf(".") >= 0) {
      precision = stepString.length - stepString.indexOf(".") - 1;
    }
    return Math.max(precision, this.props.precision);
  };
  NumberPicker2.prototype.getPrecisionFactor = function getPrecisionFactor() {
    var precision = this.getPrecision();
    return Math.pow(10, precision);
  };
  NumberPicker2.prototype.upStep = function upStep(val) {
    var _props2 = this.props, step = _props2.step, min = _props2.min;
    var precisionFactor = this.getPrecisionFactor();
    var result = void 0;
    if (typeof val === "number") {
      result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
      result = this.hackChrome(result);
    } else {
      result = min === -Infinity ? step : min;
    }
    return result;
  };
  NumberPicker2.prototype.downStep = function downStep(val) {
    var _props3 = this.props, step = _props3.step, min = _props3.min;
    var precisionFactor = this.getPrecisionFactor();
    var result = void 0;
    if (typeof val === "number") {
      result = (precisionFactor * val - precisionFactor * step) / precisionFactor;
      result = this.hackChrome(result);
    } else {
      result = min === -Infinity ? -step : min;
    }
    return result;
  };
  NumberPicker2.prototype.hackChrome = function hackChrome(value) {
    var precision = this.getPrecision();
    if (precision > 0) {
      return Number(Number(value).toFixed(precision));
    }
    return value;
  };
  NumberPicker2.prototype.step = function step(type, disabled, e) {
    if (e) {
      e.preventDefault();
    }
    var _props4 = this.props, onDisabled = _props4.onDisabled, min = _props4.min, max = _props4.max;
    if (disabled) {
      return onDisabled(e);
    }
    var value = this.state.value;
    if (isNaN(value)) {
      return;
    }
    var val = this[type + "Step"](value);
    if (val > max) {
      val = max;
    }
    if (val < min) {
      val = min;
    }
    this.setValue(val, e, type);
  };
  NumberPicker2.prototype.down = function down(disabled, e) {
    this.step("down", disabled, e);
  };
  NumberPicker2.prototype.up = function up(disabled, e) {
    this.step("up", disabled, e);
  };
  NumberPicker2.prototype.renderValue = function renderValue() {
    var _state = this.state, value = _state.value, hasFocused = _state.hasFocused;
    var format = this.props.format;
    return typeof format === "function" && !hasFocused ? format(value) : value;
  };
  NumberPicker2.prototype.focus = function focus() {
    this.inputRef.getInstance().focus();
  };
  NumberPicker2.prototype.saveInputRef = function saveInputRef(ref) {
    this.inputRef = ref;
  };
  NumberPicker2.prototype.handleMouseDown = function handleMouseDown(e) {
    e.preventDefault();
  };
  NumberPicker2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props5 = this.props, device = _props5.device, prefix = _props5.prefix, rtl = _props5.rtl, disabled = _props5.disabled, style = _props5.style, className = _props5.className, size = _props5.size, max = _props5.max, min = _props5.min, autoFocus = _props5.autoFocus, editable = _props5.editable, state = _props5.state, label = _props5.label, _props5$upBtnProps = _props5.upBtnProps, upBtnProps = _props5$upBtnProps === void 0 ? {} : _props5$upBtnProps, _props5$downBtnProps = _props5.downBtnProps, downBtnProps = _props5$downBtnProps === void 0 ? {} : _props5$downBtnProps, innerAfter = _props5.innerAfter, isPreview = _props5.isPreview, renderPreview = _props5.renderPreview, hasTrigger = _props5.hasTrigger, alwaysShowTrigger = _props5.alwaysShowTrigger;
    var type = device === "phone" ? "inline" : this.props.type;
    var prefixCls = prefix + "number-picker";
    var cls = classnames((_classNames = {}, _classNames[prefixCls] = true, _classNames[prefixCls + "-" + type] = type, _classNames["" + prefix + size] = true, _classNames[prefixCls + "-show-trigger"] = alwaysShowTrigger, _classNames[prefixCls + "-no-trigger"] = !hasTrigger, _classNames[prefix + "disabled"] = disabled, _classNames[className] = className, _classNames));
    var upDisabled = false;
    var downDisabled = false;
    var value = this.state.value;
    if (!isNaN(value)) {
      var val = Number(value);
      if (val >= max) {
        upDisabled = true;
      }
      if (val <= min) {
        downDisabled = true;
      }
    }
    var extra = null, addonBefore = null, addonAfter = null;
    if (type === "normal") {
      extra = React.createElement("span", {className: prefixCls + "-handler"}, React.createElement(NextButton, _extends({}, upBtnProps, {
        onMouseDown: this.handleMouseDown,
        disabled,
        className: (upBtnProps.className || "") + " " + (upDisabled ? "disabled" : ""),
        onClick: this.up.bind(this, upDisabled)
      }), React.createElement(NextIcon, {type: "arrow-up", className: prefixCls + "-up-icon"})), React.createElement(NextButton, _extends({}, downBtnProps, {
        onMouseDown: this.handleMouseDown,
        disabled,
        className: (downBtnProps.className || "") + " " + (downDisabled ? "disabled" : ""),
        onClick: this.down.bind(this, downDisabled)
      }), React.createElement(NextIcon, {type: "arrow-down", className: prefixCls + "-down-icon"})));
    } else {
      addonBefore = React.createElement(NextButton, _extends({}, downBtnProps, {
        size,
        disabled,
        className: (downBtnProps.className || "") + " " + (downDisabled ? "disabled" : ""),
        onClick: this.down.bind(this, downDisabled)
      }), React.createElement(NextIcon, {type: "minus", className: prefixCls + "-minus-icon"}));
      addonAfter = React.createElement(NextButton, _extends({}, upBtnProps, {
        size,
        disabled,
        className: (upBtnProps.className || "") + " " + (upDisabled ? "disabled" : ""),
        onClick: this.up.bind(this, upDisabled)
      }), React.createElement(NextIcon, {type: "add", className: prefixCls + "-add-icon"}));
    }
    var others = obj.pickOthers(NumberPicker2.propTypes, this.props);
    var dataAttrs = obj.pickAttrsWith(this.props, "data-");
    var previewCls = classnames((_classNames2 = {}, _classNames2[prefix + "form-preview"] = true, _classNames2[className] = !!className, _classNames2));
    if (isPreview) {
      if (typeof renderPreview === "function") {
        return React.createElement("div", _extends({}, others, {style, className: previewCls}), renderPreview(this.renderValue(), this.props));
      }
      return React.createElement("p", _extends({}, others, {style: {style}, className: previewCls}), this.renderValue());
    }
    return React.createElement("span", _extends({className: cls, style, dir: rtl ? "rtl" : void 0}, dataAttrs), React.createElement(NextInput, _extends({}, others, {
      hasClear: false,
      "aria-valuemax": max !== Infinity ? max : void 0,
      "aria-valuemin": min !== -Infinity ? min : void 0,
      state: state === "error" ? "error" : null,
      onBlur: this.onBlur.bind(this),
      onFocus: this.onFocus.bind(this),
      onKeyDown: this.onKeyDown.bind(this),
      autoFocus,
      readOnly: !editable,
      value: this.renderValue(),
      disabled,
      size,
      onChange: this.onChange.bind(this),
      ref: this.saveInputRef.bind(this),
      label,
      innerAfter,
      extra: hasTrigger ? extra : null,
      addonBefore,
      addonAfter
    })));
  };
  return NumberPicker2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  type: propTypes.oneOf(["normal", "inline"]),
  size: propTypes.oneOf(["large", "medium"]),
  value: propTypes.number,
  defaultValue: propTypes.number,
  disabled: propTypes.bool,
  step: propTypes.oneOfType([propTypes.number, propTypes.string]),
  precision: propTypes.number,
  editable: propTypes.bool,
  autoFocus: propTypes.bool,
  onChange: propTypes.func,
  onKeyDown: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onCorrect: propTypes.func,
  onDisabled: propTypes.func,
  max: propTypes.number,
  min: propTypes.number,
  className: propTypes.string,
  style: propTypes.object,
  state: propTypes.oneOf(["error"]),
  format: propTypes.func,
  upBtnProps: propTypes.object,
  downBtnProps: propTypes.object,
  label: propTypes.node,
  innerAfter: propTypes.node,
  rtl: propTypes.bool,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  device: propTypes.oneOf(["phone", "tablet", "desktop"]),
  hasTrigger: propTypes.bool,
  alwaysShowTrigger: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  max: Infinity,
  min: -Infinity,
  type: "normal",
  size: "medium",
  step: 1,
  style: {},
  precision: 0,
  editable: true,
  onChange: func.noop,
  onKeyDown: func.noop,
  onBlur: func.noop,
  onCorrect: func.noop,
  onDisabled: func.noop,
  hasTrigger: true,
  alwaysShowTrigger: false
}, _temp);
NumberPicker.displayName = "NumberPicker";
var NumberPicker$1 = polyfill(NumberPicker);
var NextNumberPicker = NextConfigProvider.config(NumberPicker$1, {
  transform: function transform(props) {
    if ("onDisabled" in props && typeof props.onDisabled === "function") {
      log.warning("[NumberPicker]: onDisabled is deleted!");
    }
    return props;
  }
});
export {NextNumberPicker as N};

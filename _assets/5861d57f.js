import {g as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, e as classnames, R as React, f as _extends, p as propTypes, d as _objectWithoutProperties, i as isValidElement, j as cloneElement, k as _typeof, l as ReactDOM} from "./index.9ac755a3.js";
import {f as func, o as obj, e as env} from "./4ad0c37a.js";
import {N as NextConfigProvider, z as zhCN} from "./1efa18cd.js";
import {N as NextIcon} from "./9cc958bb.js";
var _class, _temp2;
var Base = (_temp2 = _class = function(_React$Component) {
  _inherits(Base2, _React$Component);
  function Base2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Base2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.saveRef = function(input) {
      _this.inputRef = input;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Base2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      var value = nextProps.value;
      return {
        value: value === void 0 || value === null ? "" : value
      };
    }
    return null;
  };
  Base2.prototype.ieHack = function ieHack(value) {
    return value;
  };
  Base2.prototype.onChange = function onChange(e) {
    if ("stopPropagation" in e) {
      e.stopPropagation();
    } else if ("cancelBubble" in e) {
      e.cancelBubble();
    }
    var value = e.target.value;
    if (this.props.trim) {
      value = value.trim();
    }
    value = this.ieHack(value);
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
    if (value && this.props.htmlType === "number") {
      value = Number(value);
    }
    this.props.onChange(value, e);
  };
  Base2.prototype.onKeyDown = function onKeyDown(e) {
    var value = e.target.value;
    var maxLength = this.props.maxLength;
    var len = maxLength > 0 && value ? this.getValueLength(value) : 0;
    var opts = {};
    if (this.props.trim && e.keyCode === 32) {
      opts.beTrimed = true;
    }
    if (maxLength > 0 && (len > maxLength + 1 || (len === maxLength || len === maxLength + 1) && e.keyCode !== 8 && e.keyCode !== 46)) {
      opts.overMaxLength = true;
    }
    this.props.onKeyDown(e, opts);
  };
  Base2.prototype.onFocus = function onFocus(e) {
    this.setState({
      focus: true
    });
    this.props.onFocus(e);
  };
  Base2.prototype.onBlur = function onBlur(e) {
    this.setState({
      focus: false
    });
    this.props.onBlur(e);
  };
  Base2.prototype.renderLength = function renderLength() {
    var _classNames;
    var _props = this.props, maxLength = _props.maxLength, hasLimitHint = _props.hasLimitHint, prefix = _props.prefix, rtl = _props.rtl;
    var len = maxLength > 0 && this.state.value ? this.getValueLength(this.state.value) : 0;
    var classesLenWrap = classnames((_classNames = {}, _classNames[prefix + "input-len"] = true, _classNames[prefix + "error"] = len > maxLength, _classNames));
    var content = rtl ? maxLength + "/" + len : len + "/" + maxLength;
    return maxLength && hasLimitHint ? React.createElement("span", {className: classesLenWrap}, content) : null;
  };
  Base2.prototype.renderControl = function renderControl() {
    var lenWrap = this.renderLength();
    return lenWrap ? React.createElement("span", {className: this.props.prefix + "input-control"}, lenWrap) : null;
  };
  Base2.prototype.getClass = function getClass() {
    var _classNames2;
    var _props2 = this.props, disabled = _props2.disabled, state = _props2.state, prefix = _props2.prefix;
    return classnames((_classNames2 = {}, _classNames2[prefix + "input"] = true, _classNames2[prefix + "disabled"] = !!disabled, _classNames2[prefix + "error"] = state === "error", _classNames2[prefix + "warning"] = state === "warning", _classNames2[prefix + "focus"] = this.state.focus, _classNames2));
  };
  Base2.prototype.getProps = function getProps() {
    var _props3 = this.props, placeholder = _props3.placeholder, inputStyle = _props3.inputStyle, disabled = _props3.disabled, readOnly = _props3.readOnly, cutString = _props3.cutString, maxLength = _props3.maxLength, name = _props3.name;
    var props = {
      style: inputStyle,
      placeholder,
      disabled,
      readOnly,
      name,
      maxLength: cutString ? maxLength : void 0,
      value: this.state.value,
      onChange: this.onChange.bind(this),
      onBlur: this.onBlur.bind(this),
      onFocus: this.onFocus.bind(this)
    };
    if (disabled) {
      props["aria-disabled"] = disabled;
    }
    return props;
  };
  Base2.prototype.getInputNode = function getInputNode() {
    return this.inputRef;
  };
  Base2.prototype.focus = function focus(start, end) {
    this.inputRef.focus();
    if (typeof start === "number") {
      this.inputRef.selectionStart = start;
    }
    if (typeof end === "number") {
      this.inputRef.selectionEnd = end;
    }
  };
  return Base2;
}(React.Component), _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  onKeyDown: propTypes.func,
  disabled: propTypes.bool,
  maxLength: propTypes.number,
  hasLimitHint: propTypes.bool,
  cutString: propTypes.bool,
  readOnly: propTypes.bool,
  trim: propTypes.bool,
  placeholder: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  getValueLength: propTypes.func,
  inputStyle: propTypes.object,
  className: propTypes.string,
  style: propTypes.object,
  htmlType: propTypes.string,
  name: propTypes.string,
  rtl: propTypes.bool,
  state: propTypes.oneOf(["error", "loading", "success", "warning"]),
  locale: propTypes.object,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  size: propTypes.oneOf(["small", "medium", "large"])
}), _class.defaultProps = {
  disabled: false,
  prefix: "next-",
  size: "medium",
  maxLength: null,
  hasLimitHint: false,
  cutString: true,
  readOnly: false,
  isPreview: false,
  trim: false,
  onFocus: func.noop,
  onBlur: func.noop,
  onChange: func.noop,
  onKeyDown: func.noop,
  getValueLength: func.noop,
  locale: zhCN.Input
}, _temp2);
Base.displayName = "Base";
var Base$1 = polyfill(Base);
var _class$1, _temp;
var Group = (_temp = _class$1 = function(_React$Component) {
  _inherits(Group2, _React$Component);
  function Group2() {
    _classCallCheck(this, Group2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Group2.prototype.render = function render() {
    var _classNames, _classNames2, _classNames3;
    var _props = this.props, className = _props.className, style = _props.style, children = _props.children, prefix = _props.prefix, addonBefore = _props.addonBefore, addonAfter = _props.addonAfter, addonBeforeClassName = _props.addonBeforeClassName, addonAfterClassName = _props.addonAfterClassName, rtl = _props.rtl, disabled = _props.disabled, others = _objectWithoutProperties(_props, ["className", "style", "children", "prefix", "addonBefore", "addonAfter", "addonBeforeClassName", "addonAfterClassName", "rtl", "disabled"]);
    var cls = classnames((_classNames = {}, _classNames[prefix + "input-group"] = true, _classNames[prefix + "disabled"] = disabled, _classNames[className] = !!className, _classNames));
    var addonCls = prefix + "input-group-addon";
    var beforeCls = classnames(addonCls, (_classNames2 = {}, _classNames2[prefix + "before"] = true, _classNames2[addonBeforeClassName] = addonBeforeClassName, _classNames2));
    var afterCls = classnames(addonCls, (_classNames3 = {}, _classNames3[prefix + "after"] = true, _classNames3[addonAfterClassName] = addonAfterClassName, _classNames3));
    var before = addonBefore ? React.createElement("span", {className: beforeCls}, addonBefore) : null;
    var after = addonAfter ? React.createElement("span", {className: afterCls}, addonAfter) : null;
    return React.createElement("span", _extends({}, others, {disabled, dir: rtl ? "rtl" : void 0, className: cls, style}), before, children, after);
  };
  return Group2;
}(React.Component), _class$1.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  addonBefore: propTypes.node,
  addonBeforeClassName: propTypes.string,
  addonAfter: propTypes.node,
  addonAfterClassName: propTypes.string,
  rtl: propTypes.bool
}, _class$1.defaultProps = {
  prefix: "next-"
}, _temp);
Group.displayName = "Group";
var Group$1 = NextConfigProvider.config(Group);
var _class$2, _temp$1;
function preventDefault(e) {
  e.preventDefault();
}
var Input = (_temp$1 = _class$2 = function(_Base) {
  _inherits(Input2, _Base);
  function Input2(props) {
    _classCallCheck(this, Input2);
    var _this = _possibleConstructorReturn(this, _Base.call(this, props));
    _this.handleKeyDown = function(e) {
      if (e.keyCode === 13) {
        _this.props.onPressEnter(e);
      }
      _this.onKeyDown(e);
    };
    _this.handleKeyDownFromClear = function(e) {
      if (e.keyCode === 13) {
        _this.onClear(e);
      }
    };
    var value = void 0;
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    _this.state = {
      value: typeof value === "undefined" ? "" : value
    };
    return _this;
  }
  Input2.prototype.getValueLength = function getValueLength(value) {
    var nv = "" + value;
    var strLen = this.props.getValueLength(nv);
    if (typeof strLen !== "number") {
      strLen = nv.length;
    }
    return strLen;
  };
  Input2.prototype.renderControl = function renderControl() {
    var _props = this.props, hasClear = _props.hasClear, readOnly = _props.readOnly, state = _props.state, prefix = _props.prefix, hint = _props.hint, extra = _props.extra, locale = _props.locale;
    var lenWrap = this.renderLength();
    var stateWrap = null;
    if (state === "success") {
      stateWrap = React.createElement(NextIcon, {type: "success-filling", className: prefix + "input-success-icon"});
    } else if (state === "loading") {
      stateWrap = React.createElement(NextIcon, {type: "loading", className: prefix + "input-loading-icon"});
    } else if (state === "warning") {
      stateWrap = React.createElement(NextIcon, {type: "warning", className: prefix + "input-warning-icon"});
    }
    var clearWrap = null;
    var showClear = hasClear && !readOnly && !!("" + this.state.value);
    if (hint || showClear) {
      var hintIcon = null;
      if (hint) {
        if (typeof hint === "string") {
          hintIcon = React.createElement(NextIcon, {type: hint, className: prefix + "input-hint"});
        } else if (isValidElement(hint)) {
          hintIcon = cloneElement(hint, {
            className: classnames(hint.props.className, prefix + "input-hint")
          });
        } else {
          hintIcon = hint;
        }
      } else {
        hintIcon = React.createElement(NextIcon, {
          type: "delete-filling",
          role: "button",
          tabIndex: "0",
          className: prefix + "input-hint " + prefix + "input-clear-icon",
          "aria-label": locale.clear,
          onClick: this.onClear.bind(this),
          onMouseDown: preventDefault,
          onKeyDown: this.handleKeyDownFromClear
        });
      }
      clearWrap = React.createElement("span", {className: prefix + "input-hint-wrap"}, hasClear && hint ? React.createElement(NextIcon, {
        type: "delete-filling",
        role: "button",
        tabIndex: "0",
        className: prefix + "input-clear " + prefix + "input-clear-icon",
        "aria-label": locale.clear,
        onClick: this.onClear.bind(this),
        onMouseDown: preventDefault,
        onKeyDown: this.handleKeyDownFromClear
      }) : null, hintIcon);
    }
    if (state === "loading") {
      clearWrap = null;
    }
    return clearWrap || lenWrap || stateWrap || extra ? React.createElement("span", {className: prefix + "input-control"}, clearWrap, lenWrap, stateWrap, extra) : null;
  };
  Input2.prototype.renderLabel = function renderLabel() {
    var _props2 = this.props, label = _props2.label, prefix = _props2.prefix, id = _props2.id;
    return label ? React.createElement("label", {className: prefix + "input-label", htmlFor: id}, label) : null;
  };
  Input2.prototype.renderInner = function renderInner(inner, cls) {
    return inner ? React.createElement("span", {className: cls}, inner) : null;
  };
  Input2.prototype.onClear = function onClear(e) {
    if (this.props.disabled) {
      return;
    }
    if (!("value" in this.props)) {
      this.setState({
        value: ""
      });
    }
    this.props.onChange("", e, "clear");
    this.focus();
  };
  Input2.prototype.render = function render() {
    var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6, _classNames7;
    var _props3 = this.props, size = _props3.size, htmlType = _props3.htmlType, htmlSize = _props3.htmlSize, autoComplete = _props3.autoComplete, autoFocus = _props3.autoFocus, disabled = _props3.disabled, style = _props3.style, innerBefore = _props3.innerBefore, innerAfter = _props3.innerAfter, innerBeforeClassName = _props3.innerBeforeClassName, innerAfterClassName = _props3.innerAfterClassName, className = _props3.className, hasBorder = _props3.hasBorder, prefix = _props3.prefix, isPreview = _props3.isPreview, renderPreview = _props3.renderPreview, addonBefore = _props3.addonBefore, addonAfter = _props3.addonAfter, addonTextBefore = _props3.addonTextBefore, addonTextAfter = _props3.addonTextAfter, inputRender2 = _props3.inputRender, rtl = _props3.rtl;
    var hasAddon = addonBefore || addonAfter || addonTextBefore || addonTextAfter;
    var cls = classnames(this.getClass(), (_classNames = {}, _classNames["" + prefix + size] = true, _classNames[prefix + "hidden"] = this.props.htmlType === "hidden", _classNames[prefix + "noborder"] = !hasBorder || this.props.htmlType === "file", _classNames[prefix + "input-group-auto-width"] = hasAddon, _classNames[prefix + "disabled"] = disabled, _classNames[className] = !!className && !hasAddon, _classNames));
    var innerCls = prefix + "input-inner";
    var innerBeforeCls = classnames((_classNames2 = {}, _classNames2[innerCls] = true, _classNames2[prefix + "before"] = true, _classNames2[innerBeforeClassName] = innerBeforeClassName, _classNames2));
    var innerAfterCls = classnames((_classNames3 = {}, _classNames3[innerCls] = true, _classNames3[prefix + "after"] = true, _classNames3[innerAfterClassName] = innerAfterClassName, _classNames3));
    var previewCls = classnames((_classNames4 = {}, _classNames4[prefix + "form-preview"] = true, _classNames4[className] = !!className, _classNames4));
    var props = this.getProps();
    var dataProps = obj.pickAttrsWith(this.props, "data-");
    var others = obj.pickOthers(_extends({}, dataProps, Input2.propTypes), this.props);
    if (isPreview) {
      var value = props.value;
      var label = this.props.label;
      if (typeof renderPreview === "function") {
        return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview(value, this.props));
      }
      return React.createElement("div", _extends({}, others, {className: previewCls}), addonBefore || addonTextBefore, label, innerBefore, value, innerAfter, addonAfter || addonTextAfter);
    }
    var inputEl = React.createElement("input", _extends({}, others, props, {
      height: "100%",
      type: htmlType,
      size: htmlSize,
      autoFocus,
      autoComplete,
      onKeyDown: this.handleKeyDown,
      ref: this.saveRef
    }));
    var inputWrap = React.createElement("span", _extends({}, dataProps, {dir: rtl ? "rtl" : void 0, className: cls, style: hasAddon ? void 0 : style}), this.renderLabel(), this.renderInner(innerBefore, innerBeforeCls), inputRender2(inputEl), this.renderInner(innerAfter, innerAfterCls), this.renderControl());
    var groupCls = classnames((_classNames5 = {}, _classNames5[prefix + "input-group-text"] = true, _classNames5["" + prefix + size] = !!size, _classNames5[prefix + "disabled"] = disabled, _classNames5));
    var addonBeforeCls = classnames((_classNames6 = {}, _classNames6[groupCls] = addonTextBefore, _classNames6));
    var addonAfterCls = classnames((_classNames7 = {}, _classNames7[groupCls] = addonTextAfter, _classNames7));
    if (hasAddon) {
      return React.createElement(Group$1, _extends({}, dataProps, {
        className,
        style,
        disabled,
        addonBefore: addonBefore || addonTextBefore,
        addonBeforeClassName: addonBeforeCls,
        addonAfter: addonAfter || addonTextAfter,
        addonAfterClassName: addonAfterCls
      }), inputWrap);
    }
    return inputWrap;
  };
  return Input2;
}(Base$1), _class$2.getDerivedStateFromProps = Base$1.getDerivedStateFromProps, _class$2.propTypes = _extends({}, Base$1.propTypes, {
  label: propTypes.node,
  hasClear: propTypes.bool,
  hasBorder: propTypes.bool,
  state: propTypes.oneOf(["error", "loading", "success", "warning"]),
  onPressEnter: propTypes.func,
  onClear: propTypes.func,
  htmlType: propTypes.string,
  htmlSize: propTypes.string,
  hint: propTypes.oneOfType([propTypes.string, propTypes.node]),
  innerBefore: propTypes.node,
  innerAfter: propTypes.node,
  addonBefore: propTypes.node,
  addonAfter: propTypes.node,
  addonTextBefore: propTypes.node,
  addonTextAfter: propTypes.node,
  autoComplete: propTypes.string,
  autoFocus: propTypes.bool,
  inputRender: propTypes.func,
  extra: propTypes.node,
  innerBeforeClassName: propTypes.string,
  innerAfterClassName: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}), _class$2.defaultProps = _extends({}, Base$1.defaultProps, {
  autoComplete: "off",
  hasBorder: true,
  isPreview: false,
  onPressEnter: func.noop,
  inputRender: function inputRender(el) {
    return el;
  }
}), _temp$1);
var _class$3, _temp2$1;
function preventDefault$1(e) {
  e.preventDefault();
}
var Password = (_temp2$1 = _class$3 = function(_Input) {
  _inherits(Password2, _Input);
  function Password2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Password2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Input.call.apply(_Input, [this].concat(args))), _this), _this.state = {
      hint: "eye",
      htmlType: "password"
    }, _this.toggleEye = function(e) {
      e.preventDefault();
      var eyeClose = _this.state.hint === "eye-close";
      _this.setState({
        hint: eyeClose ? "eye" : "eye-close",
        htmlType: eyeClose || !_this.props.showToggle ? "password" : "text"
      });
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Password2.prototype.render = function render() {
    var _props = this.props, showToggle = _props.showToggle, others = _objectWithoutProperties(_props, ["showToggle"]);
    var _state = this.state, hint = _state.hint, htmlType = _state.htmlType;
    var extra = showToggle ? React.createElement(NextIcon, {
      type: hint,
      onClick: this.toggleEye,
      onMouseDown: preventDefault$1
    }) : null;
    return React.createElement(Input, _extends({}, others, {extra, htmlType}));
  };
  return Password2;
}(Input), _class$3.getDerivedStateFromProps = Input.getDerivedStateFromProps, _class$3.propTypes = _extends({}, Input.propTypes, {
  showToggle: propTypes.bool
}), _class$3.defaultProps = _extends({}, Input.defaultProps, {
  showToggle: true
}), _temp2$1);
var _class$4, _temp$2, _initialiseProps;
function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}
var isMacSafari = typeof navigator !== "undefined" && navigator && navigator.userAgent ? navigator.userAgent.match(/^((?!chrome|android|windows).)*safari/i) : false;
var hiddenStyle = {
  visibility: "hidden",
  position: "absolute",
  zIndex: "-1000",
  top: "-1000px",
  overflowY: "hidden",
  left: 0,
  right: 0
};
var TextArea = (_temp$2 = _class$4 = function(_Base) {
  _inherits(TextArea2, _Base);
  function TextArea2(props) {
    _classCallCheck(this, TextArea2);
    var _this = _possibleConstructorReturn(this, _Base.call(this, props));
    _initialiseProps.call(_this);
    var value = void 0;
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    _this.state = {
      value: typeof value === "undefined" ? "" : value
    };
    return _this;
  }
  TextArea2.prototype.componentDidMount = function componentDidMount() {
    var autoHeight = this.props.autoHeight;
    if (autoHeight) {
      if ((typeof autoHeight === "undefined" ? "undefined" : _typeof(autoHeight)) === "object") {
        this.setState(this._getMinMaxHeight(autoHeight, this.state.value));
      } else {
        this.setState({
          height: this._getHeight(this.state.value),
          overflowY: "hidden"
        });
      }
    }
  };
  TextArea2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.autoHeight && this.props.value !== prevProps.value) {
      this._resizeTextArea(this.props.value);
    }
  };
  TextArea2.prototype._getMinMaxHeight = function _getMinMaxHeight(_ref, value) {
    var minRows = _ref.minRows, maxRows = _ref.maxRows;
    var node = ReactDOM.findDOMNode(this.helpRef);
    if (!node) {
      return {};
    }
    node.setAttribute("rows", minRows);
    var minHeight = node.clientHeight;
    node.setAttribute("rows", maxRows);
    var maxHeight = node.clientHeight;
    node.setAttribute("rows", "1");
    var height = this._getHeight(value);
    return {
      minHeight,
      maxHeight,
      height,
      overflowY: height <= maxHeight ? "hidden" : void 0
    };
  };
  TextArea2.prototype._getHeight = function _getHeight(value) {
    var node = ReactDOM.findDOMNode(this.helpRef);
    if (!node) {
      return 0;
    }
    node.value = value;
    return node.scrollHeight;
  };
  TextArea2.prototype.ieHack = function ieHack(value) {
    if (env.ieVersion === 9 && this.props.maxLength) {
      var maxLength = parseInt(this.props.maxLength);
      var len = this.getValueLength(value, true);
      if (len > maxLength && this.props.cutString) {
        value = value.replace(/\n/g, "\n\n");
        value = value.substr(0, maxLength);
        value = value.replace(/\n\n/g, "\n");
      }
    }
    this.props.autoHeight && this._resizeTextArea(value);
    return value;
  };
  TextArea2.prototype.getValueLength = function getValueLength(value) {
    var _props = this.props, maxLength = _props.maxLength, cutString = _props.cutString;
    var nv = "" + value;
    var strLen = this.props.getValueLength(nv);
    if (typeof strLen !== "number") {
      strLen = nv.length;
    }
    if (env.ieVersion || isMacSafari) {
      strLen = strLen + nv.split("\n").length - 1;
      if (strLen > maxLength && cutString) {
        strLen = maxLength;
      }
    }
    return strLen;
  };
  TextArea2.prototype.saveTextAreaRef = function saveTextAreaRef(textArea) {
    this.inputRef = textArea;
  };
  TextArea2.prototype.saveHelpRef = function saveHelpRef(ref) {
    this.helpRef = ref;
  };
  TextArea2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props2 = this.props, rows = _props2.rows, style = _props2.style, className = _props2.className, autoHeight = _props2.autoHeight, isPreview = _props2.isPreview, renderPreview = _props2.renderPreview, prefix = _props2.prefix, rtl = _props2.rtl, hasBorder = _props2.hasBorder, size = _props2.size;
    var cls = classnames(this.getClass(), (_classNames = {}, _classNames["" + prefix + size] = size === "large" || false, _classNames[prefix + "input-textarea"] = true, _classNames[prefix + "noborder"] = !hasBorder, _classNames[className] = !!className, _classNames));
    var props = this.getProps();
    var dataProps = obj.pickAttrsWith(this.props, "data-");
    var others = obj.pickOthers(_extends({}, dataProps, TextArea2.propTypes), this.props);
    var textareStyle = _extends({}, props.style, {
      height: this.state.height,
      minHeight: this.state.minHeight,
      maxHeight: this.state.maxHeight,
      overflowY: this.state.overflowY
    });
    var previewCls = classnames((_classNames2 = {}, _classNames2[prefix + "input-textarea"] = true, _classNames2[prefix + "form-preview"] = true, _classNames2[className] = !!className, _classNames2));
    var wrapStyle = autoHeight ? _extends({}, style, {position: "relative"}) : style;
    if (isPreview) {
      var value = props.value;
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview(value, this.props));
      }
      return React.createElement("div", _extends({}, others, {className: previewCls}), value.split("\n").map(function(data, i) {
        return React.createElement("p", {key: "p-" + i}, data);
      }));
    }
    return React.createElement("span", _extends({className: cls, style: wrapStyle, dir: rtl ? "rtl" : void 0}, dataProps), React.createElement("textarea", _extends({}, others, props, {
      "data-real": true,
      rows,
      style: textareStyle,
      ref: this.saveRef.bind(this),
      onKeyDown: this.onKeyDown.bind(this)
    })), autoHeight ? React.createElement("textarea", {
      "data-fake": true,
      ref: this.saveHelpRef.bind(this),
      style: _extends({}, props.style, hiddenStyle),
      rows: "1"
    }) : null, this.renderControl());
  };
  return TextArea2;
}(Base$1), _class$4.getDerivedStateFromProps = Base$1.getDerivedStateFromProps, _class$4.propTypes = _extends({}, Base$1.propTypes, {
  hasBorder: propTypes.bool,
  state: propTypes.oneOf(["error", "warning"]),
  autoHeight: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  rows: propTypes.number,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}), _class$4.defaultProps = _extends({}, Base$1.defaultProps, {
  hasBorder: true,
  isPreview: false,
  rows: 4,
  autoHeight: false
}), _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this._resizeTextArea = function(value) {
    if (_this2.nextFrameActionId) {
      clearNextFrameAction(_this2.nextFrameActionId);
    }
    _this2.nextFrameActionId = onNextFrame(function() {
      var height = _this2._getHeight(value);
      var maxHeight = _this2.state.maxHeight ? _this2.state.maxHeight : Infinity;
      _this2.setState({
        height: _this2._getHeight(value),
        overflowY: height <= maxHeight ? "hidden" : void 0
      });
    });
  };
}, _temp$2);
Input.Password = NextConfigProvider.config(Password, {
  exportNames: ["getInputNode", "focus"]
});
Input.TextArea = NextConfigProvider.config(TextArea, {
  exportNames: ["getInputNode", "focus"]
});
Input.Group = Group$1;
var NextInput = NextConfigProvider.config(Input, {
  exportNames: ["getInputNode", "focus"]
});
export {NextInput as N};

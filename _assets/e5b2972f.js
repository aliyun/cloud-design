import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, e as _extends, d as classnames, R as React, p as propTypes, g as _objectWithoutProperties} from "./index.eccaf1a0.js";
import {N as NextField} from "./1c1f7aaf.js";
import {f as func, o as obj} from "./32fed6c0.js";
import {N as NextConfigProvider} from "./7ba79dc5.js";
import {N as NextButton} from "./4e183b3c.js";
import {N as NextResponsiveGrid} from "./d22a0cc1.js";
import {G as Grid} from "./1fa31a40.js";
var _class, _temp;
function pickerDefined(obj2) {
  var newObj = {};
  Object.keys(obj2).forEach(function(i) {
    if (typeof obj2[i] !== "undefined") {
      newObj[i] = obj2[i];
    }
  });
  return newObj;
}
function preventDefault(e) {
  e.preventDefault();
}
var getNewChildren = function getNewChildren2(children, props) {
  var size = props.size, device = props.device, labelAlign = props.labelAlign, labelTextAlign = props.labelTextAlign, labelCol = props.labelCol, wrapperCol = props.wrapperCol, responsive = props.responsive;
  return React.Children.map(children, function(child) {
    if (obj.isReactFragment(child)) {
      return getNewChildren2(child.props.children, props);
    }
    if (child && typeof child.type === "function" && child.type._typeMark === "form_item") {
      var childrenProps = {
        labelCol: child.props.labelCol ? child.props.labelCol : labelCol,
        wrapperCol: child.props.wrapperCol ? child.props.wrapperCol : wrapperCol,
        labelAlign: child.props.labelAlign ? child.props.labelAlign : device === "phone" ? "top" : labelAlign,
        labelTextAlign: child.props.labelTextAlign ? child.props.labelTextAlign : labelTextAlign,
        size: child.props.size ? child.props.size : size,
        responsive
      };
      return React.cloneElement(child, pickerDefined(childrenProps));
    }
    return child;
  });
};
var Form = (_temp = _class = function(_React$Component) {
  _inherits(Form2, _React$Component);
  function Form2(props) {
    _classCallCheck(this, Form2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _this.onChange = function(name, value) {
      _this.props.onChange(_this._formField.getValues(), {
        name,
        value,
        field: _this._formField
      });
    };
    _this._formField = null;
    if (props.field !== false) {
      var options = _extends({}, props.fieldOptions, {
        onChange: _this.onChange
      });
      if (props.field) {
        _this._formField = props.field;
        var onChange = _this._formField.options.onChange;
        options.onChange = func.makeChain(onChange, _this.onChange);
        _this._formField.setOptions && _this._formField.setOptions(options);
      } else {
        if ("value" in props) {
          options.values = props.value;
        }
        _this._formField = new NextField(_this, options);
      }
      props.saveField(_this._formField);
    }
    return _this;
  }
  Form2.prototype.getChildContext = function getChildContext() {
    return {
      _formField: this.props.field ? this.props.field : this._formField,
      _formSize: this.props.size,
      _formPreview: this.props.isPreview,
      _formFullWidth: this.props.fullWidth,
      _formLabelForErrorMessage: this.props.useLabelForErrorMessage
    };
  };
  Form2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (this._formField) {
      if ("value" in props && props.value !== prevProps.value) {
        this._formField.setValues(props.value);
      }
      if ("error" in props && props.error !== prevProps.error) {
        this._formField.setValues(props.error);
      }
    }
  };
  Form2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, className = _props.className, inline = _props.inline, size = _props.size, device = _props.device, labelAlign = _props.labelAlign, labelTextAlign = _props.labelTextAlign, onSubmit = _props.onSubmit, children = _props.children, labelCol = _props.labelCol, wrapperCol = _props.wrapperCol, style = _props.style, prefix = _props.prefix, rtl = _props.rtl, isPreview = _props.isPreview, Tag = _props.component, responsive = _props.responsive, gap = _props.gap;
    var formClassName = classnames((_classNames = {}, _classNames[prefix + "form"] = true, _classNames[prefix + "inline"] = inline, _classNames["" + prefix + size] = size, _classNames[prefix + "form-responsive-grid"] = responsive, _classNames[prefix + "form-preview"] = isPreview, _classNames[className] = !!className, _classNames));
    var newChildren = getNewChildren(children, this.props);
    return React.createElement(Tag, _extends({
      role: "grid"
    }, obj.pickOthers(Form2.propTypes, this.props), {
      className: formClassName,
      style,
      dir: rtl ? "rtl" : void 0,
      onSubmit
    }), responsive ? React.createElement(NextResponsiveGrid, {gap}, newChildren) : newChildren);
  };
  return Form2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  inline: propTypes.bool,
  size: propTypes.oneOf(["large", "medium", "small"]),
  fullWidth: propTypes.bool,
  labelAlign: propTypes.oneOf(["top", "left", "inset"]),
  labelTextAlign: propTypes.oneOf(["left", "right"]),
  field: propTypes.any,
  saveField: propTypes.func,
  labelCol: propTypes.object,
  wrapperCol: propTypes.object,
  onSubmit: propTypes.func,
  children: propTypes.any,
  className: propTypes.string,
  style: propTypes.object,
  value: propTypes.object,
  onChange: propTypes.func,
  component: propTypes.oneOfType([propTypes.string, propTypes.func]),
  fieldOptions: propTypes.object,
  rtl: propTypes.bool,
  device: propTypes.oneOf(["phone", "tablet", "desktop"]),
  responsive: propTypes.bool,
  isPreview: propTypes.bool,
  useLabelForErrorMessage: propTypes.bool,
  gap: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number])
}, _class.defaultProps = {
  prefix: "next-",
  onSubmit: preventDefault,
  size: "medium",
  labelAlign: "left",
  onChange: func.noop,
  component: "form",
  saveField: func.noop,
  device: "desktop"
}, _class.childContextTypes = {
  _formField: propTypes.object,
  _formSize: propTypes.string,
  _formPreview: propTypes.bool,
  _formFullWidth: propTypes.bool,
  _formLabelForErrorMessage: propTypes.bool
}, _temp);
Form.displayName = "Form";
var _class$1, _temp2;
var Error = (_temp2 = _class$1 = function(_React$Component) {
  _inherits(Error2, _React$Component);
  function Error2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Error2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.itemRender = function(errors) {
      return errors.length ? errors : null;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Error2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, children = _props.children, name = _props.name, prefix = _props.prefix, style = _props.style, className = _props.className, _field = _props.field, others = _objectWithoutProperties(_props, ["children", "name", "prefix", "style", "className", "field"]);
    if (children && typeof children !== "function") {
      return React.createElement("div", {className: prefix + "form-item-help"}, children);
    }
    var field = this.context._formField || _field;
    if (!field || !name) {
      return null;
    }
    var isSingle = typeof name === "string";
    var names = isSingle ? [name] : name;
    var errorArr = [];
    if (names.length) {
      var errors = field.getErrors(names);
      Object.keys(errors).forEach(function(key) {
        if (errors[key]) {
          errorArr.push(errors[key]);
        }
      });
    }
    var result = null;
    if (typeof children === "function") {
      result = children(errorArr, isSingle ? field.getState(name) : void 0);
    } else {
      result = this.itemRender(errorArr);
    }
    if (!result) {
      return null;
    }
    var cls = classnames((_classNames = {}, _classNames[prefix + "form-item-help"] = true, _classNames[className] = className, _classNames));
    return React.createElement("div", _extends({}, others, {className: cls, style}), result);
  };
  return Error2;
}(React.Component), _class$1.propTypes = {
  name: propTypes.oneOfType([propTypes.string, propTypes.array]),
  field: propTypes.object,
  style: propTypes.object,
  className: propTypes.string,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  prefix: propTypes.string
}, _class$1.defaultProps = {
  prefix: "next-"
}, _class$1.contextTypes = {
  _formField: propTypes.object
}, _class$1._typeMark = "form_error", _temp2);
Error.displayName = "Error";
var Error$1 = NextConfigProvider.config(Error);
function getCfgFromProps(props, type) {
  if (type in props) {
    return props[type];
  }
  return void 0;
}
function getRule(ruleName, props) {
  var _ref;
  return _ref = {}, _ref[ruleName] = props[ruleName], _ref.message = getCfgFromProps(props, ruleName + "Message"), _ref.trigger = getCfgFromProps(props, ruleName + "Trigger"), _ref;
}
function getValueName(props, displayName) {
  if (props.valueName) {
    return props.valueName;
  }
  if (typeof displayName === "string") {
    var componentName = displayName.replace(/Config\(/, "").replace(")", "");
    if (["Switch", "Checkbox", "Radio"].indexOf(componentName) !== -1) {
      return "checked";
    }
  }
  return "value";
}
function getRules(props, labelForErrorMessage) {
  var result = [];
  if (props.required) {
    result.push(getRule("required", props));
  }
  var maxLength = Number(props.maxLength);
  var minLength = Number(props.minLength);
  if (minLength || maxLength) {
    result.push({
      minLength,
      maxLength,
      message: getCfgFromProps(props, "minmaxLengthMessage") || getCfgFromProps(props, "minLengthMessage") || getCfgFromProps(props, "maxLengthMessage"),
      trigger: getCfgFromProps(props, "minmaxLengthTrigger") || getCfgFromProps(props, "minLengthTrigger") || getCfgFromProps(props, "maxLengthTrigger")
    });
  }
  if (props.length) {
    result.push(getRule("length", props));
  }
  if (props.pattern) {
    result.push(getRule("pattern", props));
  }
  if (["number", "tel", "url", "email"].indexOf(props.format) > -1) {
    result.push(getRule("format", props));
  }
  var max = Number(props.max);
  var min = Number(props.min);
  if (max || min) {
    result.push({
      min,
      max,
      message: getCfgFromProps(props, "minmaxMessage") || getCfgFromProps(props, "minMessage") || getCfgFromProps(props, "maxMessage"),
      trigger: getCfgFromProps(props, "minmaxTrigger") || getCfgFromProps(props, "minTrigger") || getCfgFromProps(props, "maxTrigger")
    });
  }
  if (props.validator && typeof props.validator === "function") {
    result.push({
      validator: props.validator,
      trigger: getCfgFromProps(props, "validatorTrigger")
    });
  }
  if (labelForErrorMessage) {
    result.forEach(function(r) {
      r.aliasName = labelForErrorMessage;
    });
  }
  return result;
}
function getFieldInitCfg(props, displayName, labelForErrorMessage) {
  return {
    valueName: getValueName(props, displayName),
    trigger: props.trigger ? props.trigger : "onChange",
    autoValidate: props.autoValidate,
    rules: getRules(props, labelForErrorMessage)
  };
}
var _class$2, _temp$1;
var Row = Grid.Row, Col = Grid.Col;
var Cell = NextResponsiveGrid.Cell;
var isNil = obj.isNil;
var Item = (_temp$1 = _class$2 = function(_React$Component) {
  _inherits(Item2, _React$Component);
  function Item2() {
    _classCallCheck(this, Item2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Item2.prototype.getNames = function getNames() {
    var children = React.Children.toArray(this.props.children);
    return children.filter(function(c) {
      return c.props && ("name" in c.props || "data-meta" in c.props);
    }).map(function(c) {
      return c.props.name || c.props.id;
    });
  };
  Item2.prototype.getHelper = function getHelper() {
    var help = this.props.help;
    var _formField = this.context._formField;
    return React.createElement(Error$1, {name: help === void 0 ? this.getNames() : void 0, field: _formField}, help);
  };
  Item2.prototype.getState = function getState() {
    var validateState = this.props.validateState;
    if (validateState) {
      return validateState;
    }
    if (this.context._formField) {
      var getState2 = this.context._formField.getState;
      var names = this.getNames();
      if (!names.length) {
        return "";
      }
      return getState2(names[0]);
    }
    return void 0;
  };
  Item2.prototype.getSize = function getSize() {
    return this.props.size || this.context._formSize;
  };
  Item2.prototype.getIsPreview = function getIsPreview() {
    return "isPreview" in this.props ? this.props.isPreview : this.context._formPreview;
  };
  Item2.prototype.getFullWidth = function getFullWidth() {
    return isNil(this.props.fullWidth) ? !!this.context._formFullWidth : this.props.fullWidth;
  };
  Item2.prototype.getLabelForErrorMessage = function getLabelForErrorMessage() {
    var label = this.props.label;
    if (!label || typeof label !== "string") {
      return null;
    }
    label = label.replace(":", "").replace("：", "");
    var labelForErrorMessage = "useLabelForErrorMessage" in this.props ? this.props.useLabelForErrorMessage : this.context._formLabelForErrorMessage;
    if (labelForErrorMessage && label) {
      return label;
    }
    return null;
  };
  Item2.prototype.getItemLabel = function getItemLabel() {
    var _classNames;
    var _props = this.props, id = _props.id, required = _props.required, _props$asterisk = _props.asterisk, asterisk = _props$asterisk === void 0 ? required : _props$asterisk, label = _props.label, labelCol = _props.labelCol, wrapperCol = _props.wrapperCol, prefix = _props.prefix, responsive = _props.responsive, labelWidth = _props.labelWidth, labelTextAlign = _props.labelTextAlign;
    var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
    if (!label) {
      return null;
    }
    var ele = React.createElement("label", {htmlFor: id || this.getNames()[0], required: asterisk, key: "label"}, label);
    var cls = classnames((_classNames = {}, _classNames[prefix + "form-item-label"] = true, _classNames[prefix + "left"] = labelTextAlign === "left", _classNames));
    if (responsive && labelWidth && labelAlign !== "top") {
      return React.createElement("div", {className: cls, style: {width: labelWidth}}, ele);
    }
    if ((wrapperCol || labelCol) && labelAlign !== "top") {
      return React.createElement(Col, _extends({}, labelCol, {className: cls}), ele);
    }
    return React.createElement("div", {className: cls}, ele);
  };
  Item2.prototype.getItemWrapper = function getItemWrapper() {
    var _this2 = this;
    var _props2 = this.props, hasFeedback = _props2.hasFeedback, labelCol = _props2.labelCol, wrapperCol = _props2.wrapperCol, children = _props2.children, extra = _props2.extra, prefix = _props2.prefix, renderPreview = _props2.renderPreview;
    var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
    var state = this.getState();
    var isPreview = this.getIsPreview();
    var childrenProps = {
      size: this.getSize()
    };
    if (isPreview) {
      childrenProps.isPreview = true;
    }
    if ("renderPreview" in this.props && typeof renderPreview === "function") {
      childrenProps.renderPreview = renderPreview;
    }
    if (state && (state === "error" || hasFeedback)) {
      childrenProps.state = state;
    }
    if (labelAlign === "inset") {
      childrenProps.label = this.getItemLabel();
    }
    var childrenNode = children;
    if (typeof children === "function" && this.context._formField) {
      childrenNode = children(this.context._formField.getValues());
    }
    var labelForErrorMessage = this.getLabelForErrorMessage();
    var ele = React.Children.map(childrenNode, function(child) {
      if (child && typeof child.type === "function" && child.type._typeMark !== "form_item" && child.type._typeMark !== "form_error") {
        var extraProps = childrenProps;
        if (_this2.context._formField && "name" in child.props && !("data-meta" in child.props)) {
          extraProps = _this2.context._formField.init(child.props.name, _extends({}, getFieldInitCfg(_this2.props, child.type.displayName, labelForErrorMessage), {
            props: _extends({}, child.props, {ref: child.ref})
          }), childrenProps);
        } else {
          extraProps = _extends({}, child.props, extraProps);
        }
        return React.cloneElement(child, extraProps);
      }
      return child;
    });
    var help = this.getHelper();
    if ((wrapperCol || labelCol) && labelAlign !== "top") {
      return React.createElement(Col, _extends({}, wrapperCol, {className: prefix + "form-item-control", key: "item"}), ele, " ", help, " ", extra);
    }
    return React.createElement("div", {className: prefix + "form-item-control"}, ele, " ", help, " ", extra);
  };
  Item2.prototype.getLabelAlign = function getLabelAlign(labelAlign, device) {
    if (device === "phone") {
      return "top";
    }
    return labelAlign;
  };
  Item2.prototype.render = function render() {
    var _classNames2;
    var _props3 = this.props, className = _props3.className, style = _props3.style, prefix = _props3.prefix, wrapperCol = _props3.wrapperCol, labelCol = _props3.labelCol, responsive = _props3.responsive;
    var labelAlign = this.getLabelAlign(this.props.labelAlign, this.props.device);
    var state = this.getState();
    var size = this.getSize();
    var fullWidth = this.getFullWidth();
    var isPreview = this.getIsPreview();
    var itemClassName = classnames((_classNames2 = {}, _classNames2[prefix + "form-item"] = true, _classNames2["" + prefix + labelAlign] = labelAlign, _classNames2["has-" + state] = !!state, _classNames2["" + prefix + size] = !!size, _classNames2[prefix + "form-item-fullwidth"] = fullWidth, _classNames2["" + className] = !!className, _classNames2[prefix + "form-preview"] = isPreview, _classNames2));
    var Tag = responsive ? Cell : (wrapperCol || labelCol) && labelAlign !== "top" ? Row : "div";
    var label = labelAlign === "inset" ? null : this.getItemLabel();
    return React.createElement(Tag, _extends({}, obj.pickOthers(Item2.propTypes, this.props), {className: itemClassName, style}), label, this.getItemWrapper());
  };
  return Item2;
}(React.Component), _class$2.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  label: propTypes.node,
  labelCol: propTypes.object,
  wrapperCol: propTypes.object,
  help: propTypes.node,
  extra: propTypes.node,
  validateState: propTypes.oneOf(["error", "success", "loading", "warning"]),
  hasFeedback: propTypes.bool,
  style: propTypes.object,
  id: propTypes.string,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  size: propTypes.oneOf(["large", "small", "medium"]),
  fullWidth: propTypes.bool,
  labelAlign: propTypes.oneOf(["top", "left", "inset"]),
  labelTextAlign: propTypes.oneOf(["left", "right"]),
  className: propTypes.string,
  required: propTypes.bool,
  asterisk: propTypes.bool,
  requiredMessage: propTypes.string,
  requiredTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  min: propTypes.number,
  max: propTypes.number,
  minmaxMessage: propTypes.string,
  minmaxTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  minLength: propTypes.number,
  maxLength: propTypes.number,
  minmaxLengthMessage: propTypes.string,
  minmaxLengthTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  length: propTypes.number,
  lengthMessage: propTypes.string,
  lengthTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  pattern: propTypes.any,
  patternMessage: propTypes.string,
  patternTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  format: propTypes.oneOf(["number", "email", "url", "tel"]),
  formatMessage: propTypes.string,
  formatTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  validator: propTypes.func,
  validatorTrigger: propTypes.oneOfType([propTypes.string, propTypes.array]),
  autoValidate: propTypes.bool,
  device: propTypes.oneOf(["phone", "tablet", "desktop"]),
  responsive: propTypes.bool,
  colSpan: propTypes.number,
  labelWidth: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  useLabelForErrorMessage: propTypes.bool
}, _class$2.defaultProps = {
  prefix: "next-",
  hasFeedback: false,
  labelWidth: 100
}, _class$2.contextTypes = {
  _formField: propTypes.object,
  _formSize: propTypes.oneOf(["large", "small", "medium"]),
  _formPreview: propTypes.bool,
  _formFullWidth: propTypes.bool,
  _formLabelForErrorMessage: propTypes.bool
}, _class$2._typeMark = "form_item", _temp$1);
Item.displayName = "Item";
var _class$3, _temp2$1;
var Submit = (_temp2$1 = _class$3 = function(_React$Component) {
  _inherits(Submit2, _React$Component);
  function Submit2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Submit2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function() {
      var _this$props = _this.props, onClick = _this$props.onClick, validate = _this$props.validate;
      var field = _this.context._formField || _this.props.field;
      if (!field) {
        onClick();
        return;
      }
      if (validate === true) {
        field.validate(function(errors) {
          onClick(field.getValues(), errors, field);
        });
      } else if (Array.isArray(validate)) {
        field.validate(validate, function(errors) {
          onClick(field.getValues(), errors, field);
        });
      } else {
        onClick(field.getValues(), null, field);
      }
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Submit2.prototype.render = function render() {
    var children = this.props.children;
    return React.createElement(NextButton, _extends({}, obj.pickOthers(Submit2.propTypes, this.props), {
      onClick: this.handleClick
    }), children);
  };
  return Submit2;
}(React.Component), _class$3.propTypes = {
  onClick: propTypes.func,
  validate: propTypes.oneOfType([propTypes.bool, propTypes.array]),
  field: propTypes.object,
  children: propTypes.node
}, _class$3.defaultProps = {
  onClick: func.noop
}, _class$3.contextTypes = {
  _formField: propTypes.object
}, _temp2$1);
Submit.displayName = "Submit";
var _class$4, _temp2$2;
var Reset = (_temp2$2 = _class$4 = function(_React$Component) {
  _inherits(Reset2, _React$Component);
  function Reset2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Reset2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function() {
      var _this$props = _this.props, names = _this$props.names, toDefault = _this$props.toDefault, onClick = _this$props.onClick;
      var field = _this.context._formField || _this.props.field;
      if (!field) {
        onClick();
        return;
      }
      if (toDefault) {
        field.resetToDefault(names);
      } else {
        field.reset(names);
      }
      onClick();
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Reset2.prototype.render = function render() {
    var children = this.props.children;
    return React.createElement(NextButton, _extends({}, obj.pickOthers(Reset2.propTypes, this.props), {
      onClick: this.handleClick
    }), children);
  };
  return Reset2;
}(React.Component), _class$4.propTypes = {
  names: propTypes.array,
  onClick: propTypes.func,
  toDefault: propTypes.bool,
  field: propTypes.object,
  children: propTypes.node
}, _class$4.defaultProps = {
  onClick: func.noop
}, _class$4.contextTypes = {
  _formField: propTypes.object
}, _temp2$2);
Reset.displayName = "Reset";
Form.Item = NextConfigProvider.config(Item, {
  transform: function transform(props, deprecated) {
    if ("validateStatus" in props) {
      deprecated("validateStatus", "validateState", "Form.Item");
      var _props = props, validateStatus = _props.validateStatus, others = _objectWithoutProperties(_props, ["validateStatus"]);
      props = _extends({validateState: validateStatus}, others);
    }
    return props;
  }
});
Form.Submit = Submit;
Form.Reset = Reset;
Form.Error = Error$1;
var NextForm = NextConfigProvider.config(Form, {
  transform: function transform2(props, deprecated) {
    if ("direction" in props) {
      deprecated("direction", "inline", "Form");
      var _props2 = props, direction = _props2.direction, others = _objectWithoutProperties(_props2, ["direction"]);
      if (direction === "hoz") {
        props = _extends({inline: true}, others);
      }
    }
    return props;
  }
});
export {NextForm as N};

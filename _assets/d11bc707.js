import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, e as _extends, g as propTypes, p as polyfill, j as _objectWithoutProperties, d as classnames, w as _createClass, i as _typeof, C as Component} from "./index.2dd166ed.js";
import {f as func, o as obj} from "./2c811738.js";
import {N as NextConfigProvider} from "./399cb00c.js";
import {U as UIState} from "./30c34cb9.js";
function withContext(Radio2) {
  var _class2, _temp2;
  return _temp2 = _class2 = function(_React$Component) {
    _inherits(WrappedComp, _React$Component);
    function WrappedComp() {
      _classCallCheck(this, WrappedComp);
      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }
    WrappedComp.prototype.render = function render() {
      return React.createElement(Radio2, _extends({}, this.props, {context: this.context}));
    };
    return WrappedComp;
  }(React.Component), _class2.displayName = "Radio", _class2.contextTypes = {
    onChange: propTypes.func,
    __group__: propTypes.bool,
    isButton: propTypes.bool,
    selectedValue: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
    disabled: propTypes.bool
  }, _temp2;
}
var _class, _temp;
var makeChain = func.makeChain, noop = func.noop;
var Radio = (_temp = _class = function(_UIState) {
  _inherits(Radio2, _UIState);
  function Radio2(props) {
    _classCallCheck(this, Radio2);
    var _this = _possibleConstructorReturn(this, _UIState.call(this, props));
    var context = props.context;
    var checked = void 0;
    if (context.__group__) {
      checked = context.selectedValue === props.value;
    } else if ("checked" in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    _this.state = {checked};
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  Radio2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var nextContext = nextProps.context;
    if (nextContext.__group__ && "selectedValue" in nextContext) {
      return {
        checked: nextContext.selectedValue === nextProps.value
      };
    } else if ("checked" in nextProps) {
      return {
        checked: nextProps.checked
      };
    }
    return null;
  };
  Radio2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    var shallowEqual = obj.shallowEqual;
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
  };
  Radio2.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.disabled) {
      this.resetUIState();
    }
  };
  Radio2.prototype.onChange = function onChange2(e) {
    var checked = e.target.checked;
    var _props = this.props, context = _props.context, value = _props.value;
    if (context.__group__) {
      context.onChange(value, e);
    } else if (this.state.checked !== checked) {
      if (!("checked" in this.props)) {
        this.setState({
          checked
        });
      }
      this.props.onChange(checked, e);
    }
  };
  Radio2.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3;
    var _props2 = this.props, id = _props2.id, className = _props2.className, children = _props2.children, style = _props2.style, label = _props2.label, onMouseEnter = _props2.onMouseEnter, onMouseLeave = _props2.onMouseLeave, tabIndex = _props2.tabIndex, rtl = _props2.rtl, name = _props2.name, isPreview = _props2.isPreview, renderPreview = _props2.renderPreview, value = _props2.value, context = _props2.context, otherProps = _objectWithoutProperties(_props2, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "tabIndex", "rtl", "name", "isPreview", "renderPreview", "value", "context"]);
    var checked = !!this.state.checked;
    var disabled = this.disabled;
    var isButton = context.isButton;
    var prefix = context.prefix || this.props.prefix;
    var others = obj.pickOthers(Radio2.propTypes, otherProps);
    var othersData = obj.pickAttrsWith(others, "data-");
    if (isPreview) {
      var previewCls = classnames(className, prefix + "form-preview");
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({
          id,
          dir: rtl ? "rtl" : "ltr"
        }, others, {
          className: previewCls
        }), renderPreview(checked, this.props));
      }
      return React.createElement("p", _extends({
        id,
        dir: rtl ? "rtl" : "ltr"
      }, others, {
        className: previewCls
      }), checked && (children || label || value));
    }
    var input = React.createElement("input", _extends({}, obj.pickOthers(othersData, others), {
      name,
      id,
      tabIndex,
      disabled,
      checked,
      type: "radio",
      onChange: this.onChange,
      "aria-checked": checked,
      className: prefix + "radio-input"
    }));
    if (!disabled) {
      input = this.getStateElement(input);
    }
    var cls = classnames((_classnames = {}, _classnames[prefix + "radio"] = true, _classnames.checked = checked, _classnames.disabled = disabled, _classnames[this.getStateClassName()] = true, _classnames));
    var clsInner = classnames((_classnames2 = {}, _classnames2[prefix + "radio-inner"] = true, _classnames2.press = checked, _classnames2.unpress = !checked, _classnames2));
    var clsWrapper = classnames((_classnames3 = {}, _classnames3[prefix + "radio-wrapper"] = true, _classnames3[className] = !!className, _classnames3.checked = checked, _classnames3.disabled = disabled, _classnames3[this.getStateClassName()] = true, _classnames3));
    var childrenCls = prefix + "radio-label";
    var radioComp = !isButton ? React.createElement("span", {className: cls}, React.createElement("span", {className: clsInner}), input) : React.createElement("span", {className: prefix + "radio-single-input"}, input);
    return React.createElement("label", _extends({}, othersData, {
      dir: rtl ? "rtl" : "ltr",
      style,
      "aria-checked": checked,
      "aria-disabled": disabled,
      className: clsWrapper,
      onMouseEnter: disabled ? onMouseEnter : makeChain(this._onUIMouseEnter, onMouseEnter),
      onMouseLeave: disabled ? onMouseLeave : makeChain(this._onUIMouseLeave, onMouseLeave)
    }), radioComp, [children, label].map(function(d, i) {
      return d !== void 0 ? React.createElement("span", {key: i, className: childrenCls}, d) : null;
    }));
  };
  _createClass(Radio2, [{
    key: "disabled",
    get: function get() {
      var props = this.props;
      var context = props.context;
      var disabled = props.disabled || context.__group__ && "disabled" in context && context.disabled;
      return disabled;
    }
  }]);
  return Radio2;
}(UIState), _class.displayName = "Radio", _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  className: propTypes.string,
  id: propTypes.string,
  style: propTypes.object,
  checked: propTypes.bool,
  defaultChecked: propTypes.bool,
  label: propTypes.node,
  onChange: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  disabled: propTypes.bool,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
  name: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}), _class.defaultProps = {
  onChange: noop,
  onMouseLeave: noop,
  onMouseEnter: noop,
  tabIndex: 0,
  prefix: "next-",
  isPreview: false
}, _class.contextTypes = {
  onChange: propTypes.func,
  __group__: propTypes.bool,
  isButton: propTypes.bool,
  selectedValue: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
  disabled: propTypes.bool
}, _temp);
var Radio$1 = NextConfigProvider.config(withContext(polyfill(Radio)));
var _class$1, _temp$1;
var pickOthers = obj.pickOthers;
var RadioGroup = (_temp$1 = _class$1 = function(_Component) {
  _inherits(RadioGroup2, _Component);
  function RadioGroup2(props) {
    _classCallCheck(this, RadioGroup2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    var value = "";
    if ("value" in props) {
      value = props.value;
    } else if ("defaultValue" in props) {
      value = props.defaultValue;
    }
    _this.state = {value};
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  RadioGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if ("value" in props && props.value !== state.value) {
      return {
        value: props.value
      };
    }
    return null;
  };
  RadioGroup2.prototype.getChildContext = function getChildContext() {
    var disabled = this.props.disabled;
    return {
      __group__: true,
      isButton: this.props.shape === "button",
      onChange: this.onChange,
      selectedValue: this.state.value,
      disabled
    };
  };
  RadioGroup2.prototype.onChange = function onChange2(currentValue, e) {
    if (!("value" in this.props)) {
      this.setState({value: currentValue});
    }
    if (currentValue !== this.state.value) {
      this.props.onChange(currentValue, e);
    }
  };
  RadioGroup2.prototype.render = function render() {
    var _this2 = this, _classnames;
    var _props = this.props, rtl = _props.rtl, className = _props.className, disabled = _props.disabled, shape = _props.shape, size = _props.size, style = _props.style, prefix = _props.prefix, itemDirection = _props.itemDirection, component = _props.component, isPreview = _props.isPreview, renderPreview = _props.renderPreview;
    var others = pickOthers(Object.keys(RadioGroup2.propTypes), this.props);
    if (rtl) {
      others.dir = "rtl";
    }
    var children = void 0;
    var previewed = {};
    if (this.props.children) {
      children = React.Children.map(this.props.children, function(child, index) {
        if (!React.isValidElement(child)) {
          return child;
        }
        var checked = _this2.state.value === child.props.value;
        if (checked) {
          previewed.label = child.props.children;
          previewed.value = child.props.value;
        }
        var tabIndex = index === 0 && !_this2.state.value || checked ? 0 : -1;
        var childrtl = child.props.rtl === void 0 ? rtl : child.props.rtl;
        if (child.type && child.type.displayName === "Config(Radio)") {
          return React.cloneElement(child, {
            checked,
            tabIndex,
            rtl: childrtl
          });
        }
        return React.cloneElement(child, {
          checked,
          rtl: childrtl
        });
      });
    } else {
      children = this.props.dataSource.map(function(item, index) {
        var option = item;
        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) !== "object") {
          option = {
            label: item,
            value: item,
            disabled
          };
        }
        var checked = _this2.state.value === option.value;
        if (checked) {
          previewed.label = option.label;
          previewed.value = option.value;
        }
        return React.createElement(Radio$1, {
          key: index,
          tabIndex: index === 0 && !_this2.state.value || checked ? 0 : -1,
          value: option.value,
          checked,
          label: option.label,
          disabled: disabled || option.disabled
        });
      });
    }
    if (isPreview) {
      var previewCls = classnames(className, prefix + "form-preview");
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview(previewed, this.props));
      }
      return React.createElement("p", _extends({}, others, {className: previewCls}), previewed.label);
    }
    var isButtonShape = shape === "button";
    var cls = classnames((_classnames = {}, _classnames[prefix + "radio-group"] = true, _classnames[prefix + "radio-group-" + itemDirection] = !isButtonShape, _classnames[prefix + "radio-button"] = isButtonShape, _classnames[prefix + "radio-button-" + size] = isButtonShape, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));
    var TagName = component;
    return React.createElement(TagName, _extends({}, others, {
      "aria-disabled": disabled,
      role: "radiogroup",
      className: cls,
      style
    }), children);
  };
  return RadioGroup2;
}(Component), _class$1.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
  name: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
  component: propTypes.oneOfType([propTypes.string, propTypes.func]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  shape: propTypes.oneOf(["normal", "button"]),
  size: propTypes.oneOf(["large", "medium", "small"]),
  dataSource: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.arrayOf(propTypes.object)]),
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.element), propTypes.element]),
  itemDirection: propTypes.oneOf(["hoz", "ver"]),
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}), _class$1.defaultProps = {
  dataSource: [],
  size: "medium",
  onChange: function onChange() {
  },
  prefix: "next-",
  component: "div",
  itemDirection: "hoz",
  isPreview: false
}, _class$1.childContextTypes = {
  onChange: propTypes.func,
  __group__: propTypes.bool,
  isButton: propTypes.bool,
  selectedValue: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]),
  disabled: propTypes.bool
}, _temp$1);
RadioGroup.displayName = "RadioGroup";
var RadioGroup$1 = NextConfigProvider.config(polyfill(RadioGroup));
Radio$1.Group = RadioGroup$1;
export {Radio$1 as R};

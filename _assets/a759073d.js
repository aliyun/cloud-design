import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, e as _extends, g as propTypes, p as polyfill, j as _objectWithoutProperties, d as classnames, w as _createClass, i as _typeof, C as Component} from "./index.c7468b78.js";
import {f as func, o as obj} from "./676b8be8.js";
import {N as NextConfigProvider} from "./3bb20657.js";
import {N as NextIcon} from "./75ec77ea.js";
import {U as UIState} from "./dbc8bb3f.js";
function withContext(Checkbox2) {
  var _class2, _temp2;
  return _temp2 = _class2 = function(_React$Component) {
    _inherits(WrappedComp, _React$Component);
    function WrappedComp() {
      _classCallCheck(this, WrappedComp);
      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }
    WrappedComp.prototype.render = function render() {
      return React.createElement(Checkbox2, _extends({}, this.props, {context: this.context}));
    };
    return WrappedComp;
  }(React.Component), _class2.displayName = "Checkbox", _class2.contextTypes = {
    onChange: propTypes.func,
    __group__: propTypes.bool,
    selectedValue: propTypes.array,
    disabled: propTypes.bool,
    prefix: propTypes.string
  }, _temp2;
}
var _class, _temp;
var noop = func.noop;
function isChecked(selectedValue, value) {
  return selectedValue.indexOf(value) > -1;
}
var Checkbox = (_temp = _class = function(_UIState) {
  _inherits(Checkbox2, _UIState);
  function Checkbox2(props) {
    _classCallCheck(this, Checkbox2);
    var _this = _possibleConstructorReturn(this, _UIState.call(this, props));
    var context = props.context;
    var checked = void 0, indeterminate = void 0;
    if ("checked" in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    if ("indeterminate" in props) {
      indeterminate = props.indeterminate;
    } else {
      indeterminate = props.defaultIndeterminate;
    }
    if (context.__group__) {
      checked = isChecked(context.selectedValue, props.value);
    }
    _this.state = {
      checked,
      indeterminate
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  Checkbox2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var nextContext = nextProps.context;
    var state = {};
    if (nextContext.__group__) {
      if ("selectedValue" in nextContext) {
        state.checked = isChecked(nextContext.selectedValue, nextProps.value);
      }
    } else if ("checked" in nextProps) {
      state.checked = nextProps.checked;
    }
    if ("indeterminate" in nextProps) {
      state.indeterminate = nextProps.indeterminate;
    }
    return state;
  };
  Checkbox2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    var shallowEqual = obj.shallowEqual;
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
  };
  Checkbox2.prototype.onChange = function onChange2(e) {
    var _props = this.props, context = _props.context, value = _props.value;
    var checked = e.target.checked;
    if (this.disabled) {
      return;
    }
    if (context.__group__) {
      context.onChange(value, e);
    } else {
      if (!("checked" in this.props)) {
        this.setState({
          checked
        });
      }
      if (!("indeterminate" in this.props)) {
        this.setState({
          indeterminate: false
        });
      }
      this.props.onChange(checked, e);
    }
  };
  Checkbox2.prototype.render = function render() {
    var _classnames, _classnames2;
    var _props2 = this.props, id = _props2.id, className = _props2.className, children = _props2.children, style = _props2.style, label = _props2.label, onMouseEnter = _props2.onMouseEnter, onMouseLeave = _props2.onMouseLeave, rtl = _props2.rtl, isPreview = _props2.isPreview, renderPreview = _props2.renderPreview, context = _props2.context, value = _props2.value, name = _props2.name, otherProps = _objectWithoutProperties(_props2, ["id", "className", "children", "style", "label", "onMouseEnter", "onMouseLeave", "rtl", "isPreview", "renderPreview", "context", "value", "name"]);
    var checked = !!this.state.checked;
    var disabled = this.disabled;
    var indeterminate = !!this.state.indeterminate;
    var prefix = context.prefix || this.props.prefix;
    var others = obj.pickOthers(Checkbox2.propTypes, otherProps);
    var othersData = obj.pickAttrsWith(others, "data-");
    if (otherProps.title) {
      othersData.title = otherProps.title;
    }
    var childInput = React.createElement("input", _extends({}, obj.pickOthers(Checkbox2.propTypes, otherProps), {
      id,
      value,
      name,
      disabled,
      checked,
      type: "checkbox",
      onChange: this.onChange,
      "aria-checked": indeterminate ? "mixed" : checked,
      className: prefix + "checkbox-input"
    }));
    if (!disabled) {
      childInput = this.getStateElement(childInput);
    }
    var cls = classnames((_classnames = {}, _classnames[prefix + "checkbox-wrapper"] = true, _classnames[className] = !!className, _classnames.checked = checked, _classnames.disabled = disabled, _classnames.indeterminate = indeterminate, _classnames[this.getStateClassName()] = true, _classnames));
    var labelCls = prefix + "checkbox-label";
    var type = indeterminate ? "semi-select" : "select";
    if (isPreview) {
      var previewCls = classnames(className, prefix + "form-preview");
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({
          id,
          dir: rtl ? "rtl" : void 0
        }, othersData, {
          className: previewCls
        }), renderPreview(checked, this.props));
      }
      return React.createElement("p", _extends({
        id,
        dir: rtl ? "rtl" : void 0
      }, othersData, {
        className: previewCls
      }), checked && (children || label || this.state.value));
    }
    var iconCls = classnames((_classnames2 = {
      zoomIn: indeterminate
    }, _classnames2[prefix + "checkbox-semi-select-icon"] = indeterminate, _classnames2[prefix + "checkbox-select-icon"] = !indeterminate, _classnames2));
    return React.createElement("label", _extends({}, othersData, {
      className: cls,
      style,
      dir: rtl ? "rtl" : void 0,
      onMouseEnter,
      onMouseLeave
    }), React.createElement("span", {className: prefix + "checkbox"}, React.createElement("span", {className: prefix + "checkbox-inner"}, React.createElement(NextIcon, {type, size: "xs", className: iconCls})), childInput), [label, children].map(function(item, i) {
      return [void 0, null].indexOf(item) === -1 ? React.createElement("span", {key: i, className: labelCls}, item) : null;
    }));
  };
  _createClass(Checkbox2, [{
    key: "disabled",
    get: function get() {
      var props = this.props;
      var context = props.context;
      return props.disabled || "disabled" in context && context.disabled;
    }
  }]);
  return Checkbox2;
}(UIState), _class.displayName = "Checkbox", _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  className: propTypes.string,
  id: propTypes.string,
  style: propTypes.object,
  checked: propTypes.bool,
  defaultChecked: propTypes.bool,
  disabled: propTypes.bool,
  label: propTypes.node,
  indeterminate: propTypes.bool,
  defaultIndeterminate: propTypes.bool,
  onChange: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  name: propTypes.string,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}), _class.defaultProps = {
  defaultChecked: false,
  defaultIndeterminate: false,
  onChange: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  prefix: "next-",
  isPreview: false
}, _temp);
var Checkbox$1 = NextConfigProvider.config(withContext(polyfill(Checkbox)));
var _class$1, _temp$1;
var pickOthers = obj.pickOthers;
var CheckboxGroup = (_temp$1 = _class$1 = function(_Component) {
  _inherits(CheckboxGroup2, _Component);
  function CheckboxGroup2(props) {
    _classCallCheck(this, CheckboxGroup2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    var value = [];
    if ("value" in props) {
      value = props.value;
    } else if ("defaultValue" in props) {
      value = props.defaultValue;
    }
    if (!Array.isArray(value)) {
      if (value === null || value === void 0) {
        value = [];
      } else {
        value = [value];
      }
    }
    _this.state = {
      value: [].concat(value)
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  CheckboxGroup2.prototype.getChildContext = function getChildContext() {
    return {
      __group__: true,
      onChange: this.onChange,
      selectedValue: this.state.value,
      disabled: this.props.disabled
    };
  };
  CheckboxGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if ("value" in nextProps) {
      var value = nextProps.value;
      if (!Array.isArray(value)) {
        if (value === null || value === void 0) {
          value = [];
        } else {
          value = [value];
        }
      }
      return {value};
    }
    return null;
  };
  CheckboxGroup2.prototype.onChange = function onChange2(currentValue, e) {
    var value = this.state.value;
    var index = value.indexOf(currentValue);
    var valTemp = [].concat(value);
    if (index === -1) {
      valTemp.push(currentValue);
    } else {
      valTemp.splice(index, 1);
    }
    if (!("value" in this.props)) {
      this.setState({value: valTemp});
    }
    this.props.onChange(valTemp, e);
  };
  CheckboxGroup2.prototype.render = function render() {
    var _this2 = this, _classnames;
    var _props = this.props, className = _props.className, style = _props.style, prefix = _props.prefix, disabled = _props.disabled, itemDirection = _props.itemDirection, rtl = _props.rtl, isPreview = _props.isPreview, renderPreview = _props.renderPreview;
    var others = pickOthers(CheckboxGroup2.propTypes, this.props);
    var children = void 0;
    var previewed = [];
    if (this.props.children) {
      children = React.Children.map(this.props.children, function(child) {
        if (!React.isValidElement(child)) {
          return child;
        }
        var checked = _this2.state.value && _this2.state.value.indexOf(child.props.value) > -1;
        if (checked) {
          previewed.push({
            label: child.props.children,
            value: child.props.value
          });
        }
        return React.cloneElement(child, child.props.rtl === void 0 ? {rtl} : null);
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
        var checked = _this2.state.value && _this2.state.value.indexOf(option.value) > -1;
        if (checked) {
          previewed.push({
            label: option.label,
            value: option.value
          });
        }
        return React.createElement(Checkbox$1, {
          key: index,
          value: option.value,
          checked,
          rtl,
          disabled: disabled || option.disabled,
          label: option.label
        });
      });
    }
    if (isPreview) {
      var previewCls = classnames(className, prefix + "form-preview");
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({}, others, {
          dir: rtl ? "rtl" : void 0,
          className: previewCls
        }), renderPreview(previewed, this.props));
      }
      return React.createElement("p", _extends({}, others, {
        dir: rtl ? "rtl" : void 0,
        className: previewCls
      }), previewed.map(function(item) {
        return item.label;
      }).join(", "));
    }
    var cls = classnames((_classnames = {}, _classnames[prefix + "checkbox-group"] = true, _classnames[prefix + "checkbox-group-" + itemDirection] = true, _classnames[className] = !!className, _classnames.disabled = disabled, _classnames));
    return React.createElement("span", _extends({
      dir: rtl ? "rtl" : void 0
    }, others, {
      className: cls,
      style
    }), children);
  };
  return CheckboxGroup2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  disabled: propTypes.bool,
  dataSource: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.arrayOf(propTypes.object)]),
  value: propTypes.oneOfType([propTypes.array, propTypes.string, propTypes.number]),
  defaultValue: propTypes.oneOfType([propTypes.array, propTypes.string, propTypes.number]),
  children: propTypes.arrayOf(propTypes.element),
  onChange: propTypes.func,
  itemDirection: propTypes.oneOf(["hoz", "ver"]),
  isPreview: propTypes.bool,
  renderPreview: propTypes.func
}, _class$1.defaultProps = {
  dataSource: [],
  onChange: function onChange() {
  },
  prefix: "next-",
  itemDirection: "hoz",
  isPreview: false
}, _class$1.childContextTypes = {
  onChange: propTypes.func,
  __group__: propTypes.bool,
  selectedValue: propTypes.array,
  disabled: propTypes.bool
}, _temp$1);
CheckboxGroup.displayName = "CheckboxGroup";
var Group = NextConfigProvider.config(polyfill(CheckboxGroup));
Checkbox$1.Group = Group;
export {Checkbox$1 as C};

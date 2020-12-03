import {a as NextConfigProvider, g as polyfill, _ as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, K as KEYCODE, m as _objectWithoutProperties, e as classnames, R as React, f as _extends, p as propTypes, z as zhCN} from "./index.b00c2d31.js";
var _class, _temp;
var Switch = (_temp = _class = function(_React$Component) {
  _inherits(Switch2, _React$Component);
  function Switch2(props, context) {
    _classCallCheck(this, Switch2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    var checked = props.checked || props.defaultChecked;
    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.state = {
      checked
    };
    return _this;
  }
  Switch2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if ("checked" in props && props.checked !== state.checked) {
      return {
        checked: !!props.checked
      };
    }
    return null;
  };
  Switch2.prototype.onChange = function onChange2(ev) {
    var checked = !this.state.checked;
    if (!("checked" in this.props)) {
      this.setState({
        checked
      });
    }
    this.props.onChange(checked, ev);
    this.props.onClick && this.props.onClick(ev);
  };
  Switch2.prototype.onKeyDown = function onKeyDown(e) {
    if (e.keyCode === KEYCODE.ENTER || e.keyCode === KEYCODE.SPACE) {
      this.onChange(e);
    }
    this.props.onKeyDown && this.props.onKeyDown(e);
  };
  Switch2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, disabled = _props.disabled, readOnly = _props.readOnly, size = _props.size, checkedChildren = _props.checkedChildren, unCheckedChildren = _props.unCheckedChildren, rtl = _props.rtl, isPreview = _props.isPreview, renderPreview = _props.renderPreview, locale = _props.locale, others = _objectWithoutProperties(_props, ["prefix", "className", "disabled", "readOnly", "size", "checkedChildren", "unCheckedChildren", "rtl", "isPreview", "renderPreview", "locale"]);
    var checked = this.state.checked;
    var status = checked ? "on" : "off";
    var children = checked ? checkedChildren : unCheckedChildren;
    var _size = size;
    if (_size !== "small" && _size !== "medium") {
      _size = "medium";
    }
    var classes = classnames((_classNames = {}, _classNames[prefix + "switch"] = true, _classNames[prefix + "switch-" + status] = true, _classNames[prefix + "switch-" + _size] = true, _classNames[className] = className, _classNames));
    var attrs = void 0;
    var isDisabled = disabled || readOnly;
    if (!isDisabled) {
      attrs = {
        onClick: this.onChange,
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        disabled: false
      };
    } else {
      attrs = {
        disabled: true
      };
    }
    if (isPreview) {
      var _classNames2;
      var previewCls = classnames(className, (_classNames2 = {}, _classNames2[prefix + "form-preview"] = true, _classNames2));
      if ("renderPreview" in this.props) {
        return React.createElement("div", _extends({className: previewCls}, others), renderPreview(checked, this.props));
      }
      return React.createElement("p", _extends({className: previewCls}, others), children || locale[status]);
    }
    return React.createElement("div", _extends({
      role: "switch",
      dir: rtl ? "rtl" : void 0,
      tabIndex: "0"
    }, others, {
      className: classes
    }, attrs, {
      "aria-checked": checked
    }), React.createElement("div", {className: prefix + "switch-children"}, children));
  };
  return Switch2;
}(React.Component), _class.contextTypes = {
  prefix: propTypes.string
}, _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  pure: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  checkedChildren: propTypes.any,
  unCheckedChildren: propTypes.any,
  onChange: propTypes.func,
  checked: propTypes.bool,
  defaultChecked: propTypes.bool,
  disabled: propTypes.bool,
  size: propTypes.oneOf(["medium", "small"]),
  onClick: propTypes.func,
  onKeyDown: propTypes.func,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  locale: propTypes.object
}, _class.defaultProps = {
  prefix: "next-",
  size: "medium",
  disabled: false,
  defaultChecked: false,
  isPreview: false,
  readOnly: false,
  onChange: function onChange() {
  },
  locale: zhCN.Switch
}, _temp);
Switch.displayName = "Switch";
var NextSwitch = NextConfigProvider.config(polyfill(Switch));
export {NextSwitch as N};

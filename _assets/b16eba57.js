import {_ as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, j as _objectWithoutProperties, k as isValidElement, R as React, e as classnames, l as Children, m as _typeof, n as log, f as _extends, o as obj, C as Component, a as NextConfigProvider, p as propTypes} from "./index.fc1c4ecb.js";
var _class, _temp2;
function mapIconSize(size) {
  return {
    large: "small",
    medium: "xs",
    small: "xs"
  }[size];
}
var Button = (_temp2 = _class = function(_Component) {
  _inherits(Button2, _Component);
  function Button2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Button2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onMouseUp = function(e) {
      _this.button.blur();
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(e);
      }
    }, _this.buttonRefHandler = function(button) {
      _this.button = button;
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Button2.prototype.render = function render() {
    var _btnClsObj;
    var _props = this.props, prefix = _props.prefix, className = _props.className, type = _props.type, size = _props.size, htmlType = _props.htmlType, loading = _props.loading, text = _props.text, warning = _props.warning, ghost = _props.ghost, component = _props.component, iconSize = _props.iconSize, icons = _props.icons, disabled = _props.disabled, onClick2 = _props.onClick, children = _props.children, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "className", "type", "size", "htmlType", "loading", "text", "warning", "ghost", "component", "iconSize", "icons", "disabled", "onClick", "children", "rtl"]);
    var ghostType = ["light", "dark"].indexOf(ghost) >= 0 ? ghost : "dark";
    var btnClsObj = (_btnClsObj = {}, _btnClsObj[prefix + "btn"] = true, _btnClsObj["" + prefix + size] = size, _btnClsObj[prefix + "btn-" + type] = type && !ghost, _btnClsObj[prefix + "btn-text"] = text, _btnClsObj[prefix + "btn-warning"] = warning, _btnClsObj[prefix + "btn-loading"] = loading, _btnClsObj[prefix + "btn-ghost"] = ghost, _btnClsObj[prefix + "btn-" + ghostType] = ghost, _btnClsObj[className] = className, _btnClsObj);
    var loadingIcon = null;
    if (icons && icons.loading && isValidElement(icons.loading)) {
      var _classNames;
      if (loading) {
        delete btnClsObj[prefix + "btn-loading"];
        btnClsObj[prefix + "btn-custom-loading"] = true;
      }
      var loadingSize = iconSize || mapIconSize(size);
      loadingIcon = React.cloneElement(icons.loading, {
        className: classnames((_classNames = {}, _classNames[prefix + "btn-custom-loading-icon"] = true, _classNames.show = loading, _classNames)),
        size: loadingSize
      });
    }
    var count = Children.count(children);
    var clonedChildren = Children.map(children, function(child, index) {
      if (child && ["function", "object"].indexOf(_typeof(child.type)) > -1 && child.type._typeMark === "icon") {
        var _classNames2;
        var iconCls = classnames((_classNames2 = {}, _classNames2[prefix + "btn-icon"] = !iconSize, _classNames2[prefix + "icon-first"] = count > 1 && index === 0, _classNames2[prefix + "icon-last"] = count > 1 && index === count - 1, _classNames2[prefix + "icon-alone"] = count === 1, _classNames2[child.props.className] = !!child.props.className, _classNames2));
        if ("size" in child.props) {
          log.warning('The size of Icon will not take effect, when Icon is the [direct child element] of Button(<Button><Icon size="' + child.props.size + '" /></Button>), use <Button iconSize="' + child.props.size + '"> or <Button><div><Icon size="' + child.props.size + '" /></div></Button> instead of.');
        }
        return React.cloneElement(child, {
          className: iconCls,
          size: iconSize || mapIconSize(size)
        });
      }
      if (!isValidElement(child)) {
        return React.createElement("span", {className: prefix + "btn-helper"}, child);
      }
      return child;
    });
    var TagName = component;
    var tagAttrs = _extends({}, obj.pickOthers(Object.keys(Button2.propTypes), others), {
      type: htmlType,
      disabled,
      onClick: onClick2,
      className: classnames(btnClsObj)
    });
    if (TagName !== "button") {
      delete tagAttrs.type;
      if (tagAttrs.disabled) {
        delete tagAttrs.onClick;
        tagAttrs.href && delete tagAttrs.href;
      }
    }
    return React.createElement(TagName, _extends({}, tagAttrs, {dir: rtl ? "rtl" : void 0, onMouseUp: this.onMouseUp, ref: this.buttonRefHandler}), loadingIcon, clonedChildren);
  };
  return Button2;
}(Component), _class.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  type: propTypes.oneOf(["primary", "secondary", "normal"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  icons: propTypes.shape({
    loading: propTypes.node
  }),
  iconSize: propTypes.oneOfType([propTypes.oneOf(["xxs", "xs", "small", "medium", "large", "xl", "xxl", "xxxl", "inherit"]), propTypes.number]),
  htmlType: propTypes.oneOf(["submit", "reset", "button"]),
  component: propTypes.oneOf(["button", "a", "div", "span"]),
  loading: propTypes.bool,
  ghost: propTypes.oneOf([true, false, "light", "dark"]),
  text: propTypes.bool,
  warning: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  onMouseUp: propTypes.func,
  children: propTypes.node
}), _class.defaultProps = {
  prefix: "next-",
  type: "normal",
  size: "medium",
  icons: {},
  htmlType: "button",
  component: "button",
  loading: false,
  ghost: false,
  text: false,
  warning: false,
  disabled: false,
  onClick: function onClick() {
  }
}, _temp2);
Button.displayName = "Button";
var _class$1, _temp;
var ButtonGroup = (_temp = _class$1 = function(_Component) {
  _inherits(ButtonGroup2, _Component);
  function ButtonGroup2() {
    _classCallCheck(this, ButtonGroup2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  ButtonGroup2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, size = _props.size, children = _props.children, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "className", "size", "children", "rtl"]);
    var groupCls = classnames((_classNames = {}, _classNames[prefix + "btn-group"] = true, _classNames[className] = className, _classNames));
    var cloneChildren = Children.map(children, function(child) {
      if (child) {
        return React.cloneElement(child, {
          size
        });
      }
    });
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement("div", _extends({}, others, {className: groupCls}), cloneChildren);
  };
  return ButtonGroup2;
}(Component), _class$1.propTypes = _extends({}, NextConfigProvider.propTypes, {
  rtl: propTypes.bool,
  prefix: propTypes.string,
  size: propTypes.string,
  className: propTypes.string,
  children: propTypes.node
}), _class$1.defaultProps = {
  prefix: "next-",
  size: "medium"
}, _temp);
ButtonGroup.displayName = "ButtonGroup";
var ButtonGroup$1 = NextConfigProvider.config(ButtonGroup);
Button.Group = ButtonGroup$1;
var NextButton = NextConfigProvider.config(Button, {
  transform: function transform(props, deprecated) {
    if ("shape" in props) {
      deprecated("shape", "text | warning | ghost", "Button");
      var _props = props, shape = _props.shape, type = _props.type, others = _objectWithoutProperties(_props, ["shape", "type"]);
      var newType = type;
      if (type === "light" || type === "dark" || type === "secondary" && shape === "warning") {
        newType = "normal";
      }
      var ghost = void 0;
      if (shape === "ghost") {
        ghost = {
          primary: "dark",
          secondary: "dark",
          normal: "light",
          dark: "dark",
          light: "light"
        }[type || Button.defaultProps.type];
      }
      var text = shape === "text";
      var warning = shape === "warning";
      props = _extends({type: newType, ghost, text, warning}, others);
    }
    return props;
  }
});
export {NextButton as N};

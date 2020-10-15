import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, e as _extends, j as _objectWithoutProperties, d as classnames, C as Component, g as propTypes, p as polyfill} from "./index.c7468b78.js";
import {f as func, K as KEYCODE, s as support, o as obj, l as log} from "./676b8be8.js";
import {N as NextConfigProvider, z as zhCN} from "./3bb20657.js";
import {A as Animate} from "./0591e911.js";
import {N as NextIcon} from "./75ec77ea.js";
var _class, _temp;
var noop = func.noop, bindCtx = func.bindCtx;
var PRESET_COLOR_REG = /blue|green|orange|red|turquoise|yellow/;
var Tag = (_temp = _class = function(_Component) {
  _inherits(Tag2, _Component);
  function Tag2(props) {
    _classCallCheck(this, Tag2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.onKeyDown = function(e) {
      var _this$props = _this.props, closable = _this$props.closable, closeArea = _this$props.closeArea, onClick = _this$props.onClick, disabled = _this$props.disabled;
      if (e.keyCode !== KEYCODE.SPACE || disabled) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (closable) {
        _this.handleClose(closeArea);
      } else {
        typeof onClick === "function" && onClick(e);
      }
    };
    _this.state = {
      visible: true
    };
    bindCtx(_this, ["handleBodyClick", "handleTailClick", "handleAnimationInit", "handleAnimationEnd", "renderTailNode"]);
    return _this;
  }
  Tag2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.__destroyed = true;
  };
  Tag2.prototype.handleClose = function handleClose(from) {
    var _this2 = this;
    var _props = this.props, animation = _props.animation, onClose = _props.onClose;
    var hasAnimation = support.animation && animation;
    var result = onClose(from, this.tagNode);
    if (result !== false && !this.__destroyed) {
      this.setState({
        visible: false
      }, function() {
        !hasAnimation && _this2.props.afterClose(_this2.tagNode);
      });
    }
  };
  Tag2.prototype.handleBodyClick = function handleBodyClick(e) {
    var _props2 = this.props, closable = _props2.closable, closeArea = _props2.closeArea, onClick = _props2.onClick;
    if (closable && closeArea === "tag") {
      this.handleClose("tag");
    }
    if (typeof onClick === "function") {
      return onClick(e);
    }
  };
  Tag2.prototype.handleTailClick = function handleTailClick(e) {
    e && e.preventDefault();
    e && e.stopPropagation();
    this.handleClose("tail");
  };
  Tag2.prototype.handleAnimationInit = function handleAnimationInit(node) {
    this.props.afterAppear(node);
  };
  Tag2.prototype.handleAnimationEnd = function handleAnimationEnd(node) {
    this.props.afterClose(node);
  };
  Tag2.prototype.renderAnimatedTag = function renderAnimatedTag(children, animationName) {
    return React.createElement(Animate, {
      animation: animationName,
      afterAppear: this.handleAnimationInit,
      afterLeave: this.handleAnimationEnd
    }, children);
  };
  Tag2.prototype.renderTailNode = function renderTailNode() {
    var _props3 = this.props, prefix = _props3.prefix, closable = _props3.closable, locale = _props3.locale;
    if (!closable) {
      return null;
    }
    return React.createElement("span", {
      className: prefix + "tag-close-btn",
      onClick: this.handleTailClick,
      role: "button",
      "aria-label": locale.delete
    }, React.createElement(NextIcon, {type: "close"}));
  };
  Tag2.prototype.isPresetColor = function isPresetColor() {
    var color = this.props.color;
    if (!color) {
      return false;
    }
    return PRESET_COLOR_REG.test(color);
  };
  Tag2.prototype.getTagStyle = function getTagStyle() {
    var _props4 = this.props, _props4$color = _props4.color, color = _props4$color === void 0 ? "" : _props4$color, style = _props4.style;
    var isPresetColor = this.isPresetColor();
    var customColorStyle = {
      backgroundColor: color,
      borderColor: color,
      color: "#fff"
    };
    return _extends({}, color && !isPresetColor ? customColorStyle : null, style);
  };
  Tag2.prototype.render = function render() {
    var _classNames, _this3 = this;
    var _props5 = this.props, prefix = _props5.prefix, type = _props5.type, size = _props5.size, color = _props5.color, _shape = _props5._shape, closable = _props5.closable, closeArea = _props5.closeArea, className = _props5.className, children = _props5.children, animation = _props5.animation, disabled = _props5.disabled, rtl = _props5.rtl;
    var visible = this.state.visible;
    var isPresetColor = this.isPresetColor();
    var others = obj.pickOthers(Tag2.propTypes, this.props);
    var style = others.style, otherTagProps = _objectWithoutProperties(others, ["style"]);
    var shape = closable ? "closable" : _shape;
    var bodyClazz = classnames([prefix + "tag", prefix + "tag-" + shape, prefix + "tag-" + size], (_classNames = {}, _classNames[prefix + "tag-level-" + type] = !color, _classNames[prefix + "tag-closable"] = closable, _classNames[prefix + "tag-body-pointer"] = closable && closeArea === "tag", _classNames[prefix + "tag-" + color] = color && isPresetColor && type === "primary", _classNames[prefix + "tag-" + color + "-inverse"] = color && isPresetColor && type === "normal", _classNames), className);
    var tailNode = this.renderTailNode();
    var tagNode = !visible ? null : React.createElement("div", _extends({
      className: bodyClazz,
      onClick: this.handleBodyClick,
      onKeyDown: this.onKeyDown,
      tabIndex: disabled ? "" : "0",
      role: "button",
      "aria-disabled": disabled,
      disabled,
      dir: rtl ? "rtl" : void 0,
      ref: function ref(n) {
        return _this3.tagNode = n;
      },
      style: this.getTagStyle()
    }, otherTagProps), React.createElement("span", {className: prefix + "tag-body"}, children), tailNode);
    if (animation && support.animation) {
      return this.renderAnimatedTag(tagNode, prefix + "tag-zoom");
    }
    return tagNode;
  };
  return Tag2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  type: propTypes.oneOf(["normal", "primary"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  color: propTypes.string,
  animation: propTypes.bool,
  closeArea: propTypes.oneOf(["tag", "tail"]),
  closable: propTypes.bool,
  onClose: propTypes.func,
  afterClose: propTypes.func,
  afterAppear: propTypes.func,
  className: propTypes.any,
  children: propTypes.node,
  onClick: propTypes.func,
  _shape: propTypes.oneOf(["default", "closable", "checkable"]),
  disabled: propTypes.bool,
  rtl: propTypes.bool,
  locale: propTypes.object
}, _class.defaultProps = {
  prefix: "next-",
  type: "normal",
  size: "medium",
  closeArea: "tail",
  animation: false,
  onClose: noop,
  afterClose: noop,
  afterAppear: noop,
  onClick: noop,
  _shape: "default",
  disabled: false,
  rtl: false,
  locale: zhCN.Tag
}, _temp);
Tag.displayName = "Tag";
var Tag$1 = NextConfigProvider.config(Tag);
var _class$1, _temp$1;
var Group = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Group2, _Component);
  function Group2() {
    _classCallCheck(this, Group2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Group2.prototype.render = function render() {
    var _props = this.props, className = _props.className, prefix = _props.prefix, children = _props.children, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["className", "prefix", "children", "rtl"]);
    var clazz = classnames((prefix || "next-") + "tag-group", className);
    return React.createElement("div", _extends({className: clazz, dir: rtl ? "rtl" : void 0}, others), children);
  };
  return Group2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  className: propTypes.any,
  children: propTypes.node,
  rtl: propTypes.bool
}, _class$1.defaultProps = {
  prefix: "next-",
  rtl: false
}, _temp$1);
Group.displayName = "Group";
var _class$2, _temp$2;
var noop$1 = func.noop, bindCtx$1 = func.bindCtx;
var Selectable = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Selectable2, _Component);
  function Selectable2(props) {
    _classCallCheck(this, Selectable2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {
      checked: "checked" in props ? props.checked : props.defaultChecked || false
    };
    bindCtx$1(_this, ["handleClick"]);
    return _this;
  }
  Selectable2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.checked !== void 0 && props.checked !== state.checked) {
      return {
        checked: props.checked
      };
    }
    return null;
  };
  Selectable2.prototype.handleClick = function handleClick(e) {
    e && e.preventDefault();
    if (this.props.disabled) {
      return false;
    }
    var checked = this.state.checked;
    this.setState({
      checked: !checked
    });
    this.props.onChange(!checked, e);
  };
  Selectable2.prototype.render = function render() {
    var attrFilterTarget = [
      "checked",
      "defaultChecked",
      "onChange",
      "className",
      "_shape",
      "closable"
    ];
    var others = obj.pickOthers(attrFilterTarget, this.props);
    var isChecked = "checked" in this.props ? this.props.checked : this.state.checked;
    var clazz = classnames(this.props.className, {
      checked: isChecked
    });
    return React.createElement(Tag$1, _extends({}, others, {
      role: "checkbox",
      _shape: "checkable",
      "aria-checked": isChecked,
      className: clazz,
      onClick: this.handleClick
    }));
  };
  return Selectable2;
}(Component), _class$2.propTypes = {
  checked: propTypes.bool,
  defaultChecked: propTypes.bool,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  className: propTypes.any
}, _class$2.defaultProps = {
  onChange: noop$1
}, _temp$2);
Selectable.displayName = "Selectable";
var Selectable$1 = polyfill(Selectable);
var _class$3, _temp$3;
var Closeable = (_temp$3 = _class$3 = function(_Component) {
  _inherits(Closeable2, _Component);
  function Closeable2() {
    _classCallCheck(this, Closeable2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Closeable2.prototype.render = function render() {
    var _props = this.props, disabled = _props.disabled, className = _props.className, closeArea = _props.closeArea, onClose = _props.onClose, afterClose = _props.afterClose, onClick = _props.onClick, type = _props.type, size = _props.size, children = _props.children, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["disabled", "className", "closeArea", "onClose", "afterClose", "onClick", "type", "size", "children", "rtl"]);
    return React.createElement(Tag$1, _extends({}, others, {
      rtl,
      disabled,
      className,
      closeArea,
      onClose,
      afterClose,
      onClick,
      type,
      size,
      closable: true
    }), children);
  };
  return Closeable2;
}(Component), _class$3.propTypes = {
  disabled: propTypes.bool,
  className: propTypes.any,
  closeArea: propTypes.oneOf(["tag", "tail"]),
  onClose: propTypes.func,
  afterClose: propTypes.func,
  onClick: propTypes.func,
  type: propTypes.oneOf(["normal", "primary"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  children: propTypes.any,
  rtl: propTypes.bool
}, _class$3.defaultProps = {
  disabled: false,
  type: "normal"
}, _temp$3);
Closeable.displayName = "Closeable";
var ConfigTag = NextConfigProvider.config(Tag$1, {
  transfrom: function transfrom(props, deprecated) {
    var shape = props.shape, type = props.type;
    if (shape === "selectable") {
      deprecated("shape=selectable", "Tag.Selectable", "Tag");
    }
    if (shape === "deletable") {
      deprecated("shape=deletable", "Tag.Closeable", "Tag");
    }
    if (shape === "link") {
      deprecated("shape=link", '<Tag><a href="x">x</a></Tag>', "Tag");
    }
    if (shape === "readonly" || shape === "interactive") {
      log.warning("Warning: [ shape=" + shape + " ] is deprecated at [ Tag ]");
    }
    if (type === "secondary") {
      log.warning("Warning: [ type=secondary ] is deprecated at [ Tag ]");
    }
    ["count", "marked", "value", "onChange"].forEach(function(key) {
      if (key in props) {
        log.warning("Warning: [ " + key + " ] is deprecated at [ Tag ]");
      }
    });
    if ("selected" in props || "defaultSelected" in props) {
      log.warning("Warning: [ selected|defaultSelected  ] is deprecated at [ Tag ], use [ checked|defaultChecked ] at [ Tag.Selectable ] instead of it");
    }
    if ("closed" in props) {
      log.warning("Warning: [ closed  ] is deprecated at [ Tag ], use [ onClose ] at [ Tag.Closeable ] instead of it");
    }
    if ("onSelect" in props) {
      deprecated("onSelect", "<Tag.Selectable onChange/>", "Tag");
    }
    if ("afterClose" in props) {
      log.warning("Warning: [ afterClose  ] is deprecated at [ Tag ], use [ afterClose ] at [ Tag.Closeable ] instead of it");
    }
    return props;
  }
});
ConfigTag.Group = NextConfigProvider.config(Group);
ConfigTag.Selectable = NextConfigProvider.config(Selectable$1);
ConfigTag.Closable = NextConfigProvider.config(Closeable);
ConfigTag.Closeable = ConfigTag.Closable;
export {ConfigTag as C};

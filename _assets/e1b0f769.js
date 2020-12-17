import {N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, k as _objectWithoutProperties, d as classnames, g as _extends, R as React, y as NextMenu, C as Component, i as propTypes, t as NextIcon, Y as cloneElement, h as hoistNonReactStatics_cjs} from "./index.201274f6.js";
import {N as NextBalloon} from "./91c3007e.js";
var _class, _temp;
var Nav = (_temp = _class = function(_Component) {
  _inherits(Nav2, _Component);
  function Nav2(props) {
    _classCallCheck(this, Nav2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.getMenuRef = _this.getMenuRef.bind(_this);
    return _this;
  }
  Nav2.prototype.getChildContext = function getChildContext() {
    var _props = this.props, prefix = _props.prefix, direction = _props.direction, mode = _props.mode, iconOnly = _props.iconOnly, hasTooltip = _props.hasTooltip, hasArrow = _props.hasArrow;
    var isCollapse = this.context.isCollapse;
    return {
      prefix,
      mode: direction === "hoz" ? "popup" : mode,
      iconOnly: "iconOnly" in this.props ? iconOnly : isCollapse,
      hasTooltip,
      hasArrow
    };
  };
  Nav2.prototype.getMenuRef = function getMenuRef(ref) {
    this.menu = ref;
  };
  Nav2.prototype.render = function render() {
    var _classNames, _classNames2;
    var _props2 = this.props, prefix = _props2.prefix, className = _props2.className, style = _props2.style, children = _props2.children, type = _props2.type, direction = _props2.direction, activeDirection = _props2.activeDirection, mode = _props2.mode, triggerType = _props2.triggerType, inlineIndent = _props2.inlineIndent, openMode = _props2.openMode, popupAlign = _props2.popupAlign, popupClassName = _props2.popupClassName, iconOnly = _props2.iconOnly, hasArrow = _props2.hasArrow, hasTooltip = _props2.hasTooltip, embeddable = _props2.embeddable, _popupProps = _props2.popupProps, rtl = _props2.rtl, others = _objectWithoutProperties(_props2, ["prefix", "className", "style", "children", "type", "direction", "activeDirection", "mode", "triggerType", "inlineIndent", "openMode", "popupAlign", "popupClassName", "iconOnly", "hasArrow", "hasTooltip", "embeddable", "popupProps", "rtl"]);
    var isCollapse = this.context.isCollapse;
    var newIconOnly = "iconOnly" in this.props ? iconOnly : isCollapse;
    var realActiveDirection = activeDirection;
    if (realActiveDirection && (direction === "hoz" && (realActiveDirection === "left" || realActiveDirection === "right") || direction === "ver" && (realActiveDirection === "top" || realActiveDirection === "bottom"))) {
      realActiveDirection = null;
    }
    if (!newIconOnly && realActiveDirection === void 0) {
      realActiveDirection = direction === "hoz" ? "bottom" : type === "line" ? "right" : "left";
    }
    var cls = classnames((_classNames = {}, _classNames[prefix + "nav"] = true, _classNames["" + prefix + type] = type, _classNames[prefix + "active"] = realActiveDirection, _classNames["" + prefix + realActiveDirection] = realActiveDirection, _classNames[prefix + "icon-only"] = newIconOnly, _classNames[prefix + "no-arrow"] = !hasArrow, _classNames[prefix + "nav-embeddable"] = embeddable, _classNames[className] = !!className, _classNames));
    var newStyle = newIconOnly ? _extends({}, style, {width: "58px"}) : style;
    var props = {
      prefix,
      direction,
      openMode,
      triggerType,
      mode: direction === "hoz" ? "popup" : mode,
      popupAlign: direction === "hoz" ? "follow" : popupAlign,
      inlineIndent: newIconOnly ? 0 : inlineIndent,
      hasSelectedIcon: false,
      popupAutoWidth: true,
      selectMode: "single",
      itemClassName: prefix + "nav-item",
      popupClassName: classnames((_classNames2 = {}, _classNames2[cls.replace(prefix + "icon-only", "").replace(prefix + "nav-embeddable", "")] = mode === "popup", _classNames2[prefix + "icon-only"] = newIconOnly && mode === "inline", _classNames2[popupClassName] = !!popupClassName, _classNames2)),
      popupProps: function popupProps(popupItemProps) {
        return _extends({
          offset: direction === "hoz" && popupItemProps.level === 1 ? [0, 2] : [-2, 0]
        }, _popupProps);
      }
    };
    return React.createElement(NextMenu, _extends({
      className: cls,
      style: newStyle
    }, props, others, {
      ref: this.getMenuRef
    }), children);
  };
  return Nav2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  type: propTypes.oneOf(["normal", "primary", "secondary", "line"]),
  direction: propTypes.oneOf(["hoz", "ver"]),
  hozAlign: propTypes.oneOf(["left", "right"]),
  activeDirection: propTypes.oneOf([null, "top", "bottom", "left", "right"]),
  mode: propTypes.oneOf(["inline", "popup"]),
  triggerType: propTypes.oneOf(["click", "hover"]),
  inlineIndent: propTypes.number,
  defaultOpenAll: propTypes.bool,
  openMode: propTypes.oneOf(["single", "multiple"]),
  selectedKeys: propTypes.oneOfType([propTypes.string, propTypes.array]),
  defaultSelectedKeys: propTypes.oneOfType([propTypes.string, propTypes.array]),
  onSelect: propTypes.func,
  popupAlign: propTypes.oneOf(["follow", "outside"]),
  popupClassName: propTypes.string,
  iconOnly: propTypes.bool,
  hasArrow: propTypes.bool,
  hasTooltip: propTypes.bool,
  header: propTypes.node,
  footer: propTypes.node,
  embeddable: propTypes.bool,
  popupProps: propTypes.object
}, _class.defaultProps = {
  prefix: "next-",
  pure: false,
  type: "normal",
  direction: "ver",
  hozAlign: "left",
  mode: "inline",
  triggerType: "click",
  inlineIndent: 20,
  defaultOpenAll: false,
  openMode: "multiple",
  defaultSelectedKeys: [],
  popupAlign: "follow",
  hasTooltip: false,
  embeddable: false,
  hasArrow: true,
  popupProps: {}
}, _class.childContextTypes = {
  prefix: propTypes.string,
  mode: propTypes.string,
  iconOnly: propTypes.bool,
  hasTooltip: propTypes.bool,
  hasArrow: propTypes.bool
}, _class.contextTypes = {
  isCollapse: propTypes.bool
}, _temp);
Nav.displayName = "Nav";
var Nav$1 = NextConfigProvider.config(Nav);
var _class$1, _temp$1;
var Tooltip = NextBalloon.Tooltip;
var Item = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Item2, _Component);
  function Item2() {
    _classCallCheck(this, Item2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Item2.prototype.render = function render() {
    var _context = this.context, prefix = _context.prefix, iconOnly = _context.iconOnly, hasTooltip = _context.hasTooltip;
    var _props = this.props, icon = _props.icon, children = _props.children, others = _objectWithoutProperties(_props, ["icon", "children"]);
    var iconEl = typeof icon === "string" ? React.createElement(NextIcon, {className: prefix + "nav-icon", type: icon}) : icon;
    var title = void 0;
    if (typeof children === "string") {
      title = children;
    }
    var item = React.createElement(NextMenu.Item, _extends({title}, others), iconEl, children);
    if (iconOnly && hasTooltip && others.parentMode !== "popup") {
      return React.createElement(Tooltip, {align: "r", trigger: item}, children);
    }
    return item;
  };
  return Item2;
}(Component), _class$1.menuChildType = "item", _class$1.propTypes = {
  icon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  children: propTypes.node,
  parentMode: propTypes.oneOf(["inline", "popup"])
}, _class$1.contextTypes = {
  prefix: propTypes.string,
  iconOnly: propTypes.bool,
  hasTooltip: propTypes.bool
}, _temp$1);
Item.displayName = "Item";
var _class$2, _temp$2;
var Group = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Group2, _Component);
  function Group2() {
    _classCallCheck(this, Group2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Group2.prototype.render = function render() {
    var _classNames;
    var _context = this.context, prefix = _context.prefix, iconOnly = _context.iconOnly;
    var _props = this.props, className = _props.className, children = _props.children, label = _props.label, others = _objectWithoutProperties(_props, ["className", "children", "label"]);
    var newLabel = label;
    if (iconOnly) {
      newLabel = [React.createElement("span", {key: "label"}, label)];
    }
    var cls = classnames((_classNames = {}, _classNames[prefix + "nav-group-label"] = true, _classNames[className] = !!className, _classNames));
    return React.createElement(NextMenu.Group, _extends({className: cls, label: newLabel}, others), children);
  };
  return Group2;
}(Component), _class$2.menuChildType = "group", _class$2.propTypes = {
  className: propTypes.string,
  label: propTypes.node,
  children: propTypes.node
}, _class$2.contextTypes = {
  prefix: propTypes.string,
  iconOnly: propTypes.bool
}, _temp$2);
Group.displayName = "Group";
var _class$3, _temp$3;
var SubNav = (_temp$3 = _class$3 = function(_Component) {
  _inherits(SubNav2, _Component);
  function SubNav2() {
    _classCallCheck(this, SubNav2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  SubNav2.prototype.render = function render() {
    var _classNames;
    var _context = this.context, prefix = _context.prefix, iconOnly = _context.iconOnly, hasArrow = _context.hasArrow, mode = _context.mode;
    var _props = this.props, className = _props.className, icon = _props.icon, label = _props.label, children = _props.children, level = _props.level, others = _objectWithoutProperties(_props, ["className", "icon", "label", "children", "level"]);
    var cls = classnames((_classNames = {}, _classNames[prefix + "nav-sub-nav-item"] = true, _classNames[className] = !!className, _classNames));
    var iconEl = typeof icon === "string" ? React.createElement(NextIcon, {className: prefix + "nav-icon", type: icon}) : icon;
    if (iconOnly && hasArrow && (mode === "inline" || level === 1 && mode === "popup")) {
      iconEl = React.createElement(NextIcon, {
        className: prefix + "nav-icon-only-arrow",
        type: mode === "popup" ? "arrow-right" : "arrow-down"
      });
    }
    var newLabel = [iconEl ? cloneElement(iconEl, {key: "icon"}) : null, React.createElement("span", {key: "label"}, label)];
    var title = void 0;
    if (typeof label === "string") {
      title = label;
    }
    return React.createElement(NextMenu.SubMenu, _extends({
      className: cls,
      label: newLabel,
      level,
      title
    }, others), children);
  };
  return SubNav2;
}(Component), _class$3.menuChildType = "submenu", _class$3.propTypes = {
  className: propTypes.string,
  icon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  label: propTypes.node,
  selectable: propTypes.bool,
  children: propTypes.node
}, _class$3.defaultProps = {
  selectable: false
}, _class$3.contextTypes = {
  prefix: propTypes.string,
  mode: propTypes.string,
  iconOnly: propTypes.bool,
  hasArrow: propTypes.bool
}, _temp$3);
SubNav.displayName = "SubNav";
var _class$4, _temp$4;
var PopupItem = (_temp$4 = _class$4 = function(_Component) {
  _inherits(PopupItem2, _Component);
  function PopupItem2() {
    _classCallCheck(this, PopupItem2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  PopupItem2.prototype.render = function render() {
    var _classNames;
    var _context = this.context, prefix = _context.prefix, iconOnly = _context.iconOnly, hasArrow = _context.hasArrow;
    var _props = this.props, className = _props.className, icon = _props.icon, label = _props.label, children = _props.children, others = _objectWithoutProperties(_props, ["className", "icon", "label", "children"]);
    var cls = classnames((_classNames = {}, _classNames[prefix + "nav-popup-item"] = true, _classNames[className] = !!className, _classNames));
    var iconEl = typeof icon === "string" ? React.createElement(NextIcon, {className: prefix + "nav-icon", type: icon}) : icon;
    if (iconOnly) {
      if (hasArrow) {
        iconEl = React.createElement(NextIcon, {
          className: prefix + "nav-icon-only-arrow",
          type: "arrow-right"
        });
      }
    }
    var newLabel = [iconEl ? cloneElement(iconEl, {key: "icon"}) : null, React.createElement("span", {key: "label"}, label)];
    return React.createElement(NextMenu.PopupItem, _extends({className: cls, label: newLabel}, others), children);
  };
  return PopupItem2;
}(Component), _class$4.menuChildType = "submenu", _class$4.propTypes = {
  className: propTypes.string,
  icon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  label: propTypes.node,
  children: propTypes.node
}, _class$4.contextTypes = {
  prefix: propTypes.string,
  iconOnly: propTypes.bool,
  hasArrow: propTypes.bool
}, _temp$4);
PopupItem.displayName = "PopupItem";
Nav$1.Item = Item;
Nav$1.Group = Group;
Nav$1.SubNav = SubNav;
Nav$1.PopupItem = PopupItem;
Nav$1.Divider = NextMenu.Divider;
const Nav$2 = ({direction, activeDirection, ...rest}) => {
  if (!activeDirection && direction === "ver") {
    activeDirection = "right";
  }
  return /* @__PURE__ */ React.createElement(Nav$1, {
    direction,
    activeDirection,
    ...rest
  });
};
hoistNonReactStatics_cjs(Nav$2, Nav$1);
const exported = Nav$2;
export {exported as e};

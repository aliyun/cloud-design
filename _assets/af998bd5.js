import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, f as findDOMNode, d as classnames, e as _extends, R as React, C as Component, g as propTypes, l as isValidElement, k as Children, i as _typeof, n as cloneElement, j as _objectWithoutProperties, p as polyfill, t as render, v as unmountComponentAtNode} from "./index.e76f7845.js";
import {f as func, o as obj, K as KEYCODE, d as dom, e as events, h as htmlId} from "./a3f37a66.js";
import {N as NextConfigProvider} from "./33d6cb60.js";
import {A as Animate} from "./cdd517eb.js";
import {N as NextOverlay} from "./482b3bb1.js";
import {N as NextIcon} from "./39b9d0c9.js";
import {C as Checkbox} from "./1ba1a98f.js";
import {R as Radio} from "./3960f8db.js";
var _class, _temp;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var Item = (_temp = _class = function(_Component) {
  _inherits(Item2, _Component);
  function Item2(props) {
    _classCallCheck(this, Item2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    bindCtx(_this, ["handleClick", "handleKeyDown"]);
    return _this;
  }
  Item2.prototype.componentDidMount = function componentDidMount() {
    this.itemNode = findDOMNode(this);
    var _props = this.props, parentMode = _props.parentMode, root = _props.root, menu = _props.menu;
    if (menu) {
      this.menuNode = findDOMNode(menu);
    } else if (parentMode === "popup") {
      this.menuNode = this.itemNode.parentNode;
    } else {
      this.menuNode = findDOMNode(root);
      var _root$props = root.props, prefix = _root$props.prefix, header = _root$props.header, footer = _root$props.footer;
      if (header || footer) {
        this.menuNode = this.menuNode.querySelector("." + prefix + "menu-content");
      }
    }
    this.setFocus();
  };
  Item2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setFocus();
  };
  Item2.prototype.focusable = function focusable() {
    var _props2 = this.props, root = _props2.root, type = _props2.type, disabled = _props2.disabled;
    var focusable2 = root.props.focusable;
    return focusable2 && (type === "submenu" || !disabled);
  };
  Item2.prototype.getFocused = function getFocused() {
    var _props3 = this.props, _key = _props3._key, root = _props3.root;
    var focusedKey = root.state.focusedKey;
    return focusedKey === _key;
  };
  Item2.prototype.setFocus = function setFocus() {
    var focused = this.getFocused();
    if (focused) {
      if (this.focusable()) {
        this.itemNode.focus({preventScroll: true});
      }
      if (this.menuNode && this.menuNode.scrollHeight > this.menuNode.clientHeight) {
        var scrollBottom = this.menuNode.clientHeight + this.menuNode.scrollTop;
        var itemBottom = this.itemNode.offsetTop + this.itemNode.offsetHeight;
        if (itemBottom > scrollBottom) {
          this.menuNode.scrollTop = itemBottom - this.menuNode.clientHeight;
        } else if (this.itemNode.offsetTop < this.menuNode.scrollTop) {
          this.menuNode.scrollTop = this.itemNode.offsetTop;
        }
      }
    }
  };
  Item2.prototype.handleClick = function handleClick(e) {
    e.stopPropagation();
    var _props4 = this.props, _key = _props4._key, root = _props4.root, disabled = _props4.disabled;
    if (!disabled) {
      root.handleItemClick(_key, this, e);
      this.props.onClick && this.props.onClick(e);
    } else {
      e.preventDefault();
    }
  };
  Item2.prototype.handleKeyDown = function handleKeyDown(e) {
    var _props5 = this.props, _key = _props5._key, root = _props5.root, type = _props5.type;
    if (this.focusable()) {
      root.handleItemKeyDown(_key, type, this, e);
      switch (e.keyCode) {
        case KEYCODE.ENTER: {
          if (!(type === "submenu")) {
            this.handleClick(e);
          }
          break;
        }
      }
    }
    this.props.onKeyDown && this.props.onKeyDown(e);
  };
  Item2.prototype.getTitle = function getTitle(children) {
    if (typeof children === "string") {
      return children;
    }
    return;
  };
  Item2.prototype.render = function render2() {
    var _cx;
    var _props6 = this.props, inlineLevel = _props6.inlineLevel, root = _props6.root, replaceClassName = _props6.replaceClassName, groupIndent = _props6.groupIndent, component = _props6.component, disabled = _props6.disabled, className = _props6.className, children = _props6.children, needIndent = _props6.needIndent, parentMode = _props6.parentMode, _key = _props6._key;
    var others = pickOthers(Object.keys(Item2.propTypes), this.props);
    var _root$props2 = root.props, prefix = _root$props2.prefix, focusable = _root$props2.focusable, inlineIndent = _root$props2.inlineIndent, itemClassName = _root$props2.itemClassName, rtl = _root$props2.rtl;
    var focused = this.getFocused();
    var newClassName = replaceClassName ? className : classnames((_cx = {}, _cx[prefix + "menu-item"] = true, _cx[prefix + "disabled"] = disabled, _cx[prefix + "focused"] = !focusable && focused, _cx[itemClassName] = !!itemClassName, _cx[className] = !!className, _cx));
    if (disabled) {
      others["aria-disabled"] = true;
      others["aria-hidden"] = true;
    }
    others.tabIndex = root.state.tabbableKey === _key ? "0" : "-1";
    if (parentMode === "inline" && inlineLevel > 1 && inlineIndent > 0 && needIndent) {
      var _extends2;
      var paddingProp = rtl ? "paddingRight" : "paddingLeft";
      others.style = _extends({}, others.style || {}, (_extends2 = {}, _extends2[paddingProp] = inlineLevel * inlineIndent - (groupIndent || 0) * 0.4 * inlineIndent + "px", _extends2));
    }
    var TagName = component;
    var role = "menuitem";
    if ("selectMode" in root.props) {
      role = "option";
    }
    return React.createElement(TagName, _extends({
      role,
      title: this.getTitle(children)
    }, others, {
      className: newClassName,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown
    }), React.createElement("div", {className: prefix + "menu-item-inner"}, children));
  };
  return Item2;
}(Component), _class.propTypes = {
  _key: propTypes.string,
  level: propTypes.number,
  inlineLevel: propTypes.number,
  groupIndent: propTypes.number,
  root: propTypes.object,
  menu: propTypes.any,
  parent: propTypes.object,
  parentMode: propTypes.oneOf(["inline", "popup"]),
  type: propTypes.oneOf(["submenu", "item"]),
  component: propTypes.string,
  disabled: propTypes.bool,
  className: propTypes.string,
  onClick: propTypes.func,
  onKeyDown: propTypes.func,
  needIndent: propTypes.bool,
  replaceClassName: propTypes.bool
}, _class.defaultProps = {
  component: "li",
  groupIndent: 0,
  replaceClassName: false,
  needIndent: true
}, _temp);
Item.displayName = "Item";
var _class$1, _temp$1;
var bindCtx$1 = func.bindCtx;
var pickOthers$1 = obj.pickOthers;
var SelectableItem = (_temp$1 = _class$1 = function(_Component) {
  _inherits(SelectableItem2, _Component);
  function SelectableItem2(props) {
    _classCallCheck(this, SelectableItem2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    bindCtx$1(_this, ["handleKeyDown", "handleClick"]);
    return _this;
  }
  SelectableItem2.prototype.getSelected = function getSelected() {
    var _props = this.props, _key = _props._key, root = _props.root, selected = _props.selected;
    var selectMode = root.props.selectMode;
    var selectedKeys = root.state.selectedKeys;
    return selected || !!selectMode && selectedKeys.indexOf(_key) > -1;
  };
  SelectableItem2.prototype.handleSelect = function handleSelect(e) {
    var _props2 = this.props, _key = _props2._key, root = _props2.root, onSelect = _props2.onSelect;
    if (onSelect) {
      onSelect(!this.getSelected(), this, e);
    } else {
      root.handleSelect(_key, !this.getSelected(), this);
    }
  };
  SelectableItem2.prototype.handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === KEYCODE.SPACE && !this.props.disabled) {
      this.handleSelect(e);
    }
    this.props.onKeyDown && this.props.onKeyDown(e);
  };
  SelectableItem2.prototype.handleClick = function handleClick(e) {
    this.handleSelect(e);
    this.props.onClick && this.props.onClick(e);
  };
  SelectableItem2.prototype.renderSelectedIcon = function renderSelectedIcon(selected) {
    var _cx;
    var _props3 = this.props, root = _props3.root, inlineIndent = _props3.inlineIndent, needIndent = _props3.needIndent, hasSelectedIcon = _props3.hasSelectedIcon, isSelectIconRight = _props3.isSelectIconRight, type = _props3.type;
    var _root$props = root.props, prefix = _root$props.prefix, rootSelectedIcon = _root$props.hasSelectedIcon, rootSelectIconRight = _root$props.isSelectIconRight, icons = _root$props.icons;
    var iconsSelect = icons.select;
    if (!isValidElement(icons.select) && icons.select) {
      iconsSelect = React.createElement("span", null, icons.select);
    }
    var cls = classnames((_cx = {}, _cx[prefix + "menu-icon-selected"] = true, _cx[prefix + "menu-symbol-icon-selected"] = !iconsSelect, _cx[prefix + "menu-icon-right"] = ("isSelectIconRight" in this.props ? isSelectIconRight : rootSelectIconRight) && type !== "submenu", _cx));
    return ("hasSelectedIcon" in this.props ? hasSelectedIcon : rootSelectedIcon) && selected ? React.cloneElement(iconsSelect || React.createElement(NextIcon, {type: "select"}), {
      style: needIndent && inlineIndent > 0 ? {left: inlineIndent + "px"} : null,
      className: cls
    }) : null;
  };
  SelectableItem2.prototype.render = function render2() {
    var _cx2;
    var _props4 = this.props, _key = _props4._key, root = _props4.root, className = _props4.className, disabled = _props4.disabled, helper = _props4.helper, children = _props4.children, needIndent = _props4.needIndent;
    var prefix = root.props.prefix;
    var others = pickOthers$1(Object.keys(SelectableItem2.propTypes), this.props);
    var selected = this.getSelected();
    var newProps = _extends({
      _key,
      root,
      disabled,
      type: "item",
      className: classnames((_cx2 = {}, _cx2[prefix + "selected"] = selected, _cx2[className] = !!className, _cx2)),
      onKeyDown: this.handleKeyDown,
      onClick: !disabled ? this.handleClick : this.props.onClick,
      needIndent
    }, others);
    if (!("title" in newProps) && typeof children === "string") {
      newProps.title = children;
    }
    var textProps = {};
    if ("selectMode" in root.props) {
      textProps["aria-selected"] = selected;
    }
    return React.createElement(Item, newProps, this.renderSelectedIcon(selected), React.createElement("span", _extends({className: prefix + "menu-item-text"}, textProps), children), helper ? React.createElement("div", {className: prefix + "menu-item-helper"}, helper) : null);
  };
  return SelectableItem2;
}(Component), _class$1.menuChildType = "item", _class$1.propTypes = {
  _key: propTypes.string,
  root: propTypes.object,
  selected: propTypes.bool,
  onSelect: propTypes.func,
  inlineIndent: propTypes.number,
  disabled: propTypes.bool,
  helper: propTypes.node,
  children: propTypes.node,
  className: propTypes.string,
  onKeyDown: propTypes.func,
  onClick: propTypes.func,
  needIndent: propTypes.bool,
  hasSelectedIcon: propTypes.bool,
  isSelectIconRight: propTypes.bool,
  icons: propTypes.object
}, _class$1.defaultProps = {
  disabled: false,
  needIndent: true,
  icons: {}
}, _temp$1);
SelectableItem.displayName = "SelectableItem";
var getWidth = function getWidth2(elem) {
  var width = elem && typeof elem.getBoundingClientRect === "function" && elem.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
};
var normalizeToArray = function normalizeToArray2(items) {
  if (items) {
    if (Array.isArray(items)) {
      return items;
    }
    return [items];
  }
  return [];
};
var isSibling = function isSibling2(currentPos, targetPos) {
  var currentNums = currentPos.split("-").slice(0, -1);
  var targetNums = targetPos.split("-").slice(0, -1);
  return currentNums.length === targetNums.length && currentNums.every(function(num, index) {
    return num === targetNums[index];
  });
};
var isAncestor = function isAncestor2(currentPos, targetPos) {
  var currentNums = currentPos.split("-");
  var targetNums = targetPos.split("-");
  return currentNums.length > targetNums.length && targetNums.every(function(num, index) {
    return num === currentNums[index];
  });
};
var isAvailablePos = function isAvailablePos2(refPos, targetPos, _p2n) {
  var _p2n$targetPos = _p2n[targetPos], type = _p2n$targetPos.type, disabled = _p2n$targetPos.disabled;
  return isSibling(refPos, targetPos) && (type === "item" && !disabled || type === "submenu");
};
var getFirstAvaliablelChildKey = function getFirstAvaliablelChildKey2(parentPos, _p2n) {
  var pos = Object.keys(_p2n).find(function(p) {
    return isAvailablePos(parentPos + "-0", p, _p2n);
  });
  return pos ? _p2n[pos].key : null;
};
var getChildSelected = function getChildSelected2(_ref) {
  var selectMode = _ref.selectMode, selectedKeys = _ref.selectedKeys, _k2n = _ref._k2n, _key = _ref._key;
  if (!_k2n) {
    return false;
  }
  var _keyPos = (_k2n[_key] && _k2n[_key].pos) + "-";
  return !!selectMode && selectedKeys.some(function(key) {
    return _k2n[key] && _k2n[key].pos.indexOf(_keyPos) === 0;
  });
};
var _class$2, _temp$2;
var bindCtx$2 = func.bindCtx;
var setStyle = dom.setStyle;
var Popup = NextOverlay.Popup;
var PopupItem = (_temp$2 = _class$2 = function(_Component) {
  _inherits(PopupItem2, _Component);
  function PopupItem2(props) {
    _classCallCheck(this, PopupItem2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    bindCtx$2(_this, ["handleOpen", "handlePopupOpen", "handlePopupClose", "getPopup"]);
    return _this;
  }
  PopupItem2.prototype.getPopup = function getPopup(ref) {
    this.popup = ref;
  };
  PopupItem2.prototype.getOpen = function getOpen() {
    var _props = this.props, _key = _props._key, root = _props.root;
    var openKeys = root.state.openKeys;
    return openKeys.indexOf(_key) > -1;
  };
  PopupItem2.prototype.getPopupProps = function getPopupProps() {
    var popupProps = this.props.root.props.popupProps;
    if (typeof popupProps === "function") {
      popupProps = popupProps(this.props);
    }
    return popupProps;
  };
  PopupItem2.prototype.handleOpen = function handleOpen(open, triggerType, e) {
    var _props2 = this.props, _key = _props2._key, root = _props2.root;
    root.handleOpen(_key, open, triggerType, e);
    var popupProps = this.popupProps;
    popupProps.onVisibleChange && popupProps.onVisibleChange(open, triggerType, e);
  };
  PopupItem2.prototype.handlePopupOpen = function handlePopupOpen() {
    var _props3 = this.props, root = _props3.root, level = _props3.level, align = _props3.align, autoWidth = _props3.autoWidth;
    var _root$props = root.props, rootPopupAutoWidth = _root$props.popupAutoWidth, rootPopupAlign = _root$props.popupAlign, direction = _root$props.direction;
    var popupAlign = align || rootPopupAlign;
    var popupAutoWidth = "autoWidth" in this.props ? autoWidth : rootPopupAutoWidth;
    try {
      var itemNode = findDOMNode(this);
      var menuNode = itemNode.parentNode;
      this.popupNode = this.popup.getInstance().overlay.getInstance().getContentNode();
      root.popupNodes.push(this.popupNode);
      if (popupAutoWidth) {
        var targetNode = direction === "hoz" && level === 1 ? itemNode : menuNode;
        if (targetNode.offsetWidth > this.popupNode.offsetWidth) {
          setStyle(this.popupNode, "width", targetNode.offsetWidth + "px");
        }
      }
      if (popupAlign === "outside" && !(direction === "hoz" && level === 1)) {
        setStyle(this.popupNode, "height", menuNode.offsetHeight + "px");
        setStyle(this.popupNode, "overflow-y", "scroll");
      }
      var popupProps = this.popupProps;
      popupProps.onOpen && popupProps.onOpen();
    } catch (error) {
      return null;
    }
  };
  PopupItem2.prototype.handlePopupClose = function handlePopupClose() {
    var root = this.props.root;
    var popupNodes = root.popupNodes;
    var index = popupNodes.indexOf(this.popupNode);
    index > -1 && popupNodes.splice(index, 1);
    var popupProps = this.popupProps;
    popupProps.onClose && popupProps.onClose();
  };
  PopupItem2.prototype.renderItem = function renderItem(selectable, children, others) {
    var _cx;
    var _props4 = this.props, _key = _props4._key, root = _props4.root, level = _props4.level, inlineLevel = _props4.inlineLevel, label = _props4.label, className = _props4.className;
    var _root$props2 = root.props, prefix = _root$props2.prefix, selectMode = _root$props2.selectMode;
    var NewItem = selectable ? SelectableItem : Item;
    var open = this.getOpen();
    var _root$state = root.state, selectedKeys = _root$state.selectedKeys, _k2n = _root$state._k2n;
    var isChildSelected = getChildSelected({
      _key,
      _k2n,
      selectMode,
      selectedKeys
    });
    var itemProps = {
      "aria-haspopup": true,
      "aria-expanded": open,
      _key,
      root,
      level,
      inlineLevel,
      type: "submenu"
    };
    itemProps.className = classnames((_cx = {}, _cx[prefix + "opened"] = open, _cx[prefix + "child-selected"] = isChildSelected, _cx[className] = !!className, _cx));
    return React.createElement(NewItem, _extends({}, itemProps, others), React.createElement("span", {className: prefix + "menu-item-text"}, label), children);
  };
  PopupItem2.prototype.renderPopup = function renderPopup(trigger, triggerType, positionProps, children) {
    var _this2 = this;
    var _props5 = this.props, root = _props5.root, level = _props5.level, selectable = _props5.selectable;
    var direction = root.props.direction;
    this.popupProps = this.getPopupProps();
    var open = this.getOpen();
    if (direction === "hoz" && level === 1 && selectable) {
      positionProps.target = function() {
        return findDOMNode(_this2);
      };
    }
    return React.createElement(Popup, _extends({
      ref: this.getPopup
    }, positionProps, this.popupProps, {
      canCloseByEsc: false,
      trigger,
      triggerType,
      visible: open,
      pinFollowBaseElementWhenFixed: true,
      onVisibleChange: this.handleOpen,
      onOpen: this.handlePopupOpen,
      onClose: this.handlePopupClose
    }), children);
  };
  PopupItem2.prototype.render = function render2() {
    var _this3 = this;
    var _props6 = this.props, root = _props6.root, level = _props6.level, hasSubMenu = _props6.hasSubMenu, selectableFromProps = _props6.selectable, children = _props6.children, triggerType = _props6.triggerType, align = _props6.align, noIcon = _props6.noIcon, rtl = _props6.rtl;
    var others = obj.pickOthers(Object.keys(PopupItem2.propTypes), this.props);
    var _root$props3 = root.props, prefix = _root$props3.prefix, selectMode = _root$props3.selectMode, direction = _root$props3.direction, rootPopupAlign = _root$props3.popupAlign, rootTriggerType = _root$props3.triggerType;
    var popupAlign = align || rootPopupAlign;
    var newTriggerType = triggerType || (hasSubMenu ? rootTriggerType : "hover");
    var newChildren = Array.isArray(children) ? children[0] : children;
    var selectable = selectMode && selectableFromProps;
    var triggerIsIcon = selectable && newTriggerType === "click";
    var open = this.getOpen();
    var positionProps = {};
    var arrowProps = void 0;
    if (direction === "hoz" && level === 1) {
      var _cx2;
      positionProps.align = "tl bl";
      positionProps.offset = [0, 0];
      arrowProps = {
        type: "arrow-down",
        className: classnames((_cx2 = {}, _cx2[prefix + "menu-hoz-icon-arrow"] = true, _cx2[prefix + "open"] = open, _cx2))
      };
    } else {
      if (popupAlign === "outside") {
        positionProps.target = function() {
          return findDOMNode(root);
        };
        positionProps.align = "tl tr";
        rtl ? positionProps.offset = [-2, 0] : positionProps.offset = [2, 0];
      } else {
        if (triggerIsIcon) {
          positionProps.target = function() {
            return findDOMNode(_this3);
          };
        }
        positionProps.align = "tl tr";
        rtl ? positionProps.offset = [2, -8] : positionProps.offset = [-2, -8];
      }
      arrowProps = {
        type: "arrow-right",
        className: prefix + "menu-icon-arrow " + prefix + "menu-symbol-popupfold"
      };
    }
    var arrow = React.createElement(NextIcon, arrowProps);
    var trigger = triggerIsIcon ? arrow : this.renderItem(selectable, noIcon ? null : arrow, others);
    var popup = this.renderPopup(trigger, newTriggerType, positionProps, newChildren);
    return triggerIsIcon ? this.renderItem(selectable, popup, others) : popup;
  };
  return PopupItem2;
}(Component), _class$2.menuChildType = "submenu", _class$2.propTypes = {
  _key: propTypes.string,
  root: propTypes.object,
  level: propTypes.number,
  hasSubMenu: propTypes.bool,
  noIcon: propTypes.bool,
  rtl: propTypes.bool,
  selectable: propTypes.bool,
  label: propTypes.node,
  children: propTypes.node,
  className: propTypes.string,
  triggerType: propTypes.oneOf(["click", "hover"]),
  align: propTypes.oneOf(["outside", "follow"]),
  autoWidth: propTypes.bool
}, _class$2.defaultProps = {
  selectable: false,
  noIcon: false
}, _temp$2);
PopupItem.displayName = "PopupItem";
var _class$3, _temp$3;
var Expand = Animate.Expand;
var bindCtx$3 = func.bindCtx;
var SubMenu = (_temp$3 = _class$3 = function(_Component) {
  _inherits(SubMenu2, _Component);
  function SubMenu2(props) {
    _classCallCheck(this, SubMenu2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    bindCtx$3(_this, ["handleMouseEnter", "handleMouseLeave", "handleClick", "handleOpen", "afterLeave"]);
    return _this;
  }
  SubMenu2.prototype.componentDidMount = function componentDidMount() {
    this.itemNode = findDOMNode(this);
  };
  SubMenu2.prototype.afterLeave = function afterLeave() {
    var _props = this.props, focused = _props.focused, root = _props.root;
    var focusable = root.props.focusable;
    if (focusable && focused) {
      this.itemNode.focus();
    }
  };
  SubMenu2.prototype.getOpen = function getOpen() {
    var _props2 = this.props, _key = _props2._key, root = _props2.root;
    var openKeys = root.state.openKeys;
    return openKeys.indexOf(_key) > -1;
  };
  SubMenu2.prototype.handleMouseEnter = function handleMouseEnter(e) {
    this.handleOpen(true);
    this.props.onMouseEnter && this.props.onMouseEnter(e);
  };
  SubMenu2.prototype.handleMouseLeave = function handleMouseLeave(e) {
    this.handleOpen(false);
    this.props.onMouseLeave && this.props.onMouseLeave(e);
  };
  SubMenu2.prototype.handleClick = function handleClick(e) {
    var _props3 = this.props, root = _props3.root, selectable = _props3.selectable;
    var selectMode = root.props.selectMode;
    if (selectMode && selectable) {
      e.stopPropagation();
    }
    var open = this.getOpen();
    this.handleOpen(!open);
  };
  SubMenu2.prototype.handleOpen = function handleOpen(open, triggerType, e) {
    var _props4 = this.props, _key = _props4._key, root = _props4.root;
    root.handleOpen(_key, open, triggerType, e);
  };
  SubMenu2.prototype.passParentToChildren = function passParentToChildren(children) {
    var _this2 = this;
    var _props5 = this.props, mode = _props5.mode, root = _props5.root;
    return Children.map(children, function(child) {
      if (typeof child !== "function" && (typeof child === "undefined" ? "undefined" : _typeof(child)) !== "object") {
        return child;
      }
      return cloneElement(child, {
        parent: _this2,
        parentMode: mode || root.props.mode
      });
    });
  };
  SubMenu2.prototype.renderInline = function renderInline() {
    var _cx, _cx2, _cx3, _cx4;
    var _props6 = this.props, _key = _props6._key, level = _props6.level, inlineLevel = _props6.inlineLevel, root = _props6.root, className = _props6.className, selectableFromProps = _props6.selectable, label = _props6.label, children = _props6.children, noIcon = _props6.noIcon, subMenuContentClassName = _props6.subMenuContentClassName, propsTriggerType = _props6.triggerType, parentMode = _props6.parentMode;
    var _root$props = root.props, prefix = _root$props.prefix, selectMode = _root$props.selectMode, rootTriggerType = _root$props.triggerType, inlineArrowDirection = _root$props.inlineArrowDirection, expandAnimation = _root$props.expandAnimation, rtl = _root$props.rtl;
    var triggerType = propsTriggerType || rootTriggerType;
    var open = this.getOpen();
    var _root$state = root.state, selectedKeys = _root$state.selectedKeys, _k2n = _root$state._k2n;
    var isChildSelected = getChildSelected({
      _key,
      _k2n,
      selectMode,
      selectedKeys
    });
    var others = obj.pickOthers(Object.keys(SubMenu2.propTypes), this.props);
    var liProps = {
      className: classnames((_cx = {}, _cx[prefix + "menu-sub-menu-wrapper"] = true, _cx[className] = !!className, _cx))
    };
    var itemProps = {
      "aria-expanded": open,
      _key,
      level,
      role: "listitem",
      inlineLevel,
      root,
      type: "submenu",
      component: "div",
      parentMode,
      className: classnames((_cx2 = {}, _cx2[prefix + "opened"] = open, _cx2[prefix + "child-selected"] = isChildSelected, _cx2))
    };
    if (typeof label === "string") {
      itemProps.title = label;
    }
    var arrorProps = {
      type: inlineArrowDirection === "right" ? "arrow-right" : "arrow-down",
      className: classnames((_cx3 = {}, _cx3[prefix + "menu-icon-arrow"] = true, _cx3[prefix + "menu-icon-arrow-down"] = inlineArrowDirection === "down", _cx3[prefix + "menu-icon-arrow-right"] = inlineArrowDirection === "right", _cx3[prefix + "open"] = open, _cx3))
    };
    var selectable = !!selectMode && selectableFromProps;
    var NewItem = selectable ? SelectableItem : Item;
    if (triggerType === "hover") {
      liProps.onMouseEnter = this.handleMouseEnter;
      liProps.onMouseLeave = this.handleMouseLeave;
    } else if (selectable) {
      arrorProps.onClick = this.handleClick;
    } else {
      itemProps.onClick = this.handleClick;
    }
    var newSubMenuContentClassName = classnames((_cx4 = {}, _cx4[prefix + "menu-sub-menu"] = true, _cx4[subMenuContentClassName] = !!subMenuContentClassName, _cx4));
    var roleMenu = "menu", roleItem = "menuitem";
    if ("selectMode" in root.props) {
      roleMenu = "listbox";
      roleItem = "option";
    }
    var subMenu = open ? React.createElement("ul", {
      role: roleMenu,
      dir: rtl ? "rtl" : void 0,
      className: newSubMenuContentClassName
    }, this.passParentToChildren(children)) : null;
    return React.createElement("li", _extends({role: roleItem}, others, liProps), React.createElement(NewItem, itemProps, React.createElement("span", {className: prefix + "menu-item-text"}, label), noIcon ? null : React.createElement(NextIcon, arrorProps)), expandAnimation ? React.createElement(Expand, {
      animationAppear: false,
      afterLeave: this.afterLeave
    }, subMenu) : subMenu);
  };
  SubMenu2.prototype.renderPopup = function renderPopup() {
    var _cx5;
    var _props7 = this.props, children = _props7.children, subMenuContentClassName = _props7.subMenuContentClassName, noIcon = _props7.noIcon, others = _objectWithoutProperties(_props7, ["children", "subMenuContentClassName", "noIcon"]);
    var root = this.props.root;
    var _root$props2 = root.props, prefix = _root$props2.prefix, popupClassName = _root$props2.popupClassName, popupStyle = _root$props2.popupStyle, rtl = _root$props2.rtl;
    var newClassName = classnames((_cx5 = {}, _cx5[prefix + "menu"] = true, _cx5[prefix + "ver"] = true, _cx5[popupClassName] = !!popupClassName, _cx5[subMenuContentClassName] = !!subMenuContentClassName, _cx5));
    others.rtl = rtl;
    return React.createElement(PopupItem, _extends({}, others, {noIcon, hasSubMenu: true}), React.createElement("ul", {
      role: "menu",
      dir: rtl ? "rtl" : void 0,
      className: newClassName,
      style: popupStyle
    }, this.passParentToChildren(children)));
  };
  SubMenu2.prototype.render = function render2() {
    var _props8 = this.props, mode = _props8.mode, root = _props8.root;
    var newMode = mode || root.props.mode;
    return newMode === "popup" ? this.renderPopup() : this.renderInline();
  };
  return SubMenu2;
}(Component), _class$3.menuChildType = "submenu", _class$3.propTypes = {
  _key: propTypes.string,
  root: propTypes.object,
  level: propTypes.number,
  inlineLevel: propTypes.number,
  groupIndent: propTypes.number,
  noIcon: propTypes.bool,
  label: propTypes.node,
  selectable: propTypes.bool,
  mode: propTypes.oneOf(["inline", "popup"]),
  children: propTypes.node,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  subMenuContentClassName: propTypes.string,
  triggerType: propTypes.oneOf(["click", "hover"]),
  align: propTypes.oneOf(["outside", "follow"]),
  parentMode: propTypes.oneOf(["inline", "popup"]),
  parent: propTypes.any
}, _class$3.defaultProps = {
  groupIndent: 0,
  noIcon: false,
  selectable: false
}, _temp$3);
SubMenu.displayName = "SubMenu";
var _class$4, _temp$4;
var bindCtx$4 = func.bindCtx;
var pickOthers$2 = obj.pickOthers, isNil = obj.isNil;
var noop = function noop2() {
};
var MENUITEM_OVERFLOWED_CLASSNAME = "menuitem-overflowed";
var getIndicatorsItem = function getIndicatorsItem2(items, isPlaceholder) {
  var _cx;
  var prefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  var renderMore = arguments[3];
  var moreCls = classnames((_cx = {}, _cx[prefix + "menu-more"] = true, _cx));
  var style = {};
  if (isPlaceholder) {
    style.visibility = "hidden";
    style.display = "inline-block";
  } else if (items && items.length === 0) {
    style.display = "none";
    style.visibility = "unset";
  }
  if (renderMore && typeof renderMore === "function") {
    var moreNode = renderMore(items);
    var renderMoreCls = classnames(moreCls, moreNode.props && moreNode.props.className);
    return React.isValidElement(moreNode) ? React.cloneElement(moreNode, {
      style,
      className: renderMoreCls
    }) : moreNode;
  }
  return React.createElement(SubMenu, {label: "···", noIcon: true, className: moreCls, style}, items);
};
var addIndicators = function addIndicators2(_ref) {
  var children = _ref.children, lastVisibleIndex = _ref.lastVisibleIndex, prefix = _ref.prefix, renderMore = _ref.renderMore;
  var arr = [];
  children.forEach(function(child, index) {
    if (!child) {
      return;
    }
    var overflowedItems = [];
    if (index > lastVisibleIndex) {
      child = React.cloneElement(child, {
        key: "more-" + index,
        style: {display: "none"},
        className: (child && child.className || "") + " " + MENUITEM_OVERFLOWED_CLASSNAME
      });
    }
    if (index === lastVisibleIndex + 1) {
      overflowedItems = children.slice(lastVisibleIndex + 1).map(function(c, i) {
        return React.cloneElement(c, {
          key: "more-" + index + "-" + i
        });
      });
      arr.push(getIndicatorsItem(overflowedItems, false, prefix, renderMore));
    }
    arr.push(child);
  });
  arr.push(getIndicatorsItem([], true, prefix, renderMore));
  return arr;
};
var getNewChildren = function getNewChildren2(_ref2) {
  var children = _ref2.children, root = _ref2.root, mode = _ref2.mode, lastVisibleIndex = _ref2.lastVisibleIndex, hozInLine = _ref2.hozInLine, prefix = _ref2.prefix, renderMore = _ref2.renderMore;
  var k2n = {};
  var p2n = {};
  var arr = hozInLine ? addIndicators({
    children,
    lastVisibleIndex,
    prefix,
    renderMore
  }) : children;
  var loop = function loop2(children2, posPrefix) {
    var indexWrapper = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {index: 0};
    var inlineLevel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    var keyArray = [];
    return Children.map(children2, function(child) {
      if (child && (typeof child.type === "function" || _typeof(child.type) === "object") && "menuChildType" in child.type) {
        var newChild = void 0;
        var pos = void 0;
        var props = {root};
        if (["item", "submenu", "group"].indexOf(child.type.menuChildType) > -1) {
          pos = posPrefix + "-" + indexWrapper.index++;
          var key = typeof child.key === "string" ? child.key : pos;
          if (keyArray.indexOf(key) > -1) {
            return;
          }
          keyArray.push(key);
          var level = pos.split("-").length - 1;
          k2n[key] = p2n[pos] = {
            key,
            pos,
            mode: child.props.mode,
            type: child.type.menuChildType,
            disabled: child.props.disabled,
            label: child.props.label || child.props.children
          };
          props.level = level;
          props.inlineLevel = inlineLevel;
          props._key = key;
          props.groupIndent = child.type.menuChildType === "group" ? 1 : 0;
        }
        var childLevel = (child.props.mode || mode) === "popup" ? 1 : inlineLevel + 1;
        switch (child.type.menuChildType) {
          case "submenu":
            newChild = cloneElement(child, props, loop2(child.props.children, pos, void 0, childLevel));
            break;
          case "group":
            newChild = cloneElement(child, props, loop2(child.props.children, posPrefix, indexWrapper, props.level));
            break;
          case "item":
          case "divider":
            newChild = cloneElement(child, props);
            break;
          default:
            newChild = child;
            break;
        }
        return newChild;
      }
      return child;
    });
  };
  var newChildren = loop(arr, "0");
  return {
    newChildren,
    _k2n: k2n,
    _p2n: p2n
  };
};
var Menu = (_temp$4 = _class$4 = function(_Component) {
  _inherits(Menu2, _Component);
  function Menu2(props) {
    _classCallCheck(this, Menu2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.getUpdateChildren = function() {
      var _this$state = _this.state, root = _this$state.root, lastVisibleIndex = _this$state.lastVisibleIndex;
      return getNewChildren(_extends({
        root,
        lastVisibleIndex
      }, _this.props));
    };
    _this.menuContentRef = function(ref) {
      _this.menuContent = ref;
    };
    _this.menuHeaderRef = function(ref) {
      _this.menuHeader = ref;
    };
    _this.menuFooterRef = function(ref) {
      _this.menuFooter = ref;
    };
    var _this$props = _this.props, prefix = _this$props.prefix, children = _this$props.children, selectedKeys = _this$props.selectedKeys, defaultSelectedKeys = _this$props.defaultSelectedKeys, focusedKey = _this$props.focusedKey, focusable = _this$props.focusable, autoFocus = _this$props.autoFocus, hozInLine = _this$props.hozInLine, renderMore = _this$props.renderMore;
    _this.state = {
      lastVisibleIndex: void 0
    };
    var _getNewChildren = getNewChildren(_extends({
      root: _this
    }, _this.props)), newChildren = _getNewChildren.newChildren, _k2n = _getNewChildren._k2n, _p2n = _getNewChildren._p2n;
    var tabbableKey = focusable ? getFirstAvaliablelChildKey("0", _p2n) : void 0;
    _this.state = {
      root: _this,
      lastVisibleIndex: void 0,
      newChildren,
      _k2n,
      _p2n,
      tabbableKey,
      openKeys: _this.getInitOpenKeys(props, _k2n, _p2n),
      selectedKeys: normalizeToArray(selectedKeys || defaultSelectedKeys),
      focusedKey: !isNil(_this.props.focusedKey) ? focusedKey : focusable && autoFocus ? tabbableKey : null
    };
    bindCtx$4(_this, ["handleOpen", "handleSelect", "handleItemClick", "handleItemKeyDown", "onBlur", "adjustChildrenWidth"]);
    _this.popupNodes = [];
    return _this;
  }
  Menu2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var state = {};
    if ("openKeys" in nextProps) {
      state.openKeys = normalizeToArray(nextProps.openKeys);
    }
    if ("selectedKeys" in nextProps) {
      state.selectedKeys = normalizeToArray(nextProps.selectedKeys);
    }
    if ("focusedKey" in nextProps) {
      state.focusedKey = nextProps.focusedKey;
    }
    var _getNewChildren2 = getNewChildren(_extends({
      root: prevState.root,
      lastVisibleIndex: prevState.lastVisibleIndex
    }, nextProps)), newChildren = _getNewChildren2.newChildren, _k2n = _getNewChildren2._k2n, _p2n = _getNewChildren2._p2n;
    state.newChildren = newChildren;
    state._k2n = _k2n;
    state._p2n = _p2n;
    if (nextProps.focusable) {
      if (prevState.tabbableKey in _k2n) {
        if (prevState.focusedKey) {
          state.tabbableKey = prevState.focusedKey;
        }
      } else {
        state.tabbableKey = getFirstAvaliablelChildKey("0", _p2n);
      }
    }
    return state;
  };
  Menu2.prototype.componentDidMount = function componentDidMount() {
    this.menuNode = findDOMNode(this);
    this.adjustChildrenWidth();
    if (this.props.hozInLine) {
      events.on(window, "resize", this.adjustChildrenWidth);
    }
  };
  Menu2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.lastVisibleIndex !== this.state.lastVisibleIndex) {
      this.adjustChildrenWidth();
    }
  };
  Menu2.prototype.componentWillUnmount = function componentWillUnmount() {
    events.off(window, "resize", this.adjustChildrenWidth);
  };
  Menu2.prototype.adjustChildrenWidth = function adjustChildrenWidth() {
    var _props = this.props, direction = _props.direction, prefix = _props.prefix, header = _props.header, footer = _props.footer, hozInLine = _props.hozInLine;
    if (direction !== "hoz" || !hozInLine) {
      return;
    }
    if (!this.menuNode && !this.menuContent) {
      return;
    }
    var children = [], spaceWidth = void 0;
    if (header || footer) {
      children = this.menuContent.children;
      spaceWidth = getWidth(this.menuNode) - getWidth(this.menuHeader) - getWidth(this.menuFooter);
    } else {
      children = this.menuNode.children;
      spaceWidth = getWidth(this.menuNode);
    }
    if (children.length < 2) {
      return;
    }
    var currentSumWidth = 0, lastVisibleIndex = -1;
    var moreNode = "";
    var menuItemNodes = [].slice.call(children).filter(function(node) {
      if (node.className.split(" ").indexOf(prefix + "menu-more") < 0) {
        return true;
      } else {
        moreNode = node;
      }
      return false;
    });
    var overflowedItems = menuItemNodes.filter(function(c) {
      return c.className.split(" ").indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
    });
    overflowedItems.forEach(function(c) {
      dom.setStyle(c, "display", "inline-block");
    });
    dom.setStyle(moreNode, "display", "inline-block");
    var moreWidth = getWidth(moreNode);
    this.menuItemSizes = menuItemNodes.map(function(c) {
      return getWidth(c);
    });
    var totalLen = this.menuItemSizes.length;
    overflowedItems.forEach(function(c) {
      dom.setStyle(c, "display", "none");
    });
    this.menuItemSizes.forEach(function(liWidth, i) {
      currentSumWidth += liWidth;
      if (i >= totalLen - 1 && currentSumWidth <= spaceWidth || currentSumWidth + moreWidth <= spaceWidth) {
        lastVisibleIndex++;
      }
    });
    if (lastVisibleIndex >= totalLen - 1) {
      dom.setStyle(moreNode, "display", "none");
    }
    this.setState(_extends({
      lastVisibleIndex
    }, this.getUpdateChildren()));
  };
  Menu2.prototype.onBlur = function onBlur(e) {
    this.setState({
      focusedKey: void 0
    });
    this.props.onBlur && this.props.onBlur(e);
  };
  Menu2.prototype.getInitOpenKeys = function getInitOpenKeys(props, _k2n, _p2n) {
    var initOpenKeys = void 0;
    var openKeys = props.openKeys, defaultOpenKeys = props.defaultOpenKeys, defaultOpenAll = props.defaultOpenAll, mode = props.mode, openMode = props.openMode;
    if (openKeys) {
      initOpenKeys = openKeys;
    } else if (defaultOpenAll && mode === "inline" && openMode === "multiple") {
      initOpenKeys = Object.keys(_k2n).filter(function(key) {
        return _k2n[key].type === "submenu";
      });
    } else {
      initOpenKeys = defaultOpenKeys;
    }
    return normalizeToArray(initOpenKeys);
  };
  Menu2.prototype.handleOpen = function handleOpen(key, open, triggerType, e) {
    var newOpenKeys = void 0;
    var _props2 = this.props, mode = _props2.mode, openMode = _props2.openMode;
    var _state = this.state, openKeys = _state.openKeys, _k2n = _state._k2n;
    var index = openKeys.indexOf(key);
    if (open && index === -1) {
      if (mode === "inline") {
        if (openMode === "single") {
          newOpenKeys = openKeys.filter(function(k) {
            return _k2n[k] && !isSibling(_k2n[key].pos, _k2n[k].pos);
          });
          newOpenKeys.push(key);
        } else {
          newOpenKeys = openKeys.concat(key);
        }
      } else {
        newOpenKeys = openKeys.filter(function(k) {
          return _k2n[k] && isAncestor(_k2n[key].pos, _k2n[k].pos);
        });
        newOpenKeys.push(key);
      }
    } else if (!open && index > -1) {
      if (mode === "inline") {
        newOpenKeys = [].concat(openKeys.slice(0, index), openKeys.slice(index + 1));
      } else if (triggerType === "docClick") {
        if (!this.popupNodes.concat(this.menuNode).some(function(node) {
          return node.contains(e.target);
        })) {
          newOpenKeys = [];
        }
      } else {
        newOpenKeys = openKeys.filter(function(k) {
          return k !== key && _k2n[k] && !isAncestor(_k2n[k].pos, _k2n[key].pos);
        });
      }
    }
    if (newOpenKeys) {
      if (isNil(this.props.openKeys)) {
        this.setState(_extends({
          openKeys: newOpenKeys
        }, this.getUpdateChildren()));
      }
      this.props.onOpen(newOpenKeys, {
        key,
        open
      });
    }
  };
  Menu2.prototype.getPath = function getPath(key, _k2n, _p2n) {
    var keyPath = [];
    var labelPath = [];
    var pos = _k2n[key].pos;
    var nums = pos.split("-");
    for (var i = 1; i < nums.length - 1; i++) {
      var parentNums = nums.slice(0, i + 1);
      var parentPos = parentNums.join("-");
      var parent = _p2n[parentPos];
      keyPath.push(parent.key);
      labelPath.push(parent.label);
    }
    return {
      keyPath,
      labelPath
    };
  };
  Menu2.prototype.handleSelect = function handleSelect(key, select, menuItem) {
    var _state2 = this.state, _k2n = _state2._k2n, _p2n = _state2._p2n;
    var pos = _k2n[key].pos;
    var level = pos.split("-").length - 1;
    if (this.props.shallowSelect && level > 1) {
      return;
    }
    var newSelectedKeys = void 0;
    var selectMode = this.props.selectMode;
    var selectedKeys = this.state.selectedKeys;
    var index = selectedKeys.indexOf(key);
    if (select && index === -1) {
      if (selectMode === "single") {
        newSelectedKeys = [key];
      } else if (selectMode === "multiple") {
        newSelectedKeys = selectedKeys.concat(key);
      }
    } else if (!select && index > -1 && selectMode === "multiple") {
      newSelectedKeys = [].concat(selectedKeys.slice(0, index), selectedKeys.slice(index + 1));
    }
    if (newSelectedKeys) {
      if (isNil(this.props.selectedKeys)) {
        this.setState({
          selectedKeys: newSelectedKeys
        });
      }
      this.props.onSelect(newSelectedKeys, menuItem, _extends({
        key,
        select,
        label: _k2n[key].label
      }, this.getPath(key, _k2n, _p2n)));
    }
  };
  Menu2.prototype.handleItemClick = function handleItemClick(key, item, e) {
    var _k2n = this.state._k2n;
    if (this.props.focusable) {
      if (isNil(this.props.focusedKey)) {
        this.setState({
          focusedKey: key
        });
      }
      this.props.onItemFocus(key, item, e);
    }
    if (item.props.type === "item") {
      if (item.props.parentMode === "popup" && this.state.openKeys.length) {
        if (isNil(this.props.openKeys)) {
          this.setState({
            openKeys: []
          });
        }
        this.props.onOpen([], {
          key: this.state.openKeys.sort(function(prevKey, nextKey) {
            return _k2n[nextKey].pos.split("-").length - _k2n[prevKey].pos.split("-").length;
          })[0],
          open: false
        });
      }
      this.props.onItemClick(key, item, e);
    }
  };
  Menu2.prototype.getAvailableKey = function getAvailableKey(pos, prev) {
    var _p2n = this.state._p2n;
    var ps = Object.keys(_p2n).filter(function(p) {
      return isAvailablePos(pos, p, _p2n);
    });
    if (ps.length > 1) {
      var index = ps.indexOf(pos);
      var targetIndex = void 0;
      if (prev) {
        targetIndex = index === 0 ? ps.length - 1 : index - 1;
      } else {
        targetIndex = index === ps.length - 1 ? 0 : index + 1;
      }
      return _p2n[ps[targetIndex]].key;
    }
    return null;
  };
  Menu2.prototype.getParentKey = function getParentKey(pos) {
    return this.state._p2n[pos.slice(0, pos.length - 2)].key;
  };
  Menu2.prototype.handleItemKeyDown = function handleItemKeyDown(key, type, item, e) {
    if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.RIGHT, KEYCODE.LEFT, KEYCODE.ENTER, KEYCODE.ESC, KEYCODE.SPACE].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      e.stopPropagation();
    }
    var focusedKey = this.state.focusedKey;
    var _state3 = this.state, _p2n = _state3._p2n, _k2n = _state3._k2n;
    var direction = this.props.direction;
    var pos = _k2n[key].pos;
    var level = pos.split("-").length - 1;
    switch (e.keyCode) {
      case KEYCODE.UP: {
        var avaliableKey = this.getAvailableKey(pos, true);
        if (avaliableKey) {
          focusedKey = avaliableKey;
        }
        break;
      }
      case KEYCODE.DOWN: {
        var _avaliableKey = void 0;
        if (direction === "hoz" && level === 1 && type === "submenu") {
          this.handleOpen(key, true);
          _avaliableKey = getFirstAvaliablelChildKey(pos, _p2n);
        } else {
          _avaliableKey = this.getAvailableKey(pos, false);
        }
        if (_avaliableKey) {
          focusedKey = _avaliableKey;
        }
        break;
      }
      case KEYCODE.RIGHT: {
        var _avaliableKey2 = void 0;
        if (direction === "hoz" && level === 1) {
          _avaliableKey2 = this.getAvailableKey(pos, false);
        } else if (type === "submenu") {
          this.handleOpen(key, true);
          _avaliableKey2 = getFirstAvaliablelChildKey(pos, _p2n);
        }
        if (_avaliableKey2) {
          focusedKey = _avaliableKey2;
        }
        break;
      }
      case KEYCODE.ENTER: {
        if (type === "submenu") {
          this.handleOpen(key, true);
          var _avaliableKey3 = getFirstAvaliablelChildKey(pos, _p2n);
          if (_avaliableKey3) {
            focusedKey = _avaliableKey3;
          }
        }
        break;
      }
      case KEYCODE.LEFT: {
        if (direction === "hoz" && level === 1) {
          var _avaliableKey4 = this.getAvailableKey(pos, true);
          if (_avaliableKey4) {
            focusedKey = _avaliableKey4;
          }
        } else if (level > 1) {
          var parentKey = this.getParentKey(pos);
          this.handleOpen(parentKey, false);
          focusedKey = parentKey;
        }
        break;
      }
      case KEYCODE.ESC:
        if (level > 1) {
          var _parentKey = this.getParentKey(pos);
          this.handleOpen(_parentKey, false);
          focusedKey = _parentKey;
        }
        break;
      case KEYCODE.TAB:
        focusedKey = null;
        break;
    }
    if (focusedKey !== this.state.focusedKey) {
      if (isNil(this.props.focusedKey)) {
        this.setState({
          focusedKey
        });
      }
      this.props.onItemKeyDown(focusedKey, item, e);
      this.props.onItemFocus(focusedKey, e);
    }
  };
  Menu2.prototype.render = function render2() {
    var _cx2;
    var _props3 = this.props, prefix = _props3.prefix, className = _props3.className, direction = _props3.direction, hozAlign = _props3.hozAlign, header = _props3.header, footer = _props3.footer, embeddable = _props3.embeddable, selectMode = _props3.selectMode, hozInLine = _props3.hozInLine, rtl = _props3.rtl, flatenContent = _props3.flatenContent;
    var newChildren = this.state.newChildren;
    var others = pickOthers$2(Object.keys(Menu2.propTypes), this.props);
    var newClassName = classnames((_cx2 = {}, _cx2[prefix + "menu"] = true, _cx2[prefix + "ver"] = direction === "ver", _cx2[prefix + "hoz"] = direction === "hoz", _cx2[prefix + "menu-embeddable"] = embeddable, _cx2[prefix + "menu-nowrap"] = hozInLine, _cx2[prefix + "menu-selectable-" + selectMode] = selectMode, _cx2[className] = !!className, _cx2));
    var role = direction === "hoz" ? "menubar" : "menu";
    var ariaMultiselectable = void 0;
    if ("selectMode" in this.props) {
      role = "listbox";
      ariaMultiselectable = selectMode === "multiple";
    }
    var headerElement = header ? React.createElement("li", {className: prefix + "menu-header", ref: this.menuHeaderRef}, header) : null;
    var itemsElement = !flatenContent && (header || footer) ? React.createElement("ul", {className: prefix + "menu-content", ref: this.menuContentRef}, newChildren) : newChildren;
    var footerElement = footer ? React.createElement("li", {className: prefix + "menu-footer", ref: this.menuFooterRef}, footer) : null;
    var shouldWrapItemsAndFooter = hozAlign === "right" && !!header;
    if (rtl) {
      others.dir = "rtl";
    }
    return React.createElement("ul", _extends({
      role,
      onBlur: this.onBlur,
      className: newClassName,
      onKeyDown: this.handleEnter,
      "aria-multiselectable": ariaMultiselectable
    }, others), headerElement, shouldWrapItemsAndFooter ? React.createElement("div", {className: prefix + "menu-hoz-right"}, itemsElement, footerElement) : null, !shouldWrapItemsAndFooter ? itemsElement : null, !shouldWrapItemsAndFooter ? footerElement : null);
  };
  return Menu2;
}(Component), _class$4.isNextMenu = true, _class$4.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  onItemClick: propTypes.func,
  openKeys: propTypes.oneOfType([propTypes.string, propTypes.array]),
  defaultOpenKeys: propTypes.oneOfType([propTypes.string, propTypes.array]),
  defaultOpenAll: propTypes.bool,
  onOpen: propTypes.func,
  mode: propTypes.oneOf(["inline", "popup"]),
  triggerType: propTypes.oneOf(["click", "hover"]),
  openMode: propTypes.oneOf(["single", "multiple"]),
  inlineIndent: propTypes.number,
  inlineArrowDirection: propTypes.oneOf(["down", "right"]),
  popupAutoWidth: propTypes.bool,
  popupAlign: propTypes.oneOf(["follow", "outside"]),
  popupProps: propTypes.oneOfType([propTypes.object, propTypes.func]),
  popupClassName: propTypes.string,
  popupStyle: propTypes.object,
  selectedKeys: propTypes.oneOfType([propTypes.string, propTypes.array]),
  defaultSelectedKeys: propTypes.oneOfType([propTypes.string, propTypes.array]),
  onSelect: propTypes.func,
  selectMode: propTypes.oneOf(["single", "multiple"]),
  shallowSelect: propTypes.bool,
  hasSelectedIcon: propTypes.bool,
  labelToggleChecked: propTypes.bool,
  isSelectIconRight: propTypes.bool,
  direction: propTypes.oneOf(["ver", "hoz"]),
  hozAlign: propTypes.oneOf(["left", "right"]),
  hozInLine: propTypes.bool,
  renderMore: propTypes.func,
  header: propTypes.node,
  footer: propTypes.node,
  autoFocus: propTypes.bool,
  focusedKey: propTypes.string,
  focusable: propTypes.bool,
  onItemFocus: propTypes.func,
  onBlur: propTypes.func,
  embeddable: propTypes.bool,
  onItemKeyDown: propTypes.func,
  expandAnimation: propTypes.bool,
  itemClassName: propTypes.string,
  icons: propTypes.object,
  flatenContent: propTypes.bool
}), _class$4.defaultProps = {
  prefix: "next-",
  pure: false,
  defaultOpenKeys: [],
  defaultOpenAll: false,
  onOpen: noop,
  mode: "inline",
  triggerType: "click",
  openMode: "multiple",
  inlineIndent: 20,
  inlineArrowDirection: "down",
  popupAutoWidth: false,
  popupAlign: "follow",
  popupProps: {},
  defaultSelectedKeys: [],
  onSelect: noop,
  shallowSelect: false,
  hasSelectedIcon: true,
  isSelectIconRight: false,
  labelToggleChecked: true,
  direction: "ver",
  hozAlign: "left",
  hozInLine: false,
  autoFocus: false,
  focusable: true,
  embeddable: false,
  onItemFocus: noop,
  onItemKeyDown: noop,
  onItemClick: noop,
  expandAnimation: true,
  icons: {}
}, _temp$4);
Menu.displayName = "Menu";
var Menu$1 = polyfill(Menu);
var _class$5, _temp$5;
var noop$1 = {};
var bindCtx$5 = func.bindCtx;
var pickOthers$3 = obj.pickOthers;
var CheckableItem = (_temp$5 = _class$5 = function(_Component) {
  _inherits(CheckableItem2, _Component);
  function CheckableItem2(props) {
    _classCallCheck(this, CheckableItem2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    bindCtx$5(_this, ["stopPropagation", "handleKeyDown", "handleClick"]);
    _this.id = htmlId.escapeForId("checkable-item-" + (props.id || props._key));
    return _this;
  }
  CheckableItem2.prototype.stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };
  CheckableItem2.prototype.handleCheck = function handleCheck(e) {
    var _props = this.props, checkType = _props.checkType, checked = _props.checked, onChange3 = _props.onChange;
    if (!(checkType === "radio" && checked)) {
      onChange3(!checked, e);
    }
  };
  CheckableItem2.prototype.handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === KEYCODE.SPACE && !this.props.checkDisabled) {
      this.handleCheck(e);
    }
    this.props.onKeyDown && this.props.onKeyDown(e);
  };
  CheckableItem2.prototype.handleClick = function handleClick(e) {
    this.handleCheck(e);
    this.props.onClick && this.props.onClick(e);
  };
  CheckableItem2.prototype.renderCheck = function renderCheck() {
    var _props2 = this.props, root = _props2.root, checked = _props2.checked, indeterminate = _props2.indeterminate, disabled = _props2.disabled, checkType = _props2.checkType, checkDisabled = _props2.checkDisabled, onChange3 = _props2.onChange;
    var labelToggleChecked = root.props.labelToggleChecked;
    var Check = checkType === "radio" ? Radio : Checkbox;
    var checkProps = {
      tabIndex: "-1",
      checked,
      disabled: disabled || checkDisabled
    };
    if (checkType === "checkbox") {
      checkProps.indeterminate = indeterminate;
    }
    if (!labelToggleChecked) {
      checkProps.onChange = onChange3;
      checkProps.onClick = this.stopPropagation;
    }
    return React.createElement(Check, _extends({"aria-labelledby": this.id}, checkProps));
  };
  CheckableItem2.prototype.render = function render2() {
    var _props3 = this.props, _key = _props3._key, root = _props3.root, checked = _props3.checked, disabled = _props3.disabled, onClick = _props3.onClick, helper = _props3.helper, children = _props3.children;
    var _root$props = root.props, prefix = _root$props.prefix, labelToggleChecked = _root$props.labelToggleChecked;
    var others = pickOthers$3(Object.keys(CheckableItem2.propTypes), this.props);
    var newProps = _extends({
      _key,
      root,
      disabled,
      type: "item",
      onClick,
      onKeyDown: this.handleKeyDown
    }, others);
    if (labelToggleChecked && !disabled) {
      newProps.onClick = this.handleClick;
    }
    var title = void 0;
    if (typeof children === "string") {
      title = children;
    }
    return React.createElement(Item, _extends({"aria-checked": checked, title}, newProps), this.renderCheck(), React.createElement("span", {className: prefix + "menu-item-text", id: this.id}, children), helper ? React.createElement("div", {className: prefix + "menu-item-helper"}, helper) : null);
  };
  return CheckableItem2;
}(Component), _class$5.propTypes = {
  _key: propTypes.string,
  root: propTypes.object,
  disabled: propTypes.bool,
  inlineIndent: propTypes.number,
  checked: propTypes.bool,
  indeterminate: propTypes.bool,
  onChange: propTypes.func,
  checkType: propTypes.oneOf(["checkbox", "radio"]),
  checkDisabled: propTypes.bool,
  helper: propTypes.node,
  children: propTypes.node,
  onKeyDown: propTypes.func,
  onClick: propTypes.func,
  id: propTypes.string
}, _class$5.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  checkType: "checkbox",
  checkDisabled: false,
  onChange: noop$1
}, _temp$5);
CheckableItem.displayName = "CheckableItem";
var _class$6, _temp$6;
var CheckboxItem = (_temp$6 = _class$6 = function(_Component) {
  _inherits(CheckboxItem2, _Component);
  function CheckboxItem2() {
    _classCallCheck(this, CheckboxItem2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  CheckboxItem2.prototype.render = function render2() {
    var _props = this.props, checkboxDisabled = _props.checkboxDisabled, others = _objectWithoutProperties(_props, ["checkboxDisabled"]);
    return React.createElement(CheckableItem, _extends({
      role: "menuitemcheckbox",
      checkType: "checkbox",
      checkDisabled: checkboxDisabled
    }, others));
  };
  return CheckboxItem2;
}(Component), _class$6.menuChildType = "item", _class$6.propTypes = {
  checked: propTypes.bool,
  indeterminate: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  helper: propTypes.node,
  children: propTypes.node,
  checkboxDisabled: propTypes.bool
}, _class$6.defaultProps = {
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: function onChange() {
  },
  checkboxDisabled: false
}, _temp$6);
CheckboxItem.displayName = "CheckboxItem";
var _class$7, _temp$7;
var RadioItem = (_temp$7 = _class$7 = function(_Component) {
  _inherits(RadioItem2, _Component);
  function RadioItem2() {
    _classCallCheck(this, RadioItem2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  RadioItem2.prototype.render = function render2() {
    return React.createElement(CheckableItem, _extends({
      role: "menuitemradio",
      checkType: "radio"
    }, this.props));
  };
  return RadioItem2;
}(Component), _class$7.menuChildType = "item", _class$7.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  helper: propTypes.node,
  children: propTypes.node
}, _class$7.defaultProps = {
  checked: false,
  disabled: false,
  onChange: function onChange2() {
  }
}, _temp$7);
RadioItem.displayName = "RadioItem";
var _class$8, _temp$8;
var Group = (_temp$8 = _class$8 = function(_Component) {
  _inherits(Group2, _Component);
  function Group2() {
    _classCallCheck(this, Group2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Group2.prototype.render = function render2() {
    var _cx;
    var _props = this.props, root = _props.root, className = _props.className, label = _props.label, children = _props.children, parentMode = _props.parentMode, others = _objectWithoutProperties(_props, ["root", "className", "label", "children", "parentMode"]);
    var prefix = root.props.prefix;
    var newClassName = classnames((_cx = {}, _cx[prefix + "menu-group-label"] = true, _cx[className] = !!className, _cx));
    var newChildren = children.map(function(child) {
      var _cx2;
      if (typeof child !== "function" && (typeof child === "undefined" ? "undefined" : _typeof(child)) !== "object") {
        return child;
      }
      var className2 = child.props.className;
      var newChildClassName = classnames((_cx2 = {}, _cx2[prefix + "menu-group-item"] = true, _cx2[className2] = !!className2, _cx2));
      return cloneElement(child, {
        parentMode,
        className: newChildClassName
      });
    });
    return [React.createElement(Item, _extends({
      key: "menu-group-label",
      className: newClassName,
      replaceClassName: true,
      root,
      parentMode
    }, others), label)].concat(newChildren);
  };
  return Group2;
}(Component), _class$8.menuChildType = "group", _class$8.propTypes = {
  root: propTypes.object,
  className: propTypes.string,
  label: propTypes.node,
  children: propTypes.node,
  parentMode: propTypes.oneOf(["inline", "popup"])
}, _temp$8);
Group.displayName = "Group";
var _class$9, _temp$9;
var Divider = (_temp$9 = _class$9 = function(_Component) {
  _inherits(Divider2, _Component);
  function Divider2() {
    _classCallCheck(this, Divider2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Divider2.prototype.render = function render2() {
    var _cx;
    var _props = this.props, root = _props.root, className = _props.className, others = _objectWithoutProperties(_props, ["root", "className"]);
    var prefix = root.props.prefix;
    var newClassName = classnames((_cx = {}, _cx[prefix + "menu-divider"] = true, _cx[className] = !!className, _cx));
    return React.createElement("li", _extends({role: "separator", className: newClassName}, others));
  };
  return Divider2;
}(Component), _class$9.menuChildType = "divider", _class$9.propTypes = {
  root: propTypes.object,
  className: propTypes.string
}, _temp$9);
Divider.displayName = "Divider";
var _class$a, _temp$a;
var bindCtx$6 = func.bindCtx;
var getContextProps = NextConfigProvider.getContextProps;
var Menu$2 = NextConfigProvider.config(Menu$1);
var menuInstance = void 0;
var ContextMenu = (_temp$a = _class$a = function(_Component) {
  _inherits(ContextMenu2, _Component);
  function ContextMenu2(props) {
    _classCallCheck(this, ContextMenu2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {
      visible: true
    };
    bindCtx$6(_this, ["handleOverlayClose", "handleOverlayOpen", "handleItemClick", "getOverlay"]);
    return _this;
  }
  ContextMenu2.prototype.getOverlay = function getOverlay(ref) {
    this.overlay = ref;
  };
  ContextMenu2.prototype.close = function close() {
    this.setState({
      visible: false
    });
    menuInstance = null;
  };
  ContextMenu2.prototype.handleOverlayClose = function handleOverlayClose(triggerType, e) {
    var clickedPopupMenu = triggerType === "docClick" && this.popupNodes.some(function(node) {
      return node.contains(e.target);
    });
    if (!clickedPopupMenu) {
      this.close();
      var overlayProps = this.props.overlayProps;
      if (overlayProps && overlayProps.onRequestClose) {
        for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          others[_key - 2] = arguments[_key];
        }
        overlayProps.onRequestClose.apply(overlayProps, [triggerType, e].concat(others));
      }
    }
  };
  ContextMenu2.prototype.handleOverlayOpen = function handleOverlayOpen() {
    this.popupNodes = this.overlay.getInstance().getContent().getInstance().popupNodes;
    var overlayProps = this.props.overlayProps;
    if (overlayProps && overlayProps.onOpen) {
      overlayProps.onOpen();
    }
  };
  ContextMenu2.prototype.handleItemClick = function handleItemClick() {
    var _props;
    this.close();
    this.props.onItemClick && (_props = this.props).onItemClick.apply(_props, arguments);
  };
  ContextMenu2.prototype.render = function render2() {
    var _cx, _cx2;
    var _props2 = this.props, className = _props2.className, popupClassName = _props2.popupClassName, target = _props2.target, align = _props2.align, offset = _props2.offset, afterClose = _props2.afterClose, _props2$overlayProps = _props2.overlayProps, overlayProps = _props2$overlayProps === void 0 ? {} : _props2$overlayProps, others = _objectWithoutProperties(_props2, ["className", "popupClassName", "target", "align", "offset", "afterClose", "overlayProps"]);
    var contextProps = getContextProps(this.props);
    var prefix = contextProps.prefix;
    var visible = this.state.visible;
    var newOverlayProps = _extends({}, contextProps, overlayProps, {
      target,
      align,
      offset,
      afterClose,
      visible,
      onRequestClose: this.handleOverlayClose,
      onOpen: this.handleOverlayOpen,
      ref: this.getOverlay
    });
    var menuProps = _extends({}, contextProps, {
      triggerType: "hover"
    }, others, {
      className: classnames((_cx = {}, _cx[prefix + "context"] = true, _cx[className] = !!className, _cx)),
      popupClassName: classnames((_cx2 = {}, _cx2[prefix + "context"] = true, _cx2[popupClassName] = !!popupClassName, _cx2)),
      onItemClick: this.handleItemClick
    });
    newOverlayProps.rtl = false;
    return React.createElement(NextOverlay, newOverlayProps, React.createElement(Menu$2, menuProps));
  };
  return ContextMenu2;
}(Component), _class$a.propTypes = {
  className: propTypes.string,
  popupClassName: propTypes.string,
  target: propTypes.any,
  align: propTypes.string,
  offset: propTypes.array,
  overlayProps: propTypes.object,
  afterClose: propTypes.func,
  mode: propTypes.oneOf(["inline", "popup"]),
  onOpen: propTypes.func,
  onItemClick: propTypes.func
}, _class$a.defaultProps = {
  prefix: "next-",
  align: "tl tl",
  mode: "popup"
}, _temp$a);
ContextMenu.displayName = "ContextMenu";
function create(props) {
  if (menuInstance) {
    menuInstance.destroy();
  }
  var afterClose = props.afterClose, others = _objectWithoutProperties(props, ["afterClose"]);
  var div = document.createElement("div");
  document.body.appendChild(div);
  var closeChain = function closeChain2() {
    unmountComponentAtNode(div);
    document.body.removeChild(div);
    afterClose && afterClose();
  };
  var newContext = NextConfigProvider.getContext();
  var menu = void 0;
  render(React.createElement(NextConfigProvider, newContext, React.createElement(ContextMenu, _extends({
    ref: function ref(_ref) {
      menu = _ref;
    },
    afterClose: closeChain
  }, others))), div);
  menuInstance = {
    destroy: function destroy() {
      if (menu) {
        menu.close();
      }
    }
  };
  return menuInstance;
}
Menu$1.SubMenu = SubMenu;
Menu$1.Item = SelectableItem;
Menu$1.CheckboxItem = CheckboxItem;
Menu$1.RadioItem = RadioItem;
Menu$1.PopupItem = PopupItem;
Menu$1.Group = Group;
Menu$1.Divider = Divider;
Menu$1.create = create;
var transform = function transform2(props, deprecated) {
  if ("indentSize" in props) {
    deprecated("indentSize", "inlineIndent", "Menu");
    var _props = props, indentSize = _props.indentSize, others = _objectWithoutProperties(_props, ["indentSize"]);
    props = _extends({inlineIndent: indentSize}, others);
  }
  if ("onDeselect" in props) {
    deprecated("onDeselect", "onSelect", "Menu");
    if (props.onDeselect) {
      var _props2 = props, onDeselect = _props2.onDeselect, onSelect = _props2.onSelect, _others = _objectWithoutProperties(_props2, ["onDeselect", "onSelect"]);
      var newOnSelect = function newOnSelect2(selectedKeys, item, extra) {
        if (!extra.select) {
          onDeselect(extra.key);
        }
        if (onSelect) {
          onSelect(selectedKeys, item, extra);
        }
      };
      props = _extends({onSelect: newOnSelect}, _others);
    }
  }
  return props;
};
var NextMenu = NextConfigProvider.config(Menu$1, {
  transform
});
export {NextMenu as N};

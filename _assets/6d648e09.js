import {R as React, x as NextOverlay, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, K as KEYCODE, s as NextIcon, f as findDOMNode, e as events, g as _extends, t as dom, d as classnames, D as NextMenu, A as Animate, i as propTypes, k as _objectWithoutProperties, P as PureComponent, p as polyfill, o as obj, C as Component, z as zhCN, N as NextConfigProvider, c as createElement, w as NextInput, S as Select} from "./index.9027a3fe.js";
import "./ec5eb88e.js";
import {G as Grid} from "./309d2f73.js";
import {B as Button} from "./ff15e5e1.js";
import {q as qe} from "./90de3083.js";
var triggerEvents = {
  CLICK: "click",
  HOVER: "hover"
};
function getOffsetWH(node, tabPosition) {
  var prop = "width";
  if (tabPosition === "left" || tabPosition === "right") {
    prop = "height";
  }
  return node ? node.getBoundingClientRect()[prop] : 0;
}
function getOffsetLT(node, tabPosition) {
  var prop = "left";
  if (tabPosition === "left" || tabPosition === "right") {
    prop = "top";
  }
  return node.getBoundingClientRect()[prop];
}
function isTransformSupported(style) {
  return "transform" in style || "webkitTransform" in style || "MozTransform" in style;
}
function toArray(children) {
  var ret = [];
  React.Children.forEach(children, function(child, index) {
    if (React.isValidElement(child)) {
      ret.push(React.cloneElement(child, {
        key: child.key || index,
        title: child.props.title || child.props.tab
      }));
    }
  });
  return ret;
}
var _class, _temp;
var floatRight = {float: "right", zIndex: 1};
var floatLeft = {float: "left", zIndex: 1};
var iconTypeMap = {
  dropdown: "arrow-down",
  prev: "arrow-left",
  next: "arrow-right"
};
var Popup = NextOverlay.Popup;
var Nav = (_temp = _class = function(_React$Component) {
  _inherits(Nav2, _React$Component);
  function Nav2(props, context) {
    _classCallCheck(this, Nav2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.removeTab = function(key, e) {
      e && e.stopPropagation();
      _this.props.onClose(key);
    };
    _this.onCloseKeyDown = function(key, e) {
      if (e.keyCode === KEYCODE.ENTER) {
        e.stopPropagation();
        e.preventDefault();
        _this.props.onClose(key);
      }
    };
    _this.defaultTabTemplateRender = function(key, _ref) {
      var prefix = _ref.prefix, title = _ref.title, closeable = _ref.closeable;
      var locale = _this.props.locale;
      var tail = closeable ? React.createElement(NextIcon, {
        "aria-label": locale.closeAriaLabel,
        type: "close",
        tabIndex: "0",
        onKeyDown: function onKeyDown(e) {
          return _this.onCloseKeyDown(key, e);
        },
        onClick: function onClick2(e) {
          return _this.removeTab(key, e);
        },
        className: prefix + "tabs-tab-close"
      }) : null;
      return React.createElement("div", {className: _this.props.prefix + "tabs-tab-inner"}, title, tail);
    };
    _this.scrollToActiveTab = function() {
      if (_this.activeTab && ["slide", "dropdown"].includes(_this.props.excessMode)) {
        var activeTabWH = getOffsetWH(_this.activeTab);
        var wrapperWH = getOffsetWH(_this.wrapper);
        var activeTabOffset = getOffsetLT(_this.activeTab);
        var wrapperOffset = getOffsetLT(_this.wrapper);
        var target = _this.offset;
        if (activeTabOffset >= wrapperOffset + wrapperWH || activeTabOffset + activeTabWH <= wrapperOffset) {
          _this.setOffset(_this.offset + wrapperOffset - activeTabOffset, true, true);
          return;
        }
        _this.setOffset(target, true, true);
      }
    };
    _this.onPrevClick = function() {
      var wrapperWH = getOffsetWH(_this.wrapper);
      _this.setOffset(_this.offset + wrapperWH, true, false);
    };
    _this.onNextClick = function() {
      var wrapperWH = getOffsetWH(_this.wrapper);
      _this.setOffset(_this.offset - wrapperWH, true, false);
    };
    _this.onSelectMenuItem = function(keys) {
      var _this$props = _this.props, onTriggerEvent = _this$props.onTriggerEvent, triggerType = _this$props.triggerType;
      onTriggerEvent(triggerType, keys[0]);
    };
    _this.onWindowResized = function() {
      if (_this.updateTimer) {
        clearTimeout(_this.updateTimer);
      }
      _this.updateTimer = setTimeout(function() {
        _this.setSlideBtn();
        _this.getDropdownItems(_this.props);
      }, 100);
    };
    _this.navRefHandler = function(ref) {
      _this.nav = findDOMNode(ref);
    };
    _this.wrapperRefHandler = function(ref) {
      _this.wrapper = ref;
    };
    _this.navbarRefHandler = function(ref) {
      _this.navbar = ref;
    };
    _this.activeTabRefHandler = function(ref) {
      _this.activeTab = ref;
    };
    _this.prevBtnHandler = function(ref) {
      _this.prevBtn = findDOMNode(ref);
    };
    _this.nextBtnHandler = function(ref) {
      _this.nextBtn = findDOMNode(ref);
    };
    _this.state = {
      showBtn: false,
      dropdownTabs: []
    };
    _this.offset = 0;
    return _this;
  }
  Nav2.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.animation) {
      this.initialSettings();
    }
    events.on(window, "resize", this.onWindowResized);
  };
  Nav2.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;
    clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(function() {
      _this2.scrollToActiveTab();
    }, 410);
    clearTimeout(this.slideTimer);
    this.slideTimer = setTimeout(function() {
      _this2.setSlideBtn();
    }, 410);
  };
  Nav2.prototype.componentWillUnmount = function componentWillUnmount() {
    events.off(window, "resize", this.onWindowResized);
  };
  Nav2.prototype.initialSettings = function initialSettings() {
    this.setSlideBtn();
    this.getDropdownItems(this.props);
  };
  Nav2.prototype.setOffset = function setOffset(target) {
    var checkSlideBtn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var setActive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var _props = this.props, tabPosition = _props.tabPosition, rtl = _props.rtl;
    var navWH = getOffsetWH(this.nav, tabPosition);
    var wrapperWH = getOffsetWH(this.wrapper);
    target = target >= 0 ? 0 : target;
    target = target <= wrapperWH - navWH && wrapperWH - navWH < 0 ? wrapperWH - navWH : target;
    var relativeOffset = target - this.offset;
    if (this.activeTab && this.props.excessMode === "slide" && setActive) {
      var activeTabWH = getOffsetWH(this.activeTab);
      var activeTabOffset = getOffsetLT(this.activeTab) + relativeOffset;
      var wrapperOffset = getOffsetLT(this.wrapper);
      target = this._adjustTarget({
        wrapperOffset,
        wrapperWH,
        activeTabWH,
        activeTabOffset,
        rtl,
        target
      });
    }
    var scaleRate = 1;
    if (this.nav && this.nav.offsetWidth) {
      scaleRate = getOffsetWH(this.nav) / this.nav.offsetWidth;
    }
    var _ov = target / scaleRate;
    var offsetValue = isNaN(_ov) ? target : _ov;
    if (this.offset !== target) {
      this.offset = target;
      var navOffset = {};
      var navStyle = this.nav.style;
      var canTransform = isTransformSupported(navStyle);
      if (tabPosition === "left" || tabPosition === "right") {
        navOffset = canTransform ? {
          value: "translate3d(0, " + offsetValue + "px, 0)"
        } : {
          name: "top",
          value: offsetValue + "px"
        };
      } else if (!this.props.rtl) {
        navOffset = canTransform ? {
          value: "translate3d(" + offsetValue + "px, 0, 0)"
        } : {
          name: "left",
          value: offsetValue + "px"
        };
      } else {
        navOffset = canTransform ? {
          value: "translate3d(" + -1 * offsetValue + "px, 0, 0)"
        } : {
          name: "right",
          value: offsetValue + "px"
        };
      }
      if (canTransform) {
        _extends(navStyle, {
          transform: navOffset.value,
          webkitTransform: navOffset.value,
          mozTransform: navOffset.value
        });
      } else {
        navStyle[navOffset.name] = navOffset.value;
      }
      if (checkSlideBtn) {
        this.setSlideBtn();
      }
    }
  };
  Nav2.prototype._adjustTarget = function _adjustTarget(_ref2) {
    var wrapperOffset = _ref2.wrapperOffset, wrapperWH = _ref2.wrapperWH, activeTabWH = _ref2.activeTabWH, activeTabOffset = _ref2.activeTabOffset, rtl = _ref2.rtl, target = _ref2.target;
    if (wrapperOffset + wrapperWH < activeTabOffset + activeTabWH && activeTabOffset < wrapperOffset + wrapperWH) {
      if (rtl) {
        target += activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH);
      } else {
        target -= activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH) + 1;
      }
      return target;
    }
    if (wrapperOffset < activeTabOffset + activeTabWH && activeTabOffset < wrapperOffset) {
      if (rtl) {
        target -= wrapperOffset - activeTabOffset + 1;
      } else {
        target += wrapperOffset - activeTabOffset;
      }
      return target;
    }
    return target;
  };
  Nav2.prototype._setBtnStyle = function _setBtnStyle(prev, next) {
    if (this.prevBtn && this.nextBtn) {
      var cls = "disabled";
      this.prevBtn.disabled = !prev;
      this.nextBtn.disabled = !next;
      if (prev) {
        dom.removeClass(this.prevBtn, cls);
      } else {
        dom.addClass(this.prevBtn, cls);
      }
      if (next) {
        dom.removeClass(this.nextBtn, cls);
      } else {
        dom.addClass(this.nextBtn, cls);
      }
    }
  };
  Nav2.prototype.setSlideBtn = function setSlideBtn() {
    var tabPosition = this.props.tabPosition;
    var navWH = getOffsetWH(this.nav, tabPosition);
    var wrapperWH = getOffsetWH(this.wrapper, tabPosition);
    var minOffset = wrapperWH - navWH;
    var next = void 0;
    var prev = void 0;
    if (minOffset >= 0 || navWH <= wrapperWH) {
      next = false;
      prev = false;
      this.setOffset(0, false);
    } else if (this.offset < 0 && this.offset <= minOffset) {
      prev = true;
      next = false;
    } else if (this.offset >= 0) {
      prev = false;
      next = true;
    } else {
      prev = true;
      next = true;
    }
    if ((prev || next) !== this.state.showBtn) {
      this.setState({
        showBtn: prev || next
      });
    } else {
      this._setBtnStyle(prev, next);
    }
  };
  Nav2.prototype.getDropdownItems = function getDropdownItems(_ref3) {
    var excessMode = _ref3.excessMode, tabs2 = _ref3.tabs;
    if (excessMode !== "dropdown") {
      return;
    }
    var wrapperWidth = this.wrapper.offsetWidth;
    var childNodes = this.nav.childNodes;
    var index = void 0;
    var tabsWidth = 0;
    for (index = 0; index < tabs2.length; index++) {
      tabsWidth += childNodes[index].offsetWidth;
      if (tabsWidth > wrapperWidth) {
        break;
      }
    }
    if (index === tabs2.length) {
      this.setState({
        dropdownTabs: []
      });
    } else {
      this.setState({
        dropdownTabs: tabs2
      });
    }
  };
  Nav2.prototype.renderTabList = function renderTabList(props) {
    var _this3 = this;
    var prefix = props.prefix, tabs2 = props.tabs, activeKey = props.activeKey, tabRender2 = props.tabRender;
    var tabTemplateFn = tabRender2 || this.defaultTabTemplateRender;
    var rst = [];
    React.Children.forEach(tabs2, function(child) {
      var _classnames;
      var _child$props = child.props, disabled = _child$props.disabled, className = _child$props.className, onClick2 = _child$props.onClick, onMouseEnter2 = _child$props.onMouseEnter, onMouseLeave2 = _child$props.onMouseLeave, style = _child$props.style;
      var active = activeKey === child.key;
      var cls = classnames((_classnames = {}, _classnames[prefix + "tabs-tab"] = true, _classnames.disabled = disabled, _classnames.active = active, _classnames), className);
      var events2 = {};
      if (!disabled) {
        events2 = {
          onClick: _this3.onNavItemClick.bind(_this3, child.key, onClick2),
          onMouseEnter: _this3.onNavItemMouseEnter.bind(_this3, child.key, onMouseEnter2),
          onMouseLeave: _this3.onNavItemMouseLeave.bind(_this3, child.key, onMouseLeave2)
        };
      }
      rst.push(React.createElement("li", _extends({
        role: "tab",
        key: child.key,
        ref: active ? _this3.activeTabRefHandler : null,
        "aria-hidden": disabled ? "true" : "false",
        "aria-selected": active ? "true" : "false",
        tabIndex: active ? 0 : -1,
        className: cls,
        style
      }, events2), tabTemplateFn(child.key, child.props)));
    });
    return rst;
  };
  Nav2.prototype.onNavItemClick = function onNavItemClick(key, callback2, e) {
    this.props.onTriggerEvent(triggerEvents.CLICK, key);
    if (callback2) {
      return callback2(key, e);
    }
  };
  Nav2.prototype.onNavItemMouseEnter = function onNavItemMouseEnter(key, callback2, e) {
    this.props.onTriggerEvent(triggerEvents.HOVER, key);
    if (callback2) {
      return callback2(key, e);
    }
  };
  Nav2.prototype.onNavItemMouseLeave = function onNavItemMouseLeave(key, callback2, e) {
    if (callback2) {
      return callback2(key, e);
    }
  };
  Nav2.prototype.getIcon = function getIcon(type) {
    var _props2 = this.props, prefix = _props2.prefix, icons = _props2.icons, rtl = _props2.rtl;
    var iconType = iconTypeMap[type];
    var icon = React.createElement(NextIcon, {type: iconType, rtl, className: prefix + "tab-icon-" + type});
    if (icons[type]) {
      icon = typeof icons[type] === "string" ? React.createElement(NextIcon, {rtl, type: icons[type]}) : icons[type];
    }
    return icon;
  };
  Nav2.prototype.renderDropdownTabs = function renderDropdownTabs() {
    var _this4 = this;
    var tabs2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (!tabs2.length) {
      return null;
    }
    var _props3 = this.props, prefix = _props3.prefix, activeKey = _props3.activeKey, triggerType = _props3.triggerType, popupProps = _props3.popupProps, rtl = _props3.rtl;
    var dropdownIcon = this.getIcon("dropdown");
    var trigger = React.createElement("button", {className: prefix + "tabs-btn-down"}, dropdownIcon);
    return React.createElement(Popup, _extends({
      rtl,
      triggerType,
      trigger,
      container: function container(target) {
        return target.parentNode;
      },
      className: prefix + "tabs-bar-popup"
    }, popupProps), React.createElement(NextMenu, {rtl, selectedKeys: [activeKey], onSelect: this.onSelectMenuItem, selectMode: "single"}, tabs2.map(function(tab) {
      var _tab$props = tab.props, disabled = _tab$props.disabled, onClick2 = _tab$props.onClick, onMouseEnter2 = _tab$props.onMouseEnter, onMouseLeave2 = _tab$props.onMouseLeave;
      var events2 = {};
      if (!disabled) {
        events2 = {
          onClick: _this4.onNavItemClick.bind(_this4, tab.key, onClick2),
          onMouseEnter: _this4.onNavItemMouseEnter.bind(_this4, tab.key, onMouseEnter2),
          onMouseLeave: _this4.onNavItemMouseLeave.bind(_this4, tab.key, onMouseLeave2)
        };
      }
      return React.createElement(NextMenu.Item, _extends({key: tab.key}, events2), tab.props.title);
    })));
  };
  Nav2.prototype.render = function render() {
    var _classnames2;
    var _props4 = this.props, prefix = _props4.prefix, tabPosition = _props4.tabPosition, excessMode = _props4.excessMode, extra = _props4.extra, onKeyDown = _props4.onKeyDown, animation = _props4.animation, style = _props4.style, className = _props4.className, rtl = _props4.rtl;
    var state = this.state;
    var nextButton = void 0;
    var prevButton = void 0;
    var restButton = void 0;
    var showNextPrev = state.showBtn;
    if (excessMode === "dropdown" && showNextPrev && state.dropdownTabs.length) {
      restButton = this.renderDropdownTabs(state.dropdownTabs);
      prevButton = null;
      nextButton = null;
    } else if (showNextPrev) {
      var prevIcon = this.getIcon("prev");
      prevButton = React.createElement("button", {onClick: this.onPrevClick, className: prefix + "tabs-btn-prev", ref: this.prevBtnHandler}, prevIcon);
      var nextIcon = this.getIcon("next");
      nextButton = React.createElement("button", {onClick: this.onNextClick, className: prefix + "tabs-btn-next", ref: this.nextBtnHandler}, nextIcon);
      restButton = null;
    } else {
      nextButton = null;
      prevButton = null;
      restButton = null;
    }
    var containerCls = classnames((_classnames2 = {}, _classnames2[prefix + "tabs-nav-container"] = true, _classnames2[prefix + "tabs-nav-container-scrolling"] = showNextPrev, _classnames2));
    var navCls = prefix + "tabs-nav";
    var tabList = this.renderTabList(this.props);
    var container = React.createElement("div", {className: containerCls, onKeyDown, key: "nav-container"}, React.createElement("div", {className: prefix + "tabs-nav-wrap", ref: this.wrapperRefHandler}, React.createElement("div", {className: prefix + "tabs-nav-scroll"}, animation ? React.createElement(Animate, {
      role: "tablist",
      "aria-multiselectable": false,
      component: "ul",
      className: navCls,
      animation: navCls,
      singleMode: false,
      ref: this.navRefHandler,
      afterAppear: this.initialSettings.bind(this)
    }, tabList) : React.createElement("ul", {role: "tablist", className: navCls, ref: this.navRefHandler}, tabList))), prevButton, nextButton, restButton);
    var navChildren = [container];
    if (extra) {
      var extraProps = {
        className: prefix + "tabs-nav-extra",
        key: "nav-extra"
      };
      if (tabPosition === "top" || tabPosition === "bottom") {
        var _style = rtl ? floatLeft : floatRight;
        navChildren.unshift(React.createElement("div", _extends({}, extraProps, {style: _style}), extra));
      } else {
        navChildren.push(React.createElement("div", extraProps, extra));
      }
    }
    var navbarCls = classnames(prefix + "tabs-bar", className);
    return React.createElement("div", {className: navbarCls, style, ref: this.navbarRefHandler}, navChildren);
  };
  return Nav2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  animation: propTypes.bool,
  activeKey: propTypes.oneOfType([propTypes.string, propTypes.number]),
  excessMode: propTypes.string,
  extra: propTypes.any,
  tabs: propTypes.oneOfType([propTypes.array, propTypes.object]),
  tabPosition: propTypes.string,
  tabRender: propTypes.func,
  triggerType: propTypes.string,
  popupProps: propTypes.object,
  onTriggerEvent: propTypes.func,
  onKeyDown: propTypes.func,
  onClose: propTypes.func,
  style: propTypes.object,
  className: propTypes.string,
  locale: propTypes.object,
  icons: propTypes.object
}, _temp);
Nav.displayName = "Nav";
var _class$1, _temp$1;
var TabContent = (_temp$1 = _class$1 = function(_PureComponent) {
  _inherits(TabContent2, _PureComponent);
  function TabContent2() {
    _classCallCheck(this, TabContent2);
    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }
  TabContent2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, activeKey = _props.activeKey, lazyLoad = _props.lazyLoad, unmountInactiveTabs = _props.unmountInactiveTabs, children = _props.children, className = _props.className, others = _objectWithoutProperties(_props, ["prefix", "activeKey", "lazyLoad", "unmountInactiveTabs", "children", "className"]);
    var formatChildren = [];
    React.Children.forEach(children, function(child) {
      var active = activeKey == child.key;
      formatChildren.push(React.cloneElement(child, {
        prefix,
        active,
        lazyLoad,
        unmountInactiveTabs
      }));
    });
    var classNames = classnames((_classnames = {}, _classnames[prefix + "tabs-content"] = true, _classnames), className);
    return React.createElement("div", _extends({}, others, {className: classNames}), formatChildren);
  };
  return TabContent2;
}(PureComponent), _class$1.propTypes = {
  prefix: propTypes.string,
  activeKey: propTypes.oneOfType([propTypes.string, propTypes.number]),
  lazyLoad: propTypes.bool,
  children: propTypes.any
}, _temp$1);
var _class$2, _temp$2;
var noop = function noop2() {
};
var Tab = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Tab2, _Component);
  function Tab2(props, context) {
    _classCallCheck(this, Tab2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    _this.handleTriggerEvent = function(eventType, key) {
      var _this$props = _this.props, triggerType = _this$props.triggerType, onClick2 = _this$props.onClick, onChange2 = _this$props.onChange;
      if (triggerType === eventType) {
        onClick2(key);
        _this.setActiveKey(key);
        if (_this.state.activeKey !== key) {
          onChange2(key);
        }
      }
    };
    _this.onNavKeyDown = function(e) {
      var keyCode = e.keyCode;
      var disableKeyboard = _this.props.disableKeyboard;
      if (disableKeyboard) {
        return;
      }
      if (keyCode >= KEYCODE.LEFT && keyCode <= KEYCODE.DOWN) {
        e.preventDefault();
      }
      var newKey = void 0;
      if (keyCode === KEYCODE.RIGHT || keyCode === KEYCODE.DOWN) {
        newKey = _this.getNextActiveKey(true);
        _this.handleTriggerEvent(_this.props.triggerType, newKey);
      } else if (keyCode === KEYCODE.LEFT || keyCode === KEYCODE.UP) {
        newKey = _this.getNextActiveKey(false);
        _this.handleTriggerEvent(_this.props.triggerType, newKey);
      }
    };
    _this.state = {
      activeKey: _this.getDefaultActiveKey(props)
    };
    return _this;
  }
  Tab2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.activeKey !== void 0 && state.activeKey !== "" + props.activeKey) {
      return {
        activeKey: "" + props.activeKey
      };
    }
    return {};
  };
  Tab2.prototype.getDefaultActiveKey = function getDefaultActiveKey(props) {
    var activeKey = props.activeKey === void 0 ? props.defaultActiveKey : props.activeKey;
    if (activeKey === void 0) {
      React.Children.forEach(props.children, function(child, index) {
        if (activeKey !== void 0)
          return;
        if (React.isValidElement(child)) {
          if (!child.props.disabled) {
            activeKey = child.key || index;
          }
        }
      });
    }
    return "" + activeKey;
  };
  Tab2.prototype.getNextActiveKey = function getNextActiveKey(isNext) {
    var _this2 = this;
    var children = [];
    React.Children.forEach(this.props.children, function(child) {
      if (React.isValidElement(child)) {
        if (!child.props.disabled) {
          if (isNext) {
            children.push(child);
          } else {
            children.unshift(child);
          }
        }
      }
    });
    var length = children.length;
    var key = length && children[0].key;
    children.forEach(function(child, i) {
      if (child.key === _this2.state.activeKey) {
        if (i === length - 1) {
          key = children[0].key;
        } else {
          key = children[i + 1].key;
        }
      }
    });
    return key;
  };
  Tab2.prototype.setActiveKey = function setActiveKey(key) {
    var activeKey = this.state.activeKey;
    if (key === activeKey || "activeKey" in this.props) {
      return;
    }
    this.setState({
      activeKey: key
    });
  };
  Tab2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, animation = _props.animation, shape = _props.shape, size = _props.size, extra = _props.extra, excessMode = _props.excessMode, tabPosition = _props.tabPosition, tabRender2 = _props.tabRender, triggerType = _props.triggerType, lazyLoad = _props.lazyLoad, unmountInactiveTabs = _props.unmountInactiveTabs, popupProps = _props.popupProps, navStyle = _props.navStyle, navClassName = _props.navClassName, contentStyle = _props.contentStyle, contentClassName = _props.contentClassName, className = _props.className, onClose = _props.onClose, children = _props.children, rtl = _props.rtl, device = _props.device, locale = _props.locale, icons = _props.icons, others = _objectWithoutProperties(_props, ["prefix", "animation", "shape", "size", "extra", "excessMode", "tabPosition", "tabRender", "triggerType", "lazyLoad", "unmountInactiveTabs", "popupProps", "navStyle", "navClassName", "contentStyle", "contentClassName", "className", "onClose", "children", "rtl", "device", "locale", "icons"]);
    var activeKey = this.state.activeKey;
    var tabs2 = toArray(children);
    var isTouchable = ["phone", "tablet"].indexOf(device) !== -1;
    var newPosition = tabPosition;
    if (rtl && ["left", "right"].indexOf(tabPosition) >= 0) {
      newPosition = tabPosition === "left" ? "right" : "left";
    }
    var classNames = classnames((_classnames = {}, _classnames[prefix + "tabs"] = true, _classnames[prefix + "tabs-" + shape] = shape, _classnames[prefix + "tabs-vertical"] = shape === "wrapped" && ["left", "right"].indexOf(tabPosition) >= 0, _classnames[prefix + "tabs-scrollable"] = isTouchable, _classnames[prefix + "tabs-" + newPosition] = shape === "wrapped", _classnames["" + (prefix + size)] = size, _classnames), className);
    var navProps = {
      prefix,
      rtl,
      animation,
      activeKey,
      excessMode: isTouchable ? "slide" : excessMode,
      extra,
      tabs: tabs2,
      tabPosition,
      tabRender: tabRender2,
      triggerType,
      popupProps,
      onClose,
      onTriggerEvent: this.handleTriggerEvent,
      onKeyDown: this.onNavKeyDown,
      style: navStyle,
      className: navClassName,
      locale,
      icons
    };
    var contentProps = {
      prefix,
      activeKey,
      lazyLoad,
      unmountInactiveTabs,
      style: contentStyle,
      className: contentClassName
    };
    var tabChildren = [React.createElement(Nav, _extends({key: "tab-nav"}, navProps)), React.createElement(TabContent, _extends({key: "tab-content"}, contentProps), tabs2)];
    if (tabPosition === "bottom") {
      tabChildren.reverse();
    }
    return React.createElement("div", _extends({
      dir: rtl ? "rtl" : void 0,
      className: classNames
    }, obj.pickOthers(Tab2.propTypes, others)), tabChildren);
  };
  return Tab2;
}(Component), _class$2.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  device: propTypes.oneOf(["tablet", "desktop", "phone"]),
  activeKey: propTypes.oneOfType([propTypes.number, propTypes.string]),
  defaultActiveKey: propTypes.oneOfType([propTypes.number, propTypes.string]),
  shape: propTypes.oneOf(["pure", "wrapped", "text", "capsule"]),
  animation: propTypes.bool,
  excessMode: propTypes.oneOf(["slide", "dropdown"]),
  tabPosition: propTypes.oneOf(["top", "bottom", "left", "right"]),
  size: propTypes.oneOf(["small", "medium"]),
  triggerType: propTypes.oneOf(["hover", "click"]),
  lazyLoad: propTypes.bool,
  unmountInactiveTabs: propTypes.bool,
  navStyle: propTypes.object,
  navClassName: propTypes.string,
  contentStyle: propTypes.object,
  contentClassName: propTypes.string,
  extra: propTypes.node,
  disableKeyboard: propTypes.bool,
  onClick: propTypes.func,
  onChange: propTypes.func,
  onClose: propTypes.func,
  tabRender: propTypes.func,
  popupProps: propTypes.object,
  children: propTypes.any,
  className: propTypes.string,
  locale: propTypes.object,
  icons: propTypes.shape({
    prev: propTypes.oneOfType([propTypes.node, propTypes.string]),
    next: propTypes.oneOfType([propTypes.node, propTypes.string]),
    dropdown: propTypes.oneOfType([propTypes.node, propTypes.string])
  })
}, _class$2.defaultProps = {
  prefix: "next-",
  shape: "pure",
  size: "medium",
  animation: true,
  tabPosition: "top",
  excessMode: "slide",
  triggerType: "click",
  lazyLoad: true,
  unmountInactiveTabs: false,
  disableKeyboard: false,
  onClick: noop,
  onChange: noop,
  onClose: noop,
  locale: zhCN.Tab,
  icons: {}
}, _temp$2);
Tab.displayName = "Tab";
var Tab$1 = polyfill(Tab);
var _class$3, _temp$3;
var TabItem = (_temp$3 = _class$3 = function(_React$Component) {
  _inherits(TabItem2, _React$Component);
  function TabItem2() {
    _classCallCheck(this, TabItem2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  TabItem2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, active = _props.active, lazyLoad = _props.lazyLoad, unmountInactiveTabs = _props.unmountInactiveTabs, children = _props.children;
    this._actived = this._actived || active;
    if (lazyLoad && !this._actived) {
      return null;
    }
    if (unmountInactiveTabs && !active) {
      return null;
    }
    var cls = classnames((_classnames = {}, _classnames[prefix + "tabs-tabpane"] = true, _classnames["" + (active ? "active" : "hidden")] = true, _classnames));
    return React.createElement("div", {
      role: "tabpanel",
      "aria-hidden": active ? "false" : "true",
      className: cls
    }, children);
  };
  return TabItem2;
}(React.Component), _class$3.propTypes = {
  prefix: propTypes.string,
  title: propTypes.node,
  closeable: propTypes.bool,
  disabled: propTypes.bool,
  active: propTypes.bool,
  lazyLoad: propTypes.bool,
  unmountInactiveTabs: propTypes.bool,
  children: propTypes.any
}, _class$3.defaultProps = {
  prefix: "next-",
  closeable: false
}, _temp$3);
TabItem.displayName = "TabItem";
var Item = polyfill(TabItem);
Tab$1.Item = Item;
Tab$1.TabPane = NextConfigProvider.config(Item, {
  transform: function transform(props, deprecated) {
    deprecated("Tab.TabPane", "Tab.Item", "Tab");
    return props;
  }
});
var NextTab = NextConfigProvider.config(Tab$1, {
  transform: function transform2(props, deprecated) {
    if ("type" in props) {
      deprecated("type", "shape", "Tab");
      var _props = props, type = _props.type, others = _objectWithoutProperties(_props, ["type"]);
      props = _extends({shape: type}, others);
    }
    if ("resDirection" in props) {
      var _props2 = props, resDirection = _props2.resDirection, _others = _objectWithoutProperties(_props2, ["resDirection"]);
      var excessMode = void 0;
      if (resDirection === "horizontal") {
        deprecated("resDirection=horizontal", "excessMode=slide", "Tab");
        excessMode = "slide";
      } else if (resDirection === "vertical") {
        deprecated("resDirection=vertical", "excessMode=dropdown", "Tab");
        excessMode = "dropdown";
      }
      props = _extends({excessMode}, _others);
    }
    if ("tabBarExtraContent" in props) {
      deprecated("tabBarExtraContent", "extra", "Tab");
      var _props3 = props, tabBarExtraContent = _props3.tabBarExtraContent, _others2 = _objectWithoutProperties(_props3, ["tabBarExtraContent"]);
      props = _extends({extra: tabBarExtraContent}, _others2);
    }
    return props;
  }
});
function DemoComponent() {
  const content = /* @__PURE__ */ createElement(NextTab, null, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Home",
    key: "1"
  }, "Home content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Documentation",
    key: "2"
  }, "Doc content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Help",
    key: "3"
  }, "Help Content"));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = qe.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const panes = [
  {tab: "Mail", key: 1, closeable: false},
  {tab: "Message", key: 2, closeable: true},
  {tab: "Setting", key: 3, closeable: true},
  {tab: "Unread", key: 4, closeable: true}
];
class CloseableTab extends Component {
  constructor(props) {
    super(props);
    this.onClose = (targetKey) => {
      this.remove(targetKey);
    };
    this.onChange = (activeKey) => {
      this.setState({activeKey});
    };
    this.addTabpane = () => {
      this.setState((prevState) => {
        const {panes: panes2} = prevState;
        panes2.push({tab: "new tab", key: Math.random(), closeable: true});
        return {panes: panes2};
      });
    };
    this.state = {
      panes,
      activeKey: panes[0].key
    };
  }
  remove(targetKey) {
    let activeKey = this.state.activeKey;
    const panes2 = [];
    this.state.panes.forEach((pane) => {
      if (pane.key != targetKey) {
        panes2.push(pane);
      }
    });
    if (targetKey == activeKey) {
      activeKey = panes2[0].key;
    }
    this.setState({panes: panes2, activeKey});
  }
  render() {
    const state = this.state;
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Button, {
      onClick: this.addTabpane,
      size: "large",
      type: "primary"
    }, /* @__PURE__ */ createElement(NextIcon, {
      type: "add"
    }), " New Tab"), /* @__PURE__ */ createElement(NextTab, {
      shape: "wrapped",
      activeKey: state.activeKey,
      onChange: this.onChange,
      onClose: this.onClose,
      className: "custom-tab"
    }, state.panes.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
      title: item.tab,
      key: item.key,
      closeable: item.closeable
    }, item.tab, " content"))));
  }
}
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement(CloseableTab, null);
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = qe.div`
  .custom-tab {
    margin-top: 14px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const panes$1 = [
  {
    tab: "Todo Tasks",
    key: 0
  },
  {
    tab: "Finished Tasks",
    key: 1
  },
  {
    tab: "Unread Messages",
    key: 2
  },
  {
    tab: "Past Messages",
    key: 3
  },
  {
    tab: "All Messages",
    key: 4
  }
];
const detachedContentStyle = {
  border: "1px solid #DCDEE3",
  padding: "20px"
};
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "fusion-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Customize with contentStyle or contentClassName"), /* @__PURE__ */ createElement(NextTab, {
    shape: "wrapped",
    contentStyle: detachedContentStyle
  }, panes$1.map((pane) => /* @__PURE__ */ createElement(NextTab.Item, {
    title: pane.tab,
    key: pane.key
  }, pane.tab))), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Setting className and style in Tab.Item"), /* @__PURE__ */ createElement(NextTab, {
    shape: "wrapped",
    navStyle: {background: "#DEE8FF"}
  }, panes$1.map((pane) => {
    return /* @__PURE__ */ createElement(NextTab.Item, {
      title: pane.tab,
      key: pane.key,
      className: "custom-tab-item",
      style: {background: "#FFF"}
    }, pane.tab);
  })), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Tabs with equal width"), /* @__PURE__ */ createElement(NextTab, {
    shape: "capsule"
  }, panes$1.map((pane) => /* @__PURE__ */ createElement(NextTab.Item, {
    title: pane.tab,
    key: pane.key,
    className: "justify-tabs-tab"
  }, pane.tab))));
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = qe.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-content {
    padding: 15px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }

  .custom-tab-item {
    margin-right: -1px !important;
  }

  .justify-tabs-tab {
    width: 140px;
    text-align: center;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function CustomTabItem({title, desc}) {
  return /* @__PURE__ */ createElement("div", {
    className: "custom-tab-item"
  }, /* @__PURE__ */ createElement("div", {
    className: "tab-title"
  }, title), /* @__PURE__ */ createElement("div", {
    className: "tab-desc"
  }, desc));
}
const panes$2 = [
  {key: "e-checking", title: "Alipay", desc: "The fee to be paid is $15"},
  {key: "brand-card", title: "Bank Card", desc: "The fee to be paid is $17"}
];
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(NextTab, {
    shape: "wrapped",
    tabRender: (key, props) => /* @__PURE__ */ createElement(CustomTabItem, {
      key,
      ...props
    })
  }, panes$2.map((pane) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: pane.key,
    ...pane,
    tabStyle: {height: "60px"}
  }, pane.desc)));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = qe.div`
  .custom-tab-item {
    padding: 10px;
  }

  .tab-title {
    font-size: 20px;
  }
  .tab-desc {
    margin: 10px 0 0 0;
    font-size: 12px;
  }
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement(NextTab, {
    disableKeyboard: true
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Home",
    key: "1"
  }, "Home content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Documentation",
    key: "2"
  }, "Doc content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Help",
    key: "3"
  }, "Help Content"));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = qe.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  const content = /* @__PURE__ */ createElement(NextTab, null, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 1",
    disabled: true,
    key: "1"
  }, "Tab 1 content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 2",
    key: "2"
  }, "Tab 2 content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 3",
    key: "3"
  }, "Tab 3 content"));
  return /* @__PURE__ */ createElement(Style$5, null, content);
}
const Style$5 = qe.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
class EditableTabPane extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = (e) => {
      const {keyCode} = e;
      if (keyCode > 36 && keyCode < 41) {
        e.stopPropagation();
      }
    };
    this.onBlur = (e) => {
      this.setState({
        editable: false,
        tabTitle: e.target.value
      });
    };
    this.onDblClick = () => {
      this.setState({
        editable: true
      });
    };
    this.state = {
      tabTitle: props.defaultTitle,
      editable: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultTitle !== this.state.tabTitle) {
      this.setState({
        tabTitle: nextProps.defaultTitle
      });
    }
  }
  render() {
    const {tabTitle, editable} = this.state;
    if (editable) {
      return /* @__PURE__ */ createElement(NextInput, {
        defaultValue: tabTitle,
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur
      });
    }
    return /* @__PURE__ */ createElement("span", {
      onDoubleClick: this.onDblClick
    }, tabTitle);
  }
}
const tabRender = (key, {title}) => /* @__PURE__ */ createElement("div", {
  key,
  className: "editable-tab-wrapper"
}, /* @__PURE__ */ createElement(EditableTabPane, {
  defaultTitle: title
}));
function DemoComponent$6() {
  const content = /* @__PURE__ */ createElement(NextTab, {
    defaultActiveKey: "1",
    tabRender
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Double Click To Edit Me",
    key: "1"
  }, "Editable tab"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Double Click To Edit Me",
    key: "2"
  }, "Editable tab"));
  return /* @__PURE__ */ createElement(Style$6, null, content);
}
const Style$6 = qe.div`
  .editable-tab-wrapper {
    padding: 10px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const tabs = [
  {tab: "Home", key: 1},
  {tab: "Documnet", key: 2},
  {tab: "Setting", key: 3},
  {tab: "Help", key: 4},
  {tab: "Admin", key: 5},
  {tab: "More 1", key: 6},
  {tab: "More 2", key: 7},
  {tab: "More 3", key: 8},
  {tab: "More 4", key: 9},
  {tab: "More 5", key: 10},
  {tab: "More 6", key: 11},
  {tab: "More 7", key: 12},
  {tab: "More 8", key: 13},
  {tab: "More 9", key: 14},
  {tab: "More 10", key: 15},
  {tab: "More 11", key: 16}
];
function onClick(key) {
  console.log(key);
}
function DemoComponent$7() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "fusion-demo",
    style: {maxWidth: "520px"}
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Dropdown mode"), /* @__PURE__ */ createElement(NextTab, {
    excessMode: "dropdown"
  }, tabs.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab,
    onClick
  }, item.tab, " content, content, content"))), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Slide mode"), /* @__PURE__ */ createElement(NextTab, {
    excessMode: "slide"
  }, tabs.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab,
    onClick
  }, item.tab, " content, content, content"))));
  return /* @__PURE__ */ createElement(Style$7, null, content);
}
const Style$7 = qe.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
function handleChange(key) {
  console.log(key);
}
function handleClick() {
  console.log("hello world");
}
const extraContent = /* @__PURE__ */ createElement(Button, {
  type: "primary",
  onClick: handleClick
}, "Hello world");
function DemoComponent$8() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "fusion-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Extra in Horizontal"), /* @__PURE__ */ createElement(NextTab, {
    shape: "wrapped",
    onChange: handleChange,
    extra: extraContent
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 1",
    key: "1"
  }, "Tab 1 Content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 2",
    key: "2"
  }, "Tab 2 Content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 3",
    key: "3"
  }, "Tab 3 Content")), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Extra in Vertical"), /* @__PURE__ */ createElement(NextTab, {
    shape: "wrapped",
    tabPosition: "left",
    onChange: handleChange,
    extra: extraContent,
    contentClassName: "custom-tab-content"
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 1",
    key: "1"
  }, "Tab 1 Content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 2",
    key: "2"
  }, "Tab 2 Content"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 3",
    key: "3"
  }, "Tab 3 Content")));
  return /* @__PURE__ */ createElement(Style$8, null, content);
}
const Style$8 = qe.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-tab-content {
    min-height: 150px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$8
});
const tabs$1 = [
  {tab: "Home", key: 0, content: "This is home page"},
  {tab: "Document", key: 1, content: "This is document page"},
  {tab: "API", key: 2, content: "This is api page"}
];
function DemoComponent$9() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", null, "Render all tab contents"), /* @__PURE__ */ createElement(NextTab, {
    lazyLoad: false
  }, tabs$1.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab
  }, item.content))), /* @__PURE__ */ createElement("div", null, "Unmount inactive tabs"), /* @__PURE__ */ createElement(NextTab, {
    unmountInactiveTabs: true
  }, tabs$1.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab
  }, item.content))));
  return /* @__PURE__ */ createElement(Style$9, null, content);
}
const Style$9 = qe.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$9
});
function callback(key) {
  console.log(key);
}
function DemoComponent$a() {
  const content = /* @__PURE__ */ createElement(NextTab, {
    onChange: callback,
    shape: "wrapped"
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 1",
    key: "1"
  }, /* @__PURE__ */ createElement(NextTab, {
    shape: "wrapped"
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "1-1",
    key: "11"
  }, "1-1"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "1-2",
    key: "12"
  }, "1-2"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "1-3",
    key: "13"
  }, "1-3"))), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 2",
    key: "2"
  }, /* @__PURE__ */ createElement(NextTab, {
    shape: "pure"
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "2-1",
    key: "21"
  }, "2-1"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "2-2",
    key: "22"
  }, "2-2"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "3-3",
    key: "23"
  }, "2-3"))), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 3",
    key: "3"
  }, /* @__PURE__ */ createElement(NextTab, {
    shape: "capsule"
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "3-1",
    key: "31"
  }, "3-1"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "3-2",
    key: "32"
  }, "3-2"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "3-3",
    key: "33"
  }, "3-3"))), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "Tab 4",
    key: "4"
  }, /* @__PURE__ */ createElement(NextTab, {
    shape: "text"
  }, /* @__PURE__ */ createElement(NextTab.Item, {
    title: "4-1",
    key: "41"
  }, "4-1"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "4-2",
    key: "42"
  }, "4-2"), /* @__PURE__ */ createElement(NextTab.Item, {
    title: "4-3",
    key: "43"
  }, "4-3"))));
  return /* @__PURE__ */ createElement(Style$a, null, content);
}
const Style$a = qe.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$a
});
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      position: "top"
    };
    this.changePosition = (val) => {
      this.setState({
        position: val
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Select, {
      onChange: this.changePosition,
      placeholder: "Choose Positon of Tab"
    }, ["top", "bottom", "left", "right"].map((item) => /* @__PURE__ */ createElement(Select.Option, {
      value: item,
      key: item
    }, item))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextTab, {
      tabPosition: this.state.position,
      shape: "wrapped",
      contentClassName: "custom-tab-content"
    }, /* @__PURE__ */ createElement(NextTab.Item, {
      title: "Tab 1",
      key: "1"
    }, "Tab 1 Content"), /* @__PURE__ */ createElement(NextTab.Item, {
      title: "Tab 2",
      key: "2"
    }, "Tab 2 Content"), /* @__PURE__ */ createElement(NextTab.Item, {
      title: "Tab 3",
      key: "3"
    }, "Tab 3 Content")));
  }
}
function DemoComponent$b() {
  const content = /* @__PURE__ */ createElement(Demo, null);
  return /* @__PURE__ */ createElement(Style$b, null, content);
}
const Style$b = qe.div`
  .custom-tab-content {
    min-height: 50px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$b
});
function onChange(key) {
  console.log(key);
}
const tabs$2 = [
  {tab: "Home", key: "home", content: "This is home page"},
  {tab: "Document", key: "doc", content: "This is document page"},
  {tab: "API", key: "api", content: "This is api page"},
  {tab: "Repo", key: "repo", content: "This ia repo link"}
];
const shapes = ["pure", "wrapped", "text", "capsule"];
function DemoComponent$c() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "fusion-demo"
  }, shapes.map((shape) => /* @__PURE__ */ createElement("div", {
    key: shape,
    className: "fusion-demo-item"
  }, /* @__PURE__ */ createElement(NextTab, {
    shape,
    onChange
  }, tabs$2.map((tab) => /* @__PURE__ */ createElement(NextTab.Item, {
    title: tab.tab,
    key: tab.key
  }, tab.content))))));
  return /* @__PURE__ */ createElement(Style$c, null, content);
}
const Style$c = qe.div`
  .fusion-demo-item {
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$c
});
const tabs$3 = [
  {tab: "Home", key: "home", content: "This is home page"},
  {tab: "Document", key: "doc", content: "This is document page"},
  {tab: "API", key: "api", content: "This is api page"}
];
function DemoComponent$d() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextTab, {
    size: "small"
  }, tabs$3.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab
  }, item.content))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextTab, {
    size: "small",
    shape: "wrapped"
  }, tabs$3.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab
  }, item.content))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextTab, {
    size: "small",
    shape: "text"
  }, tabs$3.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab
  }, item.content))), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextTab, {
    size: "small",
    shape: "capsule"
  }, tabs$3.map((item) => /* @__PURE__ */ createElement(NextTab.TabPane, {
    key: item.key,
    title: item.tab
  }, item.content))));
  return /* @__PURE__ */ createElement(Style$d, null, content);
}
const Style$d = qe.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$d
});
const {Row, Col} = Grid;
const tabs$4 = function(length) {
  const arr = [];
  for (let i = 1; i < length; i++) {
    arr.push({tab: `tab ${i}`, key: i, content: `tab ${i} content`});
  }
  return arr;
}(15);
function DemoComponent$e() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "custom-wrapper"
  }, /* @__PURE__ */ createElement(Row, {
    className: "custom-row"
  }, /* @__PURE__ */ createElement(Col, {
    fixedSpan: "12",
    className: "custom-col-sidebar"
  }, "Sidebar"), /* @__PURE__ */ createElement(Col, {
    className: "custom-col-content"
  }, /* @__PURE__ */ createElement(NextTab, null, tabs$4.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab
  }, item.content))))));
  return /* @__PURE__ */ createElement(Style$e, null, content);
}
const Style$e = qe.div`
  .custom-row {
    border: 1px solid #ccc;
  }

  .custom-col-sidebar {
    border-right: 1px solid #ccc;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }

  .custom-col-content {
    overflow: hidden;
  }
`;
var m14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$e
});
const tabs$5 = [
  {tab: "Home", key: 0, content: "This is home page"},
  {tab: "Document", key: 1, content: "This is document page"},
  {tab: "API", key: 2, content: "This is api page"}
];
function onChange$1(key) {
  console.log("change", key);
}
function handleClick$1(key) {
  console.log("click", key);
}
function onMouseEnter(key, e) {
  console.log("enter", e.target, key);
}
function onMouseLeave(key, e) {
  console.log("leave", e.target, key);
}
function DemoComponent$f() {
  const content = /* @__PURE__ */ createElement("div", {
    className: "fusion-demo"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Click to trigger change"), /* @__PURE__ */ createElement(NextTab, {
    triggerType: "click",
    onChange: onChange$1
  }, tabs$5.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab,
    onClick: handleClick$1
  }, item.content))), /* @__PURE__ */ createElement("div", {
    className: "demo-item-title"
  }, "Hover to trigger change"), /* @__PURE__ */ createElement(NextTab, {
    triggerType: "hover",
    onChange: onChange$1
  }, tabs$5.map((item) => /* @__PURE__ */ createElement(NextTab.Item, {
    key: item.key,
    title: item.tab,
    onClick: handleClick$1,
    onMouseEnter,
    onMouseLeave
  }, item.content))));
  return /* @__PURE__ */ createElement(Style$f, null, content);
}
const Style$f = qe.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;
var m15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$f
});
const modules = {};
modules["_basic"] = m0;
modules["_closable"] = m1;
modules["_custom-style"] = m2;
modules["_custom-tab"] = m3;
modules["_disable-keyboard"] = m4;
modules["_disabled"] = m5;
modules["_editable-tab"] = m6;
modules["_excess-mode"] = m7;
modules["_extra"] = m8;
modules["_lazy-load"] = m9;
modules["_nested"] = m10;
modules["_position"] = m11;
modules["_shape"] = m12;
modules["_size"] = m13;
modules["_tab-in-grid"] = m14;
modules["_trigger-type"] = m15;
export default modules;

import {o as obj, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, s as NextIcon, g as _extends, C as Component, i as propTypes, z as zhCN, x as NextOverlay, k as _objectWithoutProperties, N as NextConfigProvider, c as createElement, B as Radio, S as Select} from "./index.91461bfc.js";
import "./2de87bf0.js";
import {e as exported} from "./3fc9f385.js";
import {H as He} from "./0ad0a923.js";
var _class, _temp;
var noop = function noop2() {
};
var pickOthers = obj.pickOthers;
var Inner = (_temp = _class = function(_Component) {
  _inherits(Inner2, _Component);
  function Inner2() {
    _classCallCheck(this, Inner2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Inner2.prototype.renderHeader = function renderHeader() {
    var _cx;
    var _props = this.props, prefix = _props.prefix, title = _props.title, headerStyle = _props.headerStyle;
    var closeLink = this.renderCloseLink();
    var headerCls = classnames((_cx = {}, _cx[prefix + "drawer-header"] = true, _cx[prefix + "drawer-no-title"] = !title, _cx));
    return React.createElement("div", {
      className: headerCls,
      style: headerStyle,
      role: "heading",
      "aria-level": "1"
    }, title, closeLink);
  };
  Inner2.prototype.renderBody = function renderBody() {
    var _props2 = this.props, prefix = _props2.prefix, children = _props2.children, bodyStyle = _props2.bodyStyle;
    if (children) {
      return React.createElement("div", {className: prefix + "drawer-body", style: bodyStyle}, children);
    }
    return null;
  };
  Inner2.prototype.renderCloseLink = function renderCloseLink() {
    var _props3 = this.props, prefix = _props3.prefix, closeable = _props3.closeable, onClose = _props3.onClose, locale = _props3.locale;
    if (closeable) {
      return React.createElement("a", {
        role: "button",
        "aria-label": locale.close,
        className: prefix + "drawer-close",
        onClick: onClose
      }, React.createElement(NextIcon, {
        className: prefix + "drawer-close-icon",
        type: "close"
      }));
    }
    return null;
  };
  Inner2.prototype.render = function render() {
    var _cx2;
    var _props4 = this.props, prefix = _props4.prefix, className = _props4.className, closeable = _props4.closeable, placement = _props4.placement, role = _props4.role, rtl = _props4.rtl;
    var others = pickOthers(Object.keys(Inner2.propTypes), this.props);
    var newClassName = classnames((_cx2 = {}, _cx2[prefix + "drawer"] = true, _cx2[prefix + "drawer-" + placement] = true, _cx2[prefix + "closeable"] = closeable, _cx2[className] = !!className, _cx2));
    var ariaProps = {
      role,
      "aria-modal": "true"
    };
    var header = this.renderHeader();
    var body = this.renderBody();
    return React.createElement("div", _extends({}, ariaProps, {
      className: newClassName
    }, others, {
      dir: rtl ? "rtl" : void 0
    }), React.createElement("div", {style: {height: "100%", overflow: "auto"}}, header, body));
  };
  return Inner2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  closeable: propTypes.bool,
  role: propTypes.string,
  title: propTypes.node,
  placement: propTypes.oneOf(["top", "right", "bottom", "left"]),
  rtl: propTypes.bool,
  onClose: propTypes.func,
  locale: propTypes.object,
  headerStyle: propTypes.object,
  bodyStyle: propTypes.object,
  afterClose: propTypes.func,
  beforeOpen: propTypes.func,
  beforeClose: propTypes.func,
  cache: propTypes.bool,
  shouldUpdatePosition: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  closeable: true,
  role: "dialog",
  onClose: noop,
  locale: zhCN.Drawer
}, _temp);
Inner.displayName = "Inner";
var _class$1, _temp2;
var noop$1 = function noop3() {
};
var Popup = NextOverlay.Popup;
var pickOthers$1 = obj.pickOthers;
var Drawer = (_temp2 = _class$1 = function(_Component) {
  _inherits(Drawer2, _Component);
  function Drawer2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Drawer2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getAlign = function(placement) {
      var align = void 0;
      switch (placement) {
        case "top":
          align = "tl tl";
          break;
        case "bottom":
          align = "bl bl";
          break;
        case "left":
          align = "tl tl";
          break;
        case "right":
        default:
          align = "tr tr";
          break;
      }
      return align;
    }, _this.getAnimation = function(placement) {
      if ("animation" in _this.props) {
        return _this.props.animation;
      }
      var animation = void 0;
      switch (placement) {
        case "top":
          animation = {
            in: "slideInDown",
            out: "slideOutUp"
          };
          break;
        case "bottom":
          animation = {
            in: "slideInUp",
            out: "slideOutDown"
          };
          break;
        case "left":
          animation = {
            in: "slideInLeft",
            out: "slideOutLeft"
          };
          break;
        case "right":
        default:
          animation = {
            in: "slideInRight",
            out: "slideOutRight"
          };
          break;
      }
      return animation;
    }, _this.getOverlayRef = function(ref) {
      _this.overlay = ref;
    }, _this.mapcloseableToConfig = function(closeable) {
      return ["esc", "close", "mask"].reduce(function(ret, option) {
        var key = option.charAt(0).toUpperCase() + option.substr(1);
        var value = typeof closeable === "boolean" ? closeable : closeable.split(",").indexOf(option) > -1;
        if (option === "esc" || option === "mask") {
          ret["canCloseBy" + key] = value;
        } else {
          ret["canCloseBy" + key + "Click"] = value;
        }
        return ret;
      }, {});
    }, _this.handleVisibleChange = function(visible, reason, e) {
      var _this$props = _this.props, onClose = _this$props.onClose, onVisibleChange = _this$props.onVisibleChange;
      if (visible === false) {
        onClose && onClose(reason, e);
      }
      onVisibleChange && onVisibleChange(visible, reason, e);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Drawer2.prototype.renderInner = function renderInner(closeable) {
    var _props = this.props, prefix = _props.prefix, className = _props.className, children = _props.children, title = _props.title, onClose = _props.onClose, locale = _props.locale, headerStyle = _props.headerStyle, bodyStyle = _props.bodyStyle, placement = _props.placement, rtl = _props.rtl;
    var others = pickOthers$1(Object.keys(Drawer2.propTypes), this.props);
    return React.createElement(Inner, _extends({
      prefix,
      title,
      className,
      locale,
      closeable,
      rtl,
      headerStyle,
      bodyStyle,
      placement,
      onClose: onClose.bind(this, "closeClick")
    }, others), children);
  };
  Drawer2.prototype.render = function render() {
    var _props2 = this.props, prefix = _props2.prefix, style = _props2.style, width = _props2.width, height = _props2.height, trigger = _props2.trigger, triggerType = _props2.triggerType, animation = _props2.animation, hasMask = _props2.hasMask, visible = _props2.visible, placement = _props2.placement, onClose = _props2.onClose, onVisibleChange = _props2.onVisibleChange, closeable = _props2.closeable, closeMode = _props2.closeMode, rtl = _props2.rtl, popupContainer = _props2.popupContainer, others = _objectWithoutProperties(_props2, ["prefix", "style", "width", "height", "trigger", "triggerType", "animation", "hasMask", "visible", "placement", "onClose", "onVisibleChange", "closeable", "closeMode", "rtl", "popupContainer"]);
    var newStyle = _extends({
      width,
      height
    }, style);
    var newCloseable = "closeMode" in this.props ? Array.isArray(closeMode) ? closeMode.join(",") : closeMode : closeable;
    var _mapcloseableToConfig = this.mapcloseableToConfig(newCloseable), canCloseByCloseClick = _mapcloseableToConfig.canCloseByCloseClick, closeConfig = _objectWithoutProperties(_mapcloseableToConfig, ["canCloseByCloseClick"]);
    var newPopupProps = _extends({
      prefix,
      visible,
      trigger,
      triggerType,
      onVisibleChange: this.handleVisibleChange,
      animation: this.getAnimation(placement),
      hasMask,
      align: this.getAlign(placement)
    }, closeConfig, {
      canCloseByOutSideClick: false,
      disableScroll: true,
      ref: this.getOverlayRef,
      rtl,
      target: "viewport",
      style: newStyle,
      needAdjust: false,
      container: popupContainer
    });
    var inner = this.renderInner(canCloseByCloseClick);
    return React.createElement(Popup, _extends({}, newPopupProps, others), inner);
  };
  return Drawer2;
}(Component), _class$1.displayName = "Drawer", _class$1.propTypes = _extends({}, Popup.propTypes || {}, {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  trigger: propTypes.element,
  triggerType: propTypes.oneOfType([propTypes.string, propTypes.array]),
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  closeable: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  closeMode: propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOf(["close", "mask", "esc"])), propTypes.oneOf(["close", "mask", "esc"])]),
  onClose: propTypes.func,
  placement: propTypes.oneOf(["top", "right", "bottom", "left"]),
  title: propTypes.node,
  headerStyle: propTypes.object,
  bodyStyle: propTypes.object,
  visible: propTypes.bool,
  hasMask: propTypes.bool,
  onVisibleChange: propTypes.func,
  animation: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  locale: propTypes.object,
  popupContainer: propTypes.any
}), _class$1.defaultProps = {
  prefix: "next-",
  triggerType: "click",
  trigger: null,
  closeable: true,
  onClose: noop$1,
  hasMask: true,
  placement: "right",
  locale: zhCN.Drawer
}, _temp2);
Drawer.displayName = "Drawer";
Drawer.Inner = Inner;
var NextDrawer = NextConfigProvider.config(Drawer);
class Demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = (reason, e) => {
      console.log("onClose: ", reason, e);
      this.setState({
        visible: false
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.onOpen
    }, " ", "open", " "), /* @__PURE__ */ createElement(NextDrawer, {
      title: "标题",
      placement: "right",
      visible: this.state.visible,
      onClose: this.onClose
    }, "Start your business here by searching a popular product"));
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {visible: false, childrenDrawer: false};
    this.showDrawer = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.showChildrenDrawer = () => {
      this.setState({
        childrenDrawer: true
      });
    };
    this.onChildrenDrawerClose = () => {
      this.setState({
        childrenDrawer: false
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.showDrawer
    }, "Open drawer"), /* @__PURE__ */ createElement(NextDrawer, {
      title: "Multi-level drawer",
      width: 520,
      closeMode: "mask",
      onClose: this.onClose,
      visible: this.state.visible
    }, /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.showChildrenDrawer
    }, "Two-level drawer"), /* @__PURE__ */ createElement("div", {
      style: {height: 800, marginTop: 40}
    }, "很长的内容"), /* @__PURE__ */ createElement("div", {
      style: {marginBottom: 40}
    }, "底部的内容"), /* @__PURE__ */ createElement(NextDrawer, {
      title: "Two-level Drawer",
      width: 320,
      closeMode: "mask",
      onClose: this.onChildrenDrawerClose,
      visible: this.state.childrenDrawer
    }, "This is two-level drawer"), /* @__PURE__ */ createElement("div", {
      style: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #e8e8e8",
        padding: "10px 16px",
        textAlign: "right",
        left: 0,
        background: "#fff",
        borderRadius: "0 0 4px 4px"
      }
    }, /* @__PURE__ */ createElement(exported, {
      style: {
        marginRight: 8
      },
      onClick: this.onClose
    }, "Cancel"), /* @__PURE__ */ createElement(exported, {
      onClick: this.onClose,
      type: "primary"
    }, "Submit"))));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
class Demo$1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      placement: "right"
    };
    this.onOpen = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = (reason) => {
      this.setState({
        visible: false
      });
    };
    this.onPlacementChange = (dir) => {
      this.setState({
        placement: dir
      });
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      dataSource: ["right", "bottom", "left", "top"],
      defaultValue: "right",
      onChange: this.onPlacementChange
    }), " ", "    ", /* @__PURE__ */ createElement(exported, {
      type: "primary",
      onClick: this.onOpen
    }, " ", "open", " "), /* @__PURE__ */ createElement(NextDrawer, {
      title: "标题",
      visible: this.state.visible,
      placement: this.state.placement,
      onClose: this.onClose
    }, "Start your business here by searching a popular product"));
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const Option = Select.Option;
const onChange = function(value) {
  console.log(value);
};
const onBlur = function(e) {
  console.log(/onblur/, e);
};
const onToggleHighlightItem = function(item, type) {
  console.log(item, type);
};
class Demo$2 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      placement: "right"
    };
    this.onPlacementChange = (dir) => {
      this.setState({
        placement: dir
      });
    };
  }
  render() {
    const drawerProps = {
      placement: this.state.placement,
      closeMode: "mask",
      bodyStyle: {padding: 0}
    };
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(Radio.Group, {
      dataSource: ["right", "bottom", "left", "top"],
      defaultValue: "right",
      onChange: this.onPlacementChange
    }), " ", "    ", /* @__PURE__ */ createElement(Select, {
      id: "basic-demo",
      popupComponent: NextDrawer,
      popupProps: drawerProps,
      autoWidth: false,
      onChange,
      onBlur,
      onToggleHighlightItem,
      defaultValue: "jack",
      "aria-label": "name is",
      hasClear: true
    }, /* @__PURE__ */ createElement(Option, {
      value: "jack"
    }, "Jack"), /* @__PURE__ */ createElement(Option, {
      value: "frank"
    }, "Frank"), /* @__PURE__ */ createElement(Option, {
      value: "hugo"
    }, "Hugo")));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const modules = {};
modules["_basic"] = m0;
modules["_double"] = m1;
modules["_placement"] = m2;
modules["_select"] = m3;
export default modules;

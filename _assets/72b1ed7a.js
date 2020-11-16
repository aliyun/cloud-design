import {g as NextConfigProvider, p as polyfill, w as NextOverlay, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as dom, B as findDOMNode, j as _objectWithoutProperties, e as classnames, R as React, i as _extends, N as NextIcon, o as obj, D as NextMenu, f as propTypes, v as func, O as HOC, h as hoistNonReactStatics_cjs, c as createElement, C as Component} from "./index.086d3ff2.js";
import {N as NextButton} from "./e9aa4cc7.js";
import {H as He} from "./3cf202b9.js";
var _class, _temp;
var Popup = NextOverlay.Popup;
var SplitButton = (_temp = _class = function(_React$Component) {
  _inherits(SplitButton2, _React$Component);
  function SplitButton2(props, context) {
    _classCallCheck(this, SplitButton2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.selectMenuItem = function(keys) {
      var _this$props;
      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }
      if (!("selectedKeys" in _this.props)) {
        _this.setState({
          selectedKeys: keys
        });
      }
      (_this$props = _this.props).onSelect.apply(_this$props, [keys].concat(others));
    };
    _this.clickMenuItem = function(key) {
      var _this$props2;
      for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        others[_key2 - 1] = arguments[_key2];
      }
      (_this$props2 = _this.props).onItemClick.apply(_this$props2, [key].concat(others));
      _this.onVisibleChange(false, "menuSelect");
    };
    _this.onPopupOpen = function() {
      if (_this.props.autoWidth && _this.wrapper && _this.menu) {
        dom.setStyle(_this.menu, {
          width: _this.wrapper.offsetWidth
        });
      }
    };
    _this.onVisibleChange = function(visible, reason) {
      if (!("visible" in _this.props)) {
        _this.setState({
          visible
        });
      }
      _this.props.onVisibleChange(visible, reason);
    };
    _this._menuRefHandler = function(ref) {
      _this.menu = findDOMNode(ref);
      var refFn = _this.props.menuProps.ref;
      if (typeof refFn === "function") {
        refFn(ref);
      }
    };
    _this._wrapperRefHandler = function(ref) {
      _this.wrapper = findDOMNode(ref);
    };
    _this.state = {
      selectedKeys: props.defaultSelectedKeys,
      visible: props.defaultVisible
    };
    return _this;
  }
  SplitButton2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var st = {};
    if ("visible" in props) {
      st.visible = props.visible;
    }
    if ("selectedKeys" in props) {
      st.selectedKeys = props.selectedKeys;
    }
    return st;
  };
  SplitButton2.prototype.componentDidMount = function componentDidMount() {
    if (this.state.visible) {
      this.forceUpdate();
    }
  };
  SplitButton2.prototype.render = function render() {
    var _classnames, _classnames2, _classnames3, _this2 = this;
    var _props = this.props, prefix = _props.prefix, label = _props.label, size = _props.size, type = _props.type, component = _props.component, ghost = _props.ghost, className = _props.className, style = _props.style, children = _props.children, triggerProps = _props.triggerProps, popupAlign = _props.popupAlign, popupTriggerType = _props.popupTriggerType, popupStyle = _props.popupStyle, popupClassName = _props.popupClassName, popupProps = _props.popupProps, followTrigger = _props.followTrigger, selectMode = _props.selectMode, menuProps = _props.menuProps, leftButtonProps = _props.leftButtonProps, disabled = _props.disabled, others = _objectWithoutProperties(_props, ["prefix", "label", "size", "type", "component", "ghost", "className", "style", "children", "triggerProps", "popupAlign", "popupTriggerType", "popupStyle", "popupClassName", "popupProps", "followTrigger", "selectMode", "menuProps", "leftButtonProps", "disabled"]);
    var state = this.state;
    var classNames = classnames((_classnames = {}, _classnames[prefix + "split-btn"] = true, _classnames), className);
    var sharedBtnProps = {
      type,
      size,
      component,
      ghost,
      disabled
    };
    var triggerClassNames = classnames((_classnames2 = {}, _classnames2[prefix + "split-btn-trigger"] = true, _classnames2[prefix + "expand"] = state.visible, _classnames2.opened = state.visible, _classnames2));
    var iconCls = classnames((_classnames3 = {}, _classnames3[prefix + "split-btn-symbol-fold"] = true, _classnames3));
    var trigger = React.createElement(NextButton, _extends({}, triggerProps, sharedBtnProps, {
      className: triggerClassNames
    }), React.createElement(NextIcon, {type: "arrow-down", className: iconCls}));
    return React.createElement(NextButton.Group, _extends({}, obj.pickOthers(SplitButton2.propTypes, others), {
      className: classNames,
      style,
      size,
      ref: this._wrapperRefHandler
    }), React.createElement(NextButton, _extends({}, sharedBtnProps, leftButtonProps), label), React.createElement(Popup, _extends({}, popupProps, {
      followTrigger,
      visible: state.visible,
      onVisibleChange: this.onVisibleChange,
      trigger,
      triggerType: popupTriggerType,
      align: popupAlign,
      target: function target() {
        return _this2.wrapper;
      },
      style: popupStyle,
      shouldUpdatePosition: true,
      className: popupClassName,
      onOpen: this.onPopupOpen
    }), React.createElement(NextMenu, _extends({}, menuProps, {
      selectMode,
      selectedKeys: state.selectedKeys,
      onSelect: this.selectMenuItem,
      onItemClick: this.clickMenuItem,
      ref: this._menuRefHandler
    }), children)));
  };
  return SplitButton2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  style: propTypes.object,
  type: propTypes.oneOf(["normal", "primary", "secondary"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
  label: propTypes.node,
  component: propTypes.oneOf(["button", "a"]),
  ghost: propTypes.oneOf(["light", "dark", false, true]),
  defaultSelectedKeys: propTypes.array,
  selectedKeys: propTypes.array,
  selectMode: propTypes.oneOf(["single", "multiple"]),
  onSelect: propTypes.func,
  onItemClick: propTypes.func,
  triggerProps: propTypes.object,
  autoWidth: propTypes.bool,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupAlign: propTypes.string,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  menuProps: propTypes.object,
  leftButtonProps: propTypes.object,
  className: propTypes.string,
  children: propTypes.any
}, _class.defaultProps = {
  prefix: "next-",
  type: "normal",
  size: "medium",
  autoWidth: true,
  popupTriggerType: "click",
  onVisibleChange: func.noop,
  onItemClick: func.noop,
  onSelect: func.noop,
  defaultSelectedKeys: [],
  menuProps: {},
  leftButtonProps: {}
}, _temp);
SplitButton.displayName = "SplitButton";
SplitButton.Item = NextMenu.Item;
SplitButton.Divider = NextMenu.Divider;
SplitButton.Group = NextMenu.Group;
var NextSplitButton = NextConfigProvider.config(polyfill(SplitButton));
const SplitButton$1 = HOC(NextSplitButton);
hoistNonReactStatics_cjs(SplitButton$1, NextSplitButton);
const {Item} = SplitButton$1;
const menu = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item, {
  key: item
}, item));
function DemoComponent() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    type: "primary",
    triggerProps: {"aria-label": "click to see more menu option"}
  }, menu));
  return /* @__PURE__ */ createElement(Style, null, content);
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {Item: Item$1} = SplitButton$1;
const menu$1 = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item$1, {
  key: item
}, item));
function DemoComponent$1() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document"
  }, menu$1), "    ", /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    type: "primary"
  }, menu$1), "  ", /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    type: "secondary"
  }, menu$1), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null));
  return /* @__PURE__ */ createElement(Style$1, null, content);
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Item: Item$2} = SplitButton$1;
const menu$2 = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item$2, {
  key: item
}, item));
class CompositeSplitButton extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      label: "Choose Action"
    };
    this.onSelect = (val) => {
      this.setState({
        visible: false,
        label: val
      });
    };
    this.changeVisible = (visible) => {
      this.setState({
        visible
      });
    };
  }
  render() {
    const {visible, label} = this.state;
    return /* @__PURE__ */ createElement(SplitButton$1, {
      label,
      visible,
      onVisibleChange: this.changeVisible,
      onItemClick: this.onSelect
    }, menu$2);
  }
}
function DemoComponent$2() {
  const content = /* @__PURE__ */ createElement(CompositeSplitButton, null);
  return /* @__PURE__ */ createElement(Style$2, null, content);
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Item: Item$3, Group, Divider} = SplitButton$1;
function DemoComponent$3() {
  const content = /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    onItemClick: (key) => console.log(key)
  }, /* @__PURE__ */ createElement(Item$3, null, "Undo"), /* @__PURE__ */ createElement(Item$3, null, "Redo"), /* @__PURE__ */ createElement(Divider, null), /* @__PURE__ */ createElement(Group, null, /* @__PURE__ */ createElement(Item$3, {
    helper: "CTRL + X"
  }, "Cut"), /* @__PURE__ */ createElement(Item$3, {
    helper: "CTRL + C"
  }, "Copy"), /* @__PURE__ */ createElement(Item$3, {
    helper: "CTRL + V"
  }, "Paste")));
  return /* @__PURE__ */ createElement(Style$3, null, content);
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const {Item: Item$4} = SplitButton$1;
const menu$3 = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item$4, {
  key: item
}, item));
function DemoComponent$4() {
  const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    size: "small"
  }, menu$3), " ", "   ", /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    size: "medium"
  }, menu$3), " ", "   ", /* @__PURE__ */ createElement(SplitButton$1, {
    label: "Edit Document",
    size: "large"
  }, menu$3));
  return /* @__PURE__ */ createElement(Style$4, null, content);
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_composite"] = m2;
modules["_menu"] = m3;
modules["_size"] = m4;
export default modules;

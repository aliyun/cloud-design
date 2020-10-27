import {p as polyfill, y as NextOverlay, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, f as findDOMNode, k as _objectWithoutProperties, d as classnames, R as React, g as _extends, o as obj, s as NextIcon, E as NextMenu, h as propTypes, i as func, O as HOC} from "./index.7e05a4b9.js";
import {N as NextButton} from "./f6d96c0d.js";
var _class, _temp;
var Popup = NextOverlay.Popup;
var MenuButton = (_temp = _class = function(_React$Component) {
  _inherits(MenuButton2, _React$Component);
  function MenuButton2(props, context) {
    _classCallCheck(this, MenuButton2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.clickMenuItem = function(key) {
      var _this$props;
      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }
      var selectMode = _this.props.selectMode;
      (_this$props = _this.props).onItemClick.apply(_this$props, [key].concat(others));
      if (selectMode === "multiple") {
        return;
      }
      _this.onPopupVisibleChange(false, "menuSelect");
    };
    _this.selectMenu = function(keys) {
      var _this$props2;
      for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        others[_key2 - 1] = arguments[_key2];
      }
      if (!("selectedKeys" in _this.props)) {
        _this.setState({
          selectedKeys: keys
        });
      }
      (_this$props2 = _this.props).onSelect.apply(_this$props2, [keys].concat(others));
    };
    _this.onPopupOpen = function() {
      var button = findDOMNode(_this);
      if (_this.props.autoWidth && button && _this.menu) {
        _this.menu.style.width = button.offsetWidth + "px";
      }
    };
    _this.onPopupVisibleChange = function(visible, type) {
      if (!("visible" in _this.props)) {
        _this.setState({
          visible
        });
      }
      _this.props.onVisibleChange(visible, type);
    };
    _this._menuRefHandler = function(ref) {
      _this.menu = findDOMNode(ref);
      var refFn = _this.props.menuProps.ref;
      if (typeof refFn === "function") {
        refFn(ref);
      }
    };
    _this.state = {
      selectedKeys: props.defaultSelectedKeys,
      visible: props.defaultVisible
    };
    return _this;
  }
  MenuButton2.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var st = {};
    if ("visible" in props) {
      st.visible = props.visible;
    }
    if ("selectedKeys" in props) {
      st.selectedKeys = props.selectedKeys;
    }
    return st;
  };
  MenuButton2.prototype.render = function render() {
    var _classnames, _classnames2;
    var _props = this.props, prefix = _props.prefix, style = _props.style, className = _props.className, label = _props.label, popupTriggerType = _props.popupTriggerType, popupContainer = _props.popupContainer, popupStyle = _props.popupStyle, popupClassName = _props.popupClassName, popupProps = _props.popupProps, followTrigger = _props.followTrigger, selectMode = _props.selectMode, menuProps = _props.menuProps, children = _props.children, others = _objectWithoutProperties(_props, ["prefix", "style", "className", "label", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "followTrigger", "selectMode", "menuProps", "children"]);
    var state = this.state;
    var classNames = classnames((_classnames = {}, _classnames[prefix + "menu-btn"] = true, _classnames[prefix + "expand"] = state.visible, _classnames.opened = state.visible, _classnames), className);
    var popupClassNames = classnames((_classnames2 = {}, _classnames2[prefix + "menu-btn-popup"] = true, _classnames2), popupClassName);
    var trigger = React.createElement(NextButton, _extends({
      style,
      className: classNames
    }, obj.pickOthers(MenuButton2.propTypes, others)), label, " ", React.createElement(NextIcon, {type: "arrow-down", className: prefix + "menu-btn-arrow"}));
    return React.createElement(Popup, _extends({}, popupProps, {
      followTrigger,
      visible: state.visible,
      onVisibleChange: this.onPopupVisibleChange,
      trigger,
      triggerType: popupTriggerType,
      container: popupContainer,
      onOpen: this.onPopupOpen,
      style: popupStyle,
      className: popupClassNames
    }), React.createElement(NextMenu, _extends({}, menuProps, {
      ref: this._menuRefHandler,
      selectedKeys: state.selectedKeys,
      selectMode,
      onSelect: this.selectMenu,
      onItemClick: this.clickMenuItem
    }), children));
  };
  return MenuButton2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  label: propTypes.node,
  autoWidth: propTypes.bool,
  popupTriggerType: propTypes.oneOf(["click", "hover"]),
  popupContainer: propTypes.any,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  defaultSelectedKeys: propTypes.array,
  selectedKeys: propTypes.array,
  selectMode: propTypes.oneOf(["single", "multiple"]),
  onItemClick: propTypes.func,
  onSelect: propTypes.func,
  menuProps: propTypes.object,
  style: propTypes.object,
  className: propTypes.string,
  children: propTypes.any
}, _class.defaultProps = {
  prefix: "next-",
  autoWidth: true,
  popupTriggerType: "click",
  onVisibleChange: func.noop,
  onItemClick: func.noop,
  onSelect: func.noop,
  defaultSelectedKeys: [],
  menuProps: {}
}, _temp);
MenuButton.displayName = "MenuButton";
MenuButton.Item = NextMenu.Item;
MenuButton.Group = NextMenu.Group;
MenuButton.Divider = NextMenu.Divider;
var NextMenuButton = polyfill(MenuButton);
var MenuButton$1 = HOC(NextMenuButton);
export {MenuButton$1 as M};

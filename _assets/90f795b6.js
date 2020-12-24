import {j as func, x as NextOverlay, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, m as Children, R as React, g as _extends, C as Component, i as propTypes, N as NextConfigProvider} from "./index.e8c3f862.js";
var _class, _temp;
var noop = func.noop, makeChain = func.makeChain, bindCtx = func.bindCtx;
var Popup = NextOverlay.Popup;
var Dropdown = (_temp = _class = function(_Component) {
  _inherits(Dropdown2, _Component);
  function Dropdown2(props) {
    _classCallCheck(this, Dropdown2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {
      visible: "visible" in props ? props.visible : props.defaultVisible || false,
      autoFocus: "autoFocus" in props ? props.autoFocus : false
    };
    bindCtx(_this, ["onTriggerKeyDown", "onMenuClick", "onVisibleChange"]);
    return _this;
  }
  Dropdown2.prototype.getVisible = function getVisible() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
    return "visible" in props ? props.visible : this.state.visible;
  };
  Dropdown2.prototype.onMenuClick = function onMenuClick() {
    this.onVisibleChange(false, "fromContent");
  };
  Dropdown2.prototype.onVisibleChange = function onVisibleChange(visible, from) {
    this.setState({visible});
    this.props.onVisibleChange(visible, from);
  };
  Dropdown2.prototype.onTriggerKeyDown = function onTriggerKeyDown() {
    var autoFocus = true;
    if ("autoFocus" in this.props) {
      autoFocus = this.props.autoFocus;
    }
    this.setState({
      autoFocus
    });
  };
  Dropdown2.prototype.render = function render() {
    var child = Children.only(this.props.children);
    if (typeof child.type === "function" && child.type.isNextMenu) {
      child = React.cloneElement(child, {
        onItemClick: makeChain(this.onMenuClick, child.props.onItemClick)
      });
    }
    var _props = this.props, trigger = _props.trigger, rtl = _props.rtl;
    var newTrigger = React.cloneElement(trigger, {
      onKeyDown: makeChain(this.onTriggerKeyDown, trigger.props.onKeyDown)
    });
    return React.createElement(Popup, _extends({}, this.props, {
      rtl,
      autoFocus: this.state.autoFocus,
      trigger: newTrigger,
      visible: this.getVisible(),
      onVisibleChange: this.onVisibleChange,
      canCloseByOutSideClick: true
    }), child);
  };
  return Dropdown2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  trigger: propTypes.node,
  triggerType: propTypes.oneOfType([propTypes.string, propTypes.array]),
  disabled: propTypes.bool,
  align: propTypes.string,
  offset: propTypes.array,
  delay: propTypes.number,
  autoFocus: propTypes.bool,
  hasMask: propTypes.bool,
  cache: propTypes.bool,
  animation: propTypes.oneOfType([propTypes.object, propTypes.bool])
}, _class.defaultProps = {
  prefix: "next-",
  pure: false,
  defaultVisible: false,
  onVisibleChange: noop,
  triggerType: "hover",
  disabled: false,
  align: "tl bl",
  offset: [0, 0],
  delay: 200,
  hasMask: false,
  cache: false,
  onPosition: noop
}, _temp);
Dropdown.displayName = "Dropdown";
var NextDropdown = NextConfigProvider.config(Dropdown, {
  transform: function transform(props, deprecated) {
    if ("triggerType" in props) {
      var triggerType = Array.isArray(props.triggerType) ? [].concat(props.triggerType) : [props.triggerType];
      if (triggerType.indexOf("focus") > -1) {
        deprecated("triggerType[focus]", "triggerType[hover, click]", "Balloon");
      }
    }
    return props;
  }
});
export {NextDropdown as N};

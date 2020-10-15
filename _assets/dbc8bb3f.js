import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, d as classnames, C as Component} from "./index.c7468b78.js";
import {f as func} from "./676b8be8.js";
var makeChain = func.makeChain;
var UIState = function(_Component) {
  _inherits(UIState2, _Component);
  function UIState2(props) {
    _classCallCheck(this, UIState2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {};
    ["_onUIFocus", "_onUIBlur"].forEach(function(item) {
      _this[item] = _this[item].bind(_this);
    });
    return _this;
  }
  UIState2.prototype.getStateElement = function getStateElement(base) {
    var _props = this.props, onFocus = _props.onFocus, onBlur = _props.onBlur;
    return React.cloneElement(base, {
      onFocus: makeChain(this._onUIFocus, onFocus),
      onBlur: makeChain(this._onUIBlur, onBlur)
    });
  };
  UIState2.prototype.getStateClassName = function getStateClassName() {
    var focused = this.state.focused;
    return classnames({
      focused
    });
  };
  UIState2.prototype.resetUIState = function resetUIState() {
    this.setState({
      focused: false
    });
  };
  UIState2.prototype._onUIFocus = function _onUIFocus() {
    this.setState({
      focused: true
    });
  };
  UIState2.prototype._onUIBlur = function _onUIBlur() {
    this.setState({
      focused: false
    });
  };
  return UIState2;
}(Component);
UIState.displayName = "UIState";
export {UIState as U};

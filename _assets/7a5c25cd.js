import {N as NextConfigProvider, p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, f as findDOMNode, e as events, o as obj, d as classnames, g as _extends, R as React, i as propTypes, j as func} from "./index.91461bfc.js";
function getScroll(node, isVertical) {
  if (typeof window === "undefined") {
    return 0;
  }
  var windowProp = isVertical ? "pageYOffset" : "pageXOffset";
  var elementProp = isVertical ? "scrollTop" : "scrollLeft";
  return node === window ? node[windowProp] : node[elementProp];
}
function getRect(node) {
  return node !== window ? node.getBoundingClientRect() : {top: 0, left: 0, bottom: 0};
}
function getNodeHeight(node) {
  if (!node) {
    return 0;
  }
  if (node === window) {
    return window.innerHeight;
  }
  return node.clientHeight;
}
var _class, _temp;
var Affix = (_temp = _class = function(_React$Component) {
  _inherits(Affix2, _React$Component);
  Affix2._getAffixMode = function _getAffixMode(nextProps) {
    var affixMode = {
      top: false,
      bottom: false,
      offset: 0
    };
    if (!nextProps) {
      return affixMode;
    }
    var offsetTop = nextProps.offsetTop, offsetBottom = nextProps.offsetBottom;
    if (typeof offsetTop !== "number" && typeof offsetBottom !== "number") {
      affixMode.top = true;
    } else if (typeof offsetTop === "number") {
      affixMode.top = true;
      affixMode.bottom = false;
      affixMode.offset = offsetTop;
    } else if (typeof offsetBottom === "number") {
      affixMode.bottom = true;
      affixMode.top = false;
      affixMode.offset = offsetBottom;
    }
    return affixMode;
  };
  function Affix2(props, context) {
    _classCallCheck(this, Affix2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.updatePosition = function() {
      _this._updateNodePosition();
    };
    _this._updateNodePosition = function() {
      var affixMode = _this.state.affixMode;
      var _this$props = _this.props, container2 = _this$props.container, useAbsolute = _this$props.useAbsolute;
      var affixContainer = container2();
      if (!affixContainer || !_this.affixNode) {
        return false;
      }
      var containerScrollTop = getScroll(affixContainer, true);
      var affixOffset = _this._getOffset(_this.affixNode, affixContainer);
      var containerHeight = getNodeHeight(affixContainer);
      var affixHeight = _this.affixNode.offsetHeight;
      var containerRect = getRect(affixContainer);
      var affixChildHeight = _this.affixChildNode.offsetHeight;
      var affixStyle = {
        width: affixOffset.width
      };
      var containerStyle = {
        width: affixOffset.width,
        height: affixChildHeight
      };
      if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
        if (useAbsolute) {
          affixStyle.position = "absolute";
          affixStyle.top = containerScrollTop - (affixOffset.top - affixMode.offset);
          containerStyle.position = "relative";
        } else {
          affixStyle.position = "fixed";
          affixStyle.top = affixMode.offset + containerRect.top;
        }
        _this._setAffixStyle(affixStyle, true);
        _this._setContainerStyle(containerStyle);
      } else if (affixMode.bottom && containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
        affixStyle.height = affixHeight;
        if (useAbsolute) {
          affixStyle.position = "absolute";
          affixStyle.top = containerScrollTop - (affixOffset.top + affixHeight + affixMode.offset - containerHeight);
          containerStyle.position = "relative";
        } else {
          affixStyle.position = "fixed";
          affixStyle.bottom = affixMode.offset;
        }
        _this._setAffixStyle(affixStyle, true);
        _this._setContainerStyle(containerStyle);
      } else {
        _this._setAffixStyle(null);
        _this._setContainerStyle(null);
      }
    };
    _this._affixNodeRefHandler = function(ref) {
      _this.affixNode = findDOMNode(ref);
    };
    _this._affixChildNodeRefHandler = function(ref) {
      _this.affixChildNode = findDOMNode(ref);
    };
    _this.state = {
      style: null,
      containerStyle: null,
      affixMode: Affix2._getAffixMode(props)
    };
    return _this;
  }
  Affix2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("offsetTop" in nextProps || "offsetBottom" in nextProps) {
      return {
        affixMode: Affix2._getAffixMode(nextProps)
      };
    }
    return null;
  };
  Affix2.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;
    var container2 = this.props.container;
    this._updateNodePosition();
    this.timeout = setTimeout(function() {
      _this2._setEventHandlerForContainer(container2);
    });
  };
  Affix2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(this._updateNodePosition);
  };
  Affix2.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    var container2 = this.props.container;
    this._removeEventHandlerForContainer(container2);
  };
  Affix2.prototype._setEventHandlerForContainer = function _setEventHandlerForContainer(getContainer) {
    var container2 = getContainer();
    if (!container2) {
      return;
    }
    events.on(container2, "scroll", this._updateNodePosition, false);
    events.on(container2, "resize", this._updateNodePosition, false);
  };
  Affix2.prototype._removeEventHandlerForContainer = function _removeEventHandlerForContainer(getContainer) {
    var container2 = getContainer();
    if (container2) {
      events.off(container2, "scroll", this._updateNodePosition);
      events.off(container2, "resize", this._updateNodePosition);
    }
  };
  Affix2.prototype._setAffixStyle = function _setAffixStyle(affixStyle) {
    var affixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (obj.shallowEqual(affixStyle, this.state.style)) {
      return;
    }
    this.setState({
      style: affixStyle
    });
    var onAffix = this.props.onAffix;
    if (affixed) {
      setTimeout(function() {
        return onAffix(true);
      });
    } else if (!affixStyle) {
      setTimeout(function() {
        return onAffix(false);
      });
    }
  };
  Affix2.prototype._setContainerStyle = function _setContainerStyle(containerStyle) {
    if (obj.shallowEqual(containerStyle, this.state.containerStyle)) {
      return;
    }
    this.setState({containerStyle});
  };
  Affix2.prototype._getOffset = function _getOffset(affixNode, affixContainer) {
    var affixRect = affixNode.getBoundingClientRect();
    var containerRect = getRect(affixContainer);
    var containerScrollTop = getScroll(affixContainer, true);
    var containerScrollLeft = getScroll(affixContainer, false);
    return {
      top: affixRect.top - containerRect.top + containerScrollTop,
      left: affixRect.left - containerRect.left + containerScrollLeft,
      width: affixRect.width,
      height: affixRect.height
    };
  };
  Affix2.prototype.render = function render() {
    var _classnames;
    var affixMode = this.state.affixMode;
    var _props = this.props, prefix = _props.prefix, className = _props.className, style = _props.style, children = _props.children;
    var state = this.state;
    var classNames = classnames((_classnames = {}, _classnames[prefix + "affix"] = state.style, _classnames[prefix + "affix-top"] = !state.style && affixMode.top, _classnames[prefix + "affix-bottom"] = !state.style && affixMode.bottom, _classnames[className] = className, _classnames));
    var combinedStyle = _extends({}, state.containerStyle, style);
    return React.createElement("div", {ref: this._affixNodeRefHandler, style: combinedStyle}, React.createElement("div", {
      ref: this._affixChildNodeRefHandler,
      className: classNames,
      style: state.style
    }, children));
  };
  return Affix2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  container: propTypes.func,
  offsetTop: propTypes.number,
  offsetBottom: propTypes.number,
  onAffix: propTypes.func,
  useAbsolute: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.any
}, _class.defaultProps = {
  prefix: "next-",
  container: function container() {
    return window;
  },
  onAffix: func.noop
}, _temp);
Affix.displayName = "Affix";
var NextAffix = NextConfigProvider.config(polyfill(Affix));
export {NextAffix as N};

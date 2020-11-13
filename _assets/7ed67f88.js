import {j as func, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, k as _objectWithoutProperties, d as classnames, R as React, g as _extends, o as obj, s as NextIcon, i as propTypes, z as zhCN, p as polyfill, x as NextOverlay, q as log, N as NextConfigProvider} from "./index.8e8886f2.js";
var normalMap = {
  t: {
    align: "bc tc",
    rtlAlign: "bc tc",
    arrow: "bottom",
    trOrigin: "bottom",
    rtlTrOrigin: "bottom",
    offset: [0, -12]
  },
  r: {
    align: "cl cr",
    rtlAlign: "cr cl",
    arrow: "left",
    trOrigin: "left",
    rtlTrOrigin: "right",
    offset: [12, 0]
  },
  b: {
    align: "tc bc",
    rtlAlign: "tc bc",
    arrow: "top",
    trOrigin: "top",
    rtlTrOrigin: "top",
    offset: [0, 12]
  },
  l: {
    align: "cr cl",
    rtlAlign: "cl cr",
    arrow: "right",
    trOrigin: "right",
    rtlTrOrigin: "left",
    offset: [-12, 0]
  },
  tl: {
    align: "br tc",
    rtlAlign: "bl tc",
    arrow: "bottom-right",
    trOrigin: "bottom right",
    rtlTrOrigin: "bottom left",
    offset: [20, -12]
  },
  tr: {
    align: "bl tc",
    rtlAlign: "br tc",
    arrow: "bottom-left",
    trOrigin: "bottom left",
    rtlTrOrigin: "bottom right",
    offset: [-20, -12]
  },
  rt: {
    align: "bl cr",
    rtlAlign: "br cl",
    arrow: "left-bottom",
    trOrigin: "bottom left",
    rtlTrOrigin: "bottom right",
    offset: [12, 20]
  },
  rb: {
    align: "tl cr",
    rtlAlign: "tr cl",
    arrow: "left-top",
    trOrigin: "top left",
    rtlTrOrigin: "top right",
    offset: [12, -20]
  },
  bl: {
    align: "tr bc",
    rtlAlign: "tl bc",
    arrow: "top-right",
    trOrigin: "top right",
    rtlTrOrigin: "top left",
    offset: [20, 12]
  },
  br: {
    align: "tl bc",
    rtlAlign: "tr bc",
    arrow: "top-left",
    trOrigin: "top left",
    rtlTrOrigin: "top right",
    offset: [-20, 12]
  },
  lt: {
    align: "br cl",
    rtlAlign: "bl cr",
    arrow: "right-bottom",
    trOrigin: "bottom right",
    rtlTrOrigin: "bottom left",
    offset: [-12, 20]
  },
  lb: {
    align: "tr cl",
    rtlAlign: "tl cr",
    arrow: "right-top",
    trOrigin: "top right",
    rtlTrOrigin: "top left",
    offset: [-12, -20]
  }
};
var edgeMap = {
  t: {
    align: "bc tc",
    rtlAlign: "bc tc",
    arrow: "bottom",
    trOrigin: "bottom",
    rtlTrOrigin: "bottom",
    offset: [0, -12]
  },
  r: {
    align: "cl cr",
    rtlAlign: "cr cl",
    arrow: "left",
    trOrigin: "left",
    rtlTrOrigin: "right",
    offset: [12, 0]
  },
  b: {
    align: "tc bc",
    rtlAlign: "tc bc",
    arrow: "top",
    trOrigin: "top",
    rtlTrOrigin: "top",
    offset: [0, 12]
  },
  l: {
    align: "cr cl",
    rtlAlign: "cl cr",
    arrow: "right",
    trOrigin: "right",
    rtlTrOrigin: "left",
    offset: [-12, 0]
  },
  tl: {
    align: "bl tl",
    rtlAlign: "br tr",
    arrow: "bottom-left",
    trOrigin: "bottom left",
    rtlTrOrigin: "bottom right",
    offset: [0, -12]
  },
  tr: {
    align: "br tr",
    rtlAlign: "bl tl",
    arrow: "bottom-right",
    trOrigin: "bottom right",
    rtlTrOrigin: "bottom left",
    offset: [0, -12]
  },
  rt: {
    align: "tl tr",
    rtlAlign: "tr tl",
    arrow: "left-top",
    trOrigin: "top left",
    rtlTrOrigin: "top right",
    offset: [12, 0]
  },
  rb: {
    align: "bl br",
    rtlAlign: "br bl",
    arrow: "left-bottom",
    trOrigin: "bottom left",
    rtlTrOrigin: "bottom right",
    offset: [12, 0]
  },
  bl: {
    align: "tl bl",
    rtlAlign: "tr br",
    arrow: "top-left",
    trOrigin: "top left",
    rtlTrOrigin: "top right",
    offset: [0, 12]
  },
  br: {
    align: "tr br",
    rtlAlign: "tl bl",
    arrow: "top-right",
    trOrigin: "top right",
    rtlTrOrigin: "top left",
    offset: [0, 12]
  },
  lt: {
    align: "tr tl",
    rtlAlign: "tl tr",
    arrow: "right-top",
    trOrigin: "top right",
    rtlTrOrigin: "top left",
    offset: [-12, 0]
  },
  lb: {
    align: "br bl",
    rtlAlign: "bl br",
    arrow: "right-bottom",
    trOrigin: "bottom right",
    rtlTrOrigin: "bottom left",
    offset: [-12, 0]
  }
};
var _class, _temp;
var noop = func.noop;
var BalloonInner = (_temp = _class = function(_React$Component) {
  _inherits(BalloonInner2, _React$Component);
  function BalloonInner2() {
    _classCallCheck(this, BalloonInner2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  BalloonInner2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, closable = _props.closable, className = _props.className, style = _props.style, isTooltip = _props.isTooltip, align = _props.align, type = _props.type, onClose = _props.onClose, alignEdge = _props.alignEdge, children = _props.children, rtl = _props.rtl, locale = _props.locale, others = _objectWithoutProperties(_props, ["prefix", "closable", "className", "style", "isTooltip", "align", "type", "onClose", "alignEdge", "children", "rtl", "locale"]);
    var alignMap2 = alignEdge ? edgeMap : normalMap;
    var _prefix = prefix;
    if (isTooltip) {
      _prefix = _prefix + "balloon-tooltip";
    } else {
      _prefix = _prefix + "balloon";
    }
    var classes = classnames((_classNames = {}, _classNames["" + _prefix] = true, _classNames[_prefix + "-" + type] = type, _classNames[_prefix + "-medium"] = true, _classNames[_prefix + "-" + alignMap2[align].arrow] = alignMap2[align], _classNames[_prefix + "-closable"] = closable, _classNames[className] = className, _classNames));
    return React.createElement("div", _extends({
      role: "tooltip",
      "aria-live": "polite",
      dir: rtl ? "rtl" : void 0,
      className: classes,
      style
    }, obj.pickOthers(Object.keys(BalloonInner2.propTypes), others)), children, closable ? React.createElement("a", {
      role: "button",
      "aria-label": locale.close,
      tabIndex: "0",
      className: _prefix + "-close",
      onClick: onClose
    }, React.createElement(NextIcon, {type: "close", size: "small"})) : null);
  };
  return BalloonInner2;
}(React.Component), _class.contextTypes = {
  prefix: propTypes.string
}, _class.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  closable: propTypes.bool,
  children: propTypes.any,
  className: propTypes.string,
  alignEdge: propTypes.bool,
  onClose: propTypes.func,
  style: propTypes.any,
  align: propTypes.string,
  type: propTypes.string,
  isTooltip: propTypes.bool,
  locale: propTypes.object,
  pure: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  closable: true,
  onClose: noop,
  locale: zhCN.Balloon,
  align: "b",
  type: "normal",
  alignEdge: false,
  pure: false
}, _temp);
BalloonInner.displayName = "BalloonInner";
function getDisabledCompatibleTrigger(element) {
  if (element.type.displayName === "Config(Button)" && element.props.disabled) {
    var displayStyle = element.props.style && element.props.style.display ? element.props.style.display : "inline-block";
    var child = React.cloneElement(element, {
      style: _extends({}, element.props.style, {
        pointerEvents: "none"
      })
    });
    return React.createElement("span", {style: {display: displayStyle, cursor: "not-allowed"}}, child);
  }
  return element;
}
var _class$1, _temp$1;
var noop$1 = func.noop;
var Popup = NextOverlay.Popup;
var alignList = ["t", "r", "b", "l", "tl", "tr", "bl", "br", "lt", "lb", "rt", "rb"];
var alignMap = normalMap;
var Balloon = (_temp$1 = _class$1 = function(_React$Component) {
  _inherits(Balloon2, _React$Component);
  function Balloon2(props, context) {
    _classCallCheck(this, Balloon2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.state = {
      align: alignList.includes(props.align) ? props.align : "b",
      visible: "visible" in props ? props.visible : props.defaultVisible
    };
    _this._onClose = _this._onClose.bind(_this);
    _this._onPosition = _this._onPosition.bind(_this);
    _this._onVisibleChange = _this._onVisibleChange.bind(_this);
    return _this;
  }
  Balloon2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var nextState = {};
    if ("visible" in nextProps) {
      nextState.visible = nextProps.visible;
    }
    if (!prevState.innerAlign && "align" in nextProps && alignList.includes(nextProps.align)) {
      nextState.align = nextProps.align;
      nextState.innerAlign = false;
    }
    return nextState;
  };
  Balloon2.prototype._onVisibleChange = function _onVisibleChange(visible, trigger) {
    if (!("visible" in this.props)) {
      this.setState({
        visible
      });
    }
    this.props.onVisibleChange(visible, trigger);
    if (!visible) {
      this.props.onClose();
    }
  };
  Balloon2.prototype._onClose = function _onClose(e) {
    this._onVisibleChange(false, "closeClick");
    e.preventDefault();
  };
  Balloon2.prototype._onPosition = function _onPosition(res) {
    var rtl = this.props.rtl;
    alignMap = this.props.alignEdge ? edgeMap : normalMap;
    var newAlign = res.align.join(" ");
    var resAlign = void 0;
    var alignKey = "align";
    if (rtl) {
      alignKey = "rtlAlign";
    }
    for (var key in alignMap) {
      if (alignMap[key][alignKey] === newAlign) {
        resAlign = key;
        break;
      }
    }
    resAlign = resAlign || this.state.align;
    if (resAlign !== this.state.align) {
      this.setState({
        align: resAlign,
        innerAlign: true
      });
    }
  };
  Balloon2.prototype.render = function render() {
    var _props = this.props, id = _props.id, type = _props.type, prefix = _props.prefix, className = _props.className, alignEdge = _props.alignEdge, trigger = _props.trigger, triggerType = _props.triggerType, children = _props.children, closable = _props.closable, shouldUpdatePosition = _props.shouldUpdatePosition, delay = _props.delay, needAdjust = _props.needAdjust, safeId = _props.safeId, autoFocus = _props.autoFocus, safeNode = _props.safeNode, onClick = _props.onClick, onHover = _props.onHover, animation = _props.animation, offset = _props.offset, style = _props.style, container = _props.container, popupContainer = _props.popupContainer, cache = _props.cache, popupStyle = _props.popupStyle, popupClassName = _props.popupClassName, popupProps = _props.popupProps, followTrigger = _props.followTrigger, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["id", "type", "prefix", "className", "alignEdge", "trigger", "triggerType", "children", "closable", "shouldUpdatePosition", "delay", "needAdjust", "safeId", "autoFocus", "safeNode", "onClick", "onHover", "animation", "offset", "style", "container", "popupContainer", "cache", "popupStyle", "popupClassName", "popupProps", "followTrigger", "rtl"]);
    if (container) {
      log.deprecated("container", "popupContainer", "Balloon");
    }
    var align = this.state.align;
    alignMap = alignEdge ? edgeMap : normalMap;
    var _prefix = this.context.prefix || prefix;
    var trOrigin = "trOrigin";
    if (rtl) {
      trOrigin = "rtlTrOrigin";
    }
    var _offset = [alignMap[align].offset[0] + offset[0], alignMap[align].offset[1] + offset[1]];
    var transformOrigin = alignMap[align][trOrigin];
    var _style = _extends({transformOrigin}, style);
    var content = React.createElement(BalloonInner, _extends({}, obj.pickOthers(Object.keys(Balloon2.propTypes), others), {
      id,
      prefix: _prefix,
      closable,
      onClose: this._onClose,
      className,
      style: _style,
      align,
      type,
      rtl,
      alignEdge
    }), children);
    var triggerProps = {};
    triggerProps["aria-describedby"] = id;
    triggerProps.tabIndex = "0";
    var ariaTrigger = id ? React.cloneElement(trigger, triggerProps) : trigger;
    var newTrigger = getDisabledCompatibleTrigger(React.isValidElement(ariaTrigger) ? ariaTrigger : React.createElement("span", null, ariaTrigger));
    return React.createElement(Popup, _extends({}, popupProps, {
      followTrigger,
      trigger: newTrigger,
      cache,
      safeId,
      triggerType,
      align: alignMap[align].align,
      offset: _offset,
      visible: this.state.visible,
      onPosition: this._onPosition,
      onClick,
      onHover,
      afterClose: this.props.afterClose,
      onVisibleChange: this._onVisibleChange,
      shouldUpdatePosition,
      needAdjust,
      animation,
      delay,
      autoFocus: triggerType === "focus" ? false : autoFocus,
      safeNode,
      container: popupContainer || container,
      className: popupClassName,
      style: popupStyle,
      rtl
    }), content);
  };
  return Balloon2;
}(React.Component), _class$1.contextTypes = {
  prefix: propTypes.string
}, _class$1.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.any,
  size: propTypes.string,
  type: propTypes.oneOf(["normal", "primary"]),
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  alignEdge: propTypes.bool,
  closable: propTypes.bool,
  align: propTypes.oneOf(alignList),
  offset: propTypes.array,
  trigger: propTypes.any,
  triggerType: propTypes.oneOfType([propTypes.string, propTypes.array]),
  onClick: propTypes.func,
  onClose: propTypes.func,
  onHover: propTypes.func,
  needAdjust: propTypes.bool,
  delay: propTypes.number,
  afterClose: propTypes.func,
  shouldUpdatePosition: propTypes.bool,
  autoFocus: propTypes.bool,
  safeNode: propTypes.string,
  safeId: propTypes.string,
  animation: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  cache: propTypes.bool,
  popupContainer: propTypes.any,
  container: propTypes.any,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  id: propTypes.string
}, _class$1.defaultProps = {
  prefix: "next-",
  pure: false,
  type: "normal",
  closable: true,
  defaultVisible: false,
  size: "medium",
  alignEdge: false,
  align: "b",
  offset: [0, 0],
  trigger: React.createElement("span", null),
  onClose: noop$1,
  afterClose: noop$1,
  onVisibleChange: noop$1,
  needAdjust: false,
  triggerType: "hover",
  safeNode: void 0,
  safeId: null,
  autoFocus: true,
  animation: {
    in: "zoomIn",
    out: "zoomOut"
  },
  cache: false,
  popupStyle: {},
  popupClassName: "",
  popupProps: {}
}, _temp$1);
Balloon.displayName = "Balloon";
var Balloon$1 = polyfill(Balloon);
var _class$2, _temp$2;
var Popup$1 = NextOverlay.Popup;
var alignMap$1 = normalMap;
var Tooltip = (_temp$2 = _class$2 = function(_React$Component) {
  _inherits(Tooltip2, _React$Component);
  function Tooltip2() {
    _classCallCheck(this, Tooltip2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Tooltip2.prototype.render = function render() {
    var _props = this.props, id = _props.id, className = _props.className, align = _props.align, style = _props.style, prefix = _props.prefix, trigger = _props.trigger, children = _props.children, popupContainer = _props.popupContainer, popupProps = _props.popupProps, popupClassName = _props.popupClassName, popupStyle = _props.popupStyle, followTrigger = _props.followTrigger, triggerType = _props.triggerType, autoFocus = _props.autoFocus, alignEdge = _props.alignEdge, rtl = _props.rtl, delay = _props.delay, others = _objectWithoutProperties(_props, ["id", "className", "align", "style", "prefix", "trigger", "children", "popupContainer", "popupProps", "popupClassName", "popupStyle", "followTrigger", "triggerType", "autoFocus", "alignEdge", "rtl", "delay"]);
    var trOrigin = "trOrigin";
    if (rtl) {
      others.rtl = true;
      trOrigin = "rtlTrOrigin";
    }
    alignMap$1 = alignEdge ? edgeMap : normalMap;
    var transformOrigin = alignMap$1[align][trOrigin];
    var _offset = alignMap$1[align].offset;
    var _style = _extends({transformOrigin}, style);
    var content = React.createElement(BalloonInner, _extends({}, others, {
      id,
      prefix,
      closable: false,
      isTooltip: true,
      className,
      style: _style,
      align,
      rtl,
      alignEdge
    }), children);
    var triggerProps = {};
    triggerProps["aria-describedby"] = id;
    triggerProps.tabIndex = "0";
    var newTriggerType = triggerType;
    if (triggerType === "hover" && id) {
      newTriggerType = ["focus", "hover"];
    }
    var ariaTrigger = id ? React.cloneElement(trigger, triggerProps) : trigger;
    var newTrigger = getDisabledCompatibleTrigger(React.isValidElement(ariaTrigger) ? ariaTrigger : React.createElement("span", null, ariaTrigger));
    return React.createElement(Popup$1, _extends({
      role: "tooltip",
      container: popupContainer,
      followTrigger,
      trigger: newTrigger,
      triggerType: newTriggerType,
      align: alignMap$1[align].align,
      offset: _offset,
      delay,
      className: popupClassName,
      style: popupStyle,
      rtl,
      autoFocus: triggerType === "focus" ? false : autoFocus,
      shouldUpdatePosition: true,
      needAdjust: false
    }, popupProps), content);
  };
  return Tooltip2;
}(React.Component), _class$2.propTypes = {
  prefix: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.any,
  align: propTypes.oneOf(["t", "r", "b", "l", "tl", "tr", "bl", "br", "lt", "lb", "rt", "rb"]),
  trigger: propTypes.any,
  triggerType: propTypes.oneOfType([propTypes.string, propTypes.array]),
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupProps: propTypes.object,
  pure: propTypes.bool,
  popupContainer: propTypes.any,
  followTrigger: propTypes.bool,
  id: propTypes.string,
  delay: propTypes.number
}, _class$2.defaultProps = {
  triggerType: "hover",
  prefix: "next-",
  align: "b",
  delay: 0,
  trigger: React.createElement("span", null)
}, _temp$2);
Tooltip.displayName = "Tooltip";
Balloon$1.Tooltip = NextConfigProvider.config(Tooltip, {
  transform: function transform(props, deprecated) {
    if ("text" in props) {
      deprecated("text", "children", "Tooltip");
      var _props = props, text = _props.text, others = _objectWithoutProperties(_props, ["text"]);
      props = _extends({children: text}, others);
    }
    return props;
  }
});
Balloon$1.Inner = BalloonInner;
var NextBalloon = NextConfigProvider.config(Balloon$1, {
  transform: function transform2(props, deprecated) {
    if (props.alignment) {
      deprecated("alignment", "alignEdge", "Balloon");
      var _props2 = props, alignment = _props2.alignment, others = _objectWithoutProperties(_props2, ["alignment"]);
      props = _extends({alignEdge: alignment === "edge"}, others);
    }
    if (props.onCloseClick) {
      deprecated("onCloseClick", 'onVisibleChange(visible, [type = "closeClick"])', "Balloon");
      var _props3 = props, onCloseClick = _props3.onCloseClick, onVisibleChange = _props3.onVisibleChange, _others = _objectWithoutProperties(_props3, ["onCloseClick", "onVisibleChange"]);
      var newOnVisibleChange = function newOnVisibleChange2(visible, type) {
        if (type === "closeClick") {
          onCloseClick();
        }
        if (onVisibleChange) {
          onVisibleChange(visible, type);
        }
      };
      props = _extends({onVisibleChange: newOnVisibleChange}, _others);
    }
    return props;
  }
});
export {NextBalloon as N};

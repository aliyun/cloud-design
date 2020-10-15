import {f as findDOMNode, p as polyfill, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, k as Children, R as React, s as createPortal, C as Component, g as propTypes, d as classnames, e as _extends, j as _objectWithoutProperties} from "./index.e76f7845.js";
import {f as func, d as dom, e as events, c as focus, s as support, g as guid, K as KEYCODE} from "./a3f37a66.js";
import {N as NextConfigProvider} from "./33d6cb60.js";
var overlayManager = {
  allOverlays: [],
  addOverlay: function addOverlay(overlay) {
    this.removeOverlay(overlay);
    this.allOverlays.unshift(overlay);
  },
  isCurrentOverlay: function isCurrentOverlay(overlay) {
    return overlay && this.allOverlays[0] === overlay;
  },
  removeOverlay: function removeOverlay(overlay) {
    var i = this.allOverlays.indexOf(overlay);
    if (i > -1) {
      this.allOverlays.splice(i, 1);
    }
  }
};
function findNode(target, param) {
  if (!target) {
    return null;
  }
  if (typeof target === "string") {
    return document.getElementById(target);
  }
  if (typeof target === "function") {
    try {
      target = target(param);
    } catch (err) {
      target = null;
    }
  }
  if (!target) {
    return null;
  }
  try {
    return findDOMNode(target);
  } catch (err) {
    return target;
  }
}
var _class, _temp;
var makeChain = func.makeChain;
var getContainerNode = function getContainerNode2(props) {
  var targetNode = findNode(props.target);
  return findNode(props.container, targetNode);
};
var Gateway = (_temp = _class = function(_Component) {
  _inherits(Gateway2, _Component);
  function Gateway2(props) {
    _classCallCheck(this, Gateway2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.saveChildRef = function(ref) {
      _this.child = ref;
    };
    _this.state = {
      containerNode: null
    };
    return _this;
  }
  Gateway2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    return {
      containerNode: getContainerNode(nextProps)
    };
  };
  Gateway2.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      containerNode: getContainerNode(this.props)
    });
  };
  Gateway2.prototype.getChildNode = function getChildNode() {
    try {
      return findDOMNode(this.child);
    } catch (err) {
      return null;
    }
  };
  Gateway2.prototype.render = function render() {
    var containerNode = this.state.containerNode;
    if (!containerNode) {
      return null;
    }
    var children = this.props.children;
    var child = children ? Children.only(children) : null;
    if (!child) {
      return null;
    }
    if (typeof child.ref === "string") {
      throw new Error("Can not set ref by string in Gateway, use function instead.");
    }
    child = React.cloneElement(child, {
      ref: makeChain(this.saveChildRef, child.ref)
    });
    return createPortal(child, containerNode);
  };
  return Gateway2;
}(Component), _class.propTypes = {
  children: propTypes.node,
  container: propTypes.any,
  target: propTypes.any
}, _class.defaultProps = {
  container: function container() {
    return document.body;
  }
}, _temp);
Gateway.displayName = "Gateway";
var Gateway$1 = polyfill(Gateway);
var _class$1, _temp$1, _initialiseProps;
var VIEWPORT = "viewport";
var getPageX = function getPageX2() {
  return window.pageXOffset || document.documentElement.scrollLeft;
};
var getPageY = function getPageY2() {
  return window.pageYOffset || document.documentElement.scrollTop;
};
function _getElementRect(elem, container3) {
  var offsetTop = 0, offsetLeft = 0, scrollTop = 0, scrollLeft = 0;
  var offsetHeight = elem.offsetHeight;
  var offsetWidth = elem.offsetWidth;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
    if (elem && elem.offsetParent) {
      if (!isNaN(elem.offsetParent.scrollLeft) && elem.offsetParent !== document.body) {
        scrollLeft += elem.offsetParent.scrollLeft;
      }
      if (!isNaN(elem.offsetParent.scrollTop) && elem.offsetParent !== document.body) {
        scrollTop += elem.offsetParent.scrollTop;
      }
    }
    elem = elem.offsetParent;
  } while (elem !== null && elem !== container3);
  var treatAsWindow = !container3 || container3 === document.body;
  return {
    top: offsetTop - scrollTop - (treatAsWindow ? document.documentElement.scrollTop || document.body.scrollTop : 0),
    left: offsetLeft - scrollLeft - (treatAsWindow ? document.documentElement.scrollLeft || document.body.scrollLeft : 0),
    height: offsetHeight,
    width: offsetWidth
  };
}
function _getViewportSize(container3) {
  if (!container3 || container3 === document.body) {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  }
  var _container$getBoundin = container3.getBoundingClientRect(), width = _container$getBoundin.width, height = _container$getBoundin.height;
  return {
    width,
    height
  };
}
var getContainer = function getContainer2(_ref) {
  var container3 = _ref.container, autoFit = _ref.autoFit, baseElement = _ref.baseElement;
  var calcContainer = findNode(container3, baseElement);
  if (!calcContainer) {
    calcContainer = document.body;
  }
  if (!autoFit) {
    return calcContainer;
  }
  while (dom.getStyle(calcContainer, "position") === "static") {
    if (!calcContainer || calcContainer === document.body) {
      return document.body;
    }
    calcContainer = calcContainer.parentNode;
  }
  return calcContainer;
};
var Position = (_temp$1 = _class$1 = function() {
  function Position2(props) {
    _classCallCheck(this, Position2);
    _initialiseProps.call(this);
    this.pinElement = props.pinElement;
    this.baseElement = props.baseElement;
    this.pinFollowBaseElementWhenFixed = props.pinFollowBaseElementWhenFixed;
    this.container = getContainer(props);
    this.autoFit = props.autoFit || false;
    this.align = props.align || "tl tl";
    this.offset = props.offset || [0, 0];
    this.needAdjust = props.needAdjust || false;
    this.isRtl = props.isRtl || false;
  }
  Position2.prototype.setPosition = function setPosition() {
    var pinElement = this.pinElement;
    var baseElement = this.baseElement;
    var pinFollowBaseElementWhenFixed = this.pinFollowBaseElementWhenFixed;
    var expectedAlign = this._getExpectedAlign();
    var isPinFixed = void 0, isBaseFixed = void 0, firstPositionResult = void 0;
    if (pinElement === VIEWPORT) {
      return;
    }
    if (dom.getStyle(pinElement, "position") !== "fixed") {
      dom.setStyle(pinElement, "position", "absolute");
      isPinFixed = false;
    } else {
      isPinFixed = true;
    }
    if (baseElement === VIEWPORT || dom.getStyle(baseElement, "position") !== "fixed") {
      isBaseFixed = false;
    } else {
      isBaseFixed = true;
    }
    for (var i = 0; i < expectedAlign.length; i++) {
      var align = expectedAlign[i];
      var pinElementPoints = this._normalizePosition(pinElement, align.split(" ")[0], isPinFixed);
      var baseElementPoints = this._normalizePosition(baseElement, align.split(" ")[1], isPinFixed && !pinFollowBaseElementWhenFixed);
      var pinElementParentOffset = this._getParentOffset(pinElement);
      var pinElementParentScrollOffset = this._getParentScrollOffset(pinElement);
      var baseElementOffset = isPinFixed && isBaseFixed ? this._getLeftTop(baseElement) : baseElementPoints.offset(isPinFixed && pinFollowBaseElementWhenFixed);
      var top = baseElementOffset.top + baseElementPoints.y - pinElementParentOffset.top - pinElementPoints.y + pinElementParentScrollOffset.top;
      var left = baseElementOffset.left + baseElementPoints.x - pinElementParentOffset.left - pinElementPoints.x + pinElementParentScrollOffset.left;
      this._setPinElementPostion(pinElement, {left, top}, this.offset);
      if (!firstPositionResult) {
        firstPositionResult = {left, top};
      }
      if (this._isInViewport(pinElement, align)) {
        return align;
      }
    }
    var inViewportLeft = this._makeElementInViewport(pinElement, firstPositionResult.left, "Left", isPinFixed);
    var inViewportTop = this._makeElementInViewport(pinElement, firstPositionResult.top, "Top", isPinFixed);
    this._setPinElementPostion(pinElement, {left: inViewportLeft, top: inViewportTop}, this._calPinOffset(expectedAlign[0]));
    return expectedAlign[0];
  };
  Position2.prototype._getParentOffset = function _getParentOffset(element) {
    var parent = element.offsetParent || document.documentElement;
    var offset = void 0;
    if (parent === document.body && dom.getStyle(parent, "position") === "static") {
      offset = {
        top: 0,
        left: 0
      };
    } else {
      offset = this._getElementOffset(parent);
    }
    offset.top += parseFloat(dom.getStyle(parent, "border-top-width"), 10);
    offset.left += parseFloat(dom.getStyle(parent, "border-left-width"), 10);
    offset.offsetParent = parent;
    return offset;
  };
  Position2.prototype._makeElementInViewport = function _makeElementInViewport(pinElement, number, type, isPinFixed) {
    var result = number;
    var docElement = document.documentElement;
    var offsetParent = pinElement.offsetParent || document.documentElement;
    if (result < 0) {
      if (isPinFixed) {
        result = 0;
      } else if (offsetParent === document.body && dom.getStyle(offsetParent, "position") === "static") {
        result = Math.max(docElement["scroll" + type], document.body["scroll" + type]);
      }
    }
    return result;
  };
  Position2.prototype._normalizePosition = function _normalizePosition(element, align, ignoreElementOffset) {
    var points = this._normalizeElement(element, ignoreElementOffset);
    this._normalizeXY(points, align);
    return points;
  };
  Position2.prototype._normalizeXY = function _normalizeXY(points, align) {
    var x = align.split("")[1];
    var y = align.split("")[0];
    points.x = this._xyConverter(x, points, "width");
    points.y = this._xyConverter(y, points, "height");
    return points;
  };
  Position2.prototype._xyConverter = function _xyConverter(align, points, type) {
    var res = align.replace(/t|l/gi, "0%").replace(/c/gi, "50%").replace(/b|r/gi, "100%").replace(/(\d+)%/gi, function(m, d) {
      return points.size()[type] * (d / 100);
    });
    return parseFloat(res, 10) || 0;
  };
  Position2.prototype._getLeftTop = function _getLeftTop(element) {
    return {
      left: parseFloat(dom.getStyle(element, "left")) || 0,
      top: parseFloat(dom.getStyle(element, "top")) || 0
    };
  };
  Position2.prototype._normalizeElement = function _normalizeElement(element, ignoreElementOffset) {
    var _this = this;
    var result = {
      element,
      x: 0,
      y: 0
    }, isViewport = element === VIEWPORT, docElement = document.documentElement;
    result.offset = function(ignoreScroll) {
      if (ignoreElementOffset) {
        return {
          left: 0,
          top: 0
        };
      } else if (isViewport) {
        return {
          left: getPageX(),
          top: getPageY()
        };
      } else {
        return _this._getElementOffset(element, ignoreScroll);
      }
    };
    result.size = function() {
      if (isViewport) {
        return {
          width: docElement.clientWidth,
          height: docElement.clientHeight
        };
      } else {
        return {
          width: element.offsetWidth,
          height: element.offsetHeight
        };
      }
    };
    return result;
  };
  Position2.prototype._getElementOffset = function _getElementOffset(element, ignoreScroll) {
    var rect = element.getBoundingClientRect();
    var docElement = document.documentElement;
    var body = document.body;
    var docClientLeft = docElement.clientLeft || body.clientLeft || 0;
    var docClientTop = docElement.clientTop || body.clientTop || 0;
    return {
      left: rect.left + (ignoreScroll ? 0 : getPageX()) - docClientLeft,
      top: rect.top + (ignoreScroll ? 0 : getPageY()) - docClientTop
    };
  };
  Position2.prototype._getExpectedAlign = function _getExpectedAlign() {
    var align = this.isRtl ? this._replaceAlignDir(this.align, /l|r/g, {l: "r", r: "l"}) : this.align;
    var expectedAlign = [align];
    if (this.needAdjust) {
      if (/t|b/g.test(align)) {
        expectedAlign.push(this._replaceAlignDir(align, /t|b/g, {t: "b", b: "t"}));
      }
      if (/l|r/g.test(align)) {
        expectedAlign.push(this._replaceAlignDir(align, /l|r/g, {l: "r", r: "l"}));
      }
      if (/c/g.test(align)) {
        expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, {c: "l"}));
        expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, {c: "r"}));
      }
      expectedAlign.push(this._replaceAlignDir(align, /l|r|t|b/g, {
        l: "r",
        r: "l",
        t: "b",
        b: "t"
      }));
    }
    return expectedAlign;
  };
  Position2.prototype._replaceAlignDir = function _replaceAlignDir(align, regExp, map) {
    return align.replace(regExp, function(res) {
      return map[res];
    });
  };
  Position2.prototype._isRightAligned = function _isRightAligned(align) {
    var _align$split = align.split(" "), pinAlign = _align$split[0], baseAlign = _align$split[1];
    return pinAlign[1] === "r" && pinAlign[1] === baseAlign[1];
  };
  Position2.prototype._isBottomAligned = function _isBottomAligned(align) {
    var _align$split2 = align.split(" "), pinAlign = _align$split2[0], baseAlign = _align$split2[1];
    return pinAlign[0] === "b" && pinAlign[0] === baseAlign[0];
  };
  Position2.prototype._isInViewport = function _isInViewport(element, align) {
    var viewportSize = _getViewportSize(this.container);
    var elementRect = _getElementRect(element, this.container);
    var viewportWidth = this._isRightAligned(align) ? viewportSize.width : viewportSize.width - 1;
    var viewportHeight = this._isBottomAligned(align) ? viewportSize.height : viewportSize.height - 1;
    if (this.autoFit) {
      return elementRect.top >= 0 && elementRect.top + element.offsetHeight <= viewportHeight;
    }
    return elementRect.left >= 0 && elementRect.left + element.offsetWidth <= viewportWidth && elementRect.top >= 0 && elementRect.top + element.offsetHeight <= viewportHeight;
  };
  Position2.prototype._setPinElementPostion = function _setPinElementPostion(pinElement, postion) {
    var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
    var top = postion.top, left = postion.left;
    if (!this.isRtl) {
      dom.setStyle(pinElement, {
        left: left + offset[0] + "px",
        top: top + offset[1] + "px"
      });
      return;
    }
    var pinElementParentOffset = this._getParentOffset(pinElement);
    var _getElementRect2 = _getElementRect(pinElementParentOffset.offsetParent), offsetParentWidth = _getElementRect2.width;
    var _getElementRect3 = _getElementRect(pinElement), width = _getElementRect3.width;
    var right = offsetParentWidth - (left + width);
    dom.setStyle(pinElement, {
      left: "auto",
      right: right + offset[0] + "px",
      top: top + offset[1] + "px"
    });
  };
  return Position2;
}(), _class$1.VIEWPORT = VIEWPORT, _class$1.place = function(props) {
  return new Position(props).setPosition();
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this._calPinOffset = function(align) {
    var offset = [].concat(_this2.offset);
    if (_this2.autoFit && align && _this2.container && _this2.container !== document.body) {
      var baseElementRect = _getElementRect(_this2.baseElement, _this2.container);
      var pinElementRect = _getElementRect(_this2.pinElement, _this2.container);
      var viewportSize = _getViewportSize(_this2.container);
      var pinAlign = align.split(" ")[0];
      var x = pinAlign.charAt(1);
      var y = pinAlign.charAt(0);
      if (pinElementRect.top < 0 || pinElementRect.top + pinElementRect.height > viewportSize.height) {
        offset[1] = -baseElementRect.top - (y === "t" ? baseElementRect.height : 0);
      }
    }
    return offset;
  };
  this._getParentScrollOffset = function(elem) {
    var top = 0;
    var left = 0;
    if (elem && elem.offsetParent && elem.offsetParent !== document.body) {
      if (!isNaN(elem.offsetParent.scrollTop)) {
        top += elem.offsetParent.scrollTop;
      }
      if (!isNaN(elem.offsetParent.scrollLeft)) {
        left += elem.offsetParent.scrollLeft;
      }
    }
    return {
      top,
      left
    };
  };
}, _temp$1);
var _class$2, _temp$2;
var noop = func.noop, bindCtx = func.bindCtx;
var getStyle = dom.getStyle;
var place = Position.place;
var Position$1 = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Position$12, _Component);
  function Position$12(props) {
    _classCallCheck(this, Position$12);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    bindCtx(_this, ["handleResize"]);
    return _this;
  }
  Position$12.prototype.componentDidMount = function componentDidMount() {
    this.setPosition();
    if (this.props.needListenResize) {
      events.on(window, "resize", this.handleResize);
    }
  };
  Position$12.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if ("align" in props && props.align !== prevProps.align || props.shouldUpdatePosition) {
      this.shouldUpdatePosition = true;
    }
    if (this.shouldUpdatePosition) {
      this.setPosition();
      this.shouldUpdatePosition = false;
    }
  };
  Position$12.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.needListenResize) {
      events.off(window, "resize", this.handleResize);
    }
    clearTimeout(this.resizeTimeout);
  };
  Position$12.prototype.setPosition = function setPosition() {
    var _props = this.props, align = _props.align, offset = _props.offset, beforePosition = _props.beforePosition, onPosition = _props.onPosition, needAdjust = _props.needAdjust, container3 = _props.container, rtl = _props.rtl, pinFollowBaseElementWhenFixed = _props.pinFollowBaseElementWhenFixed, autoFit = _props.autoFit;
    beforePosition();
    var contentNode = this.getContentNode();
    var targetNode = this.getTargetNode();
    if (contentNode && targetNode) {
      var resultAlign = place({
        pinElement: contentNode,
        baseElement: targetNode,
        pinFollowBaseElementWhenFixed,
        align,
        offset,
        autoFit,
        container: container3,
        needAdjust,
        isRtl: rtl
      });
      var top = getStyle(contentNode, "top");
      var left = getStyle(contentNode, "left");
      onPosition({
        align: resultAlign.split(" "),
        top,
        left
      }, contentNode);
    }
  };
  Position$12.prototype.getContentNode = function getContentNode() {
    try {
      return findDOMNode(this);
    } catch (err) {
      return null;
    }
  };
  Position$12.prototype.getTargetNode = function getTargetNode() {
    var target = this.props.target;
    return target === Position.VIEWPORT ? Position.VIEWPORT : findNode(target, this.props);
  };
  Position$12.prototype.handleResize = function handleResize() {
    var _this2 = this;
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function() {
      _this2.setPosition();
    }, 200);
  };
  Position$12.prototype.render = function render() {
    return Children.only(this.props.children);
  };
  return Position$12;
}(Component), _class$2.VIEWPORT = Position.VIEWPORT, _class$2.propTypes = {
  children: propTypes.node,
  target: propTypes.any,
  container: propTypes.any,
  align: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  offset: propTypes.array,
  beforePosition: propTypes.func,
  onPosition: propTypes.func,
  needAdjust: propTypes.bool,
  autoFit: propTypes.bool,
  needListenResize: propTypes.bool,
  shouldUpdatePosition: propTypes.bool,
  rtl: propTypes.bool,
  pinFollowBaseElementWhenFixed: propTypes.bool
}, _class$2.defaultProps = {
  align: "tl bl",
  offset: [0, 0],
  beforePosition: noop,
  onPosition: noop,
  needAdjust: true,
  autoFit: false,
  needListenResize: true,
  shouldUpdatePosition: false,
  rtl: false
}, _temp$2);
Position$1.displayName = "Position";
var _class$3, _temp$3;
var saveLastFocusNode = focus.saveLastFocusNode, getFocusNodeList = focus.getFocusNodeList, backLastFocusNode = focus.backLastFocusNode;
var makeChain$1 = func.makeChain, noop$1 = func.noop, bindCtx$1 = func.bindCtx;
var isScrollDisplay = function isScrollDisplay2(element) {
  try {
    var scrollbarStyle = window.getComputedStyle(element, "::-webkit-scrollbar");
    return !scrollbarStyle || scrollbarStyle.getPropertyValue("display") !== "none";
  } catch (e) {
  }
  return true;
};
var hasScroll = function hasScroll2() {
  var doc = document.documentElement;
  return doc.scrollHeight > doc.clientHeight && dom.scrollbar().width > 0 && isScrollDisplay(document.documentElement) && isScrollDisplay(document.body);
};
var prefixes = ["-webkit-", "-moz-", "-o-", "ms-", ""];
var getStyleProperty = function getStyleProperty2(node, name) {
  var style = window.getComputedStyle(node);
  var ret = "";
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
};
var modals = [];
var bodyOverflow = void 0, bodyPaddingRight = void 0;
var Overlay = (_temp$3 = _class$3 = function(_Component) {
  _inherits(Overlay2, _Component);
  function Overlay2(props) {
    _classCallCheck(this, Overlay2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.saveContentRef = function(ref) {
      _this.contentRef = ref;
    };
    _this.saveGatewayRef = function(ref) {
      _this.gatewayRef = ref;
    };
    _this.lastAlign = props.align;
    bindCtx$1(_this, ["handlePosition", "handleAnimateEnd", "handleDocumentKeyDown", "handleDocumentClick", "handleMaskClick", "beforeOpen", "beforeClose"]);
    _this.state = {
      visible: false,
      status: "none",
      animation: _this.getAnimation(props),
      beforeOpen: _this.beforeOpen,
      beforeClose: _this.beforeClose
    };
    _this.timeoutMap = {};
    return _this;
  }
  Overlay2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var willOpen = !prevState.visible && nextProps.visible;
    var willClose = prevState.visible && !nextProps.visible;
    if (willOpen) {
      prevState.beforeOpen();
      nextProps.beforeOpen();
    } else if (willClose) {
      prevState.beforeClose();
      nextProps.beforeClose();
    }
    var nextState = {};
    if (nextProps.animation || nextProps.animation === false) {
      nextState.animation = nextProps.animation;
    }
    if (nextProps.animation !== false && support.animation) {
      if (willOpen) {
        nextState.visible = true;
        nextState.status = "mounting";
      } else if (willClose) {
        nextState.status = "leaving";
      }
    } else if ("visible" in nextProps && nextProps.visible !== prevState.visible) {
      nextState.visible = nextProps.visible;
    }
    return nextState;
  };
  Overlay2.prototype.componentDidMount = function componentDidMount() {
    if (this.state.visible) {
      this.doAnimation(true, false);
      this._isMounted = true;
    }
    this.addDocumentEvents();
    overlayManager.addOverlay(this);
  };
  Overlay2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this._isMounted && this.props.visible) {
      this._isMounted = true;
    }
    if (this.props.align !== prevProps.align) {
      this.lastAlign = prevProps.align;
    }
    var willOpen = !prevProps.visible && this.props.visible;
    var willClose = prevProps.visible && !this.props.visible;
    (willOpen || willClose) && this.doAnimation(willOpen, willClose);
  };
  Overlay2.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isDestroyed = true;
    this._isMounted = false;
    overlayManager.removeOverlay(this);
    this.removeDocumentEvents();
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
    }
    if (this._animation) {
      this._animation.off();
      this._animation = null;
    }
    this.beforeClose();
  };
  Overlay2.prototype.doAnimation = function doAnimation(open, close) {
    var _this2 = this;
    if (this.state.animation && support.animation) {
      if (open) {
        this.onEntering();
      } else if (close) {
        this.onLeaving();
      }
      this.addAnimationEvents();
    } else {
      var wrapperNode = this.getWrapperNode();
      if (open) {
        setTimeout(function() {
          _this2.props.onOpen();
          _this2.props.afterOpen();
          dom.addClass(wrapperNode, "opened");
          overlayManager.addOverlay(_this2);
        });
      } else if (close) {
        this.props.onClose();
        this.props.afterClose();
        dom.removeClass(wrapperNode, "opened");
        overlayManager.removeOverlay(this);
      }
      this.setFocusNode();
    }
  };
  Overlay2.prototype.getAnimation = function getAnimation(props) {
    if (props.animation === false) {
      return false;
    }
    if (props.animation) {
      return props.animation;
    }
    return this.getAnimationByAlign(props.align);
  };
  Overlay2.prototype.getAnimationByAlign = function getAnimationByAlign(align) {
    switch (align[0]) {
      case "t":
        return {
          in: "expandInDown",
          out: "expandOutUp"
        };
      case "b":
        return {
          in: "expandInUp",
          out: "expandOutDown"
        };
      default:
        return {
          in: "expandInDown",
          out: "expandOutUp"
        };
    }
  };
  Overlay2.prototype.addAnimationEvents = function addAnimationEvents() {
    var _this3 = this;
    setTimeout(function() {
      var node = _this3.getContentNode();
      if (node) {
        var id = guid();
        _this3._animation = events.on(node, support.animation.end, _this3.handleAnimateEnd.bind(_this3, id));
        var animationDelay = parseFloat(getStyleProperty(node, "animation-delay")) || 0;
        var animationDuration = parseFloat(getStyleProperty(node, "animation-duration")) || 0;
        var time = animationDelay + animationDuration;
        if (time) {
          _this3.timeoutMap[id] = setTimeout(function() {
            _this3.handleAnimateEnd(id);
          }, time * 1e3 + 200);
        }
      }
    });
  };
  Overlay2.prototype.handlePosition = function handlePosition(config) {
    var align = config.align.join(" ");
    if (!("animation" in this.props) && this.props.needAdjust && this.lastAlign !== align) {
      this.setState({
        animation: this.getAnimationByAlign(align)
      });
    }
    var status = this.state.status;
    if (status === "mounting") {
      this.setState({
        status: "entering"
      });
    }
    this.lastAlign = align;
  };
  Overlay2.prototype.handleAnimateEnd = function handleAnimateEnd(id) {
    if (this.timeoutMap[id]) {
      clearTimeout(this.timeoutMap[id]);
    }
    delete this.timeoutMap[id];
    if (this._animation) {
      this._animation.off();
      this._animation = null;
    }
    if (!this._isMounted) {
      return;
    }
    if (this.state.status === "leaving") {
      this.setState({
        visible: false,
        status: "none"
      });
      this.onLeaved();
    } else if (this.state.status === "entering") {
      this.setState({
        status: "none"
      });
      this.onEntered();
    }
  };
  Overlay2.prototype.onEntering = function onEntering() {
    var _this4 = this;
    if (this._isDestroyed) {
      return;
    }
    setTimeout(function() {
      var wrapperNode = _this4.getWrapperNode();
      dom.addClass(wrapperNode, "opened");
      _this4.props.onOpen();
    });
  };
  Overlay2.prototype.onLeaving = function onLeaving() {
    var wrapperNode = this.getWrapperNode();
    dom.removeClass(wrapperNode, "opened");
    this.props.onClose();
  };
  Overlay2.prototype.onEntered = function onEntered() {
    overlayManager.addOverlay(this);
    this.setFocusNode();
    this.props.afterOpen();
  };
  Overlay2.prototype.onLeaved = function onLeaved() {
    overlayManager.removeOverlay(this);
    this.setFocusNode();
    this.props.afterClose();
  };
  Overlay2.prototype.beforeOpen = function beforeOpen() {
    if (this.props.disableScroll) {
      if (modals.length === 0) {
        var style = {
          overflow: "hidden"
        };
        var body = document.body;
        bodyOverflow = body.style.overflow;
        if (hasScroll()) {
          bodyPaddingRight = body.style.paddingRight;
          style.paddingRight = dom.getStyle(body, "paddingRight") + dom.scrollbar().width + "px";
        }
        dom.setStyle(body, style);
      }
      modals.push(this);
    }
  };
  Overlay2.prototype.beforeClose = function beforeClose() {
    if (this.props.disableScroll) {
      var index = modals.indexOf(this);
      if (index > -1) {
        if (modals.length === 1) {
          var style = {
            overflow: bodyOverflow
          };
          if (hasScroll()) {
            style.paddingRight = bodyPaddingRight;
          }
          dom.setStyle(document.body, style);
          bodyOverflow = void 0;
          bodyPaddingRight = void 0;
        }
        modals.splice(index, 1);
      }
    }
  };
  Overlay2.prototype.setFocusNode = function setFocusNode() {
    var _this5 = this;
    if (!this.props.autoFocus) {
      return;
    }
    if (this.state.visible && !this._hasFocused) {
      saveLastFocusNode();
      this.focusTimeout = setTimeout(function() {
        var node = _this5.getContentNode();
        if (node) {
          var focusNodeList = getFocusNodeList(node);
          if (focusNodeList.length) {
            focusNodeList[0].focus();
          }
          _this5._hasFocused = true;
        }
      }, 100);
    } else if (!this.state.visible && this._hasFocused) {
      backLastFocusNode();
      this._hasFocused = false;
    }
  };
  Overlay2.prototype.getContent = function getContent() {
    return this.contentRef;
  };
  Overlay2.prototype.getContentNode = function getContentNode() {
    try {
      return findDOMNode(this.contentRef);
    } catch (err) {
      return null;
    }
  };
  Overlay2.prototype.getWrapperNode = function getWrapperNode() {
    return this.gatewayRef ? this.gatewayRef.getChildNode() : null;
  };
  Overlay2.prototype.addDocumentEvents = function addDocumentEvents() {
    if (this.props.canCloseByEsc) {
      this._keydownEvents = events.on(document, "keydown", this.handleDocumentKeyDown);
    }
    if (this.props.canCloseByOutSideClick) {
      this._clickEvents = events.on(document, "click", this.handleDocumentClick);
      this._touchEvents = events.on(document, "touchend", this.handleDocumentClick);
    }
  };
  Overlay2.prototype.removeDocumentEvents = function removeDocumentEvents() {
    if (this._keydownEvents) {
      this._keydownEvents.off();
      this._keydownEvents = null;
    }
    if (this._clickEvents) {
      this._clickEvents.off();
      this._clickEvents = null;
    }
    if (this._touchEvents) {
      this._touchEvents.off();
      this._touchEvents = null;
    }
  };
  Overlay2.prototype.handleDocumentKeyDown = function handleDocumentKeyDown(e) {
    if (this.state.visible && e.keyCode === KEYCODE.ESC && overlayManager.isCurrentOverlay(this)) {
      this.props.onRequestClose("keyboard", e);
    }
  };
  Overlay2.prototype.isInShadowDOM = function isInShadowDOM(node) {
    return node.getRootNode ? node.getRootNode().nodeType === 11 : false;
  };
  Overlay2.prototype.getEventPath = function getEventPath(event) {
    return event.path || event.composedPath && event.composedPath() || this.composedPath(event.target);
  };
  Overlay2.prototype.composedPath = function composedPath(el) {
    var path = [];
    while (el) {
      path.push(el);
      if (el.tagName === "HTML") {
        path.push(document);
        path.push(window);
        return path;
      }
      el = el.parentElement;
    }
  };
  Overlay2.prototype.matchInShadowDOM = function matchInShadowDOM(node, e) {
    if (this.isInShadowDOM(node)) {
      var eventPath = this.getEventPath(e);
      return node === eventPath[0] || node.contains(eventPath[0]);
    }
    return false;
  };
  Overlay2.prototype.handleDocumentClick = function handleDocumentClick(e) {
    var _this6 = this;
    if (this.state.visible) {
      var safeNode = this.props.safeNode;
      var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
      safeNodes.unshift(function() {
        return _this6.getWrapperNode();
      });
      for (var i = 0; i < safeNodes.length; i++) {
        var node = findNode(safeNodes[i], this.props);
        if (node && (node === e.target || node.contains(e.target) || this.matchInShadowDOM(node, e) || e.target !== document && !document.documentElement.contains(e.target))) {
          return;
        }
      }
      this.props.onRequestClose("docClick", e);
    }
  };
  Overlay2.prototype.handleMaskClick = function handleMaskClick(e) {
    if (this.props.canCloseByMask) {
      this.props.onRequestClose("maskClick", e);
    }
  };
  Overlay2.prototype.getInstance = function getInstance() {
    return this;
  };
  Overlay2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, style = _props.style, propChildren = _props.children, target = _props.target, align = _props.align, offset = _props.offset, container3 = _props.container, hasMask = _props.hasMask, needAdjust = _props.needAdjust, autoFit = _props.autoFit, beforePosition = _props.beforePosition, onPosition = _props.onPosition, wrapperStyle = _props.wrapperStyle, rtl = _props.rtl, propShouldUpdatePosition = _props.shouldUpdatePosition, cache = _props.cache, wrapperClassName = _props.wrapperClassName, onMaskMouseEnter = _props.onMaskMouseEnter, onMaskMouseLeave = _props.onMaskMouseLeave, maskClass = _props.maskClass, isChildrenInMask = _props.isChildrenInMask, pinFollowBaseElementWhenFixed = _props.pinFollowBaseElementWhenFixed;
    var _state = this.state, stateVisible = _state.visible, status = _state.status, animation = _state.animation;
    var children = stateVisible || cache && this._isMounted ? propChildren : null;
    if (children) {
      var _classnames, _classnames2;
      var child = Children.only(children);
      if (typeof child.type === "function" && !(child.type.prototype instanceof Component)) {
        child = React.createElement("div", {role: "none"}, child);
      }
      var childClazz = classnames((_classnames = {}, _classnames[prefix + "overlay-inner"] = true, _classnames[animation.in] = status === "entering" || status === "mounting", _classnames[animation.out] = status === "leaving", _classnames[child.props.className] = !!child.props.className, _classnames[className] = !!className, _classnames));
      if (typeof child.ref === "string") {
        throw new Error("Can not set ref by string in Overlay, use function instead.");
      }
      children = React.cloneElement(child, {
        className: childClazz,
        style: _extends({}, child.props.style, style),
        ref: makeChain$1(this.saveContentRef, child.ref),
        "aria-hidden": !stateVisible && cache && this._isMounted,
        onClick: this.props.onClick
      });
      if (align) {
        var shouldUpdatePosition = status === "leaving" ? false : propShouldUpdatePosition;
        children = React.createElement(Position$1, {
          children,
          target,
          align,
          offset,
          autoFit,
          container: container3,
          needAdjust,
          pinFollowBaseElementWhenFixed,
          beforePosition,
          onPosition: makeChain$1(this.handlePosition, onPosition),
          shouldUpdatePosition,
          rtl
        });
      }
      var wrapperClazz = classnames([prefix + "overlay-wrapper", wrapperClassName]);
      var newWrapperStyle = _extends({}, {
        display: stateVisible ? "" : "none"
      }, wrapperStyle);
      var maskClazz = classnames((_classnames2 = {}, _classnames2[prefix + "overlay-backdrop"] = true, _classnames2[maskClass] = !!maskClass, _classnames2));
      children = React.createElement("div", {
        className: wrapperClazz,
        style: newWrapperStyle,
        dir: rtl ? "rtl" : void 0
      }, hasMask ? React.createElement("div", {
        className: maskClazz,
        onClick: this.handleMaskClick,
        onMouseEnter: onMaskMouseEnter,
        onMouseLeave: onMaskMouseLeave,
        dir: rtl ? "rtl" : void 0
      }, isChildrenInMask && children) : null, !isChildrenInMask && children);
    }
    return React.createElement(Gateway$1, _extends({container: container3, target, children}, {
      ref: this.saveGatewayRef
    }));
  };
  return Overlay2;
}(Component), _class$3.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.any,
  visible: propTypes.bool,
  onRequestClose: propTypes.func,
  target: propTypes.any,
  align: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  offset: propTypes.array,
  container: propTypes.any,
  hasMask: propTypes.bool,
  canCloseByEsc: propTypes.bool,
  canCloseByOutSideClick: propTypes.bool,
  canCloseByMask: propTypes.bool,
  beforeOpen: propTypes.func,
  onOpen: propTypes.func,
  afterOpen: propTypes.func,
  beforeClose: propTypes.func,
  onClose: propTypes.func,
  afterClose: propTypes.func,
  beforePosition: propTypes.func,
  onPosition: propTypes.func,
  shouldUpdatePosition: propTypes.bool,
  autoFocus: propTypes.bool,
  needAdjust: propTypes.bool,
  disableScroll: propTypes.bool,
  cache: propTypes.bool,
  safeNode: propTypes.any,
  wrapperClassName: propTypes.string,
  wrapperStyle: propTypes.object,
  animation: propTypes.oneOfType([propTypes.object, propTypes.bool]),
  onMaskMouseEnter: propTypes.func,
  onMaskMouseLeave: propTypes.func,
  onClick: propTypes.func,
  maskClass: propTypes.string,
  isChildrenInMask: propTypes.bool,
  pinFollowBaseElementWhenFixed: propTypes.bool
}, _class$3.defaultProps = {
  prefix: "next-",
  pure: false,
  visible: false,
  onRequestClose: noop$1,
  target: Position$1.VIEWPORT,
  align: "tl bl",
  offset: [0, 0],
  hasMask: false,
  canCloseByEsc: true,
  canCloseByOutSideClick: true,
  canCloseByMask: true,
  beforeOpen: noop$1,
  onOpen: noop$1,
  afterOpen: noop$1,
  beforeClose: noop$1,
  onClose: noop$1,
  afterClose: noop$1,
  beforePosition: noop$1,
  onPosition: noop$1,
  onMaskMouseEnter: noop$1,
  onMaskMouseLeave: noop$1,
  shouldUpdatePosition: false,
  autoFocus: false,
  needAdjust: true,
  disableScroll: false,
  cache: false,
  isChildrenInMask: false,
  onClick: function onClick(e) {
    return e.stopPropagation();
  },
  maskClass: ""
}, _temp$3);
Overlay.displayName = "Overlay";
var Overlay$1 = polyfill(Overlay);
var _class$4, _temp$4;
var noop$2 = func.noop, makeChain$2 = func.makeChain, bindCtx$2 = func.bindCtx;
var Popup = (_temp$4 = _class$4 = function(_Component) {
  _inherits(Popup2, _Component);
  function Popup2(props) {
    _classCallCheck(this, Popup2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.state = {
      visible: typeof props.visible === "undefined" ? props.defaultVisible : props.visible
    };
    bindCtx$2(_this, ["handleTriggerClick", "handleTriggerKeyDown", "handleTriggerMouseEnter", "handleTriggerMouseLeave", "handleTriggerFocus", "handleTriggerBlur", "handleContentMouseEnter", "handleContentMouseLeave", "handleContentMouseDown", "handleRequestClose", "handleMaskMouseEnter", "handleMaskMouseLeave"]);
    return _this;
  }
  Popup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("visible" in nextProps) {
      return _extends({}, prevState, {
        visible: nextProps.visible
      });
    }
    return null;
  };
  Popup2.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;
    ["_timer", "_hideTimer", "_showTimer"].forEach(function(time) {
      _this2[time] && clearTimeout(_this2[time]);
    });
  };
  Popup2.prototype.handleVisibleChange = function handleVisibleChange(visible, type, e) {
    if (!("visible" in this.props)) {
      this.setState({
        visible
      });
    }
    this.props.onVisibleChange(visible, type, e);
  };
  Popup2.prototype.handleTriggerClick = function handleTriggerClick(e) {
    if (this.state.visible && !this.props.canCloseByTrigger) {
      return;
    }
    this.handleVisibleChange(!this.state.visible, "fromTrigger", e);
  };
  Popup2.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
    var triggerClickKeycode = this.props.triggerClickKeycode;
    var keycodes = Array.isArray(triggerClickKeycode) ? triggerClickKeycode : [triggerClickKeycode];
    if (keycodes.includes(e.keyCode)) {
      e.preventDefault();
      this.handleTriggerClick(e);
    }
  };
  Popup2.prototype.handleTriggerMouseEnter = function handleTriggerMouseEnter(e) {
    var _this3 = this;
    this._mouseNotFirstOnMask = false;
    if (this._hideTimer) {
      clearTimeout(this._hideTimer);
      this._hideTimer = null;
    }
    if (this._showTimer) {
      clearTimeout(this._showTimer);
      this._showTimer = null;
    }
    if (!this.state.visible) {
      this._showTimer = setTimeout(function() {
        _this3.handleVisibleChange(true, "fromTrigger", e);
      }, this.props.delay);
    }
  };
  Popup2.prototype.handleTriggerMouseLeave = function handleTriggerMouseLeave(e, type) {
    var _this4 = this;
    if (this._showTimer) {
      clearTimeout(this._showTimer);
      this._showTimer = null;
    }
    if (this.state.visible) {
      this._hideTimer = setTimeout(function() {
        _this4.handleVisibleChange(false, type || "fromTrigger", e);
      }, this.props.delay);
    }
  };
  Popup2.prototype.handleTriggerFocus = function handleTriggerFocus(e) {
    this.handleVisibleChange(true, "fromTrigger", e);
  };
  Popup2.prototype.handleTriggerBlur = function handleTriggerBlur(e) {
    if (!this._isForwardContent) {
      this.handleVisibleChange(false, "fromTrigger", e);
    }
    this._isForwardContent = false;
  };
  Popup2.prototype.handleContentMouseDown = function handleContentMouseDown() {
    this._isForwardContent = true;
  };
  Popup2.prototype.handleContentMouseEnter = function handleContentMouseEnter() {
    clearTimeout(this._hideTimer);
  };
  Popup2.prototype.handleContentMouseLeave = function handleContentMouseLeave(e) {
    this.handleTriggerMouseLeave(e, "fromContent");
  };
  Popup2.prototype.handleMaskMouseEnter = function handleMaskMouseEnter() {
    if (!this._mouseNotFirstOnMask) {
      clearTimeout(this._hideTimer);
      this._hideTimer = null;
      this._mouseNotFirstOnMask = false;
    }
  };
  Popup2.prototype.handleMaskMouseLeave = function handleMaskMouseLeave() {
    this._mouseNotFirstOnMask = true;
  };
  Popup2.prototype.handleRequestClose = function handleRequestClose(type, e) {
    this.handleVisibleChange(false, type, e);
  };
  Popup2.prototype.renderTrigger = function renderTrigger() {
    var _this5 = this;
    var _props = this.props, trigger = _props.trigger, disabled = _props.disabled;
    var props = {
      key: "trigger",
      "aria-haspopup": true,
      "aria-expanded": this.state.visible
    };
    if (!this.state.visible) {
      props["aria-describedby"] = void 0;
    }
    if (!disabled) {
      var triggerType = this.props.triggerType;
      var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
      var _ref = trigger && trigger.props || {}, onClick2 = _ref.onClick, onKeyDown = _ref.onKeyDown, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave, onFocus = _ref.onFocus, onBlur = _ref.onBlur;
      triggerTypes.forEach(function(triggerType2) {
        switch (triggerType2) {
          case "click":
            props.onClick = makeChain$2(_this5.handleTriggerClick, onClick2);
            props.onKeyDown = makeChain$2(_this5.handleTriggerKeyDown, onKeyDown);
            break;
          case "hover":
            props.onMouseEnter = makeChain$2(_this5.handleTriggerMouseEnter, onMouseEnter);
            props.onMouseLeave = makeChain$2(_this5.handleTriggerMouseLeave, onMouseLeave);
            break;
          case "focus":
            props.onFocus = makeChain$2(_this5.handleTriggerFocus, onFocus);
            props.onBlur = makeChain$2(_this5.handleTriggerBlur, onBlur);
            break;
        }
      });
    }
    return trigger && React.cloneElement(trigger, props);
  };
  Popup2.prototype.renderContent = function renderContent() {
    var _this6 = this;
    var _props2 = this.props, children = _props2.children, triggerType = _props2.triggerType;
    var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
    var content = Children.only(children);
    var _content$props = content.props, onMouseDown = _content$props.onMouseDown, onMouseEnter = _content$props.onMouseEnter, onMouseLeave = _content$props.onMouseLeave;
    var props = {
      key: "portal"
    };
    triggerTypes.forEach(function(triggerType2) {
      switch (triggerType2) {
        case "focus":
          props.onMouseDown = makeChain$2(_this6.handleContentMouseDown, onMouseDown);
          break;
        case "hover":
          props.onMouseEnter = makeChain$2(_this6.handleContentMouseEnter, onMouseEnter);
          props.onMouseLeave = makeChain$2(_this6.handleContentMouseLeave, onMouseLeave);
          break;
      }
    });
    return React.cloneElement(content, props);
  };
  Popup2.prototype.renderPortal = function renderPortal() {
    var _this7 = this;
    var _props3 = this.props, target = _props3.target, safeNode = _props3.safeNode, followTrigger = _props3.followTrigger, triggerType = _props3.triggerType, hasMask = _props3.hasMask, wrapperStyle = _props3.wrapperStyle, others = _objectWithoutProperties(_props3, ["target", "safeNode", "followTrigger", "triggerType", "hasMask", "wrapperStyle"]);
    var container3 = this.props.container;
    var findTriggerNode = function findTriggerNode2() {
      return findDOMNode(_this7);
    };
    var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
    safeNodes.unshift(findTriggerNode);
    var newWrapperStyle = wrapperStyle || {};
    if (followTrigger) {
      container3 = function container4(trigger) {
        return trigger && trigger.parentNode || trigger;
      };
      newWrapperStyle.position = "relative";
    }
    if (triggerType === "hover" && hasMask) {
      others.onMaskMouseEnter = this.handleMaskMouseEnter;
      others.onMaskMouseLeave = this.handleMaskMouseLeave;
    }
    return React.createElement(Overlay$1, _extends({}, others, {
      key: "overlay",
      ref: function ref(overlay) {
        return _this7.overlay = overlay;
      },
      visible: this.state.visible,
      target: target || findTriggerNode,
      container: container3,
      safeNode: safeNodes,
      wrapperStyle: newWrapperStyle,
      triggerType,
      hasMask,
      onRequestClose: this.handleRequestClose
    }), this.renderContent());
  };
  Popup2.prototype.render = function render() {
    return [this.renderTrigger(), this.renderPortal()];
  };
  return Popup2;
}(Component), _class$4.propTypes = {
  children: propTypes.node,
  trigger: propTypes.element,
  triggerType: propTypes.oneOfType([propTypes.string, propTypes.array]),
  triggerClickKeycode: propTypes.oneOfType([propTypes.number, propTypes.array]),
  visible: propTypes.bool,
  defaultVisible: propTypes.bool,
  onVisibleChange: propTypes.func,
  disabled: propTypes.bool,
  autoFit: propTypes.bool,
  delay: propTypes.number,
  canCloseByTrigger: propTypes.bool,
  target: propTypes.any,
  safeNode: propTypes.any,
  followTrigger: propTypes.bool,
  container: propTypes.any,
  hasMask: propTypes.bool,
  wrapperStyle: propTypes.object,
  rtl: propTypes.bool
}, _class$4.defaultProps = {
  triggerType: "hover",
  triggerClickKeycode: [KEYCODE.SPACE, KEYCODE.ENTER],
  defaultVisible: false,
  onVisibleChange: noop$2,
  disabled: false,
  autoFit: false,
  delay: 200,
  canCloseByTrigger: true,
  followTrigger: false,
  container: function container2() {
    return document.body;
  },
  rtl: false
}, _temp$4);
Popup.displayName = "Popup";
var Popup$1 = polyfill(Popup);
Overlay$1.Gateway = Gateway$1;
Overlay$1.Position = Position$1;
Overlay$1.Popup = NextConfigProvider.config(Popup$1, {
  exportNames: ["overlay"]
});
var NextOverlay = NextConfigProvider.config(Overlay$1, {
  exportNames: ["getContent", "getContentNode"]
});
export {NextOverlay as N};

import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as _objectWithoutProperties, R as React, v as reactTransitionGroup, f as _extends, C as Component, p as propTypes, k as _typeof, m as Children} from "./index.9ac755a3.js";
import {a as events, d as dom, f as func, c as support, g as guid} from "./4ad0c37a.js";
var _class, _temp;
var noop = function noop2() {
};
var on = events.on, off = events.off;
var addClass = dom.addClass, removeClass = dom.removeClass;
var prefixes = ["-webkit-", "-moz-", "-o-", "ms-", ""];
function getStyleProperty(node, name) {
  var style = window.getComputedStyle(node);
  var ret = "";
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}
var AnimateChild = (_temp = _class = function(_Component) {
  _inherits(AnimateChild2, _Component);
  function AnimateChild2(props) {
    _classCallCheck(this, AnimateChild2);
    var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));
    func.bindCtx(_this2, ["handleEnter", "handleEntering", "handleEntered", "handleExit", "handleExiting", "handleExited", "addEndListener"]);
    _this2.endListeners = {
      transitionend: [],
      animationend: []
    };
    _this2.timeoutMap = {};
    return _this2;
  }
  AnimateChild2.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;
    Object.keys(this.endListeners).forEach(function(eventName) {
      _this3.endListeners[eventName].forEach(function(listener) {
        off(_this3.node, eventName, listener);
      });
    });
    this.endListeners = {
      transitionend: [],
      animationend: []
    };
  };
  AnimateChild2.prototype.generateEndListener = function generateEndListener(node, done, eventName, id) {
    var _this = this;
    return function endListener(e) {
      if (e && e.target === node) {
        if (_this.timeoutMap[id]) {
          clearTimeout(_this.timeoutMap[id]);
          delete _this.timeoutMap[id];
        }
        done();
        off(node, eventName, endListener);
        var listeners = _this.endListeners[eventName];
        var index = listeners.indexOf(endListener);
        index > -1 && listeners.splice(index, 1);
      }
    };
  };
  AnimateChild2.prototype.addEndListener = function addEndListener(node, done) {
    var _this4 = this;
    if (support.transition || support.animation) {
      var id = guid();
      this.node = node;
      if (support.transition) {
        var transitionEndListener = this.generateEndListener(node, done, "transitionend", id);
        on(node, "transitionend", transitionEndListener);
        this.endListeners.transitionend.push(transitionEndListener);
      }
      if (support.animation) {
        var animationEndListener = this.generateEndListener(node, done, "animationend", id);
        on(node, "animationend", animationEndListener);
        this.endListeners.animationend.push(animationEndListener);
      }
      setTimeout(function() {
        var transitionDelay = parseFloat(getStyleProperty(node, "transition-delay")) || 0;
        var transitionDuration = parseFloat(getStyleProperty(node, "transition-duration")) || 0;
        var animationDelay = parseFloat(getStyleProperty(node, "animation-delay")) || 0;
        var animationDuration = parseFloat(getStyleProperty(node, "animation-duration")) || 0;
        var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
        if (time) {
          _this4.timeoutMap[id] = setTimeout(function() {
            done();
          }, time * 1e3 + 200);
        }
      }, 15);
    } else {
      done();
    }
  };
  AnimateChild2.prototype.removeEndtListener = function removeEndtListener() {
    this.transitionOff && this.transitionOff();
    this.animationOff && this.animationOff();
  };
  AnimateChild2.prototype.removeClassNames = function removeClassNames(node, names) {
    Object.keys(names).forEach(function(key) {
      removeClass(node, names[key]);
    });
  };
  AnimateChild2.prototype.handleEnter = function handleEnter(node, isAppearing) {
    var names = this.props.names;
    if (names) {
      this.removeClassNames(node, names);
      var className = isAppearing ? "appear" : "enter";
      addClass(node, names[className]);
    }
    var hook = isAppearing ? this.props.onAppear : this.props.onEnter;
    hook(node);
  };
  AnimateChild2.prototype.handleEntering = function handleEntering(node, isAppearing) {
    var _this5 = this;
    setTimeout(function() {
      var names = _this5.props.names;
      if (names) {
        var className = isAppearing ? "appearActive" : "enterActive";
        addClass(node, names[className]);
      }
      var hook = isAppearing ? _this5.props.onAppearing : _this5.props.onEntering;
      hook(node);
    }, 10);
  };
  AnimateChild2.prototype.handleEntered = function handleEntered(node, isAppearing) {
    var names = this.props.names;
    if (names) {
      var classNames = isAppearing ? [names.appear, names.appearActive] : [names.enter, names.enterActive];
      classNames.forEach(function(className) {
        removeClass(node, className);
      });
    }
    var hook = isAppearing ? this.props.onAppeared : this.props.onEntered;
    hook(node);
  };
  AnimateChild2.prototype.handleExit = function handleExit(node) {
    var names = this.props.names;
    if (names) {
      this.removeClassNames(node, names);
      addClass(node, names.leave);
    }
    this.props.onExit(node);
  };
  AnimateChild2.prototype.handleExiting = function handleExiting(node) {
    var _this6 = this;
    setTimeout(function() {
      var names = _this6.props.names;
      if (names) {
        addClass(node, names.leaveActive);
      }
      _this6.props.onExiting(node);
    }, 10);
  };
  AnimateChild2.prototype.handleExited = function handleExited(node) {
    var names = this.props.names;
    if (names) {
      [names.leave, names.leaveActive].forEach(function(className) {
        removeClass(node, className);
      });
    }
    this.props.onExited(node);
  };
  AnimateChild2.prototype.render = function render() {
    var _props = this.props, names = _props.names, onAppear = _props.onAppear, onAppeared = _props.onAppeared, onAppearing = _props.onAppearing, onEnter = _props.onEnter, onEntering = _props.onEntering, onEntered = _props.onEntered, onExit = _props.onExit, onExiting = _props.onExiting, onExited = _props.onExited, others = _objectWithoutProperties(_props, ["names", "onAppear", "onAppeared", "onAppearing", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
    return React.createElement(reactTransitionGroup.Transition, _extends({}, others, {
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered,
      onExit: this.handleExit,
      onExiting: this.handleExiting,
      onExited: this.handleExited,
      addEndListener: this.addEndListener
    }));
  };
  return AnimateChild2;
}(Component), _class.propTypes = {
  names: propTypes.oneOfType([propTypes.string, propTypes.object]),
  onAppear: propTypes.func,
  onAppearing: propTypes.func,
  onAppeared: propTypes.func,
  onEnter: propTypes.func,
  onEntering: propTypes.func,
  onEntered: propTypes.func,
  onExit: propTypes.func,
  onExiting: propTypes.func,
  onExited: propTypes.func
}, _class.defaultProps = {
  onAppear: noop,
  onAppearing: noop,
  onAppeared: noop,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
}, _temp);
AnimateChild.displayName = "AnimateChild";
var _class$1, _temp$1;
var noop$1 = function noop3() {
};
var FirstChild = function FirstChild2(props) {
  var childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};
var Animate = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Animate2, _Component);
  function Animate2() {
    _classCallCheck(this, Animate2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Animate2.prototype.normalizeNames = function normalizeNames(names) {
    if (typeof names === "string") {
      return {
        appear: names + "-appear",
        appearActive: names + "-appear-active",
        enter: names + "-enter",
        enterActive: names + "-enter-active",
        leave: names + "-leave",
        leaveActive: names + "-leave-active"
      };
    }
    if ((typeof names === "undefined" ? "undefined" : _typeof(names)) === "object") {
      return {
        appear: names.appear,
        appearActive: names.appear + "-active",
        enter: "" + names.enter,
        enterActive: names.enter + "-active",
        leave: "" + names.leave,
        leaveActive: names.leave + "-active"
      };
    }
  };
  Animate2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, animation = _props.animation, children = _props.children, animationAppear = _props.animationAppear, singleMode = _props.singleMode, component = _props.component, beforeAppear = _props.beforeAppear, onAppear = _props.onAppear, afterAppear = _props.afterAppear, beforeEnter = _props.beforeEnter, onEnter = _props.onEnter, afterEnter = _props.afterEnter, beforeLeave = _props.beforeLeave, onLeave = _props.onLeave, afterLeave = _props.afterLeave, others = _objectWithoutProperties(_props, ["animation", "children", "animationAppear", "singleMode", "component", "beforeAppear", "onAppear", "afterAppear", "beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
    var animateChildren = Children.map(children, function(child) {
      return React.createElement(AnimateChild, {
        key: child.key,
        names: _this2.normalizeNames(animation),
        onAppear: beforeAppear,
        onAppearing: onAppear,
        onAppeared: afterAppear,
        onEnter: beforeEnter,
        onEntering: onEnter,
        onEntered: afterEnter,
        onExit: beforeLeave,
        onExiting: onLeave,
        onExited: afterLeave
      }, child);
    });
    return React.createElement(reactTransitionGroup.TransitionGroup, _extends({
      appear: animationAppear,
      component: singleMode ? FirstChild : component
    }, others), animateChildren);
  };
  return Animate2;
}(Component), _class$1.propTypes = {
  animation: propTypes.oneOfType([propTypes.string, propTypes.object]),
  animationAppear: propTypes.bool,
  component: propTypes.any,
  singleMode: propTypes.bool,
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]),
  beforeAppear: propTypes.func,
  onAppear: propTypes.func,
  afterAppear: propTypes.func,
  beforeEnter: propTypes.func,
  onEnter: propTypes.func,
  afterEnter: propTypes.func,
  beforeLeave: propTypes.func,
  onLeave: propTypes.func,
  afterLeave: propTypes.func
}, _class$1.defaultProps = {
  animationAppear: true,
  component: "div",
  singleMode: true,
  beforeAppear: noop$1,
  onAppear: noop$1,
  afterAppear: noop$1,
  beforeEnter: noop$1,
  onEnter: noop$1,
  afterEnter: noop$1,
  beforeLeave: noop$1,
  onLeave: noop$1,
  afterLeave: noop$1
}, _temp$1);
Animate.displayName = "Animate";
var _class$2, _temp$2;
var noop$2 = function noop4() {
};
var getStyle = dom.getStyle;
var Expand = (_temp$2 = _class$2 = function(_Component) {
  _inherits(Expand2, _Component);
  function Expand2(props) {
    _classCallCheck(this, Expand2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    func.bindCtx(_this, ["beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
    return _this;
  }
  Expand2.prototype.beforeEnter = function beforeEnter(node) {
    if (this.leaving) {
      this.afterLeave(node);
    }
    this.cacheCurrentStyle(node);
    this.cacheComputedStyle(node);
    this.setCurrentStyleToZero(node);
    this.props.beforeEnter(node);
  };
  Expand2.prototype.onEnter = function onEnter(node) {
    this.setCurrentStyleToComputedStyle(node);
    this.props.onEnter(node);
  };
  Expand2.prototype.afterEnter = function afterEnter(node) {
    this.restoreCurrentStyle(node);
    this.props.afterEnter(node);
  };
  Expand2.prototype.beforeLeave = function beforeLeave(node) {
    this.leaving = true;
    this.cacheCurrentStyle(node);
    this.cacheComputedStyle(node);
    this.setCurrentStyleToComputedStyle(node);
    this.props.beforeLeave(node);
  };
  Expand2.prototype.onLeave = function onLeave(node) {
    this.setCurrentStyleToZero(node);
    this.props.onLeave(node);
  };
  Expand2.prototype.afterLeave = function afterLeave(node) {
    this.leaving = false;
    this.restoreCurrentStyle(node);
    this.props.afterLeave(node);
  };
  Expand2.prototype.cacheCurrentStyle = function cacheCurrentStyle(node) {
    this.styleBorderTopWidth = node.style.borderTopWidth;
    this.stylePaddingTop = node.style.paddingTop;
    this.styleHeight = node.style.height;
    this.stylePaddingBottom = node.style.paddingBottom;
    this.styleBorderBottomWidth = node.style.borderBottomWidth;
  };
  Expand2.prototype.cacheComputedStyle = function cacheComputedStyle(node) {
    this.borderTopWidth = getStyle(node, "borderTopWidth");
    this.paddingTop = getStyle(node, "paddingTop");
    this.height = node.offsetHeight;
    this.paddingBottom = getStyle(node, "paddingBottom");
    this.borderBottomWidth = getStyle(node, "borderBottomWidth");
  };
  Expand2.prototype.setCurrentStyleToZero = function setCurrentStyleToZero(node) {
    node.style.borderTopWidth = "0px";
    node.style.paddingTop = "0px";
    node.style.height = "0px";
    node.style.paddingBottom = "0px";
    node.style.borderBottomWidth = "0px";
  };
  Expand2.prototype.setCurrentStyleToComputedStyle = function setCurrentStyleToComputedStyle(node) {
    node.style.borderTopWidth = this.borderTopWidth + "px";
    node.style.paddingTop = this.paddingTop + "px";
    node.style.height = this.height + "px";
    node.style.paddingBottom = this.paddingBottom + "px";
    node.style.borderBottomWidth = this.borderBottomWidth + "px";
  };
  Expand2.prototype.restoreCurrentStyle = function restoreCurrentStyle(node) {
    node.style.borderTopWidth = this.styleBorderTopWidth;
    node.style.paddingTop = this.stylePaddingTop;
    node.style.height = this.styleHeight;
    node.style.paddingBottom = this.stylePaddingBottom;
    node.style.borderBottomWidth = this.styleBorderBottomWidth;
  };
  Expand2.prototype.render = function render() {
    var _props = this.props, animation = _props.animation, others = _objectWithoutProperties(_props, ["animation"]);
    var newAnimation = animation || "expand";
    return React.createElement(Animate, _extends({}, others, {
      animation: newAnimation,
      beforeEnter: this.beforeEnter,
      onEnter: this.onEnter,
      afterEnter: this.afterEnter,
      beforeLeave: this.beforeLeave,
      onLeave: this.onLeave,
      afterLeave: this.afterLeave
    }));
  };
  return Expand2;
}(Component), _class$2.propTypes = {
  animation: propTypes.oneOfType([propTypes.string, propTypes.object]),
  beforeEnter: propTypes.func,
  onEnter: propTypes.func,
  afterEnter: propTypes.func,
  beforeLeave: propTypes.func,
  onLeave: propTypes.func,
  afterLeave: propTypes.func
}, _class$2.defaultProps = {
  beforeEnter: noop$2,
  onEnter: noop$2,
  afterEnter: noop$2,
  beforeLeave: noop$2,
  onLeave: noop$2,
  afterLeave: noop$2
}, _temp$2);
Expand.displayName = "Expand";
Animate.Expand = Expand;
export {Animate as A};

import {p as polyfill, _ as _inherits, R as React, a as _classCallCheck, b as _possibleConstructorReturn, t as dom, v as support, d as classnames, A as Animate, C as Component, h as propTypes, N as NextConfigProvider, o as obj, g as _extends} from "./index.26359282.js";
var _class, _temp;
var getDigitArray = function getDigitArray2(num) {
  return num.toString().split("").reverse().map(function(i) {
    return parseInt(i, 10);
  });
};
var Sup = (_temp = _class = function(_Component) {
  _inherits(Sup2, _Component);
  Sup2.renderDigit = function renderDigit(prefix, digit, key) {
    var children = [];
    for (var i = 0; i < 30; i++) {
      children.push(React.createElement("span", {key: i}, i % 10));
    }
    return React.createElement("span", {className: prefix + "badge-scroll-number-only", key}, children);
  };
  Sup2.renderNumber = function renderNumber(prefix, count) {
    return getDigitArray(count).map(function(digit, i) {
      return Sup2.renderDigit(prefix, digit, i);
    }).reverse();
  };
  function Sup2(props) {
    _classCallCheck(this, Sup2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
    _this.saveRef = function(ref) {
      _this.supEl = ref;
    };
    _this.state = {
      lastCount: 0,
      currentCount: props.count
    };
    return _this;
  }
  Sup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if ("count" in nextProps) {
      return {
        lastCount: prevState.currentCount,
        currentCount: nextProps.count
      };
    }
    return null;
  };
  Sup2.prototype.componentDidMount = function componentDidMount() {
    this.computeStyle(true);
  };
  Sup2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;
    if (prevProps.count !== this.props.count) {
      this.computeStyle(false);
      setTimeout(function() {
        _this2.computeStyle(true, true);
      }, 300);
    }
  };
  Sup2.prototype.computeStyle = function computeStyle(removeTransition, revert) {
    var _this3 = this;
    var _props = this.props, prefix = _props.prefix, count = _props.count, overflowCount = _props.overflowCount;
    var lastCount = this.state.lastCount;
    if (count < 0) {
      return;
    }
    var supNode = this.supEl;
    if (supNode && dom.hasClass(supNode, prefix + "badge-count")) {
      var scrollNums = supNode.querySelectorAll("." + prefix + "badge-scroll-number-only");
      if (scrollNums.length) {
        var height = window.getComputedStyle(supNode).height;
        scrollNums = [].slice.call(scrollNums, 0).reverse();
        getDigitArray(count).forEach(function(digit, i) {
          var position = _this3.getPositionByDigit(digit, i, revert);
          var transformTo = -position * parseFloat(height);
          removeTransition = removeTransition || typeof getDigitArray(lastCount)[i] === "undefined" || lastCount > overflowCount || lastCount <= 0;
          var scrollStyle = support.animation ? {
            transition: removeTransition ? "none" : "transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1)",
            WebkitTransform: "translateY(" + transformTo + "px)",
            transform: "translateY(" + transformTo + "px)",
            height,
            lineHeight: height
          } : {
            top: transformTo + "px",
            height,
            lineHeight: height
          };
          Object.keys(scrollStyle).forEach(function(key) {
            scrollNums[i].style[key] = scrollStyle[key];
          });
        });
      }
    }
  };
  Sup2.prototype.getPositionByDigit = function getPositionByDigit(digit, i, revert) {
    var lastCount = this.state.lastCount;
    if (revert) {
      return 10 + digit;
    }
    var lastDigit = getDigitArray(lastCount)[i] || 0;
    if (this.props.count > lastCount) {
      return (digit >= lastDigit ? 10 : 20) + digit;
    }
    if (digit <= lastDigit) {
      return 10 + digit;
    }
    return digit;
  };
  Sup2.prototype.render = function render() {
    var _classNames;
    var _props2 = this.props, prefix = _props2.prefix, count = _props2.count, showZero = _props2.showZero, overflowCount = _props2.overflowCount, dot = _props2.dot, style = _props2.style, content = _props2.content;
    var supClasses = classnames(prefix + "badge-scroll-number", (_classNames = {}, _classNames[prefix + "badge-count"] = !!count || count === 0 && showZero, _classNames[prefix + "badge-dot"] = dot, _classNames[prefix + "badge-custom"] = !!content, _classNames));
    var children = null;
    var show = dot || count > 0 || count === 0 && showZero || content;
    if (count > 0 || count === 0 && showZero) {
      var realCount = overflowCount > 0 && count > overflowCount ? overflowCount + "+" : count;
      children = isNaN(realCount) ? realCount : Sup2.renderNumber(prefix, count);
    } else if (content) {
      children = content;
    }
    var animation = {
      appear: "zoomIn",
      enter: "zoomIn",
      leave: "zoomOut"
    };
    var wrapper = support.animation ? React.createElement(Animate, {animation}) : React.createElement("span", null);
    var element = show ? React.createElement("sup", {ref: this.saveRef, className: supClasses, style}, children) : null;
    return React.cloneElement(wrapper, {}, element);
  };
  return Sup2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  count: propTypes.number,
  showZero: propTypes.bool,
  overflowCount: propTypes.number,
  content: propTypes.node,
  dot: propTypes.bool,
  style: propTypes.object
}, _class.defaultProps = {
  prefix: "next-",
  count: 0,
  showZero: false,
  overflowCount: 99,
  dot: false
}, _temp);
Sup.displayName = "Sup";
var Sup$1 = polyfill(Sup);
var _class$1, _temp$1;
var Badge = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Badge2, _Component);
  function Badge2() {
    _classCallCheck(this, Badge2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Badge2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, dot = _props.dot, className = _props.className, children = _props.children, content = _props.content, style = _props.style, rtl = _props.rtl, originCount = _props.count, showZero = _props.showZero, originOverflowCount = _props.overflowCount;
    var count = parseInt(originCount, 10);
    var overflowCount = parseInt(originOverflowCount, 10);
    var others = obj.pickOthers(Badge2.propTypes, this.props);
    if (count || count === 0 && showZero) {
      others.title = others.title || "" + count;
    }
    var classes = classnames(prefix + "badge", (_classNames = {}, _classNames[prefix + "badge-not-a-wrapper"] = !children, _classNames), className);
    return React.createElement("span", _extends({dir: rtl ? "rtl" : void 0, className: classes}, others), children, React.createElement(Sup$1, {
      prefix,
      content,
      count,
      showZero,
      overflowCount,
      dot,
      style
    }));
  };
  return Badge2;
}(Component), _class$1.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  count: propTypes.oneOfType([propTypes.number, propTypes.string]),
  showZero: propTypes.bool,
  content: propTypes.node,
  overflowCount: propTypes.oneOfType([propTypes.number, propTypes.string]),
  dot: propTypes.bool
}, _class$1.defaultProps = {
  prefix: "next-",
  count: 0,
  showZero: false,
  overflowCount: 99,
  dot: false
}, _temp$1);
Badge.displayName = "Badge";
var NextBadge = NextConfigProvider.config(Badge);
export {NextBadge as N};

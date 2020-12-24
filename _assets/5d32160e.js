import {_ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, k as _objectWithoutProperties, d as classnames, g as _extends, m as Children, Y as cloneElement, R as React, C as Component, i as propTypes, n as _typeof, N as NextConfigProvider} from "./index.0806c9c7.js";
var _class, _temp;
var Row = (_temp = _class = function(_Component) {
  _inherits(Row2, _Component);
  function Row2() {
    _classCallCheck(this, Row2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Row2.prototype.render = function render() {
    var _extends2, _extends3;
    var _props = this.props, prefix = _props.prefix, pure = _props.pure, wrap = _props.wrap, fixed = _props.fixed, gutter = _props.gutter, fixedWidth = _props.fixedWidth, align = _props.align, justify = _props.justify, hidden = _props.hidden, className = _props.className, Tag = _props.component, children = _props.children, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "pure", "wrap", "fixed", "gutter", "fixedWidth", "align", "justify", "hidden", "className", "component", "children", "rtl"]);
    var hiddenClassObj = void 0;
    if (hidden === true) {
      var _hiddenClassObj;
      hiddenClassObj = (_hiddenClassObj = {}, _hiddenClassObj[prefix + "row-hidden"] = true, _hiddenClassObj);
    } else if (typeof hidden === "string") {
      var _hiddenClassObj2;
      hiddenClassObj = (_hiddenClassObj2 = {}, _hiddenClassObj2[prefix + "row-" + hidden + "-hidden"] = !!hidden, _hiddenClassObj2);
    } else if (Array.isArray(hidden)) {
      hiddenClassObj = hidden.reduce(function(ret, point) {
        ret[prefix + "row-" + point + "-hidden"] = !!point;
        return ret;
      }, {});
    }
    var newClassName = classnames(_extends((_extends2 = {}, _extends2[prefix + "row"] = true, _extends2[prefix + "row-wrap"] = wrap, _extends2[prefix + "row-fixed"] = fixed, _extends2[prefix + "row-fixed-" + fixedWidth] = !!fixedWidth, _extends2[prefix + "row-justify-" + justify] = !!justify, _extends2[prefix + "row-align-" + align] = !!align, _extends2), hiddenClassObj, (_extends3 = {}, _extends3[className] = !!className, _extends3)));
    var newChildren = children;
    var gutterNumber = parseInt(gutter, 10);
    if (gutterNumber !== 0) {
      var halfGutterString = gutterNumber / 2 + "px";
      others.style = _extends({
        marginLeft: "-" + halfGutterString,
        marginRight: "-" + halfGutterString
      }, others.style || {});
      newChildren = Children.map(children, function(child) {
        if (child && child.type && typeof child.type === "function" && child.type.isNextCol) {
          var newChild = cloneElement(child, {
            style: _extends({
              paddingLeft: halfGutterString,
              paddingRight: halfGutterString
            }, child.style || {})
          });
          return newChild;
        }
        return child;
      });
    }
    return React.createElement(Tag, _extends({
      dir: rtl ? "rtl" : "ltr",
      role: "row",
      className: newClassName
    }, others), newChildren);
  };
  return Row2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
  gutter: propTypes.oneOfType([propTypes.string, propTypes.number]),
  wrap: propTypes.bool,
  fixed: propTypes.bool,
  fixedWidth: propTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl"]),
  align: propTypes.oneOf(["top", "center", "bottom", "baseline", "stretch"]),
  justify: propTypes.oneOf(["start", "center", "end", "space-between", "space-around"]),
  hidden: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.array]),
  component: propTypes.oneOfType([propTypes.string, propTypes.func])
}, _class.defaultProps = {
  prefix: "next-",
  pure: false,
  fixed: false,
  gutter: 0,
  wrap: false,
  component: "div"
}, _temp);
Row.displayName = "Row";
var _class$1, _temp$1;
var breakPoints = ["xxs", "xs", "s", "m", "l", "xl"];
var Col = (_temp$1 = _class$1 = function(_Component) {
  _inherits(Col2, _Component);
  function Col2() {
    _classCallCheck(this, Col2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Col2.prototype.render = function render() {
    var _this2 = this, _extends2, _extends3;
    var _props = this.props, prefix = _props.prefix, pure = _props.pure, span = _props.span, offset = _props.offset, fixedSpan = _props.fixedSpan, fixedOffset = _props.fixedOffset, hidden = _props.hidden, align = _props.align, xxs = _props.xxs, xs = _props.xs, s = _props.s, m = _props.m, l = _props.l, xl = _props.xl, Tag = _props.component, className = _props.className, children = _props.children, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "pure", "span", "offset", "fixedSpan", "fixedOffset", "hidden", "align", "xxs", "xs", "s", "m", "l", "xl", "component", "className", "children", "rtl"]);
    var pointClassObj = breakPoints.reduce(function(ret, point) {
      var pointProps = {};
      if (_typeof(_this2.props[point]) === "object") {
        pointProps = _this2.props[point];
      } else {
        pointProps.span = _this2.props[point];
      }
      ret[prefix + "col-" + point + "-" + pointProps.span] = !!pointProps.span;
      ret[prefix + "col-" + point + "-offset-" + pointProps.offset] = !!pointProps.offset;
      return ret;
    }, {});
    var hiddenClassObj = void 0;
    if (hidden === true) {
      var _hiddenClassObj;
      hiddenClassObj = (_hiddenClassObj = {}, _hiddenClassObj[prefix + "col-hidden"] = true, _hiddenClassObj);
    } else if (typeof hidden === "string") {
      var _hiddenClassObj2;
      hiddenClassObj = (_hiddenClassObj2 = {}, _hiddenClassObj2[prefix + "col-" + hidden + "-hidden"] = !!hidden, _hiddenClassObj2);
    } else if (Array.isArray(hidden)) {
      hiddenClassObj = hidden.reduce(function(ret, point) {
        ret[prefix + "col-" + point + "-hidden"] = !!point;
        return ret;
      }, {});
    }
    var classes = classnames(_extends((_extends2 = {}, _extends2[prefix + "col"] = true, _extends2[prefix + "col-" + span] = !!span, _extends2[prefix + "col-fixed-" + fixedSpan] = !!fixedSpan, _extends2[prefix + "col-offset-" + offset] = !!offset, _extends2[prefix + "col-offset-fixed-" + fixedOffset] = !!fixedOffset, _extends2[prefix + "col-" + align] = !!align, _extends2), pointClassObj, hiddenClassObj, (_extends3 = {}, _extends3[className] = className, _extends3)));
    return React.createElement(Tag, _extends({
      dir: rtl ? "rtl" : "ltr",
      role: "gridcell",
      className: classes
    }, others), children);
  };
  return Col2;
}(Component), _class$1.isNextCol = true, _class$1.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  span: propTypes.oneOfType([propTypes.string, propTypes.number]),
  fixedSpan: propTypes.oneOfType([propTypes.string, propTypes.number]),
  offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
  fixedOffset: propTypes.oneOfType([propTypes.string, propTypes.number]),
  align: propTypes.oneOf(["top", "center", "bottom", "baseline", "stretch"]),
  hidden: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.array]),
  xxs: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  xs: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  s: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  m: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  l: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  xl: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  component: propTypes.oneOfType([propTypes.string, propTypes.func])
}, _class$1.defaultProps = {
  prefix: "next-",
  pure: false,
  component: "div"
}, _temp$1);
Col.displayName = "Col";
var Grid = {
  Row: NextConfigProvider.config(Row, {
    transform: function transform(props, deprecated) {
      if ("type" in props) {
        deprecated("type", "fixed | wrap | gutter", "Row");
        var _props = props, type = _props.type, others = _objectWithoutProperties(_props, ["type"]);
        var types = Array.isArray(type) ? type : [type];
        var fixed = void 0;
        if (types.indexOf("fixed") > -1) {
          fixed = true;
        }
        var wrap = void 0;
        if (types.indexOf("wrap") > -1) {
          wrap = true;
        }
        props = _extends({fixed, wrap}, others);
      }
      return props;
    }
  }),
  Col: NextConfigProvider.config(Col)
};
export {Grid as G};

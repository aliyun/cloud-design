import {o as obj, g as _extends, E as env, n as _typeof, N as NextConfigProvider, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as classnames, R as React, C as Component, i as propTypes} from "./index.709df9fa.js";
var isPlainObject = obj.isPlainObject;
function filterUndefinedValue(object) {
  if (!isPlainObject(object)) {
    return object;
  }
  var obj2 = {};
  Object.keys(object).forEach(function(key) {
    var value = object[key];
    if (value !== void 0) {
      obj2[key] = value;
    }
  });
  return obj2;
}
function stripObject(obj2, subObj) {
  var newObject = {};
  Object.keys(obj2).forEach(function(key) {
    if (!(key in subObj)) {
      newObject[key] = obj2[key];
    }
  });
  return newObject;
}
var ieVersion = env.ieVersion;
var getPadding = function getPadding2(padding) {
  if (!Array.isArray(padding)) {
    return {
      padding
    };
  }
  var attrs = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"];
  var paddings = {};
  var value = void 0;
  attrs.forEach(function(attr, index) {
    switch (padding.length) {
      case 1:
        value = padding[0] || 0;
        break;
      case 2:
        value = padding[index] || padding[index - 2] || 0;
        break;
      case 3:
        value = index === 2 ? padding[2] : padding[index] || padding[index - 2] || 0;
        break;
      case 4:
      default:
        value = padding[index] || 0;
        break;
    }
    paddings[attr] = value;
  });
  return paddings;
};
var getMargin = function getMargin2(size) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {isNegative: false, half: false}, isNegative = _ref.isNegative, half = _ref.half;
  if (!size) {
    return {};
  }
  var attrs = ["marginTop", "marginRight", "marginBottom", "marginLeft"];
  var margins = {};
  var param = 1 * (isNegative ? -1 : 1) * (half ? 0.5 : 1);
  var value = void 0;
  attrs.forEach(function(attr, index) {
    if (!Array.isArray(size)) {
      value = param * size;
    } else {
      switch (size.length) {
        case 1:
          value = param * (size[0] || 0);
          break;
        case 2:
          value = param * (size[index] || size[index - 2] || 0);
          break;
        case 3:
          value = param * (index === 2 ? size[2] : size[index] || size[index - 2] || 0);
          break;
        case 4:
        default:
          value = param * (size[index] || 0);
          break;
      }
    }
    margins[attr] = value;
  });
  return margins;
};
var getChildMargin = function getChildMargin2(spacing) {
  return getMargin(spacing, {half: true});
};
var getSpacingHelperMargin = function getSpacingHelperMargin2(spacing) {
  return getMargin(spacing, {isNegative: true, half: true});
};
var getFlexs = function getFlexs2(flex) {
  if (!Array.isArray(flex)) {
    return {
      flex
    };
  }
  var attrs = ["flexGrow", "flexShrink", "flexBasis"];
  var flexs = {};
  flex.forEach(function(val, index) {
    flexs[attrs[index]] = val;
  });
  return flexs;
};
var getGridGap = function getGridGap2(gap) {
  if (!Array.isArray(gap)) {
    return {
      gap
    };
  }
  var attrs = ["rowGap", "columnGap"];
  var gaps = {};
  gap.forEach(function(val, index) {
    gaps[attrs[index]] = val;
  });
  return gaps;
};
var getTemplateCount = function getTemplateCount2(counts) {
  if (!isNaN(counts)) {
    return "repeat(" + counts + ", minmax(0,1fr))";
  }
  return counts;
};
var helperProps = ["margin", "marginTop", "marginLeft", "marginRight", "marginBottom"];
var innerProps = [
  "flexDirection",
  "flexWrap",
  "alignContent",
  "alignItems",
  "display"
];
var filterOuterStyle = function filterOuterStyle2(style) {
  var props = {};
  [].concat(innerProps).forEach(function(key) {
    props[key] = style[key];
  });
  return filterUndefinedValue(stripObject(style, props));
};
var filterHelperStyle = function filterHelperStyle2(style) {
  var props = {};
  helperProps.forEach(function(key) {
    props[key] = style[key];
  });
  return filterUndefinedValue(_extends({}, props, {
    overflow: "hidden"
  }));
};
var filterInnerStyle = function filterInnerStyle2(style) {
  var props = {};
  innerProps.forEach(function(key) {
    props[key] = style[key];
  });
  return filterUndefinedValue(props);
};
var getGridChildProps = function getGridChildProps2(props, device, gap) {
  var _props$row = props.row, row = _props$row === void 0 ? "initial" : _props$row, _props$col = props.col, col = _props$col === void 0 ? "initial" : _props$col, _props$rowSpan = props.rowSpan, rowSpan = _props$rowSpan === void 0 ? 1 : _props$rowSpan, _props$colSpan = props.colSpan, colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan;
  var totalSpan = 12;
  var newColSpan = (typeof colSpan === "undefined" ? "undefined" : _typeof(colSpan)) === "object" && "desktop" in colSpan ? colSpan.desktop : colSpan;
  ["tablet", "phone"].forEach(function(deviceKey) {
    if (deviceKey === device) {
      if ((typeof colSpan === "undefined" ? "undefined" : _typeof(colSpan)) === "object" && device in colSpan) {
        newColSpan = colSpan[device];
      } else {
        switch (deviceKey) {
          case "tablet":
            totalSpan = 8;
            newColSpan = colSpan > 5 ? 8 : colSpan > 2 ? 4 : 2;
            break;
          case "phone":
            totalSpan = 4;
            newColSpan = colSpan > 2 ? 4 : 2;
            break;
        }
      }
    }
  });
  var gapLeft = gap;
  if (Array.isArray(gap)) {
    gapLeft = gap[1];
  }
  var ieChildFix = ieVersion && !(rowSpan === 1 && colSpan === 1) ? {
    display: "inline-block",
    width: gapLeft ? "calc(" + newColSpan / totalSpan * 100 + "% - " + gapLeft + "px)" : newColSpan / totalSpan * 100 + "%"
  } : {};
  return filterUndefinedValue(_extends({
    gridRowStart: row,
    gridRowEnd: "span " + rowSpan,
    gridColumnStart: col,
    gridColumnEnd: "span " + newColSpan
  }, ieChildFix));
};
var getBoxChildProps = function getBoxChildProps2(props) {
  var alignSelf = props.alignSelf, flex = props.flex;
  return filterUndefinedValue(_extends({
    alignSelf
  }, getFlexs(flex)));
};
var createStyle = function(_ref2) {
  var device = _ref2.device, display = _ref2.display, gap = _ref2.gap, direction = _ref2.direction, dense = _ref2.dense, rowSpan = _ref2.rowSpan, colSpan = _ref2.colSpan, row = _ref2.row, col = _ref2.col, rows = _ref2.rows, columns = _ref2.columns, justify = _ref2.justify, align = _ref2.align, alignSelf = _ref2.alignSelf, wrap = _ref2.wrap, flex = _ref2.flex, padding = _ref2.padding, margin = _ref2.margin;
  var style = _extends({}, getPadding(padding));
  var deviceColumns = "auto";
  switch (device) {
    case "phone":
      deviceColumns = 4;
      break;
    case "tablet":
      deviceColumns = 8;
      break;
    case "desktop":
      deviceColumns = 12;
      break;
  }
  var newColumns = !isNaN(columns) ? columns : deviceColumns;
  switch (display) {
    case "grid":
      style = _extends({}, getGridGap(gap), {
        gridTemplateRows: getTemplateCount(rows),
        gridTemplateColumns: getTemplateCount(newColumns),
        gridAutoFlow: "" + (direction || "") + (dense && " dense")
      }, getGridChildProps({
        row,
        rowSpan,
        col,
        colSpan
      }, device), style);
      break;
    case "flex":
      style = _extends({
        msFlexDirection: direction,
        flexDirection: direction,
        msFlexWrap: wrap ? "wrap" : "none",
        flexWrap: wrap ? "wrap" : "nowrap",
        msFlexPack: justify,
        justifyContent: justify,
        msFlexAlign: align,
        alignItems: align
      }, getMargin(margin), getBoxChildProps({
        alignSelf,
        flex
      }), style);
      break;
  }
  return filterUndefinedValue(style);
};
var _class, _temp;
var pickOthers = obj.pickOthers;
var createChildren = function createChildren2(children, _ref) {
  var spacing = _ref.spacing, direction = _ref.direction, wrap = _ref.wrap, device = _ref.device;
  var array = React.Children.toArray(children);
  if (!children) {
    return null;
  }
  return array.map(function(child, index) {
    var spacingMargin = {};
    spacingMargin = getChildMargin(spacing);
    if (!wrap) {
      var isNone = [index === 0, index === array.length - 1];
      var props = direction === "row" ? ["marginLeft", "marginRight"] : ["marginTop", "marginBottom"];
      ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach(function(prop) {
        if (prop in spacingMargin && props.indexOf(prop) === -1) {
          spacingMargin[prop] = 0;
        }
        props.forEach(function(key, i) {
          if (key in spacingMargin && isNone[i]) {
            spacingMargin[key] = 0;
          }
        });
      });
    }
    if (React.isValidElement(child)) {
      var propsMargin = child.props.margin;
      var childPropsMargin = getMargin(propsMargin);
      var gridProps = {};
      if (["function", "object"].indexOf(_typeof(child.type)) > -1 && child.type._typeMark === "responsive_grid") {
        gridProps = createStyle(_extends({display: "grid"}, child.props));
      }
      return React.cloneElement(child, {
        style: _extends({}, spacingMargin, childPropsMargin, gridProps, child.props.style || {})
      });
    }
    return child;
  });
};
var getStyle = function getStyle2() {
  var style = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var props = arguments[1];
  return _extends({}, createStyle(_extends({display: "flex"}, props)), style);
};
var getOuterStyle = function getOuterStyle2(style, styleProps) {
  var sheet = getStyle(style, styleProps);
  return filterOuterStyle(sheet);
};
var getHelperStyle = function getHelperStyle2(style, styleProps) {
  var sheet = getStyle(style, styleProps);
  return filterHelperStyle(_extends({}, sheet, getSpacingHelperMargin(styleProps.spacing)));
};
var getInnerStyle = function getInnerStyle2(style, styleProps) {
  var sheet = getStyle(style, styleProps);
  return filterInnerStyle(sheet);
};
var Box = (_temp = _class = function(_Component) {
  _inherits(Box2, _Component);
  function Box2() {
    _classCallCheck(this, Box2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Box2.prototype.render = function render() {
    var _cx;
    var _props = this.props, prefix = _props.prefix, direction = _props.direction, justify = _props.justify, align = _props.align, wrap = _props.wrap, flex = _props.flex, spacing = _props.spacing, padding = _props.padding, margin = _props.margin, style = _props.style, className = _props.className, children = _props.children, device = _props.device, component = _props.component;
    var styleProps = {
      direction,
      justify,
      align,
      wrap,
      flex,
      spacing,
      padding,
      margin
    };
    var View = component;
    var others = pickOthers(Object.keys(Box2.propTypes), this.props);
    var styleSheet = getStyle(style, styleProps);
    var boxs = createChildren(children, {
      spacing,
      direction,
      wrap,
      device
    });
    var cls = classnames((_cx = {}, _cx[prefix + "box"] = true, _cx), className);
    if (wrap && spacing) {
      var outerStyle = getOuterStyle(style, styleProps);
      var helperStyle = getHelperStyle(style, styleProps);
      var innerStyle = getInnerStyle(style, styleProps);
      return React.createElement(View, _extends({style: outerStyle, className: cls}, others), React.createElement("div", {style: helperStyle}, React.createElement("div", {style: innerStyle, className: prefix + "box"}, boxs)));
    }
    return React.createElement(View, _extends({style: styleSheet, className: cls}, others), boxs);
  };
  return Box2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  style: propTypes.object,
  className: propTypes.any,
  flex: propTypes.oneOfType([propTypes.arrayOf(propTypes.oneOfType([propTypes.number, propTypes.string])), propTypes.number]),
  direction: propTypes.oneOf(["row", "column", "row-reverse"]),
  wrap: propTypes.bool,
  spacing: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),
  margin: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),
  padding: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),
  justify: propTypes.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around"]),
  align: propTypes.oneOf(["flex-start", "center", "flex-end", "baseline", "stretch"]),
  device: propTypes.oneOf(["phone", "tablet", "desktop"]),
  component: propTypes.string
}, _class.defaultProps = {
  prefix: "next-",
  direction: "column",
  wrap: false,
  component: "div"
}, _temp);
Box.displayName = "Box";
var NextBox = NextConfigProvider.config(Box);
export {NextBox as N, createStyle as c, getGridChildProps as g};

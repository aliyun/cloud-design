import {N as NextConfigProvider, o as obj, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, R as React, C as Component, i as propTypes, E as env, g as _extends, d as classnames, n as _typeof} from "./index.9027a3fe.js";
import {c as createStyle, N as NextBox, g as getGridChildProps} from "./27076ae2.js";
var _class, _temp;
var pickOthers = obj.pickOthers;
var Cell = (_temp = _class = function(_Component) {
  _inherits(Cell2, _Component);
  function Cell2() {
    _classCallCheck(this, Cell2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Cell2.prototype.render = function render() {
    var _props = this.props, View = _props.component, children = _props.children;
    var others = pickOthers(Object.keys(Cell2.propTypes), this.props);
    return React.createElement(View, others, children);
  };
  return Cell2;
}(Component), _class._typeMark = "responsive_grid_cell", _class.propTypes = {
  device: propTypes.oneOf(["phone", "tablet", "desktop"]),
  colSpan: propTypes.oneOfType([propTypes.number, propTypes.object]),
  rowSpan: propTypes.number,
  component: propTypes.elementType
}, _class.defaultProps = {
  component: "div",
  device: "desktop"
}, _temp);
Cell.displayName = "Cell";
var Cell$1 = NextConfigProvider.config(Cell);
var _class$1, _temp$1;
var ieVersion = env.ieVersion;
var pickOthers$1 = obj.pickOthers, isReactFragment = obj.isReactFragment;
var createChildren = function createChildren2(children, device, gap) {
  var array = React.Children.toArray(children);
  if (!children) {
    return null;
  }
  return array.map(function(child) {
    if (isReactFragment(child)) {
      return createChildren2(child.props.children, device, gap);
    }
    if (React.isValidElement(child) && ["function", "object"].indexOf(_typeof(child.type)) > -1 && ["form_item", "responsive_grid_cell"].indexOf(child.type._typeMark) > -1) {
      return React.cloneElement(child, {
        style: _extends({}, getGridChildProps(child.props, device, gap), child.props.style || {})
      });
    }
    return child;
  });
};
var getStyle = function getStyle2() {
  var style = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var props = arguments[1];
  return _extends({}, createStyle(_extends({display: "grid"}, props)), style);
};
var ResponsiveGrid = (_temp$1 = _class$1 = function(_Component) {
  _inherits(ResponsiveGrid2, _Component);
  function ResponsiveGrid2() {
    _classCallCheck(this, ResponsiveGrid2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  ResponsiveGrid2.prototype.render = function render() {
    var _classNames;
    var _props = this.props, prefix = _props.prefix, View = _props.component, style = _props.style, className = _props.className, children = _props.children, device = _props.device, rows = _props.rows, columns = _props.columns, gap = _props.gap, rowSpan = _props.rowSpan, colSpan = _props.colSpan, component = _props.component, dense = _props.dense;
    var styleProps = {
      rows,
      columns,
      gap,
      device,
      rowSpan,
      colSpan,
      component,
      dense
    };
    var others = pickOthers$1(Object.keys(ResponsiveGrid2.propTypes), this.props);
    var styleSheet = getStyle(style, styleProps);
    var cls = classnames((_classNames = {}, _classNames[prefix + "responsive-grid"] = true, _classNames[prefix + "responsive-grid-ie"] = ieVersion, _classNames), className);
    return ieVersion ? React.createElement(NextBox, _extends({}, this.props, {direction: "row", wrap: true, spacing: gap, children: createChildren(children, device, gap)})) : React.createElement(View, _extends({style: styleSheet, className: cls}, others), createChildren(children, device, gap));
  };
  return ResponsiveGrid2;
}(Component), _class$1._typeMark = "responsive_grid", _class$1.propTypes = {
  prefix: propTypes.string,
  className: propTypes.any,
  device: propTypes.oneOf(["phone", "tablet", "desktop"]),
  rows: propTypes.oneOfType([propTypes.number, propTypes.string]),
  columns: propTypes.oneOfType([propTypes.number, propTypes.string]),
  gap: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.number]),
  component: propTypes.elementType,
  dense: propTypes.bool,
  style: propTypes.object
}, _class$1.defaultProps = {
  prefix: "next-",
  component: "div",
  device: "desktop",
  dense: false
}, _temp$1);
ResponsiveGrid.displayName = "ResponsiveGrid";
ResponsiveGrid.Cell = Cell$1;
var NextResponsiveGrid = NextConfigProvider.config(ResponsiveGrid);
export {NextResponsiveGrid as N};

import {d as classnames, g as _extends, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, o as obj, f as findDOMNode, t as dom, k as _objectWithoutProperties, R as React, i as propTypes, n as _typeof, p as polyfill, D as NextMenu, s as NextIcon, K as KEYCODE, e as events, C as Component, N as NextConfigProvider, z as zhCN, q as log, L as Checkbox, B as Radio, m as Children$1, j as func, E as env, h as hoistNonReactStatics_cjs} from "./index.91461bfc.js";
import {N as NextAffix} from "./7a5c25cd.js";
import {N as NextButton} from "./2de87bf0.js";
import {N as NextDropdown} from "./f5e955ef.js";
import {N as NextLoading} from "./a406f182.js";
var hasOwnProperty = Object.prototype.hasOwnProperty;
function transformEntryEqual(a, b) {
  for (var k in a) {
    if (hasOwnProperty.call(a, k)) {
      return a[k] === b[k];
    }
  }
  return false;
}
function transformEqual(a, b) {
  if (!a && !b || a === b) {
    return true;
  }
  if (!a !== !b) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (!transformEntryEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}
function shallowObjectEquals(a, b) {
  var k;
  var i = 0;
  var j = 0;
  for (k in a) {
    if (hasOwnProperty.call(a, k)) {
      switch (k) {
        case "transform":
          if (!transformEqual(a[k], b[k])) {
            return false;
          }
          break;
        case "shadowOffset":
          if (!shallowObjectEquals(a[k], b[k])) {
            return false;
          }
          break;
        default:
          if (a[k] !== b[k]) {
            return false;
          }
          break;
      }
      i++;
    }
  }
  for (k in b) {
    if (hasOwnProperty.call(b, k)) {
      j++;
    }
  }
  return i === j;
}
function styleEqual(a, b) {
  if (!a && !b || a === b) {
    return true;
  }
  if (!a !== !b) {
    return false;
  }
  switch (typeof a) {
    case "object":
      if (a instanceof Array) {
        for (var i = 0; i < a.length; i++) {
          if (!styleEqual(a[i], b[i])) {
            return false;
          }
        }
        return a.length === b.length;
      } else {
        return shallowObjectEquals(a, b);
      }
    case "number":
    default:
      return a === b;
  }
}
var styleEqual_1 = styleEqual;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function type(a) {
  return Array.isArray(a) ? "array" : typeof a;
}
function elementEquals(a, b) {
  var typeOfA = type(a);
  var typeOfB = type(b);
  if (typeOfA !== typeOfB)
    return false;
  switch (typeOfA) {
    case "array":
      if (a.length !== b.length)
        return false;
      for (var i = 0; i < a.length; i++) {
        if (!elementEquals(a[i], b[i]))
          return false;
      }
      return true;
    case "object":
      if (!a || !b)
        return a === b;
      if (a.type !== b.type)
        return false;
      if (a.key !== b.key)
        return false;
      if (a.ref !== b.ref)
        return false;
      return shallowElementEquals(a.props, b.props);
    default:
      return a === b;
  }
}
function shallowElementEquals(a, b) {
  var aCount = 0;
  var bCount = 0;
  for (var key in a) {
    if (hasOwnProperty$1.call(a, key)) {
      if (key === "style") {
        if (!styleEqual_1(a[key], b[key]))
          return false;
      } else if (key === "children")
        ;
      else {
        if (a[key] !== b[key])
          return false;
      }
      aCount++;
    }
  }
  for (var key in b) {
    if (hasOwnProperty$1.call(b, key)) {
      bCount++;
    }
  }
  if (aCount !== bCount)
    return false;
  return elementEquals(a.children, b.children);
}
var shallowElementEquals_1 = shallowElementEquals;
var blackList = ["defaultProps", "propTypes", "contextTypes", "childContextTypes", "displayName", "getDerivedStateFromProps"];
var statics = function statics2(Target, Component2) {
  Object.keys(Component2).forEach(function(property) {
    if (blackList.indexOf(property) === -1) {
      Target[property] = Component2[property];
    }
  });
};
var fetchDataByPath = function fetchDataByPath2(object, path) {
  if (!object || !path) {
    return false;
  }
  path = path.toString();
  var field = path.split(".");
  var val = void 0, key = void 0;
  if (field.length) {
    key = field[0];
    if (key.indexOf("[") >= 0) {
      key = key.match(/(.*)\[(.*)\]/);
      if (key) {
        val = object[key[1]][key[2]];
      }
    } else {
      val = object[field[0]];
    }
    if (val) {
      for (var colIndex = 1; colIndex < field.length; colIndex++) {
        val = val[field[colIndex]];
        if (typeof val === "undefined") {
          break;
        }
      }
    }
  }
  return val;
};
var setStickyStyle = function setStickyStyle2(lockChildren, flatenChildren, dir) {
  var offsetArr = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  var prefix = arguments[4];
  var len = flatenChildren.length;
  flatenChildren.forEach(function(col, index) {
    var _classnames;
    var isLeftLast = dir === "left" && index === len - 1;
    var isRightFirst = dir === "right" && index === 0;
    var style = {
      position: "sticky"
    };
    var offset = offsetArr[index];
    if (offset > -1) {
      style[dir] = offset;
    }
    col.className = classnames(col.className, (_classnames = {}, _classnames[prefix + "table-fix-" + dir] = true, _classnames[prefix + "table-fix-left-last"] = isLeftLast, _classnames[prefix + "table-fix-right-first"] = isRightFirst, _classnames));
    col.style = _extends({}, col.style, style);
    col.cellStyle = style;
  });
  var setOffset = function setOffset2(col, index, dir2) {
    var _classnames2;
    var style = {
      position: "sticky"
    };
    var offset = offsetArr[index];
    if (offset > -1) {
      style[dir2] = offset;
    }
    col.className = classnames(col.className, (_classnames2 = {}, _classnames2[prefix + "table-fix-" + dir2] = true, _classnames2[prefix + "table-fix-left-last"] = dir2 === "left", _classnames2[prefix + "table-fix-right-first"] = dir2 === "right", _classnames2));
    col.style = _extends({}, col.style, style);
    col.cellStyle = style;
  };
  var loop = function loop2(arr, i) {
    dir === "right" && arr.reverse();
    arr.forEach(function(child, j) {
      var p = dir === "right" ? i - j : i + j;
      if (child.children) {
        loop2(child.children, p);
        setOffset(child, p, dir);
      }
    });
    dir === "right" && arr.reverse();
  };
  loop(lockChildren, dir === "left" ? 0 : len - 1);
};
var _class, _temp2;
var noop = function noop2() {
};
var Row = (_temp2 = _class = function(_React$Component) {
  _inherits(Row2, _React$Component);
  function Row2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Row2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onClick = function(e) {
      var _this$props = _this.props, record = _this$props.record, rowIndex = _this$props.rowIndex;
      _this.props.onClick(record, rowIndex, e);
    }, _this.onMouseEnter = function(e) {
      var _this$props2 = _this.props, record = _this$props2.record, rowIndex = _this$props2.rowIndex, __rowIndex = _this$props2.__rowIndex;
      var row = __rowIndex || rowIndex;
      _this.onRowHover(record, row, true, e);
    }, _this.onMouseLeave = function(e) {
      var _this$props3 = _this.props, record = _this$props3.record, rowIndex = _this$props3.rowIndex, __rowIndex = _this$props3.__rowIndex;
      var row = __rowIndex || rowIndex;
      _this.onRowHover(record, row, false, e);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Row2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (nextProps.pure) {
      var isEqual = obj.shallowEqual(this.props, nextProps);
      return !isEqual;
    }
    return true;
  };
  Row2.prototype.onRowHover = function onRowHover(record, index, isEnter, e) {
    var _props = this.props, onMouseEnter = _props.onMouseEnter, onMouseLeave = _props.onMouseLeave, currentRow = findDOMNode(this);
    if (isEnter) {
      onMouseEnter(record, index, e);
      currentRow && dom.addClass(currentRow, "hovered");
    } else {
      onMouseLeave(record, index, e);
      currentRow && dom.removeClass(currentRow, "hovered");
    }
  };
  Row2.prototype.renderCells = function renderCells(record, rowIndex) {
    var _this2 = this;
    var _props2 = this.props, Cell2 = _props2.Cell, columns = _props2.columns, getCellProps = _props2.getCellProps, cellRef = _props2.cellRef, prefix = _props2.prefix, primaryKey = _props2.primaryKey, __rowIndex = _props2.__rowIndex, pure = _props2.pure, locale = _props2.locale, rtl = _props2.rtl;
    rowIndex = rowIndex !== void 0 ? rowIndex : this.props.rowIndex;
    var lockType = this.context.lockType;
    return columns.map(function(child, index) {
      var _classnames;
      var dataIndex = child.dataIndex, align = child.align, alignHeader = child.alignHeader, width = child.width, colSpan = child.colSpan, style = child.style, cellStyle = child.cellStyle, __colIndex = child.__colIndex, others = _objectWithoutProperties(child, ["dataIndex", "align", "alignHeader", "width", "colSpan", "style", "cellStyle", "__colIndex"]);
      var colIndex = "__colIndex" in child ? __colIndex : index;
      var value = fetchDataByPath(record, dataIndex);
      var attrs = getCellProps(rowIndex, colIndex, dataIndex, record) || {};
      if (_this2.context.notRenderCellIndex) {
        var matchCellIndex = _this2.context.notRenderCellIndex.map(function(cellIndex) {
          return cellIndex.toString();
        }).indexOf([rowIndex, colIndex].toString());
        if (matchCellIndex > -1) {
          _this2.context.notRenderCellIndex.splice(matchCellIndex, 1);
          return null;
        }
      }
      if (attrs.colSpan && attrs.colSpan > 1 || attrs.rowSpan && attrs.rowSpan > 1) {
        _this2._getNotRenderCellIndex(colIndex, rowIndex, attrs.colSpan || 1, attrs.rowSpan || 1);
      }
      var cellClass = attrs.className;
      var className = classnames((_classnames = {
        first: lockType !== "right" && colIndex === 0,
        last: lockType !== "left" && (colIndex === columns.length - 1 || colIndex + attrs.colSpan === columns.length)
      }, _classnames[child.className] = child.className, _classnames[cellClass] = cellClass, _classnames));
      var newStyle = _extends({}, attrs.style, cellStyle);
      return React.createElement(Cell2, _extends({
        key: __rowIndex + "-" + colIndex
      }, others, attrs, {
        style: newStyle,
        "data-next-table-col": colIndex,
        "data-next-table-row": rowIndex,
        ref: function ref(cell5) {
          return cellRef(__rowIndex, colIndex, cell5);
        },
        prefix,
        pure,
        primaryKey,
        record,
        className,
        value,
        colIndex,
        rowIndex,
        align,
        locale,
        rtl,
        width
      }));
    });
  };
  Row2.prototype._getNotRenderCellIndex = function _getNotRenderCellIndex(colIndex, rowIndex, colSpan, rowSpan) {
    var maxColIndex = colSpan;
    var maxRowIndex = rowSpan;
    var notRenderCellIndex = [];
    for (var i = 0; i < maxColIndex; i++) {
      for (var j = 0; j < maxRowIndex; j++) {
        notRenderCellIndex.push([rowIndex + j, colIndex + i]);
      }
    }
    [].push.apply(this.context.notRenderCellIndex, notRenderCellIndex);
  };
  Row2.prototype.render = function render() {
    var _classnames2;
    var _props3 = this.props, prefix = _props3.prefix, className = _props3.className, onClick = _props3.onClick, onMouseEnter = _props3.onMouseEnter, onMouseLeave = _props3.onMouseLeave, columns = _props3.columns, Cell2 = _props3.Cell, getCellProps = _props3.getCellProps, rowIndex = _props3.rowIndex, record = _props3.record, __rowIndex = _props3.__rowIndex, children = _props3.children, primaryKey = _props3.primaryKey, cellRef = _props3.cellRef, colGroup = _props3.colGroup, pure = _props3.pure, locale = _props3.locale, expandedIndexSimulate = _props3.expandedIndexSimulate, tableOuterWidth = _props3.tableOuterWidth, rtl = _props3.rtl, wrapper2 = _props3.wrapper, others = _objectWithoutProperties(_props3, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "getCellProps", "rowIndex", "record", "__rowIndex", "children", "primaryKey", "cellRef", "colGroup", "pure", "locale", "expandedIndexSimulate", "tableOuterWidth", "rtl", "wrapper"]);
    var cls = classnames((_classnames2 = {}, _classnames2[prefix + "table-row"] = true, _classnames2[className] = className, _classnames2));
    var tr = React.createElement("tr", _extends({
      className: cls,
      role: "row"
    }, others, {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }), this.renderCells(record), children);
    return wrapper2(tr);
  };
  return Row2;
}(React.Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  primaryKey: propTypes.string,
  className: propTypes.string,
  columns: propTypes.array,
  record: propTypes.any,
  Cell: propTypes.func,
  rowIndex: propTypes.number,
  getCellProps: propTypes.func,
  onClick: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  children: propTypes.any,
  cellRef: propTypes.func,
  colGroup: propTypes.object,
  locale: propTypes.object,
  wrapper: propTypes.func
}, _class.defaultProps = {
  prefix: "next-",
  primaryKey: "id",
  columns: [],
  record: {},
  getCellProps: noop,
  onClick: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  cellRef: noop,
  colGroup: {},
  wrapper: function wrapper(row) {
    return row;
  }
}, _class.contextTypes = {
  notRenderCellIndex: propTypes.array,
  lockType: propTypes.oneOf(["left", "right"])
}, _temp2);
Row.displayName = "Row";
var _class$1, _temp;
var Cell = (_temp = _class$1 = function(_React$Component) {
  _inherits(Cell2, _React$Component);
  function Cell2() {
    _classCallCheck(this, Cell2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Cell2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (nextProps.pure) {
      var isEqual = obj.shallowEqual(this.props, nextProps);
      return !isEqual;
    }
    return true;
  };
  Cell2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, cell5 = _props.cell, value = _props.value, resizable = _props.resizable, colIndex = _props.colIndex, rowIndex = _props.rowIndex, __colIndex = _props.__colIndex, record = _props.record, context = _props.context, align = _props.align, _props$style = _props.style, style = _props$style === void 0 ? {} : _props$style, Tag = _props.component, children = _props.children, title = _props.title, width = _props.width, innerStyle = _props.innerStyle, primaryKey = _props.primaryKey, __normalized = _props.__normalized, filterMode = _props.filterMode, filterMenuProps = _props.filterMenuProps, filterProps = _props.filterProps, filters = _props.filters, sortable = _props.sortable, lock2 = _props.lock, pure = _props.pure, locale = _props.locale, expandedIndexSimulate = _props.expandedIndexSimulate, rtl = _props.rtl, isIconLeft = _props.isIconLeft, type2 = _props.type, htmlTitle = _props.htmlTitle, others = _objectWithoutProperties(_props, ["prefix", "className", "cell", "value", "resizable", "colIndex", "rowIndex", "__colIndex", "record", "context", "align", "style", "component", "children", "title", "width", "innerStyle", "primaryKey", "__normalized", "filterMode", "filterMenuProps", "filterProps", "filters", "sortable", "lock", "pure", "locale", "expandedIndexSimulate", "rtl", "isIconLeft", "type", "htmlTitle"]);
    var tagStyle = _extends({}, style);
    var cellProps = {value, index: rowIndex, record, context};
    var content = cell5;
    if (React.isValidElement(content)) {
      content = React.cloneElement(content, cellProps);
    } else if (typeof content === "function") {
      content = content(value, rowIndex, record, context);
    }
    if (align) {
      tagStyle.textAlign = align;
      if (rtl) {
        tagStyle.textAlign = align === "left" ? "right" : align === "right" ? "left" : align;
      }
    }
    var cls = classnames((_classnames = {}, _classnames[prefix + "table-cell"] = true, _classnames[className] = className, _classnames));
    return React.createElement(Tag, _extends({}, others, {className: cls, style: tagStyle, role: "gridcell"}), React.createElement("div", {
      className: prefix + "table-cell-wrapper",
      style: innerStyle,
      title: htmlTitle,
      "data-next-table-col": __colIndex,
      "data-next-table-row": rowIndex
    }, isIconLeft ? children : content, isIconLeft ? content : children));
  };
  return Cell2;
}(React.Component), _class$1.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  primaryKey: propTypes.string,
  className: propTypes.string,
  record: propTypes.any,
  value: propTypes.any,
  isIconLeft: propTypes.bool,
  colIndex: propTypes.number,
  rowIndex: propTypes.number,
  __colIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),
  title: propTypes.any,
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  context: propTypes.any,
  cell: propTypes.oneOfType([propTypes.element, propTypes.node, propTypes.func]),
  align: propTypes.oneOf(["left", "center", "right"]),
  component: propTypes.oneOf(["td", "th", "div"]),
  children: propTypes.any,
  style: propTypes.object,
  innerStyle: propTypes.object,
  filterMode: propTypes.oneOf(["single", "multiple"]),
  filterMenuProps: propTypes.object,
  filterProps: propTypes.object,
  filters: propTypes.array,
  sortable: propTypes.bool,
  lock: propTypes.any,
  type: propTypes.oneOf(["header", "body"]),
  resizable: propTypes.bool,
  __normalized: propTypes.bool
}, _class$1.defaultProps = {
  component: "td",
  type: "body",
  isIconLeft: false,
  cell: function cell(value) {
    return value;
  },
  prefix: "next-"
}, _temp);
Cell.displayName = "Cell";
var _class$2, _temp2$1;
var noop$1 = function noop3() {
};
var Body = (_temp2$1 = _class$2 = function(_React$Component) {
  _inherits(Body2, _React$Component);
  function Body2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Body2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getRowRef = function(i, row) {
      _this.props.rowRef(i, row);
    }, _this.onRowClick = function(record, index, e) {
      _this.props.onRowClick(record, index, e);
    }, _this.onRowMouseEnter = function(record, index, e) {
      _this.props.onRowMouseEnter(record, index, e);
    }, _this.onRowMouseLeave = function(record, index, e) {
      _this.props.onRowMouseLeave(record, index, e);
    }, _this.onBodyMouseOver = function(e) {
      _this.props.onBodyMouseOver(e);
    }, _this.onBodyMouseOut = function(e) {
      _this.props.onBodyMouseOut(e);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Body2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, prefix = _props.prefix, className = _props.className, children = _props.children, Tag = _props.component, colGroup = _props.colGroup, loading = _props.loading, emptyContent = _props.emptyContent, components = _props.components, getCellProps = _props.getCellProps, primaryKey = _props.primaryKey, getRowProps = _props.getRowProps, dataSource = _props.dataSource, cellRef = _props.cellRef, columns = _props.columns, rowRef = _props.rowRef, onRowClick = _props.onRowClick, onRowMouseEnter = _props.onRowMouseEnter, onRowMouseLeave = _props.onRowMouseLeave, onBodyMouseOver = _props.onBodyMouseOver, onBodyMouseOut = _props.onBodyMouseOut, locale = _props.locale, pure = _props.pure, expandedIndexSimulate = _props.expandedIndexSimulate, tableOuterWidth = _props.tableOuterWidth, rtl = _props.rtl, crossline = _props.crossline, tableWidth = _props.tableWidth, others = _objectWithoutProperties(_props, ["prefix", "className", "children", "component", "colGroup", "loading", "emptyContent", "components", "getCellProps", "primaryKey", "getRowProps", "dataSource", "cellRef", "columns", "rowRef", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "onBodyMouseOver", "onBodyMouseOut", "locale", "pure", "expandedIndexSimulate", "tableOuterWidth", "rtl", "crossline", "tableWidth"]);
    var _components$Row = components.Row, Row$1 = _components$Row === void 0 ? Row : _components$Row, _components$Cell = components.Cell, Cell$1 = _components$Cell === void 0 ? Cell : _components$Cell;
    var empty = loading ? React.createElement("span", null, " ") : emptyContent || locale.empty;
    var rows = React.createElement("tr", null, React.createElement("td", {colSpan: columns.length}, React.createElement("div", {className: prefix + "table-empty"}, empty)));
    if (Tag === "div") {
      rows = React.createElement("table", {role: "table"}, React.createElement("tbody", null, rows));
    }
    if (dataSource.length) {
      rows = dataSource.map(function(record, index) {
        var _classnames;
        var rowProps = {};
        var rowIndex = (typeof record === "undefined" ? "undefined" : _typeof(record)) === "object" && "__rowIndex" in record ? record.__rowIndex : index;
        if (expandedIndexSimulate) {
          rowProps = record.__expanded ? {} : getRowProps(record, index / 2);
        } else {
          rowProps = getRowProps(record, rowIndex);
        }
        rowProps = rowProps || {};
        var rowClass = rowProps.className;
        var className2 = classnames((_classnames = {
          first: index === 0,
          last: index === dataSource.length - 1
        }, _classnames[rowClass] = rowClass, _classnames));
        var expanded2 = record.__expanded ? "expanded" : "";
        return React.createElement(Row$1, _extends({
          key: "" + (record[primaryKey] || (record[primaryKey] === 0 ? 0 : rowIndex)) + expanded2
        }, rowProps, {
          ref: _this2.getRowRef.bind(_this2, rowIndex),
          colGroup,
          rtl,
          columns,
          primaryKey,
          record,
          rowIndex,
          __rowIndex: rowIndex,
          prefix,
          pure,
          cellRef,
          getCellProps,
          className: className2,
          Cell: Cell$1,
          onClick: _this2.onRowClick,
          locale,
          tableOuterWidth,
          onMouseEnter: _this2.onRowMouseEnter,
          onMouseLeave: _this2.onRowMouseLeave
        }));
      });
    }
    var event = crossline ? {
      onMouseOver: this.onBodyMouseOver,
      onMouseOut: this.onBodyMouseOut
    } : {};
    return React.createElement(Tag, _extends({className}, others, event), rows, children);
  };
  return Body2;
}(React.Component), _class$2.propTypes = {
  loading: propTypes.bool,
  emptyContent: propTypes.any,
  prefix: propTypes.string,
  pure: propTypes.bool,
  components: propTypes.object,
  getCellProps: propTypes.func,
  cellRef: propTypes.func,
  primaryKey: propTypes.string,
  getRowProps: propTypes.func,
  rowRef: propTypes.func,
  dataSource: propTypes.array,
  children: propTypes.any,
  className: propTypes.string,
  component: propTypes.string,
  colGroup: propTypes.object,
  columns: propTypes.array,
  onRowClick: propTypes.func,
  onRowMouseEnter: propTypes.func,
  onRowMouseLeave: propTypes.func,
  onBodyMouseOver: propTypes.func,
  onBodyMouseOut: propTypes.func,
  locale: propTypes.object,
  crossline: propTypes.bool,
  tableWidth: propTypes.number
}, _class$2.defaultProps = {
  loading: false,
  prefix: "next-",
  components: {},
  getCellProps: noop$1,
  cellRef: noop$1,
  primaryKey: "id",
  getRowProps: noop$1,
  rowRef: noop$1,
  dataSource: [],
  component: "tbody",
  columns: []
}, _temp2$1);
Body.displayName = "Body";
var _class$3, _temp$1, _initialiseProps;
var Filter = (_temp$1 = _class$3 = function(_React$Component) {
  _inherits(Filter2, _React$Component);
  function Filter2(props) {
    _classCallCheck(this, Filter2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    _initialiseProps.call(_this);
    var filterParams = props.filterParams || {};
    var filterConfig = filterParams[props.dataIndex] || {};
    _this.state = {
      visible: filterConfig.visible || false,
      selectedKeys: filterConfig.selectedKeys || [],
      selectedKeysChangedByInner: true
    };
    _this._selectedKeys = [].concat(_this.state.selectedKeys);
    return _this;
  }
  Filter2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var state = {};
    if (nextProps.hasOwnProperty("filterParams") && typeof nextProps.filterParams !== "undefined") {
      var dataIndex = nextProps.dataIndex || this.props.dataIndex;
      var filterParams = nextProps.filterParams || {};
      var filterConfig = filterParams[dataIndex] || {};
      var selectedKeys = void 0;
      if (prevState.selectedKeysChangedByInner) {
        selectedKeys = prevState.selectedKeys || [];
        state.selectedKeysChangedByInner = false;
      } else {
        selectedKeys = filterConfig.selectedKeys || [];
      }
      state.selectedKeys = selectedKeys;
    }
    return state;
  };
  Filter2.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var selectedKeys = prevState.selectedKeys;
    this._selectedKeys = [].concat(selectedKeys);
  };
  Filter2.prototype.render = function render() {
    var _classnames, _classnames2;
    var _props = this.props, filters = _props.filters, prefix = _props.prefix, locale = _props.locale, className = _props.className, filterMode = _props.filterMode, filterMenuProps = _props.filterMenuProps, filterProps = _props.filterProps, rtl = _props.rtl;
    var _state = this.state, visible = _state.visible, selectedKeys = _state.selectedKeys;
    var _ref = filterMenuProps || {}, subMenuSelectable = _ref.subMenuSelectable, others = _objectWithoutProperties(_ref, ["subMenuSelectable"]);
    function renderMenuItem(item) {
      return React.createElement(NextMenu.Item, {key: item.value}, item.label);
    }
    function renderSubMenu(parent, children) {
      return React.createElement(NextMenu.SubMenu, {label: parent.label, key: parent.value, selectable: subMenuSelectable}, renderMenuContent(children));
    }
    function renderMenuContent(list2) {
      return list2.map(function(item) {
        if (item.children) {
          return renderSubMenu(item, item.children);
        } else {
          return renderMenuItem(item);
        }
      });
    }
    var content = renderMenuContent(filters), footer = React.createElement("div", {className: prefix + "table-filter-footer"}, React.createElement(NextButton, {type: "primary", onClick: this.onFilterConfirm}, locale.ok), React.createElement(NextButton, {onClick: this.onFilterClear}, locale.reset));
    var cls = classnames((_classnames = {}, _classnames[prefix + "table-filter"] = true, _classnames[className] = className, _classnames));
    var filterIconCls = classnames((_classnames2 = {}, _classnames2[prefix + "table-filter-active"] = selectedKeys && selectedKeys.length > 0, _classnames2));
    return React.createElement(NextDropdown, _extends({
      trigger: React.createElement("span", {
        role: "button",
        "aria-label": locale.filter,
        onKeyDown: this.filterKeydown,
        tabIndex: "0",
        className: cls
      }, React.createElement(NextIcon, {type: "filter", size: "small", className: filterIconCls})),
      triggerType: "click",
      visible,
      autoFocus: true,
      rtl,
      needAdjust: false,
      onVisibleChange: this.onFilterVisible
    }, filterProps), React.createElement(NextMenu, _extends({
      footer,
      rtl,
      selectedKeys,
      selectMode: filterMode,
      onSelect: this.onFilterSelect
    }, others), content));
  };
  return Filter2;
}(React.Component), _class$3.propTypes = {
  dataIndex: propTypes.string,
  filters: propTypes.array,
  filterMode: propTypes.string,
  filterParams: propTypes.object,
  filterMenuProps: propTypes.object,
  filterProps: propTypes.object,
  locale: propTypes.object,
  onFilter: propTypes.func,
  prefix: propTypes.string,
  rtl: propTypes.bool
}, _class$3.defaultProps = {
  onFilter: function onFilter() {
  }
}, _initialiseProps = function _initialiseProps2() {
  var _this2 = this;
  this.filterKeydown = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode === KEYCODE.ENTER) {
      _this2.setState({
        visible: !_this2.state.visible
      });
    }
  };
  this.onFilterVisible = function(visible) {
    _this2.setState({
      visible
    });
    if (!visible) {
      var selectedKeys = [].concat(_this2._selectedKeys);
      _this2.setState({
        selectedKeysChangedByInner: true,
        selectedKeys
      });
    }
  };
  this.onFilterSelect = function(selectedKeys) {
    _this2.setState({
      visible: true,
      selectedKeysChangedByInner: true,
      selectedKeys
    });
  };
  this.onFilterConfirm = function() {
    var selectedKeys = _this2.state.selectedKeys;
    var filterParams = {}, dataIndex = _this2.props.dataIndex;
    filterParams[dataIndex] = {
      visible: false,
      selectedKeys
    };
    _this2._selectedKeys = [].concat(selectedKeys);
    _this2.setState({
      visible: false,
      selectedKeysChangedByInner: true
    });
    _this2.props.onFilter(filterParams);
  };
  this.onFilterClear = function() {
    var filterParams = {}, dataIndex = _this2.props.dataIndex;
    filterParams[dataIndex] = {
      visible: false,
      selectedKeys: []
    };
    _this2._selectedKeys = [];
    _this2.setState({
      selectedKeys: [],
      visible: false,
      selectedKeysChangedByInner: true
    });
    _this2.props.onFilter(filterParams);
  };
}, _temp$1);
Filter.displayName = "Filter";
var FilterComponent = polyfill(Filter);
var _class$4, _temp2$2;
var Sort = (_temp2$2 = _class$4 = function(_React$Component) {
  _inherits(Sort2, _React$Component);
  function Sort2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Sort2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function() {
      var _this$props = _this.props, sort = _this$props.sort, dataIndex = _this$props.dataIndex;
      _this.onSort(dataIndex, sort[dataIndex] === "desc" ? "asc" : "desc");
    }, _this.keydownHandler = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.keyCode === KEYCODE.ENTER) {
        _this.handleClick();
      }
    }, _this.onSort = function(dataIndex, order) {
      var sort = {};
      sort[dataIndex] = order;
      _this.props.onSort(dataIndex, order, sort);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Sort2.prototype.renderSort = function renderSort() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, sort = _props.sort, sortIcons = _props.sortIcons, className = _props.className, dataIndex = _props.dataIndex, locale = _props.locale, rtl = _props.rtl, sortStatus = sort[dataIndex], map = {
      desc: "descending",
      asc: "ascending"
    };
    var icons = ["asc", "desc"].map(function(sortOrder) {
      return React.createElement("a", {
        key: sortOrder,
        className: sortStatus === sortOrder ? "current" : ""
      }, sortIcons ? sortIcons[sortOrder] : React.createElement(NextIcon, {rtl, type: map[sortOrder], size: "small"}));
    });
    var cls = classnames((_classnames = {}, _classnames[prefix + "table-sort"] = true, _classnames[className] = className, _classnames));
    return React.createElement("span", {
      role: "button",
      tabIndex: "0",
      "aria-label": locale[sortStatus],
      className: cls,
      onClick: this.handleClick.bind(this),
      onKeyDown: this.keydownHandler
    }, icons);
  };
  Sort2.prototype.render = function render() {
    return this.renderSort();
  };
  return Sort2;
}(React.Component), _class$4.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  className: propTypes.string,
  sort: propTypes.object,
  sortIcons: propTypes.object,
  onSort: propTypes.func,
  dataIndex: propTypes.string,
  locale: propTypes.object
}, _class$4.defaultProps = {
  sort: {}
}, _temp2$2);
Sort.displayName = "Sort";
var _class$5, _temp2$3;
var Resize = (_temp2$3 = _class$5 = function(_React$Component) {
  _inherits(Resize2, _React$Component);
  function Resize2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Resize2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onMouseDown = function(e) {
      _this.lastPageX = e.pageX;
      events.on(document, "mousemove", _this.onMouseMove);
      events.on(document, "mouseup", _this.onMouseUp);
      _this.unSelect();
    }, _this.onMouseMove = function(e) {
      var pageX = e.pageX;
      var changedPageX = pageX - _this.lastPageX;
      if (_this.props.rtl) {
        changedPageX = -changedPageX;
      }
      _this.props.onChange(_this.props.dataIndex, changedPageX);
      _this.lastPageX = pageX;
    }, _this.onMouseUp = function() {
      _this.destory();
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Resize2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.destory();
  };
  Resize2.prototype.destory = function destory() {
    events.off(document, "mousemove", this.onMouseMove);
    events.off(document, "mouseup", this.onMouseMove);
    this.select();
  };
  Resize2.prototype.unSelect = function unSelect() {
    dom.setStyle(document.body, {
      userSelect: "none",
      cursor: "ew-resize"
    });
    document.body.setAttribute("unselectable", "on");
  };
  Resize2.prototype.select = function select() {
    dom.setStyle(document.body, {
      userSelect: "",
      cursor: ""
    });
    document.body.removeAttribute("unselectable");
  };
  Resize2.prototype.render = function render() {
    var prefix = this.props.prefix;
    return React.createElement("a", {
      className: prefix + "table-resize-handler",
      onMouseDown: this.onMouseDown
    });
  };
  return Resize2;
}(React.Component), _class$5.propTypes = {
  prefix: propTypes.string,
  rtl: propTypes.bool,
  onChange: propTypes.func,
  dataIndex: propTypes.string
}, _class$5.defaultProps = {
  onChange: function onChange() {
  }
}, _temp2$3);
Resize.displayName = "Resize";
var _class$6, _temp2$4;
var noop$2 = function noop4() {
};
var Header = (_temp2$4 = _class$6 = function(_React$Component) {
  _inherits(Header2, _React$Component);
  function Header2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, Header2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getCellRef = function(i, j, cell5) {
      _this.props.headerCellRef(i, j, cell5);
    }, _this.onSort = function(dataIndex, order, sort) {
      _this.props.onSort(dataIndex, order, sort);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  Header2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, prefix = _props.prefix, className = _props.className, children = _props.children, Tag = _props.component, colGroup = _props.colGroup, columns = _props.columns, locale = _props.locale, filterParams = _props.filterParams, onFilter2 = _props.onFilter, components = _props.components, affixRef = _props.affixRef, headerCellRef = _props.headerCellRef, onSort = _props.onSort, sort = _props.sort, sortIcons = _props.sortIcons, onResizeChange = _props.onResizeChange, pure = _props.pure, rtl = _props.rtl, tableWidth = _props.tableWidth, others = _objectWithoutProperties(_props, ["prefix", "className", "children", "component", "colGroup", "columns", "locale", "filterParams", "onFilter", "components", "affixRef", "headerCellRef", "onSort", "sort", "sortIcons", "onResizeChange", "pure", "rtl", "tableWidth"]);
    var _components$Cell = components.Cell, Cell$1 = _components$Cell === void 0 ? Cell : _components$Cell, _components$Filter = components.Filter, Filter2 = _components$Filter === void 0 ? FilterComponent : _components$Filter, _components$Sort = components.Sort, Sort$1 = _components$Sort === void 0 ? Sort : _components$Sort, _components$Resize = components.Resize, Resize$1 = _components$Resize === void 0 ? Resize : _components$Resize;
    var rowSpan = columns.length;
    var header = columns.map(function(cols, index) {
      var col = cols.map(function(col2, j) {
        var _classnames;
        var title = col2.title, colSpan = col2.colSpan, sortable = col2.sortable, resizable = col2.resizable, dataIndex = col2.dataIndex, filters = col2.filters, filterMode = col2.filterMode, filterMenuProps = col2.filterMenuProps, filterProps = col2.filterProps, width = col2.width, align = col2.align, alignHeader = col2.alignHeader, className2 = col2.className, __normalized = col2.__normalized, lock2 = col2.lock, cellStyle = col2.cellStyle, others2 = _objectWithoutProperties(col2, ["title", "colSpan", "sortable", "resizable", "dataIndex", "filters", "filterMode", "filterMenuProps", "filterProps", "width", "align", "alignHeader", "className", "__normalized", "lock", "cellStyle"]);
        className2 = classnames((_classnames = {}, _classnames[prefix + "table-header-node"] = true, _classnames[prefix + "table-header-resizable"] = resizable, _classnames[className2] = className2, _classnames));
        var attrs = {}, sortElement = void 0, filterElement = void 0, resizeElement = void 0;
        attrs.colSpan = colSpan;
        if (!(col2.children && col2.children.length)) {
          if (sortable) {
            sortElement = React.createElement(Sort$1, {
              prefix,
              className: prefix + "table-header-icon",
              dataIndex,
              onSort: _this2.onSort,
              sortIcons,
              sort,
              rtl,
              locale
            });
          }
          if (resizable) {
            resizeElement = React.createElement(Resize$1, {
              prefix,
              rtl,
              dataIndex,
              onChange: onResizeChange
            });
          }
          if (filters) {
            filterElement = filters.length ? React.createElement(Filter2, {
              dataIndex,
              className: prefix + "table-header-icon",
              filters,
              prefix,
              locale,
              rtl,
              filterParams,
              filterMode,
              filterMenuProps,
              filterProps,
              onFilter: onFilter2
            }) : null;
          }
          attrs.rowSpan = rowSpan - index;
        }
        if (+attrs.colSpan === 0) {
          return null;
        }
        return React.createElement(Cell$1, _extends({}, others2, attrs, {
          key: j,
          prefix,
          pure,
          rtl,
          cell: title,
          component: "th",
          align: alignHeader ? alignHeader : align,
          className: className2,
          ref: _this2.getCellRef.bind(_this2, index, j),
          type: "header"
        }), sortElement, filterElement, resizeElement);
      });
      return React.createElement("tr", {key: index}, col);
    });
    return React.createElement(Tag, _extends({className}, others), header, children);
  };
  return Header2;
}(React.Component), _class$6.propTypes = {
  children: propTypes.any,
  prefix: propTypes.string,
  pure: propTypes.bool,
  className: propTypes.string,
  component: propTypes.string,
  columns: propTypes.array,
  colGroup: propTypes.object,
  headerCellRef: propTypes.func,
  locale: propTypes.object,
  filterParams: propTypes.object,
  onFilter: propTypes.func,
  components: propTypes.object,
  sort: propTypes.object,
  sortIcons: propTypes.object,
  onSort: propTypes.func,
  onResizeChange: propTypes.func,
  tableWidth: propTypes.number
}, _class$6.defaultProps = {
  component: "thead",
  columns: [],
  headerCellRef: noop$2,
  onFilter: noop$2,
  components: {},
  onSort: noop$2,
  onResizeChange: noop$2
}, _temp2$4);
Header.displayName = "Header";
var _class$7, _temp$2;
var Wrapper = (_temp$2 = _class$7 = function(_Component) {
  _inherits(Wrapper2, _Component);
  function Wrapper2() {
    _classCallCheck(this, Wrapper2);
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }
  Wrapper2.prototype.render = function render() {
    var _props = this.props, colGroup = _props.colGroup, children = _props.children, tableWidth = _props.tableWidth, Tag = _props.component;
    return React.createElement(Tag, {role: "table", style: {width: tableWidth}}, colGroup, children);
  };
  return Wrapper2;
}(Component), _class$7.propTypes = {
  tableWidth: propTypes.number
}, _temp$2);
Wrapper.displayName = "Wrapper";
Wrapper.defaultProps = {
  component: "table"
};
Wrapper.propTypes = {
  children: propTypes.any,
  prefix: propTypes.string,
  colGroup: propTypes.any,
  component: propTypes.string
};
var _class$8, _temp$3;
var Column = (_temp$3 = _class$8 = function(_React$Component) {
  _inherits(Column2, _React$Component);
  function Column2() {
    _classCallCheck(this, Column2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  Column2.prototype.render = function render() {
    return null;
  };
  return Column2;
}(React.Component), _class$8.propTypes = {
  dataIndex: propTypes.string,
  cell: propTypes.oneOfType([propTypes.element, propTypes.node, propTypes.func]),
  title: propTypes.oneOfType([propTypes.element, propTypes.node, propTypes.func]),
  htmlTitle: propTypes.string,
  sortable: propTypes.bool,
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  align: propTypes.oneOf(["left", "center", "right"]),
  alignHeader: propTypes.oneOf(["left", "center", "right"]),
  filters: propTypes.arrayOf(propTypes.shape({
    label: propTypes.string,
    value: propTypes.oneOfType([propTypes.node, propTypes.string])
  })),
  filterMode: propTypes.oneOf(["single", "multiple"]),
  filterMenuProps: propTypes.object,
  filterProps: propTypes.object,
  lock: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  resizable: propTypes.bool,
  colSpan: propTypes.number
}, _class$8.contextTypes = {
  parent: propTypes.any
}, _class$8.defaultProps = {
  cell: function cell2(value) {
    return value;
  },
  filterMode: "multiple",
  filterMenuProps: {
    subMenuSelectable: false
  },
  filterProps: {},
  resizable: false
}, _class$8._typeMark = "column", _temp$3);
Column.displayName = "Column";
var _class$9, _temp$4;
var ColumnGroup = (_temp$4 = _class$9 = function(_React$Component) {
  _inherits(ColumnGroup2, _React$Component);
  function ColumnGroup2() {
    _classCallCheck(this, ColumnGroup2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  ColumnGroup2.prototype.getChildContext = function getChildContext() {
    return {
      parent: this
    };
  };
  ColumnGroup2.prototype.render = function render() {
    return null;
  };
  return ColumnGroup2;
}(React.Component), _class$9.propTypes = {
  title: propTypes.oneOfType([propTypes.element, propTypes.node, propTypes.func])
}, _class$9.childContextTypes = {
  parent: propTypes.any
}, _class$9.defaultProps = {
  title: "column-group"
}, _class$9._typeMark = "columnGroup", _temp$4);
ColumnGroup.displayName = "ColumnGroup";
var _class$a, _temp$5;
var Children = React.Children, noop$3 = function noop5() {
};
var Table = (_temp$5 = _class$a = function(_React$Component) {
  _inherits(Table2, _React$Component);
  function Table2(props, context) {
    _classCallCheck(this, Table2);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.state = {
      sort: _this.props.sort || {}
    };
    _this.onSort = function(dataIndex, order, sort) {
      if (typeof _this.props.sort === "undefined") {
        _this.setState({
          sort
        }, function() {
          _this.props.onSort(dataIndex, order, sort);
        });
      } else {
        _this.props.onSort(dataIndex, order, sort);
      }
    };
    _this.onFilter = function(filterParams) {
      _this.props.onFilter(filterParams);
    };
    _this.onResizeChange = function(dataIndex, value) {
      _this.props.onResizeChange(dataIndex, value);
    };
    _this.getWrapperRef = function(wrapper2) {
      if (!wrapper2) {
        return _this.wrapper;
      }
      _this.wrapper = wrapper2;
    };
    _this.getAffixRef = function(affixRef) {
      if (!affixRef) {
        return _this.affixRef;
      }
      _this.affixRef = affixRef;
    };
    _this.getHeaderCellRef = function(i, j, cell5) {
      var cellRef = "header_cell_" + i + "_" + j;
      if (!cell5) {
        return _this[cellRef];
      }
      _this[cellRef] = cell5;
    };
    _this.getRowRef = function(i, row) {
      var rowRef = "row_" + i;
      if (!row) {
        return _this[rowRef];
      }
      _this[rowRef] = row;
    };
    _this.getCellRef = function(i, j, cell5) {
      var cellRef = "cell_" + i + "_" + j;
      if (!cell5) {
        return _this[cellRef];
      }
      _this[cellRef] = cell5;
    };
    _this.handleColHoverClass = function(rowIndex, colIndex, isAdd) {
      var crossline = _this.props.crossline;
      var funcName = isAdd ? "addClass" : "removeClass";
      if (crossline) {
        _this.props.entireDataSource.forEach(function(val, index) {
          try {
            var currentCol = findDOMNode(_this.getCellRef(index, colIndex));
            currentCol && dom[funcName](currentCol, "hovered");
          } catch (error) {
            return null;
          }
        });
      }
    };
    _this.findEventTarget = function(e) {
      var prefix = _this.props.prefix;
      var target = dom.getClosest(e.target, "td." + prefix + "table-cell");
      var colIndex = target && target.getAttribute("data-next-table-col");
      var rowIndex = target && target.getAttribute("data-next-table-row");
      try {
        var currentCol = findDOMNode(_this.getCellRef(rowIndex, colIndex));
        if (currentCol === target) {
          return {
            colIndex,
            rowIndex
          };
        }
      } catch (error) {
        return {};
      }
      return {};
    };
    _this.onBodyMouseOver = function(e) {
      var crossline = _this.props.crossline;
      if (!crossline) {
        return;
      }
      var _this$findEventTarget = _this.findEventTarget(e), colIndex = _this$findEventTarget.colIndex, rowIndex = _this$findEventTarget.rowIndex;
      if (!colIndex || !rowIndex) {
        return;
      }
      _this.handleColHoverClass(rowIndex, colIndex, true);
      _this.colIndex = colIndex;
      _this.rowIndex = rowIndex;
    };
    _this.onBodyMouseOut = function(e) {
      var crossline = _this.props.crossline;
      if (!crossline) {
        return;
      }
      var _this$findEventTarget2 = _this.findEventTarget(e), colIndex = _this$findEventTarget2.colIndex, rowIndex = _this$findEventTarget2.rowIndex;
      if (!colIndex || !rowIndex) {
        return;
      }
      _this.handleColHoverClass(_this.rowIndex, _this.colIndex, false);
      _this.colIndex = -1;
      _this.rowIndex = -1;
    };
    _this.addColIndex = function(children) {
      var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      children.forEach(function(child, i) {
        child.__colIndex = start + i;
      });
    };
    _this.getTableEl = function(ref) {
      _this.tableEl = ref;
    };
    var _this$context = _this.context, getTableInstance = _this$context.getTableInstance, getTableInstanceForVirtual = _this$context.getTableInstanceForVirtual, getTableInstanceForFixed = _this$context.getTableInstanceForFixed;
    getTableInstance && getTableInstance(props.lockType, _this);
    getTableInstanceForFixed && getTableInstanceForFixed(props.lockType, _this);
    getTableInstanceForVirtual && getTableInstanceForVirtual(props.lockType, _this);
    _this.notRenderCellIndex = [];
    return _this;
  }
  Table2.prototype.getChildContext = function getChildContext() {
    return {
      notRenderCellIndex: this.notRenderCellIndex || [],
      lockType: this.props.lockType
    };
  };
  Table2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var state = {};
    if (typeof nextProps.sort !== "undefined") {
      state.sort = nextProps.sort;
    }
    return state;
  };
  Table2.prototype.componentDidMount = function componentDidMount() {
    this.notRenderCellIndex = [];
    this.tableOuterWidth = this.tableEl && this.tableEl.clientWidth;
  };
  Table2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.pure) {
      var isEqual = shallowElementEquals_1(nextProps, this.props) && obj.shallowEqual(nextState, this.state) && obj.shallowEqual(nextContext, this.context);
      return !isEqual;
    }
    return true;
  };
  Table2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.notRenderCellIndex = [];
    this.tableOuterWidth = this.tableEl && this.tableEl.clientWidth;
  };
  Table2.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
    var columns = props.columns;
    if (props.children) {
      columns = this.normalizeChildren(props);
    }
    return this.fetchInfoFromBinaryChildren(columns);
  };
  Table2.prototype.normalizeChildren = function normalizeChildren(props) {
    var columns = props.columns;
    var getChildren = function getChildren2(children) {
      var ret = [];
      Children.forEach(children, function(child) {
        if (child) {
          var _props = _extends({}, child.props);
          if (!(child && ["function", "object"].indexOf(_typeof(child.type)) > -1 && (child.type._typeMark === "column" || child.type._typeMark === "columnGroup"))) {
            log.warning("Use <Table.Column/>, <Table.ColumnGroup/> as child.");
          }
          ret.push(_props);
          if (child.props.children) {
            _props.children = getChildren2(child.props.children);
          }
        }
      });
      return ret;
    };
    if (props.children) {
      columns = getChildren(props.children);
    }
    return columns;
  };
  Table2.prototype.fetchInfoFromBinaryChildren = function fetchInfoFromBinaryChildren(children) {
    var hasGroupHeader = false;
    var flatChildren = [], groupChildren = [], getChildren = function getChildren2() {
      var propsChildren = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var level = arguments[1];
      groupChildren[level] = groupChildren[level] || [];
      propsChildren.forEach(function(child) {
        if (child.children) {
          hasGroupHeader = true;
          getChildren2(child.children, level + 1);
        } else {
          flatChildren.push(child);
        }
        groupChildren[level].push(child);
      });
    }, getColSpan = function getColSpan2(children2, colSpan) {
      colSpan = colSpan || 0;
      children2.forEach(function(child) {
        if (child.children) {
          colSpan = getColSpan2(child.children, colSpan);
        } else {
          colSpan += 1;
        }
      });
      return colSpan;
    };
    getChildren(children, 0);
    groupChildren.forEach(function(groupChild, i) {
      groupChild.forEach(function(child, j) {
        var colSpan = void 0;
        var children2 = child.children;
        if (children2) {
          colSpan = getColSpan(children2);
          child.colSpan = colSpan;
          groupChildren[i][j] = child;
        }
      });
    });
    var _props2 = this.props, lockType = _props2.lockType, lengths = _props2.lengths;
    var start = lockType === "right" ? lengths.origin - lengths.right : 0;
    this.addColIndex(flatChildren, start);
    return {
      flatChildren,
      groupChildren,
      hasGroupHeader
    };
  };
  Table2.prototype.renderColGroup = function renderColGroup(flatChildren) {
    var cols = flatChildren.map(function(col, index) {
      var width = col.width;
      var style = {};
      if (width) {
        style = {
          width
        };
      }
      return React.createElement("col", {style, key: index});
    });
    return React.createElement("colgroup", {key: "table-colgroup"}, cols);
  };
  Table2.prototype.renderTable = function renderTable(groupChildren, flatChildren) {
    if (flatChildren.length || !flatChildren.length && !this.props.lockType) {
      var _props3 = this.props, hasHeader = _props3.hasHeader, components = _props3.components, prefix = _props3.prefix, wrapperContent = _props3.wrapperContent, filterParams = _props3.filterParams, locale = _props3.locale, dataSource = _props3.dataSource, emptyContent = _props3.emptyContent, loading = _props3.loading, primaryKey = _props3.primaryKey, cellProps = _props3.cellProps, rowProps = _props3.rowProps, onRowClick = _props3.onRowClick, onRowMouseEnter = _props3.onRowMouseEnter, onRowMouseLeave = _props3.onRowMouseLeave, expandedIndexSimulate = _props3.expandedIndexSimulate, pure = _props3.pure, rtl = _props3.rtl, crossline = _props3.crossline, sortIcons = _props3.sortIcons, tableWidth = _props3.tableWidth;
      var sort = this.state.sort;
      var _components$Header = components.Header, Header$1 = _components$Header === void 0 ? Header : _components$Header, _components$Wrapper = components.Wrapper, Wrapper$1 = _components$Wrapper === void 0 ? Wrapper : _components$Wrapper, _components$Body = components.Body, Body$1 = _components$Body === void 0 ? Body : _components$Body;
      var colGroup = this.renderColGroup(flatChildren);
      return React.createElement(Wrapper$1, {colGroup, ref: this.getWrapperRef, prefix, tableWidth}, hasHeader ? React.createElement(Header$1, {
        prefix,
        rtl,
        pure,
        affixRef: this.getAffixRef,
        colGroup,
        className: prefix + "table-header",
        filterParams,
        columns: groupChildren,
        locale,
        headerCellRef: this.getHeaderCellRef,
        components,
        onFilter: this.onFilter,
        sort,
        onResizeChange: this.onResizeChange,
        onSort: this.onSort,
        sortIcons,
        tableWidth
      }) : null, React.createElement(Body$1, {
        prefix,
        rtl,
        pure,
        crossline,
        colGroup,
        className: prefix + "table-body",
        components,
        loading,
        emptyContent,
        getCellProps: cellProps,
        primaryKey,
        getRowProps: rowProps,
        columns: flatChildren,
        rowRef: this.getRowRef,
        cellRef: this.getCellRef,
        onRowClick,
        expandedIndexSimulate,
        tableOuterWidth: this.tableOuterWidth,
        onRowMouseEnter,
        onRowMouseLeave,
        dataSource,
        locale,
        onBodyMouseOver: this.onBodyMouseOver,
        onBodyMouseOut: this.onBodyMouseOut,
        tableWidth
      }), wrapperContent);
    } else {
      return null;
    }
  };
  Table2.prototype.render = function render() {
    var _classnames;
    var ret = this.normalizeChildrenState(this.props);
    this.groupChildren = ret.groupChildren;
    this.flatChildren = ret.flatChildren;
    var table = this.renderTable(ret.groupChildren, ret.flatChildren), _props4 = this.props, className = _props4.className, style = _props4.style, hasBorder = _props4.hasBorder, isZebra = _props4.isZebra, loading = _props4.loading, size = _props4.size, hasHeader = _props4.hasHeader, prefix = _props4.prefix, dataSource = _props4.dataSource, entireDataSource = _props4.entireDataSource, onSort = _props4.onSort, onResizeChange = _props4.onResizeChange, onRowClick = _props4.onRowClick, onRowMouseEnter = _props4.onRowMouseEnter, onRowMouseLeave = _props4.onRowMouseLeave, onFilter2 = _props4.onFilter, rowProps = _props4.rowProps, cellProps = _props4.cellProps, primaryKey = _props4.primaryKey, components = _props4.components, wrapperContent = _props4.wrapperContent, lockType = _props4.lockType, locale = _props4.locale, expandedIndexSimulate = _props4.expandedIndexSimulate, refs = _props4.refs, pure = _props4.pure, rtl = _props4.rtl, emptyContent = _props4.emptyContent, filterParams = _props4.filterParams, columns = _props4.columns, sortIcons = _props4.sortIcons, _props4$loadingCompon = _props4.loadingComponent, LoadingComponent = _props4$loadingCompon === void 0 ? NextLoading : _props4$loadingCompon, tableLayout = _props4.tableLayout, tableWidth = _props4.tableWidth, ref = _props4.ref, others = _objectWithoutProperties(_props4, ["className", "style", "hasBorder", "isZebra", "loading", "size", "hasHeader", "prefix", "dataSource", "entireDataSource", "onSort", "onResizeChange", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "onFilter", "rowProps", "cellProps", "primaryKey", "components", "wrapperContent", "lockType", "locale", "expandedIndexSimulate", "refs", "pure", "rtl", "emptyContent", "filterParams", "columns", "sortIcons", "loadingComponent", "tableLayout", "tableWidth", "ref"]), cls = classnames((_classnames = {}, _classnames[prefix + "table"] = true, _classnames[prefix + "table-" + size] = size, _classnames[prefix + "table-layout-" + tableLayout] = tableLayout, _classnames["only-bottom-border"] = !hasBorder, _classnames["no-header"] = !hasHeader, _classnames.zebra = isZebra, _classnames[className] = className, _classnames));
    if (rtl) {
      others.dir = "rtl";
    }
    var content = React.createElement("div", _extends({
      className: cls,
      style,
      ref: ref || this.getTableEl
    }, obj.pickOthers(Object.keys(Table2.propTypes), others)), table);
    if (loading) {
      var loadingClassName = prefix + "table-loading";
      return React.createElement(LoadingComponent, {className: loadingClassName}, content);
    }
    return content;
  };
  return Table2;
}(React.Component), _class$a.Column = Column, _class$a.ColumnGroup = ColumnGroup, _class$a.Header = Header, _class$a.Body = Body, _class$a.Wrapper = Wrapper, _class$a.Row = Row, _class$a.Cell = Cell, _class$a.Filter = FilterComponent, _class$a.Sort = Sort, _class$a.propTypes = _extends({}, NextConfigProvider.propTypes, {
  prefix: propTypes.string,
  pure: propTypes.bool,
  rtl: propTypes.bool,
  tableLayout: propTypes.oneOf(["fixed", "auto"]),
  tableWidth: propTypes.number,
  className: propTypes.string,
  style: propTypes.object,
  size: propTypes.oneOf(["small", "medium"]),
  dataSource: propTypes.array,
  entireDataSource: propTypes.array,
  onRowClick: propTypes.func,
  onRowMouseEnter: propTypes.func,
  onRowMouseLeave: propTypes.func,
  onSort: propTypes.func,
  onFilter: propTypes.func,
  onResizeChange: propTypes.func,
  rowProps: propTypes.func,
  cellProps: propTypes.func,
  hasBorder: propTypes.bool,
  hasHeader: propTypes.bool,
  isZebra: propTypes.bool,
  loading: propTypes.bool,
  loadingComponent: propTypes.func,
  filterParams: propTypes.object,
  sort: propTypes.object,
  sortIcons: propTypes.object,
  locale: propTypes.object,
  components: propTypes.object,
  columns: propTypes.array,
  emptyContent: propTypes.node,
  primaryKey: propTypes.oneOfType([propTypes.symbol, propTypes.string]),
  lockType: propTypes.oneOf(["left", "right"]),
  wrapperContent: propTypes.any,
  refs: propTypes.object,
  expandedRowRender: propTypes.func,
  rowExpandable: propTypes.func,
  expandedRowIndent: propTypes.array,
  hasExpandedRowCtrl: propTypes.bool,
  getExpandedColProps: propTypes.func,
  openRowKeys: propTypes.array,
  onRowOpen: propTypes.func,
  onExpandedRowClick: propTypes.func,
  fixedHeader: propTypes.bool,
  maxBodyHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  rowSelection: propTypes.object,
  stickyHeader: propTypes.bool,
  offsetTop: propTypes.number,
  affixProps: propTypes.object,
  indent: propTypes.number,
  isTree: propTypes.bool,
  useVirtual: propTypes.bool,
  rowHeight: propTypes.oneOfType([propTypes.number, propTypes.func]),
  onBodyScroll: propTypes.func,
  expandedIndexSimulate: propTypes.bool,
  crossline: propTypes.bool,
  lengths: propTypes.object
}), _class$a.defaultProps = {
  dataSource: [],
  onRowClick: noop$3,
  onRowMouseEnter: noop$3,
  onRowMouseLeave: noop$3,
  onSort: noop$3,
  onFilter: noop$3,
  onResizeChange: noop$3,
  size: "medium",
  rowProps: noop$3,
  cellProps: noop$3,
  prefix: "next-",
  hasBorder: true,
  hasHeader: true,
  isZebra: false,
  loading: false,
  expandedIndexSimulate: false,
  primaryKey: "id",
  components: {},
  locale: zhCN.Table,
  crossline: false
}, _class$a.childContextTypes = {
  notRenderCellIndex: propTypes.array,
  lockType: propTypes.oneOf(["left", "right"])
}, _class$a.contextTypes = {
  getTableInstance: propTypes.func,
  getTableInstanceForFixed: propTypes.func,
  getTableInstanceForVirtual: propTypes.func
}, _temp$5);
Table.displayName = "Table";
var Base = polyfill(Table);
var _class$b, _temp2$5;
var LockRow = (_temp2$5 = _class$b = function(_React$Component) {
  _inherits(LockRow2, _React$Component);
  function LockRow2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, LockRow2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onMouseEnter = function(record, index, e) {
      var onRowMouseEnter = _this.context.onRowMouseEnter;
      var onMouseEnter = _this.props.onMouseEnter;
      onRowMouseEnter && onRowMouseEnter(record, index, e);
      onMouseEnter(record, index, e);
    }, _this.onMouseLeave = function(record, index, e) {
      var onRowMouseLeave = _this.context.onRowMouseLeave;
      var onMouseLeave = _this.props.onMouseLeave;
      onRowMouseLeave && onRowMouseLeave(record, index, e);
      onMouseLeave(record, index, e);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  LockRow2.prototype.render = function render() {
    return React.createElement(Row, _extends({}, this.props, {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }));
  };
  return LockRow2;
}(React.Component), _class$b.propTypes = _extends({}, Row.propTypes), _class$b.contextTypes = {
  onRowMouseEnter: propTypes.func,
  onRowMouseLeave: propTypes.func
}, _class$b.defaultProps = _extends({}, Row.defaultProps), _temp2$5);
LockRow.displayName = "LockRow";
var _class$c, _temp$6;
var ExpandedRow = (_temp$6 = _class$c = function(_React$Component) {
  _inherits(ExpandedRow2, _React$Component);
  function ExpandedRow2() {
    _classCallCheck(this, ExpandedRow2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  ExpandedRow2.prototype.renderExpandedRow = function renderExpandedRow(record, rowIndex) {
    var _context = this.context, expandedRowRender = _context.expandedRowRender, expandedRowIndent = _context.expandedRowIndent, openRowKeys = _context.openRowKeys, lockType = _context.lockType, expandedIndexSimulate = _context.expandedIndexSimulate, expandedRowWidthEquals2Table = _context.expandedRowWidthEquals2Table;
    var tableOuterWidth = this.props.tableOuterWidth;
    var expandedIndex = expandedIndexSimulate ? (rowIndex - 1) / 2 : rowIndex;
    var _props = this.props, columns = _props.columns, cellRef = _props.cellRef;
    var colSpan = columns.length;
    var expandedCols = columns[0] && columns[0].__colIndex || 0;
    if (expandedRowRender) {
      var _props2 = this.props, primaryKey = _props2.primaryKey, prefix = _props2.prefix, leftIndent = expandedRowIndent[0], rightIndent = expandedRowIndent[1], totalIndent = leftIndent + rightIndent, renderCols = function renderCols2(number) {
        var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var ret = [];
        var _loop = function _loop2(i2) {
          ret.push(React.createElement("td", {
            key: i2,
            ref: function ref(cell5) {
              return cellRef(rowIndex, i2 + start, cell5);
            }
          }, " "));
        };
        for (var i = 0; i < number; i++) {
          _loop(i);
        }
        return ret;
      };
      var content = void 0;
      if (totalIndent > colSpan && !lockType) {
        log.warning("It's not allowed expandedRowIndent is more than the number of columns.");
      }
      if (leftIndent < columns.length && lockType === "left") {
        log.warning("expandedRowIndent left is less than the number of left lock columns.");
      }
      if (rightIndent < columns.length && lockType === "right") {
        log.warning("expandedRowIndent right is less than the number of right lock columns.");
      }
      if (lockType) {
        return openRowKeys.indexOf(record[primaryKey]) > -1 ? React.createElement("tr", {
          className: prefix + "table-expanded-row",
          key: "expanded-" + expandedIndex
        }, React.createElement("td", {
          colSpan,
          ref: function ref(cell5) {
            return cellRef(rowIndex, expandedCols, cell5);
          }
        }, " ")) : null;
      }
      var expandedRowStyle = {
        position: "sticky",
        width: tableOuterWidth,
        left: 0
      };
      content = expandedRowRender(record, expandedIndex);
      if (!React.isValidElement(content)) {
        content = React.createElement("div", {
          className: prefix + "table-cell-wrapper",
          style: expandedRowWidthEquals2Table && expandedRowStyle
        }, content);
      } else {
        content = expandedRowWidthEquals2Table ? React.createElement("div", {style: expandedRowStyle}, content) : content;
      }
      var rightStart = columns.length;
      columns.forEach(function(col) {
        col.lock === "right" && rightStart--;
      });
      return openRowKeys.indexOf(record[primaryKey]) > -1 ? React.createElement("tr", {
        className: prefix + "table-expanded-row",
        key: "expanded-" + (record[primaryKey] || expandedIndex)
      }, renderCols(leftIndent), React.createElement("td", {colSpan: colSpan - totalIndent}, content), renderCols(rightIndent, rightStart)) : null;
    } else {
      return null;
    }
  };
  ExpandedRow2.prototype.render = function render() {
    var _props3 = this.props, record = _props3.record, rowIndex = _props3.rowIndex, columns = _props3.columns, others = _objectWithoutProperties(_props3, ["record", "rowIndex", "columns"]);
    var expandedIndexSimulate = this.context.expandedIndexSimulate;
    if (record.__expanded) {
      return this.renderExpandedRow(record, rowIndex, columns);
    }
    var newRowIndex = expandedIndexSimulate ? rowIndex / 2 : rowIndex;
    return React.createElement(LockRow, _extends({}, others, {
      record,
      columns,
      __rowIndex: rowIndex,
      rowIndex: newRowIndex
    }));
  };
  return ExpandedRow2;
}(React.Component), _class$c.propTypes = _extends({}, LockRow.propTypes), _class$c.defaultProps = _extends({}, LockRow.defaultProps), _class$c.contextTypes = {
  openRowKeys: propTypes.array,
  expandedRowRender: propTypes.func,
  expandedRowIndent: propTypes.array,
  expandedIndexSimulate: propTypes.bool,
  expandedRowWidthEquals2Table: propTypes.bool,
  lockType: propTypes.oneOf(["left", "right"])
}, _temp$6);
ExpandedRow.displayName = "ExpandedRow";
var _class$d, _temp$7;
var SelectionRow = (_temp$7 = _class$d = function(_React$Component) {
  _inherits(SelectionRow2, _React$Component);
  function SelectionRow2() {
    _classCallCheck(this, SelectionRow2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  SelectionRow2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, className = _props.className, record = _props.record, primaryKey = _props.primaryKey;
    var selectedRowKeys = this.context.selectedRowKeys;
    var cls = classnames((_classnames = {
      selected: selectedRowKeys.indexOf(record[primaryKey]) > -1
    }, _classnames[className] = className, _classnames));
    return React.createElement(ExpandedRow, _extends({}, this.props, {className: cls}));
  };
  return SelectionRow2;
}(React.Component), _class$d.propTypes = _extends({}, ExpandedRow.propTypes), _class$d.defaultProps = _extends({}, ExpandedRow.defaultProps), _class$d.contextTypes = {
  selectedRowKeys: propTypes.array
}, _temp$7);
SelectionRow.displayName = "SelectionRow";
var _class$e, _temp$8;
var TreeRow = (_temp$8 = _class$e = function(_React$Component) {
  _inherits(TreeRow2, _React$Component);
  function TreeRow2() {
    _classCallCheck(this, TreeRow2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  TreeRow2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, className = _props.className, record = _props.record, primaryKey = _props.primaryKey, prefix = _props.prefix, others = _objectWithoutProperties(_props, ["className", "record", "primaryKey", "prefix"]);
    var _context = this.context, treeStatus = _context.treeStatus, openRowKeys = _context.openRowKeys;
    var cls = classnames((_classnames = {
      hidden: !(treeStatus.indexOf(record[primaryKey]) > -1) && record.__level !== 0
    }, _classnames[prefix + "table-row-level-" + record.__level] = true, _classnames.opened = openRowKeys.indexOf(record[primaryKey]) > -1, _classnames[className] = className, _classnames));
    return React.createElement(SelectionRow, _extends({}, others, {
      record,
      className: cls,
      primaryKey,
      prefix
    }));
  };
  return TreeRow2;
}(React.Component), _class$e.propTypes = _extends({}, SelectionRow.propTypes), _class$e.defaultProps = _extends({}, SelectionRow.defaultProps), _class$e.contextTypes = {
  treeStatus: propTypes.array,
  openRowKeys: propTypes.array
}, _temp$8);
TreeRow.displayName = "TreeRow";
var _class$f, _temp2$6;
var TreeCell = (_temp2$6 = _class$f = function(_React$Component) {
  _inherits(TreeCell2, _React$Component);
  function TreeCell2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, TreeCell2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onTreeNodeClick = function(record, e) {
      e.stopPropagation();
      _this.context.onTreeNodeClick(record);
    }, _this.expandedKeydown = function(record, e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.keyCode === KEYCODE.ENTER) {
        _this.onTreeNodeClick(record, e);
      }
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  TreeCell2.prototype.render = function render() {
    var _this2 = this;
    var _props = this.props, colIndex = _props.colIndex, record = _props.record, prefix = _props.prefix, primaryKey = _props.primaryKey, locale = _props.locale, rtl = _props.rtl, children = _props.children;
    var _context = this.context, openRowKeys = _context.openTreeRowKeys, indent = _context.indent, isTree = _context.isTree, rowSelection = _context.rowSelection;
    var treeArrowNodeIndex = rowSelection ? 1 : 0;
    var firstCellStyle = void 0, treeArrowNode = void 0;
    if (colIndex === treeArrowNodeIndex) {
      var treeArrowType = void 0;
      if (isTree) {
        var _firstCellStyle;
        var paddingType = rtl ? "paddingRight" : "paddingLeft";
        firstCellStyle = (_firstCellStyle = {}, _firstCellStyle[paddingType] = indent * (record.__level + 1), _firstCellStyle);
        treeArrowNode = React.createElement(NextIcon, {
          size: "xs",
          rtl,
          className: prefix + "table-tree-placeholder"
        });
        if (record.children && record.children.length) {
          var hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;
          treeArrowType = hasExpanded ? "arrow-down" : "arrow-right";
          treeArrowNode = React.createElement(NextIcon, {
            className: prefix + "table-tree-arrow",
            type: treeArrowType,
            size: "xs",
            rtl,
            onClick: function onClick(e) {
              return _this2.onTreeNodeClick(record, e);
            },
            onKeyDown: function onKeyDown(e) {
              return _this2.expandedKeydown(record, e);
            },
            role: "button",
            tabIndex: "0",
            "aria-expanded": hasExpanded,
            "aria-label": hasExpanded ? locale.expanded : locale.folded
          });
        }
      }
    }
    return React.createElement(Cell, _extends({}, this.props, {
      innerStyle: firstCellStyle,
      isIconLeft: !!treeArrowNode
    }), children, treeArrowNode);
  };
  return TreeCell2;
}(React.Component), _class$f.propTypes = _extends({
  indent: propTypes.number,
  locale: propTypes.object
}, Cell.propTypes), _class$f.defaultProps = _extends({}, Cell.defaultProps, {
  component: "td",
  indent: 20
}), _class$f.contextTypes = {
  openTreeRowKeys: propTypes.array,
  indent: propTypes.number,
  onTreeNodeClick: propTypes.func,
  isTree: propTypes.bool,
  rowSelection: propTypes.object
}, _temp2$6);
TreeCell.displayName = "TreeCell";
var noop$4 = function noop6() {
};
function tree(BaseComponent) {
  var _class2, _temp3;
  var TreeTable = (_temp3 = _class2 = function(_React$Component) {
    _inherits(TreeTable2, _React$Component);
    function TreeTable2(props, context) {
      _classCallCheck(this, TreeTable2);
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
      _this.onTreeNodeClick = function(record) {
        var primaryKey = _this.props.primaryKey, id = record[primaryKey], dataSource = _this.ds, openRowKeys = [].concat(_this.state.openRowKeys), index = openRowKeys.indexOf(id), getChildrenKeyById = function getChildrenKeyById2(id2) {
          var ret = [id2];
          var loop = function loop2(data) {
            data.forEach(function(item) {
              ret.push(item[primaryKey]);
              if (item.children) {
                loop2(item.children);
              }
            });
          };
          dataSource.forEach(function(item) {
            if (item[primaryKey] === id2) {
              if (item.children) {
                loop(item.children);
              }
            }
          });
          return ret;
        };
        if (index > -1) {
          var ids = getChildrenKeyById(id);
          ids.forEach(function(id2) {
            var i = openRowKeys.indexOf(id2);
            if (i > -1) {
              openRowKeys.splice(i, 1);
            }
          });
        } else {
          openRowKeys.push(id);
        }
        if (!("openRowKeys" in _this.props)) {
          _this.setState({
            openRowKeys
          });
        }
        _this.props.onRowOpen(openRowKeys, id, index === -1, record);
      };
      _this.state = {
        openRowKeys: props.openRowKeys || []
      };
      return _this;
    }
    TreeTable2.prototype.getChildContext = function getChildContext() {
      return {
        openTreeRowKeys: this.state.openRowKeys,
        indent: this.props.indent,
        treeStatus: this.getTreeNodeStatus(this.ds),
        onTreeNodeClick: this.onTreeNodeClick,
        isTree: this.props.isTree
      };
    };
    TreeTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      if ("openRowKeys" in nextProps) {
        return {
          openRowKeys: nextProps.openRowKeys || []
        };
      }
      return null;
    };
    TreeTable2.prototype.normalizeDataSource = function normalizeDataSource(dataSource) {
      var ret = [], loop = function loop2(dataSource2, level) {
        dataSource2.forEach(function(item) {
          item.__level = level;
          ret.push(item);
          if (item.children) {
            loop2(item.children, level + 1);
          }
        });
      };
      loop(dataSource, 0);
      this.ds = ret;
      return ret;
    };
    TreeTable2.prototype.getTreeNodeStatus = function getTreeNodeStatus() {
      var dataSource = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var openRowKeys = this.state.openRowKeys, primaryKey = this.props.primaryKey, ret = [];
      openRowKeys.forEach(function(openKey) {
        dataSource.forEach(function(item) {
          if (item[primaryKey] === openKey) {
            if (item.children) {
              item.children.forEach(function(child) {
                ret.push(child[primaryKey]);
              });
            }
          }
        });
      });
      return ret;
    };
    TreeTable2.prototype.render = function render() {
      var _props = this.props, components = _props.components, isTree = _props.isTree, dataSource = _props.dataSource, indent = _props.indent, others = _objectWithoutProperties(_props, ["components", "isTree", "dataSource", "indent"]);
      if (isTree) {
        components = _extends({}, components);
        if (!components.Row) {
          components.Row = TreeRow;
        }
        if (!components.Cell) {
          components.Cell = TreeCell;
        }
        dataSource = this.normalizeDataSource(dataSource);
      }
      return React.createElement(BaseComponent, _extends({}, others, {
        dataSource,
        components
      }));
    };
    return TreeTable2;
  }(React.Component), _class2.TreeRow = TreeRow, _class2.TreeCell = TreeCell, _class2.propTypes = _extends({
    openRowKeys: propTypes.array,
    onRowOpen: propTypes.func,
    primaryKey: propTypes.string,
    indent: propTypes.number,
    isTree: propTypes.bool,
    locale: propTypes.object
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps, {
    primaryKey: "id",
    onRowOpen: noop$4,
    components: {},
    indent: 12
  }), _class2.childContextTypes = {
    openTreeRowKeys: propTypes.array,
    indent: propTypes.number,
    treeStatus: propTypes.array,
    onTreeNodeClick: propTypes.func,
    isTree: propTypes.bool
  }, _temp3);
  TreeTable.displayName = "TreeTable";
  statics(TreeTable, BaseComponent);
  return polyfill(TreeTable);
}
var _class$g, _temp$9;
var FixedHeader = (_temp$9 = _class$g = function(_React$Component) {
  _inherits(FixedHeader2, _React$Component);
  function FixedHeader2() {
    _classCallCheck(this, FixedHeader2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  FixedHeader2.prototype.componentDidMount = function componentDidMount() {
    this.context.getNode("header", findDOMNode(this));
  };
  FixedHeader2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, colGroup = _props.colGroup, tableWidth = _props.tableWidth, others = _objectWithoutProperties(_props, ["prefix", "className", "colGroup", "tableWidth"]);
    var onFixedScrollSync = this.context.onFixedScrollSync;
    return React.createElement("div", {className, onScroll: onFixedScrollSync}, React.createElement("div", {
      className: prefix + "table-header-inner",
      style: {overflow: "unset"}
    }, React.createElement("table", {style: {width: tableWidth}}, colGroup, React.createElement(Header, _extends({}, others, {prefix})))));
  };
  return FixedHeader2;
}(React.Component), _class$g.propTypes = {
  children: propTypes.any,
  prefix: propTypes.string,
  className: propTypes.string,
  colGroup: propTypes.any,
  tableWidth: propTypes.number
}, _class$g.contextTypes = {
  getNode: propTypes.func,
  onFixedScrollSync: propTypes.func,
  lockType: propTypes.oneOf(["left", "right"])
}, _temp$9);
FixedHeader.displayName = "FixedHeader";
var _class$h, _temp2$7;
var FixedBody = (_temp2$7 = _class$h = function(_React$Component) {
  _inherits(FixedBody2, _React$Component);
  function FixedBody2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, FixedBody2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onBodyScroll = function(event) {
      var onFixedScrollSync = _this.context.onFixedScrollSync;
      onFixedScrollSync && onFixedScrollSync(event);
      if ("onLockScroll" in _this.props && typeof _this.props.onLockScroll === "function") {
        _this.props.onLockScroll(event);
      }
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  FixedBody2.prototype.componentDidMount = function componentDidMount() {
    var getNode = this.context.getNode;
    getNode && getNode("body", findDOMNode(this));
  };
  FixedBody2.prototype.render = function render() {
    var _props = this.props, className = _props.className, colGroup = _props.colGroup, onLockScroll = _props.onLockScroll, tableWidth = _props.tableWidth, others = _objectWithoutProperties(_props, ["className", "colGroup", "onLockScroll", "tableWidth"]);
    var _context = this.context, maxBodyHeight = _context.maxBodyHeight, fixedHeader = _context.fixedHeader;
    var style = {};
    if (fixedHeader) {
      style.maxHeight = maxBodyHeight;
      style.position = "relative";
    }
    return React.createElement("div", {
      style,
      className,
      onScroll: this.onBodyScroll
    }, React.createElement("table", {style: {width: tableWidth}}, colGroup, React.createElement(Body, _extends({}, others, {colGroup}))));
  };
  return FixedBody2;
}(React.Component), _class$h.propTypes = {
  children: propTypes.any,
  prefix: propTypes.string,
  className: propTypes.string,
  colGroup: propTypes.any,
  onLockScroll: propTypes.func,
  tableWidth: propTypes.number
}, _class$h.contextTypes = {
  fixedHeader: propTypes.bool,
  maxBodyHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onFixedScrollSync: propTypes.func,
  getNode: propTypes.func
}, _temp2$7);
FixedBody.displayName = "FixedBody";
var _class$i, _temp$a;
var FixedWrapper = (_temp$a = _class$i = function(_React$Component) {
  _inherits(FixedWrapper2, _React$Component);
  function FixedWrapper2() {
    _classCallCheck(this, FixedWrapper2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  FixedWrapper2.prototype.render = function render() {
    var _props = this.props, children = _props.children, wrapperContent = _props.wrapperContent, prefix = _props.prefix;
    return React.createElement("div", {className: prefix + "table-inner"}, children, wrapperContent);
  };
  return FixedWrapper2;
}(React.Component), _class$i.propTypes = {
  children: propTypes.any,
  prefix: propTypes.string,
  colGroup: propTypes.any,
  wrapperContent: propTypes.any
}, _temp$a);
FixedWrapper.displayName = "FixedWrapper";
function fixed(BaseComponent) {
  var _class2, _temp22;
  var FixedTable = (_temp22 = _class2 = function(_React$Component) {
    _inherits(FixedTable2, _React$Component);
    function FixedTable2() {
      var _temp3, _this, _ret;
      _classCallCheck(this, FixedTable2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.getNode = function(type2, node, lockType) {
        lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : "";
        _this["" + type2 + lockType + "Node"] = node;
      }, _this.getTableInstance = function(type2, instance) {
        type2 = "";
        _this["table" + type2 + "Inc"] = instance;
      }, _this.onFixedScrollSync = function() {
        var current = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {currentTarget: {}};
        var currentTarget = current.currentTarget || {}, headerNode = _this.headerNode, bodyNode = _this.bodyNode;
        var scrollLeft = currentTarget.scrollLeft, scrollWidth = currentTarget.scrollWidth, clientWidth = currentTarget.clientWidth;
        var scrollToRightEnd = !(scrollLeft < scrollWidth - clientWidth);
        if (scrollToRightEnd !== _this.scrollToRightEnd) {
          _this.scrollToRightEnd = scrollToRightEnd;
          var prefix = _this.props.prefix;
          var table = _this.getTableNode();
          var leftFunc = scrollToRightEnd ? "removeClass" : "addClass";
          dom[leftFunc](table, prefix + "table-scrolling-to-right");
        }
        if (current.currentTarget !== current.target) {
          return;
        }
        if (currentTarget === bodyNode) {
          if (headerNode && scrollLeft !== headerNode.scrollLeft) {
            headerNode.scrollLeft = scrollLeft;
          }
        } else if (currentTarget === headerNode) {
          if (bodyNode && scrollLeft !== bodyNode.scrollLeft) {
            bodyNode.scrollLeft = scrollLeft;
          }
        }
      }, _temp3), _possibleConstructorReturn(_this, _ret);
    }
    FixedTable2.prototype.getChildContext = function getChildContext() {
      return {
        fixedHeader: this.props.fixedHeader,
        maxBodyHeight: this.props.maxBodyHeight,
        getTableInstanceForFixed: this.getTableInstance,
        onFixedScrollSync: this.onFixedScrollSync,
        getNode: this.getNode
      };
    };
    FixedTable2.prototype.componentDidMount = function componentDidMount() {
      this.adjustFixedHeaderSize();
      this.scrollToRightEnd = void 0;
      this.onFixedScrollSync({currentTarget: this.bodyNode});
    };
    FixedTable2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.adjustFixedHeaderSize();
      this.onFixedScrollSync({currentTarget: this.bodyNode});
    };
    FixedTable2.prototype.getTableNode = function getTableNode() {
      var table = this.tableInc;
      try {
        return findDOMNode(table.tableEl);
      } catch (error) {
        return null;
      }
    };
    FixedTable2.prototype.adjustFixedHeaderSize = function adjustFixedHeaderSize() {
      var _props = this.props, hasHeader = _props.hasHeader, rtl = _props.rtl;
      var paddingName = rtl ? "paddingLeft" : "paddingRight";
      var marginName = rtl ? "marginLeft" : "marginRight";
      var body = this.bodyNode;
      if (hasHeader && !this.props.lockType && body) {
        var _style;
        var scrollBarSize = +dom.scrollbar().width || 0;
        var hasVerScroll = body.scrollHeight > body.clientHeight, hasHozScroll = body.scrollWidth > body.clientWidth;
        var style = (_style = {}, _style[paddingName] = scrollBarSize, _style[marginName] = scrollBarSize, _style);
        if (!hasVerScroll) {
          style[paddingName] = 0;
          style[marginName] = 0;
        }
        if (+scrollBarSize) {
          style.marginBottom = -scrollBarSize;
          if (hasHozScroll) {
            style.paddingBottom = scrollBarSize;
          } else {
            style.paddingBottom = scrollBarSize;
            style[marginName] = 0;
          }
        }
        dom.setStyle(this.headerNode, style);
      }
    };
    FixedTable2.prototype.render = function render() {
      var _props2 = this.props, components = _props2.components, className = _props2.className, prefix = _props2.prefix, fixedHeader = _props2.fixedHeader, lockType = _props2.lockType, dataSource = _props2.dataSource, maxBodyHeight = _props2.maxBodyHeight, others = _objectWithoutProperties(_props2, ["components", "className", "prefix", "fixedHeader", "lockType", "dataSource", "maxBodyHeight"]);
      if (fixedHeader) {
        var _classnames;
        components = _extends({}, components);
        if (!components.Header) {
          components.Header = FixedHeader;
        }
        if (!components.Body) {
          components.Body = FixedBody;
        }
        if (!components.Wrapper) {
          components.Wrapper = FixedWrapper;
        }
        className = classnames((_classnames = {}, _classnames[prefix + "table-fixed"] = true, _classnames[prefix + "table-wrap-empty"] = !dataSource.length, _classnames[className] = className, _classnames));
      }
      return React.createElement(BaseComponent, _extends({}, others, {
        dataSource,
        lockType,
        components,
        className,
        prefix
      }));
    };
    return FixedTable2;
  }(React.Component), _class2.FixedHeader = FixedHeader, _class2.FixedBody = FixedBody, _class2.FixedWrapper = FixedWrapper, _class2.propTypes = _extends({
    hasHeader: propTypes.bool,
    fixedHeader: propTypes.bool,
    maxBodyHeight: propTypes.oneOfType([propTypes.number, propTypes.string])
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps, {
    hasHeader: true,
    fixedHeader: false,
    maxBodyHeight: 200,
    components: {},
    refs: {},
    prefix: "next-"
  }), _class2.childContextTypes = {
    fixedHeader: propTypes.bool,
    getNode: propTypes.func,
    onFixedScrollSync: propTypes.func,
    getTableInstanceForFixed: propTypes.func,
    maxBodyHeight: propTypes.oneOfType([propTypes.number, propTypes.string])
  }, _temp22);
  FixedTable.displayName = "FixedTable";
  statics(FixedTable, BaseComponent);
  return FixedTable;
}
var makeChain = func.makeChain;
var unique = function unique2(arr) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "this";
  var temp = {}, ret = [];
  arr.forEach(function(item) {
    var value = void 0;
    if (key === "this") {
      value = item;
    } else {
      value = item[key];
    }
    if (!temp[value]) {
      ret.push(item);
      temp[value] = true;
    }
  });
  return ret;
};
function selection(BaseComponent) {
  var _class2, _temp3;
  var SelectionTable = (_temp3 = _class2 = function(_React$Component) {
    _inherits(SelectionTable2, _React$Component);
    function SelectionTable2(props, context) {
      _classCallCheck(this, SelectionTable2);
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
      _this.addSelection = function(columns) {
        var _this$props = _this.props, prefix = _this$props.prefix, rowSelection = _this$props.rowSelection, size = _this$props.size;
        var attrs = rowSelection.columnProps && rowSelection.columnProps() || {};
        if (!columns.find(function(record) {
          return record.key === "selection";
        })) {
          columns.unshift(_extends({
            key: "selection",
            title: _this.renderSelectionHeader.bind(_this),
            cell: _this.renderSelectionBody.bind(_this),
            width: size === "small" ? 34 : 50,
            className: prefix + "table-selection " + prefix + "table-prerow",
            __normalized: true
          }, attrs));
        }
      };
      _this.renderSelectionHeader = function() {
        var onChange2 = _this.selectAllRow, attrs = {}, _this$props2 = _this.props, rowSelection = _this$props2.rowSelection, primaryKey = _this$props2.primaryKey, dataSource = _this$props2.dataSource, entireDataSource = _this$props2.entireDataSource, locale = _this$props2.locale, selectedRowKeys = _this.state.selectedRowKeys, mode = rowSelection.mode ? rowSelection.mode : "multiple";
        var checked = !!selectedRowKeys.length;
        var indeterminate = false;
        var source = entireDataSource || dataSource;
        _this.flatDataSource(source).filter(function(record, index) {
          if (!rowSelection.getProps) {
            return true;
          } else {
            return !(rowSelection.getProps(record, index) || {}).disabled;
          }
        }).map(function(record) {
          return record[primaryKey];
        }).forEach(function(id) {
          if (selectedRowKeys.indexOf(id) === -1) {
            checked = false;
          } else {
            indeterminate = true;
          }
        });
        attrs.onClick = makeChain(function(e) {
          e.stopPropagation();
        }, attrs.onClick);
        var userAttrs = rowSelection.titleProps && rowSelection.titleProps() || {};
        if (checked) {
          indeterminate = false;
        }
        return [mode === "multiple" ? React.createElement(Checkbox, _extends({
          key: "_total",
          indeterminate,
          "aria-label": locale.selectAll,
          checked,
          onChange: onChange2
        }, attrs, userAttrs)) : null, rowSelection.titleAddons && rowSelection.titleAddons()];
      };
      _this.renderSelectionBody = function(value, index, record) {
        var _this$props3 = _this.props, rowSelection = _this$props3.rowSelection, primaryKey = _this$props3.primaryKey;
        var selectedRowKeys = _this.state.selectedRowKeys;
        var mode = rowSelection.mode ? rowSelection.mode : "multiple";
        var checked = selectedRowKeys.indexOf(record[primaryKey]) > -1;
        var onChange2 = _this.selectOneRow.bind(_this, index, record);
        var attrs = rowSelection.getProps ? rowSelection.getProps(record, index) || {} : {};
        attrs.onClick = makeChain(function(e) {
          e.stopPropagation();
        }, attrs.onClick);
        return mode === "multiple" ? React.createElement(Checkbox, _extends({checked, onChange: onChange2}, attrs)) : React.createElement(Radio, _extends({checked, onChange: onChange2}, attrs));
      };
      _this.selectAllRow = function(checked, e) {
        var ret = [].concat(_this.state.selectedRowKeys), _this$props4 = _this.props, rowSelection = _this$props4.rowSelection, primaryKey = _this$props4.primaryKey, dataSource = _this$props4.dataSource, entireDataSource = _this$props4.entireDataSource, selectedRowKeys = _this.state.selectedRowKeys, getProps = rowSelection.getProps;
        var attrs = {}, records = [];
        var source = entireDataSource ? entireDataSource : dataSource;
        _this.flatDataSource(source).forEach(function(record, index) {
          var id = record[primaryKey];
          if (getProps) {
            attrs = getProps(record, index) || {};
          }
          if (checked && (!attrs.disabled || selectedRowKeys.indexOf(id) > -1)) {
            ret.push(id);
            records.push(record);
          } else if (attrs.disabled && selectedRowKeys.indexOf(id) > -1) {
            ret.push(id);
            records.push(record);
          } else {
            var i = ret.indexOf(id);
            i > -1 && ret.splice(i, 1);
          }
        });
        records = unique(records, primaryKey);
        if (typeof rowSelection.onSelectAll === "function") {
          rowSelection.onSelectAll(checked, records);
        }
        _this.triggerSelection(rowSelection, unique(ret), records);
        e.stopPropagation();
      };
      _this.state = {
        selectedRowKeys: props.rowSelection && "selectedRowKeys" in props.rowSelection ? props.rowSelection.selectedRowKeys || [] : []
      };
      return _this;
    }
    SelectionTable2.prototype.getChildContext = function getChildContext() {
      return {
        rowSelection: this.props.rowSelection,
        selectedRowKeys: this.state.selectedRowKeys
      };
    };
    SelectionTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      if (nextProps.rowSelection && "selectedRowKeys" in nextProps.rowSelection) {
        var selectedRowKeys = nextProps.rowSelection.selectedRowKeys || [];
        return {
          selectedRowKeys
        };
      }
      return null;
    };
    SelectionTable2.prototype.normalizeChildren = function normalizeChildren(children) {
      var _props = this.props, prefix = _props.prefix, rowSelection = _props.rowSelection, size = _props.size;
      if (rowSelection) {
        children = Children$1.map(children, function(child, index) {
          return React.cloneElement(child, {
            key: index
          });
        });
        var attrs = rowSelection.columnProps && rowSelection.columnProps() || {};
        children.unshift(React.createElement(Column, _extends({
          key: "selection",
          title: this.renderSelectionHeader.bind(this),
          cell: this.renderSelectionBody.bind(this),
          width: size === "small" ? 34 : 50,
          className: prefix + "table-selection " + prefix + "table-prerow",
          __normalized: true
        }, attrs)));
        return children;
      }
      return children;
    };
    SelectionTable2.prototype.selectOneRow = function selectOneRow(index, record, checked, e) {
      var selectedRowKeys = [].concat(this.state.selectedRowKeys), i = void 0;
      var _props2 = this.props, primaryKey = _props2.primaryKey, rowSelection = _props2.rowSelection, dataSource = _props2.dataSource, mode = rowSelection.mode ? rowSelection.mode : "multiple", id = record[primaryKey];
      if (!id) {
        log.warning("Can't get value from record using given " + primaryKey + " as primaryKey.");
      }
      if (mode === "multiple") {
        if (checked) {
          selectedRowKeys.push(id);
        } else {
          i = selectedRowKeys.indexOf(id);
          selectedRowKeys.splice(i, 1);
        }
      } else if (checked) {
        selectedRowKeys = [id];
      }
      var records = unique(dataSource.filter(function(item) {
        return selectedRowKeys.indexOf(item[primaryKey]) > -1;
      }), primaryKey);
      if (typeof rowSelection.onSelect === "function") {
        rowSelection.onSelect(checked, record, records);
      }
      this.triggerSelection(rowSelection, selectedRowKeys, records);
      e.stopPropagation();
    };
    SelectionTable2.prototype.triggerSelection = function triggerSelection(rowSelection, selectedRowKeys, records) {
      if (!("selectedRowKeys" in rowSelection)) {
        this.setState({
          selectedRowKeys
        });
      }
      if (typeof rowSelection.onChange === "function") {
        rowSelection.onChange(selectedRowKeys, records);
      }
    };
    SelectionTable2.prototype.flatDataSource = function flatDataSource(dataSource) {
      var ret = dataSource;
      var listHeader = this.context.listHeader;
      if (listHeader) {
        ret = [];
        var hasChildrenSelection = listHeader.hasChildrenSelection, hasSelection = listHeader.hasSelection;
        dataSource.forEach(function(item) {
          var children = item.children;
          if (hasSelection) {
            ret.push(item);
          }
          if (children && hasChildrenSelection) {
            ret = ret.concat(children);
          }
        });
      }
      return ret;
    };
    SelectionTable2.prototype.render = function render() {
      var _props3 = this.props, rowSelection = _props3.rowSelection, components = _props3.components, children = _props3.children, columns = _props3.columns, others = _objectWithoutProperties(_props3, ["rowSelection", "components", "children", "columns"]);
      var useColumns = columns && !children;
      if (rowSelection) {
        if (useColumns) {
          this.addSelection(columns);
        } else {
          children = this.normalizeChildren(children || []);
        }
        components = _extends({}, components);
        components.Row = components.Row || SelectionRow;
      }
      return React.createElement(BaseComponent, _extends({}, others, {columns, components, children}));
    };
    return SelectionTable2;
  }(React.Component), _class2.SelectionRow = SelectionRow, _class2.propTypes = _extends({
    rowSelection: propTypes.object,
    primaryKey: propTypes.string,
    dataSource: propTypes.array,
    entireDataSource: propTypes.array
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps, {
    locale: zhCN.Table,
    primaryKey: "id",
    prefix: "next-"
  }), _class2.contextTypes = {
    listHeader: propTypes.any
  }, _class2.childContextTypes = {
    rowSelection: propTypes.object,
    selectedRowKeys: propTypes.array
  }, _temp3);
  SelectionTable.displayName = "SelectionTable";
  statics(SelectionTable, BaseComponent);
  return polyfill(SelectionTable);
}
var noop$5 = function noop7() {
};
function expanded(BaseComponent, stickyLock2) {
  var _class2, _temp22;
  var ExpandedTable = (_temp22 = _class2 = function(_React$Component) {
    _inherits(ExpandedTable2, _React$Component);
    function ExpandedTable2() {
      var _temp3, _this, _ret;
      _classCallCheck(this, ExpandedTable2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        openRowKeys: _this.props.openRowKeys || []
      }, _this.expandedKeydown = function(value, record, index, e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.keyCode === KEYCODE.ENTER) {
          _this.onExpandedClick(value, record, index, e);
        }
      }, _this.renderExpandedCell = function(value, index, record) {
        var _classnames;
        var _this$props = _this.props, getExpandedColProps = _this$props.getExpandedColProps, prefix = _this$props.prefix, locale = _this$props.locale, rowExpandable = _this$props.rowExpandable;
        if (typeof rowExpandable === "function" && !rowExpandable(record, index)) {
          return "";
        }
        var openRowKeys = _this.state.openRowKeys, primaryKey = _this.props.primaryKey, hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1, switchNode = hasExpanded ? React.createElement(NextIcon, {type: "minus", size: "xs", className: prefix + "table-expand-unfold"}) : React.createElement(NextIcon, {type: "add", size: "xs", className: prefix + "table-expand-fold"}), attrs = getExpandedColProps(record, index) || {};
        var cls = classnames((_classnames = {}, _classnames[prefix + "table-expanded-ctrl"] = true, _classnames.disabled = attrs.disabled, _classnames[attrs.className] = attrs.className, _classnames));
        if (!attrs.disabled) {
          attrs.onClick = _this.onExpandedClick.bind(_this, value, record, index);
        }
        return React.createElement("span", _extends({}, attrs, {
          role: "button",
          tabIndex: "0",
          onKeyDown: _this.expandedKeydown.bind(_this, value, record, index),
          "aria-label": hasExpanded ? locale.expanded : locale.folded,
          "aria-expanded": hasExpanded,
          className: cls
        }), switchNode);
      }, _this.addExpandCtrl = function(columns) {
        var _this$props2 = _this.props, prefix = _this$props2.prefix, size = _this$props2.size;
        if (!columns.find(function(record) {
          return record.key === "expanded";
        })) {
          columns.unshift({
            key: "expanded",
            title: "",
            cell: _this.renderExpandedCell.bind(_this),
            width: size === "small" ? 34 : 50,
            className: prefix + "table-expanded " + prefix + "table-prerow",
            __normalized: true
          });
        }
      }, _temp3), _possibleConstructorReturn(_this, _ret);
    }
    ExpandedTable2.prototype.getChildContext = function getChildContext() {
      return {
        openRowKeys: this.state.openRowKeys,
        expandedRowRender: this.props.expandedRowRender,
        expandedIndexSimulate: this.props.expandedIndexSimulate,
        expandedRowWidthEquals2Table: stickyLock2,
        expandedRowIndent: stickyLock2 ? [0, 0] : this.props.expandedRowIndent
      };
    };
    ExpandedTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      if ("openRowKeys" in nextProps) {
        return {
          openRowKeys: nextProps.openRowKeys || []
        };
      }
      return null;
    };
    ExpandedTable2.prototype.onExpandedClick = function onExpandedClick(value, record, i, e) {
      var openRowKeys = [].concat(this.state.openRowKeys), primaryKey = this.props.primaryKey, id = record[primaryKey], index = openRowKeys.indexOf(id);
      if (index > -1) {
        openRowKeys.splice(index, 1);
      } else {
        openRowKeys.push(id);
      }
      if (!("openRowKeys" in this.props)) {
        this.setState({
          openRowKeys
        });
      }
      this.props.onRowOpen(openRowKeys, id, index === -1, record);
      e.stopPropagation();
    };
    ExpandedTable2.prototype.normalizeChildren = function normalizeChildren(children) {
      var _props = this.props, prefix = _props.prefix, size = _props.size;
      var toArrayChildren = Children$1.map(children, function(child, index) {
        return React.cloneElement(child, {
          key: index
        });
      });
      toArrayChildren.unshift(React.createElement(Column, {
        title: "",
        key: "expanded",
        cell: this.renderExpandedCell.bind(this),
        width: size === "small" ? 34 : 50,
        className: prefix + "table-expanded " + prefix + "table-prerow",
        __normalized: true
      }));
      return toArrayChildren;
    };
    ExpandedTable2.prototype.normalizeDataSource = function normalizeDataSource(ds) {
      var ret = [];
      ds.forEach(function(item) {
        var itemCopy = _extends({}, item);
        itemCopy.__expanded = true;
        ret.push(item, itemCopy);
      });
      return ret;
    };
    ExpandedTable2.prototype.render = function render() {
      var _props2 = this.props, components = _props2.components, openRowKeys = _props2.openRowKeys, expandedRowRender = _props2.expandedRowRender, rowExpandable = _props2.rowExpandable, hasExpandedRowCtrl = _props2.hasExpandedRowCtrl, children = _props2.children, columns = _props2.columns, dataSource = _props2.dataSource, entireDataSource = _props2.entireDataSource, getExpandedColProps = _props2.getExpandedColProps, expandedRowIndent = _props2.expandedRowIndent, onRowOpen = _props2.onRowOpen, onExpandedRowClick = _props2.onExpandedRowClick, others = _objectWithoutProperties(_props2, ["components", "openRowKeys", "expandedRowRender", "rowExpandable", "hasExpandedRowCtrl", "children", "columns", "dataSource", "entireDataSource", "getExpandedColProps", "expandedRowIndent", "onRowOpen", "onExpandedRowClick"]);
      if (expandedRowRender && !components.Row) {
        components = _extends({}, components);
        components.Row = ExpandedRow;
        dataSource = this.normalizeDataSource(dataSource);
        entireDataSource = this.normalizeDataSource(entireDataSource);
      }
      if (expandedRowRender && hasExpandedRowCtrl) {
        var useColumns = columns && !children;
        if (useColumns) {
          this.addExpandCtrl(columns);
        } else {
          children = this.normalizeChildren(children || []);
        }
      }
      return React.createElement(BaseComponent, _extends({}, others, {
        columns,
        dataSource,
        entireDataSource,
        components
      }), children);
    };
    return ExpandedTable2;
  }(React.Component), _class2.ExpandedRow = ExpandedRow, _class2.propTypes = _extends({
    expandedRowRender: propTypes.func,
    rowExpandable: propTypes.func,
    expandedRowIndent: propTypes.array,
    openRowKeys: propTypes.array,
    hasExpandedRowCtrl: propTypes.bool,
    getExpandedColProps: propTypes.func,
    onRowOpen: propTypes.func,
    onExpandedRowClick: propTypes.func,
    locale: propTypes.object
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps, {
    getExpandedColProps: noop$5,
    onRowOpen: noop$5,
    hasExpandedRowCtrl: true,
    components: {},
    expandedRowIndent: stickyLock2 ? [0, 0] : [1, 0],
    prefix: "next-"
  }), _class2.childContextTypes = {
    openRowKeys: propTypes.array,
    expandedRowRender: propTypes.func,
    rowExpandable: propTypes.func,
    expandedIndexSimulate: propTypes.bool,
    expandedRowWidthEquals2Table: propTypes.bool,
    expandedRowIndent: propTypes.array
  }, _temp22);
  ExpandedTable.displayName = "ExpandedTable";
  statics(ExpandedTable, BaseComponent);
  return polyfill(ExpandedTable);
}
var _class$j, _temp2$8;
var VirtualBody = (_temp2$8 = _class$j = function(_React$Component) {
  _inherits(VirtualBody2, _React$Component);
  function VirtualBody2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, VirtualBody2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.tableRef = function(table) {
      _this.tableNode = table;
    }, _this.virtualScrollRef = function(virtualScroll) {
      _this.virtualScrollNode = virtualScroll;
    }, _this.onScroll = function(current) {
      _this.context.onFixedScrollSync(current);
      _this.context.onLockBodyScroll(current);
      _this.context.onVirtualScroll();
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  VirtualBody2.prototype.componentDidMount = function componentDidMount() {
    var bodyNode = findDOMNode(this);
    this.context.getNode("body", bodyNode);
    this.context.getBodyNode(bodyNode, this.context.lockType);
    this.context.getLockNode("body", bodyNode, this.context.lockType);
  };
  VirtualBody2.prototype.render = function render() {
    var _props = this.props, prefix = _props.prefix, className = _props.className, colGroup = _props.colGroup, tableWidth = _props.tableWidth, others = _objectWithoutProperties(_props, ["prefix", "className", "colGroup", "tableWidth"]);
    var _context = this.context, maxBodyHeight = _context.maxBodyHeight, bodyHeight = _context.bodyHeight, innerTop = _context.innerTop;
    var style = {
      width: tableWidth
    };
    return React.createElement("div", {
      style: {maxHeight: maxBodyHeight},
      className,
      onScroll: this.onScroll
    }, React.createElement("div", {
      style: {
        height: bodyHeight,
        position: "relative"
      },
      ref: this.virtualScrollRef
    }, React.createElement("div", {
      style: {
        height: "100%",
        position: "relative",
        transform: "translateY(" + innerTop + "px)"
      }
    }, React.createElement("table", {ref: this.tableRef, style}, colGroup, React.createElement(Body, _extends({}, others, {prefix}))))));
  };
  return VirtualBody2;
}(React.Component), _class$j.propTypes = {
  children: propTypes.any,
  prefix: propTypes.string,
  className: propTypes.string,
  colGroup: propTypes.any,
  tableWidth: propTypes.number
}, _class$j.contextTypes = {
  maxBodyHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onBodyScroll: propTypes.func,
  onFixedScrollSync: propTypes.func,
  onVirtualScroll: propTypes.func,
  onLockBodyScroll: propTypes.func,
  bodyHeight: propTypes.number,
  innerTop: propTypes.number,
  getNode: propTypes.func,
  getBodyNode: propTypes.func,
  getLockNode: propTypes.func,
  lockType: propTypes.oneOf(["left", "right"])
}, _temp2$8);
VirtualBody.displayName = "VirtualBody";
var noop$6 = function noop8() {
};
function virtual(BaseComponent) {
  var _class2, _temp3;
  var VirtualTable = (_temp3 = _class2 = function(_React$Component) {
    _inherits(VirtualTable2, _React$Component);
    function VirtualTable2(props, context) {
      _classCallCheck(this, VirtualTable2);
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
      _this.state = {
        rowHeight: _this.props.rowHeight,
        scrollToRow: _this.props.scrollToRow,
        height: _this.props.maxBodyHeight
      };
      _this.onScroll = function() {
        var scrollTop = _this.bodyNode.scrollTop;
        if (scrollTop === _this.lastScrollTop) {
          return;
        }
        var start = _this.computeScrollToRow(scrollTop);
        if (!("scrollToRow" in _this.props)) {
          _this.setState({
            scrollToRow: start
          });
        }
        _this.props.onBodyScroll(start);
        _this.lastScrollTop = scrollTop;
      };
      _this.getBodyNode = function(node, lockType) {
        lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : "";
        _this["body" + lockType + "Node"] = node;
      };
      _this.getTableInstance = function(type2, instance) {
        type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
        _this["table" + type2 + "Inc"] = instance;
      };
      var useVirtual = props.useVirtual, dataSource = props.dataSource;
      _this.hasVirtualData = useVirtual && dataSource && dataSource.length > 0;
      return _this;
    }
    VirtualTable2.prototype.getChildContext = function getChildContext() {
      return {
        onVirtualScroll: this.onScroll,
        bodyHeight: this.computeBodyHeight(),
        innerTop: this.computeInnerTop(),
        getBodyNode: this.getBodyNode,
        getTableInstanceForVirtual: this.getTableInstance,
        rowSelection: this.rowSelection
      };
    };
    VirtualTable2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};
      if ("maxBodyHeight" in nextProps) {
        if (prevState.height !== nextProps.maxBodyHeight) {
          state.height = nextProps.maxBodyHeight;
        }
      }
      if ("scrollToRow" in nextProps) {
        state.scrollToRow = nextProps.scrollToRow;
      }
      return state;
    };
    VirtualTable2.prototype.componentDidMount = function componentDidMount() {
      if (this.hasVirtualData) {
        this.lastScrollTop = this.bodyNode.scrollTop;
      }
      this.adjustScrollTop();
      this.adjustSize();
      this.reComputeSize();
    };
    VirtualTable2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.adjustScrollTop();
      this.adjustSize();
      this.reComputeSize();
    };
    VirtualTable2.prototype.reComputeSize = function reComputeSize() {
      var rowHeight = this.state.rowHeight;
      if (typeof rowHeight === "function" && this.hasVirtualData) {
        var row = this.getRowNode();
        var rowClientHeight = row && row.clientHeight;
        if (rowClientHeight !== this.state.rowHeight) {
          this.setState({
            rowHeight: rowClientHeight
          });
        }
      }
    };
    VirtualTable2.prototype.computeBodyHeight = function computeBodyHeight() {
      var rowHeight = this.state.rowHeight;
      var dataSource = this.props.dataSource;
      if (typeof rowHeight === "function") {
        return 0;
      }
      return dataSource.length * rowHeight;
    };
    VirtualTable2.prototype.computeInnerTop = function computeInnerTop() {
      var rowHeight = this.state.rowHeight;
      if (typeof rowHeight === "function") {
        return 0;
      }
      return this.start * rowHeight;
    };
    VirtualTable2.prototype.getVisibleRange = function getVisibleRange(ExpectStart) {
      var _state = this.state, height = _state.height, rowHeight = _state.rowHeight;
      var len = this.props.dataSource.length;
      var end = void 0, visibleCount = 0;
      var start = 0;
      if (typeof rowHeight === "function") {
        end = 1;
      } else {
        visibleCount = parseInt(dom.getPixels(height) / rowHeight, 10);
        if (typeof ExpectStart === "number") {
          start = ExpectStart < len ? ExpectStart : 0;
        }
        end = Math.min(+start + 1 + visibleCount + 10, len);
      }
      this.end = end;
      this.visibleCount = visibleCount;
      return {
        start,
        end
      };
    };
    VirtualTable2.prototype.adjustScrollTop = function adjustScrollTop() {
      if (this.hasVirtualData) {
        this.bodyNode.scrollTop = this.lastScrollTop % this.state.rowHeight + this.state.rowHeight * this.state.scrollToRow;
      }
    };
    VirtualTable2.prototype.adjustSize = function adjustSize() {
      if (this.hasVirtualData) {
        var body = this.bodyNode;
        var virtualScrollNode = body.querySelector("div");
        var clientHeight = body.clientHeight, clientWidth = body.clientWidth;
        var tableInc = this.tableInc;
        var tableNode = findDOMNode(tableInc);
        var prefix = this.props.prefix;
        var headerNode = tableNode.querySelector("." + prefix + "table-header table");
        var headerClientWidth = headerNode && headerNode.clientWidth;
        if (clientWidth < headerClientWidth) {
          dom.setStyle(virtualScrollNode, "min-width", headerClientWidth);
          var leftNode = this.bodyLeftNode;
          var rightNode = this.bodyRightNode;
          leftNode && dom.setStyle(leftNode, "max-height", clientHeight);
          rightNode && dom.setStyle(rightNode, "max-height", clientHeight);
          this.hasScrollbar = true;
        } else {
          dom.setStyle(virtualScrollNode, "min-width", "auto");
          this.hasScrollbar = false;
        }
      }
    };
    VirtualTable2.prototype.computeScrollToRow = function computeScrollToRow(offset) {
      var rowHeight = this.state.rowHeight;
      var start = parseInt(offset / rowHeight);
      this.start = start;
      return start;
    };
    VirtualTable2.prototype.getRowNode = function getRowNode() {
      try {
        return findDOMNode(this.tableInc.getRowRef(0));
      } catch (error) {
        return null;
      }
    };
    VirtualTable2.prototype.render = function render() {
      var _props = this.props, useVirtual = _props.useVirtual, components = _props.components, dataSource = _props.dataSource, fixedHeader = _props.fixedHeader, rowHeight = _props.rowHeight, scrollToRow = _props.scrollToRow, onBodyScroll = _props.onBodyScroll, others = _objectWithoutProperties(_props, ["useVirtual", "components", "dataSource", "fixedHeader", "rowHeight", "scrollToRow", "onBodyScroll"]);
      var entireDataSource = dataSource;
      var newDataSource = dataSource;
      this.rowSelection = this.props.rowSelection;
      if (this.hasVirtualData) {
        newDataSource = [];
        components = _extends({}, components);
        var _getVisibleRange = this.getVisibleRange(this.state.scrollToRow), start = _getVisibleRange.start, end = _getVisibleRange.end;
        dataSource.forEach(function(current, index, record) {
          if (index >= start && index < end) {
            current.__rowIndex = index;
            newDataSource.push(current);
          }
        });
        if (!components.Body) {
          components.Body = VirtualBody;
        }
        fixedHeader = true;
      }
      return React.createElement(BaseComponent, _extends({}, others, {
        dataSource: newDataSource,
        entireDataSource,
        components,
        fixedHeader
      }));
    };
    return VirtualTable2;
  }(React.Component), _class2.VirtualBody = VirtualBody, _class2.propTypes = _extends({
    useVirtual: propTypes.bool,
    rowHeight: propTypes.oneOfType([propTypes.number, propTypes.func]),
    maxBodyHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
    primaryKey: propTypes.string,
    dataSource: propTypes.array,
    onBodyScroll: propTypes.func
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps, {
    primaryKey: "id",
    rowHeight: noop$6,
    maxBodyHeight: 200,
    components: {},
    prefix: "next-",
    onBodyScroll: noop$6
  }), _class2.childContextTypes = {
    onVirtualScroll: propTypes.func,
    bodyHeight: propTypes.number,
    innerTop: propTypes.number,
    getBodyNode: propTypes.func,
    getTableInstanceForVirtual: propTypes.func,
    rowSelection: propTypes.object
  }, _temp3);
  VirtualTable.displayName = "VirtualTable";
  statics(VirtualTable, BaseComponent);
  return polyfill(VirtualTable);
}
var _class$k, _temp2$9;
var LockBody = (_temp2$9 = _class$k = function(_React$Component) {
  _inherits(LockBody2, _React$Component);
  function LockBody2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, LockBody2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onBodyScroll = function(event) {
      _this.context.onLockBodyScroll(event);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  LockBody2.prototype.componentDidMount = function componentDidMount() {
    this.context.getLockNode("body", findDOMNode(this), this.context.lockType);
  };
  LockBody2.prototype.render = function render() {
    var event = {
      onLockScroll: this.onBodyScroll
    };
    return React.createElement(FixedBody, _extends({}, this.props, event));
  };
  return LockBody2;
}(React.Component), _class$k.propTypes = _extends({}, FixedBody.propTypes), _class$k.contextTypes = _extends({}, FixedBody.contextTypes, {
  getLockNode: propTypes.func,
  onLockBodyScroll: propTypes.func,
  lockType: propTypes.oneOf(["left", "right"])
}), _temp2$9);
LockBody.displayName = "LockBody";
var _class$l, _temp$b;
var LockHeader = (_temp$b = _class$l = function(_FixedHeader) {
  _inherits(LockHeader2, _FixedHeader);
  function LockHeader2() {
    _classCallCheck(this, LockHeader2);
    return _possibleConstructorReturn(this, _FixedHeader.apply(this, arguments));
  }
  LockHeader2.prototype.componentDidMount = function componentDidMount() {
    var _context = this.context, getNode = _context.getNode, getLockNode = _context.getLockNode;
    getNode && getNode("header", findDOMNode(this), this.context.lockType);
    getLockNode && getLockNode("header", findDOMNode(this), this.context.lockType);
  };
  return LockHeader2;
}(FixedHeader), _class$l.propTypes = _extends({}, FixedHeader.propTypes), _class$l.contextTypes = _extends({}, FixedHeader.contextTypes, {
  getLockNode: propTypes.func,
  lockType: propTypes.oneOf(["left", "right"])
}), _temp$b);
var ieVersion = env.ieVersion;
function lock(BaseComponent) {
  var _class2, _temp3;
  var LockTable = (_temp3 = _class2 = function(_React$Component) {
    _inherits(LockTable2, _React$Component);
    function LockTable2(props, context) {
      _classCallCheck(this, LockTable2);
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
      _this.state = {};
      _this.getTableInstance = function(type2, instance) {
        type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
        _this["table" + type2 + "Inc"] = instance;
      };
      _this.getNode = function(type2, node, lockType) {
        lockType = lockType ? lockType.charAt(0).toUpperCase() + lockType.substr(1) : "";
        _this["" + type2 + lockType + "Node"] = node;
        if (type2 === "header" && !_this.innerHeaderNode && !lockType) {
          _this.innerHeaderNode = _this.headerNode.querySelector("div");
        }
      };
      _this.onRowMouseEnter = function(record, index) {
        if (_this.isLock()) {
          var row = _this.getRowNode(index);
          var leftRow = _this.getRowNode(index, "left");
          var rightRow = _this.getRowNode(index, "right");
          [row, leftRow, rightRow].forEach(function(row2) {
            row2 && dom.addClass(row2, "hovered");
          });
        }
      };
      _this.onRowMouseLeave = function(record, index) {
        if (_this.isLock()) {
          var row = _this.getRowNode(index);
          var leftRow = _this.getRowNode(index, "left");
          var rightRow = _this.getRowNode(index, "right");
          [row, leftRow, rightRow].forEach(function(row2) {
            row2 && dom.removeClass(row2, "hovered");
          });
        }
      };
      _this.onLockBodyScrollTop = function(event) {
        var target = event.target;
        if (event.currentTarget !== target) {
          return;
        }
        var distScrollTop = target.scrollTop;
        if (_this.isLock() && distScrollTop !== _this.lastScrollTop) {
          var lockRightBody = _this.bodyRightNode, lockLeftBody = _this.bodyLeftNode, bodyNode = _this.bodyNode;
          var arr = [lockLeftBody, lockRightBody, bodyNode];
          arr.forEach(function(node) {
            if (node && node.scrollTop !== distScrollTop) {
              node.scrollTop = distScrollTop;
            }
          });
          _this.lastScrollTop = distScrollTop;
        }
      };
      _this.onLockBodyScrollLeft = function() {
        if (_this.isLock()) {
          var rtl = _this.props.rtl;
          var lockRightTable = rtl ? _this.getWrapperNode("left") : _this.getWrapperNode("right"), lockLeftTable = rtl ? _this.getWrapperNode("right") : _this.getWrapperNode("left"), shadowClassName = "shadow";
          var x = _this.bodyNode.scrollLeft;
          if (x === 0) {
            lockLeftTable && dom.removeClass(lockLeftTable, shadowClassName);
            lockRightTable && dom.addClass(lockRightTable, shadowClassName);
          } else if (x === _this.bodyNode.scrollWidth - _this.bodyNode.clientWidth) {
            lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
            lockRightTable && dom.removeClass(lockRightTable, shadowClassName);
          } else {
            lockLeftTable && dom.addClass(lockLeftTable, shadowClassName);
            lockRightTable && dom.addClass(lockRightTable, shadowClassName);
          }
        }
      };
      _this.onLockBodyScroll = function(event) {
        _this.onLockBodyScrollTop(event);
        _this.onLockBodyScrollLeft();
      };
      _this.adjustSize = function() {
        if (!_this.adjustIfTableNotNeedLock()) {
          _this.adjustHeaderSize();
          _this.adjustBodySize();
          _this.adjustRowHeight();
          _this.onLockBodyScrollLeft();
        }
      };
      _this.getFlatenChildrenLength = function() {
        var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var loop = function loop2(arr) {
          var newArray = [];
          arr.forEach(function(child) {
            if (child && child.children) {
              newArray.push.apply(newArray, loop2(child.children));
            } else {
              newArray.push(child);
            }
          });
          return newArray;
        };
        return loop(children).length;
      };
      _this.saveLockLeftRef = function(ref) {
        _this.lockLeftEl = ref;
      };
      _this.saveLockRightRef = function(ref) {
        _this.lockRightEl = ref;
      };
      _this.lockLeftChildren = [];
      _this.lockRightChildren = [];
      return _this;
    }
    LockTable2.prototype.getChildContext = function getChildContext() {
      return {
        getTableInstance: this.getTableInstance,
        getLockNode: this.getNode,
        onLockBodyScroll: this.onLockBodyScroll,
        onRowMouseEnter: this.onRowMouseEnter,
        onRowMouseLeave: this.onRowMouseLeave
      };
    };
    LockTable2.prototype.componentDidMount = function componentDidMount() {
      events.on(window, "resize", this.adjustSize);
      this.scroll();
      this.adjustSize();
    };
    LockTable2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (nextProps.pure) {
        var isEqual = shallowElementEquals_1(nextProps, this.props);
        return !(isEqual && obj.shallowEqual(nextContext, this.context));
      }
      return true;
    };
    LockTable2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.adjustSize();
      this._isLock = false;
    };
    LockTable2.prototype.componentWillUnmount = function componentWillUnmount() {
      events.off(window, "resize", this.adjustSize);
    };
    LockTable2.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
      var columns = this.normalizeChildren(props);
      var splitChildren = this.splitFromNormalizeChildren(columns);
      var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
      return {
        lockLeftChildren,
        lockRightChildren,
        children: this.mergeFromSplitLockChildren(splitChildren)
      };
    };
    LockTable2.prototype.normalizeChildren = function normalizeChildren(props) {
      var children = props.children, columns = props.columns;
      var isLock = false, ret = void 0;
      var checkLock = function checkLock2(col) {
        if ([true, "left", "right"].indexOf(col.lock) > -1) {
          if (!("width" in col)) {
            log.warning("Should config width for lock column named [ " + col.dataIndex + " ].");
          }
          isLock = true;
        }
      };
      if (columns && !children) {
        ret = columns;
        var getColumns = function getColumns2(cols) {
          cols.forEach(function() {
            var col = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            checkLock(col);
            if (col.children) {
              getColumns2(col.children);
            }
          });
        };
        getColumns(columns);
      } else {
        var getChildren = function getChildren2(children2) {
          var ret2 = [];
          Children$1.forEach(children2, function(child) {
            if (child) {
              var _props = _extends({}, child.props);
              checkLock(_props);
              ret2.push(_props);
              if (child.props.children) {
                _props.children = getChildren2(child.props.children);
              }
            }
          });
          return ret2;
        };
        ret = getChildren(children);
      }
      ret.forEach(function(child) {
        if (child.__normalized && isLock) {
          child.lock = child.lock || "left";
          delete child.__normalized;
        }
      });
      this._isLock = isLock;
      return ret;
    };
    LockTable2.prototype.splitFromNormalizeChildren = function splitFromNormalizeChildren(children) {
      var originChildren = deepCopy(children);
      var lockLeftChildren = deepCopy(children);
      var lockRightChildren = deepCopy(children);
      var loop = function loop2(lockChildren, condition) {
        var ret = [];
        lockChildren.forEach(function(child) {
          if (child.children) {
            var res = loop2(child.children, condition);
            if (!res.length) {
              ret.push(child);
            }
          } else {
            var order = condition(child);
            if (!order) {
              ret.push(child);
            }
          }
        });
        ret.forEach(function(res) {
          var index = lockChildren.indexOf(res);
          lockChildren.splice(index, 1);
        });
        return lockChildren;
      };
      loop(lockLeftChildren, function(child) {
        if (child.lock === true || child.lock === "left") {
          return "left";
        }
      });
      loop(lockRightChildren, function(child) {
        if (child.lock === "right") {
          return "right";
        }
      });
      loop(originChildren, function(child) {
        return child.lock !== true && child.lock !== "left" && child.lock !== "right";
      });
      return {
        lockLeftChildren,
        lockRightChildren,
        originChildren
      };
    };
    LockTable2.prototype.mergeFromSplitLockChildren = function mergeFromSplitLockChildren(splitChildren) {
      var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
      var originChildren = splitChildren.originChildren;
      Array.prototype.unshift.apply(originChildren, lockLeftChildren);
      originChildren = originChildren.concat(lockRightChildren);
      return originChildren;
    };
    LockTable2.prototype.scroll = function scroll() {
      var _props2 = this.props, _props2$scrollToCol = _props2.scrollToCol, scrollToCol = _props2$scrollToCol === void 0 ? 0 : _props2$scrollToCol, _props2$scrollToRow = _props2.scrollToRow, scrollToRow = _props2$scrollToRow === void 0 ? 0 : _props2$scrollToRow;
      if (!scrollToCol && !scrollToRow) {
        return;
      }
      var colCellNode = this.getCellNode(0, scrollToCol);
      var rowCellNode = this.getCellNode(scrollToRow, 0);
      var bodyNodeOffset = this.bodyNode.getBoundingClientRect();
      if (colCellNode) {
        var cellNodeoffset = colCellNode.getBoundingClientRect();
        var scrollLeft = cellNodeoffset.left - bodyNodeOffset.left;
        this.bodyNode.scrollLeft = scrollLeft;
      }
      if (rowCellNode) {
        var _cellNodeoffset = rowCellNode.getBoundingClientRect();
        var scrollTop = _cellNodeoffset.top - bodyNodeOffset.top;
        this.bodyNode.scrollTop = scrollTop;
      }
    };
    LockTable2.prototype.isLock = function isLock() {
      return this.lockLeftChildren.length || this.lockRightChildren.length;
    };
    LockTable2.prototype.isOriginLock = function isOriginLock() {
      return this._isLock;
    };
    LockTable2.prototype.removeLockTable = function removeLockTable() {
      var lockLeftLen = this.lockLeftChildren.length;
      var lockRightLen = this.lockRightChildren.length;
      if (lockLeftLen) {
        this._notNeedAdjustLockLeft = true;
      }
      if (lockRightLen) {
        this._notNeedAdjustLockRight = true;
      }
      if (lockRightLen || lockLeftLen) {
        this.forceUpdate();
        return true;
      }
    };
    LockTable2.prototype.adjustIfTableNotNeedLock = function adjustIfTableNotNeedLock() {
      var _this2 = this;
      if (this.isOriginLock()) {
        var widthObj = this.tableInc.flatChildren.map(function(item, index) {
          var cell5 = _this2.getCellNode(0, index) || {};
          var headerCell = _this2.getHeaderCellNode(0, index) || {};
          try {
            return {
              cellWidths: parseFloat(getComputedStyle(cell5).width) || 0,
              headerWidths: parseFloat(getComputedStyle(headerCell).width) || 0
            };
          } catch (error) {
            return {
              cellWidths: cell5.clientWidth || 0,
              headerWidths: headerCell.clientWidth || 0
            };
          }
        }).reduce(function(a, b) {
          return {
            cellWidths: a.cellWidths + b.cellWidths,
            headerWidths: a.headerWidths + b.headerWidths
          };
        }, {
          cellWidths: 0,
          headerWidths: 0
        });
        var node = void 0, width = void 0;
        try {
          node = findDOMNode(this);
          width = node.clientWidth;
        } catch (err) {
          node = null;
          width = 0;
        }
        if (width === 0) {
          return true;
        }
        var configWidths = parseInt(widthObj.cellWidths) || parseInt(widthObj.headerWidths);
        if (configWidths <= width && configWidths > 0) {
          this.removeLockTable();
        } else if (this._notNeedAdjustLockLeft || this._notNeedAdjustLockRight) {
          this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
          this.forceUpdate();
        } else {
          this._notNeedAdjustLockLeft = this._notNeedAdjustLockRight = false;
          return false;
        }
      }
      return false;
    };
    LockTable2.prototype.adjustBodySize = function adjustBodySize() {
      var _style;
      var _props3 = this.props, rtl = _props3.rtl, hasHeader = _props3.hasHeader;
      var header = this.headerNode;
      var paddingName = rtl ? "paddingLeft" : "paddingRight";
      var marginName = rtl ? "marginLeft" : "marginRight";
      var scrollBarSize = +dom.scrollbar().width || 0;
      var style = (_style = {}, _style[paddingName] = scrollBarSize, _style[marginName] = scrollBarSize, _style);
      var body = this.bodyNode, hasVerScroll = body && body.scrollHeight > body.clientHeight;
      if (this.isLock()) {
        var lockLeftBody = this.bodyLeftNode, lockRightBody = this.bodyRightNode, lockRightBodyWrapper = this.getWrapperNode("right"), bodyHeight = body.offsetHeight, width = hasVerScroll ? scrollBarSize : 0, lockBodyHeight = bodyHeight - scrollBarSize;
        if (!hasVerScroll) {
          style[paddingName] = 0;
          style[marginName] = 0;
        }
        if (+scrollBarSize) {
          style.marginBottom = -scrollBarSize;
          style.paddingBottom = scrollBarSize;
        } else {
          style.marginBottom = -20;
          style.paddingBottom = 20;
        }
        var lockStyle = {
          "max-height": lockBodyHeight
        };
        if (!hasHeader && !+scrollBarSize) {
          lockStyle[marginName] = 0;
        }
        if (+scrollBarSize) {
          lockStyle[marginName] = -scrollBarSize;
        }
        lockLeftBody && dom.setStyle(lockLeftBody, lockStyle);
        lockRightBody && dom.setStyle(lockRightBody, lockStyle);
        lockRightBodyWrapper && +scrollBarSize && dom.setStyle(lockRightBodyWrapper, rtl ? "left" : "right", width + "px");
      } else {
        style.marginBottom = -scrollBarSize;
        style.paddingBottom = scrollBarSize;
        style[marginName] = 0;
        if (!hasVerScroll) {
          style[paddingName] = 0;
        }
      }
      header && dom.setStyle(header, style);
    };
    LockTable2.prototype.adjustHeaderSize = function adjustHeaderSize() {
      var _this3 = this;
      if (this.isLock()) {
        this.tableInc.groupChildren.forEach(function(child, index) {
          var lastIndex = _this3.tableInc.groupChildren[index].length - 1;
          var headerRightRow = _this3.getHeaderCellNode(index, lastIndex), headerLeftRow = _this3.getHeaderCellNode(index, 0), headerRightLockRow = _this3.getHeaderCellNode(index, 0, "right"), headerLeftLockRow = _this3.getHeaderCellNode(index, 0, "left");
          if (headerRightRow && headerRightLockRow) {
            var maxRightRowHeight = headerRightRow.offsetHeight;
            dom.setStyle(headerRightLockRow, "height", maxRightRowHeight);
            setTimeout(function() {
              var affixRef = _this3.tableRightInc.affixRef;
              return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
            });
          }
          if (headerLeftRow && headerLeftLockRow) {
            var maxLeftRowHeight = headerLeftRow.offsetHeight;
            dom.setStyle(headerLeftLockRow, "height", maxLeftRowHeight);
            setTimeout(function() {
              var affixRef = _this3.tableLeftInc.affixRef;
              return affixRef && affixRef.getInstance() && affixRef.getInstance().updatePosition();
            });
          }
        });
      }
    };
    LockTable2.prototype.adjustRowHeight = function adjustRowHeight() {
      var _this4 = this;
      if (this.isLock()) {
        this.tableInc.props.dataSource.forEach(function(item, index) {
          var rowIndex = (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && "__rowIndex" in item ? item.__rowIndex : index;
          _this4.setRowHeight(rowIndex, "left");
          _this4.setRowHeight(rowIndex, "right");
        });
      }
    };
    LockTable2.prototype.setRowHeight = function setRowHeight(rowIndex, dir) {
      var lockRow = this.getRowNode(rowIndex, dir), row = this.getRowNode(rowIndex), rowHeight = (ieVersion ? row && row.offsetHeight : row && parseFloat(getComputedStyle(row).height)) || "auto", lockHeight = (ieVersion ? lockRow && lockRow.offsetHeight : lockRow && parseFloat(getComputedStyle(lockRow).height)) || "auto";
      if (lockRow && rowHeight !== lockHeight) {
        dom.setStyle(lockRow, "height", rowHeight);
      }
    };
    LockTable2.prototype.getWrapperNode = function getWrapperNode(type2) {
      type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
      try {
        return findDOMNode(this["lock" + type2 + "El"]);
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.getRowNode = function getRowNode(index, type2) {
      type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
      var table = this["table" + type2 + "Inc"];
      try {
        return findDOMNode(table.getRowRef(index));
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.getHeaderCellNode = function getHeaderCellNode(index, i, type2) {
      type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
      var table = this["table" + type2 + "Inc"];
      try {
        return findDOMNode(table.getHeaderCellRef(index, i));
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.getCellNode = function getCellNode(index, i, type2) {
      type2 = type2 ? type2.charAt(0).toUpperCase() + type2.substr(1) : "";
      var table = this["table" + type2 + "Inc"];
      try {
        return findDOMNode(table.getCellRef(index, i));
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.render = function render() {
      var _props4 = this.props, children = _props4.children, columns = _props4.columns, prefix = _props4.prefix, components = _props4.components, className = _props4.className, dataSource = _props4.dataSource, tableWidth = _props4.tableWidth, others = _objectWithoutProperties(_props4, ["children", "columns", "prefix", "components", "className", "dataSource", "tableWidth"]);
      var _normalizeChildrenSta = this.normalizeChildrenState(this.props), lockLeftChildren = _normalizeChildrenSta.lockLeftChildren, lockRightChildren = _normalizeChildrenSta.lockRightChildren, normalizedChildren = _normalizeChildrenSta.children;
      var leftLen = this.getFlatenChildrenLength(lockLeftChildren);
      var rightLen = this.getFlatenChildrenLength(lockRightChildren);
      var originLen = this.getFlatenChildrenLength(normalizedChildren);
      var lengths = {
        left: leftLen,
        right: rightLen,
        origin: originLen
      };
      if (this._notNeedAdjustLockLeft) {
        lockLeftChildren = [];
      }
      if (this._notNeedAdjustLockRight) {
        lockRightChildren = [];
      }
      this.lockLeftChildren = lockLeftChildren;
      this.lockRightChildren = lockRightChildren;
      if (this.isOriginLock()) {
        var _classnames;
        components = _extends({}, components);
        components.Body = components.Body || LockBody;
        components.Header = components.Header || LockHeader;
        components.Wrapper = components.Wrapper || FixedWrapper;
        components.Row = components.Row || LockRow;
        className = classnames((_classnames = {}, _classnames[prefix + "table-lock"] = true, _classnames[prefix + "table-wrap-empty"] = !dataSource.length, _classnames[className] = className, _classnames));
        var content = [React.createElement(BaseComponent, _extends({}, others, {
          dataSource,
          key: "lock-left",
          columns: lockLeftChildren,
          className: prefix + "table-lock-left",
          lengths,
          prefix,
          lockType: "left",
          components,
          ref: this.saveLockLeftRef,
          loading: false,
          "aria-hidden": true
        })), React.createElement(BaseComponent, _extends({}, others, {
          dataSource,
          key: "lock-right",
          columns: lockRightChildren,
          className: prefix + "table-lock-right",
          lengths,
          prefix,
          lockType: "right",
          components,
          ref: this.saveLockRightRef,
          loading: false,
          "aria-hidden": true
        }))];
        return React.createElement(BaseComponent, _extends({}, others, {
          tableWidth,
          dataSource,
          columns: normalizedChildren,
          prefix,
          lengths,
          wrapperContent: content,
          components,
          className
        }));
      }
      return React.createElement(BaseComponent, this.props);
    };
    return LockTable2;
  }(React.Component), _class2.LockRow = LockRow, _class2.LockBody = LockBody, _class2.LockHeader = LockHeader, _class2.propTypes = _extends({
    scrollToCol: propTypes.number,
    scrollToRow: propTypes.number
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps), _class2.childContextTypes = {
    getTableInstance: propTypes.func,
    getLockNode: propTypes.func,
    onLockBodyScroll: propTypes.func,
    onRowMouseEnter: propTypes.func,
    onRowMouseLeave: propTypes.func
  }, _temp3);
  LockTable.displayName = "LockTable";
  statics(LockTable, BaseComponent);
  return LockTable;
}
function deepCopy(arr) {
  var copy = function copy2(arr2) {
    return arr2.map(function(item) {
      var newItem = _extends({}, item);
      if (item.children) {
        item.children = copy2(item.children);
      }
      return newItem;
    });
  };
  return copy(arr);
}
function stickyLock(BaseComponent) {
  var _class2, _temp22;
  var LockTable = (_temp22 = _class2 = function(_React$Component) {
    _inherits(LockTable2, _React$Component);
    function LockTable2() {
      var _temp3, _this, _ret;
      _classCallCheck(this, LockTable2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.updateOffsetArr = function() {
        var _ref = _this.splitChildren || {}, lockLeftChildren = _ref.lockLeftChildren, lockRightChildren = _ref.lockRightChildren, originChildren = _ref.originChildren;
        var leftLen = _this.getFlatenChildren(lockLeftChildren).length;
        var rightLen = _this.getFlatenChildren(lockRightChildren).length;
        var totalLen = leftLen + rightLen + _this.getFlatenChildren(originChildren).length;
        var hasLockLeft = leftLen > 0;
        var hasLockRight = rightLen > 0;
        var leftOffsetArr = _this.getStickyWidth(lockLeftChildren, "left", totalLen);
        var rightOffsetArr = _this.getStickyWidth(lockRightChildren, "right", totalLen);
        var state = {};
        if ("" + leftOffsetArr !== "" + _this.state.leftOffsetArr) {
          state.leftOffsetArr = leftOffsetArr;
        }
        if ("" + rightOffsetArr !== "" + _this.state.rightOffsetArr) {
          state.rightOffsetArr = rightOffsetArr;
        }
        if (hasLockLeft !== _this.state.hasLockLeft) {
          state.hasLockLeft = hasLockLeft;
        }
        if (hasLockRight !== _this.state.hasLockRight) {
          state.hasLockRight = hasLockRight;
        }
        if (Object.keys(state).length > 0) {
          _this.setState(state);
        }
      }, _this.onLockBodyScroll = function(e) {
        var _ref2 = e.currentTarget || {}, scrollLeft = _ref2.scrollLeft, scrollWidth = _ref2.scrollWidth, clientWidth = _ref2.clientWidth;
        var _this2 = _this, pingRight = _this2.pingRight, pingLeft = _this2.pingLeft;
        var pingLeftNext = scrollLeft > 0 && _this.state.hasLockLeft;
        var pingRightNext = scrollLeft < scrollWidth - clientWidth && _this.state.hasLockRight;
        if (pingLeft !== pingLeftNext || pingRight !== pingRightNext) {
          var prefix = _this.props.prefix;
          var table = _this.getTableNode();
          _this.pingLeft = pingLeftNext;
          _this.pingRight = pingRightNext;
          var leftFunc = pingLeftNext ? "addClass" : "removeClass";
          dom[leftFunc](table, prefix + "table-ping-left");
          var rightFunc = pingRightNext ? "addClass" : "removeClass";
          dom[rightFunc](table, prefix + "table-ping-right");
        }
      }, _this.getStickyWidth = function(lockChildren, dir, totalLen) {
        var offsetArr = [];
        var flatenChildren = _this.getFlatenChildren(lockChildren);
        var len = flatenChildren.length;
        flatenChildren.reduce(function(ret, col, index) {
          var tag = dir === "left" ? index : len - 1 - index;
          var tagNext = dir === "left" ? tag - 1 : tag + 1;
          var nodeToGetWidth = dir === "left" ? tag - 1 : totalLen - index;
          if (dir === "left" && tag === 0) {
            ret[0] = 0;
            return ret;
          } else if (dir === "right" && tag === len - 1) {
            ret[tag] = 0;
            return ret;
          }
          var node = _this.getCellNode(0, nodeToGetWidth);
          var colWidth = node && parseFloat(getComputedStyle(node).width) || 0;
          ret[tag] = (ret[tagNext] || 0) + colWidth;
          return ret;
        }, offsetArr);
        return offsetArr;
      }, _this.getTableInstance = function(type2, instance) {
        type2 = "";
        _this["table" + type2 + "Inc"] = instance;
      }, _this.getNode = function(type2, node) {
        _this[type2 + "Node"] = node;
      }, _this.getFlatenChildren = function() {
        var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var loop = function loop2(arr) {
          var newArray = [];
          arr.forEach(function(child) {
            if (child.children) {
              newArray.push.apply(newArray, loop2(child.children));
            } else {
              newArray.push(child);
            }
          });
          return newArray;
        };
        return loop(children);
      }, _temp3), _possibleConstructorReturn(_this, _ret);
    }
    LockTable2.prototype.getChildContext = function getChildContext() {
      return {
        getTableInstance: this.getTableInstance,
        getLockNode: this.getNode,
        onLockBodyScroll: this.onLockBodyScroll
      };
    };
    LockTable2.prototype.componentDidMount = function componentDidMount() {
      this.updateOffsetArr();
      this.onLockBodyScroll({currentTarget: this.bodyNode});
      this.forceUpdate();
    };
    LockTable2.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (nextProps.pure) {
        var isEqual = shallowElementEquals_1(nextProps, this.props);
        return !(isEqual && obj.shallowEqual(nextContext, this.context));
      }
      return true;
    };
    LockTable2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateOffsetArr();
    };
    LockTable2.prototype.normalizeChildrenState = function normalizeChildrenState(props) {
      var columns = this.normalizeChildren(props);
      this.splitChildren = this.splitFromNormalizeChildren(columns);
      return this.mergeFromSplitLockChildren(this.splitChildren, props.prefix);
    };
    LockTable2.prototype.normalizeChildren = function normalizeChildren(props) {
      var children = props.children, columns = props.columns;
      var isLock = false, ret = void 0;
      var getChildren = function getChildren2(children2) {
        var ret2 = [];
        Children$1.forEach(children2, function(child) {
          if (child) {
            var _props = _extends({}, child.props);
            if ([true, "left", "right"].indexOf(_props.lock) > -1) {
              isLock = true;
              if (!("width" in _props)) {
                log.warning("Should config width for lock column named [ " + _props.dataIndex + " ].");
              }
            }
            ret2.push(_props);
            if (child.props.children) {
              _props.children = getChildren2(child.props.children);
            }
          }
        });
        return ret2;
      };
      if (columns && !children) {
        ret = columns;
        isLock = columns.find(function(record) {
          return [true, "left", "right"].indexOf(record.lock) > -1;
        });
      } else {
        ret = getChildren(children);
      }
      ret.forEach(function(child) {
        if (child.__normalized && isLock) {
          child.lock = child.lock || "left";
          delete child.__normalized;
        }
      });
      return ret;
    };
    LockTable2.prototype.splitFromNormalizeChildren = function splitFromNormalizeChildren(children) {
      var originChildren = deepCopy$1(children);
      var lockLeftChildren = deepCopy$1(children);
      var lockRightChildren = deepCopy$1(children);
      var loop = function loop2(lockChildren, condition) {
        var ret = [];
        lockChildren.forEach(function(child) {
          if (child.children) {
            var res = loop2(child.children, condition);
            if (!res.length) {
              ret.push(child);
            }
          } else {
            var order = condition(child);
            if (!order) {
              ret.push(child);
            }
          }
        });
        ret.forEach(function(res) {
          var index = lockChildren.indexOf(res);
          lockChildren.splice(index, 1);
        });
        return lockChildren;
      };
      loop(lockLeftChildren, function(child) {
        if (child.lock === true || child.lock === "left") {
          return "left";
        }
      });
      loop(lockRightChildren, function(child) {
        if (child.lock === "right") {
          return "right";
        }
      });
      loop(originChildren, function(child) {
        return child.lock !== true && child.lock !== "left" && child.lock !== "right";
      });
      return {
        lockLeftChildren,
        lockRightChildren,
        originChildren
      };
    };
    LockTable2.prototype.mergeFromSplitLockChildren = function mergeFromSplitLockChildren(splitChildren, prefix) {
      var lockLeftChildren = splitChildren.lockLeftChildren, lockRightChildren = splitChildren.lockRightChildren;
      var originChildren = splitChildren.originChildren;
      var flatenLeftChildren = this.getFlatenChildren(lockLeftChildren);
      var flatenRightChildren = this.getFlatenChildren(lockRightChildren);
      setStickyStyle(lockLeftChildren, flatenLeftChildren, "left", this.state.leftOffsetArr, prefix);
      setStickyStyle(lockRightChildren, flatenRightChildren, "right", this.state.rightOffsetArr, prefix);
      Array.prototype.unshift.apply(originChildren, lockLeftChildren);
      originChildren = originChildren.concat(lockRightChildren);
      return originChildren;
    };
    LockTable2.prototype.getCellNode = function getCellNode(index, i) {
      var table = this.tableInc;
      try {
        return findDOMNode(table.getCellRef(index, i));
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.getTableNode = function getTableNode() {
      var table = this.tableInc;
      try {
        return findDOMNode(table.tableEl);
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.getHeaderCellNode = function getHeaderCellNode(index, i) {
      var table = this.tableInc;
      try {
        return findDOMNode(table.getHeaderCellRef(index, i));
      } catch (error) {
        return null;
      }
    };
    LockTable2.prototype.render = function render() {
      var _classnames;
      var _props2 = this.props, children = _props2.children, columns = _props2.columns, prefix = _props2.prefix, components = _props2.components, className = _props2.className, dataSource = _props2.dataSource, others = _objectWithoutProperties(_props2, ["children", "columns", "prefix", "components", "className", "dataSource"]);
      var normalizedChildren = this.normalizeChildrenState(this.props);
      components = _extends({}, components);
      components.Body = components.Body || LockBody;
      components.Header = components.Header || LockHeader;
      components.Wrapper = components.Wrapper || FixedWrapper;
      components.Row = components.Row || LockRow;
      className = classnames((_classnames = {}, _classnames[prefix + "table-lock"] = true, _classnames[prefix + "table-wrap-empty"] = !dataSource.length, _classnames[className] = className, _classnames));
      return React.createElement(BaseComponent, _extends({}, others, {
        dataSource,
        columns: normalizedChildren,
        prefix,
        components,
        className
      }));
    };
    return LockTable2;
  }(React.Component), _class2.LockRow = LockRow, _class2.LockBody = LockBody, _class2.LockHeader = LockHeader, _class2.propTypes = _extends({
    scrollToCol: propTypes.number,
    scrollToRow: propTypes.number
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps), _class2.childContextTypes = {
    getTableInstance: propTypes.func,
    getLockNode: propTypes.func,
    onLockBodyScroll: propTypes.func
  }, _temp22);
  LockTable.displayName = "LockTable";
  statics(LockTable, BaseComponent);
  return LockTable;
}
function deepCopy$1(arr) {
  var copy = function copy2(arr2) {
    return arr2.map(function(item) {
      var newItem = _extends({}, item);
      if (item.children) {
        item.children = copy2(item.children);
      }
      return newItem;
    });
  };
  return copy(arr);
}
var _class$m, _temp$c;
var ListHeader = (_temp$c = _class$m = function(_React$Component) {
  _inherits(ListHeader2, _React$Component);
  function ListHeader2() {
    _classCallCheck(this, ListHeader2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  ListHeader2.prototype.render = function render() {
    return null;
  };
  return ListHeader2;
}(React.Component), _class$m.propTypes = {
  cell: propTypes.oneOfType([propTypes.element, propTypes.node, propTypes.func]),
  hasChildrenSelection: propTypes.bool,
  hasSelection: propTypes.bool,
  useFirstLevelDataWhenNoChildren: propTypes.bool
}, _class$m.defaultProps = {
  cell: function cell3() {
    return "";
  },
  hasSelection: true,
  hasChildrenSelection: false,
  useFirstLevelDataWhenNoChildren: false
}, _class$m._typeMark = "listHeader", _temp$c);
ListHeader.displayName = "ListHeader";
var _class$n, _temp$d;
var ListFooter = (_temp$d = _class$n = function(_React$Component) {
  _inherits(ListFooter2, _React$Component);
  function ListFooter2() {
    _classCallCheck(this, ListFooter2);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  ListFooter2.prototype.render = function render() {
    return null;
  };
  return ListFooter2;
}(React.Component), _class$n.propTypes = {
  cell: propTypes.oneOfType([propTypes.element, propTypes.node, propTypes.func])
}, _class$n.defaultProps = {
  cell: function cell4() {
    return "";
  }
}, _class$n._typeMark = "listFooter", _temp$d);
ListFooter.displayName = "ListFooter";
var _class$o, _temp$e;
var GroupListRow = (_temp$e = _class$o = function(_Row) {
  _inherits(GroupListRow2, _Row);
  function GroupListRow2() {
    _classCallCheck(this, GroupListRow2);
    return _possibleConstructorReturn(this, _Row.apply(this, arguments));
  }
  GroupListRow2.prototype.render = function render() {
    var _classnames;
    var _props = this.props, prefix = _props.prefix, className = _props.className, onClick = _props.onClick, onMouseEnter = _props.onMouseEnter, onMouseLeave = _props.onMouseLeave, columns = _props.columns, Cell2 = _props.Cell, rowIndex = _props.rowIndex, __rowIndex = _props.__rowIndex, record = _props.record, children = _props.children, primaryKey = _props.primaryKey, colGroup = _props.colGroup, cellRef = _props.cellRef, getCellProps = _props.getCellProps, locale = _props.locale, wrapper2 = _props.wrapper, rtl = _props.rtl, others = _objectWithoutProperties(_props, ["prefix", "className", "onClick", "onMouseEnter", "onMouseLeave", "columns", "Cell", "rowIndex", "__rowIndex", "record", "children", "primaryKey", "colGroup", "cellRef", "getCellProps", "locale", "wrapper", "rtl"]);
    var cls = classnames((_classnames = {}, _classnames[prefix + "table-row"] = true, _classnames[className] = className, _classnames));
    this.context.notRenderCellIndex = [];
    return React.createElement("table", _extends({
      className: cls,
      role: "row"
    }, others, {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }), colGroup, React.createElement("tbody", null, this.renderContent("header"), this.renderChildren(), this.renderContent("footer")));
  };
  GroupListRow2.prototype.isChildrenSelection = function isChildrenSelection() {
    return this.context.listHeader && this.context.listHeader.hasChildrenSelection;
  };
  GroupListRow2.prototype.isFirstLevelDataWhenNoChildren = function isFirstLevelDataWhenNoChildren() {
    return this.context.listHeader && this.context.listHeader.useFirstLevelDataWhenNoChildren;
  };
  GroupListRow2.prototype.isSelection = function isSelection() {
    return this.context.listHeader && this.context.listHeader.hasSelection;
  };
  GroupListRow2.prototype.renderChildren = function renderChildren() {
    var _this2 = this;
    var _props2 = this.props, record = _props2.record, primaryKey = _props2.primaryKey;
    var children = record.children;
    var toRenderList = children;
    if (this.isFirstLevelDataWhenNoChildren()) {
      log.warning("useFirstLevelDataWhenNoChildren is deprecated, change your dataSource structure, make sure there is 'children' in your dataSource.");
      toRenderList = children || [record];
    }
    if (toRenderList) {
      return toRenderList.map(function(child, index) {
        var cells = _this2.renderCells(child, index);
        if (_this2.isChildrenSelection()) {
          if (!child[primaryKey]) {
            log.warning("record.children/recored should contains primaryKey when childrenSelection is true.");
          }
          return React.createElement("tr", {key: child[primaryKey]}, cells);
        }
        if (_this2.context.rowSelection) {
          cells.shift();
          cells[0] = React.cloneElement(cells[0], _extends({
            colSpan: 2
          }, cells[0].props));
        }
        return React.createElement("tr", {key: index}, cells);
      });
    }
    return null;
  };
  GroupListRow2.prototype.renderContent = function renderContent(type2) {
    var _props3 = this.props, columns = _props3.columns, prefix = _props3.prefix, record = _props3.record, rowIndex = _props3.rowIndex;
    var cameType = type2.charAt(0).toUpperCase() + type2.substr(1);
    var list2 = this.context["list" + cameType];
    var listNode = void 0;
    if (list2) {
      if (React.isValidElement(list2.cell)) {
        listNode = React.cloneElement(list2.cell, {
          record,
          index: rowIndex
        });
      } else if (typeof list2.cell === "function") {
        listNode = list2.cell(record, rowIndex);
      }
      if (listNode) {
        var cells = this.renderCells(record);
        if (type2 === "header" && this.context.rowSelection && this.isSelection()) {
          cells = cells.slice(0, 1);
          cells.push(React.createElement("td", {colSpan: columns.length - 1, key: "listNode"}, React.createElement("div", {className: prefix + "table-cell-wrapper"}, listNode)));
          listNode = React.createElement("tr", {className: prefix + "table-group-" + type2}, cells);
        } else {
          listNode = React.createElement("tr", {className: prefix + "table-group-" + type2}, React.createElement("td", {colSpan: columns.length}, React.createElement("div", {className: prefix + "table-cell-wrapper"}, listNode)));
        }
      }
    }
    return listNode;
  };
  return GroupListRow2;
}(Row), _class$o.contextTypes = {
  listHeader: propTypes.any,
  listFooter: propTypes.any,
  rowSelection: propTypes.object,
  notRenderCellIndex: propTypes.array,
  lockType: propTypes.oneOf(["left", "right"])
}, _temp$e);
function ListBody(props) {
  return React.createElement(Body, _extends({component: "div"}, props));
}
function list(BaseComponent) {
  var _class2, _temp22;
  var ListTable = (_temp22 = _class2 = function(_React$Component) {
    _inherits(ListTable2, _React$Component);
    function ListTable2() {
      var _temp3, _this, _ret;
      _classCallCheck(this, ListTable2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp3), _possibleConstructorReturn(_this, _ret);
    }
    ListTable2.prototype.getChildContext = function getChildContext() {
      return {
        listHeader: this.listHeader,
        listFooter: this.listFooter,
        rowSelection: this.rowSelection
      };
    };
    ListTable2.prototype.normalizeDataSource = function normalizeDataSource(dataSource) {
      var ret = [];
      var loop = function loop2(dataSource2, level) {
        dataSource2.forEach(function(item) {
          item.__level = level;
          ret.push(item);
          if (item.children) {
            loop2(item.children, level + 1);
          }
        });
      };
      loop(dataSource, 0);
      this.ds = ret;
      return ret;
    };
    ListTable2.prototype.render = function render() {
      var _this2 = this;
      var _props = this.props, components = _props.components, children = _props.children, className = _props.className, prefix = _props.prefix, others = _objectWithoutProperties(_props, ["components", "children", "className", "prefix"]);
      var isList = false, ret = [];
      Children$1.forEach(children, function(child) {
        if (child) {
          if (["function", "object"].indexOf(_typeof(child.type)) > -1) {
            if (child.type._typeMark === "listHeader") {
              _this2.listHeader = child.props;
              isList = true;
            } else if (child.type._typeMark === "listFooter") {
              _this2.listFooter = child.props;
            } else {
              ret.push(child);
            }
          } else {
            ret.push(child);
          }
        }
      });
      this.rowSelection = this.props.rowSelection;
      if (isList) {
        var _classnames;
        components = _extends({}, components);
        components.Row = components.Row || GroupListRow;
        components.Body = components.Body || ListBody;
        components.Header = components.Header || FixedHeader;
        components.Wrapper = components.Wrapper || FixedWrapper;
        className = classnames((_classnames = {}, _classnames[prefix + "table-group"] = true, _classnames[className] = className, _classnames));
      }
      return React.createElement(BaseComponent, _extends({}, others, {
        components,
        children: ret.length > 0 ? ret : void 0,
        className,
        prefix
      }));
    };
    return ListTable2;
  }(React.Component), _class2.ListHeader = ListHeader, _class2.ListFooter = ListFooter, _class2.ListRow = GroupListRow, _class2.ListBody = ListBody, _class2.propTypes = _extends({}, BaseComponent.propTypes), _class2.defaultProps = _extends({}, BaseComponent.defaultProps), _class2.childContextTypes = {
    listHeader: propTypes.any,
    listFooter: propTypes.any,
    rowSelection: propTypes.object
  }, _temp22);
  ListTable.displayName = "ListTable";
  statics(ListTable, BaseComponent);
  return ListTable;
}
var _class$p, _temp2$a;
var StickHeader = (_temp2$a = _class$p = function(_React$Component) {
  _inherits(StickHeader2, _React$Component);
  function StickHeader2() {
    var _temp3, _this, _ret;
    _classCallCheck(this, StickHeader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getAffixRef = function(ref) {
      _this.props.affixRef && _this.props.affixRef(ref);
    }, _temp3), _possibleConstructorReturn(_this, _ret);
  }
  StickHeader2.prototype.render = function render() {
    var _classnames;
    var prefix = this.props.prefix;
    var _context = this.context, Header2 = _context.Header, offsetTop = _context.offsetTop, affixProps = _context.affixProps;
    var newAffixProps = affixProps || {};
    var className = newAffixProps.className, others = _objectWithoutProperties(newAffixProps, ["className"]);
    var cls = classnames((_classnames = {}, _classnames[prefix + "table-affix"] = true, _classnames.className = className, _classnames));
    return React.createElement(NextAffix, _extends({
      ref: this.getAffixRef
    }, others, {
      className: cls,
      offsetTop
    }), React.createElement(Header2, this.props));
  };
  return StickHeader2;
}(React.Component), _class$p.propTypes = {
  prefix: propTypes.string
}, _class$p.contextTypes = {
  Header: propTypes.any,
  offsetTop: propTypes.number,
  affixProps: propTypes.object
}, _temp2$a);
StickHeader.displayName = "StickHeader";
function sticky(BaseComponent) {
  var _class2, _temp22;
  var StickyTable = (_temp22 = _class2 = function(_React$Component) {
    _inherits(StickyTable2, _React$Component);
    function StickyTable2() {
      var _temp3, _this, _ret;
      _classCallCheck(this, StickyTable2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp3 = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp3), _possibleConstructorReturn(_this, _ret);
    }
    StickyTable2.prototype.getChildContext = function getChildContext() {
      return {
        Header: this.props.components.Header || FixedHeader,
        offsetTop: this.props.offsetTop,
        affixProps: this.props.affixProps
      };
    };
    StickyTable2.prototype.render = function render() {
      var _props = this.props, stickyHeader = _props.stickyHeader, offsetTop = _props.offsetTop, affixProps = _props.affixProps, others = _objectWithoutProperties(_props, ["stickyHeader", "offsetTop", "affixProps"]);
      var _props2 = this.props, components = _props2.components, maxBodyHeight = _props2.maxBodyHeight, fixedHeader = _props2.fixedHeader;
      if (stickyHeader) {
        components = _extends({}, components);
        components.Header = StickHeader;
        fixedHeader = true;
        maxBodyHeight = Math.max(maxBodyHeight, 1e4);
      }
      return React.createElement(BaseComponent, _extends({}, others, {
        components,
        fixedHeader,
        maxBodyHeight
      }));
    };
    return StickyTable2;
  }(React.Component), _class2.StickyHeader = StickHeader, _class2.propTypes = _extends({
    stickyHeader: propTypes.bool,
    offsetTop: propTypes.number,
    affixProps: propTypes.object,
    components: propTypes.object
  }, BaseComponent.propTypes), _class2.defaultProps = _extends({
    components: {}
  }, BaseComponent.defaultProps), _class2.childContextTypes = {
    Header: propTypes.any,
    offsetTop: propTypes.number,
    affixProps: propTypes.object
  }, _temp22);
  StickyTable.displayName = "StickyTable";
  statics(StickyTable, BaseComponent);
  return StickyTable;
}
var ieVersion$1 = env.ieVersion;
var ORDER_LIST = [fixed, lock, selection, expanded, tree, virtual, list, sticky];
var Table$1 = ORDER_LIST.reduce(function(ret, current) {
  ret = current(ret);
  return ret;
}, Base);
lock._typeMark = "lock";
expanded._typeMark = "expanded";
var StickyLockTable = ORDER_LIST.reduce(function(ret, current) {
  var newLock = !ieVersion$1;
  if (current._typeMark === "lock") {
    ret = newLock ? stickyLock(ret) : lock(ret);
  } else if (current._typeMark === "expanded") {
    ret = newLock ? expanded(ret, true) : expanded(ret);
  } else {
    ret = current(ret);
  }
  return ret;
}, Base);
Table$1.Base = Base;
Table$1.fixed = fixed;
Table$1.lock = lock;
Table$1.selection = selection;
Table$1.expanded = expanded;
Table$1.tree = tree;
Table$1.virtual = virtual;
Table$1.list = list;
Table$1.sticky = sticky;
Table$1.GroupHeader = ListHeader;
Table$1.GroupFooter = ListFooter;
Table$1.StickyLock = StickyLockTable;
var NextTable = NextConfigProvider.config(Table$1, {
  componentName: "Table",
  transform: function transform(props, deprecated) {
    if ("expandedRowKeys" in props) {
      deprecated("expandedRowKeys", "openRowKeys", "Table");
      var _props = props, expandedRowKeys = _props.expandedRowKeys, others = _objectWithoutProperties(_props, ["expandedRowKeys"]);
      props = _extends({openRowKeys: expandedRowKeys}, others);
    }
    if ("onExpandedChange" in props) {
      deprecated("onExpandedChange", "onRowOpen", "Table");
      var _props2 = props, onExpandedChange = _props2.onExpandedChange, _others = _objectWithoutProperties(_props2, ["onExpandedChange"]);
      props = _extends({onRowOpen: onExpandedChange}, _others);
    }
    if ("isLoading" in props) {
      deprecated("isLoading", "loading", "Table");
      var _props3 = props, isLoading = _props3.isLoading, _others2 = _objectWithoutProperties(_props3, ["isLoading"]);
      props = _extends({loading: isLoading}, _others2);
    }
    if ("indentSize" in props) {
      deprecated("indentSize", "indent", "Table");
      var _props4 = props, indentSize = _props4.indentSize, _others3 = _objectWithoutProperties(_props4, ["indentSize"]);
      props = _extends({indent: indentSize}, _others3);
    }
    if ("optimization" in props) {
      deprecated("optimization", "pure", "Table");
      var _props5 = props, optimization = _props5.optimization, _others4 = _objectWithoutProperties(_props5, ["optimization"]);
      props = _extends({pure: optimization}, _others4);
    }
    if ("getRowClassName" in props) {
      deprecated("getRowClassName", "getRowProps", "Table");
      var _props6 = props, getRowClassName = _props6.getRowClassName, getRowProps = _props6.getRowProps, _others5 = _objectWithoutProperties(_props6, ["getRowClassName", "getRowProps"]);
      if (getRowClassName) {
        var newGetRowProps = function newGetRowProps2() {
          return _extends({
            className: getRowClassName.apply(void 0, arguments)
          }, getRowProps ? getRowProps.apply(void 0, arguments) : {});
        };
        props = _extends({getRowProps: newGetRowProps}, _others5);
      } else {
        props = _extends({getRowProps}, _others5);
      }
    }
    if ("getRowProps" in props) {
      deprecated("getRowProps", "rowProps", "Table in 1.15.0");
      var _props7 = props, _getRowProps = _props7.getRowProps, _others6 = _objectWithoutProperties(_props7, ["getRowProps"]);
      props = _extends({rowProps: _getRowProps}, _others6);
    }
    if ("getCellProps" in props) {
      deprecated("getCellProps", "cellProps", "Table in 1.15.0");
      var _props8 = props, getCellProps = _props8.getCellProps, _others7 = _objectWithoutProperties(_props8, ["getCellProps"]);
      props = _extends({cellProps: getCellProps}, _others7);
    }
    return props;
  }
});
const Table$2 = ({
  hasBorder = false,
  rowSelection,
  className,
  ...restProps
}) => {
  return /* @__PURE__ */ React.createElement(NextTable, {
    hasBorder,
    rowSelection,
    className: classnames(className, {
      ["with-row-select"]: !!rowSelection
    }),
    ...restProps
  });
};
hoistNonReactStatics_cjs(Table$2, NextTable);
const exported = Table$2;
export {exported as e};

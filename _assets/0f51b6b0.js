import {p as polyfill, i as func, o as obj, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, g as _extends, K as KEYCODE, R as React, m as Children, d as classnames, B as NextSelect, C as Component, h as propTypes, l as isValidElement, W as cloneElement, k as _objectWithoutProperties, N as NextConfigProvider, O as HOC, c as createElement} from "./index.7e05a4b9.js";
import {N as NextTree, n as normalizeToArray, g as getAllCheckedKeys, f as filterParentKey, a as filterChildKey, i as isDescendantOrSelf, l as lodash_clonedeep} from "./3ce59856.js";
import {H as He} from "./af117473.js";
var _class, _temp;
var noop = function noop2() {
};
var TreeNode = NextTree.Node;
var bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
var flatDataSource = function flatDataSource2(props) {
  var _k2n = {};
  var _p2n = {};
  var _v2n = {};
  if ("dataSource" in props) {
    var loop = function loop2(data) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
      return data.map(function(item, index) {
        var value = item.value, children = item.children;
        var pos = prefix + "-" + index;
        var key = item.key || pos;
        var newItem = _extends({}, item, {key, pos});
        if (children && children.length) {
          newItem.children = loop2(children, pos);
        }
        _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
        return newItem;
      });
    };
    try {
      loop(props.dataSource);
    } catch (err) {
      if ((err.message || "").match("object is not extensible")) {
        loop(lodash_clonedeep(props.dataSource));
      } else {
        throw err;
      }
    }
  } else if ("children" in props) {
    var _loop = function _loop2(children) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
      return Children.map(children, function(node, index) {
        if (!React.isValidElement(node)) {
          return;
        }
        var _node$props = node.props, value = _node$props.value, children2 = _node$props.children;
        var pos = prefix + "-" + index;
        var key = node.key || pos;
        var newItem = _extends({}, node.props, {key, pos});
        if (children2 && Children.count(children2)) {
          newItem.children = _loop2(children2, pos);
        }
        _k2n[key] = _p2n[pos] = _v2n[value] = newItem;
        return newItem;
      });
    };
    _loop(props.children);
  }
  return {_k2n, _p2n, _v2n};
};
var isSearched = function isSearched2(label, searchedValue) {
  var labelString = "";
  searchedValue = String(searchedValue);
  var loop = function loop2(arg) {
    if (isValidElement(arg) && arg.props.children) {
      Children.forEach(arg.props.children, loop2);
    } else {
      labelString += arg;
    }
  };
  loop(label);
  if (labelString.length >= searchedValue.length && labelString.indexOf(searchedValue) > -1) {
    return true;
  }
  return false;
};
var getSearchKeys = function getSearchKeys2(searchedValue, _k2n, _p2n) {
  var searchedKeys = [];
  var retainedKeys = [];
  Object.keys(_k2n).forEach(function(k) {
    var _k2n$k = _k2n[k], label = _k2n$k.label, pos = _k2n$k.pos;
    if (isSearched(label, searchedValue)) {
      searchedKeys.push(k);
      var posArr = pos.split("-");
      posArr.forEach(function(n, i) {
        if (i > 0) {
          var p = posArr.slice(0, i + 1).join("-");
          var kk = _p2n[p].key;
          if (retainedKeys.indexOf(kk) === -1) {
            retainedKeys.push(kk);
          }
        }
      });
    }
  });
  return {searchedKeys, retainedKeys};
};
var TreeSelect = (_temp = _class = function(_Component) {
  _inherits(TreeSelect2, _Component);
  function TreeSelect2(props, context) {
    _classCallCheck(this, TreeSelect2);
    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
    var defaultVisible = props.defaultVisible, visible = props.visible, defaultValue = props.defaultValue, value = props.value;
    _this.state = _extends({
      visible: typeof visible === "undefined" ? defaultVisible : visible,
      value: normalizeToArray(typeof value === "undefined" ? defaultValue : value),
      searchedValue: "",
      expandedKeys: [],
      searchedKeys: [],
      retainedKeys: [],
      autoExpandParent: false
    }, flatDataSource(props));
    bindCtx(_this, ["handleSelect", "handleCheck", "handleSearch", "handleSearchClear", "handleVisibleChange", "handleChange", "handleRemove", "handleExpand", "handleKeyDown", "saveTreeRef", "saveSelectRef"]);
    return _this;
  }
  TreeSelect2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var st = {};
    if ("value" in props) {
      st.value = normalizeToArray(props.value);
    }
    if ("visible" in props) {
      st.visible = props.visible;
    }
    var _flatDataSource = flatDataSource(props), _k2n = _flatDataSource._k2n, _p2n = _flatDataSource._p2n, _v2n = _flatDataSource._v2n;
    if (props.showSearch && state.searchedValue) {
      var _getSearchKeys = getSearchKeys(state.searchedValue, _k2n, _p2n), searchedKeys = _getSearchKeys.searchedKeys, retainedKeys = _getSearchKeys.retainedKeys;
      st.searchedKeys = searchedKeys;
      st.retainedKeys = retainedKeys;
    }
    return _extends({}, st, {
      _k2n,
      _p2n,
      _v2n
    });
  };
  TreeSelect2.prototype.getKeysByValue = function getKeysByValue(value) {
    var _this2 = this;
    return value.reduce(function(ret, v) {
      var k = _this2.state._v2n[v] && _this2.state._v2n[v].key;
      if (k) {
        ret.push(k);
      }
      return ret;
    }, []);
  };
  TreeSelect2.prototype.getValueByKeys = function getValueByKeys(keys) {
    var _this3 = this;
    return keys.map(function(k) {
      return _this3.state._k2n[k].value;
    });
  };
  TreeSelect2.prototype.getValueForSelect = function getValueForSelect(value) {
    var treeCheckedStrategy = this.props.treeCheckedStrategy;
    var keys = this.getKeysByValue(value);
    keys = getAllCheckedKeys(keys, this.state._k2n, this.state._p2n);
    switch (treeCheckedStrategy) {
      case "parent":
        keys = filterChildKey(keys, this.state._k2n, this.state._p2n);
        break;
      case "child":
        keys = filterParentKey(keys, this.state._k2n, this.state._p2n);
        break;
    }
    return this.getValueByKeys(keys);
  };
  TreeSelect2.prototype.getData = function getData(value, forSelect) {
    var _this4 = this;
    return value.reduce(function(ret, v) {
      var k = _this4.state._v2n[v] && _this4.state._v2n[v].key;
      if (k) {
        var _state$_k2n$k = _this4.state._k2n[k], label = _state$_k2n$k.label, pos = _state$_k2n$k.pos, disabled = _state$_k2n$k.disabled, checkboxDisabled = _state$_k2n$k.checkboxDisabled;
        var d = {
          value: v,
          label,
          pos
        };
        if (forSelect) {
          d.disabled = disabled || checkboxDisabled;
        } else {
          d.key = k;
        }
        ret.push(d);
      }
      return ret;
    }, []);
  };
  TreeSelect2.prototype.saveTreeRef = function saveTreeRef(ref) {
    this.tree = ref;
  };
  TreeSelect2.prototype.saveSelectRef = function saveSelectRef(ref) {
    this.select = ref;
  };
  TreeSelect2.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
    if (!("visible" in this.props)) {
      this.setState({
        visible
      });
    }
    if (["fromTree", "keyboard"].indexOf(type) !== -1 && !visible) {
      this.select.focusInput();
    }
    this.props.onVisibleChange(visible, type);
  };
  TreeSelect2.prototype.handleSelect = function handleSelect(selectedKeys, extra) {
    var _props = this.props, multiple = _props.multiple, onChange = _props.onChange;
    var selected = extra.selected;
    if (multiple || selected) {
      var value = this.getValueByKeys(selectedKeys);
      if (!("value" in this.props)) {
        this.setState({
          value
        });
      }
      if (!multiple) {
        this.handleVisibleChange(false, "fromTree");
      }
      var data = this.getData(value);
      multiple ? onChange(value, data) : onChange(value[0], data[0]);
    } else {
      this.handleVisibleChange(false, "fromTree");
    }
  };
  TreeSelect2.prototype.handleCheck = function handleCheck(checkedKeys) {
    var onChange = this.props.onChange;
    var value = this.getValueByKeys(checkedKeys);
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
    onChange(value, this.getData(value));
  };
  TreeSelect2.prototype.handleRemove = function handleRemove(removedItem) {
    var _this5 = this;
    var removedValue = removedItem.value;
    var _props2 = this.props, treeCheckable = _props2.treeCheckable, treeCheckStrictly = _props2.treeCheckStrictly, treeCheckedStrategy = _props2.treeCheckedStrategy, onChange = _props2.onChange;
    var value = void 0;
    if (treeCheckable && !treeCheckStrictly && ["parent", "all"].indexOf(treeCheckedStrategy) !== -1) {
      var removedPos = this.state._v2n[removedValue].pos;
      value = this.state.value.filter(function(v) {
        var p = _this5.state._v2n[v].pos;
        return !isDescendantOrSelf(removedPos, p);
      });
      var nums = removedPos.split("-");
      for (var i = nums.length; i > 2; i--) {
        var parentPos = nums.slice(0, i - 1).join("-");
        var parentValue = this.state._p2n[parentPos].value;
        var parentIndex = value.indexOf(parentValue);
        if (parentIndex > -1) {
          value.splice(parentIndex, 1);
        } else {
          break;
        }
      }
    } else {
      value = this.state.value.filter(function(v) {
        return v !== removedValue;
      });
    }
    if (!("value" in this.props)) {
      this.setState({
        value
      });
    }
    var data = this.getData(value);
    onChange(value, data);
  };
  TreeSelect2.prototype.handleSearch = function handleSearch(searchedValue) {
    var _state = this.state, _k2n = _state._k2n, _p2n = _state._p2n;
    var _getSearchKeys2 = getSearchKeys(searchedValue, _k2n, _p2n), searchedKeys = _getSearchKeys2.searchedKeys, retainedKeys = _getSearchKeys2.retainedKeys;
    this.setState({
      searchedValue,
      expandedKeys: searchedKeys,
      searchedKeys,
      retainedKeys,
      autoExpandParent: true
    });
    this.props.onSearch(searchedValue);
  };
  TreeSelect2.prototype.handleSearchClear = function handleSearchClear(triggerType) {
    this.setState({
      searchedValue: "",
      expandedKeys: []
    });
    this.props.onSearchClear(triggerType);
  };
  TreeSelect2.prototype.handleExpand = function handleExpand(expandedKeys) {
    this.setState({
      expandedKeys,
      autoExpandParent: false
    });
  };
  TreeSelect2.prototype.handleKeyDown = function handleKeyDown(e) {
    var onKeyDown = this.props.onKeyDown;
    var visible = this.state.visible;
    if (onKeyDown) {
      onKeyDown(e);
    }
    if (!visible) {
      return;
    }
    switch (e.keyCode) {
      case KEYCODE.UP:
      case KEYCODE.DOWN:
        this.tree.setFocusKey();
        e.preventDefault();
        break;
    }
  };
  TreeSelect2.prototype.handleChange = function handleChange() {
    var _props3 = this.props, hasClear = _props3.hasClear, multiple = _props3.multiple, treeCheckable = _props3.treeCheckable;
    if (hasClear && (!multiple || !treeCheckable)) {
      if (!("value" in this.props)) {
        this.setState({
          value: []
        });
      }
      this.props.onChange(null, null);
    }
  };
  TreeSelect2.prototype.isSearched = function isSearched3(label, searchedValue) {
    var labelString = "";
    searchedValue = String(searchedValue);
    var loop = function loop2(arg) {
      if (isValidElement(arg) && arg.props.children) {
        Children.forEach(arg.props.children, loop2);
      } else {
        labelString += arg;
      }
    };
    loop(label);
    if (labelString.length >= searchedValue.length && labelString.indexOf(searchedValue) > -1) {
      return true;
    }
    return false;
  };
  TreeSelect2.prototype.searchNodes = function searchNodes(children) {
    var _state2 = this.state, searchedKeys = _state2.searchedKeys, retainedKeys = _state2.retainedKeys;
    var loop = function loop2(children2) {
      var retainedNodes = [];
      Children.forEach(children2, function(child) {
        if (searchedKeys.indexOf(child.key) > -1) {
          retainedNodes.push(child);
        } else if (retainedKeys.indexOf(child.key) > -1) {
          var retainedNode = child.props.children ? cloneElement(child, {}, loop2(child.props.children)) : child;
          retainedNodes.push(retainedNode);
        } else {
          var hideNode = cloneElement(child, {
            style: {display: "none"}
          });
          retainedNodes.push(hideNode);
        }
      });
      return retainedNodes;
    };
    return loop(children);
  };
  TreeSelect2.prototype.createNodesByData = function createNodesByData(data, searching) {
    var _this6 = this;
    var _props4 = this.props, treeProps = _props4.treeProps, useVirtual = _props4.useVirtual;
    var _state3 = this.state, searchedKeys = _state3.searchedKeys, retainedKeys = _state3.retainedKeys;
    var virtual = "useVirtual" in this.props ? useVirtual : treeProps && treeProps.useVirtual;
    var loop = function loop2(data2, isParentMatched) {
      var prefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
      var retainedNodes = [];
      data2.forEach(function(item, index) {
        var children = item.children, others = _objectWithoutProperties(item, ["children"]);
        var pos = prefix + "-" + index;
        var key = _this6.state._p2n[pos].key;
        var addNode = function addNode2(isParentMatched2, hide) {
          if (hide) {
            others.style = {display: "none"};
          }
          (!hide || !virtual) && retainedNodes.push(React.createElement(TreeNode, _extends({}, others, {key}), children && children.length ? loop2(children, isParentMatched2, pos) : null));
        };
        if (searching) {
          if (searchedKeys.indexOf(key) > -1 || isParentMatched) {
            addNode(true);
          } else if (retainedKeys.indexOf(key) > -1) {
            addNode(false);
          } else {
            addNode(false, true);
          }
        } else {
          addNode();
        }
      });
      return retainedNodes;
    };
    return loop(data, false);
  };
  TreeSelect2.prototype.renderPopupContent = function renderPopupContent() {
    var prefix = this.props.prefix;
    var treeSelectPrefix = prefix + "tree-select-";
    if (!this.state.visible) {
      return React.createElement("div", {className: treeSelectPrefix + "dropdown"});
    }
    var _props5 = this.props, multiple = _props5.multiple, treeCheckable = _props5.treeCheckable, treeCheckStrictly = _props5.treeCheckStrictly, treeCheckedStrategy = _props5.treeCheckedStrategy, treeDefaultExpandAll = _props5.treeDefaultExpandAll, treeDefaultExpandedKeys = _props5.treeDefaultExpandedKeys, treeLoadData = _props5.treeLoadData, _props5$treeProps = _props5.treeProps, customTreeProps = _props5$treeProps === void 0 ? {} : _props5$treeProps, showSearch = _props5.showSearch, dataSource = _props5.dataSource, children = _props5.children, readOnly = _props5.readOnly, notFoundContent = _props5.notFoundContent, useVirtual = _props5.useVirtual;
    var _state4 = this.state, value = _state4.value, searchedValue = _state4.searchedValue, expandedKeys = _state4.expandedKeys, autoExpandParent = _state4.autoExpandParent, searchedKeys = _state4.searchedKeys;
    var treeProps = {
      multiple,
      ref: this.saveTreeRef,
      loadData: treeLoadData,
      defaultExpandAll: treeDefaultExpandAll,
      defaultExpandedKeys: treeDefaultExpandedKeys,
      useVirtual
    };
    if (useVirtual) {
      customTreeProps.style = _extends({
        maxHeight: "260px",
        overflow: "auto"
      }, customTreeProps.style);
    }
    var keys = this.getKeysByValue(value);
    if (treeCheckable) {
      treeProps.checkable = treeCheckable;
      treeProps.checkStrictly = treeCheckStrictly;
      treeProps.checkedStrategy = treeCheckStrictly ? "all" : treeCheckedStrategy;
      treeProps.checkedKeys = keys;
      if (!readOnly) {
        treeProps.onCheck = this.handleCheck;
      }
    } else {
      treeProps.selectedKeys = keys;
      if (!readOnly) {
        treeProps.onSelect = this.handleSelect;
      }
    }
    var notFound = false;
    var newChildren = void 0;
    if (showSearch && searchedValue) {
      treeProps.expandedKeys = expandedKeys;
      treeProps.autoExpandParent = autoExpandParent;
      treeProps.onExpand = this.handleExpand;
      treeProps.filterTreeNode = function(node) {
        return searchedKeys.indexOf(node.props.eventKey) > -1;
      };
      if (searchedKeys.length) {
        newChildren = dataSource ? this.createNodesByData(dataSource, true) : this.searchNodes(children);
      } else {
        notFound = true;
      }
    } else {
      if (dataSource) {
        if (dataSource.length) {
          newChildren = this.createNodesByData(dataSource);
        } else {
          notFound = true;
        }
      } else {
        if (Children.count(children)) {
          newChildren = children;
        } else {
          notFound = true;
        }
      }
    }
    var contentClass = treeSelectPrefix + "dropdown-content";
    return React.createElement("div", {className: treeSelectPrefix + "dropdown"}, notFound ? React.createElement("div", {className: treeSelectPrefix + "not-found " + contentClass}, notFoundContent) : React.createElement(NextTree, _extends({}, treeProps, customTreeProps, {className: contentClass}), newChildren));
  };
  TreeSelect2.prototype.renderPreview = function renderPreview(data, others) {
    var _props6 = this.props, prefix = _props6.prefix, className = _props6.className, renderPreview2 = _props6.renderPreview;
    var previewCls = classnames(className, prefix + "form-preview");
    var items = data;
    if (data && !Array.isArray(data)) {
      items = [data];
    }
    if (typeof renderPreview2 === "function") {
      return React.createElement("div", _extends({}, others, {className: previewCls}), renderPreview2(items, this.props));
    }
    return React.createElement("p", _extends({}, others, {className: previewCls}), items.map(function(_ref) {
      var label = _ref.label;
      return label;
    }).join(", "));
  };
  TreeSelect2.prototype.render = function render() {
    var _props7 = this.props, prefix = _props7.prefix, size = _props7.size, placeholder = _props7.placeholder, disabled = _props7.disabled, hasArrow = _props7.hasArrow, hasBorder = _props7.hasBorder, hasClear = _props7.hasClear, label = _props7.label, readOnly = _props7.readOnly, autoWidth = _props7.autoWidth, popupStyle = _props7.popupStyle, popupClassName = _props7.popupClassName, showSearch = _props7.showSearch, multiple = _props7.multiple, treeCheckable = _props7.treeCheckable, treeCheckStrictly = _props7.treeCheckStrictly, className = _props7.className, popupContainer = _props7.popupContainer, popupProps = _props7.popupProps, followTrigger = _props7.followTrigger, isPreview = _props7.isPreview;
    var others = pickOthers(Object.keys(TreeSelect2.propTypes), this.props);
    var _state5 = this.state, value = _state5.value, visible = _state5.visible;
    var valueForSelect = treeCheckable && !treeCheckStrictly ? this.getValueForSelect(value) : value;
    var data = this.getData(valueForSelect, true);
    if (!multiple && !treeCheckable) {
      data = data[0];
    }
    if (isPreview) {
      return this.renderPreview(data, others);
    }
    return React.createElement(NextSelect, _extends({
      prefix,
      className,
      size,
      hasBorder,
      hasArrow,
      hasClear,
      placeholder,
      disabled,
      autoWidth,
      label,
      readOnly,
      ref: this.saveSelectRef,
      mode: treeCheckable || multiple ? "multiple" : "single",
      value: data,
      onRemove: this.handleRemove,
      onChange: this.handleChange,
      visible,
      onVisibleChange: this.handleVisibleChange,
      showSearch,
      onSearch: this.handleSearch,
      onSearchClear: this.handleSearchClear,
      onKeyDown: this.handleKeyDown,
      popupContent: this.renderPopupContent(),
      popupContainer,
      popupStyle,
      popupClassName,
      popupProps,
      followTrigger
    }, others));
  };
  return TreeSelect2;
}(Component), _class.propTypes = {
  prefix: propTypes.string,
  pure: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  size: propTypes.oneOf(["small", "medium", "large"]),
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  hasArrow: propTypes.bool,
  hasBorder: propTypes.bool,
  hasClear: propTypes.bool,
  label: propTypes.node,
  readOnly: propTypes.bool,
  autoWidth: propTypes.bool,
  dataSource: propTypes.arrayOf(propTypes.object),
  value: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  onChange: propTypes.func,
  showSearch: propTypes.bool,
  onSearch: propTypes.func,
  onSearchClear: propTypes.func,
  notFoundContent: propTypes.node,
  multiple: propTypes.bool,
  treeCheckable: propTypes.bool,
  treeCheckStrictly: propTypes.bool,
  treeCheckedStrategy: propTypes.oneOf(["all", "parent", "child"]),
  treeDefaultExpandAll: propTypes.bool,
  treeDefaultExpandedKeys: propTypes.arrayOf(propTypes.string),
  treeLoadData: propTypes.func,
  treeProps: propTypes.object,
  defaultVisible: propTypes.bool,
  visible: propTypes.bool,
  onVisibleChange: propTypes.func,
  popupStyle: propTypes.object,
  popupClassName: propTypes.string,
  popupContainer: propTypes.any,
  popupProps: propTypes.object,
  followTrigger: propTypes.bool,
  isPreview: propTypes.bool,
  renderPreview: propTypes.func,
  useVirtual: propTypes.bool
}, _class.defaultProps = {
  prefix: "next-",
  pure: false,
  size: "medium",
  disabled: false,
  hasArrow: true,
  hasBorder: true,
  hasClear: false,
  autoWidth: true,
  defaultValue: null,
  onChange: noop,
  showSearch: false,
  onSearch: noop,
  onSearchClear: noop,
  notFoundContent: "Not Found",
  multiple: false,
  treeCheckable: false,
  treeCheckStrictly: false,
  treeCheckedStrategy: "parent",
  treeDefaultExpandAll: false,
  treeDefaultExpandedKeys: [],
  treeProps: {},
  defaultVisible: false,
  onVisibleChange: noop,
  useVirtual: false
}, _temp);
TreeSelect.displayName = "TreeSelect";
TreeSelect.Node = TreeNode;
var TreeSelect$1 = polyfill(TreeSelect);
var NextTreeSelect = NextConfigProvider.config(TreeSelect$1, {
  transform: function transform(props, deprecated) {
    if ("shape" in props) {
      deprecated("shape", "hasBorder", "TreeSelect");
      var _props = props, shape = _props.shape, others = _objectWithoutProperties(_props, ["shape"]);
      props = _extends({hasBorder: shape !== "arrow-only"}, others);
    }
    if ("container" in props) {
      deprecated("container", "popupContainer", "TreeSelect");
      var _props2 = props, container = _props2.container, _others = _objectWithoutProperties(_props2, ["container"]);
      props = _extends({popupContainer: container}, _others);
    }
    return props;
  }
});
var TreeSelect$2 = HOC(NextTreeSelect);
const TreeNode$1 = TreeSelect$2.Node;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data) {
    console.log(value, data);
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("span", {
      id: "a11y-tree-select"
    }, "TreeSelect: "), /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      "aria-labelledby": "a11y-tree-select",
      onChange: this.handleChange,
      style: {width: 200}
    }, /* @__PURE__ */ createElement(TreeNode$1, {
      key: "1",
      value: "1",
      label: "Component"
    }, /* @__PURE__ */ createElement(TreeNode$1, {
      key: "2",
      value: "2",
      label: "Form"
    }, /* @__PURE__ */ createElement(TreeNode$1, {
      key: "4",
      value: "4",
      label: "Input"
    }), /* @__PURE__ */ createElement(TreeNode$1, {
      key: "5",
      value: "5",
      label: "Select",
      disabled: true
    })), /* @__PURE__ */ createElement(TreeNode$1, {
      key: "3",
      value: "3",
      label: "Display"
    }, /* @__PURE__ */ createElement(TreeNode$1, {
      key: "6",
      value: "6",
      label: "Table"
    })))));
  }
}
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const TreeNode$2 = TreeSelect$2.Node;
class Demo$1 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data) {
    console.log(value, data);
  }
  render() {
    return /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      onChange: this.handleChange,
      style: {width: 200}
    }, /* @__PURE__ */ createElement(TreeNode$2, {
      key: "1",
      value: "1",
      label: "Component"
    }, /* @__PURE__ */ createElement(TreeNode$2, {
      key: "2",
      value: "2",
      label: "Form"
    }, /* @__PURE__ */ createElement(TreeNode$2, {
      key: "4",
      value: "4",
      label: "Input"
    }), /* @__PURE__ */ createElement(TreeNode$2, {
      key: "5",
      value: "5",
      label: "Select",
      disabled: true
    })), /* @__PURE__ */ createElement(TreeNode$2, {
      key: "3",
      value: "3",
      label: "Display"
    }, /* @__PURE__ */ createElement(TreeNode$2, {
      key: "6",
      value: "6",
      label: "Table"
    }))));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Demo$1, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const treeData = [
  {
    label: "Component",
    value: "1",
    children: [
      {
        label: "Form",
        value: "2",
        children: [
          {
            label: "Input",
            value: "4"
          },
          {
            label: "Select",
            value: "5"
          }
        ]
      },
      {
        label: "Display",
        value: "3",
        children: [
          {
            label: "Table",
            value: "6"
          }
        ]
      }
    ]
  }
];
class Demo$2 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data) {
    console.log(value, data);
  }
  render() {
    return /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      treeCheckable: true,
      dataSource: treeData,
      onChange: this.handleChange,
      style: {width: 200}
    });
  }
}
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo$2, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const treeData$1 = [
  {
    label: "Component",
    value: "1",
    children: [
      {
        label: "Form",
        value: "2",
        children: [
          {
            label: "Input",
            value: "4"
          },
          {
            label: "Select",
            value: "5"
          }
        ]
      },
      {
        label: "Display",
        value: "3",
        children: [
          {
            label: "Table",
            value: "6"
          }
        ]
      }
    ]
  }
];
class Demo$3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["4", "6"]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data) {
    console.log(value, data);
    this.setState({
      value
    });
  }
  render() {
    return /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      treeCheckable: true,
      dataSource: treeData$1,
      value: this.state.value,
      onChange: this.handleChange,
      style: {width: 200}
    });
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo$3, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const treeData$2 = [
  {
    label: "Component",
    value: "1",
    children: [
      {
        label: "Form",
        value: "2",
        children: [
          {
            label: "Input",
            value: "4"
          },
          {
            label: "Select",
            value: "5",
            disabled: true
          }
        ]
      },
      {
        label: "Display",
        value: "3",
        children: [
          {
            label: "Table",
            value: "6"
          }
        ]
      }
    ]
  }
];
class Demo$4 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data) {
    console.log(value, data);
  }
  render() {
    return /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      dataSource: treeData$2,
      onChange: this.handleChange,
      style: {width: 200}
    });
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Demo$4, null));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const defaultTreeData = [
  {
    label: "浙江",
    value: "浙江",
    children: [
      {
        label: "绍兴",
        value: "绍兴"
      }
    ]
  }
];
class Demo$5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["浙江"],
      treeData: defaultTreeData
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(searchVal, data) {
    clearTimeout(this.timeId);
    if (searchVal) {
      this.timeId = setTimeout(() => {
        this.setState({
          treeData: [
            {
              label: searchVal,
              value: searchVal
            }
          ]
        });
      }, 500);
    } else {
      this.setState({
        treeData: defaultTreeData
      });
    }
  }
  render() {
    return /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      showSearch: true,
      onSearch: this.handleSearch,
      dataSource: this.state.treeData,
      style: {width: 200}
    });
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Demo$5, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const treeData$3 = [
  {
    label: "Component",
    value: "1",
    selectable: false,
    children: [
      {
        label: "Form",
        value: "2",
        children: [
          {
            label: "Input",
            value: "4"
          },
          {
            label: "Select",
            value: "5",
            disabled: true
          }
        ]
      },
      {
        label: "Display",
        value: "3",
        children: [
          {
            label: "Table",
            value: "6"
          }
        ]
      }
    ]
  }
];
class Demo$6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["4", "6"]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, data) {
    console.log(value, data);
  }
  render() {
    return /* @__PURE__ */ createElement(TreeSelect$2, {
      treeDefaultExpandAll: true,
      showSearch: true,
      dataSource: treeData$3,
      onChange: this.handleChange,
      style: {width: 200}
    });
  }
}
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(Demo$6, null));
}
const Style$6 = He.div``;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const modules = {};
modules["_accessibility"] = m0;
modules["_basic"] = m1;
modules["_check"] = m2;
modules["_control"] = m3;
modules["_data"] = m4;
modules["_pro-search"] = m5;
modules["_search"] = m6;
export default modules;
